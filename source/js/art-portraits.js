/* Nocturne in Ice: suspect portraits, drawn like 1930s poster art. viewBox 200 x 240. */
(function () {
  'use strict';
  var Art = window.Art;

  function bg(id, c1, c2) {
    var rays = '';
    for (var i = 0; i < 18; i++) {
      var a = (i * 20 - 90) * Math.PI / 180, b = (i * 20 - 84) * Math.PI / 180;
      rays += '<path d="M100 130L' + (100 + Math.cos(a) * 260).toFixed(1) + ' ' + (130 + Math.sin(a) * 260).toFixed(1) + 'L' +
        (100 + Math.cos(b) * 260).toFixed(1) + ' ' + (130 + Math.sin(b) * 260).toFixed(1) + 'z" fill="#fff" opacity=".05"/>';
    }
    return '<defs><radialGradient id="pb-' + id + '" cx=".5" cy=".45" r=".75"><stop offset="0" stop-color="' + c1 + '"/><stop offset="1" stop-color="' + c2 + '"/></radialGradient></defs>' +
      '<rect width="200" height="240" fill="url(#pb-' + id + ')"/>' + rays +
      '<circle cx="100" cy="112" r="78" fill="none" stroke="#e7cf92" stroke-opacity=".35" stroke-width="1.5"/>';
  }
  function face(skin, o) {
    o = o || {};
    var jaw = o.jaw || 'M70 96c0 34 14 56 30 56s30-22 30-56c0-26-12-40-30-40S70 70 70 96z';
    return '<path d="M86 148h28v26H86z" fill="' + skin + '"/><path d="M86 160c8 6 20 6 28 0v6c-8 5-20 5-28 0z" fill="#000" opacity=".12"/>' +
      '<path d="' + jaw + '" fill="' + skin + '"/>' +
      '<ellipse cx="69" cy="104" rx="5" ry="9" fill="' + skin + '"/><ellipse cx="131" cy="104" rx="5" ry="9" fill="' + skin + '"/>' +
      '<path d="M80 92q8-5 15 0" stroke="' + (o.brow || '#2a1d14') + '" stroke-width="' + (o.bw || 3) + '" fill="none" stroke-linecap="round"/>' +
      '<path d="M105 92q8-5 15 0" stroke="' + (o.brow || '#2a1d14') + '" stroke-width="' + (o.bw || 3) + '" fill="none" stroke-linecap="round"/>' +
      '<path d="M81 101q7-5 13 0q-7 4-13 0z" fill="#fff"/><path d="M106 101q7-5 13 0q-7 4-13 0z" fill="#fff"/>' +
      '<circle cx="87.5" cy="100.6" r="2.6" fill="' + (o.eye || '#2b2118') + '"/><circle cx="112.5" cy="100.6" r="2.6" fill="' + (o.eye || '#2b2118') + '"/>' +
      '<path d="M100 104q-3 12-6 16q6 3 11 0" stroke="#000" stroke-opacity=".3" stroke-width="1.6" fill="none"/>' +
      '<path d="' + (o.mouth || 'M91 132q9 4 18 0') + '" stroke="' + (o.lip || '#7a3a30') + '" stroke-width="' + (o.lw || 2.6) + '" fill="' + (o.lipFill || 'none') + '" stroke-linecap="round"/>' +
      '<ellipse cx="80" cy="118" rx="7" ry="4" fill="#e0776a" opacity="' + (o.blush || .12) + '"/><ellipse cx="120" cy="118" rx="7" ry="4" fill="#e0776a" opacity="' + (o.blush || .12) + '"/>';
  }
  var jacket = function (col, lapel) {
    return '<path d="M20 240c4-44 30-66 80-72 50 6 76 28 80 72z" fill="' + col + '"/>' +
      '<path d="M84 168l16 44 16-44-16 8z" fill="#f4f1ea"/><path d="M78 170l22 60-30-40 6-8zM122 170l-22 60 30-40-6-8z" fill="' + (lapel || '#000') + '" opacity=".35"/>';
  };

  var P = {};
  P.baron = function () {
    return bg('baron', '#3a4f7a', '#0d1528') +
      '<path d="M14 240c6-52 34-74 86-78 52 4 80 26 86 78z" fill="#2b2522"/>' +
      '<path d="M40 190c14-24 36-30 60-28-30 6-44 24-50 50zM160 190c-14-24-36-30-60-28 30 6 44 24 50 50z" fill="#8a7358"/>' +
      '<path d="M44 188c10-8 18-10 24-8M156 188c-10-8-18-10-24-8" stroke="#b39a78" stroke-width="3" fill="none"/>' +
      '<path d="M86 170l14 34 14-34-14 6z" fill="#f4f1ea"/><path d="M95 180h10l-2 8h-6z" fill="#1c1c24"/>' +
      face('#d9ae8c', { brow: '#1a1410', mouth: 'M91 131q9 2 18 0' }) +
      '<path d="M121 108l8 14" stroke="#b77a66" stroke-width="2.4" stroke-linecap="round"/><path d="M121 108l8 14" stroke="#f3d2c0" stroke-width=".8" stroke-linecap="round"/>' +
      '<path d="M68 96c-4-30 12-46 34-46 22 0 36 14 32 44-2-14-10-26-30-26-12 0-26 6-36 28z" fill="#1c1611"/>' +
      '<path d="M80 60c10-6 32-6 44 4" stroke="#3b3027" stroke-width="2" fill="none"/>' +
      /* his left hand, raised to the lapel: the watch sits on the left wrist, and the little finger is short */
      '<g class="baron-hand"><path d="M150 240c-2-26 2-44 10-52l20 4c2 20-2 36-6 48z" fill="#2b2522"/>' +
      '<rect x="146" y="176" width="22" height="12" rx="3" fill="#5a3b22"/><circle cx="157" cy="182" r="5.2" fill="#e9dfc4" stroke="#b58e3e" stroke-width="1.4"/>' +
      '<path d="M157 182v-3M157 182l2.4 1.2" stroke="#222" stroke-width=".8"/><rect x="150.5" y="180.5" width="2.6" height="3" fill="#b58e3e"/>' +
      '<path d="M146 178c-2-8 0-16 4-20h20c4 4 4 12 2 20z" fill="#d9ae8c"/>' +
      '<rect x="147.5" y="140" width="6.4" height="22" rx="3.2" fill="#d9ae8c"/><rect x="154.6" y="137" width="6.4" height="25" rx="3.2" fill="#d9ae8c"/>' +
      '<rect x="161.7" y="140" width="6.4" height="22" rx="3.2" fill="#d9ae8c"/><path d="M168.6 152.5h6v9.5h-6z" fill="#d9ae8c"/><path d="M168.6 152.5h6" stroke="#b98a6c" stroke-width="1.4"/>' +
      '<path d="M148 172c-6-2-9-8-9-14l5-1c1 5 3 8 6 9z" fill="#d9ae8c"/>' +
      '<path d="M154.2 146v14M161.3 146v14M168.3 148v12" stroke="#a67b60" stroke-width=".8"/>'+
      '</g>';
  };
  P.margit = function () {
    return bg('margit', '#6a7fa0', '#1b2436') +
      '<path d="M22 240c6-40 30-62 78-66 48 4 72 26 78 66z" fill="#c9ccd4"/>' +
      '<path d="M24 214c16-36 44-48 76-46-40 10-50 30-52 72H24zM176 214c-16-36-44-48-76-46 40 10 50 30 52 72h24z" fill="#e4e7ee"/>' +
      '<path d="M34 206c8-8 14-10 20-10M42 222c8-6 12-8 18-8M166 206c-8-8-14-10-20-10M158 222c-8-6-12-8-18-8" stroke="#a9aeba" stroke-width="2" fill="none"/>' +
      face('#f0cdb4', { brow: '#8a6a3a', bw: 2, lip: '#b3283a', lipFill: '#b3283a', mouth: 'M92 131q8-4 16 0q-8 5-16 0z', blush: .25, eye: '#3d5a7a' }) +
      '<path d="M66 100c-6-34 10-52 34-52s40 18 34 52c-2-18-6-24-12-28 2 10-2 16-8 18 2-8-4-16-14-18-10 4-12 12-22 14 4-6 6-10 4-14-10 6-14 14-16 28z" fill="#e2c37a"/>' +
      '<path d="M76 66q12 8 24 0M96 58q12 8 26 2" stroke="#b8963e" stroke-width="2" fill="none"/>' +
      '<circle cx="69" cy="116" r="3.2" fill="#f7f4ea"/><circle cx="131" cy="116" r="3.2" fill="#f7f4ea"/>';
  };
  P.raoul = function () {
    return bg('raoul', '#7a5a3a', '#221509') + jacket('#15161c', '#000') +
      '<path d="M92 170l8 6 8-6-2 10h-12z" fill="#15161c"/><path d="M90 172l10 4 10-4-10 10z" fill="#1f2a44"/>' +
      face('#e4b99a', { brow: '#3a2a1a', mouth: 'M92 134q8-3 16 0' }) +
      '<path d="M86 126q14-8 28 0q-14 4-28 0z" fill="#4a3322"/>' +
      '<path d="M68 94c-2-28 12-42 32-42 22 0 34 12 32 42-4-18-16-26-32-26-16 0-26 8-32 26z" fill="#4a3322"/><path d="M72 76l56-4" stroke="#ecd9b8" stroke-opacity=".25" stroke-width="3"/>' +
      '<circle cx="88" cy="101" r="10" fill="none" stroke="#b58e3e" stroke-width="2"/><circle cx="112" cy="101" r="10" fill="none" stroke="#b58e3e" stroke-width="2"/><path d="M98 100h4" stroke="#b58e3e" stroke-width="2"/>';
  };
  P.baric = function () {
    return bg('baric', '#6e6a3e', '#1b1a0c') +
      '<path d="M20 240c4-44 30-66 80-72 50 6 76 28 80 72z" fill="#6b5a44"/><path d="M20 240c4-44 30-66 80-72 50 6 76 28 80 72z" fill="url(#p-marq)" opacity=".18"/>' +
      '<path d="M84 168l16 30 16-30-16 6z" fill="#e8e2d0"/><path d="M92 178h16l-3 26h-10z" fill="#7a2a24"/>' +
      face('#dcb08e', { brow: '#555', bw: 3.4, mouth: 'M92 133q8 2 16 0' }) +
      '<path d="M72 116c4 30 16 42 28 42s24-12 28-42c-4 10-10 16-14 18-6-4-22-4-28 0-4-2-10-8-14-18z" fill="#6f6a64"/>' +
      '<path d="M66 96c-4-32 14-48 36-46 20 2 36 18 30 46-2-12-6-20-12-24-6 4-30 6-40 0-8 6-12 14-14 24z" fill="#77706a"/>' +
      '<path d="M70 70q8-10 16-6M88 58q10-6 18 0M112 60q10 0 14 10" stroke="#9c958d" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<g transform="translate(0 -16)"><circle cx="86" cy="78" r="9" fill="#9fc3d8" opacity=".5" stroke="#3a3530" stroke-width="2.5"/><circle cx="114" cy="78" r="9" fill="#9fc3d8" opacity=".5" stroke="#3a3530" stroke-width="2.5"/><path d="M95 78h10" stroke="#3a3530" stroke-width="2.5"/></g>' +
      '<path d="M130 188q10 20 4 52" stroke="#c9a55a" stroke-width="1.6" fill="none"/><circle cx="134" cy="226" r="7" fill="#262626" stroke="#c9a55a" stroke-width="2"/>';
  };
  P.stoffel = function () {
    return bg('stoffel', '#4a3a6a', '#130e22') +
      '<path d="M20 240c4-44 30-66 80-72 50 6 76 28 80 72z" fill="#3b2a1e"/><path d="M84 168l16 22 16-22-16 4z" fill="#eee9dc"/><path d="M96 182h8v22h-8z" fill="#141414"/>' +
      '<circle cx="100" cy="212" r="3.4" fill="#d6b465"/><circle cx="100" cy="228" r="3.4" fill="#d6b465"/><path d="M40 204h26M134 204h26" stroke="#d6b465" stroke-width="3"/>' +
      face('#e2b394', { brow: '#8c8c8c', mouth: 'M92 135q8 1 16 0' }) +
      '<path d="M84 126q16-10 32 0q-4 6-16 4q-12 2-16-4z" fill="#a8a8a8"/>' +
      '<path d="M66 82c0-18 16-28 34-28s34 10 34 28z" fill="#2b2016"/><path d="M60 84h80q2 8-8 8H68q-10 0-8-8z" fill="#1a130c"/>' +
      '<rect x="92" y="62" width="16" height="12" rx="2" fill="#d6b465"/><path d="M96 68h8" stroke="#2b2016" stroke-width="2"/>' +
      '<path d="M70 92c-2 4-2 8-1 12M130 92c2 4 2 8 1 12" stroke="#9a9a9a" stroke-width="4" stroke-linecap="round"/>';
  };
  P.pryor = function () {
    return bg('pryor', '#3a6a5a', '#0b1f19') +
      '<path d="M20 240c4-44 30-66 80-72 50 6 76 28 80 72z" fill="#b39a6c"/><path d="M60 176l40 26 40-26-10 64H70z" fill="#9c845a"/>' +
      '<path d="M84 170l16 18 16-18" stroke="#6e5a3a" stroke-width="3" fill="none"/><path d="M88 174h24l-12 14z" fill="#2f5a4c"/>' +
      face('#f1c9ac', { brow: '#6a2e16', bw: 2.2, lip: '#9c2a2a', lipFill: '#9c2a2a', mouth: 'M92 131q8-3 16 0q-8 4-16 0z', blush: .2, eye: '#2e5a3a' }) +
      '<path d="M66 106c-8-38 12-56 36-54 24 2 38 22 30 54-2-20-12-32-30-34-12 8-26 12-36 34z" fill="#9a3c1c"/>' +
      '<circle cx="130" cy="74" r="14" fill="#9a3c1c"/><path d="M60 70c10-20 34-30 60-24 12 3 18 8 20 14-26-6-54-4-80 10z" fill="#1d3a31"/><circle cx="118" cy="46" r="3" fill="#1d3a31"/>' +
      '<path d="M134 88l14-26" stroke="#e0c070" stroke-width="3.2" stroke-linecap="round"/><path d="M147 64l2-3" stroke="#333" stroke-width="3" stroke-linecap="round"/>';
  };
  P.klara = function () {
    return bg('klara', '#7a3a4a', '#1f0a12') +
      '<path d="M22 240c6-40 30-62 78-66 48 4 72 26 78 66z" fill="#26324a"/><path d="M80 170c8 12 32 12 40 0l-4 18H84z" fill="#f4f1ea"/>' +
      '<path d="M84 172q16 12 32 0" stroke="#d8d2c2" stroke-width="2" fill="none"/><circle cx="100" cy="194" r="5" fill="#c9a55a" stroke="#7d6128" stroke-width="1.2"/>' +
      face('#efd0b8', { brow: '#2a1a12', bw: 2.2, lip: '#a0464a', mouth: 'M92 132q8 3 16 0', blush: .18 }) +
      '<path d="M68 104c-6-34 10-52 32-52s38 18 32 52c-4-22-14-34-32-34s-28 12-32 34z" fill="#2a1a12"/><path d="M100 54v18" stroke="#1a0f0a" stroke-width="2"/>' +
      '<circle cx="100" cy="48" r="13" fill="#2a1a12"/><path d="M90 46q10-6 20 0" stroke="#4a3022" stroke-width="2" fill="none"/>' +
      '<circle cx="88" cy="101" r="9.5" fill="none" stroke="#1a1a1a" stroke-width="1.6"/><circle cx="112" cy="101" r="9.5" fill="none" stroke="#1a1a1a" stroke-width="1.6"/><path d="M97.5 100h5" stroke="#1a1a1a" stroke-width="1.6"/>';
  };

  Art.portrait = function (id, cls) {
    return '<svg class="' + (cls || 'portrait') + '" viewBox="0 0 200 240" role="img" aria-hidden="true">' + (P[id] ? P[id]() : '') + '</svg>';
  };
})();
