/* Nocturne in Ice: game engine, part 1. State, language, screens, modal and the evidence viewer. */
(function () {
  'use strict';
  var C = window.CASE, Art = window.Art, Snd = window.Sound;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var KEY = 'nocturneInIce.save.v1';
  var REDUCED = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);

  function decode(o) {
    try {
      var k = atob(o.k), raw = atob(o.d), bytes = new Uint8Array(raw.length);
      for (var i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i) ^ k.charCodeAt(i % k.length);
      return JSON.parse(new TextDecoder('utf-8').decode(bytes));
    } catch (e) { return null; }
  }
  function guessLang() {
    var l = (navigator.language || 'en').toLowerCase();
    return /^(hr|bs|sr|sh)/.test(l) ? 'hr' : 'en';
  }
  function fresh() {
    return { v: 1, lang: guessLang(), names: ['', ''], started: false, elapsed: 0, unlocked: ['A'], read: {}, marks: {}, notes: '',
      hints: { B: 0, C: 0, D: 0, F: 0 }, gaveUp: {}, accusation: null, music: false, sfx: true, tab: 'file', dials: [0, 0, 0, 0], torn: null };
  }
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) { var o = JSON.parse(raw), f = fresh(); for (var k in f) if (!(k in o)) o[k] = f[k]; return o; }
    } catch (e) { /* private mode or a corrupt save */ }
    return fresh();
  }
  var S = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } }

  var NI = window.NI = { $: $, $$: $$, REDUCED: REDUCED, save: save, X: decode(window.NI_SECRET || {}) };
  NI.state = function () { return S; };
  NI.reset = function () { var lang = S.lang; try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ } S = fresh(); S.lang = lang; save(); };
  NI.T = function (k) { return C.T(k); };
  NI.XL = function () { return NI.X ? NI.X[C.lang] : null; };

  /* Language */
  NI.applyLang = function () {
    C.lang = S.lang === 'hr' ? 'hr' : 'en';
    document.documentElement.lang = C.lang;
    document.title = C.T('gameTitle') + (C.lang === 'hr' ? ': misterij ubojstva za dvoje' : ': a murder mystery for two');
    $$('[data-t]').forEach(function (el) { el.textContent = C.T(el.getAttribute('data-t')); });
    $$('[data-ph]').forEach(function (el) { el.placeholder = C.T(el.getAttribute('data-ph')); });
    $$('[data-lang]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === C.lang)); });
    $('#btn-menu').setAttribute('aria-label', C.T('menu')); $('#modal-close').setAttribute('aria-label', C.T('close'));
    $('#btn-music').setAttribute('aria-label', C.T('music')); $('#btn-sfx').setAttribute('aria-label', C.T('sfx'));
    $('#clock').title = C.T('timeOnCase');
  };
  NI.setLang = function (l) { S.lang = l; save(); NI.applyLang(); if (NI.onLang) NI.onLang(); };

  /* Screens and the clock */
  var clockTimer = null, lastTick = 0, ticks = 0;
  NI.fmt = function (ms) {
    var s = Math.floor(ms / 1000), h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), x = s % 60;
    return (h ? h + ':' + String(m).padStart(2, '0') : m) + ':' + String(x).padStart(2, '0');
  };
  function renderClock() { var el = $('#clock'); if (el) el.textContent = NI.fmt(S.elapsed); }
  function startClock() {
    if (clockTimer) return; lastTick = Date.now(); renderClock();
    clockTimer = setInterval(function () {
      var now = Date.now();
      if (!document.hidden && !S.accusation) S.elapsed += now - lastTick;
      lastTick = now; renderClock(); if (++ticks % 15 === 0) save();
    }, 1000);
  }
  function stopClock() { clearInterval(clockTimer); clockTimer = null; save(); }
  NI.show = function (id) {
    $$('.screen').forEach(function (el) { var on = el.id === id; el.hidden = !on; el.classList.toggle('is-active', on); });
    window.scrollTo(0, 0);
    if (id === 'screen-game') startClock(); else stopClock();
  };
  var toastTimer;
  NI.toast = function (msg) {
    var t = $('#toast'); t.textContent = msg; t.classList.add('is-on');
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.classList.remove('is-on'); }, 2800);
  };

  /* Modal */
  var lastFocus = null;
  NI.openModal = function (html, opts) {
    opts = opts || {};
    var m = $('#modal'), body = $('#modal-body');
    if (m.hidden) lastFocus = document.activeElement;
    body.innerHTML = html; $('#modal-nav').innerHTML = opts.nav || '';
    $('#modal-sheet').className = 'modal-sheet' + (opts.wide ? ' is-wide' : '');
    m.hidden = false; document.body.classList.add('modal-open'); $('#modal-sheet').scrollTop = 0;
    m.classList.remove('is-open'); void m.offsetWidth; m.classList.add('is-open');
    if (opts.after) opts.after(body);
    setTimeout(function () { $('#modal-close').focus({ preventScroll: true }); }, 40);
  };
  NI.closeModal = function () {
    var m = $('#modal'); if (m.hidden) return;
    m.hidden = true; m.classList.remove('is-open'); document.body.classList.remove('modal-open');
    $('#modal-body').innerHTML = ''; $('#modal-nav').innerHTML = ''; NI.viewing = null;
    if (lastFocus && document.body.contains(lastFocus)) { try { lastFocus.focus({ preventScroll: true }); } catch (e) { /* ignore */ } }
  };
  NI.confirm = function (title, text, yes, onYes) {
    NI._onYes = onYes;
    NI.openModal('<div class="confirm"><h3>' + title + '</h3><p>' + text + '</p><div class="confirm-actions">' +
      '<button type="button" class="btn btn-ghost" data-close>' + C.T('notYet') + '</button><button type="button" class="btn btn-brass" data-confirm-yes>' + yes + '</button></div></div>');
  };

  /* Header and case file */
  NI.renderTop = function () {
    var n = S.names.filter(Boolean).map(C.esc);
    $('#names-line').textContent = n.length ? C.T('detectives')(n) : C.T('caseNo');
    $('#pips').innerHTML = C.envelopes.map(function (e) {
      var open = S.unlocked.indexOf(e.id) > -1;
      return '<span class="pip' + (open ? ' is-open' : '') + '" title="' + C.T('envelope') + ' ' + e.id + '">' + e.id + '</span>';
    }).join('');
    var acc = $('#btn-accuse'); acc.hidden = S.unlocked.indexOf('D') < 0;
    acc.textContent = S.accusation ? C.T('seeSolution') : C.T('accuse');
    $('#btn-music').setAttribute('aria-pressed', String(S.music)); $('#btn-sfx').setAttribute('aria-pressed', String(S.sfx));
  };
  function evCard(ev, i, deal) {
    var rot = ((ev.id.charCodeAt(0) * 7 + ev.id.charCodeAt(ev.id.length - 1) * 13) % 7 - 3) * .5;
    return '<button type="button" class="ev ev-' + ev.kind + (deal ? ' is-dealt' : '') + '" data-ev="' + ev.id + '" style="--r:' + rot.toFixed(2) + 'deg;--i:' + i + '">' +
      '<span class="ev-art">' + Art.icon(ev.kind) + '</span><span class="ev-no">' + ev.id + '</span>' +
      '<span class="ev-title">' + C.L(ev.title) + '</span><span class="ev-blurb">' + C.L(ev.blurb) + '</span>' +
      (S.read[ev.id] ? '' : '<span class="ev-new">' + C.T('unread') + '</span>') + '</button>';
  }
  NI.renderFile = function (dealEnv) {
    var html = '', next = null;
    C.envelopes.forEach(function (e) {
      if (S.unlocked.indexOf(e.id) > -1) {
        var items = C.evidence.filter(function (ev) { return ev.env === e.id; });
        html += '<section class="env" data-env="' + e.id + '"><header class="env-head"><span class="seal" aria-hidden="true">' + e.id + '</span>' +
          '<div><h2>' + C.T('envelope') + ' ' + e.id + ': ' + C.L(e.title) + '</h2><p>' + C.L(e.line) + '</p></div></header><div class="ev-grid">' +
          items.map(function (ev, i) { return evCard(ev, i, dealEnv === e.id); }).join('') + '</div></section>';
      } else if (!next) {
        next = e; html += '<section class="env env-locked" data-env="' + e.id + '">' + NI.lockPanel(e) + '</section>';
      } else {
        html += '<section class="env env-sealed"><header class="env-head"><span class="seal seal-dim" aria-hidden="true">' + e.id + '</span>' +
          '<div><h2>' + C.T('envelope') + ' ' + e.id + '</h2><p>' + C.T('sealedUntil')(next.id) + '</p></div></header></section>';
      }
    });
    if (S.unlocked.indexOf('D') > -1) html += NI.finalPanel();
    $('#file').innerHTML = html;
    if (NI.afterFile) NI.afterFile();
  };
  NI.setTab = function (t) {
    S.tab = t; save();
    $$('[data-tab]').forEach(function (b) { var on = b.dataset.tab === t; b.setAttribute('aria-selected', String(on)); b.classList.toggle('is-on', on); });
    $$('.panel').forEach(function (p) { p.hidden = p.dataset.panel !== t; });
  };
  NI.renderGame = function (dealEnv) { NI.renderTop(); NI.renderFile(dealEnv); NI.renderSuspects(); NI.renderNotes(); NI.setTab(S.tab || 'file'); };
  NI.unlock = function (id) {
    if (S.unlocked.indexOf(id) < 0) S.unlocked.push(id);
    save(); NI.renderTop(); NI.setTab('file'); NI.renderFile(id);
    var sec = $('[data-env="' + id + '"]'); if (sec) sec.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block: 'start' });
    Snd.deal(7);
    var env = C.envelopes.filter(function (x) { return x.id === id; })[0];
    setTimeout(function () {
      NI.openModal('<div class="confirm unlock-note"><span class="seal" aria-hidden="true">' + id + '</span><h3>' + C.T('opened')(id) + '</h3>' +
        '<p><b>' + C.L(env.title) + '.</b> ' + C.T('openedText') + '</p><p>' + C.T('openedPaper')(id) + '</p>' +
        '<div class="confirm-actions"><button type="button" class="btn btn-brass" data-close>' + C.T('letsSee') + '</button></div></div>');
    }, REDUCED ? 0 : 900);
  };

  /* Evidence viewer */
  NI.openEvidence = function (id, jumpTo) {
    var ev = C.ev(id);
    if (!ev || S.unlocked.indexOf(ev.env) < 0) return;
    var list = C.evidence.filter(function (e) { return S.unlocked.indexOf(e.env) > -1; });
    var i = list.indexOf(ev), prev = list[i - 1], next = list[i + 1];
    var nav = (prev ? '<button type="button" class="btn btn-ghost" data-open="' + prev.id + '" data-dir="prev">← ' + prev.id + ': ' + C.L(prev.title) + '</button>' : '<span></span>') +
      (next ? '<button type="button" class="btn btn-ghost" data-open="' + next.id + '" data-dir="next">' + next.id + ': ' + C.L(next.title) + ' →</button>' : '<span></span>');
    NI.viewing = id;
    NI.openModal('<p class="doc-label">' + C.T('evidence') + ' ' + ev.id + ' · ' + C.L(ev.title) + '</p>' + C.render(id, { names: S.names }), {
      nav: nav, wide: ev.kind === 'photo' || ev.kind === 'card' || ev.kind === 'torn' || ev.kind === 'plan' || ev.kind === 'clipping',
      after: function (root) {
        initLoupe(root); if (NI.initPuzzles) NI.initPuzzles(root);
        if (jumpTo) { var el = document.getElementById(jumpTo); if (el) setTimeout(function () { el.scrollIntoView({ block: 'start' }); }, 60); }
      }
    });
    if (!S.read[id]) { S.read[id] = true; save(); var badge = $('[data-ev="' + id + '"] .ev-new'); if (badge) badge.remove(); }
    Snd.flip();
  };

  function initLoupe(root) {
    var wrap = $('[data-loupe]', root); if (!wrap) return;
    var lens = $('.loupe', wrap), inner = $('.loupe-inner', wrap), btn = $('[data-loupe-toggle]', root);
    var Z = 2.8, R = 95, on = !(window.matchMedia && matchMedia('(pointer: coarse)').matches);
    function setOn(v) { on = v; btn.setAttribute('aria-pressed', String(v)); btn.textContent = v ? C.T('magOn') : C.T('magOff'); wrap.classList.toggle('loupe-on', v); if (!v) lens.style.opacity = 0; }
    setOn(on);
    btn.addEventListener('click', function () { setOn(!on); });
    function move(e) {
      if (!on) return;
      var r = wrap.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      if (x < 0 || y < 0 || x > r.width || y > r.height) { lens.style.opacity = 0; return; }
      lens.style.opacity = 1; lens.style.transform = 'translate(' + (x - R) + 'px,' + (y - R) + 'px)';
      inner.style.width = (r.width * Z) + 'px'; inner.style.transform = 'translate(' + (-(x * Z - R)) + 'px,' + (-(y * Z - R)) + 'px)';
    }
    wrap.addEventListener('pointermove', move); wrap.addEventListener('pointerdown', move);
    wrap.addEventListener('pointerleave', function () { lens.style.opacity = 0; });
  }
})();
