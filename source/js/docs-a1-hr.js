/* Nocturne in Ice: envelope A, part 1 (Croatian). */
(function () {
  'use strict';
  var C = window.CASE, Art = window.Art, D = C.docs.hr, esc = C.esc;

  D.A1 = function (ctx) {
    var n = ctx.names.filter(Boolean).map(esc);
    var who = n.length === 2 ? 'detektivi ' + n[0] + ' i ' + n[1] : n.length === 1 ? 'detektive ' + n[0] : 'detektivi';
    return '<article class="doc doc-letter">' + C.letterhead('Kantonalna policija', 'Postaja Sankt Oswin · inspektor A. Tscharner') +
      '<p class="doc-date">Postaja Sankt Oswin, subota 19. prosinca 1936., 03:15</p>' +
      '<p>Poštovani ' + who + ',</p>' +
      '<p>oprostite što kucam na vaš kupe u ovo doba. Poslužitelj vašeg vagona kaže da ste detektivi. Kaže i da ste oboje legli u deset sati i da se niste ni pomaknuli, što vas čini jedinim dvjema osobama u ovom vlaku u koje sam siguran.</p>' +
      '<p>U šest minuta iza ponoći Casimir Delorme, urar iz La Chaux-de-Fondsa, pronađen je ustrijeljen u svom ležaju u kupeu 5 spavaćih kola 2. Vrata njegova kupea prema hodniku bila su iznutra zaključana zasunom i lancem.</p>' +
      '<p>Lavina je zatrpala prugu iza Sankt Oswina. Alpski nokturno neće krenuti dok do nas ne stigne ralica, cesta preko prijevoja je zatvorena i nitko ne napušta ovaj vlak. Ja sam jedini policajac u krugu od trideset kilometara, i to seoski policajac.</p>' +
      '<p>Sedmero putnika imalo je razlog ili priliku poželjeti smrt gospodina Delormea. Sve što zasad imam nalazi se u ovom spisu. Kako pretraga bude napredovala, slat ću vam još u zapečaćenim omotnicama. Neke stvari samo vi možete otvoriti umjesto mene, počevši od aktovke gospodina Delormea.</p>' +
      '<p>Dok se ralica ne probije, moram znati tko je ubio Casimira Delormea, kako je to učinjeno, kada i zašto.</p>' +
      '<p>Svatko u ovom vlaku ima sat. Ne vjerujte nijednom.</p>' +
      '<p class="sign">A. Tscharner</p><p class="sign-sub">Inspektor kantonalne policije</p></article>';
  };

  D.A2 = function () {
    return '<article class="doc doc-report">' + C.head() + '<h3 class="rep-title">Zapisnik o očevidu: spavaća kola 2, kupe 5</h3>' +
      C.kv([['Vlak', 'Alpski nokturno, Pariz–Beč, zadržan na postaji Sankt Oswin od 23:59 (lavina na pruzi ispred)'],
        ['Žrtva', 'Casimir Delorme, 67, iz La Chaux-de-Fondsa, osnivač urarske tvrtke Delorme & Cie'],
        ['Pronađen', 'u 00:06; pronašli su ga poslužitelj Emil Stoffel i gospođa Margit Delorme'],
        ['Policija u vlaku', '00:40'], ['Liječnica', 'dr. Ursina Caflisch, seoska liječnica, pregledala je tijelo u 00:55']]) +
      '<h4>Kako je pronađen</h4><p>U 00:04 poslužitelj je pokucao da probudi gospodina Delormea, koji je tražio da ga se probudi u Sankt Oswinu. Nije bilo odgovora. Poslužitelj je otključao vrata svojim ključem, ali sigurnosni lanac bio je namješten pa su se vrata otvorila samo četiri centimetra. Pozvao je gospođu Delorme iz kupea 6, koji je s brojem 5 spojen vratima između kupea, i ušli su tim putem.</p>' +
      '<h4>Tijelo (oznaka 1)</h4><p>U ležaju, na leđima, u pidžami. Pogođen jednim hicem u glavu iz neposredne blizine, kroz jastuk: nagorjela rupa, perje posvuda. U kupeu nema oružja.</p>' +
      '<h4>Vrata i prozor</h4><ul class="items"><li>Vrata prema hodniku: iznutra zaključana, zatvorena zasunom i lancem.</li>' +
      '<li>Vrata između kupea prema kupeu 6 (oznaka 2): zasun sa strane broja 5 bio je povučen, dakle otvoren. Zasun sa strane broja 6 također je bio otvoren.</li>' +
      '<li>Prozor: zatvoren, zastor napola spušten.</li></ul>' +
      '<h4>Na preklopnom stoliću</h4><ul class="items"><li>Oznaka 3: boca vode Vichy, dopola prazna; čaša; presavijen papirić od praška za spavanje (veronal), prazan.</li>' +
      '<li>Oznaka 4: zlatni džepni sat s poklopcem gospodina Delormea, otvoren, radi i točan je u minutu.</li></ul>' +
      '<h4>Ostalo</h4><ul class="items"><li>Oznaka 5: crna kožna aktovka s inicijalima C.&nbsp;D., zatvorena bravom s četiri kotačića. Nije nasilno otvarana. Nitko u vlaku ne zna kombinaciju.</li>' +
      '<li>Oznaka 6: njegov sako na vješalici. U džepovima: novčanik s 420 švicarskih i 1100 francuskih franaka; putovnica; vozna karta; potvrda brzojavnog ureda na postaji Zürich od 18. prosinca, 20:55, za dva brzojava s plaćenim odgovorom: jedan za <i>Pfarramt Sankt Oswin</i> (župni ured), 24 riječi, i jedan za <i>J. Morand, Innsbruck</i>, 13 riječi; odgovori na adresu „Delorme, Alpski nokturno, postaja Sankt Oswin“. Također pismo J. Moranda iz Innsbrucka otipkano na stroju (A9).</li></ul>' +
      '<p>Čini se da ništa nije odneseno.</p>' +
      C.note('Šef postaje vani je na pruzi s ekipom za lavinu, a ured mu je zaključan. Pitat ću ga za brzojave čim se vrati.') +
      '<div class="stamp">Povjerljivo</div></article>';
  };

  D.A3 = function () {
    return C.photo(Art.compartment(), 'Kupe 5, snimio u 01:20 Otto Kessler iz <i>Die Woche im Bild</i> na inspektorov zahtjev, nakon što je tijelo preneseno u prtljažni vagon. Brojčane oznake odgovaraju zapisniku o očevidu.');
  };

  D.A4 = function () {
    return '<article class="doc doc-dossier"><h3 class="dos-title">Sedmero osumnjičenih</h3>' +
      '<p class="dos-note">Svi ostali u vlaku spavali su, bili na očima osoblja ili nikad nisu upoznali gospodina Delormea. Provjerio sam. Ostaje ovih sedmero. — A.&nbsp;T.</p><div class="dos-grid">' +
      C.suspects.map(function (s) {
        return '<section class="dos-card">' + Art.portrait(s.id, 'portrait') + '<div><h4>' + s.name + '</h4>' +
          '<p class="dos-role">' + C.L(s.role) + ', ' + s.age + '</p>' + C.kv([['Podrijetlo', C.L(s.from)], ['Kupe', C.L(s.comp)]], 'kv-tight') +
          '<p>' + C.L(s.about) + '</p></div></section>';
      }).join('') + '</div></article>';
  };

  D.A5 = function () {
    var rows = [['Paris-Est', '', '11.50¹'], ['Troyes', '13.26¹', '13.28¹'], ['Chaumont', '14.34¹', '14.36¹'],
      ['Belfort', '17.18¹', '17.22¹'], ['Mulhouse', '17.56¹', '17.58¹'], ['Saint-Louis, <i>granica</i>', '', '18.27¹ <i>prolazi</i>'],
      ['Basel SBB', '19.34²', '19.52²'], ['Zürich HB', '20.48', '21.02'], ['Sargans', '22.00', '22.03'],
      ['<i>Tunel Grauhorn</i>', '22.24', '22.35'], ['Pradella', '23.06', '23.08'], ['Sankt Oswin', '23.59', '00.04'],
      ['Innsbruck Hbf', '03.40', '03.52'], ['Wien Westbahnhof', '10.15', '']];
    return '<article class="doc doc-timetable"><header class="tt-head">' + Art.mark('tt-mark') +
      '<div><p class="tt-name">Alpski nokturno</p><p class="tt-sub">Train de luxe · samo spavaća kola · zimski vozni red 1936./37.</p></div></header>' +
      '<p class="tt-route">Pariz – Basel – Zürich – Sankt Oswin – Innsbruck – Beč</p>' +
      C.table(['Postaja', 'dol.', 'odl.'], rows, 'tt-table') +
      '<p class="tt-foot">¹ Francusko vrijeme. ² Od granice nadalje sva su vremena po srednjoeuropskom vremenu, sat ispred francuskoga. Putnike ljubazno molimo da pomaknu satove sat unaprijed kad vlak prijeđe granicu.</p>' +
      '<div class="tt-cols"><section><h4>Usput</h4><p><b>Basel.</b> Švicarska carina i putovnice u vlaku. Mijenja se lokomotiva; priključuje se vagon-restoran.</p>' +
      '<p><b>Tunel Grauhorn.</b> 8,7 km ispod Grauhorna (3412 m). Od Sargansa Nokturno vuče parna lokomotiva Oswinske željeznice, a kroz tunel vozimo stalnih 48 km/h: jedanaest minuta u mraku. To je jedini dugi tunel na našoj ruti. Molimo da u tunelu prozori ostanu zatvoreni; dima je mnogo.</p>' +
      '<p><b>Sankt Oswin.</b> Planinsko selo u podnožju južne stijene Grauhorna. Brzojave za putnike moguće je preuzeti u uredu postaje tijekom našeg zaustavljanja od pet minuta.</p></section>' +
      '<section><h4>Usluge</h4><p><b>Vagon-restoran:</b> prva smjena u 19.55, druga u 21.00. Vagon-restoran zatvara se u 22.00.</p>' +
      '<p><b>Salonski vagon:</b> bar i pisaći stol, otvoreno do 01.00. Pića se mogu potpisati i platiti u Beču.</p>' +
      '<p><b>Poslužitelji:</b> pozvonite jednom za svog poslužitelja, dvaput za bar. Vaš će vas poslužitelj probuditi u koje god doba želite.</p></section></div>' +
      '<p class="tt-co">Société Transalpine de Wagons-Lits</p></article>';
  };

  D.A6 = function () {
    var L = { title: 'Plan vlaka', front: 'Čelo vlaka', back: 'Začelje', car1: 'SPAVAĆA KOLA 1', car2: 'SPAVAĆA KOLA 2', corridor: 'hodnik',
      attendant: 'Poslužitelj', gangway: 'prijelaz između vagona 1 i vagona 2', door: 'vrata između dvaju kupea', cdoor: 'vrata kupea prema hodniku',
      engine: 'Lokomotiva', van: 'Prtljažni vagon', salon: 'Salonski vagon', dining: 'Vagon-restoran' };
    var P = { car1: ['', 'Aebi', 'R. Delorme', '', 'Oberholzer', 'O. Kessler', '', 'Vas dvoje', '', ''],
      car2: ['Egli', 'T. Barić', 'H. Duclos', 'C. Pryor', 'C. Delorme', 'M. Delorme', 'K. Imhof', 'Dr. Wirz', 'F. v.|Aschau', ''] };
    return '<article class="doc doc-plan"><h3 class="rep-title">Plan Alpskog nokturna u noći 18. na 19. prosinca</h3><div class="plan-wrap">' + Art.trainPlan(L, P) + '</div>' +
      C.table(['Gdje', 'Tko', 'Napomena'], [
        ['Prtljažni vagon', 'Alois Tschudi, kondukter', 'Putnici se nikad ne ostavljaju sami u prtljažnom vagonu.'],
        ['Vagon 1', 'Anton Brändli, poslužitelj', 'Sjedi na stražnjem kraju vagona 1, uz prijelaz u vagon 2. Vodi noćni dnevnik.'],
        ['Vagon 1, br. 2 i 5', 'g. Aebi, g. Oberholzer', 'Trgovački putnici iz Basela.'],
        ['Vagon 1, br. 6', 'Otto Kessler', 'Fotograf, <i>Die Woche im Bild</i>.'],
        ['Vagon 2', 'Emil Stoffel, poslužitelj', 'Sjedi na prednjem kraju vagona 2, uz prijelaz u vagon 1.'],
        ['Vagon 2, br. 1', 'g. i gđa Egli', 'Oboje stariji od osamdeset; spavali su od 21:30.'],
        ['Vagon 2, br. 8', 'dr. Hans Wirz', 'Zubar; spavao s voštanim čepićima u ušima od 21:00.'],
        ['Vagon 2, br. 10', '(prazno)', ''],
        ['Salonski vagon', 'Paolo Rinaldi, barmen', 'Iza vagona 2.'],
        ['Vagon-restoran', 'Henri Vautier, šef sale; Giuseppe Ferro, kuhar', 'Na začelju vlaka.']]) +
      '</article>';
  };
})();
