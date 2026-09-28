// Renders the printable case file to A4 PDFs with headless Chromium. Usage: node print/make_pdfs.js
const { chromium } = require(process.env.PW || 'playwright');
const path = require('path'), fs = require('fs');
const HERE = __dirname, OUT = path.join(HERE, '..', 'dist', 'print');
const NAMES = {
  en: [['W', '0-Detective-worksheets.pdf', 'Worksheets'], ['A', '1-Envelope-A.pdf', 'Envelope A'], ['B', '2-Envelope-B-sealed.pdf', 'Envelope B'],
    ['C', '3-Envelope-C-sealed.pdf', 'Envelope C'], ['D', '4-Envelope-D-sealed.pdf', 'Envelope D']],
  hr: [['W', '0-Radni-listovi.pdf', 'Radni listovi'], ['A', '1-Omotnica-A.pdf', 'Omotnica A'], ['B', '2-Omotnica-B-zapecacena.pdf', 'Omotnica B'],
    ['C', '3-Omotnica-C-zapecacena.pdf', 'Omotnica C'], ['D', '4-Omotnica-D-zapecacena.pdf', 'Omotnica D']]
};
const FOOT = { en: ['Cantonal Police &middot; Sankt Oswin post &middot; Case 36/1218', 'Page', 'of'], hr: ['Kantonalna policija &middot; postaja Sankt Oswin &middot; Predmet 36/1218', 'Stranica', 'od'] };
(async () => {
  const browser = await chromium.launch(), page = await browser.newPage(), errors = [];
  page.on('pageerror', e => errors.push(String(e)));
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  for (const lang of ['en', 'hr']) {
    fs.mkdirSync(path.join(OUT, lang), { recursive: true });
    for (const [set, file, label] of NAMES[lang]) {
      await page.goto('file://' + path.join(HERE, 'print.html') + '?set=' + set + '&lang=' + lang);
      await page.waitForSelector('body[data-ready]', { state: 'attached', timeout: 30000 });
      const f = FOOT[lang];
      const footer = '<div style="width:100%;font-family:Georgia,serif;font-size:7pt;color:#8a7f70;padding:0 15mm;display:flex;justify-content:space-between;">' +
        `<span>${f[0]} &middot; ${label}</span><span>${f[1]} <span class="pageNumber"></span> ${f[2]} <span class="totalPages"></span></span></div>`;
      await page.pdf({ path: path.join(OUT, lang, file), format: 'A4', printBackground: true, displayHeaderFooter: true, headerTemplate: '<span></span>',
        footerTemplate: footer, margin: { top: '14mm', bottom: '16mm', left: '15mm', right: '15mm' } });
      console.log('wrote', lang + '/' + file);
    }
  }
  await browser.close();
  console.log(errors.length ? 'ERRORS:\n' + errors.join('\n') : 'no errors');
})();
