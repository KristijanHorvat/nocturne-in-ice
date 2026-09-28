/* Nocturne in Ice: game engine, part 4. Suspects, notebook, accusation, reveal, menus and wiring. */
(function () {
  'use strict';
  var NI = window.NI, C = window.CASE, Art = window.Art, Snd = window.Sound;
  var $ = NI.$, $$ = NI.$$, S = NI.state, T = C.T, REDUCED = NI.REDUCED;

  /* Suspects board */
  NI.renderSuspects = function () {
    var marks = S().marks;
    $('#board').innerHTML = C.suspects.map(function (s) {
      var m = marks[s.id] || '';
      var b = function (k, label) { return '<button type="button" class="btn btn-small' + (m === k ? ' is-on' : '') + '" data-mark="' + k + '" aria-pressed="' + (m === k) + '">' + label + '</button>'; };
      return '<article class="sus' + (m ? ' is-' + m : '') + '" data-sus="' + s.id + '">' + Art.portrait(s.id) +
        '<div class="sus-body"><h3>' + s.name + '</h3><p>' + C.L(s.role) + ' · ' + C.L(s.comp) + '</p>' +
        '<div class="sus-actions" role="group" aria-label="' + T('verdictOn')(s.name) + '">' + b('suspect', T('suspicious')) + b('cleared', T('cleared')) + '</div>' +
        '<button type="button" class="link" data-dossier="' + s.id + '">' + T('readFile') + '</button></div>' +
        (m === 'cleared' ? '<span class="sus-stamp" aria-hidden="true">' + T('stampCleared') + '</span>' : '') + '</article>';
    }).join('');
  };
  function mark(id, k) { var st = S(); st.marks[id] = st.marks[id] === k ? '' : k; NI.save(); Snd.click(); NI.renderSuspects(); }
  function dossier(id) {
    var s = C.suspect(id), dOpen = S().unlocked.indexOf('D') > -1;
    NI.openModal('<article class="doc doc-dossier dos-one">' + Art.portrait(id) + '<div><h3>' + s.name + '</h3><p class="dos-role">' + C.L(s.role) + ', ' + s.age + '</p>' +
      C.kv([[T('from'), C.L(s.from)], [T('compartment'), C.L(s.comp)]], 'kv-tight') + '<p>' + C.L(s.about) + '</p>' +
      '<div class="dos-links"><button type="button" class="btn btn-small" data-open="A7" data-jump-after="A7-' + id + '">' + T('firstInt') + '</button>' +
      (dOpen ? '<button type="button" class="btn btn-small" data-open="D1" data-jump-after="D1-' + id + '">' + T('secondInt') + '</button>' : '') + '</div></div></article>');
  }
  var noteTimer;
  NI.renderNotes = function () { var ta = $('#notes'); if (document.activeElement !== ta) ta.value = S().notes || ''; };

  /* Accusation */
  function optLabel(q, id) { return q.type === 'suspect' ? C.suspect(id).name : C.L(q.options.filter(function (o) { return o.id === id; })[0].t); }
  NI.goAccuse = function () {
    NI.closeModal();
    var st = S();
    if (st.accusation) { NI.reveal(st.accusation.answers, true); return; }
    $('#accuse-form').innerHTML = C.accusation.map(function (q, n) {
      var opts = q.type === 'suspect' ? C.suspects.map(function (s) {
        return '<label class="opt opt-sus"><input type="radio" name="' + q.id + '" value="' + s.id + '">' + Art.portrait(s.id) + '<span>' + s.name + '</span></label>';
      }).join('') : q.options.map(function (o) {
        return '<label class="opt"><input type="radio" name="' + q.id + '" value="' + o.id + '"><span>' + C.L(o.t) + '</span></label>';
      }).join('');
      return '<fieldset class="q q-' + q.id + '"><legend><span class="q-no">' + (n + 1) + '</span>' + C.L(q.q) + '</legend><div class="opts">' + opts + '</div></fieldset>';
    }).join('') + '<p class="accuse-msg" id="accuse-msg" aria-live="polite"></p><div class="accuse-actions">' +
      '<button type="button" class="btn btn-ghost" data-back-file>' + T('backToFile') + '</button><button type="submit" class="btn btn-brass">' + T('accuse') + '</button></div>';
    NI.show('screen-accuse');
  };
  function submitAccusation(e) {
    e.preventDefault();
    var form = $('#accuse-form'), ans = {}, missing = 0;
    C.accusation.forEach(function (q) { var c = form.querySelector('input[name="' + q.id + '"]:checked'); if (c) ans[q.id] = c.value; else missing++; });
    if (missing) { $('#accuse-msg').textContent = T('missing')(missing); return; }
    NI.confirm(T('confirmH'), T('confirmT')(C.suspect(ans.who).name), T('confirmYes'), function () { NI.reveal(ans, false); });
  }
  function rating(score, whoOk, hints, revealed) {
    var R = NI.XL().ratings;
    var r = !whoOk ? R.wrong : score === 5 ? (hints <= 3 && !revealed ? R.perfect : R.excellent) : score === 4 ? R.good : R.who;
    var raw = score - Math.floor(hints / 3) * .5 - revealed, stars = whoOk ? Math.max(1, Math.min(5, raw)) : Math.min(1, Math.max(0, raw));
    return { title: r[0], text: r[1], stars: Math.round(stars * 2) / 2 };
  }
  function starRow(n) {
    var h = '';
    for (var i = 1; i <= 5; i++) h += '<span class="star' + (n >= i ? ' is-full' : n >= i - .5 ? ' is-half' : '') + '">★</span>';
    return '<span class="stars" aria-label="' + n + ' / 5">' + h + '</span>';
  }
  NI.reveal = function (ans, instant) {
    var st = S(), sol = NI.X.solution, score = 0, res = {};
    C.accusation.forEach(function (q) { res[q.id] = ans[q.id] === sol[q.id]; if (res[q.id]) score++; });
    if (!st.accusation) { st.accusation = { answers: ans, score: score, elapsed: st.elapsed }; NI.save(); }
    NI.show('screen-reveal');
    var killer = C.suspect(sol.who), stage = $('#reveal-stage');
    $('#booklet').hidden = true; $('#booklet').innerHTML = ''; stage.className = 'reveal-stage';
    stage.innerHTML = '<div class="rv-tunnel" aria-hidden="true"><div class="rv-light"></div></div>' +
      '<div class="rv-intro"><p class="rv-line rv-1">' + T('rv1') + '</p><p class="rv-line rv-2">' + T('rv2') + '</p></div>' +
      '<div class="rv-card"><div class="rv-flip"><div class="rv-face rv-front">' + Art.mark('rv-mark') + '</div>' +
      '<div class="rv-face rv-back">' + Art.portrait(sol.who, 'portrait rv-portrait') + '<h2>' + killer.name + '</h2></div></div></div><div class="rv-result" id="rv-result"></div>';
    function result() {
      var st2 = S(), hints = ['B', 'C', 'D', 'F'].reduce(function (a, k) { return a + (st2.hints[k] || 0); }, 0);
      var revealed = ['B', 'C', 'D'].filter(function (k) { return st2.gaveUp[k]; }).length, r = rating(score, res.who, hints, revealed);
      var list = C.accusation.map(function (q) {
        var ok = res[q.id];
        return '<li class="' + (ok ? 'is-ok' : 'is-bad') + '"><span class="v-q">' + C.L(q.q) + '</span><span class="v-a">' + T('youSaid') + optLabel(q, ans[q.id]) + '</span>' +
          (ok ? '' : '<span class="v-c">' + T('truth') + optLabel(q, sol[q.id]) + '</span>') + '</li>';
      }).join('');
      $('#rv-result').innerHTML = '<div class="stamp-big">' + T('closedH') + '</div><h3>' + r.title + '</h3>' + starRow(r.stars) + '<p class="rv-verdict">' + r.text + '</p>' +
        '<ul class="verdicts">' + list + '</ul><p class="rv-meta">' + T('scoreLine')(score, C.accusation.length) + ' ' + T('timeLine') + NI.fmt(st2.accusation.elapsed) +
        '. ' + T('hintsLine') + hints + '. ' + T('answersLine') + revealed + '.</p><div class="rv-actions"><button type="button" class="btn btn-brass" data-booklet="0">' + T('readWhat') + '</button>' +
        '<button type="button" class="btn btn-ghost" data-back-file>' + T('backToFile') + '</button></div>';
      stage.classList.add('is-done');
    }
    if (instant || REDUCED) { stage.classList.add('step-2', 'step-3', 'step-4'); result(); return; }
    Snd.rails(3); Snd.whistle();
    setTimeout(function () { stage.classList.add('step-2'); }, 1500);
    setTimeout(function () { stage.classList.add('step-3'); Snd.stamp(); }, 4000);
    setTimeout(function () { stage.classList.add('step-4'); }, 5200);
    setTimeout(function () { result(); Snd.chime(); }, 6400);
  };
  function booklet(i) {
    var ch = NI.XL().chapters; i = Math.max(0, Math.min(i, ch.length - 1));
    var b = $('#booklet'); b.hidden = false;
    b.innerHTML = '<article class="booklet-page"><p class="bk-count">' + T('chapterOf')(i + 1, ch.length) + '</p><h2>' + ch[i].title + '</h2>' + ch[i].html +
      '<nav class="bk-nav">' + (i > 0 ? '<button type="button" class="btn btn-ghost" data-booklet="' + (i - 1) + '">' + T('prevCh') + '</button>' : '<span></span>') +
      (i < ch.length - 1 ? '<button type="button" class="btn btn-brass" data-booklet="' + (i + 1) + '">' + T('nextCh') + '</button>' :
        '<button type="button" class="btn btn-brass" data-new-case>' + T('playAgain') + '</button>') + '</nav></article>';
    b.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block: 'start' }); Snd.flip();
  }

  /* Menus, title and setup */
  NI.howTo = function () { NI.openModal('<article class="doc doc-howto"><h3>' + T('howtoH') + '</h3>' + T('howto').map(function (p) { return '<p>' + p + '</p>'; }).join('') + '</article>'); };
  NI.newCase = function () { NI.confirm(T('startOverH'), T('startOverT'), T('startOverYes'), function () { NI.reset(); location.reload(); }); };
  function menu() {
    NI.openModal('<div class="confirm"><h3>' + T('menuH') + '</h3><div class="menu-list">' +
      '<button type="button" class="btn btn-ghost" data-howto>' + T('btnHowto') + '</button>' +
      '<button type="button" class="btn btn-ghost" data-toggle-lang>' + T('language') + '</button>' +
      '<button type="button" class="btn btn-ghost" data-to-title>' + T('toTitle') + '</button>' +
      '<button type="button" class="btn btn-ghost" data-new-case>' + T('startOver') + '</button></div></div>');
  }
  function toTitle() {
    NI.closeModal();
    var st = S();
    $('#btn-continue').hidden = !st.started;
    $('#btn-new').textContent = T(st.started ? 'btnNewCase' : 'btnOpen');
    $('#btn-new').className = st.started ? 'btn btn-ghost' : 'btn btn-brass';
    NI.show('screen-title');
  }
  function begin() {
    var st = S();
    st.names = [$('#name1').value.trim().slice(0, 24), $('#name2').value.trim().slice(0, 24)];
    st.started = true; NI.save(); Snd.unlock();
    NI.show('screen-game'); NI.renderGame('A'); Snd.deal(8);
    setTimeout(function () { NI.openEvidence('A1'); }, REDUCED ? 100 : 1500);
  }
  function enterGame() { Snd.unlock(); if (S().music) Snd.musicOn(); NI.show('screen-game'); NI.renderGame(); }
  NI.onLang = function () {
    var scr = $('.screen.is-active'), id = scr ? scr.id : '';
    if (id === 'screen-title') toTitle();
    else if (id === 'screen-game') { var v = NI.viewing; NI.closeModal(); NI.renderGame(); if (v) NI.openEvidence(v); }
    else if (id === 'screen-accuse') NI.goAccuse();
    else if (id === 'screen-reveal' && S().accusation) NI.reveal(S().accusation.answers, true);
  };

  function snowfall() {
    var h = '';
    for (var i = 0; i < 40; i++) h += '<i style="left:' + ((i * 37) % 100) + '%;animation-delay:' + (-(i * 1.7) % 14).toFixed(1) + 's;animation-duration:' + (9 + (i % 7)) + 's;--s:' + (.5 + (i % 4) * .25) + '"></i>';
    return h;
  }
  function init() {
    var st = S();
    NI.applyLang();
    $('#title-art').innerHTML = Art.titleScene(); $('#snow').innerHTML = snowfall(); $('#setup-mark').innerHTML = Art.mark('setup-mark-svg');
    Snd.setSfx(st.sfx); toTitle();
    document.addEventListener('click', function (e) {
      var t = e.target.closest('button, [data-close]'); if (!t) return;
      var d = t.dataset;
      if (d.ev) NI.openEvidence(d.ev);
      else if (d.open) NI.openEvidence(d.open, d.jumpAfter);
      else if (d.jump) { var el = document.getElementById(d.jump); if (el) el.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block: 'start' }); }
      else if (d.wheel !== undefined) NI.turnWheel(+d.wheel, +d.step);
      else if (t.hasAttribute('data-try-case')) NI.tryCase();
      else if (d.hints) NI.openHints(d.hints);
      else if (t.hasAttribute('data-hint-next')) NI.hintNext();
      else if (t.hasAttribute('data-hint-answer')) NI.hintAnswer();
      else if (d.mark) mark(t.closest('[data-sus]').dataset.sus, d.mark);
      else if (d.dossier) dossier(d.dossier);
      else if (t.hasAttribute('data-go-accuse')) NI.goAccuse();
      else if (t.hasAttribute('data-back-file')) { NI.closeModal(); NI.show('screen-game'); NI.renderGame(); }
      else if (d.booklet !== undefined) booklet(+d.booklet);
      else if (t.hasAttribute('data-new-case')) NI.newCase();
      else if (d.tab) { Snd.click(); NI.setTab(d.tab); }
      else if (d.lang) { Snd.click(); NI.setLang(d.lang); }
      else if (t.hasAttribute('data-toggle-lang')) { NI.closeModal(); NI.setLang(C.lang === 'en' ? 'hr' : 'en'); }
      else if (t.hasAttribute('data-howto')) NI.howTo();
      else if (t.hasAttribute('data-to-title')) toTitle();
      else if (t.hasAttribute('data-confirm-yes')) { var fn = NI._onYes; NI._onYes = null; NI.closeModal(); if (fn) fn(); }
      else if (t.hasAttribute('data-close')) NI.closeModal();
    });
    $('#btn-new').addEventListener('click', function () {
      var go = function () { Snd.unlock(); $('#name1').value = S().names[0] || ''; $('#name2').value = S().names[1] || ''; NI.show('screen-setup'); setTimeout(function () { $('#name1').focus(); }, 50); };
      if (S().started) NI.confirm(T('startOverH'), T('startOverT'), T('startOverYes'), function () { NI.reset(); go(); }); else go();
    });
    $('#btn-continue').addEventListener('click', enterGame);
    $('#btn-title-howto').addEventListener('click', NI.howTo);
    $('#setup-form').addEventListener('submit', function (e) { e.preventDefault(); begin(); });
    $('#btn-setup-back').addEventListener('click', toTitle);
    $('#btn-menu').addEventListener('click', menu);
    $('#btn-accuse').addEventListener('click', NI.goAccuse);
    $('#accuse-form').addEventListener('submit', submitAccusation);
    $('#accuse-form').addEventListener('change', function (e) {
      if (e.target.name) $$('input[name="' + e.target.name + '"]', this).forEach(function (r) { r.closest('.opt').classList.toggle('is-picked', r.checked); });
      Snd.click();
    });
    $('#btn-music').addEventListener('click', function () { var s2 = S(); s2.music = !s2.music; NI.save(); this.setAttribute('aria-pressed', String(s2.music)); if (s2.music) Snd.musicOn(); else Snd.musicOff(); });
    $('#btn-sfx').addEventListener('click', function () { var s2 = S(); s2.sfx = !s2.sfx; NI.save(); Snd.setSfx(s2.sfx); this.setAttribute('aria-pressed', String(s2.sfx)); Snd.click(); });
    $('#notes').addEventListener('input', function () {
      var ta = this; clearTimeout(noteTimer); $('#notes-saved').textContent = T('saving');
      noteTimer = setTimeout(function () { S().notes = ta.value; NI.save(); $('#notes-saved').textContent = T('saved'); }, 400);
    });
    document.addEventListener('keydown', function (e) {
      var modalOpen = !$('#modal').hidden, tag = (e.target.tagName || '').toLowerCase();
      if (e.key === 'Escape' && modalOpen) { NI.closeModal(); return; }
      if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
      if (modalOpen && (e.key === 'ArrowRight' || e.key === 'ArrowLeft') && !e.target.closest('.gr-card')) {
        var b = $('#modal-nav [data-dir="' + (e.key === 'ArrowRight' ? 'next' : 'prev') + '"]'); if (b) b.click();
      }
    });
    window.addEventListener('beforeunload', NI.save);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
