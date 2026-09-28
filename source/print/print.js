/* Nocturne in Ice: builds the paper case file. print.html?set=A|B|C|D|W&lang=en|hr */
(function () {
  'use strict';
  var C = window.CASE, Art = window.Art, q = new URLSearchParams(location.search);
  var SET = (q.get('set') || 'A').toUpperCase(), LANG = q.get('lang') === 'hr' ? 'hr' : 'en', PT = window.PRINT_T[LANG];
  C.lang = LANG; document.documentElement.lang = LANG;
  var root = document.getElementById('print');
  var ev = function (id) { return C.ev(id); };
  var inEnv = function (env) { return C.evidence.filter(function (e) { return e.env === env; }); };
  function tag(id) { return '<div class="tag-row"><div class="tag"><span class="tag-hole"></span><span><b>' + id + '</b>' + C.L(ev(id).title) + '</span></div></div>'; }
  function page(html, cls) { return '<section class="pdoc ' + (cls || '') + '">' + html + '</section>'; }
  function docPage(id) { return page(tag(id) + C.render(id, { names: ['', ''] }), 'pdoc-' + ev(id).kind + ' pdoc-id-' + id); }
  function captionOf(id) { var d = document.createElement('div'); d.innerHTML = C.render(id); var c = d.querySelector('.caption'); return c ? c.innerHTML : ''; }

  function cover(env) {
    var e = C.envelopes.filter(function (x) { return x.id === env; })[0], items = inEnv(env);
    var list = env === 'A' ? '<ul class="cv-list">' + items.map(function (x) { return '<li><span class="box"></span><b>' + x.id + '</b>' + C.L(x.title) + '</li>'; }).join('') + '</ul>'
      : '<p class="cv-count">' + PT.inside(items.length, items[0].id, items[items.length - 1].id) + '</p>';
    return page('<div class="cover-label">' + Art.mark('cv-mark') + '<p class="cv-org">' + PT.footer + '</p><div class="cv-seal">' + env + '</div>' +
      '<h1>' + PT.envelope + ' ' + env + '</h1><p class="cv-title">' + C.L(e.title) + '</p><p class="cv-rule">' + (env === 'A' ? PT.open : PT.sealed) + '</p>' + list + '</div>' +
      '<p class="cv-print">' + (env === 'A' ? PT.printA : PT.printSealed) + '</p>', 'cover');
  }
  function howto() {
    return page('<div class="howto"><h2 class="p-title">' + PT.howtoH + '</h2>' + PT.howto.map(function (p) { return '<p>' + p + '</p>'; }).join('') +
      '<h3>' + PT.envH + '</h3><ul>' + PT.envs.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>' +
      '<h3>' + PT.goodH + '</h3><ul>' + PT.good.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></div>');
  }
  function letter() {
    var h = C.render('A1', { names: ['@@1', '@@2'] }).replace('@@1', '<span class="blank"></span>').replace('@@2', '<span class="blank"></span>');
    return page(tag('A1') + h, 'pdoc-letter');
  }
  function photo(id, svg) {
    return page('<div class="rot-box"><div class="rot-inner"><div class="rot-head">' + tag(id) + '<p class="rot-cap">' + captionOf(id) + ' ' + PT.photoCap + '</p></div>' +
      '<div class="photo-print">' + svg + '</div></div></div>', 'pdoc-rot');
  }
  function dossiers() {
    var cards = C.suspects.map(function (s) {
      return '<div class="sc"><div class="sc-portrait">' + Art.portrait(s.id) + '</div><div class="sc-body"><h3>' + s.name + '</h3>' +
        '<p class="sc-role">' + C.L(s.role) + ', ' + s.age + '</p>' + C.kv([[C.T('from'), C.L(s.from)], [C.T('compartment'), C.L(s.comp)]], 'kv-tight') +
        '<p class="sc-about">' + C.L(s.about) + '</p><p class="sc-checks"><span class="box"></span>' + PT.suspicious + '<span class="box"></span>' + PT.cleared + '</p></div></div>';
    });
    var note = document.createElement('div'); note.innerHTML = C.render('A4');
    var head = '<h2 class="p-title">' + note.querySelector('.dos-title').innerHTML + '</h2><p class="p-sub">' + note.querySelector('.dos-note').innerHTML + '</p>';
    return page(tag('A4') + head + cards.slice(0, 3).join(''), 'pdoc-dossier') + page(tag('A4') + cards.slice(3).join('') + '<p class="cut-note">' + PT.cutCards + '</p>', 'pdoc-dossier');
  }
  function grilleCard() {
    return page(tag('B7') + '<div class="card-print">' + Art.grille(C.page('A9').holes, C.L(ev('B7').title), { paper: true }) + '</div>' +
      '<p class="caption">' + captionOf('B7') + '</p><p class="cut-note">' + PT.grilleCut + '</p>', 'pdoc-card');
  }
  function torn() {
    var N = Art.NOTE, face = Art.noteFace(C.noteLines[LANG]), order = [4, 1, 5, 0, 3, 2], rot = [-8, 11, -4, 7, -12, 5], s = '';
    order.forEach(function (pi, k) {
      var pts = N.pieces[pi].split(' ').map(function (p) { return p.split(',').map(Number); }), cx = 0, cy = 0;
      pts.forEach(function (p) { cx += p[0]; cy += p[1]; }); cx /= pts.length; cy /= pts.length;
      var tx = 150 + (k % 3) * 300, ty = 140 + Math.floor(k / 3) * 280;
      s += '<g transform="translate(' + tx + ' ' + ty + ') rotate(' + rot[k] + ') scale(1.35) translate(' + (-cx).toFixed(1) + ' ' + (-cy).toFixed(1) + ')">' +
        '<clipPath id="pp-' + pi + '"><polygon points="' + N.pieces[pi] + '"/></clipPath><g clip-path="url(#pp-' + pi + ')">' + face + '</g>' +
        '<polygon points="' + N.pieces[pi] + '" fill="none" stroke="#555" stroke-width="1" stroke-dasharray="5 4"/></g>';
    });
    return page(tag('C8') + '<svg class="torn-sheet" viewBox="0 0 900 560">' + s + '</svg><p class="caption">' + captionOf('C8') + '</p><p class="cut-note">' + PT.tornCut + '</p>', 'pdoc-torn');
  }
  function board() {
    return page('<h2 class="p-title">' + PT.boardH + '</h2><p class="p-sub">' + PT.boardSub + '</p><table class="ws-table ws-board"><thead><tr>' +
      PT.boardCols.map(function (c, i) { return '<th' + (i === 0 ? ' class="ws-sus"' : i === 4 ? ' class="ws-v"' : '') + '>' + c + '</th>'; }).join('') + '</tr></thead><tbody>' +
      C.suspects.map(function (s) { return '<tr><td class="ws-sus">' + Art.portrait(s.id, 'portrait ws-portrait') + s.name + '</td><td></td><td></td><td></td><td class="ws-v"></td></tr>'; }).join('') +
      '</tbody></table>', 'pdoc-ws');
  }
  function timeline() {
    var rows = '';
    for (var m = 19 * 60 + 30; m <= 24 * 60 + 20; m += 10) rows += '<tr><td>' + String(Math.floor(m / 60) % 24).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0') + '</td><td></td><td class="ws-src"></td></tr>';
    return page('<h2 class="p-title">' + PT.timeH + '</h2><p class="p-sub">' + PT.timeSub + '</p><table class="ws-table ws-time"><thead><tr><th>' + PT.timeCols[0] + '</th><th>' + PT.timeCols[1] +
      '</th><th class="ws-src">' + PT.timeCols[2] + '</th></tr></thead><tbody>' + rows + '</tbody></table>', 'pdoc-ws');
  }
  function accusationForm() {
    return page(C.letterhead(PT.accH, PT.footer) + C.accusation.map(function (qq, i) { return '<div class="acc-q"><p>' + (i + 1) + '. ' + C.L(qq.q) + '</p><div class="lines"></div></div>'; }).join('') +
      '<div class="acc-sign"><div><div class="sigl"></div><p>' + PT.detective + '</p></div><div><div class="sigl"></div><p>' + PT.detective + '</p></div></div>' +
      '<p class="acc-foot">' + PT.accFoot + '</p>', 'pdoc-acc');
  }
  var docs = function (ids) { return ids.map(docPage).join(''); };
  var SETS = {
    A: function () { return cover('A') + howto() + letter() + docPage('A2') + photo('A3', Art.compartment()) + dossiers() + docs(['A5', 'A6', 'A7', 'A8', 'A9', 'A10']); },
    B: function () { return cover('B') + docs(['B1', 'B2', 'B3', 'B4', 'B5', 'B6']) + grilleCard() + docs(['B8', 'B9']); },
    C: function () { return cover('C') + docs(['C1', 'C2']) + photo('C3', Art.salon()) + docs(['C4', 'C5', 'C6', 'C7']) + torn(); },
    D: function () { return cover('D') + docs(['D1', 'D2', 'D3', 'D4', 'D5']); },
    W: function () { return board() + timeline() + accusationForm(); }
  };
  root.innerHTML = SETS[SET]().replace(/<\/section><section class="pdoc/g, '</section><div class="pagebreak"></div><section class="pdoc');
  Array.prototype.forEach.call(root.querySelectorAll('.jump, button, .photo-tools, .loupe'), function (n) { n.parentNode.removeChild(n); });
  document.title = C.T('gameTitle') + ' · ' + (SET === 'W' ? PT.worksheets : PT.envelope + ' ' + SET);
  document.fonts.ready.then(function () { setTimeout(function () { document.body.setAttribute('data-ready', '1'); }, 200); });
})();
