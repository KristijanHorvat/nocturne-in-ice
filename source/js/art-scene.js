/* Nocturne in Ice: police photograph of compartment 5, car 2. A black-and-white scene, viewBox 1200 x 800. */
(function () {
  'use strict';
  var Art = window.Art;
  var T = ['#110e0b', '#221d18', '#352e27', '#4c433a', '#6a5f53', '#8f8373', '#b5a993', '#d7ccb6', '#efe7d6'];

  function marker(x, y, n) {
    return '<g transform="translate(' + x + ' ' + y + ')"><path d="M-17 0 0-30 17 0z" fill="' + T[8] + '" stroke="' + T[0] + '" stroke-width="2"/>' +
      '<text x="0" y="-6" text-anchor="middle" font-family="Josefin Sans,Arial,sans-serif" font-weight="700" font-size="17" fill="' + T[0] + '">' + n + '</text></g>';
  }
  function feather(x, y, r) {
    return '<g transform="translate(' + x + ' ' + y + ') rotate(' + r + ')"><path d="M0 0c4-6 12-8 20-6-6 2-12 6-20 6z" fill="' + T[8] + '"/><path d="M0 0l20-6" stroke="' + T[5] + '" stroke-width=".8"/></g>';
  }

  Art.compartment = function () {
    var s = '<svg class="scene" viewBox="0 0 1200 800" role="img" aria-label="Police photograph of compartment 5">';
    /* room shell */
    s += '<rect width="1200" height="800" fill="' + T[1] + '"/>' +
      '<path d="M0 0h1200L880 130H320z" fill="' + T[2] + '"/><path d="M360 0l40 130M840 0l-40 130M600 0v130" stroke="' + T[1] + '" stroke-width="3"/>' +
      '<rect x="320" y="130" width="560" height="460" fill="' + T[3] + '"/>' +
      '<path d="M320 590h560l320 210H0z" fill="' + T[2] + '"/>';
    for (var i = 0; i < 9; i++) s += '<path d="M' + (320 + i * 70) + ' 590L' + (-60 + i * 165) + ' 800" stroke="' + T[1] + '" stroke-width="2" opacity=".6"/>';
    s += '<path d="M0 0 320 130v460L0 800z" fill="' + T[2] + '"/><path d="M1200 0 880 130v460l320 210z" fill="' + T[3] + '"/>';
    /* marquetry panels on the back wall */
    [[340, 150, 90, 170], [340, 340, 90, 230], [770, 150, 90, 170], [770, 340, 90, 230]].forEach(function (r) {
      s += '<rect x="' + r[0] + '" y="' + r[1] + '" width="' + r[2] + '" height="' + r[3] + '" fill="none" stroke="' + T[5] + '" stroke-width="2" opacity=".5"/>' +
        '<path d="M' + (r[0] + r[2] / 2) + ' ' + (r[1] + 14) + 'l16 ' + (r[3] / 2 - 14) + '-16 ' + (r[3] / 2 - 14) + '-16-' + (r[3] / 2 - 14) + 'z" fill="none" stroke="' + T[5] + '" stroke-width="1.5" opacity=".4"/>';
    });
    /* luggage rack and suitcase */
    s += '<path d="M330 136h540" stroke="' + T[6] + '" stroke-width="4"/><path d="M340 148h520" stroke="' + T[5] + '" stroke-width="2" stroke-dasharray="4 6"/>' +
      '<rect x="560" y="96" width="170" height="44" rx="6" fill="' + T[4] + '" stroke="' + T[1] + '" stroke-width="2"/><path d="M600 96v44M690 96v44" stroke="' + T[2] + '" stroke-width="4"/>';
    /* window with blind, frost and night outside */
    s += '<rect x="444" y="182" width="312" height="244" rx="10" fill="' + T[5] + '"/><rect x="458" y="196" width="284" height="216" rx="6" fill="' + T[0] + '"/>' +
      '<path d="M470 400c30-40 60-10 90-40s70-10 110-50 50 0 70-10v112H470z" fill="' + T[2] + '" opacity=".9"/>' +
      '<path d="M462 200c20 30 10 60 40 70M740 210c-30 20-10 50-40 60M470 404c30-20 50-14 70-24" stroke="' + T[7] + '" stroke-width="2" fill="none" opacity=".5"/>' +
      '<rect x="458" y="196" width="284" height="92" fill="' + T[6] + '"/><path d="M458 216h284M458 236h284M458 256h284M458 276h284" stroke="' + T[5] + '" stroke-width="1.5"/>' +
      '<path d="M590 288h20v10h-20z" fill="' + T[4] + '"/>';
    /* wall lamp */
    s += '<path d="M800 200h26v40h-26z" fill="' + T[5] + '"/><path d="M792 240h42l-8 30h-26z" fill="' + T[7] + '"/><circle cx="813" cy="262" r="40" fill="' + T[8] + '" opacity=".12"/>';
    /* bell push */
    s += '<rect x="352" y="440" width="22" height="30" rx="3" fill="' + T[6] + '"/><circle cx="363" cy="455" r="6" fill="' + T[2] + '"/>';
    /* folding table under the window */
    s += '<path d="M466 438h268l30 34H436z" fill="' + T[6] + '"/><path d="M436 472h328v12H436z" fill="' + T[4] + '"/><path d="M560 484h80l-30 106h-20z" fill="' + T[3] + '"/>';
    /* on the table: Vichy bottle, glass, folded powder paper, open hunter watch, reading glasses */
    s += '<path d="M488 452v-44q0-8 6-12v-16h12v16q6 4 6 12v44z" fill="' + T[4] + '" stroke="' + T[1] + '" stroke-width="1.5"/><rect x="490" y="420" width="20" height="16" fill="' + T[7] + '"/>' +
      '<text x="500" y="432" text-anchor="middle" font-family="Josefin Sans,Arial,sans-serif" font-size="7" font-weight="700" fill="' + T[1] + '">VICHY</text>' +
      '<path d="M530 454l-3-34h24l-3 34z" fill="' + T[6] + '" opacity=".75" stroke="' + T[2] + '" stroke-width="1.2"/><path d="M529 440h20" stroke="' + T[5] + '"/>' +
      '<path d="M566 456l30-8 22 6-30 8z" fill="' + T[8] + '" stroke="' + T[3] + '" stroke-width="1"/><path d="M574 454l30-7" stroke="' + T[5] + '" stroke-width=".8"/>' +
      '<ellipse cx="660" cy="456" rx="22" ry="9" fill="' + T[6] + '" stroke="' + T[2] + '" stroke-width="1.5"/><path d="M640 454q20-40 40 0" fill="' + T[5] + '" stroke="' + T[2] + '" stroke-width="1.5"/>' +
      '<g transform="translate(660 442) scale(1 .5)">' + Art.dial(0, 0, 16, 1, 19, { face: T[8], ink: T[0] }) + '</g><path d="M682 452c8 0 14 4 20 2" stroke="' + T[5] + '" stroke-width="2" fill="none"/>' +
      '<g fill="none" stroke="' + T[1] + '" stroke-width="2"><ellipse cx="714" cy="462" rx="9" ry="5"/><ellipse cx="736" cy="462" rx="9" ry="5"/><path d="M723 461h4M705 460l-10-6"/></g>';
    /* jacket on its hook, left of the window */
    s += '<circle cx="392" cy="176" r="5" fill="' + T[6] + '"/><path d="M392 180c-30 8-44 30-46 70l-4 110h96l-4-110c-2-40-16-62-42-70z" fill="' + T[1] + '"/>' +
      '<path d="M392 184l-16 70 16 20 16-20z" fill="' + T[2] + '"/><path d="M360 300h20M404 300h20" stroke="' + T[3] + '" stroke-width="3"/>' +
      '<path d="M406 238h14v26h-14z" fill="' + T[7] + '" opacity=".8"/>';
    /* the berth: rumpled bedding, the scorched pillow and loose feathers */
    s += '<path d="M320 432h160L230 668H0V540z" fill="' + T[6] + '"/><path d="M480 432v30L230 700v-32z" fill="' + T[5] + '"/>' +
      '<path d="M230 700v100H0V668h230z" fill="' + T[3] + '"/><path d="M480 462v128l-160-.5L230 700z" fill="' + T[2] + '"/>' +
      '<path d="M300 500c60-10 120-2 150-10l-60 60c-50 10-100 0-150 20z" fill="' + T[5] + '"/><path d="M250 560c50-10 90-6 130-14M200 610c60-14 100-8 140-20" stroke="' + T[4] + '" stroke-width="3" fill="none"/>' +
      '<path d="M330 404c30-12 100-12 130 0 8 14 8 30 0 40-30 8-100 8-130 0-8-10-8-28 0-40z" fill="' + T[7] + '" stroke="' + T[4] + '" stroke-width="2"/>' +
      '<ellipse cx="398" cy="424" rx="13" ry="8" fill="' + T[0] + '"/><ellipse cx="398" cy="424" rx="20" ry="13" fill="none" stroke="' + T[3] + '" stroke-width="5" opacity=".7"/>' +
      '<path d="M372 436c10 6 30 8 44 2" stroke="' + T[3] + '" stroke-width="4" opacity=".5" fill="none"/>' +
      feather(430, 452, -10) + feather(350, 470, 20) + feather(290, 520, -30) + feather(470, 520, 40) + feather(600, 640, 10);
    /* communicating door on the right wall, with its bolt drawn back */
    s += '<path d="M920 158 1080 98v624l-160-106z" fill="' + T[4] + '"/><path d="M936 176 1064 128v570l-128-86z" fill="none" stroke="' + T[2] + '" stroke-width="3"/>' +
      '<path d="M950 230 1050 196v140l-100 26z" fill="none" stroke="' + T[5] + '" stroke-width="2" opacity=".6"/><path d="M950 420 1050 400v200l-100-40z" fill="none" stroke="' + T[5] + '" stroke-width="2" opacity=".6"/>' +
      '<path d="M906 164v456" stroke="' + T[1] + '" stroke-width="10"/>' +
      '<rect x="896" y="392" width="12" height="26" fill="' + T[7] + '" stroke="' + T[0] + '" stroke-width="1.5"/><rect x="899" y="400" width="6" height="10" fill="' + T[0] + '"/>' +
      '<path d="M944 384l52-14v30l-52 14z" fill="' + T[7] + '" stroke="' + T[0] + '" stroke-width="1.5"/>' +
      '<path d="M950 396l40-10v8l-40 10z" fill="' + T[5] + '" stroke="' + T[0] + '" stroke-width="1"/><path d="M968 392v-16h8v14" fill="' + T[7] + '" stroke="' + T[0] + '" stroke-width="1.2"/>' +
      '<circle cx="1040" cy="430" r="9" fill="' + T[7] + '" stroke="' + T[0] + '" stroke-width="1.5"/><path d="M1040 430h20" stroke="' + T[7] + '" stroke-width="6" stroke-linecap="round"/>' +
      feather(960, 660, 0) + feather(1010, 690, -20);
    /* corridor door edge (camera side) with the safety chain hanging loose */
    s += '<path d="M1140 0h60v800h-60z" fill="' + T[1] + '"/><rect x="1148" y="300" width="16" height="30" fill="' + T[6] + '"/>' +
      '<path d="M1156 330c-6 20-2 40-10 60s-2 40-8 56" stroke="' + T[6] + '" stroke-width="5" stroke-dasharray="7 4" fill="none"/>';
    /* dispatch case on the floor with its four-wheel combination lock */
    s += '<path d="M760 640h250l40 110H720z" fill="' + T[1] + '" stroke="' + T[0] + '" stroke-width="2"/><path d="M760 640h250v-24H760z" fill="' + T[2] + '"/>' +
      '<path d="M840 616v-18h90v18" fill="none" stroke="' + T[3] + '" stroke-width="8"/><rect x="826" y="650" width="118" height="44" rx="4" fill="' + T[6] + '" stroke="' + T[0] + '" stroke-width="2"/>';
    ['3', '8', '0', '5'].forEach(function (d, k) {
      s += '<rect x="' + (834 + k * 27) + '" y="658" width="22" height="28" rx="3" fill="' + T[8] + '" stroke="' + T[0] + '" stroke-width="1.5"/>' +
        '<text x="' + (845 + k * 27) + '" y="679" text-anchor="middle" font-family="Courier Prime,monospace" font-weight="700" font-size="19" fill="' + T[0] + '">' + d + '</text>';
    });
    s += '<text x="885" y="740" text-anchor="middle" font-family="Libre Baskerville,serif" font-size="14" fill="' + T[5] + '" letter-spacing="3">C. D.</text>';
    /* evidence markers, numbered as in the scene report */
    s += marker(400, 396, 1) + marker(1000, 368, 2) + marker(580, 436, 3) + marker(690, 436, 4) + marker(990, 630, 5) + marker(392, 174, 6);
    /* flash falloff and grain */
    s += '<rect width="1200" height="800" fill="url(#g-flash)"/><rect class="grain" width="1200" height="800" filter="url(#f-grain)" opacity=".35"/></svg>';
    return s;
  };
})();
