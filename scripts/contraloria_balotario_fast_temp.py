import csv
import hashlib
import html as htmlmod
import json
import os
import re
import subprocess
import sys
import threading
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from urllib.parse import urljoin, urlparse, urlunparse

import requests
from bs4 import BeautifulSoup
from pypdf import PdfReader, PdfWriter

PAGE_URL = os.environ.get('PAGE_URL', 'https://convocatorias.contraloria.gob.pe/solucionarios.html')
OUT = Path('output_fast')
PDF_DIR = OUT / 'pdfs'
OUT.mkdir(exist_ok=True)
PDF_DIR.mkdir(exist_ok=True)
UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36'
BASE_HEADERS = {
    'User-Agent': UA,
    'Accept-Language': 'es-PE,es;q=0.9,en;q=0.7',
    'Referer': 'https://convocatorias.contraloria.gob.pe/',
}


def fetch_page(url):
    errors = []
    for attempt in range(1, 5):
        try:
            r = requests.get(url, headers={**BASE_HEADERS, 'Accept': 'text/html,application/xhtml+xml,*/*;q=0.8'}, timeout=45, allow_redirects=True)
            if r.ok and len(r.content) > 1000:
                return r.text, r.url
            errors.append(f'HTTP {r.status_code} bytes={len(r.content)}')
        except Exception as exc:
            errors.append(repr(exc))
        time.sleep(attempt)
    tmp = OUT / 'page_curl.html'
    subprocess.run(['curl','-L','--fail','--retry','4','--retry-all-errors','--connect-timeout','15','--max-time','90','-A',UA,'-o',str(tmp),url], check=True)
    return tmp.read_text('utf-8', errors='replace'), url


page_html, effective_page_url = fetch_page(PAGE_URL)
(OUT / 'page.html').write_text(page_html, encoding='utf-8')
soup = BeautifulSoup(page_html, 'html.parser')
seen = set()
candidates = []


def add_candidate(raw, context=''):
    if not raw:
        return
    raw = htmlmod.unescape(str(raw)).strip().strip('"\'')
    m = re.search(r'(?i)(https?://[^\s"\'<>]+?\.pdf(?:\?[^\s"\'<>]*)?|(?:\.{0,2}/|/)?[^\s"\'<>]+?\.pdf(?:\?[^\s"\'<>]*)?)', raw)
    if not m:
        return
    token = m.group(1).replace('\\/', '/')
    full = urljoin(effective_page_url, token)
    p = urlparse(full)
    full = urlunparse((p.scheme, p.netloc, p.path, p.params, p.query, ''))
    low = full.lower()
    if 'contraloria.gob.pe' not in p.netloc.lower() or '.pdf' not in low:
        return
    if not ('/solucionarios/' in low or 'solucionario' in low or (re.search(r'/cpm-[^/]+/', low) and '/dl728/' in low)):
        return
    if full not in seen:
        seen.add(full)
        candidates.append({'url': full, 'context': context})


for tag in soup.find_all(True):
    row = tag.find_parent('tr')
    context = ' '.join(row.stripped_strings) if row else ''
    for attr in ('href','src','data-href','data-url','onclick'):
        if tag.has_attr(attr):
            add_candidate(tag.get(attr), context)
for m in re.finditer(r'(?i)(https?://[^\s"\'<>]+?\.pdf(?:\?[^\s"\'<>]*)?|(?:\.{0,2}/|/)?[A-Za-z0-9_./%?=&+\-]+?\.pdf(?:\?[^\s"\'<>]*)?)', page_html):
    add_candidate(m.group(1), '')

if len(candidates) < 2:
    raise RuntimeError(f'Only {len(candidates)} PDF candidates found')
print(f'Found {len(candidates)} candidate PDF links', flush=True)


def alternate_urls(url):
    outs = [url]
    p = urlparse(url)
    if '/dl728/' in p.path:
        if p.netloc.lower().startswith('convocatorias.'):
            outs.append(urlunparse(('https','doc.contraloria.gob.pe',p.path,p.params,p.query,'')))
        elif p.netloc.lower().startswith('doc.'):
            outs.append(urlunparse(('https','convocatorias.contraloria.gob.pe',p.path,p.params,p.query,'')))
    if p.scheme == 'http':
        outs.append(urlunparse(('https',p.netloc,p.path,p.params,p.query,'')))
    return list(dict.fromkeys(outs))


def valid_pdf(data):
    return len(data) > 100 and data.lstrip().startswith(b'%PDF')

thread_local = threading.local()

def get_session():
    if not hasattr(thread_local, 'session'):
        s = requests.Session()
        s.headers.update({**BASE_HEADERS, 'Accept': 'application/pdf,application/octet-stream;q=0.9,*/*;q=0.8'})
        thread_local.session = s
    return thread_local.session


def download_worker(item):
    i, c = item
    dest = PDF_DIR / f'{i:05d}.pdf'
    errs = []
    session = get_session()
    for alt in alternate_urls(c['url']):
        for attempt in range(1, 3):
            try:
                r = session.get(alt, timeout=(15,45), allow_redirects=True)
                data = r.content
                if r.ok and valid_pdf(data):
                    dest.write_bytes(data)
                    return i, alt, len(data), '', dest
                errs.append(f'{alt} HTTP {r.status_code} bytes={len(data)} type={r.headers.get("content-type")}')
            except Exception as exc:
                errs.append(f'{alt} {exc!r}')
            time.sleep(0.35 * attempt)
    return i, '', 0, ' | '.join(errs[-6:]), dest

results = {}
with ThreadPoolExecutor(max_workers=12) as ex:
    futs = {ex.submit(download_worker, (i,c)): i for i,c in enumerate(candidates, 1)}
    completed = 0
    for fut in as_completed(futs):
        res = fut.result()
        results[res[0]] = res
        completed += 1
        if completed % 25 == 0 or completed == len(candidates):
            print(f'Downloaded/attempted {completed}/{len(candidates)}', flush=True)

# Retry failures sequentially with curl and longer timeouts.
def retry_slow(i, c, dest):
    errs = []
    for alt in alternate_urls(c['url']):
        tmp = dest.with_suffix('.part')
        cmd = ['curl','-L','--fail','--retry','4','--retry-all-errors','--connect-timeout','20','--max-time','150','-A',UA,'-e',PAGE_URL,'-o',str(tmp),alt]
        try:
            subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            data = tmp.read_bytes()
            if valid_pdf(data):
                tmp.replace(dest)
                return i, alt, len(data), '', dest
            errs.append(f'{alt} curl invalid bytes={len(data)}')
        except Exception as exc:
            errs.append(f'{alt} curl {exc!r}')
        finally:
            tmp.unlink(missing_ok=True)
    return i, '', 0, ' | '.join(errs[-4:]), dest

failed_indices = [i for i in range(1,len(candidates)+1) if results[i][3]]
print(f'Initial failures: {len(failed_indices)}', flush=True)
for n,i in enumerate(failed_indices,1):
    results[i] = retry_slow(i, candidates[i-1], PDF_DIR / f'{i:05d}.pdf')
    if n % 10 == 0 or n == len(failed_indices):
        print(f'Retried {n}/{len(failed_indices)} failures', flush=True)

rows=[]
unique_files=[]
hash_to_first={}
failed=[]
total_pages=0
for i,c in enumerate(candidates,1):
    _, final_url, size, err, dest = results[i]
    row={'order':i,'context':c.get('context',''),'listed_url':c['url'],'download_url':final_url,'status':'','bytes':size,'sha256':'','pages':'','duplicate_of':'','error':err}
    if err or not dest.exists():
        row['status']='FAILED'; failed.append(row); rows.append(row); continue
    data=dest.read_bytes(); digest=hashlib.sha256(data).hexdigest(); row['sha256']=digest
    if digest in hash_to_first:
        row['status']='DUPLICATE'; row['duplicate_of']=hash_to_first[digest]; dest.unlink(missing_ok=True); rows.append(row); continue
    try:
        pages=len(PdfReader(str(dest),strict=False).pages)
        if pages < 1: raise ValueError('zero pages')
    except Exception as exc:
        row['status']='FAILED_INVALID_PDF'; row['error']=repr(exc); failed.append(row); dest.unlink(missing_ok=True); rows.append(row); continue
    hash_to_first[digest]=i; row['status']='OK'; row['pages']=pages; total_pages += pages; unique_files.append(dest); rows.append(row)

with (OUT/'manifest.csv').open('w',newline='',encoding='utf-8-sig') as f:
    fn=['order','context','listed_url','download_url','status','bytes','sha256','pages','duplicate_of','error']
    w=csv.DictWriter(f,fieldnames=fn); w.writeheader(); w.writerows(rows)
(OUT/'failed.txt').write_text('\n'.join(f"{r['order']}\t{r['listed_url']}\t{r['error']}" for r in failed),encoding='utf-8')

merged=OUT/'BALOTARIO_UNICO_CONTRALORIA_COMPLETO.pdf'
merge_note=None
if unique_files:
    try:
        subprocess.run(['qpdf','--empty','--pages',*[str(p) for p in unique_files],'--',str(merged)],check=True)
    except Exception as exc:
        merge_note=f'qpdf failed {exc!r}; pypdf fallback'
        writer=PdfWriter()
        for p in unique_files: writer.append(str(p))
        with merged.open('wb') as f: writer.write(f)
        writer.close()

final_pages=0; final_bytes=0; final_sha=''; final_valid=False; final_error=''
if merged.exists():
    try:
        final_pages=len(PdfReader(str(merged),strict=False).pages)
        final_bytes=merged.stat().st_size
        final_sha=hashlib.sha256(merged.read_bytes()).hexdigest()
        final_valid=(final_pages==total_pages and final_pages>0)
        if not final_valid: final_error=f'page mismatch expected={total_pages} got={final_pages}'
    except Exception as exc:
        final_error=repr(exc)
summary={
    'page_url':PAGE_URL,'effective_page_url':effective_page_url,'candidate_links':len(candidates),
    'downloaded_ok':sum(r['status']=='OK' for r in rows),'duplicates_exact':sum(r['status']=='DUPLICATE' for r in rows),
    'failed':len(failed),'unique_pdfs_merged':len(unique_files),'source_pages_total':total_pages,
    'final_pages':final_pages,'final_bytes':final_bytes,'final_sha256':final_sha,'final_valid':final_valid,'final_error':final_error,'merge_note':merge_note,
}
(OUT/'summary.json').write_text(json.dumps(summary,indent=2,ensure_ascii=False),encoding='utf-8')
print(json.dumps(summary,indent=2,ensure_ascii=False),flush=True)
if failed or not final_valid:
    sys.exit(2)
