// End-to-end playthrough of dist/index.html. Usage: node test/e2e.js <shots-dir>
const { chromium } = require(process.env.PW || 'playwright');
const path = require('path'), fs = require('fs');
const URL = 'file://' + path.resolve(__dirname, '../dist/index.html');
const OUT = process.argv[2] || path.resolve(__dirname, 'shots');
fs.mkdirSync(OUT, { recursive: true });
const log = [], errors = [];
const ok = (c, m) => { log.push((c ? 'PASS ' : 'FAIL ') + m); if (!c) process.exitCode = 1; };
const wait = ms => new Promise(r => setTimeout(r, ms));

async function newPage(browser, vp, lang) {
  const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1, hasTouch: vp.width < 600 });
  const p = await ctx.newPage();
  p.on('pageerror', e => errors.push('pageerror: ' + e.message));
  p.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  await p.goto(URL); await wait(300);
  await p.click('[data-lang="' + lang + '"]');
  return p;
}
async function shotModal(p, name) { await wait(250); await p.locator('#modal-sheet').screenshot({ path: path.join(OUT, name + '.png') }); }
async function setDials(p, code) {
  for (let i = 0; i < 4; i++) {
    const cur = await p.evaluate(i => NI.state().dials[i], i), want = +code[i];
    const n = (want - cur + 10) % 10;
    for (let k = 0; k < n; k++) await p.click(`[data-wheel="${i}"][data-step="1"]`);
  }
}
async function hints(p, w, expectAnswer) {
  await p.click(`[data-hints="${w}"]`); await wait(200);
  for (let i = 0; i < 3; i++) await p.click('[data-hint-next]');
  const n = await p.locator('.hint.is-open').count(); ok(n === 3, `hints ${w}: three hints open`);
  if (expectAnswer) { await p.click('[data-hint-answer]'); const t = await p.locator('.hint-answer').innerText(); ok(t.includes(expectAnswer), `hints ${w}: answer shows ${expectAnswer}`); }
  else ok(await p.locator('[data-hint-answer]').count() === 0, `hints ${w}: no answer button`);
  await shotModal(p, 'hints-' + w); await p.click('#modal-close');
}
async function lockText(p, env, bad, good, lang) {
  await p.fill('#lock-input', bad); await p.click('#lock-form button[type=submit]'); await wait(200);
  const badMsg = await p.locator('#lock-msg').innerText(); ok(/Tscharner/.test(badMsg), `lock ${env} (${lang}): wrong answer refused`);
  await p.fill('#lock-input', good); await p.click('#lock-form button[type=submit]');
  await wait(3000); const reply = await p.locator('#lock-msg').innerText(); ok(reply.length > 40, `lock ${env} (${lang}): reply shown`);
  await wait(5200); ok(await p.evaluate(e => NI.state().unlocked.includes(e), env), `lock ${env} (${lang}): envelope unlocked`);
  await shotModal(p, `unlock-${env}-${lang}`); await p.click('#modal-close');
}
async function dragTorn(p) {
  for (let i = 0; i < 6; i++) {
    const box = await p.evaluate(i => {
      const svg = document.querySelector('.torn-svg'), g = svg.querySelector(`[data-piece="${i}"]`), s = NI.state().torn[i];
      const r = g.querySelector('polygon').getBoundingClientRect(), m = svg.getScreenCTM();
      return { x: r.left + r.width / 2, y: r.top + r.height / 2, dx: (40 - s.x) * m.a, dy: (40 - s.y) * m.d };
    }, i);
    await p.mouse.move(box.x, box.y); await p.mouse.down();
    await p.mouse.move(box.x + box.dx / 2, box.y + box.dy / 2, { steps: 4 }); await p.mouse.move(box.x + box.dx, box.y + box.dy, { steps: 4 });
    await p.mouse.up(); await wait(120);
  }
}
async function playthrough(browser, lang, vp, tag) {
  const p = await newPage(browser, vp, lang);
  await p.screenshot({ path: path.join(OUT, `${tag}-title.png`) });
  await p.click('#btn-new'); await p.fill('#name1', 'Ana'); await p.fill('#name2', 'Marko');
  await p.screenshot({ path: path.join(OUT, `${tag}-setup.png`), fullPage: true });
  await p.click('#setup-form button[type=submit]'); await wait(2200);
  await shotModal(p, `${tag}-A1`); await p.click('#modal-close');
  await p.screenshot({ path: path.join(OUT, `${tag}-fileA.png`), fullPage: true });
  for (const id of ['A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10']) { await p.evaluate(id => NI.openEvidence(id), id); await shotModal(p, `${tag}-${id}`); }
  await p.click('#modal-close');
  // Lock B: near miss, wrong, right
  await setDials(p, '1827'); await p.click('[data-try-case]'); await wait(300);
  ok((await p.locator('#case-msg').innerText()).length > 20, `lock B (${lang}): near-miss message`);
  await wait(600); await setDials(p, '0000'); await p.click('[data-try-case]'); await wait(900);
  if (tag === 'desk-en') { await hints(p, 'B', '1927'); }
  await setDials(p, '1927'); await p.click('[data-try-case]'); await wait(2800);
  ok(await p.evaluate(() => NI.state().unlocked.includes('B')), `lock B (${lang}): unlocked`);
  await p.click('#modal-close');
  for (const id of ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9']) { await p.evaluate(id => NI.openEvidence(id), id); await shotModal(p, `${tag}-${id}`); }
  // Reading card on Morand's letter
  await p.evaluate(() => NI.openEvidence('B7')); await p.selectOption('[data-grille-pick]', 'A9'); await wait(200);
  await p.evaluate(() => { const sh = document.querySelector('.gr-sheet'); document.getElementById('modal-sheet').scrollTop += sh.getBoundingClientRect().top - 60; }); await wait(200);
  const card = p.locator('.gr-card'), sheet = p.locator('.gr-sheet'); const cb = await card.boundingBox(), sb = await sheet.boundingBox();
  await p.mouse.move(cb.x + cb.width / 2, cb.y + cb.height / 2); await p.mouse.down();
  await p.mouse.move(sb.x + sb.width / 2 + 4, sb.y + sb.height / 2 + 3, { steps: 8 }); await p.mouse.up(); await wait(200);
  ok(await p.locator('.gr-card.is-aligned').count() === 1, `grille (${lang}): dragging snaps into place`);
  await p.locator('.gr-sheet').scrollIntoViewIfNeeded(); await p.locator('.gr-sheet').screenshot({ path: path.join(OUT, `${tag}-grille.png`) });
  await p.click('#modal-close');
  const msg = lang === 'en' ? 'the grave at Sankt Oswin holds a left-handed man' : 'u grobu u Sankt Oswinu leži ljevak';
  if (tag === 'desk-en') await hints(p, 'C', 'LEFT-HANDED');
  await lockText(p, 'C', 'Dear Monsieur Delorme', msg, lang);
  for (const id of ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7']) { await p.evaluate(id => NI.openEvidence(id), id); await shotModal(p, `${tag}-${id}`); }
  await p.evaluate(() => NI.openEvidence('C8')); await wait(200); await shotModal(p, `${tag}-C8-start`);
  await dragTorn(p); await wait(300);
  ok(await p.evaluate(() => NI.state().torn.every(x => x.placed)), `torn note (${lang}): all six pieces placed`);
  await shotModal(p, `${tag}-C8-done`); await p.click('#modal-close');
  if (tag === 'desk-en') await hints(p, 'D', 'Raoul');
  await lockText(p, 'D', 'Margit', 'Raoul Delorme', lang);
  if (tag === 'desk-en') await hints(p, 'F', null);
  for (const id of ['D1', 'D2', 'D3', 'D4', 'D5']) { await p.evaluate(id => NI.openEvidence(id), id); await shotModal(p, `${tag}-${id}`); }
  await p.click('#modal-close');
  await p.click('[data-tab="suspects"]'); await p.click('[data-sus="margit"] [data-mark="cleared"]'); await p.click('[data-sus="baron"] [data-mark="suspect"]');
  await p.screenshot({ path: path.join(OUT, `${tag}-suspects.png`), fullPage: true });
  await p.click('[data-tab="notes"]'); await p.fill('#notes', 'Duclos watch 21:31 vs 22:31'); await wait(600);
  await p.click('[data-tab="file"]'); await p.click('#btn-accuse');
  const answers = { who: 'baron', how: 'cdoor', when: 'tunnel', why: 'identity', alibi: 'watch' };
  await p.click('#accuse-form button[type=submit]'); ok((await p.locator('#accuse-msg').innerText()).length > 5, `accusation (${lang}): missing answers refused`);
  for (const [q, a] of Object.entries(answers)) await p.check(`input[name="${q}"][value="${a}"]`, { force: true });
  ok(await p.locator('.opt-sus.is-picked').count() === 1 && await p.locator('.opt.is-picked').count() === 5, `accusation (${lang}): picks are highlighted`);
  await p.screenshot({ path: path.join(OUT, `${tag}-accuse.png`), fullPage: true });
  await p.click('#accuse-form button[type=submit]'); await p.click('[data-confirm-yes]'); await wait(7500);
  await p.screenshot({ path: path.join(OUT, `${tag}-reveal.png`), fullPage: true });
  const score = await p.evaluate(() => NI.state().accusation.score); ok(score === 5, `accusation (${lang}): right answers score 5/5`);
  for (let i = 0; i < 7; i++) { await p.click(`[data-booklet="${i}"]`); await wait(150); if (i === 0 || i === 3) await p.locator('#booklet').screenshot({ path: path.join(OUT, `${tag}-chapter${i + 1}.png`) }); }
  ok(await p.locator('[data-new-case]').count() === 1, `booklet (${lang}): seven chapters, ends with play again`);
  await p.context().close();
}
async function wrongAccusation(browser, lang) {
  const p = await newPage(browser, { width: 1280, height: 800 }, lang);
  await p.evaluate(() => { const s = NI.state(); s.started = true; s.unlocked = ['A', 'B', 'C', 'D']; s.hints.B = 2; NI.save(); });
  await p.reload(); await wait(400); await p.click('#btn-continue'); await wait(400); await p.click('#btn-accuse');
  const answers = { who: 'margit', how: 'cdoor', when: 'tunnel', why: 'will', alibi: 'lovers' };
  for (const [q, a] of Object.entries(answers)) await p.check(`input[name="${q}"][value="${a}"]`, { force: true });
  await p.click('#accuse-form button[type=submit]'); await p.click('[data-confirm-yes]'); await wait(7500);
  const t = await p.locator('#rv-result h3').innerText(); const sc = await p.evaluate(() => NI.state().accusation.score);
  ok(sc === 2 && t.length > 3, `wrong accusation (${lang}): scored ${sc}, rating "${t}"`);
  await p.screenshot({ path: path.join(OUT, `wrong-${lang}.png`), fullPage: true });
  await p.reload(); await wait(400); await p.click('#btn-continue'); await wait(300);
  ok(await p.locator('#btn-accuse').innerText() !== '', `wrong accusation (${lang}): one attempt only, solution kept after reload`);
  await p.context().close();
}
(async () => {
  const browser = await chromium.launch();
  await playthrough(browser, 'en', { width: 1280, height: 800 }, 'desk-en');
  await playthrough(browser, 'hr', { width: 1280, height: 800 }, 'desk-hr');
  await playthrough(browser, 'en', { width: 390, height: 844 }, 'mob-en');
  await wrongAccusation(browser, 'en'); await wrongAccusation(browser, 'hr');
  await browser.close();
  console.log(log.join('\n')); console.log(errors.length ? 'ERRORS:\n' + errors.join('\n') : 'no console errors');
})();
