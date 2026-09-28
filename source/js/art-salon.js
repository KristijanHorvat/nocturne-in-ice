/* Nocturne in Ice: Otto Kessler's plate 12, the salon car by flash. viewBox 1200 x 800, black and white. */
(function () {
  'use strict';
  var Art = window.Art;
  var T = ['#0f0c0a', '#1f1a16', '#312a24', '#473e35', '#645849', '#877a68', '#ad9f8a', '#d2c6b0', '#efe7d6'];
  var VX = 640, VY = 350;
  function toVP(x, y, k) { return [(VX + (x - VX) * k).toFixed(1), (VY + (y - VY) * k).toFixed(1)]; }

  function windows(side) {
    var s = '', ks = [1, .78, .6, .46, .36];
    for (var i = 0; i < ks.length - 1; i++) {
      var k1 = ks[i] - .05, k2 = ks[i + 1] + .04, x = side < 0 ? 0 : 1200;
      var a = toVP(x, 150, k1), b = toVP(x, 150, k2), c = toVP(x, 430, k2), d = toVP(x, 430, k1);
      var pts = a.join(' ') + ' ' + b.join(' ') + ' ' + c.join(' ') + ' ' + d.join(' ');
      s += '<polygon points="' + pts + '" fill="url(#p-brick)"/><polygon points="' + pts + '" fill="' + T[0] + '" opacity="' + (.25 + i * .15) + '"/>' +
        '<polygon points="' + pts + '" fill="none" stroke="' + T[5] + '" stroke-width="' + (8 * k1).toFixed(1) + '"/>';
    }
    return s;
  }
  function person(x, y, sc, o) {
    /* a seated figure seen from behind or the side: body, head, hair */
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + sc + ')">' +
      '<path d="M-30 90c0-50 10-80 30-84 20 4 30 34 30 84z" fill="' + (o.coat || T[1]) + '"/>' +
      '<ellipse cx="0" cy="-12" rx="15" ry="18" fill="' + (o.skin || T[6]) + '"/>' +
      '<path d="' + (o.hair || 'M-16-14c0-16 8-24 16-24s16 8 16 24c-4-8-10-12-16-12s-12 4-16 12z') + '" fill="' + (o.hairc || T[1]) + '"/>' + (o.extra || '') + '</g>';
  }

  Art.salon = function () {
    var s = '<svg class="scene" viewBox="0 0 1200 800" role="img" aria-label="Photograph of the salon car, plate 12">';
    s += '<rect width="1200" height="800" fill="' + T[2] + '"/>';
    /* ceiling, clerestory and lamps */
    s += '<path d="M0 0h1200L760 250H520z" fill="' + T[3] + '"/><path d="M180 0 560 250M1020 0 720 250" stroke="' + T[4] + '" stroke-width="4"/>';
    [.95, .7, .52, .4].forEach(function (k) {
      var p = toVP(640, 40, k);
      s += '<ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="' + (60 * k).toFixed(1) + '" ry="' + (12 * k).toFixed(1) + '" fill="' + T[7] + '"/>' +
        '<ellipse cx="' + p[0] + '" cy="' + (+p[1] + 14 * k).toFixed(1) + '" rx="' + (90 * k).toFixed(1) + '" ry="' + (30 * k).toFixed(1) + '" fill="' + T[8] + '" opacity=".08"/>';
    });
    /* side walls and floor */
    s += '<path d="M0 0 520 250v220L0 800z" fill="' + T[3] + '"/><path d="M1200 0 760 250v220l440 330z" fill="' + T[3] + '"/>' +
      '<defs><pattern id="p-carpet-bw" width="18" height="18" patternUnits="userSpaceOnUse"><rect width="18" height="18" fill="' + T[2] + '"/><path d="M9 2 16 9 9 16 2 9z" fill="none" stroke="' + T[3] + '" stroke-width="1.4"/><circle cx="9" cy="9" r="1.6" fill="' + T[4] + '"/></pattern></defs>' +
      '<path d="M520 470h240l440 330H0z" fill="url(#p-carpet-bw)"/>';
    s += windows(-1) + windows(1);
    /* far end: the bar, the bottles and the railway clock */
    s += '<rect x="520" y="250" width="240" height="220" fill="' + T[4] + '"/>' +
      '<rect x="536" y="330" width="208" height="56" fill="' + T[2] + '"/><path d="M536 350h208M536 368h208" stroke="' + T[5] + '" stroke-width="1.5"/>';
    for (var b = 0; b < 16; b++) {
      var bx = 544 + b * 12.6, bh = 12 + (b * 7) % 9;
      s += '<rect x="' + bx.toFixed(1) + '" y="' + (349 - bh) + '" width="7" height="' + bh + '" rx="2" fill="' + (b % 3 ? T[6] : T[7]) + '"/>';
    }
    s += Art.dial(640, 292, 28, 22, 31, { face: T[8], ink: T[0], rim: T[1] }) +
      '<path d="M640 262v-8" stroke="' + T[1] + '" stroke-width="3"/>';
    s += '<path d="M600 390c0-22 18-34 40-34s40 12 40 34v20h-80z" fill="' + T[8] + '"/><circle cx="640" cy="372" r="11" fill="' + T[6] + '"/>' +
      '<path d="M629 368c2-10 20-10 22 0-6-4-16-4-22 0z" fill="' + T[0] + '"/><path d="M634 394l6 8 6-8" stroke="' + T[0] + '" stroke-width="3" fill="none"/>';
    s += '<path d="M526 402h228l12 20H514z" fill="' + T[6] + '"/><rect x="514" y="422" width="252" height="52" fill="' + T[3] + '"/>' +
      '<path d="M530 440h220" stroke="' + T[5] + '" stroke-width="2"/>';
    /* Miss Pryor on a bar stool, writing, a gin fizz at her elbow */
    s += '<path d="M572 474v-40M584 474v-40" stroke="' + T[6] + '" stroke-width="3"/><ellipse cx="578" cy="432" rx="16" ry="5" fill="' + T[1] + '"/>' +
      person(578, 380, .62, { coat: T[5], hairc: T[2], hair: 'M-17-8c-2-20 8-30 17-30s19 10 17 30c-3-10-9-16-17-16s-14 6-17 16z', extra: '<circle cx="14" cy="-20" r="8" fill="' + T[2] + '"/><path d="M-18-26c6-14 30-18 38-6-12-2-26 0-38 6z" fill="' + T[1] + '"/>' }) +
      '<path d="M596 396l14-4 3 5-14 4z" fill="' + T[8] + '"/><path d="M545 400l-3-18h12l-3 18z" fill="' + T[7] + '" opacity=".8"/>';
    /* two card players at a table, right, middle distance */
    s += '<ellipse cx="800" cy="480" rx="44" ry="11" fill="' + T[6] + '"/><path d="M800 490v26" stroke="' + T[2] + '" stroke-width="5"/>' +
      person(772, 452, .55, { coat: T[1], hairc: T[4] }) + person(830, 452, .55, { coat: T[2], hairc: T[1] }) +
      '<path d="M790 476l8-3 3 4-8 3zM806 474l8 2-2 4-8-2z" fill="' + T[8] + '"/>';
    /* Klara Imhof at the writing desk on the right wall */
    s += '<path d="M900 470 1010 454v70l-110 8z" fill="' + T[4] + '"/><path d="M900 470 1010 454l30 14-120 16z" fill="' + T[6] + '"/>' +
      '<path d="M952 452l40-6v-26l-40 6z" fill="' + T[2] + '"/>' +
      person(930, 430, .9, { coat: T[2], hairc: T[0], hair: 'M-16-12c0-18 8-26 16-26s16 8 16 26c-4-10-10-14-16-14s-12 4-16 14z', extra: '<circle cx="0" cy="-36" r="9" fill="' + T[0] + '"/>' }) +
      '<path d="M946 452l30-4" stroke="' + T[8] + '" stroke-width="3"/><path d="M958 440l10 10" stroke="' + T[0] + '" stroke-width="2"/>';
    /* foreground: table 4, Madame Duclos alone, one cup, Albert's watch open beside it, an empty chair opposite */
    s += '<path d="M470 560c30 0 60 6 60 40v200H400V620c0-40 40-60 70-60z" fill="' + T[4] + '"/><path d="M420 590c20-14 60-16 90-6" stroke="' + T[6] + '" stroke-width="4" fill="none"/>' +
      '<path d="M404 640h140v40H404z" fill="' + T[3] + '"/>';
    s += '<ellipse cx="310" cy="640" rx="190" ry="62" fill="' + T[7] + '"/><path d="M120 640c0 20 80 62 190 62s190-42 190-62v14c0 20-80 62-190 62S120 674 120 654z" fill="' + T[5] + '"/>' +
      '<path d="M290 716h40v84h-40z" fill="' + T[1] + '"/>';
    s += '<g><path d="M40 800c0-110 20-190 70-200 30 6 60 20 76 50l40 40-14 16-60-26c-6 40-10 80-10 120z" fill="' + T[0] + '"/>' +
      '<path d="M84 600c20 10 44 10 60 0l-4 16c-16 6-36 6-52 0z" fill="' + T[8] + '"/>' +
      '<ellipse cx="118" cy="560" rx="30" ry="36" fill="' + T[6] + '"/><path d="M94 556c4-26 18-34 30-32 14 2 24 14 22 34-6-14-14-20-26-20s-22 8-26 18z" fill="' + T[8] + '"/>' +
      '<circle cx="104" cy="522" r="14" fill="' + T[8] + '"/><path d="M134 564q6 4 12 2" stroke="' + T[2] + '" stroke-width="2" fill="none"/><circle cx="136" cy="554" r="2.4" fill="' + T[0] + '"/>' +
      '<path d="M226 666c10-2 20 0 26 6l-4 8c-8-4-16-4-24-2z" fill="' + T[6] + '"/></g>';
    s += '<ellipse cx="300" cy="640" rx="34" ry="10" fill="' + T[8] + '" stroke="' + T[4] + '" stroke-width="2"/>' +
      '<path d="M282 636c0 14 8 20 18 20s18-6 18-20z" fill="' + T[8] + '" stroke="' + T[3] + '" stroke-width="2"/><path d="M318 640c8 0 10 8 2 10" stroke="' + T[3] + '" stroke-width="2.4" fill="none"/>' +
      '<ellipse cx="300" cy="638" rx="15" ry="4" fill="' + T[5] + '"/><path d="M296 624c-4-8 4-10 0-18M304 624c-4-8 4-10 0-18" stroke="' + T[7] + '" stroke-width="1.5" fill="none" opacity=".6"/>';
    s += '<path d="M190 648l40-12 30 10-40 12z" fill="' + T[2] + '"/><path d="M196 650l34-10" stroke="' + T[6] + '" stroke-width="1"/>';
    s += '<g class="duclos-watch"><ellipse cx="392" cy="628" rx="21" ry="9" fill="' + T[5] + '" stroke="' + T[1] + '" stroke-width="1.5"/>' +
      '<path d="M388 612c-4-6-2-10 4-10s8 4 4 10" fill="none" stroke="' + T[5] + '" stroke-width="3"/>' +
      '<g transform="translate(392 648)">' + Art.dial(0, 0, 17, 21, 31, { face: T[8], ink: T[0], rim: T[5] }) + '</g>' +
      '<path d="M410 652c16 4 26 10 34 20" stroke="' + T[5] + '" stroke-width="2" stroke-dasharray="3 2" fill="none"/></g>';
    /* plate number scratched into the emulsion, flash falloff, grain */
    s += '<rect width="1200" height="800" fill="url(#g-flash)"/><rect class="grain" width="1200" height="800" filter="url(#f-grain)" opacity=".3"/>' +
      '<text x="1170" y="780" text-anchor="end" font-family="Courier Prime,monospace" font-size="26" fill="' + T[8] + '" opacity=".8">12</text></svg>';
    return s;
  };
})();
