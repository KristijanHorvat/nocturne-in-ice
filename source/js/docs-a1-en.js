/* Nocturne in Ice: envelope A, part 1 (English). */
(function () {
  'use strict';
  var C = window.CASE, Art = window.Art, D = C.docs.en, esc = C.esc;

  D.A1 = function (ctx) {
    var n = ctx.names.filter(Boolean).map(esc);
    var who = n.length === 2 ? 'Detectives ' + n[0] + ' and ' + n[1] : n.length === 1 ? 'Detective ' + n[0] : 'Detectives';
    return '<article class="doc doc-letter">' + C.letterhead('Cantonal Police', 'Sankt Oswin post · Inspector A. Tscharner') +
      '<p class="doc-date">Sankt Oswin station, Saturday 19 December 1936, 03:15</p>' +
      '<p>Dear ' + who + ',</p>' +
      '<p>Forgive me for knocking at your compartment at this hour. The attendant of your car tells me you are detectives. He also tells me that you both went to bed at ten o’clock and never stirred, which makes you the only two people on this train I am sure of.</p>' +
      '<p>At six minutes past midnight, Casimir Delorme, the watchmaker of La Chaux-de-Fonds, was found shot dead in his berth in compartment 5 of sleeping car 2. His door to the corridor was bolted and chained on the inside.</p>' +
      '<p>An avalanche has buried the line beyond Sankt Oswin. The Alpine Nocturne will not move before the snowplough reaches us, the pass road is closed, and nobody leaves this train. I am the only policeman for thirty kilometres, and I am a village policeman.</p>' +
      '<p>Seven passengers had a reason, or a chance, to want Monsieur Delorme dead. Everything I have so far is in this file. As my search goes on, I will pass you more in sealed envelopes. Some things only you can open for me, starting with Monsieur Delorme’s dispatch case.</p>' +
      '<p>By the time the snowplough gets through, I need to know who killed Casimir Delorme, how it was done, when, and why.</p>' +
      '<p>Everyone on this train has a watch. Trust none of them.</p>' +
      '<p class="sign">A. Tscharner</p><p class="sign-sub">Inspector, Cantonal Police</p></article>';
  };

  D.A2 = function () {
    return '<article class="doc doc-report">' + C.head() + '<h3 class="rep-title">Scene report: sleeping car 2, compartment 5</h3>' +
      C.kv([['Train', 'The Alpine Nocturne, Paris–Vienna, held at Sankt Oswin station since 23:59 (avalanche on the line ahead)'],
        ['Victim', 'Casimir Delorme, 67, of La Chaux-de-Fonds, founder of Delorme & Cie, watchmakers'],
        ['Found', '00:06, by the attendant Emil Stoffel and Mrs Margit Delorme'],
        ['Police aboard', '00:40'], ['Doctor', 'Dr Ursina Caflisch, village doctor, examined the body at 00:55']]) +
      '<h4>How he was found</h4><p>At 00:04 the attendant knocked to wake Mr Delorme, who had asked to be woken at Sankt Oswin. No answer. The attendant unlocked the door with his key, but the safety chain was on and the door opened only four centimetres. He fetched Mrs Delorme from compartment 6, which joins no. 5 by a communicating door, and they went in that way.</p>' +
      '<h4>The body (marker 1)</h4><p>In the berth, on his back, in pyjamas. Shot once in the head at close range through a pillow: a scorched hole, feathers everywhere. No weapon anywhere in the compartment.</p>' +
      '<h4>Doors and window</h4><ul class="items"><li>Corridor door: locked, bolted and on the chain from inside.</li>' +
      '<li>Communicating door to compartment 6 (marker 2): the bolt on the side of no. 5 was drawn back, that is, open. The bolt on the side of no. 6 was also open.</li>' +
      '<li>Window: shut, blind half down.</li></ul>' +
      '<h4>On the folding table</h4><ul class="items"><li>Marker 3: a bottle of Vichy water, half empty; a glass; a folded paper from a sleeping powder (veronal), empty.</li>' +
      '<li>Marker 4: Mr Delorme’s gold hunter watch, open, going, and correct to the minute.</li></ul>' +
      '<h4>Elsewhere</h4><ul class="items"><li>Marker 5: black leather dispatch case, initials C.&nbsp;D., shut with a four-wheel combination lock. Not forced. Nobody aboard knows the combination.</li>' +
      '<li>Marker 6: his jacket on the hook. In the pockets: a wallet with 420 Swiss and 1,100 French francs; passport; ticket; a receipt from the Zurich station telegraph office, 18 Dec., 20:55, for two telegrams, reply paid: one to the <i>Pfarramt Sankt Oswin</i> (the parish priest), 24 words, and one to <i>J. Morand, Innsbruck</i>, 13 words; replies to “Delorme, Alpine Nocturne, Sankt Oswin station”. Also a typewritten letter from J. Morand of Innsbruck (A9).</li></ul>' +
      '<p>Nothing appears to have been taken.</p>' +
      C.note('The stationmaster is out on the line with the avalanche crew and his office is locked. I’ll ask him about any telegrams as soon as he is back.') +
      '<div class="stamp">Confidential</div></article>';
  };

  D.A3 = function () {
    return C.photo(Art.compartment(), 'Compartment 5, photographed at 01:20 by Otto Kessler of <i>Die Woche im Bild</i> at the inspector’s request, after the body was moved to the luggage van. The numbered markers match the scene report.');
  };

  D.A4 = function () {
    return '<article class="doc doc-dossier"><h3 class="dos-title">The seven suspects</h3>' +
      '<p class="dos-note">Everyone else aboard was asleep, in plain view of the staff, or had never met Mr Delorme. I have checked. That leaves these seven. — A.&nbsp;T.</p><div class="dos-grid">' +
      C.suspects.map(function (s) {
        return '<section class="dos-card">' + Art.portrait(s.id, 'portrait') + '<div><h4>' + s.name + '</h4>' +
          '<p class="dos-role">' + C.L(s.role) + ', ' + s.age + '</p>' + C.kv([['From', C.L(s.from)], ['Compartment', C.L(s.comp)]], 'kv-tight') +
          '<p>' + C.L(s.about) + '</p></div></section>';
      }).join('') + '</div></article>';
  };

  D.A5 = function () {
    var rows = [['Paris-Est', '', '11.50¹'], ['Troyes', '13.26¹', '13.28¹'], ['Chaumont', '14.34¹', '14.36¹'],
      ['Belfort', '17.18¹', '17.22¹'], ['Mulhouse', '17.56¹', '17.58¹'], ['Saint-Louis, <i>frontier</i>', '', '18.27¹ <i>passes</i>'],
      ['Basel SBB', '19.34²', '19.52²'], ['Zurich HB', '20.48', '21.02'], ['Sargans', '22.00', '22.03'],
      ['<i>Grauhorn Tunnel</i>', '22.24', '22.35'], ['Pradella', '23.06', '23.08'], ['Sankt Oswin', '23.59', '00.04'],
      ['Innsbruck Hbf', '03.40', '03.52'], ['Wien Westbahnhof', '10.15', '']];
    return '<article class="doc doc-timetable"><header class="tt-head">' + Art.mark('tt-mark') +
      '<div><p class="tt-name">The Alpine Nocturne</p><p class="tt-sub">Train de luxe · sleeping cars only · Winter service 1936–37</p></div></header>' +
      '<p class="tt-route">Paris – Basel – Zurich – Sankt Oswin – Innsbruck – Vienna</p>' +
      C.table(['Station', 'arr.', 'dep.'], rows, 'tt-table') +
      '<p class="tt-foot">¹ French time. ² From the frontier onwards, all times are Central European Time, one hour ahead of French time. Passengers are kindly asked to put their watches forward one hour as the train crosses the frontier.</p>' +
      '<div class="tt-cols"><section><h4>On the way</h4><p><b>Basel.</b> Swiss customs and passports on board. Change of engine; the dining car joins the train.</p>' +
      '<p><b>The Grauhorn Tunnel.</b> 8.7 km beneath the Grauhorn (3,412 m). From Sargans the Oswin Railway hauls the Nocturne by steam, and in the tunnel we run at a steady 48 km/h: eleven minutes in the dark. It is the only tunnel of any length on our route. Kindly keep windows closed in the tunnel; the smoke is considerable.</p>' +
      '<p><b>Sankt Oswin.</b> Mountain village at the foot of the Grauhorn’s south face. Telegrams for passengers may be collected at the station office during our five-minute stop.</p></section>' +
      '<section><h4>Services</h4><p><b>Dining car:</b> first sitting 19.55, second sitting 21.00. The dining car closes at 22.00.</p>' +
      '<p><b>Salon car:</b> bar and writing desk, open until 01.00. Drinks may be signed for and settled at Vienna.</p>' +
      '<p><b>Attendants:</b> ring once for your attendant, twice for the bar. Your attendant will wake you at any hour you wish.</p></section></div>' +
      '<p class="tt-co">Société Transalpine de Wagons-Lits</p></article>';
  };

  D.A6 = function () {
    var L = { title: 'Plan of the train', front: 'Front of the train', back: 'Back', car1: 'SLEEPING CAR 1', car2: 'SLEEPING CAR 2', corridor: 'corridor',
      attendant: 'Attendant', gangway: 'gangway between car 1 and car 2', door: 'communicating door between two compartments', cdoor: 'compartment door to the corridor',
      engine: 'Engine', van: 'Luggage van', salon: 'Salon car', dining: 'Dining car' };
    var P = { car1: ['', 'Aebi', 'R. Delorme', '', 'Oberholzer', 'O. Kessler', '', 'You two', '', ''],
      car2: ['Egli', 'T. Barić', 'H. Duclos', 'C. Pryor', 'C. Delorme', 'M. Delorme', 'K. Imhof', 'Dr Wirz', 'F. v.|Aschau', ''] };
    return '<article class="doc doc-plan"><h3 class="rep-title">Plan of the Alpine Nocturne, night of 18–19 December</h3><div class="plan-wrap">' + Art.trainPlan(L, P) + '</div>' +
      C.table(['Where', 'Who', 'Notes'], [
        ['Luggage van', 'Alois Tschudi, guard', 'Passengers are never left alone in the van.'],
        ['Car 1', 'Anton Brändli, attendant', 'Seat at the back end of car 1, by the gangway to car 2. Keeps a night log.'],
        ['Car 1, nos. 2 and 5', 'Mr Aebi, Mr Oberholzer', 'Commercial travellers from Basel.'],
        ['Car 1, no. 6', 'Otto Kessler', 'Photographer, <i>Die Woche im Bild</i>.'],
        ['Car 2', 'Emil Stoffel, attendant', 'Seat at the front end of car 2, by the gangway to car 1.'],
        ['Car 2, no. 1', 'Mr and Mrs Egli', 'Both over eighty; asleep by 21:30.'],
        ['Car 2, no. 8', 'Dr Hans Wirz', 'Dentist; asleep with wax earplugs from 21:00.'],
        ['Car 2, no. 10', '(empty)', ''],
        ['Salon car', 'Paolo Rinaldi, barman', 'Behind car 2.'],
        ['Dining car', 'Henri Vautier, steward; Giuseppe Ferro, chef', 'At the back of the train.']]) +
      '</article>';
  };
})();
