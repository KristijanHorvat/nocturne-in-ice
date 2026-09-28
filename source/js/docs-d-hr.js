/* Nocturne in Ice: envelope D (Croatian). */
(function () {
  'use strict';
  var C = window.CASE, D = C.docs.hr;
  var q = function (t) { return '<p>„' + t + '“</p>'; };

  D.D1 = function () {
    var ids = ['margit', 'raoul', 'stoffel', 'baric', 'pryor', 'klara', 'baron'];
    return '<article class="doc doc-interviews">' + C.head() + '<h3 class="rep-title">Druga saslušanja, od 04:30 do 06:00</h3>' +
      '<p class="rep-intro">Ovaj sam put svakome najprije stavio dokaze pred nos. — A.&nbsp;T.</p>' + C.jump('D1', ids) +
      C.stmt('D1', 'margit', q('Dobro. Nisam bila u svom kupeu. U deset i pet otišla sam do Raoula, u vagon 1, broj 3, i ostala do malo prije jedanaest. Poruka je bila od njega. Počela sam je paliti, izgubila hrabrost i umjesto toga je poderala.') +
        q('Kad sam se vratila, prozor mi je bio širom otvoren, u kupeu je bilo ledeno, a čađa posvuda, na dasci, na jastuku. Mislila sam da je Stoffel prozračio i zaboravio zatvoriti. Zatvorila sam ga i legla. Nisam provirila do Casimira. Bože, oprosti mi, bilo mi je drago što su vrata zatvorena.') +
        q('Pištolj? Nisam ga taknula od Basela. Kutiju za toaletni pribor nikad ne zaključavam. Svatko tko je stajao u onom hodniku vidio je točno kamo je spremljen.')) +
      C.stmt('D1', 'raoul', q('Poruka je moja. Nas dvoje smo… od ljeta. Otac nije znao. Ili možda jest; znao je većinu stvari.') +
        q('Nakon svađe vratio sam se u kupe u pet do deset i nisam izašao sve dok kondukter nije prošao u ponoć. Margit je došla oko deset i pet, a otišla oko deset do jedanaest. Pitajte svog poslužitelja u vagonu 1; sjedi ondje cijelu noć sa svojom knjižicom.')) +
      C.stmt('D1', 'stoffel', q('Lagao sam vam, inspektore, i žao mi je. U deset i deset napustio sam mjesto i otišao u smočnicu vagona-restorana po led, a Giuseppe mi je natočio grappu za tunel, kao i uvijek. Fotograf nas je snimio. Na mjesto sam se vratio u petnaest do jedanaest.') +
        q('Nisam vidio hrvatskog gospodina kako kuca. Engleska mi je gospođica poslije ispričala. Rekao sam da sam vidio jer je monsieur Delorme već pisao tvrtki o meni, a ostao bih bez posla.')) +
      C.stmt('D1', 'baric', q('Pitajte konduktera iz prtljažnog vagona. Nije se maknuo od mene; putnicima ne vjeruju s prtljagom. Vratio sam se odmah nakon tunela i pokucao da Delormeu dam spise. Nitko nije odgovorio, pa sam mislio da me stari ignorira, kao i uvijek.') +
        q('A sad mi kažete da je već bio mrtav kad sam kucao. Deset godina želio sam mu smrt, inspektore. Čudno je otkriti da mi je žao.')) +
      C.stmt('D1', 'pryor', q('Dobro: pisala sam mu, triput. I pretražila sam mu kupe za večere, od oko osam i pet do pola devet, tražeći medicinsku dokumentaciju radionice. Našla sam pidžamu i aktovku koju nisam mogla otvoriti. Mora da mi je ispod ležaja ispala ukosnica.') +
        q('Ali u pola jedanaest sjedila sam na barskoj stolici s drugim gin fizzom, a kad je fotografu bljesnula bljeskalica, gotovo sam ga ispustila. Imate sliku.')) +
      C.stmt('D1', 'klara', q('Rekao mi je u studenome. Bio je moj otac i namjeravao je to reći, u Beču, pred bilježnikom, u ponedjeljak. Nakon dvadeset i osam godina.') +
        q('Mislite da bih ga ubila tri dana prije nego što mi je trebao dati svoje ime? Sad sam opet nitko. Stara oporuka ne zna da postojim.') +
        q('Cijelu sam večer bila za pisaćim stolom, leđima okrenuta prostoriji. Fotograf me prepao.')) +
      C.stmt('D1', 'baron', q('Rekao sam vam. Od deset i četvrt do petnaest do jedanaest sjedio sam s madame Duclos. Pitajte nju.') +
        q('Vaša fotografija pokazuje je samu u pola jedanaest? Onda sam bio u zahodu. Kakvo pitanje za postaviti čovjeku.') +
        q('Nisam izlazio iz vlaka u Sankt Oswinu. Kaput mi je mokar jer sam stao na stepenicu udahnuti zraka. Ne poznajem nikakvog šefa postaje.') +
        q('Sat? Oduvijek ga nosim na lijevoj ruci. Casimir je godinama dosađivao zbog te krunice.') +
        C.note('Zamolio sam ga da mi repetitor otkuca četvrti. Dugo je okretao krunicu amo-tamo prije nego što je pronašao klizač. Glavni kondukter, koji je iz Ticina i govori španjolski, pokušao je razgovarati s njim na tom jeziku; kaže da je barunov španjolski „španjolski iz udžbenika“.')) + '</article>';
  };

  D.D2 = function () {
    return '<article class="doc doc-report">' + C.head() + '<h3 class="rep-title">Izjava Mena Cadonaua, šefa postaje Sankt Oswin</h3>' + '<p class="rep-intro">Uzeta u 04:20, kad se vratio s lavine.</p>' +
      q('U pola dvanaest župnik Casutt sišao je od crkve kroz snijeg s pismom. ‚Za gospodina Delormea u Nokturnu‘, rekao je. ‚Dajte ga njemu i nikome drugome.‘ Stavio sam ga u ladicu.') +
      q('U dvanaest i četvrt, kad je vlak stajao već četvrt sata, u moj je ured iz vlaka ušao jedan gospodin. Visok, krzneni ovratnik, ožiljak na lijevom obrazu. Pitao je ima li pismo ili brzojav za gospodina Delormea. Pitao je na našem dolinskom njemačkom. To se ne čuje izvan Oswinske doline; mislio sam da je iz neke naše obitelji koja je otišla u grad.') +
      q('Rekao sam da je župnik Casutt ostavio pismo, ali da ga mogu dati samo gospodinu Delormeu i nikome drugome. Rekao je da gospodin Delorme spava i ne želi da ga se budi, pa će mu ga on odnijeti. Rekao sam ne. Dugo me gledao, a onda se vratio u vlak.') +
      q('U dvanaest i dvadeset zaključao sam ured i izašao na prugu s ekipom za lavinu. Kad sam čuo da je gospodin Delorme mrtav, sačuvao sam pismo za vas. Evo ga. Nisam ga otvorio.') + '</article>';
  };

  D.D3 = function () {
    return '<article class="doc doc-hand"><p class="hd-head">Pfarramt Sankt Oswin · 18. prosinca 1936., 23:20</p>' +
      C.hand('<p>Poštovani gospodine Delorme,</p><p>Vaš brzojav stigao mi je večeras u petnaest do deset. Pitate je li Kaspar Gredig, vodič kojeg sam ovdje pokopao 25. kolovoza 1934., bio ljevak ili dešnjak.</p>' +
        '<p>Bio je dešnjak. Trideset sam ga godina gledao kako rezbari, puca i reže kruh, uvijek desnom rukom.</p>' +
        '<p>Ali moram Vam reći ono što nikome nisam rekao. Kad sam prao tijelo prije pokopa, srednji prst lijeve ruke imao je onaj tvrdi žulj koji ostaje od dugogodišnjeg držanja pera. Kaspar se jedva znao potpisati. Govorio sam sebi da mi tuga pravi šale, lica više nije bilo, barun je ležao u bolnici u Innsbrucku, i tko sam ja da išta kažem.</p>' +
        '<p>Ako nešto znate, za ime Božje, recite mi. Ovo ću sam odnijeti na postaju.</p><p>Luzi Casutt, župnik</p>') +
      '<p class="caption">Šef postaje predao ga je policiji u 04:20, neotvoreno.</p></article>';
  };

  D.D4 = function () {
    return '<article class="doc doc-report">' + '<header class="rep-head"><span>Oswinska željeznica · održavanje pruge</span><span>Ophodnja</span></header>' +
      '<h3 class="rep-title">Izvještaj ophodnje pruge, tunel Grauhorn</h3>' +
      C.kv([['Ophodnja', 'Gion Derungs, predradnik, s dvojicom ljudi'], ['Vrijeme', '19. prosinca 1936., od 02:10 do 03:05, pješice od sjevernog do južnog portala'],
        ['Razlog', 'Nakon uzbune zbog lavine pješice se obilazi svaki tunel na pruzi da se potraži odlomljeni led']]) +
      '<p>Na <b>3,9 km</b> od sjevernog portala, u tucaniku uz kolosijek kojim prolazi Nokturno, pronašli smo mali automatski pištolj: FN, kalibar 6,35 mm, model „Baby“, serijski broj <span class="mono">81 604</span>. Crn od čađe. Jedan metak ispaljen, pet ih je ostalo u spremniku.</p>' +
      '<p>Ležao je metar od tračnice, ondje gdje bi pala stvar bačena kroz prozor vagona.</p>' +
      '<p>Otkako je Nokturno prošao između 22:24 i 22:35, kroz tunel nije prošao nijedan drugi vlak. Pruga je iza njega zatvorena u Sargansu u 22:40 zbog snijega.</p>' +
      '<p class="sign">G. Derungs</p></article>';
  };

  D.D5 = function () {
    return '<article class="doc doc-interviews">' + C.head() + '<h3 class="rep-title">Izjave osoblja vlaka</h3>' +
      C.stmt('D5', 'tschudi', q('Gospodin Barić došao je u prtljažni vagon u deset i četvrt pogledati svoj sanduk, broj 14. Velik sat, sav od stakla i mjedi. Bio sam s njim cijelo vrijeme; putnici se nikad ne ostavljaju sami u prtljažnom vagonu. Razgovarao je s tim satom kao s djetetom. Vratio se u dvadeset dva i trideset osam, odmah nakon što smo izašli iz tunela.')) +
      C.stmt('D5', 'ferro', q('Emil je došao u moju smočnicu u deset i deset po led. Nas dvojica uvijek popijemo jednu grappu za Grauhorn; to nam je običaj, jedanaest minuta mraka i jedna čašica. Fotograf nas je snimio. Emil se vratio u svoj vagon oko petnaest do jedanaest.')) +
      C.stmt('D5', 'rinaldi', q('Gospođica Pryor sjedila je za šankom od deset i četvrt do malo nakon tunela. Dva gin fizza, i cijelo je vrijeme pisala. Mademoiselle Imhof bila je za pisaćim stolom od prije deset do otprilike pet do jedanaest.') +
        q('Stara gospođa za stolom 4 došla je oko deset i četvrt i sjedila sama sa svojom kamilicom. Drijemala je. Barun? Došao je kasnije; ne bih vam znao reći kad, nakon tunela salon se napunio. Potpisao je račun za konjak, pa će na računu pisati.')) + '</article>';
  };
})();
