/* Nocturne in Ice: envelope C, part 1 (Croatian). */
(function () {
  'use strict';
  var C = window.CASE, Art = window.Art, D = C.docs.hr;
  var li = function (a) { return '<ul class="items">' + a.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>'; };

  D.C1 = function () {
    return '<article class="doc doc-report">' + C.head() + '<h3 class="rep-title">Pretraga kupea, od 02:50 do 04:10</h3>' +
      '<p class="rep-intro">Obavio sam je ja, uz glavnog konduktera kao svjedoka. Svaki je putnik bio prisutan pri pretrazi vlastitog kupea.</p>' +
      '<h4>Vagon 2, br. 6: gospođa Margit Delorme</h4>' + li([
        'Kutija za toaletni pribor (nezaključana): mala kutija za pištolj obložena baršunom, <b>prazna</b>. Pištolja nema nigdje u kupeu.',
        'Prozorska daska i čipkasta zavjesa: svježa crna čađa. Mrlje od čađe na jastuku. Kupe je primjetno hladniji od susjednih.',
        'Na podu uz vrata između kupea: dva mala bijela paperja, poput onih iz jastuka u broju 5.',
        'U pepeljari: poruka poderana na šest komada, jedan ugao nagorio, kao da ju je netko počeo paliti pa se predomislio (C8).',
        'Kutija praška protiv migrene, puna; na ovom putovanju nijedan nije uzet.']) +
      '<h4>Vagon 1, br. 3: gospodin Raoul Delorme</h4>' + li(['Tri pisma vjerovnika iz Ženeve i Monte Carla.', 'Pola boce konjaka.',
        'Na jastuku duga plava vlas: predugačka da bi bila njegova.']) +
      '<h4>Vagon 2, br. 2: gospodin Tomislav Barić</h4>' + li(['Smotuljak urarskih igala i odvijača.',
        'Omotnica naslovljena na C. Delormea, još zalijepljena, s primjerkom sudskih spisa za Beč.', 'Fotografije radionice i jednog rastavljenog sata.']) +
      '<h4>Vagon 2, br. 4: gospođica Constance Pryor</h4>' + li(['Stenografska bilježnica; mapa novinskih isječaka o trovanju radijem među slikaricama brojčanika.',
        'Olovkom nacrtan raspored kupea 5, s označenom aktovkom.',
        'Kutija ukosnica od kornjačevine, jedna nedostaje. Ukosnica od kornjačevine pronađena je ispod ležaja gospodina Delormea u broju 5; potpuno odgovara ostalima.']) +
      '<h4>Vagon 2, br. 7: gospođica Klara Imhof</h4>' + li(['Mapa s prepiskom gospodina Delormea, pisma prepisana i spremna za potpis.',
        'U torbici mala fotografija mlade žene s djetetom u naručju. Na poleđini: <span class="hand-inline">Klara, tri mjeseca. Oprosti mi. — C.</span> Datirano 1908.']) +
      '<h4>Vagon 2, br. 9: barun Friedrich von Aschau</h4>' + li(['Odjeća, pisma i austrijska putovnica izdana u Innsbrucku u prosincu 1934. („umjesto one izgubljene u nesreći“).',
        'Kaput s krznenim ovratnikom na vješalici. U 02:55 krzno je bilo posve mokro, kao od snijega. Kaže da je sišao na peron udahnuti zraka kad je vlak stao.',
        'Španjolska gramatika, dobro izlistana, s vježbama olovkom po marginama.']) +
      '<h4>Pregradak poslužitelja, vagon 2: Emil Stoffel</h4>' + li(['Pola boce grappe, četvrtina puna, iza posteljine.']) +
      '<h4>Kupe 5, vrata prema hodniku</h4><p>Barićevim iglama i uz njegovo dopuštenje pokušao sam s hodnika podići sigurnosni lanac. To se ne može: lanac sjedi u utoru do kojeg se izvana ne dopire. Poslužiteljev ključ otvara bravu, ali ne i lanac.</p></article>';
  };

  D.C2 = function () {
    return '<article class="doc doc-report doc-medical">' + C.letterhead('Dr. med. Ursina Caflisch', 'Liječnica · Sankt Oswin') +
      '<h3 class="rep-title">Pregled tijela Casimira Delormea</h3>' +
      C.kv([['Pregledano', '19. prosinca 1936., 00:55, kupe 5, spavaća kola 2'], ['Uzrok smrti', 'jedna strijelna rana glave']]) +
      '<p>Hitac je ispaljen s cijevi utisnutom u jastuk položen preko lica. Jastuk je nagorio i poderan, a perje mu se zapetljalo u kosu. Iz madraca je izvađen mali metak kalibra 6,35 mm. Smrt je nastupila trenutačno. Nije se opirao; mislim da je spavao.</p>' +
      '<p>Na rukama nema tragova baruta i nema oružja: ovo nije samoubojstvo.</p>' +
      '<p>U čaši na stoliću bila je voda Vichy s tragovima veronala, u običnoj dozi za spavanje. Unutar četvrt sata učinila bi ga pospanim, a ubrzo bi i zaspao. U njegovoj smrti nije imala nikakvu ulogu.</p>' +
      '<p><b>Vrijeme smrti.</b> Tijelo je još bilo toplo kad sam stigla, a ukočenost nije počela. No kupe je bio zagrijan na 26 stupnjeva, što usporava hlađenje. Na temelju samog tijela mogu reći tek ovo: <b>između 22:00 i 23:30</b>. Ako želite točnije, morat ćete to pronaći u vlaku, a ne u njemu.</p>' +
      '<p class="sign">U. Caflisch</p></article>';
  };

  D.C3 = function () {
    return C.photo(Art.salon(), 'Ploča 12, snimio Otto Kessler u 22:31 u salonskom vagonu, dok je vlak bio u tunelu Grauhorn. Razvijena noćas u tamnoj komori ljekarne u Sankt Oswinu. Aparat je stajao na kraju vagona, uz vrata prema vagonu 2.');
  };

  D.C4 = function () {
    var rows = [['7', '19:38', 'Basel. Carinici u hodniku vagona 2.'], ['8', '20:02', 'Vagon-restoran, prva smjena. Opći prizor.'],
      ['9', '20:24', 'Vagon-restoran. Stol Delormeovih; barun podiže čašu.'], ['10', '21:48', 'Salonski vagon. Klavir, nitko ne svira.'],
      ['11', '22:26', 'Smočnica vagona-restorana. Kuhar i jedan poslužitelj spavaćih kola nazdravljaju „Grauhornu“.'],
      ['12', '22:31', 'Salonski vagon, opći prizor, u tunelu. <i>Razvijeno; vidi C3.</i>'], ['13', '23:34', 'Salonski vagon. Dvojica kartaša. <i>Zamagljeno; ništa se ne vidi.</i>'],
      ['14', '00:12', 'Postaja Sankt Oswin u snijegu. Muškarac s krznenim ovratnikom na vratima ureda postaje. <i>Jako podeksponirano.</i>'],
      ['15', '01:20', 'Kupe 5, za policiju. <i>Vidi A3.</i>']];
    return '<article class="doc doc-log">' + '<h3 class="rep-title">Knjiga ploča Otta Kesslera, <i>Die Woche im Bild</i></h3>' +
      '<p class="log-sub">Petak, 18. prosinca 1936. „Sat sam namjestio prema kolodvorskom satu u Baselu.“</p>' +
      C.table(['Ploča', 'Vrijeme', 'Motiv'], rows) +
      C.hand('<p>Izašao sam iz vagona-restorana s aparatom oko 22:28 i prošao do salonskog vagona za ploču 12. — O. K.</p>', 'hand-small') + '</article>';
  };
})();
