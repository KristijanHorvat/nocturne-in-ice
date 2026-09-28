/* Nocturne in Ice: the 1934 newspaper photograph and the plan of the train. */
(function () {
  'use strict';
  var Art = window.Art;
  var G = ['#141414', '#2c2c2c', '#454545', '#606060', '#7d7d7d', '#9c9c9c', '#bcbcbc', '#dadada', '#f2f2f2'];

  function hand(x, y, sc, rot, shortLittle, skin) {
    /* back of a left or right hand, fingers up; the last finger can be missing its top joint */
    var f = [[0, 30], [9, 34], [18, 31], [27, shortLittle ? 13 : 24]];
    var s = '<g transform="translate(' + x + ' ' + y + ') rotate(' + rot + ') scale(' + sc + ')">' +
      '<path d="M-4 0c0-10 2-16 6-18h28c4 2 6 8 6 18 0 12-8 20-20 20S-4 12-4 0z" fill="' + skin + '" stroke="#222" stroke-width="1.2"/>';
    f.forEach(function (d, i) {
      s += '<rect x="' + (d[0] - 3) + '" y="' + (-16 - d[1]) + '" width="8" height="' + (d[1] + 4) + '" rx="' + (i === 3 && shortLittle ? 1.5 : 4) + '" fill="' + skin + '" stroke="#222" stroke-width="1.2"/>';
    });
    return s + '<path d="M-4-4c-8-4-12-12-12-20l6-2c1 8 4 12 8 14z" fill="' + skin + '"/></g>';
  }

  Art.grauhorn1934 = function () {
    var s = '<svg class="scene news-photo" viewBox="0 0 600 420" role="img" aria-label="Newspaper photograph, 1934">' +
      '<defs><pattern id="p-halftone" width="5" height="5" patternUnits="userSpaceOnUse"><circle cx="2.5" cy="2.5" r="1" fill="#000" opacity=".16"/></pattern></defs>' +
      '<rect width="600" height="420" fill="' + G[6] + '"/>' +
      '<path d="M0 170 120 60l70 60 90-100 110 110 60-40 150 130v60H0z" fill="' + G[8] + '"/><path d="M280 20l-40 80 30-20 20 40 10-60 30 40z" fill="' + G[5] + '"/>' +
      '<path d="M0 180h600v240H0z" fill="' + G[3] + '"/>';
    for (var r = 0; r < 9; r++) s += '<path d="M0 ' + (190 + r * 26) + 'h600" stroke="' + G[1] + '" stroke-width="3"/>';
    s += '<rect x="440" y="200" width="90" height="70" fill="' + G[1] + '"/><path d="M485 200v70M440 235h90" stroke="' + G[5] + '" stroke-width="4"/>';
    /* the baron: knitted cap, goggles, clean-shaven; axe in his left hand, watch on his RIGHT wrist */
    s += '<path d="M70 420c4-90 30-140 100-150 70 10 96 60 100 150z" fill="' + G[2] + '"/>' +
      '<path d="M150 272l20 30 20-30" stroke="' + G[6] + '" stroke-width="5" fill="none"/>' +
      '<ellipse cx="170" cy="206" rx="36" ry="44" fill="' + G[6] + '"/><path d="M134 196c0-40 16-58 36-58s36 18 36 58c-10-10-22-14-36-14s-26 4-36 14z" fill="' + G[1] + '"/>' +
      '<rect x="138" y="168" width="64" height="16" rx="8" fill="' + G[4] + '"/><circle cx="156" cy="176" r="7" fill="' + G[0] + '"/><circle cx="184" cy="176" r="7" fill="' + G[0] + '"/>' +
      '<circle cx="158" cy="208" r="3" fill="' + G[0] + '"/><circle cx="182" cy="208" r="3" fill="' + G[0] + '"/><path d="M160 232q10 5 20 0" stroke="' + G[1] + '" stroke-width="2.5" fill="none"/>' +
      '<path d="M254 150v270" stroke="' + G[1] + '" stroke-width="7"/><path d="M234 150h40l-6 10h-28z" fill="' + G[0] + '"/>' +
      '<rect x="238" y="284" width="32" height="36" rx="12" fill="' + G[6] + '"/><path d="M242 294h24M242 302h24M242 310h24" stroke="' + G[4] + '" stroke-width="1.6"/>' +
      '<path d="M96 420c10-50 30-80 60-100l40 10c-20 20-40 50-50 90z" fill="' + G[2] + '"/>' +
      '<path d="M150 312c20-10 50-12 72-6" stroke="' + G[2] + '" stroke-width="30" stroke-linecap="round"/>' +
      '<rect x="182" y="296" width="22" height="30" rx="4" fill="' + G[0] + '"/>' +
      '<g transform="translate(193 311)">' + Art.dial(0, 0, 9, 7, 5, { face: G[8], ink: G[0] }) + '</g>' +
      '<rect x="206" y="292" width="30" height="34" rx="12" fill="' + G[6] + '"/><path d="M210 302h22M210 310h22" stroke="' + G[4] + '" stroke-width="1.6"/>';
    /* the guide: felt hat, beard, pipe, rope over the shoulder; his LEFT hand on the axe head, little finger short */
    s += '<path d="M330 420c4-90 30-140 100-150 70 10 96 60 100 150z" fill="' + G[3] + '"/>' +
      '<path d="M350 300c40 30 110 40 170 10" stroke="' + G[7] + '" stroke-width="12" fill="none"/><path d="M356 316c40 30 110 40 164 8" stroke="' + G[6] + '" stroke-width="10" fill="none"/>' +
      '<ellipse cx="430" cy="210" rx="36" ry="44" fill="' + G[6] + '"/>' +
      '<path d="M396 222c4 36 18 50 34 50s30-14 34-50c-6 10-14 14-20 14-8-6-20-6-28 0-6 0-14-4-20-14z" fill="' + G[1] + '"/>' +
      '<path d="M380 176c10-6 90-6 100 0l-8 8h-84z" fill="' + G[0] + '"/><path d="M398 176c0-24 14-34 32-34s32 10 32 34z" fill="' + G[1] + '"/><path d="M398 168h64" stroke="' + G[4] + '" stroke-width="4"/>' +
      '<circle cx="418" cy="206" r="3" fill="' + G[0] + '"/><circle cx="442" cy="206" r="3" fill="' + G[0] + '"/>' +
      '<path d="M444 244h26v-12" stroke="' + G[0] + '" stroke-width="4" fill="none"/><rect x="464" y="222" width="12" height="12" rx="2" fill="' + G[0] + '"/>' +
      '<path d="M548 300v120" stroke="' + G[1] + '" stroke-width="7"/><path d="M526 296h44l-4 12h-36z" fill="' + G[0] + '"/>' +
      '<path d="M470 420c6-40 20-80 50-110l24 10c-20 30-30 60-34 100z" fill="' + G[3] + '"/>' +
      hand(515, 292, 1.5, 0, true, G[7]);
    s += '<rect width="600" height="420" fill="url(#p-halftone)"/><rect x="1.5" y="1.5" width="597" height="417" fill="none" stroke="#000" stroke-width="3"/></svg>';
    return s;
  };

  /* The plan of the train. L gives the translated labels, P the people in each compartment. */
  Art.trainPlan = function (L, P) {
    var s = '<svg class="plan" viewBox="0 0 1000 560" role="img" aria-label="' + L.title + '">' +
      '<style>.pl-t{font-family:"Josefin Sans",Arial,sans-serif;font-weight:700;font-size:15px;fill:#1c2433;letter-spacing:.06em}' +
      '.pl-n{font-family:"Courier Prime",monospace;font-weight:700;font-size:13px;fill:#1c2433}.pl-p{font-family:"Libre Baskerville",serif;font-size:10.5px;fill:#1c2433}' +
      '.pl-s{font-family:"Libre Baskerville",serif;font-style:italic;font-size:11px;fill:#5a4a36}</style>' +
      '<path d="M12 17h22M12 17l7-5M12 17l7 5" stroke="#1c2433" stroke-width="2" fill="none"/><text x="42" y="22" class="pl-t">' + L.front + '</text>' +
      '<text x="958" y="22" class="pl-t" text-anchor="end">' + L.back + '</text><path d="M966 17h22M988 17l-7-5M988 17l-7 5" stroke="#1c2433" stroke-width="2" fill="none"/>';
    function car(y, label, attLabel, rows, attSide) {
      var o = '<text x="12" y="' + (y - 10) + '" class="pl-t">' + label + '</text>' +
        '<rect x="10" y="' + y + '" width="980" height="150" rx="16" fill="#f4efe4" stroke="#1c2433" stroke-width="2.4"/>' +
        '<path d="M10 ' + (y + 108) + 'h980" stroke="#1c2433" stroke-width="1.4"/><text x="500" y="' + (y + 134) + '" class="pl-s" text-anchor="middle">' + L.corridor + '</text>';
      var ax = attSide === 'left' ? 16 : 900;
      o += '<rect x="' + ax + '" y="' + (y + 112) + '" width="84" height="32" rx="4" fill="#c9a55a" opacity=".35" stroke="#7d6128"/>' +
        '<text x="' + (ax + 42) + '" y="' + (y + 132) + '" class="pl-s" text-anchor="middle">' + attLabel + '</text>';
      for (var i = 0; i < 10; i++) {
        var x = 110 + i * 78, r = rows[i] || '';
        o += '<rect x="' + x + '" y="' + (y + 10) + '" width="78" height="92" fill="' + (r ? '#fff' : '#ebe5d8') + '" stroke="#1c2433" stroke-width="1.4"/>' +
          '<text x="' + (x + 8) + '" y="' + (y + 28) + '" class="pl-n">' + (i + 1) + '</text>';
        if (i % 2 === 0) o += '<path d="M' + (x + 78) + ' ' + (y + 60) + 'v24" stroke="#b3283a" stroke-width="4"/>';
        String(r).split('|').forEach(function (line, k) { o += '<text x="' + (x + 39) + '" y="' + (y + 50 + k * 14) + '" class="pl-p" text-anchor="middle">' + line + '</text>'; });
        o += '<path d="M' + (x + 20) + ' ' + (y + 102) + 'h38" stroke="#1c2433" stroke-width="3"/>';
      }
      return o;
    }
    var strip = [[L.engine, 70], [L.van, 110], [L.car1, 150], [L.car2, 150], [L.salon, 130], [L.dining, 130]], sx = 150;
    strip.forEach(function (v, i) {
      s += '<rect x="' + sx + '" y="36" width="' + v[1] + '" height="30" rx="6" fill="' + (i === 2 || i === 3 ? '#1c2433' : '#f4efe4') + '" stroke="#1c2433" stroke-width="1.6"/>' +
        '<text x="' + (sx + v[1] / 2) + '" y="56" text-anchor="middle" class="pl-s" style="fill:' + (i === 2 || i === 3 ? '#f4efe4' : '#5a4a36') + '">' + v[0] + '</text>';
      sx += v[1] + 8;
    });
    s += car(110, L.car1, L.attendant + ' 1', P.car1, 'right') + car(360, L.car2, L.attendant + ' 2', P.car2, 'left');
    s += '<path d="M942 262c0 30 0 40-20 50H60c-30 0-44 14-44 40" stroke="#1c2433" stroke-width="2" stroke-dasharray="6 5" fill="none"/>' +
      '<text x="500" y="302" class="pl-s" text-anchor="middle">' + L.gangway + '</text>' +
      '<path d="M30 540h40" stroke="#b3283a" stroke-width="4"/><text x="80" y="545" class="pl-s">' + L.door + '</text>' +
      '<path d="M420 540h30" stroke="#1c2433" stroke-width="3"/><text x="460" y="545" class="pl-s">' + L.cdoor + '</text></svg>';
    return s;
  };
})();
