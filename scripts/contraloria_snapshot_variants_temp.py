import json,re,requests
from pathlib import Path

UA='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36'
H={'User-Agent':UA}
S=requests.Session(); S.headers.update(H)
OUT=Path('output_variants'); OUT.mkdir(exist_ok=True)
SNAPS=['20230511225928','20230530180557','20231030214258','20231206112622','20240620192122','20250529230602']
CODES=['417','473','482','501','695','696','822','372','238','135','100','106','109']
base='https://convocatorias.contraloria.gob.pe/solucionarios.html'
allv={c:{} for c in CODES}
pat=re.compile(r'https://doc\.contraloria\.gob\.pe/[^\s\"\'<>]+?\.pdf(?:\?[^\s\"\'<>]*)?',re.I)
for ts in SNAPS:
    u=f'https://web.archive.org/web/{ts}id_/{base}'
    r=S.get(u,timeout=(20,180)); r.raise_for_status(); text=r.text
    urls=list(dict.fromkeys(pat.findall(text)))
    print(ts,len(urls),flush=True)
    for c in CODES:
        hits=[]
        for x in urls:
            fn=x.rsplit('/',1)[-1]
            if re.search(rf'(?<!\d)0*{int(c)}(?!\d)',fn): hits.append(x)
        allv[c][ts]=hits
(OUT/'snapshot_variants.json').write_text(json.dumps(allv,indent=2,ensure_ascii=False),encoding='utf-8')
for c in CODES:
    print('\nCODE',c)
    seen=[]
    for ts in SNAPS:
        for u in allv[c][ts]:
            if u not in seen: seen.append(u)
    for u in seen: print(u)
