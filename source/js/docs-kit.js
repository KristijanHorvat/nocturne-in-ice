/* Nocturne in Ice: building blocks shared by every document. */
(function () {
  'use strict';
  var C = window.CASE, Art = window.Art;
  var POLICE = { en: 'Cantonal Police · Sankt Oswin post', hr: 'Kantonalna policija · postaja Sankt Oswin' };

  C.head = function (right) {
    return '<header class="rep-head"><span>' + C.L(POLICE) + '</span><span>' + (right || C.T('caseNo')) + '</span></header>';
  };
  C.letterhead = function (org, sub) {
    return '<header class="letterhead">' + Art.shield('lh-crest') + '<div><p class="lh-org">' + org + '</p><p class="lh-sub">' + sub + '</p></div></header>';
  };
  C.note = function (html) { return '<p class="officer"><span class="officer-tag">AT</span>' + html + '</p>'; };
  C.hand = function (html, cls) { return '<div class="hand ' + (cls || '') + '">' + html + '</div>'; };
  C.kv = function (rows, cls) {
    return '<dl class="kv ' + (cls || '') + '">' + rows.map(function (r) { return '<dt>' + r[0] + '</dt><dd>' + r[1] + '</dd>'; }).join('') + '</dl>';
  };
  C.table = function (head, rows, cls) {
    return '<table class="ledger ' + (cls || '') + '"><thead><tr>' + head.map(function (h) { return '<th>' + h + '</th>'; }).join('') + '</tr></thead><tbody>' +
      rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
  };

  /* One person's statement inside an interview document. */
  C.stmt = function (doc, id, html) {
    var s = C.suspect(id), w = C.witnesses[id], p = s || w;
    var who = s ? Art.portrait(id, 'portrait portrait-mini') :
      '<span class="badge-initials" aria-hidden="true">' + p.name.split(' ').map(function (x) { return x[0]; }).join('') + '</span>';
    return '<section class="stmt" id="' + doc + '-' + id + '"><header class="stmt-who">' + who +
      '<div><h4>' + p.name + '</h4><p>' + C.L(p.role) + '</p></div></header><div class="stmt-body">' + html + '</div></section>';
  };
  C.jump = function (doc, ids) {
    return '<nav class="jump" aria-label="Jump">' + ids.map(function (id) {
      var p = C.suspect(id) || C.witnesses[id];
      return '<button type="button" class="chip" data-jump="' + doc + '-' + id + '">' + (p.short || p.name.split(' ')[0]) + '</button>';
    }).join('') + '</nav>';
  };

  /* A typewritten page drawn on the grid the reading card fits. */
  C.typed = function (id, head, lines, label) {
    var p = Art.typedPage(head, lines, { label: label });
    C.typedPages = C.typedPages || {};
    C.typedPages[C.lang + ':' + id] = p;
    return '<div class="typed-wrap" data-typed="' + id + '">' + p.svg + '</div>';
  };
  C.page = function (id) {
    if (!(C.typedPages && C.typedPages[C.lang + ':' + id])) C.render(id);
    return C.typedPages[C.lang + ':' + id];
  };

  /* The photograph viewer with its magnifier. */
  C.photo = function (svg, caption) {
    return '<article class="doc doc-photo"><div class="photo-tools"><button type="button" class="btn btn-small" data-loupe-toggle aria-pressed="true">' + C.T('magOn') + '</button>' +
      '<span>' + C.T('magHelp') + '</span></div><div class="loupe-wrap" data-loupe>' + svg +
      '<div class="loupe" aria-hidden="true"><div class="loupe-inner">' + svg + '</div></div></div><p class="caption">' + caption + '</p></article>';
  };
})();
