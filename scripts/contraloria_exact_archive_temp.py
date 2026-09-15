import json, hashlib
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
import requests
from pypdf import PdfReader

UA='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36'
CDX='https://web.archive.org/cdx/search/cdx'
OUT=Path('output_exact_archive'); OUT.mkdir(exist_ok=True)
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

def valid(data,path):
    if len(data)<100: return None
    pos=data.find(b'%PDF')
    if pos<0 or pos>4096: return None
    if pos: data=data[pos:]
    path.write_bytes(data)
    try:
        n=len(PdfReader(str(path),strict=False).pages)
        if n<1: raise ValueError
        return n,data
    except Exception:
        path.unlink(missing_ok=True); return None

def work(item):
    order,url=item; s=requests.Session(); s.headers.update({'User-Agent':UA})
    info={'order':order,'url':url,'captures':[],'recovered':False}
    params=[('url',url),('output','json'),('fl','timestamp,original,statuscode,mimetype,digest,length'),('from','2022'),('to','2026'),('limit','500')]
    try:
        r=s.get(CDX,params=params,timeout=(20,90)); r.raise_for_status(); d=r.json(); caps=d[1:] if len(d)>1 else []
    except Exception as e:
        info['cdx_error']=repr(e); return info
    info['captures']=caps
    # Try every unique timestamp newest first, regardless original status/mimetype.
    for row in reversed(caps):
        ts=row[0]
        for mod in ('id_','if_'):
            wu=f'https://web.archive.org/web/{ts}{mod}/{url}'
            try:
                rr=s.get(wu,timeout=(20,120),allow_redirects=True); data=rr.content
                p=OUT/f'{order}.pdf'; got=valid(data,p) if rr.ok else None
                if got:
                    n,data2=got; info.update({'recovered':True,'wayback_timestamp':ts,'modifier':mod,'pages':n,'bytes':len(data2),'sha256':hashlib.sha256(data2).hexdigest(),'replay_url':wu}); return info
            except Exception as e:
                pass
    return info

results=[]
with ThreadPoolExecutor(max_workers=6) as ex:
    fs={ex.submit(work,x):x for x in FAILED}
    for f in as_completed(fs):
        r=f.result(); results.append(r); print(r['order'],'RECOVERED' if r['recovered'] else 'NOT_FOUND','captures',len(r.get('captures',[])),r.get('wayback_timestamp',''),flush=True)
results.sort(key=lambda x:x['order'])
(OUT/'exact_archive.json').write_text(json.dumps(results,indent=2,ensure_ascii=False),encoding='utf-8')
print('exact recovered',sum(r['recovered'] for r in results),'of',len(results),flush=True)
