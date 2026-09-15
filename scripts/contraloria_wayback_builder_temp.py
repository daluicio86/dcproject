import csv
import hashlib
import json
import os
import re
import subprocess
import sys
import threading
import time
from collections import Counter
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

import requests
from bs4 import BeautifulSoup
from pypdf import PdfReader

LIVE_PAGE = 'https://convocatorias.contraloria.gob.pe/solucionarios.html'
CDX = 'https://web.archive.org/cdx/search/cdx'
OUT = Path('output_complete')
PDF_DIR = OUT / 'pdfs'
OUT.mkdir(exist_ok=True)
PDF_DIR.mkdir(exist_ok=True)
UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36'
HEADERS = {'User-Agent': UA, 'Accept-Language': 'es-PE,es;q=0.9,en;q=0.7'}


def get_latest_snapshot():
    params = [
        ('url', LIVE_PAGE), ('output', 'json'), ('fl', 'timestamp,original,statuscode,digest'),
        ('filter', 'statuscode:200'), ('filter', 'mimetype:text/html'), ('from', '2022'), ('to', '2026'),
        ('limit', '100'), ('collapse', 'digest'),
    ]
    r = requests.get(CDX, params=params, headers=HEADERS, timeout=(20, 90))
    r.raise_for_status()
    data = r.json()
    if len(data) < 2:
        raise RuntimeError('Wayback has no archived solucionarios page')
    rows = data[1:]
    ts = rows[-1][0]
    snap_url = f'https://web.archive.org/web/{ts}id_/{LIVE_PAGE}'
    r2 = requests.get(snap_url, headers=HEADERS, timeout=(20, 180))
    r2.raise_for_status()
    if len(r2.content) < 500_000:
        raise RuntimeError(f'Archived page unexpectedly small: {len(r2.content)} bytes')
    (OUT / 'snapshot.html').write_bytes(r2.content)
    (OUT / 'cdx.json').write_text(json.dumps(data, indent=2), encoding='utf-8')
    return ts, r2.text


def parse_urls(html):
    soup = BeautifulSoup(html, 'html.parser')
    urls = []
    for tag in soup.find_all(True):
        for attr in ('href', 'src', 'data', 'data-url', 'data-href'):
            val = tag.get(attr)
            if not val:
                continue
            s = str(val).strip()
            if '.pdf' in s.lower() and 'doc.contraloria.gob.pe/dl728/' in s.lower():
                m = re.search(r'https://doc\.contraloria\.gob\.pe/[^\s\"\'<>]+?\.pdf(?:\?[^\s\"\'<>]*)?', s, re.I)
                if m:
                    urls.append(m.group(0))
        onclick = tag.get('onclick')
        if onclick and '.pdf' in str(onclick).lower():
            for m in re.finditer(r'https://doc\.contraloria\.gob\.pe/[^\s\"\'<>]+?\.pdf(?:\?[^\s\"\'<>]*)?', str(onclick), re.I):
                urls.append(m.group(0))
    # Preserve page order and only remove repeated links to the exact same PDF.
    unique = list(dict.fromkeys(urls))
    if len(unique) < 1700:
        raise RuntimeError(f'Only {len(unique)} unique PDF links found; expected at least 1700')
    groups = Counter()
    for u in unique:
        m = re.search(r'/dl728/(\d{4})/(CPM-[^/]+)/', u, re.I)
        if m:
            groups[(m.group(1), m.group(2).upper())] += 1
    if len(groups) < 7:
        raise RuntimeError(f'Only {len(groups)} CPM groups found; expected at least 7')
    return unique, groups


thread_local = threading.local()

def session():
    if not hasattr(thread_local, 's'):
        s = requests.Session()
        s.headers.update({**HEADERS, 'Accept': 'application/pdf,application/octet-stream;q=0.9,*/*;q=0.7'})
        thread_local.s = s
    return thread_local.s


def valid_pdf_bytes(b):
    return len(b) > 100 and b.lstrip().startswith(b'%PDF')


def download_one(i, url, ts):
    dest = PDF_DIR / f'{i:05d}.pdf'
    errors = []
    sources = [url, f'https://web.archive.org/web/{ts}id_/{url}']
    for source in sources:
        for attempt in range(1, 4 if source == url else 3):
            try:
                r = session().get(source, timeout=(15, 90), allow_redirects=True)
                data = r.content
                if r.ok and valid_pdf_bytes(data):
                    dest.write_bytes(data)
                    try:
                        reader = PdfReader(str(dest), strict=False)
                        pages = len(reader.pages)
                        if pages < 1:
                            raise ValueError('zero pages')
                    except Exception as exc:
                        dest.unlink(missing_ok=True)
                        errors.append(f'{source}: PDF parse error {exc!r}')
                        break
                    return {
                        'order': i, 'url': url, 'source_used': source, 'status': 'OK',
                        'bytes': len(data), 'pages': pages,
                        'sha256': hashlib.sha256(data).hexdigest(), 'error': '', 'path': str(dest),
                    }
                errors.append(f'{source} attempt {attempt}: HTTP {r.status_code}, bytes={len(data)}, type={r.headers.get("content-type")}')
            except Exception as exc:
                errors.append(f'{source} attempt {attempt}: {exc!r}')
            time.sleep(min(0.5 * attempt, 1.5))
    return {
        'order': i, 'url': url, 'source_used': '', 'status': 'FAILED', 'bytes': 0,
        'pages': 0, 'sha256': '', 'error': ' | '.join(errors[-8:]), 'path': str(dest),
    }


def main():
    ts, html = get_latest_snapshot()
    urls, groups = parse_urls(html)
    (OUT / 'urls.txt').write_text('\n'.join(urls) + '\n', encoding='utf-8')
    print('Wayback timestamp:', ts, flush=True)
    print('Unique PDFs:', len(urls), flush=True)
    print('CPM groups:', dict(sorted(groups.items())), flush=True)

    rows = [None] * len(urls)
    max_workers = int(os.environ.get('DOWNLOAD_WORKERS', '24'))
    with ThreadPoolExecutor(max_workers=max_workers) as ex:
        futs = {ex.submit(download_one, i, u, ts): i for i, u in enumerate(urls, 1)}
        done = 0
        for fut in as_completed(futs):
            row = fut.result()
            rows[row['order'] - 1] = row
            done += 1
            if done % 50 == 0 or done == len(urls):
                failures = sum(1 for r in rows if r and r['status'] != 'OK')
                print(f'Progress {done}/{len(urls)}; failures so far={failures}', flush=True)

    failures = [r for r in rows if r['status'] != 'OK']
    with (OUT / 'manifest.csv').open('w', newline='', encoding='utf-8-sig') as f:
        fields = ['order', 'url', 'source_used', 'status', 'bytes', 'pages', 'sha256', 'error']
        w = csv.DictWriter(f, fieldnames=fields)
        w.writeheader()
        for r in rows:
            w.writerow({k: r[k] for k in fields})
    (OUT / 'failed.txt').write_text('\n'.join(f"{r['order']}\t{r['url']}\t{r['error']}" for r in failures), encoding='utf-8')

    source_pages = sum(r['pages'] for r in rows if r['status'] == 'OK')
    source_bytes = sum(r['bytes'] for r in rows if r['status'] == 'OK')
    summary = {
        'live_page': LIVE_PAGE,
        'wayback_timestamp': ts,
        'unique_pdf_links': len(urls),
        'cpm_groups': {f'{y}/{c}': n for (y,c), n in sorted(groups.items())},
        'downloaded_ok': len(urls) - len(failures),
        'failed': len(failures),
        'source_pages': source_pages,
        'source_bytes': source_bytes,
    }
    if failures:
        (OUT / 'summary.json').write_text(json.dumps(summary, indent=2, ensure_ascii=False), encoding='utf-8')
        print(json.dumps(summary, indent=2, ensure_ascii=False), flush=True)
        sys.exit(2)

    merged = OUT / 'BALOTARIO_UNICO_CONTRALORIA_COMPLETO.pdf'
    files = [r['path'] for r in rows]
    # qpdf concatenates pages without rasterizing or rebuilding page content.
    cmd = ['qpdf', '--empty', '--pages', *files, '--', str(merged)]
    subprocess.run(cmd, check=True)
    subprocess.run(['qpdf', '--check', str(merged)], check=True)

    final_reader = PdfReader(str(merged), strict=False)
    final_pages = len(final_reader.pages)
    if final_pages != source_pages:
        raise RuntimeError(f'Final page mismatch: expected {source_pages}, got {final_pages}')
    final_size = merged.stat().st_size
    with merged.open('rb') as fh:
        h = hashlib.sha256()
        for chunk in iter(lambda: fh.read(8 * 1024 * 1024), b''):
            h.update(chunk)
    summary.update({
        'final_pages': final_pages,
        'final_bytes': final_size,
        'final_sha256': h.hexdigest(),
        'final_valid': True,
    })
    (OUT / 'summary.json').write_text(json.dumps(summary, indent=2, ensure_ascii=False), encoding='utf-8')
    print(json.dumps(summary, indent=2, ensure_ascii=False), flush=True)


if __name__ == '__main__':
    main()
