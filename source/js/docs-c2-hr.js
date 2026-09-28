/* Nocturne in Ice: envelope C, part 2 (Croatian). */
(function () {
  'use strict';
  var C = window.CASE, Art = window.Art, D = C.docs.hr;

  C.noteLines = C.noteLines || {};
  C.noteLines.hr = [{ t: 'M —' }, { t: 'Večeras, kad se zatvori vagon-restoran.', size: 23 }, { t: 'Vagon 1, vrata 3. Nitko neće vidjeti.', size: 24 }, { t: 'Spali ovo.' }, { t: '— R.', x: 300 }];

  D.C5 = function () {
    return C.chits('Računi s bara, salonski vagon, petak 18. prosinca', C.chitRows({ t: 'stol', desk: 'pisaći stol', bar: 'šank', kirsch2: '2 kirscha', kirsch: '1 kirsch',
      beer2: '2 piva', coffee: '1 crna kava', fizz: '1 gin fizz', tisane: '1 čaj od kamilice', water: '1 čaša vode', cognac: '1 konjak (Martell)' }),
      'Svaki račun otiskuje se na satu za žigosanje na baru, koji barmen svake večeri namješta prema željezničkom satu iznad šanka. Gosti se potpisuju imenom, vagonom i kupeom.');
  };

  D.C6 = function () {
    var rows = [['21:30', 'Gospoda Aebi (2) i Oberholzer (5) u salonski vagon.'], ['21:32', 'G. R. Delorme (3) prema vagonu 2.'],
      ['21:40', 'G. Kessler (6) prema salonskom vagonu, s fotoaparatom.'], ['21:55', 'G. R. Delorme natrag u br. 3.'],
      ['22:00', 'Namješteni ležajevi u br. 8 za dvoje detektiva. U br. 8 ugašeno svjetlo.'],
      ['22:05', 'Dama u ogrtaču od srebrne lisice došla je iz vagona 2 i otišla uz hodnik. Bio sam kod ormara s posteljinom, napola okrenut leđima: nisam joj vidio lice ni na koja je vrata ušla.'],
      ['22:15', 'G. Barić (vagon 2) prošao do prtljažnog vagona.'], ['22:24–22:35', 'Tunel Grauhorn.'], ['22:38', 'G. Barić vratio se iz prtljažnog vagona, prema vagonu 2.'],
      ['22:52', 'Dama u srebrnom krznu vratila se niz hodnik i prošla u vagon 2.'],
      ['23:40', 'Gospoda Aebi i Oberholzer vratili se iz salonskog vagona.'], ['23:50', 'G. Kessler vratio se iz salonskog vagona.'],
      ['00:10', 'Stoffel (vagon 2) dotrčao po glavnog konduktera.'], ['00:12', 'G. Kessler izašao s aparatom na peron.']];
    return '<article class="doc doc-log"><h3 class="rep-title">Noćni dnevnik, spavaća kola 1</h3><p class="log-sub">Vodi ga Anton Brändli, poslužitelj, na svom mjestu uz prijelaz u vagon 2. Tvrtka od svakog poslužitelja traži da noću bilježi tko prolazi.</p>' +
      C.table(['Vrijeme', 'Zapis'], rows) +
      C.hand('<p>Između 21:55 i 22:52 pokraj mog mjesta nitko nije prošao osim kako je ovdje zapisano. Iz vagona 1 u vagon 2 nije prešao nitko osim dame i g. Barića. — A. Brändli</p>', 'hand-small') + '</article>';
  };

  D.C7 = function () {
    return '<article class="doc doc-news"><header class="np-mast"><p class="np-name">Der Alpenbote</p><p class="np-line">Chur · utorak, 21. kolovoza 1934. · br. 196 · 20 rappena</p></header>' +
      '<h3 class="np-head">Tragedija na Grauhornu</h3><p class="np-deck">Poginuo vodič iz Sankt Oswina; austrijski barun preživio pad niz sjevernu stijenu</p>' +
      '<div class="np-cols"><figure class="np-fig">' + Art.grauhorn1934() + '<figcaption>Barun Friedrich von Aschau (lijevo) i njegov vodič Kaspar Gredig kod planinarske kuće na Grauhornu u nedjelju ujutro, prije uspona. Fotografija: A. Bundi, Sankt Oswin.</figcaption></figure>' +
      '<p>U nedjelju je poznati vodič iz Sankt Oswina <b>Kaspar Gredig</b>, 34, izgubio život u sjevernoj stijeni Grauhorna (3412 m) vodeći baruna Friedricha von Aschaua iz Innsbrucka.</p>' +
      '<p>Prema barunovim riječima, dvojica su bila navezana na uže ispod vršnog grebena kad se oko jedanaest sati prijepodne odlomila snježna streha. Obojica su pala oko 300 metara. Spasioci iz Sankt Oswina došli su do njih u ponedjeljak.</p>' +
      '<p>Barun je pronađen pri svijesti, ali teško ozlijeđen, s ozljedama lica i lijeve šake; na nosilima je snesen u dolinu i prevezen u bolnicu u Innsbrucku. Spasiocima je, kako doznajemo, uspio reći svoje ime, ali malo što drugo.</p>' +
      '<p>Vodičevo tijelo, izvučeno kasno u ponedjeljak, bilo je toliko unakaženo da ga „ni rođena majka ne bi prepoznala“, rekao je jedan spasilac našim novinama. Gredig, neoženjen, kojemu je majka umrla prošle godine, vodio je na Grauhorn od 1922. Godine 1929. izgubio je vršak jednog prsta zbog ozeblina, ali s klijentom nikad nije doživio nesreću.</p>' +
      '<p>Bit će pokopan u Sankt Oswinu u subotu.</p></div>' +
      '<p class="np-trans">(Prevedeno s njemačkog. Pribodeno u čekaonici postaje Sankt Oswin, gdje još visi Gredigova slika.)</p></article>';
  };

  D.C8 = function () {
    return C.tornDoc('Pronađeno u pepeljari kupea 6, poderano na šest komada. Jedan je ugao nagorio, kao da ju je netko počeo paliti pa izgubio hrabrost.');
  };
})();
