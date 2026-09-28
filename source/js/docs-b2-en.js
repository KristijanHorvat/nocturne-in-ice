/* Nocturne in Ice: envelope B, part 2 (English), and the shared reading-card tool. */
(function () {
  'use strict';
  var C = window.CASE, Art = window.Art, D = C.docs.en;

  /* Used by both languages: the card, and a stage to try it on each typewritten page. */
  C.grilleDoc = function (caption) {
    var p = C.page('A9');
    var opts = ['A9', 'B4', 'B6'].map(function (id) { return '<option value="' + id + '">' + id + ': ' + C.L(C.ev(id).title) + '</option>'; }).join('');
    return '<article class="doc doc-card"><div class="card-solo">' + Art.grille(p.holes, C.L(C.ev('B7').title)) + '</div>' +
      '<p class="caption">' + caption + '</p>' +
      '<div class="grille-tool" data-grille><label class="gr-pick">' + C.T('grilleTry') + ' <select data-grille-pick><option value="">' + C.T('grilleNone') + '</option>' + opts + '</select></label>' +
      '<p class="gr-help">' + C.T('grilleHelp') + '</p><div class="gr-stage" data-grille-stage></div><p class="gr-status" data-grille-status aria-live="polite"></p></div></article>';
  };

  D.B7 = function () {
    return C.grilleDoc('A stiff card from the pocket in the lid of the dispatch case, exactly the size of a sheet of typing paper. Someone has cut little windows in it with a sharp knife. On the back, in Mr Delorme’s hand: <span class="hand-inline">for Morand’s letters only</span>.');
  };

  D.B8 = function () {
    return '<article class="doc doc-letter doc-bank"><header class="bank-head"><p class="bank-name">Banque Horlogère de Genève</p><p class="bank-sub">Private office · Rue du Rhône · Geneva</p></header>' +
      '<p class="doc-date">Geneva, 11 December 1936</p><p>Personal and confidential</p><p>Dear Mr Delorme,</p>' +
      '<p>On 7 December a cheque for 40,000 francs, drawn on the account of Delorme &amp; Cie and bearing your signature, was presented at our counter by Mr Raoul Delorme and paid in cash.</p>' +
      '<p>Our chief cashier has since noticed that the signature is not quite in your usual hand. We should be most grateful if you would confirm that you wrote this cheque. Until we hear from you we have stopped all further payments to Mr Raoul Delorme’s order.</p>' +
      '<p>With our highest regards,</p><p class="sign-sub">E. Mottier, Director</p>' +
      '<div class="cheque"><p class="cq-label">Back of the cheque, photographed by the bank:</p><p class="cq-endorse hand">R. Delorme</p></div>' +
      '<p class="lg-pencil hand">R. again. Not mine. Deal with it after Vienna. — C.</p></article>';
  };

  D.B9 = function () {
    return '<article class="doc doc-hand"><p class="hd-head">14 Doughty Street, London W.C.1 · 2 October 1936</p>' +
      C.hand('<p>Dear Mr Delorme,</p><p>You have not answered my three letters, so I shall be plain.</p>' +
        '<p>My sister Edith painted the dials of your Nocturne watches in your workshop at La Chaux-de-Fonds from 1925 to 1930. The glowing ones. She licked her brush to a fine point after every figure, as your foremen taught the girls to do. She died in 1932, aged twenty-four, with radium in her jaw.</p>' +
        '<p>I am writing about your workshop, and it will be printed whether you speak to me or not. I would rather you spoke to me.</p>' +
        '<p>I shall be on the Nocturne on 18 December.</p><p>Constance Pryor</p>') +
      '<p class="caption">Kept in the dispatch case with two earlier letters from Miss Pryor. None was answered.</p></article>';
  };
})();
