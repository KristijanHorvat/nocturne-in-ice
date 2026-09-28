/* Nocturne in Ice: shared art. Every picture in the game is SVG drawn in code. */
(function () {
  'use strict';
  var Art = (window.Art = {});

  var SPRITE = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="position:absolute;width:0;height:0;overflow:hidden"><defs>' +
    /* The Nocturne's mark: a crescent moon over a peak, with rails running into it */
    '<symbol id="mark" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" stroke-width="4"/>' +
    '<circle cx="50" cy="50" r="39" fill="none" stroke="currentColor" stroke-width="1.5"/>' +
    '<path d="M14 66 38 34l9 11 12-19 27 40z" fill="currentColor"/><path d="M38 34l4 5-5 3-3-4zM59 26l6 10-6-2-4 3z" fill="#fff" opacity=".85"/>' +
    '<path d="M66 16a11 11 0 1 0 9 17 9 9 0 1 1-9-17z" fill="currentColor"/>' +
    '<path d="M30 92 46 66M70 92 54 66M34 86h32M38 80h24M42 74h16" stroke="currentColor" stroke-width="2.4" fill="none"/></symbol>' +
    /* Police shield */
    '<symbol id="shield" viewBox="0 0 100 116"><path d="M50 4 94 16v38c0 30-20 50-44 58C26 104 6 84 6 54V16z" fill="none" stroke="currentColor" stroke-width="6"/>' +
    '<path d="M20 74 40 44l8 10 10-18 22 38z" fill="currentColor"/><path d="M50 18l4 9 10 1-8 6 3 10-9-6-9 6 3-10-8-6 10-1z" fill="currentColor"/></symbol>' +
    /* Edelweiss */
    '<symbol id="edelweiss" viewBox="0 0 100 100"><g fill="currentColor">' +
    [0, 45, 90, 135, 180, 225, 270, 315].map(function (a) {
      return '<path transform="rotate(' + a + ' 50 50)" d="M50 50C44 38 44 20 50 8c6 12 6 30 0 42z"/>';
    }).join('') + '</g><circle cx="50" cy="50" r="10" fill="#e8d9a8"/><circle cx="46" cy="47" r="2.5" fill="#b69b54"/><circle cx="54" cy="48" r="2.5" fill="#b69b54"/><circle cx="50" cy="55" r="2.5" fill="#b69b54"/></symbol>' +
    /* Snowflake */
    '<symbol id="flake" viewBox="0 0 40 40"><g stroke="currentColor" stroke-width="2.2" stroke-linecap="round" fill="none">' +
    [0, 60, 120].map(function (a) { return '<g transform="rotate(' + a + ' 20 20)"><path d="M20 3v34M20 9l-4-4M20 9l4-4M20 31l-4 4M20 31l4 4"/></g>'; }).join('') + '</g></symbol>' +
    '<linearGradient id="g-brass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f3dea0"/><stop offset=".5" stop-color="#c9a55a"/><stop offset="1" stop-color="#7d6128"/></linearGradient>' +
    '<linearGradient id="g-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#050a16"/><stop offset=".6" stop-color="#0e1a33"/><stop offset="1" stop-color="#1c2c4c"/></linearGradient>' +
    '<linearGradient id="g-snow" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9f0f7"/><stop offset="1" stop-color="#9fb2c9"/></linearGradient>' +
    '<linearGradient id="g-rock" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2d3c58"/><stop offset="1" stop-color="#121b2e"/></linearGradient>' +
    '<linearGradient id="g-wood" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5b2f1a"/><stop offset=".5" stop-color="#6e3a20"/><stop offset="1" stop-color="#3d1d0e"/></linearGradient>' +
    '<linearGradient id="g-wood2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7a4526"/><stop offset="1" stop-color="#4a2512"/></linearGradient>' +
    '<linearGradient id="g-plush" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2f4a3f"/><stop offset="1" stop-color="#1a2c25"/></linearGradient>' +
    '<linearGradient id="g-linen" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6f3ea"/><stop offset="1" stop-color="#d8d2c2"/></linearGradient>' +
    '<radialGradient id="g-lamp" cx=".5" cy=".3" r=".7"><stop offset="0" stop-color="#fff4cf"/><stop offset=".5" stop-color="#f1c66e"/><stop offset="1" stop-color="#b07a26"/></radialGradient>' +
    '<radialGradient id="g-glow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffd98a" stop-opacity=".55"/><stop offset="1" stop-color="#ffd98a" stop-opacity="0"/></radialGradient>' +
    '<radialGradient id="g-flash" cx=".5" cy=".42" r=".75"><stop offset="0" stop-color="#fff" stop-opacity=".22"/><stop offset=".6" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".4"/></radialGradient>' +
    '<radialGradient id="g-moon" cx=".4" cy=".4" r=".6"><stop offset="0" stop-color="#fffbe9"/><stop offset="1" stop-color="#d8d3bd"/></radialGradient>' +
    '<pattern id="p-brick" width="24" height="12" patternUnits="userSpaceOnUse"><rect width="24" height="12" fill="#2a2420"/><path d="M0 .5h24M0 6.5h24M6 .5v6M18 6.5v6" stroke="#15110e" stroke-width="1.2"/></pattern>' +
    '<pattern id="p-carpet" width="18" height="18" patternUnits="userSpaceOnUse"><rect width="18" height="18" fill="#5b1a22"/><path d="M9 2 16 9 9 16 2 9z" fill="none" stroke="#8a3a2e" stroke-width="1.4"/><circle cx="9" cy="9" r="1.6" fill="#c9a55a"/></pattern>' +
    '<pattern id="p-marq" width="16" height="16" patternUnits="userSpaceOnUse"><rect width="16" height="16" fill="#6e3a20"/><path d="M0 8h16M8 0v16" stroke="#8a5230" stroke-width="1"/><circle cx="8" cy="8" r="2" fill="#d9b779" opacity=".6"/></pattern>' +
    '<filter id="f-soft" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1.2"/></filter>' +
    '<filter id="f-grain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch"/>' +
    '<feColorMatrix values="0 0 0 0 .5  0 0 0 0 .5  0 0 0 0 .5  0 0 0 .35 0"/></filter>' +
    '</defs></svg>';

  function inject() { if (!document.getElementById('mark')) document.body.insertAdjacentHTML('afterbegin', SPRITE); }
  if (document.body) inject(); else document.addEventListener('DOMContentLoaded', inject);

  Art.mark = function (cls) { return '<svg class="' + (cls || 'mark') + '" viewBox="0 0 100 100" aria-hidden="true"><use href="#mark"/></svg>'; };
  Art.shield = function (cls) { return '<svg class="' + (cls || 'shield') + '" viewBox="0 0 100 116" aria-hidden="true"><use href="#shield"/></svg>'; };

  /* An analogue watch or clock face. hh/mm are the time shown. */
  Art.dial = function (cx, cy, r, hh, mm, o) {
    o = o || {};
    var face = o.face || '#fbf8ef', ink = o.ink || '#15171c', ticks = '';
    for (var i = 0; i < 60; i++) {
      var a = i * 6 * Math.PI / 180, big = i % 5 === 0, r1 = r * (big ? .76 : .86), r2 = r * .93;
      if (!big && r < 14) continue;
      ticks += '<line x1="' + (cx + Math.sin(a) * r1).toFixed(2) + '" y1="' + (cy - Math.cos(a) * r1).toFixed(2) + '" x2="' + (cx + Math.sin(a) * r2).toFixed(2) +
        '" y2="' + (cy - Math.cos(a) * r2).toFixed(2) + '" stroke="' + ink + '" stroke-width="' + (big ? r * .07 : r * .025).toFixed(2) + '"/>';
    }
    var ha = ((hh % 12) + mm / 60) * 30 * Math.PI / 180, ma = mm * 6 * Math.PI / 180;
    var hand = function (ang, len, w) {
      return '<line x1="' + cx + '" y1="' + cy + '" x2="' + (cx + Math.sin(ang) * len).toFixed(2) + '" y2="' + (cy - Math.cos(ang) * len).toFixed(2) +
        '" stroke="' + ink + '" stroke-width="' + w.toFixed(2) + '" stroke-linecap="round"/>';
    };
    return '<g class="dial">' + (o.rim ? '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r * 1.12).toFixed(2) + '" fill="' + o.rim + '"/>' : '') +
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + face + '" stroke="' + ink + '" stroke-width="' + (r * .05).toFixed(2) + '"/>' + ticks +
      hand(ha, r * .5, r * .11) + hand(ma, r * .78, r * .07) + (o.sec ? hand(o.sec * 6 * Math.PI / 180, r * .8, r * .025) : '') +
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r * .08).toFixed(2) + '" fill="' + ink + '"/></g>';
  };

  var ICONS = {
    letter: '<rect x="8" y="14" width="48" height="36" rx="2"/><path d="M8 16l24 18 24-18"/>',
    report: '<rect x="14" y="6" width="36" height="52" rx="2"/><path d="M21 18h22M21 26h22M21 34h22M21 42h14"/>',
    photo: '<rect x="6" y="14" width="52" height="38" rx="3"/><circle cx="32" cy="33" r="10"/><path d="M20 14l4-6h16l4 6"/>',
    dossier: '<circle cx="24" cy="22" r="8"/><path d="M10 48c2-10 8-14 14-14s12 4 14 14"/><path d="M40 20h16M40 28h16M40 36h12"/>',
    timetable: '<rect x="10" y="6" width="44" height="52" rx="2"/><path d="M16 16h32M16 24h32M16 32h32M16 40h32M16 48h32M30 12v42"/>',
    plan: '<rect x="4" y="22" width="56" height="20" rx="3"/><path d="M14 22v20M24 22v20M34 22v20M44 22v20M4 32h56"/><circle cx="12" cy="46" r="3"/><circle cx="52" cy="46" r="3"/>',
    interview: '<path d="M8 12h36v24H24l-10 8v-8H8z"/><path d="M50 22h6v22h-6v8l-8-8H30"/>',
    typed: '<rect x="12" y="4" width="40" height="30" rx="1"/><rect x="6" y="34" width="52" height="22" rx="3"/><path d="M14 42h4M22 42h4M30 42h4M38 42h4M46 42h4M20 49h24"/>',
    notebook: '<rect x="14" y="6" width="38" height="52" rx="3"/><path d="M14 6v52M22 18h22M22 26h22M22 34h16"/><path d="M10 14h8M10 24h8M10 34h8M10 44h8"/>',
    ledger: '<path d="M6 12c10-4 18-4 26 2 8-6 16-6 26-2v40c-10-4-18-4-26 2-8-6-16-6-26-2z"/><path d="M32 14v40"/>',
    contract: '<rect x="12" y="6" width="40" height="52" rx="2"/><path d="M18 16h28M18 24h28M18 32h20"/><path d="M20 48c4-6 6 2 10-2s6 2 10 0"/>',
    card: '<rect x="8" y="10" width="48" height="44" rx="3"/><rect x="14" y="18" width="10" height="5"/><rect x="34" y="26" width="14" height="5"/><rect x="18" y="36" width="8" height="5"/><rect x="36" y="44" width="10" height="5"/>',
    clipping: '<path d="M8 8h48v48H8z"/><path d="M14 16h36M14 24h16M14 30h16M14 36h16M36 24h14v14H36zM14 44h36"/>',
    log: '<rect x="12" y="6" width="40" height="52" rx="2"/><path d="M20 16h6M30 16h16M20 26h6M30 26h16M20 36h6M30 36h16M20 46h6M30 46h12"/>',
    chits: '<path d="M12 8h26v44l-4-3-5 3-4-3-5 3-4-3-4 3z"/><path d="M26 14h24v42l-4-3-4 3-4-3-4 3-4-3-4 3z"/><path d="M31 22h14M31 30h14M31 38h8"/>',
    torn: '<path d="M10 10h20l-4 10 6 8-4 10 6 8-4 8H10z"/><path d="M36 10h18v44H40l4-8-6-8 4-10-6-8z"/>',
    telegram: '<rect x="6" y="12" width="52" height="40" rx="2"/><path d="M12 22h40M12 30h28M12 38h34M12 46h20"/><path d="M44 42l8 8"/>',
    customs: '<rect x="8" y="8" width="48" height="48" rx="3"/><circle cx="32" cy="30" r="12"/><path d="M26 30h12M32 24v12M16 48h32"/>',
    medical: '<rect x="8" y="16" width="48" height="36" rx="4"/><path d="M24 16v-6h16v6M32 26v16M24 34h16"/>'
  };
  Art.icon = function (kind) {
    return '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      (ICONS[kind] || ICONS.report) + '</svg>';
  };
})();
