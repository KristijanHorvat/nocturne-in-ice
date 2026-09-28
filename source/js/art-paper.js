/* Nocturne in Ice: paper puzzles. Typewritten pages on an exact grid, the reading card that fits them, and the torn note. */
(function () {
  'use strict';
  var Art = window.Art;
  var CW = 10, LH = 22, W = 680, H = 860, X0 = 40, Y0 = 150;
  Art.PAGE = { w: W, h: H };

  /* A typed page. head: letterhead HTML-free strings; lines: text with [marked] words (marks are invisible). */
  Art.typedPage = function (head, lines, o) {
    o = o || {};
    var holes = [], body = '';
    lines.forEach(function (raw, row) {
      var plain = '', col = 0;
      raw.replace(/\[([^\]]+)\]|([^\[]+)/g, function (m, mark, txt) {
        if (mark) { holes.push({ row: row, col: col, len: mark.length }); plain += mark; col += mark.length; }
        else { plain += txt; col += txt.length; }
        return m;
      });
      var lead = plain.length - plain.replace(/^ +/, '').length, t = plain.replace(/^ +/, '').replace(/ +$/, '');
      if (!t) return;
      body += '<text x="' + (X0 + lead * CW) + '" y="' + (Y0 + row * LH) + '" textLength="' + (t.length * CW) + '" lengthAdjust="spacingAndGlyphs"' +
        ' class="tp-l" xml:space="preserve">' + t.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</text>';
    });
    var svg = '<svg class="typed-page" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + (o.label || '') + '">' +
      '<style>.tp-l{font-family:"Courier Prime","Courier New",monospace;font-size:16.6px;fill:#23262e}.tp-h{font-family:"Libre Baskerville",Georgia,serif;fill:#1c2433}' +
      '.tp-s{font-family:"Josefin Sans",Arial,sans-serif;fill:#5a4a36;letter-spacing:.14em}</style>' +
      '<rect x="1" y="1" width="' + (W - 2) + '" height="' + (H - 2) + '" fill="' + (o.paper || '#fbf8f0') + '" stroke="#8a8174" stroke-width="1.2"/>' +
      '<text x="' + W / 2 + '" y="58" text-anchor="middle" class="tp-h" font-size="' + (head.size || 26) + '" font-weight="700">' + head.name + '</text>' +
      '<text x="' + W / 2 + '" y="84" text-anchor="middle" class="tp-s" font-size="11">' + head.sub + '</text>' +
      '<path d="M60 100h560" stroke="#1c2433" stroke-width="1.2"/><path d="M60 104h560" stroke="#1c2433" stroke-width=".5"/>' +
      (head.mark ? '<use href="#' + head.mark + '" x="' + (W / 2 - 14) + '" y="8" width="28" height="28" style="color:#1c2433"/>' : '') +
      body + '</svg>';
    return { svg: svg, holes: holes };
  };

  /* The reading card: an opaque card the size of the page with a window over each marked word. */
  Art.grille = function (holes, label, o) {
    o = o || {};
    var cut = '';
    holes.forEach(function (h) {
      var x = X0 + h.col * CW - 3, y = Y0 + h.row * LH - 16, w = h.len * CW + 6, hh = 21;
      cut += 'M' + x + ' ' + y + 'h' + w + 'v' + hh + 'h-' + w + 'z';
    });
    var paper = !!o.paper;
    return '<svg class="grille' + (paper ? ' grille-paper' : '') + '" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + label + '">' +
      '<defs><pattern id="p-guilloche" width="24" height="24" patternUnits="userSpaceOnUse"><rect width="24" height="24" fill="#23324f"/>' +
      '<path d="M0 12q6-10 12 0t12 0M0 0q6 10 12 0t12 0M0 24q6-10 12 0t12 0" stroke="#34466b" stroke-width="1.2" fill="none"/></pattern></defs>' +
      '<path d="M0 0h' + W + 'v' + H + 'H0z' + cut + '" fill="url(#p-guilloche)" fill-rule="evenodd" stroke="#0e1628" stroke-width="2"/>' +
      (paper ? holes.map(function (h) {
        return '<rect x="' + (X0 + h.col * CW - 3) + '" y="' + (Y0 + h.row * LH - 16) + '" width="' + (h.len * CW + 6) + '" height="21" fill="#fff" stroke="#0e1628" stroke-width="1" stroke-dasharray="4 3"/>';
      }).join('') : '') +
      '<rect x="14" y="14" width="' + (W - 28) + '" height="' + (H - 28) + '" fill="none" stroke="#c9a55a" stroke-width="2"/>' +
      '<text x="' + W / 2 + '" y="52" text-anchor="middle" font-family="Josefin Sans,Arial,sans-serif" font-weight="700" font-size="16" letter-spacing="4" fill="#e7cf92">DELORME &amp; CIE · LA CHAUX-DE-FONDS</text>' +
      '<text x="' + W / 2 + '" y="78" text-anchor="middle" font-family="Libre Baskerville,serif" font-style="italic" font-size="14" fill="#e7cf92">' + (o.title || 'Carte de lecture No 3') + '</text>' +
      '<text x="' + W / 2 + '" y="' + (H - 34) + '" text-anchor="middle" font-family="Josefin Sans,Arial,sans-serif" font-size="11" letter-spacing="3" fill="#8fa0c0">' + (o.foot || 'CONFIDENTIEL') + '</text></svg>';
  };

  /* The torn note. Six pieces cut from one sheet by jagged lines; each piece is the whole note clipped to its outline. */
  var NW = 440, NH = 270;
  function jag(x0, y0, x1, y1, seed, n) {
    var pts = [], r = seed;
    for (var i = 0; i <= n; i++) {
      r = (r * 9301 + 49297) % 233280;
      var t = i / n, j = i === 0 || i === n ? 0 : (r / 233280 - .5) * 14;
      var x = x0 + (x1 - x0) * t, y = y0 + (y1 - y0) * t;
      if (x0 === x1) x += j; else y += j;
      pts.push([+x.toFixed(1), +y.toFixed(1)]);
    }
    return pts;
  }
  var V1 = jag(150, 0, 150, NH, 7, 12), V2 = jag(292, 0, 292, NH, 19, 12), HL = jag(0, 132, NW, 132, 31, 22);
  function hAt(x) { for (var i = 1; i < HL.length; i++) if (HL[i][0] >= x) return HL[i - 1][1] + (HL[i][1] - HL[i - 1][1]) * (x - HL[i - 1][0]) / (HL[i][0] - HL[i - 1][0]); return 132; }
  function vSeg(V, top) { return V.filter(function (p) { return top ? p[1] < hAt(p[0]) : p[1] > hAt(p[0]); }); }
  function hSeg(xa, xb) { return HL.filter(function (p) { return p[0] > xa && p[0] < xb; }); }
  function poly(ptsArr) { return ptsArr.map(function (p) { return p[0] + ',' + p[1]; }).join(' '); }
  function pieces() {
    var v1t = vSeg(V1, true), v1b = vSeg(V1, false), v2t = vSeg(V2, true), v2b = vSeg(V2, false);
    var l1 = [V1[0][0], hAt(V1[0][0])], l2 = [V2[0][0], hAt(V2[0][0])];
    return [
      [[0, 0]].concat(v1t, [[150, hAt(150)]], hSeg(0, 150).reverse(), [[0, hAt(0)]]),
      [[150, 0], [292, 0]].concat(v2t, [l2], hSeg(150, 292).reverse(), [l1], v1t.slice().reverse()),
      [[292, 0], [NW, 0], [NW, hAt(NW)]].concat(hSeg(292, NW).reverse(), [l2], v2t.slice().reverse()),
      [[0, hAt(0)]].concat(hSeg(0, 150), [l1], v1b, [[150, NH], [0, NH]]),
      [l1].concat(hSeg(150, 292), [l2], v2b, [[292, NH], [150, NH]], v1b.slice().reverse()),
      [l2].concat(hSeg(292, NW), [[NW, hAt(NW)], [NW, NH], [292, NH]], v2b.slice().reverse())
    ].map(poly);
  }
  Art.NOTE = { w: NW, h: NH, pieces: pieces() };
  Art.noteFace = function (lines) {
    var t = lines.map(function (l, i) {
      return '<text x="' + (l.x || 34) + '" y="' + (52 + i * 44) + '" font-family="Dancing Script,cursive" font-weight="700" font-size="' + (l.size || 27) + '" fill="#1f2a6b">' + l.t + '</text>';
    }).join('');
    return '<rect width="' + NW + '" height="' + NH + '" fill="#f7f1e2"/><path d="M0 34h' + NW + 'M0 78h' + NW + 'M0 122h' + NW + 'M0 166h' + NW + 'M0 210h' + NW + 'M0 254h' + NW + '" stroke="#b9cbe0" stroke-width="1"/>' +
      '<path d="M26 0v' + NH + '" stroke="#e3a3a3" stroke-width="1.2"/>' + t +
      '<path d="M' + NW + ' ' + (NH - 70) + 'c-30 10-40 30-70 70h70z" fill="#5a3416" opacity=".85"/><path d="M' + NW + ' ' + (NH - 96) + 'c-44 14-66 50-100 96h24c30-40 46-60 76-72z" fill="#b07a3a" opacity=".45"/>';
  };
})();
