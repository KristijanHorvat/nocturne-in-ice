// Loads the case scripts in a bare VM and checks typed pages: line widths and the hidden messages.
const fs = require('fs'), vm = require('vm'), path = require('path');
const ctx = { window: {}, document: { body: null, addEventListener() {}, getElementById() { return 1; } }, console };
ctx.window.document = ctx.document; vm.createContext(ctx);
const files = ['art-core','art-portraits','art-scene','art-salon','art-misc','art-paper','art-title','i18n-en','i18n-hr','case-meta','docs-kit',
  ...fs.readdirSync(path.join(__dirname,'../js')).filter(f=>/^docs-[a-d]\d-(en|hr)\.js$/.test(f)).map(f=>f.replace('.js',''))];
for (const f of files) vm.runInContext(fs.readFileSync(path.join(__dirname,'../js',f+'.js'),'utf8').replace(/window\./g,'window.'), ctx, {filename:f});
const C = ctx.window.CASE;
let bad = 0;
for (const lang of ['en','hr']) {
  C.lang = lang;
  for (const id of ['A9','B4','B6']) {
    C.render(id);
    const p = C.typedPages[lang+':'+id];
    const src = C.docs[lang][id].toString();
    const lines = [...p.svg.matchAll(/<text x="(\d+)" y="(\d+)" textLength="(\d+)"/g)].map(m=>({x:+m[1],y:+m[2],w:+m[3]}));
    const over = lines.filter(l=>l.x+l.w>640), rows = lines.map(l=>(l.y-150)/22);
    if (over.length) { bad++; console.log(lang,id,'OVERFLOW', over); }
    console.log(lang, id, 'rows', Math.min(...rows)+'-'+Math.max(...rows), 'maxright', Math.max(...lines.map(l=>l.x+l.w)), 'holes', p.holes.length);
  }
  const a9 = C.typedPages[lang+':A9'];
  const text = C.docs[lang].A9.toString();
  const marks = [...text.matchAll(/\[([^\]]+)\]/g)].map(m=>m[1]);
  console.log(lang, 'hidden:', marks.join(' '));
}
console.log(bad ? 'PROBLEMS' : 'typed pages OK');
