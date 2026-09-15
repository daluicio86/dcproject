import json, re, time, hashlib
from pathlib import Path
from urllib.parse import urlparse
import requests
from pypdf import PdfReader

UA='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36'
H={'User-Agent':UA,'Accept':'application/pdf,application/octet-stream;q=0.9,*/*;q=0.8'}
CDX='https://web.archive.org/cdx/search/cdx'
OUT=Path('output_recovery'); OUT.mkdir(exist_ok=True)
FAILED=[
(552,'https://doc.contraloria.gob.pe/dl728/2022/CPM-07-2022/solucionarios/CONOCIMIENTOS/COD_417-2022_APTITUD_CPM_07.pdf'),
(639,'https://doc.contraloria.gob.pe/dl728/2022/CPM-07-2022/solucionarios/COD_473-2022-CG.pdf'),
(653,'https://doc.contraloria.gob.pe/dl728/2022/CPM-07-2022/solucionarios/COD_482-632-2022-CG.pdf'),
(679,'https://doc.contraloria.gob.pe/dl728/2022/CPM-07-2022/solucionarios/COD_501-794-2022-CG.pdf'),
(864,'https://doc.contraloria.gob.pe/dl728/2022/CPM-07-2022/solucionarios/CONOCIMIENTOS/COD_695-2022_APTITUD_CPM_07.pdf'),
(866,'https://doc.contraloria.gob.pe/dl728/2022/CPM-07-2022/solucionarios/CONOCIMIENTOS/COD_696-2022_APTITUD_CPM_07.pdf'),
(952,'https://doc.contraloria.gob.pe/dl728/2022/CPM-07-2022/solucionarios/CONOCIMIENTOS/COD_822-2022_APTITUD_CPM_07.pdf'),
(1233,'https://doc.contraloria.gob.pe/dl728/2022/CPM-05-2022/solucionarios/CONOCIMIENTO/COD_372_CONOCIMIENTO_CPM_05.pdf'),
(1410,'https://doc.contraloria.gob.pe/dl728/2022/CPM-04-2022/solucionarios/APTITUD/COD_238_APTITUD_CPM_04.pdf'),
(1520,'https://doc.contraloria.gob.pe/dl728/2022/CPM-02-2022/solucionarios/APTITUD/COD_135_APTITUD_CPM_02.pdf'),
(1754,'https://doc.contraloria.gob.pe/dl728/2022/CPM-01-2022/solucionarios/APTITUD/COD_100_APTITUD_CPM_01.pdf'),
(1766,'https://doc.contraloria.gob.pe/dl728/2022/CPM-01-2022/solucionarios/APTITUD/COD_106_APTITUD_CPM_01.pdf'),
(1772,'https://doc.contraloria.gob.pe/dl728/2022/CPM-01-2022/solucionarios/APTITUD/COD_109_APTITUD_CPM_01.pdf'),
]
S=requests.Session(); S.headers.update(H)

def valid(data,path):
    if len(data)<100 or not data.lstrip().startswith(b'%PDF'): return None
    path.write_bytes(data)
    try:
        n=len(PdfReader(str(path),strict=False).pages)
        if n<1: raise ValueError('zero pages')
        return n
    except Exception:
        path.unlink(missing_ok=True); return None

def cdx(url):
    params=[('url',url),('output','json'),('fl','timestamp,original,statuscode,mimetype,digest,length'),('filter','statuscode:200'),('from','2022'),('to','2026'),('limit','200'),('collapse','digest')]
    try:
        r=S.get(CDX,params=params,timeout=(20,90)); r.raise_for_status(); d=r.json(); return d[1:] if len(d)>1 else []
    except Exception as e:
        return [{'cdx_error':repr(e)}]

def candidates(url):
    out=[url]
    if '/CONOCIMIENTOS/' in url and '_APTITUD_' in url:
        out += [url.replace('/CONOCIMIENTOS/','/APTITUD/'), url.replace('/CONOCIMIENTOS/','/')]
    # Common naming variants seen in adjacent rows.
    m=re.search(r'COD_(\d+)(?:-[\d-]+)?-2022-CG\.pdf$',url)
    if m and 'CPM-07-2022' in url:
        code=m.group(1); base=url.rsplit('/',1)[0]
        out += [f'{base}/CONOCIMIENTOS/COD_{code}-2022_CONOCIMIENTOS_CPM_07.pdf', f'{base}/CONOCIMIENTO/COD_{code}-2022_CONOCIMIENTO_CPM_07.pdf']
    return list(dict.fromkeys(out))

def page_snapshot_variants(code):
    snaps=['20230511225928','20230530180557','20231030214258','20231206112622','20240620192122','20250529230602']
    found=[]
    pat=re.compile(r'https://doc\.contraloria\.gob\.pe/[^\s\"\'<>]*COD_[^\s\"\'<>]*\.pdf',re.I)
    for ts in snaps:
        u=f'https://web.archive.org/web/{ts}id_/https://convocatorias.contraloria.gob.pe/solucionarios.html'
        try:
            text=S.get(u,timeout=(20,180)).text
            for x in pat.findall(text):
                if re.search(rf'COD_0*{int(code)}(?:\D|$)',x,re.I): found.append(x)
        except Exception: pass
    return list(dict.fromkeys(found))

results=[]
for order,url in FAILED:
    code=re.search(r'COD_(\d+)',url).group(1)
    info={'order':order,'listed_url':url,'attempts':[],'recovered':False}
    cand=candidates(url)+page_snapshot_variants(code)
    cand=list(dict.fromkeys(cand))
    print('\n',order,'candidate urls',len(cand),flush=True)
    for cu in cand:
        if info['recovered']: break
        # live candidate first
        try:
            r=S.get(cu,timeout=(15,60),allow_redirects=True); data=r.content
            att={'candidate':cu,'kind':'live','status':r.status_code,'bytes':len(data)}
            p=OUT/f'{order}.pdf'; n=valid(data,p) if r.ok else None
            att['pages']=n; info['attempts'].append(att)
            if n:
                info.update({'recovered':True,'source':cu,'source_kind':'live','pages':n,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()}); break
        except Exception as e: info['attempts'].append({'candidate':cu,'kind':'live','error':repr(e)})
        caps=cdx(cu)
        info['attempts'].append({'candidate':cu,'kind':'cdx','captures':caps[-10:] if caps and isinstance(caps[0],list) else caps})
        if caps and isinstance(caps[0],list):
            for row in reversed(caps):
                ts=row[0]; wu=f'https://web.archive.org/web/{ts}id_/{cu}'
                try:
                    rr=S.get(wu,timeout=(20,120),allow_redirects=True); data=rr.content
                    att={'candidate':cu,'kind':'wayback','timestamp':ts,'status':rr.status_code,'bytes':len(data)}
                    p=OUT/f'{order}.pdf'; n=valid(data,p) if rr.ok else None
                    att['pages']=n; info['attempts'].append(att)
                    if n:
                        info.update({'recovered':True,'source':cu,'source_kind':'wayback','wayback_timestamp':ts,'pages':n,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()}); break
                except Exception as e: info['attempts'].append({'candidate':cu,'kind':'wayback','timestamp':ts,'error':repr(e)})
            if info['recovered']: break
        time.sleep(.25)
    results.append(info)
    print('RECOVERED' if info['recovered'] else 'FAILED', info.get('source',''), info.get('pages',''), flush=True)
(OUT/'recovery.json').write_text(json.dumps(results,indent=2,ensure_ascii=False),encoding='utf-8')
(OUT/'recovery_map.json').write_text(json.dumps({str(r['order']):{k:r.get(k) for k in ('listed_url','source','source_kind','wayback_timestamp','pages','bytes','sha256')} for r in results if r['recovered']},indent=2,ensure_ascii=False),encoding='utf-8')
print('recovered',sum(r['recovered'] for r in results),'of',len(results),flush=True)
if sum(r['recovered'] for r in results)<len(results): raise SystemExit(2)
