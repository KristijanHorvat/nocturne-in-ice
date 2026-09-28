/* Nocturne in Ice: game engine, part 3. The reading card and the torn note, on screen. */
(function () {
  'use strict';
  var NI = window.NI, C = window.CASE, Art = window.Art, Snd = window.Sound;
  var $ = NI.$, $$ = NI.$$, S = NI.state, T = C.T;

  /* The reading card: pick a typewritten page, then drag the card over it until it sits square. */
  function initGrille(root) {
    var tool = $('[data-grille]', root); if (!tool) return;
    var pick = $('[data-grille-pick]', tool), stage = $('[data-grille-stage]', tool), status = $('[data-grille-status]', tool);
    var holes = C.page('A9').holes, off = { x: 0, y: 0 }, aligned = false;
    function place() {
      var card = $('.gr-card', stage); if (!card) return;
      card.style.transform = 'translate(' + (off.x * 100) + '%,' + (off.y * 100) + '%)';
      card.classList.toggle('is-aligned', aligned);
      status.textContent = aligned ? T('grilleAligned') : '';
    }
    function render(id) {
      if (!id) { stage.innerHTML = ''; status.textContent = ''; return; }
      stage.innerHTML = '<div class="gr-sheet">' + C.page(id).svg + '<div class="gr-card" tabindex="0">' + Art.grille(holes, C.L(C.ev('B7').title)) + '</div></div>' +
        '<p class="gr-btns"><button type="button" class="btn btn-small" data-grille-snap>' + T('grilleOn') + '</button> ' +
        '<button type="button" class="btn btn-small btn-ghost" data-grille-lift>' + T('grilleOff') + '</button></p>';
      off = { x: .34, y: .12 }; aligned = false; place();
      var card = $('.gr-card', stage), sheet = $('.gr-sheet', stage), start = null;
      card.addEventListener('pointerdown', function (e) {
        e.preventDefault(); card.setPointerCapture(e.pointerId); card.classList.add('is-drag');
        start = { x: e.clientX, y: e.clientY, ox: off.x, oy: off.y, w: sheet.clientWidth, h: sheet.clientHeight };
      });
      card.addEventListener('pointermove', function (e) {
        if (!start) return;
        off.x = start.ox + (e.clientX - start.x) / start.w; off.y = start.oy + (e.clientY - start.y) / start.h; aligned = false; place();
      });
      function drop() {
        if (!start) return; start = null; card.classList.remove('is-drag');
        if (Math.abs(off.x) < .03 && Math.abs(off.y) < .025) { off = { x: 0, y: 0 }; aligned = true; Snd.snap(); }
        place();
      }
      card.addEventListener('pointerup', drop); card.addEventListener('pointercancel', drop);
      card.addEventListener('keydown', function (e) {
        var k = { ArrowLeft: [-.01, 0], ArrowRight: [.01, 0], ArrowUp: [0, -.01], ArrowDown: [0, .01] }[e.key];
        if (!k) return; e.preventDefault(); off.x += k[0]; off.y += k[1];
        aligned = Math.abs(off.x) < .005 && Math.abs(off.y) < .005; if (aligned) { off = { x: 0, y: 0 }; Snd.snap(); } place();
      });
      $('[data-grille-snap]', stage).addEventListener('click', function () { off = { x: 0, y: 0 }; aligned = true; card.hidden = false; Snd.snap(); place(); });
      $('[data-grille-lift]', stage).addEventListener('click', function () { card.hidden = !card.hidden; });
    }
    pick.addEventListener('change', function () { render(pick.value); Snd.flip(); });
  }

  /* The torn note: six pieces scattered around a frame. Drag each one home. */
  var HOME = { x: 40, y: 40 };
  var SCATTER = [[640, 110, -9], [820, 150, 7], [600, 330, 12], [820, 420, -6], [170, 450, 10], [400, 470, -12]];
  function centre(poly) {
    var pts = poly.split(' ').map(function (p) { return p.split(',').map(Number); }), x = 0, y = 0;
    pts.forEach(function (p) { x += p[0]; y += p[1]; }); return [x / pts.length, y / pts.length];
  }
  function freshTorn() {
    var order = [3, 0, 5, 1, 4, 2];
    return Art.NOTE.pieces.map(function (poly, i) {
      var c = centre(poly), s = SCATTER[order[i]];
      return { x: s[0] - c[0], y: s[1] - c[1], r: s[2], placed: false };
    });
  }
  function initTorn(root) {
    var tool = $('[data-torn]', root); if (!tool) return;
    var stage = $('[data-torn-stage]', tool), status = $('[data-torn-status]', tool);
    if (!S().torn || S().torn.length !== 6) { S().torn = freshTorn(); NI.save(); }
    var face = Art.noteFace(C.noteLines[C.lang] || C.noteLines.en), N = Art.NOTE;
    function draw() {
      var st = S().torn, done = st.every(function (p) { return p.placed; });
      var svg = '<svg class="torn-svg" viewBox="0 0 960 600" role="img" aria-label="' + C.L(C.ev('C8').title) + '"><defs>' +
        N.pieces.map(function (p, i) { return '<clipPath id="tp-' + i + '"><polygon points="' + p + '"/></clipPath>'; }).join('') + '</defs>' +
        '<rect x="' + (HOME.x - 6) + '" y="' + (HOME.y - 6) + '" width="' + (N.w + 12) + '" height="' + (N.h + 12) + '" rx="6" class="torn-frame"/>';
      N.pieces.forEach(function (p, i) {
        var s = st[i], c = centre(p);
        svg += '<g class="torn-piece' + (s.placed ? ' is-placed' : '') + '" data-piece="' + i + '" transform="translate(' + s.x.toFixed(1) + ' ' + s.y.toFixed(1) + ') rotate(' + (s.placed ? 0 : s.r) + ' ' + c[0].toFixed(1) + ' ' + c[1].toFixed(1) + ')">' +
          '<g clip-path="url(#tp-' + i + ')">' + face + '</g><polygon points="' + p + '" class="torn-edge"/></g>';
      });
      stage.innerHTML = svg + '</svg>' + (done ? '<svg class="torn-whole" viewBox="0 0 ' + N.w + ' ' + N.h + '" role="img" aria-label="' + T('tornDone') + '">' + face + '</svg>' : '');
      status.textContent = done ? T('tornDone') : '';
      bind();
    }
    function bind() {
      var svg = $('svg', stage), drag = null;
      function pt(e) { var p = svg.createSVGPoint(); p.x = e.clientX; p.y = e.clientY; return p.matrixTransform(svg.getScreenCTM().inverse()); }
      $$('.torn-piece', svg).forEach(function (g) {
        g.addEventListener('pointerdown', function (e) {
          var i = +g.dataset.piece, s = S().torn[i]; if (s.placed) return;
          e.preventDefault(); svg.appendChild(g); g.setPointerCapture(e.pointerId);
          var p = pt(e); drag = { g: g, i: i, dx: p.x - s.x, dy: p.y - s.y }; g.classList.add('is-drag'); Snd.tear();
        });
        g.addEventListener('pointermove', function (e) {
          if (!drag || drag.g !== g) return;
          var p = pt(e), s = S().torn[drag.i], c = centre(N.pieces[drag.i]);
          s.x = p.x - drag.dx; s.y = p.y - drag.dy;
          g.setAttribute('transform', 'translate(' + s.x.toFixed(1) + ' ' + s.y.toFixed(1) + ') rotate(' + s.r + ' ' + c[0].toFixed(1) + ' ' + c[1].toFixed(1) + ')');
        });
        function drop() {
          if (!drag || drag.g !== g) return;
          var s = S().torn[drag.i]; drag = null;
          if (Math.hypot(s.x - HOME.x, s.y - HOME.y) < 26) { s.x = HOME.x; s.y = HOME.y; s.placed = true; Snd.snap(); }
          NI.save(); draw();
          if (S().torn.every(function (p) { return p.placed; })) Snd.chime();
        }
        g.addEventListener('pointerup', drop); g.addEventListener('pointercancel', drop);
      });
    }
    $('[data-torn-reset]', tool).addEventListener('click', function () { S().torn = freshTorn(); NI.save(); draw(); Snd.deal(6); });
    draw();
  }

  NI.initPuzzles = function (root) { initGrille(root); initTorn(root); };
})();
