/* Nocturne in Ice: game engine, part 2. The three locks and the hints. */
(function () {
  'use strict';
  var NI = window.NI, C = window.CASE, Snd = window.Sound;
  var $ = NI.$, $$ = NI.$$, S = NI.state, T = C.T, REDUCED = NI.REDUCED;
  var busy = false;

  var CASE_ART = '<svg class="case-art" viewBox="0 0 220 150" aria-hidden="true"><path class="case-lid" d="M20 40h180v22H20z" fill="#1d1712" stroke="#c9a55a" stroke-width="2"/>' +
    '<rect x="14" y="58" width="192" height="84" rx="10" fill="#241c16" stroke="#c9a55a" stroke-width="2"/><path d="M84 40V24h52v16" fill="none" stroke="#c9a55a" stroke-width="6"/>' +
    '<text x="110" y="128" text-anchor="middle" font-family="Libre Baskerville,serif" font-size="13" letter-spacing="4" fill="#c9a55a">C. D.</text></svg>';
  var TELEGRAPH = '<svg class="lock-icon" viewBox="0 0 120 120" aria-hidden="true"><rect x="14" y="74" width="92" height="30" rx="5" fill="#1b2438" stroke="#c9a55a" stroke-width="3"/>' +
    '<path d="M30 74V58h60v16" fill="none" stroke="#c9a55a" stroke-width="3"/><path d="M40 52l40-16" stroke="#c9a55a" stroke-width="6" stroke-linecap="round"/><circle cx="84" cy="34" r="8" fill="#b3283a"/>' +
    '<path d="M18 28h20M18 36h14M18 44h22" stroke="#9fb2c9" stroke-width="3" stroke-linecap="round"/></svg>';
  var LANTERN = '<svg class="lock-icon" viewBox="0 0 120 120" aria-hidden="true"><path d="M44 20h32l6 12H38z" fill="#1b2438" stroke="#c9a55a" stroke-width="3"/>' +
    '<rect x="38" y="32" width="44" height="60" rx="6" fill="#ffd98a" opacity=".85" stroke="#c9a55a" stroke-width="3"/><path d="M60 42v40M46 52h28M46 72h28" stroke="#c9a55a" stroke-width="2"/>' +
    '<path d="M36 92h48l-4 10H40z" fill="#1b2438" stroke="#c9a55a" stroke-width="3"/><path d="M52 20c0-10 16-10 16 0" fill="none" stroke="#c9a55a" stroke-width="3"/></svg>';

  function hintBtn(w) { return '<button type="button" class="btn btn-ghost btn-small" data-hints="' + w + '">' + T('getHint') + '</button>'; }
  NI.lockPanel = function (e) {
    if (e.lock === 'case') {
      var d = S().dials, wheels = d.map(function (v, i) {
        return '<div class="wheel"><button type="button" class="wheel-btn" data-wheel="' + i + '" data-step="1" aria-label="' + T('wheelUp') + ' ' + (i + 1) + '">▲</button>' +
          '<span class="wheel-num" id="wheel-' + i + '" aria-label="' + T('wheel')(i + 1) + '">' + v + '</span>' +
          '<button type="button" class="wheel-btn" data-wheel="' + i + '" data-step="-1" aria-label="' + T('wheelDown') + ' ' + (i + 1) + '">▼</button></div>';
      }).join('');
      return '<div class="lock lock-case"><div class="case-box" id="case-box">' + CASE_ART + '<div class="wheels">' + wheels + '</div></div>' +
        '<div class="lock-copy"><span class="seal" aria-hidden="true">B</span><h2>' + T('lockB_h') + '</h2><p>' + T('lockB_t') + '</p>' +
        '<p><button type="button" class="btn btn-brass" data-try-case>' + T('lockB_btn') + '</button></p>' +
        '<p class="lock-status" id="case-msg" aria-live="polite"></p>' + hintBtn('B') + '</div></div>';
    }
    var isC = e.lock === 'report';
    return '<div class="lock lock-text"><div class="lock-art">' + (isC ? TELEGRAPH : LANTERN) + '</div><div class="lock-copy"><span class="seal" aria-hidden="true">' + e.id + '</span>' +
      '<h2>' + T(isC ? 'lockC_h' : 'lockD_h') + '</h2><p>' + T(isC ? 'lockC_t' : 'lockD_t') + '</p>' +
      '<form class="call-form" id="lock-form" data-lock="' + e.id + '" autocomplete="off"><label for="lock-input">' + T(isC ? 'lockC_label' : 'lockD_label') + '</label>' +
      (isC ? '<textarea id="lock-input" rows="2" placeholder="' + T('lockC_ph') + '"></textarea>' : '<input id="lock-input" type="text" placeholder="' + T('lockD_ph') + '">') +
      '<button type="submit" class="btn btn-brass">' + T(isC ? 'lockC_btn' : 'lockD_btn') + '</button></form>' +
      '<p class="lock-status" id="lock-msg" aria-live="polite"></p>' + hintBtn(e.id) + '</div></div>';
  };
  NI.finalPanel = function () {
    var done = !!S().accusation;
    return '<section class="env env-final"><div class="final-card"><h2>' + T(done ? 'closedH' : 'finalH') + '</h2><p>' + T(done ? 'closedT' : 'finalT') + '</p>' +
      '<div class="final-actions"><button type="button" class="btn btn-brass" data-go-accuse>' + T(done ? 'seeSolution' : 'accuse') + '</button>' +
      (done ? '' : hintBtn('F')) + '</div></div></section>';
  };

  /* Lock B: four number wheels */
  NI.turnWheel = function (i, step) {
    if (busy) return;
    var d = S().dials; d[i] = (d[i] + step + 10) % 10; NI.save();
    var el = $('#wheel-' + i); if (el) { el.textContent = d[i]; el.classList.remove('spin'); void el.offsetWidth; el.classList.add('spin'); }
    Snd.tick();
  };
  NI.tryCase = function () {
    if (busy || !$('#case-box')) return;
    var code = S().dials.join(''), X = NI.X, msg = $('#case-msg'), box = $('#case-box');
    busy = true;
    if (code === X.locks.B) {
      box.classList.add('is-open'); msg.textContent = T('lockB_ok'); Snd.clunk();
      setTimeout(function () { busy = false; Snd.chime(); NI.unlock('B'); }, REDUCED ? 300 : 1500);
    } else {
      box.classList.add('is-wrong'); Snd.wrong();
      msg.textContent = X.locks.B_near.indexOf(code) > -1 ? NI.XL().replies.B_near : T('lockB_bad');
      setTimeout(function () { box.classList.remove('is-wrong'); busy = false; }, 700);
    }
  };

  /* Locks C and D: tell the inspector */
  function norm(s) {
    s = String(s || '').toUpperCase();
    if (s.normalize) s = s.normalize('NFD').replace(/[̀-ͯ]/g, '');
    return s.replace(/[^A-Z]/g, '');
  }
  function submitLock(e) {
    e.preventDefault();
    var f = e.target, id = f.dataset.lock, val = norm($('#lock-input').value), msg = $('#lock-msg'), X = NI.X;
    if (!val) { msg.textContent = T(id === 'C' ? 'lockC_empty' : 'lockD_empty'); return; }
    var ok = id === 'C'
      ? X.locks.C_any.every(function (group) { return group.some(function (k) { return val.indexOf(k) > -1; }); })
      : X.locks.D.some(function (k) { return val.indexOf(k) > -1; });
    if (!ok) { Snd.wrong(); msg.textContent = T(id === 'C' ? 'lockC_bad' : 'lockD_bad'); return; }
    $('#lock-input').disabled = true; f.querySelector('button').disabled = true;
    msg.textContent = T(id === 'C' ? 'lockC_wait' : 'lockD_wait');
    if (id === 'C') Snd.telegraph(); else Snd.rails(2);
    setTimeout(function () { msg.textContent = NI.XL().replies[id + '_ok']; }, REDUCED ? 200 : 2600);
    setTimeout(function () { Snd.chime(); NI.unlock(id); }, REDUCED ? 900 : 7200);
  }
  NI.afterFile = function () {
    busy = false;
    var f = $('#lock-form'); if (f) f.addEventListener('submit', submitLock);
  };

  /* Hints */
  var hintFor = null;
  function hintHtml(w) {
    var XL = NI.XL(), list = XL.hints[w], used = S().hints[w] || 0, h = '';
    h += '<article class="doc doc-hints"><h3>' + T('hintsFor')(w) + '</h3><p>' + T('hintsIntro') + '</p><ol class="hint-list">';
    for (var i = 0; i < list.length; i++) {
      if (i < used) h += '<li class="hint is-open">' + list[i] + '</li>';
      else if (i === used) h += '<li class="hint"><button type="button" class="btn btn-small" data-hint-next>' + T('showHint')(i + 1) + '</button></li>';
      else h += '<li class="hint is-locked">' + T('hintN')(i + 1) + '</li>';
    }
    h += '</ol>';
    if (XL.answers[w]) {
      if (S().gaveUp[w]) h += '<div class="hint-answer">' + XL.answers[w] + '</div>';
      else if (used >= list.length) h += '<p><button type="button" class="btn btn-ghost" data-hint-answer>' + T('showAnswer') + '</button></p>';
    }
    return h + '</article>';
  }
  NI.openHints = function (w) { hintFor = w; NI.openModal(hintHtml(w)); };
  NI.hintNext = function () { var st = S(); st.hints[hintFor] = (st.hints[hintFor] || 0) + 1; NI.save(); Snd.flip(); $('#modal-body').innerHTML = hintHtml(hintFor); };
  NI.hintAnswer = function () { S().gaveUp[hintFor] = true; NI.save(); $('#modal-body').innerHTML = hintHtml(hintFor); };
})();
