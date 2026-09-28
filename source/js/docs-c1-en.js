/* Nocturne in Ice: envelope C, part 1 (English). */
(function () {
  'use strict';
  var C = window.CASE, Art = window.Art, D = C.docs.en;
  var li = function (a) { return '<ul class="items">' + a.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>'; };

  D.C1 = function () {
    return '<article class="doc doc-report">' + C.head() + '<h3 class="rep-title">Search of the compartments, 02:50 to 04:10</h3>' +
      '<p class="rep-intro">Carried out by me, with the chief conductor as witness. Each passenger was present for the search of their own compartment.</p>' +
      '<h4>Car 2, no. 6: Mrs Margit Delorme</h4>' + li([
        'Dressing case (unlocked): a small velvet-lined pistol box, <b>empty</b>. No pistol anywhere in the compartment.',
        'Window sill and lace curtain: fresh black soot. Soot smudges on the pillow. The compartment is noticeably colder than its neighbours.',
        'On the floor by the communicating door: two small white down feathers, like those from the pillow in no. 5.',
        'In the ashtray: a note torn into six pieces, one corner scorched, as if someone had begun to burn it and changed their mind (C8).',
        'A box of migraine powders, full; none taken on this journey.']) +
      '<h4>Car 1, no. 3: Mr Raoul Delorme</h4>' + li(['Three letters from creditors in Geneva and Monte Carlo.', 'Half a bottle of cognac.',
        'On the pillow, a long fair hair: much too long to be his.']) +
      '<h4>Car 2, no. 2: Mr Tomislav Barić</h4>' + li(['A roll of watchmaker’s picks and drivers.',
        'An envelope addressed to C. Delorme, still sealed, containing a copy of the court papers for Vienna.', 'Photographs of a workshop, and of a clock in pieces.']) +
      '<h4>Car 2, no. 4: Miss Constance Pryor</h4>' + li(['A notebook in shorthand; a folder of press cuttings about radium poisoning among dial painters.',
        'A pencil sketch of the layout of compartment 5, with the dispatch case marked.',
        'A case of tortoiseshell hairpins with one missing. A tortoiseshell hairpin was found under Mr Delorme’s berth in no. 5; it matches the others exactly.']) +
      '<h4>Car 2, no. 7: Miss Klara Imhof</h4>' + li(['Mr Delorme’s correspondence portfolio, the letters written up and ready for signature.',
        'In her handbag, a small photograph of a young woman holding a baby. On the back: <span class="hand-inline">Klara, three months. Forgive me. — C.</span> Dated 1908.']) +
      '<h4>Car 2, no. 9: Baron Friedrich von Aschau</h4>' + li(['Clothes, letters, and an Austrian passport issued in Innsbruck in December 1934 (“to replace one lost in an accident”).',
        'A fur-collared overcoat on the hook. The fur was wet through at 02:55, as if from snow. He says he stepped down to take the air on the platform when the train stopped.',
        'A Spanish grammar, much thumbed, with exercises in pencil in the margins.']) +
      '<h4>Attendant’s cubicle, car 2: Emil Stoffel</h4>' + li(['A half-bottle of grappa, a quarter full, behind the linen.']) +
      '<h4>Compartment 5, the corridor door</h4><p>With Mr Barić’s own picks and his permission, I tried to lift the safety chain from the corridor side. It cannot be done: the chain sits in a slot that cannot be reached from outside. The attendant’s key opens the lock, but not the chain.</p></article>';
  };

  D.C2 = function () {
    return '<article class="doc doc-report doc-medical">' + C.letterhead('Dr med. Ursina Caflisch', 'Physician · Sankt Oswin') +
      '<h3 class="rep-title">Examination of the body of Casimir Delorme</h3>' +
      C.kv([['Examined', '19 December 1936, 00:55, compartment 5, sleeping car 2'], ['Cause of death', 'A single gunshot wound to the head']]) +
      '<p>The shot was fired with the muzzle pressed into a pillow held over the face. The pillow is scorched and torn, and feathers were caught in his hair. A small bullet of 6.35 mm calibre was recovered from the mattress. Death was instantaneous. He did not struggle; I think he was asleep.</p>' +
      '<p>No powder marks on his hands, and no weapon: this was not suicide.</p>' +
      '<p>The glass on the table held Vichy water with traces of veronal, an ordinary sleeping dose. It would have made him drowsy within a quarter of an hour, and asleep soon after. It played no part in his death.</p>' +
      '<p><b>Time of death.</b> The body was still warm when I arrived, and stiffening had not begun. But the compartment was heated to 26 degrees, which slows the cooling. On the body alone I can say no more than this: <b>between 22:00 and 23:30</b>. If you want it closer, you will have to find it on the train, not in him.</p>' +
      '<p class="sign">U. Caflisch</p></article>';
  };

  D.C3 = function () {
    return C.photo(Art.salon(), 'Plate 12, exposed by Otto Kessler at 22:31 in the salon car, while the train was in the Grauhorn Tunnel. Developed tonight in the darkroom of the Sankt Oswin pharmacy. The camera stood at the end of the car by the door to car 2.');
  };

  D.C4 = function () {
    var rows = [['7', '19:38', 'Basel. Customs officers in the corridor of car 2.'], ['8', '20:02', 'Dining car, first sitting. General view.'],
      ['9', '20:24', 'Dining car. The Delorme table; the baron raising his glass.'], ['10', '21:48', 'Salon car. The piano, nobody at it.'],
      ['11', '22:26', 'Dining car pantry. The chef and a sleeping-car attendant raise a glass “to the Grauhorn”.'],
      ['12', '22:31', 'Salon car, general view, in the tunnel. <i>Developed; see C3.</i>'], ['13', '23:34', 'Salon car. Two card players. <i>Fogged; nothing to see.</i>'],
      ['14', '00:12', 'Sankt Oswin station in the snow. A man in a fur collar at the door of the station office. <i>Badly underexposed.</i>'],
      ['15', '01:20', 'Compartment 5, for the police. <i>See A3.</i>']];
    return '<article class="doc doc-log">' + '<h3 class="rep-title">Plate book of Otto Kessler, <i>Die Woche im Bild</i></h3>' +
      '<p class="log-sub">Friday 18 December 1936. “My watch was set by the station clock at Basel.”</p>' +
      C.table(['Plate', 'Time', 'Subject'], rows) +
      C.hand('<p>I left the dining car with my camera at about 22:28 and walked through to the salon car for plate 12. — O. K.</p>', 'hand-small') + '</article>';
  };
})();
