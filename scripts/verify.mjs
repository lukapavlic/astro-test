import { readdir, readFile, stat } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import assert from 'node:assert/strict';
const root=resolve('dist');
const base=(process.env.BASE_PATH||'').replace(/\/$/,'');
async function walk(dir){return(await Promise.all((await readdir(dir,{withFileTypes:true})).map(e=>e.isDirectory()?walk(join(dir,e.name)):join(dir,e.name)))).flat();}
const files=(await walk(root)).filter(f=>f.endsWith('.html'));
let links=0,languagePairs=0;
const failures=[];
const exists=async path=>{try{return await stat(path)}catch{return false}};
for(const file of files){
  const html=await readFile(file,'utf8');
  const relative=file.slice(root.length).replace(/index\.html$/,'');
  const lang=relative.startsWith('/sl/')?'sl':relative.startsWith('/en/')?'en':null;
  if(lang){
    assert.match(html,new RegExp(`<html lang="${lang}"`),`${relative}: correct language`);
    assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,`${relative}: one h1`);
    assert.match(html,/<title>[^<]+Agentic Lab<\/title>/,`${relative}: page title`);
    assert.match(html,/<meta name="description" content="[^"]+"/,`${relative}: description`);
    assert.match(html,/<main id="main"/,`${relative}: main landmark`);
    let previousLevel=0;
    for(const match of html.matchAll(/<h([1-6])(?:\s|>)/g)){
      const level=Number(match[1]);
      assert.ok(level<=previousLevel+1,`${relative}: heading level skips h${previousLevel} to h${level}`);
      previousLevel=level;
    }
    const counterpart=relative.replace(`/${lang}/`,lang==='sl'?'/en/':'/sl/');
    assert.ok(await exists(join(root,counterpart,'index.html')),`${relative}: translation exists`);
    assert.ok(html.includes(`href="${base}${counterpart}"`),`${relative}: equivalent language link`);
    languagePairs++;
    if(relative.endsWith('/people/')){
      assert.match(html,/person-default/,`${relative}: missing-photo fallback`);
      assert.match(html,/luka-pavlic\.jpg/,`${relative}: real portrait`);
      assert.match(html,/Tjan Kazar/,`${relative}: collaborators render with optional fields absent`);
    }
  }
  const ids=new Set([...html.matchAll(/\sid="([^"]+)"/g)].map(m=>m[1]));
  for(const match of html.matchAll(/\b(href|src)="([^"]+)"/g)){
    const url=match[2].replaceAll('&amp;','&');
    if(/^(https?:|mailto:|data:|tel:)/.test(url))continue;
    if(url.startsWith('#')){if(!ids.has(url.slice(1)))failures.push(`${relative}: missing anchor ${url}`);continue;}
    const pathname=decodeURIComponent(url.split(/[?#]/)[0]);
    if(!pathname)continue;
    if(base&&!pathname.startsWith(base+'/')){failures.push(`${relative}: unprefixed URL ${url}`);continue;}
    let target=resolve(root,'.'+(base?pathname.slice(base.length):pathname));
    if(!target.startsWith(root))throw new Error('Path leaves build directory');
    const info=await exists(target);
    if(info?.isDirectory())target=join(target,'index.html');
    if(!await exists(target))failures.push(`${relative}: broken ${match[1]} ${url}`);
    else if(url.includes('#') && target.endsWith('.html')) {
      const anchor=decodeURIComponent(url.split('#')[1]);
      const targetHTML=await readFile(target,'utf8');
      if(anchor&&!targetHTML.includes(`id="${anchor}"`))failures.push(`${relative}: broken cross-page anchor ${url}`);
    }
    links++;
  }
  for(const img of html.matchAll(/<img\b[^>]*>/g))assert.match(img[0],/\balt="[^"]*"/,`${relative}: image alt`);
}
assert.deepEqual(failures,[],'Broken internal links or assets');
assert.ok(languagePairs>=62,'Expected initial bilingual routes');
console.log(`PASS: ${files.length} HTML pages; ${languagePairs} translated routes; ${links} internal links/assets; page metadata, headings, image alternatives, people fallback and collaborator rendering.`);
