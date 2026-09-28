/* Nocturne in Ice: envelope C, part 2 (English), and the shared torn-note tool. */
(function () {
  'use strict';
  var C = window.CASE, Art = window.Art, D = C.docs.en;

  C.noteLines = C.noteLines || {};
  C.noteLines.en = [{ t: 'M —' }, { t: 'Tonight, when the dining car closes.' }, { t: 'Car 1, door 3. Nobody will see.' }, { t: 'Burn this.' }, { t: '— R.', x: 300 }];
  C.tornDoc = function (caption) {
    return '<article class="doc doc-torn"><div class="torn-tool" data-torn><p class="gr-help">' + C.T('tornHelp') + '</p>' +
      '<div class="torn-stage" data-torn-stage></div><p class="gr-status" data-torn-status aria-live="polite"></p>' +
      '<p><button type="button" class="btn btn-small btn-ghost" data-torn-reset>' + C.T('tornReset') + '</button></p></div>' +
      '<p class="caption">' + caption + '</p></article>';
  };
  C.chits = function (head, rows, note) {
    return '<article class="doc doc-chits">' + '<h3 class="rep-title">' + head + '</h3><p class="log-sub">' + note + '</p><div class="chit-grid">' +
      rows.map(function (r) {
        return '<div class="chit"><p class="ch-top"><span>No. ' + r[0] + '</span><span class="ch-time">' + r[1] + '</span></p><p class="ch-where">' + r[2] + '</p>' +
          '<p class="ch-what">' + r[3] + '</p><p class="ch-sig"><span class="sig' + (r[5] ? ' ' + r[5] : '') + '">' + r[4] + '</span></p></div>';
      }).join('') + '</div></article>';
  };
  C.chitRows = function (w) {
    return [['31', '21:36', w.t + ' 6', w.kirsch2, 'Aebi (1/2)'], ['33', '21:58', w.t + ' 6', w.beer2, 'Aebi (1/2)'], ['34', '22:05', w.desk, w.coffee, 'K. Imhof (2/7)'],
      ['36', '22:18', w.bar, w.fizz, 'C. Pryor (2/4)'], ['38', '22:20', w.t + ' 4', w.tisane, 'H. Duclos (2/3)'], ['40', '22:30', w.bar, w.fizz, 'C. Pryor (2/4)'],
      ['41', '22:40', w.t + ' 6', w.beer2, 'Oberholzer (1/5)'], ['43', '22:52', w.desk, w.water, 'K. Imhof (2/7)'], ['45', '23:05', w.t + ' 2', w.kirsch, 'O. Kessler (1/6)'],
      ['47', '23:17', w.t + ' 4', w.cognac + '<br>' + w.tisane, 'F. v. Aschau (2/9)', 'sig-fwd'], ['48', '23:26', w.t + ' 6', w.beer2, 'Aebi (1/2)'], ['50', '23:44', w.t + ' 2', w.coffee, 'O. Kessler (1/6)']];
  };

  D.C5 = function () {
    return C.chits('Bar chits, salon car, Friday 18 December', C.chitRows({ t: 'table', desk: 'writing desk', bar: 'bar', kirsch2: '2 kirsch', kirsch: '1 kirsch',
      beer2: '2 beers', coffee: '1 black coffee', fizz: '1 gin fizz', tisane: '1 camomile tisane', water: '1 glass of water', cognac: '1 cognac (Martell)' }),
      'Every chit is stamped by the bar’s time clock, which the barman sets each evening by the railway clock above the bar. Guests sign with their name, car and compartment.');
  };

  D.C6 = function () {
    var rows = [['21:30', 'Messrs Aebi (2) and Oberholzer (5) to the salon car.'], ['21:32', 'Mr R. Delorme (3) toward car 2.'],
      ['21:40', 'Mr Kessler (6) toward the salon car with his camera.'], ['21:55', 'Mr R. Delorme back to no. 3.'],
      ['22:00', 'Beds made up in no. 8 for the two detectives. Lights out in no. 8.'],
      ['22:05', 'A lady in a silver-fur wrap came from car 2 and went up the corridor. I was at the linen cupboard with my back half turned: I did not see her face, or which door she went in by.'],
      ['22:15', 'Mr Barić (car 2) through to the luggage van.'], ['22:24–22:35', 'Grauhorn Tunnel.'], ['22:38', 'Mr Barić back from the luggage van, toward car 2.'],
      ['22:52', 'The lady in the silver fur came back down the corridor and went through to car 2.'],
      ['23:40', 'Messrs Aebi and Oberholzer back from the salon car.'], ['23:50', 'Mr Kessler back from the salon car.'], ['00:10', 'Stoffel (car 2) came running for the chief conductor.'],
      ['00:12', 'Mr Kessler out to the platform with his camera.']];
    return '<article class="doc doc-log"><h3 class="rep-title">Night log, sleeping car 1</h3><p class="log-sub">Kept by Anton Brändli, attendant, at his seat by the gangway to car 2. The Company requires every attendant to note who passes at night.</p>' +
      C.table(['Time', 'Entry'], rows) +
      C.hand('<p>Between 21:55 and 22:52 nobody passed my seat except as written here. No one went from car 1 into car 2 but the lady and Mr Barić. — A. Brändli</p>', 'hand-small') + '</article>';
  };

  D.C7 = function () {
    return '<article class="doc doc-news"><header class="np-mast"><p class="np-name">Der Alpenbote</p><p class="np-line">Chur · Tuesday 21 August 1934 · No. 196 · 20 Rappen</p></header>' +
      '<h3 class="np-head">Tragedy on the Grauhorn</h3><p class="np-deck">Sankt Oswin guide killed; Austrian baron survives fall from the north face</p>' +
      '<div class="np-cols"><figure class="np-fig">' + Art.grauhorn1934() + '<figcaption>Baron Friedrich von Aschau (left) and his guide Kaspar Gredig at the Grauhorn hut on Sunday morning, before the climb. Photograph: A. Bundi, Sankt Oswin.</figcaption></figure>' +
      '<p>On Sunday the well-known Sankt Oswin guide <b>Kaspar Gredig</b>, 34, lost his life on the north face of the Grauhorn (3,412 m) while leading Baron Friedrich von Aschau of Innsbruck.</p>' +
      '<p>According to the baron, the two men were roped together below the summit ridge when a cornice gave way at about eleven in the morning. Both fell some 300 metres. Rescuers from Sankt Oswin reached them on Monday.</p>' +
      '<p>The baron, found conscious but badly hurt, with injuries to his face and his left hand, was carried down the valley on a stretcher and taken to hospital in Innsbruck. He was able to give his name to the rescuers but, we are told, little else.</p>' +
      '<p>The guide’s body, recovered late on Monday, was so badly disfigured that “his own mother would not have known him”, one rescuer told this newspaper. Gredig, who was unmarried and whose mother died last year, had guided on the Grauhorn since 1922. He lost the tip of a finger to frostbite in 1929 but had never had an accident with a client.</p>' +
      '<p>He will be buried in Sankt Oswin on Saturday.</p></div>' +
      '<p class="np-trans">(Translated from the German. Pinned up in the waiting room of Sankt Oswin station, where Gredig’s picture still hangs.)</p></article>';
  };

  D.C8 = function () {
    return C.tornDoc('Found in the ashtray of compartment 6, torn into six pieces. One corner is scorched, as if someone began to burn it and lost their nerve.');
  };
})();
