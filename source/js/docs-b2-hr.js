/* Nocturne in Ice: envelope B, part 2 (Croatian). */
(function () {
  'use strict';
  var C = window.CASE, D = C.docs.hr;

  D.B7 = function () {
    return C.grilleDoc('Kruta kartica iz džepa u poklopcu aktovke, točno veličine lista papira za pisaći stroj. Netko je u njoj oštrim nožem izrezao male prozorčiće. Na poleđini, rukopisom gospodina Delormea: <span class="hand-inline">samo za Morandova pisma</span>.');
  };

  D.B8 = function () {
    return '<article class="doc doc-letter doc-bank"><header class="bank-head"><p class="bank-name">Banque Horlogère de Genève</p><p class="bank-sub">Privatni ured · Rue du Rhône · Ženeva</p></header>' +
      '<p class="doc-date">Ženeva, 11. prosinca 1936.</p><p>Osobno i povjerljivo</p><p>Poštovani gospodine Delorme,</p>' +
      '<p>7. prosinca na našem je šalteru gospodin Raoul Delorme predočio ček na 40 000 franaka, izdan na račun tvrtke Delorme &amp; Cie i s Vašim potpisom, te mu je iznos isplaćen u gotovini.</p>' +
      '<p>Naš je glavni blagajnik u međuvremenu primijetio da potpis nije baš Vaš uobičajeni rukopis. Bili bismo Vam vrlo zahvalni kad biste potvrdili da ste taj ček Vi ispisali. Dok ne dobijemo Vaš odgovor, obustavili smo sve daljnje isplate po nalogu gospodina Raoula Delormea.</p>' +
      '<p>S osobitim poštovanjem,</p><p class="sign-sub">E. Mottier, ravnatelj</p>' +
      '<div class="cheque"><p class="cq-label">Poleđina čeka, kako ju je banka fotografirala:</p><p class="cq-endorse hand">R. Delorme</p></div>' +
      '<p class="lg-pencil hand">Opet R. Nije moj. Riješiti nakon Beča. — C.</p></article>';
  };

  D.B9 = function () {
    return '<article class="doc doc-hand"><p class="hd-head">14 Doughty Street, London W.C.1 · 2. listopada 1936.</p>' +
      C.hand('<p>Poštovani gospodine Delorme,</p><p>niste odgovorili ni na jedno od moja tri pisma pa ću biti izravna.</p>' +
        '<p>Moja sestra Edith od 1925. do 1930. slikala je brojčanike Vaših satova Nocturne u Vašoj radionici u La Chaux-de-Fondsu. One koji svijetle. Nakon svake brojke oblikovala je kist usnama u fini vršak, kako su Vaši poslovođe učili djevojke. Umrla je 1932., u dvadeset i četvrtoj, s radijem u čeljusti.</p>' +
        '<p>Pišem o Vašoj radionici i to će biti objavljeno razgovarali Vi sa mnom ili ne. Više bih voljela da razgovarate.</p>' +
        '<p>Bit ću u Nokturnu 18. prosinca.</p><p>Constance Pryor</p>') +
      '<p class="caption">Čuvano u aktovci s još dva ranija pisma gospođice Pryor. Nijedno nije dobilo odgovor.</p></article>';
  };
})();
