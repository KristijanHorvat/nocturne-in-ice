/* Nocturne in Ice: the title scene, the Nocturne crossing a viaduct under the Grauhorn at night; plus small drawings. */
(function () {
  'use strict';
  var Art = window.Art;

  function stars(n, seed) {
    var s = '', r = seed;
    for (var i = 0; i < n; i++) {
      r = (r * 9301 + 49297) % 233280; var x = r / 233280 * 1600;
      r = (r * 9301 + 49297) % 233280; var y = r / 233280 * 430;
      r = (r * 9301 + 49297) % 233280; var z = .6 + r / 233280 * 1.6;
      s += '<circle cx="' + x.toFixed(0) + '" cy="' + y.toFixed(0) + '" r="' + z.toFixed(2) + '" fill="#fff" opacity="' + (.35 + (i % 5) * .12).toFixed(2) + '"' +
        (i % 7 === 0 ? ' class="twinkle" style="animation-delay:' + (i % 11) * .4 + 's"' : '') + '/>';
    }
    return s;
  }

  Art.titleScene = function () {
    var s = '<svg class="title-scene" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
      '<rect width="1600" height="900" fill="url(#g-sky)"/>' + stars(170, 3) +
      '<circle cx="1230" cy="170" r="120" fill="url(#g-glow)"/><circle cx="1230" cy="170" r="54" fill="url(#g-moon)"/>' +
      '<circle cx="1212" cy="158" r="9" fill="#cfc8ae" opacity=".5"/><circle cx="1246" cy="186" r="6" fill="#cfc8ae" opacity=".45"/>';
    /* far range and the Grauhorn */
    s += '<path d="M0 520 140 400l90 60 150-170 110 110 170-220 120 150 90-60 170 190 130-90 160 140 150-120 120 90v290H0z" fill="#1f2d4a"/>' +
      '<path d="M660 220 610 290l30-8 20 30 30-40 40 30zM380 290l-40 60 26-6 18 22 22-30zM1180 330l-40 50 30-6 20 20 20-26z" fill="#dfe8f2" opacity=".9"/>' +
      '<path d="M0 600 200 470l120 80 140-90 160 120 200-160 150 120 140-70 170 110 160-60 160 80v300H0z" fill="#15213a"/>' +
      '<path d="M840 440l-50 40 22-4 16 16 20-22zM440 470l-30 36 20-4 12 14 16-18z" fill="#c7d4e3" opacity=".75"/>';
    /* pines */
    for (var p = 0; p < 26; p++) {
      var px = 20 + p * 62 + (p % 3) * 11, py = 690 + (p % 4) * 9, h = 44 + (p % 5) * 9;
      s += '<path d="M' + px + ' ' + (py - h) + 'l' + h * .3 + ' ' + h + 'h-' + h * .6 + 'z" fill="#0b1426"/><path d="M' + (px - h * .12) + ' ' + (py - h * .45) + 'l' + h * .12 + ' -' + h * .16 + ' ' + h * .12 + ' ' + h * .16 + 'z" fill="#dfe8f2" opacity=".55"/>';
    }
    /* the valley far below, then the viaduct with its arches open to it */
    s += '<rect y="660" width="1600" height="240" fill="#0e1a30"/><path d="M0 820c220-30 460-20 700 0s560 20 900-10v90H0z" fill="#c7d4e3" opacity=".16"/>';
    var via = 'M0 640h1600v260H0z';
    for (var a = 0; a < 9; a++) { var ax = a * 190 - 20; via += 'M' + (ax + 38) + ' 900v-126a57 57 0 0 1 114 0v126z'; }
    s += '<path d="' + via + '" fill="#0b1426" fill-rule="evenodd"/><path d="M0 640h1600" stroke="#9fb2c9" stroke-width="3" opacity=".7"/><path d="M0 652h1600" stroke="#1f2d4a" stroke-width="4"/>';
    /* the train: engine, luggage van, two sleeping cars, salon, dining car */
    s += '<g class="train">' +
      '<path d="M1320 572h120l18 22v36h-138z" fill="#0a0f1c"/><rect x="1300" y="558" width="70" height="30" rx="4" fill="#0a0f1c"/><rect x="1384" y="540" width="16" height="32" fill="#0a0f1c"/>' +
      '<circle cx="1452" cy="600" r="7" fill="#ffe6a8"/><circle cx="1452" cy="600" r="46" fill="url(#g-glow)"/><rect x="1330" y="580" width="18" height="14" fill="#ffd98a"/>' +
      '<circle cx="1340" cy="632" r="14" fill="#0a0f1c"/><circle cx="1378" cy="632" r="14" fill="#0a0f1c"/><circle cx="1416" cy="632" r="14" fill="#0a0f1c"/>';
    var cars = [[1180, 130, 0], [1030, 142, 9], [880, 142, 9], [730, 142, 6], [580, 142, 6]];
    cars.forEach(function (c) {
      s += '<rect x="' + c[0] + '" y="568" width="' + c[1] + '" height="62" rx="7" fill="#0a0f1c"/><path d="M' + c[0] + ' 574h' + c[1] + '" stroke="#2c3c5e" stroke-width="2"/>';
      for (var w = 0; w < c[2]; w++) {
        var lit = (w * 7 + c[0]) % 5 !== 0;
        s += '<rect x="' + (c[0] + 8 + w * (c[1] - 16) / c[2]) + '" y="584" width="' + ((c[1] - 16) / c[2] - 5) + '" height="16" rx="2" fill="' + (lit ? '#ffd98a' : '#26344f') + '"' +
          (lit ? ' class="win" style="animation-delay:' + (w % 4) * .7 + 's"' : '') + '/>';
      }
      s += '<circle cx="' + (c[0] + 22) + '" cy="632" r="8" fill="#0a0f1c"/><circle cx="' + (c[0] + c[1] - 22) + '" cy="632" r="8" fill="#0a0f1c"/>';
    });
    s += '</g><g class="steam"><circle cx="1392" cy="520" r="20" fill="#c7d4e3" opacity=".5"/><circle cx="1360" cy="488" r="30" fill="#c7d4e3" opacity=".38"/>' +
      '<circle cx="1310" cy="456" r="40" fill="#c7d4e3" opacity=".26"/><circle cx="1240" cy="430" r="52" fill="#c7d4e3" opacity=".16"/><circle cx="1150" cy="416" r="62" fill="#c7d4e3" opacity=".08"/></g>';
    s += '</svg>';
    return s;
  };

  /* Ink drawing for the ledger: watch no. 7031 seen from above, crown at nine o'clock. */
  Art.watch7031 = function (L) {
    return '<svg class="sketch" viewBox="0 0 360 250" role="img" aria-label="' + L.aria + '">' +
      '<g fill="none" stroke="#2a3050" stroke-width="1.6"><rect x="150" y="10" width="60" height="50" rx="6"/><rect x="150" y="190" width="60" height="50" rx="6"/>' +
      '<circle cx="180" cy="125" r="70"/><circle cx="180" cy="125" r="62"/><rect x="92" y="116" width="18" height="18" rx="3"/><path d="M110 125h8"/>' +
      '<path d="M180 125l-22-30M180 125l40 10"/><circle cx="180" cy="125" r="3" fill="#2a3050"/></g>' +
      '<g font-family="Courier Prime,monospace" font-size="15" fill="#2a3050" text-anchor="middle"><text x="180" y="78">XII</text><text x="232" y="130">III</text><text x="180" y="185">VI</text><text x="130" y="130">IX</text></g>' +
      '<path d="M70 125h-26M44 125l8-5M44 125l8 5" stroke="#8a1a1a" stroke-width="1.6"/>' +
      '<text x="40" y="104" font-family="Dancing Script,cursive" font-size="17" fill="#8a1a1a" text-anchor="middle">' + L.crown + '</text>' +
      '<text x="300" y="60" font-family="Dancing Script,cursive" font-size="17" fill="#8a1a1a" text-anchor="middle">' + L.wrist + '</text>' +
      '<path d="M296 68c-10 20-30 30-50 36" stroke="#8a1a1a" stroke-width="1.4" fill="none"/></svg>';
  };
})();
