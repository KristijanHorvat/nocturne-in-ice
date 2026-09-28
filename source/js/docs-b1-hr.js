/* Nocturne in Ice: envelope B, part 1 (Croatian). */
(function () {
  'use strict';
  var C = window.CASE, Art = window.Art, D = C.docs.hr;

  D.B1 = function () {
    var e = function (t, h) { return '<p class="nb-entry"><span class="nb-t">' + t + '</span>' + h + '</p>'; };
    return '<article class="doc doc-notebook"><div class="nb-page"><h4 class="nb-day">Četvrtak, 17. prosinca — Pariz</h4>' +
      e('', 'Pismo od Moranda u hotelu. Pročitati ga s karticom 3 u vlaku. Morand ne piše tako bez razloga.') +
      e('', 'Brzojaviti Klari: bečki bilježnik, ponedjeljak u 11.00.') +
      '<h4 class="nb-day">Petak, 18. prosinca</h4>' +
      e('11.50', 'Gare de l’Est. F. šarmantan kao i uvijek.') +
      e('popodne', 'Morand, s karticom 3. Ne razumijem ga. Ili razumijem, a ne želim.') +
      e('večera', '7031 na krivom zglobu. Krunica mu se zabada u nadlanicu, a on to i ne primjećuje. Navija ga kao stranac. Ja sam napravio taj sat. Znam za koga je napravljen.') +
      e('Zürich', 'Brzojavio Casuttu i Morandu. Odgovor u S. Oswinu.') +
      e('21.15', 'Rekao F.-u da će moj odgovor dobiti u S. Oswinu. Nasmiješio se. Taj mi se osmijeh nije svidio.') +
      e('', 'Opet R. Ne. Ne baš večeras.') +
      e('22.00', 'M. kroz vrata kaže laku noć. Prašak. Krevet. Ako Casutt kaže ono što mislim da će reći, od Beča nema ništa, i neka nam Bog pomogne.') +
      '</div><p class="caption">Mali crni džepni rokovnik iz aktovke. Posljednje dvije ispisane stranice.</p></article>';
  };

  D.B2 = function () {
    return '<article class="doc doc-ledger"><header class="lg-head"><p>Delorme &amp; Cie · La Chaux-de-Fonds</p><h3>Registar velikih komplikacija</h3><p class="lg-no">Br. 7031</p></header>' +
      C.kv([['Naručeno', '12. ožujka 1931., pismom iz Buenos Airesa'], ['Klijent', 'barun Friedrich von Aschau, Estancia Santa Inés, Buenos Aires'],
        ['Sat', 'Ručni sat od 18-karatnog zlata s minutnim repetitorom: kad se pritisne klizač, otkucava sate, četvrti i minute. Kalibar Nocturne II.'],
        ['Klijentova uputa', '<span class="hand-inline">„Ljevak sam i sat nosim na desnom zglobu. Molim vas da navijač stavite na drugu stranu, gdje mi se neće zabadati u nadlanicu.“</span>'],
        ['Potpis', '<span class="sig sig-back">F. v. Aschau</span>'],
        ['Izvedba', 'Krunica i klizač repetitora postavljeni na devet sati. Na poleđini kućišta ugravirano <i>F. v. A. · Semper paratus</i>.'],
        ['Isporučeno', 'Preporučenom poštom u Buenos Aires, 3. listopada 1931. Klijent nikad nije viđen osobno. Cijena 9400 franaka.'],
        ['Servis', 'Rujan 1934., primljeno preko J. Moranda, Innsbruck: razbijeno staklo, udubljeno kućište, slomljena osovina nemira, „oštećen u padu na Grauhornu“. Popravljen i vraćen Morandu 30. studenoga 1934.']], 'kv-ledger') +
      '<div class="lg-sketch">' + Art.watch7031({ aria: 'Skica sata 7031 s krunicom na devet sati', crown: 'krunica na IX', wrist: 'za desni zglob' }) + '</div>' +
      '<p class="lg-pencil hand">desni zglob — C.D.</p>' +
      '<p class="caption">Preslika stranice registra koju je ženevski ured 15. prosinca poslao gospodinu Delormeu u Pariz.</p></article>';
  };

  D.B3 = function () {
    var cl = [
      'Barun Friedrich von Aschau kupuje 40 % dionica tvrtke Delorme & Cie SA za dva milijuna švicarskih franaka, plativo pri potpisu.',
      'Barun ulazi u upravni odbor kao potpredsjednik.',
      'Gospodin Casimir Delorme ostaje predsjednik i zadržava odlučujući glas.',
      'Gospodin Raoul Delorme ostaje prodajni direktor i odgovara potpredsjedniku.',
      'Kalibar Nocturne i svi njegovi patenti ostaju vlasništvo tvrtke.',
      'Nijedna strana ne smije pet godina prodati dionice trećoj osobi bez pristanka druge.',
      'Na ovaj se ugovor primjenjuje švicarsko pravo.',
      'Potpisat će se u Beču u ponedjeljak 21. prosinca 1936. pred bilježnikom dr. Leitnerom.',
      'Ugovor prestaje važiti ako bilo koja strana umre prije potpisa. Tada nijedna strana ništa ne duguje.'];
    return '<article class="doc doc-contract"><h3 class="ct-title">Ugovor</h3><p class="ct-sub">između tvrtke Delorme &amp; Cie SA, La Chaux-de-Fonds, i baruna Friedricha von Aschaua, Innsbruck</p>' +
      '<p class="ct-draft">Nacrt · nije potpisano</p><ol class="ct-list">' + cl.map(function (c) { return '<li>' + c + '</li>'; }).join('') + '</ol>' +
      '<div class="ct-init"><p>Parafirano u Parizu, 17. prosinca 1936.</p><div><span class="sig">C.&nbsp;D.</span><span class="sig sig-fwd">F.&nbsp;v.&nbsp;A.</span></div></div></article>';
  };

  D.B4 = function () {
    return '<article class="doc doc-typed">' + C.typed('B4', { name: 'Me PAUL-HENRI JAQUET', sub: 'NOTAIRE · LA CHAUX-DE-FONDS', size: 24 }, [
      '                     La Chaux-de-Fonds, 10. prosinca 1936.', 'Gospodinu Casimiru Delormeu, osobno', '', 'Poštovani gospodine,', '',
      'prema Vašim uputama pripremio sam Vašu novu oporuku za',
      'potpis u Beču u ponedjeljak 21. prosinca, pred mojim',
      'kolegom dr. Leitnerom, koji će biti svjedok.', '',
      'Vaša sadašnja oporuka od 4. svibnja 1932. ostavlja Vašu',
      'imovinu u dvije jednake polovine gospođi Margit Delorme',
      'i gospodinu Raoulu Delormeu. Vrijedi dok ne potpišete.', '',
      'Prema novoj oporuci:',
      '  1. gospođa Delorme dobiva kuću u Montreuxu i doživotnu',
      '     rentu od 30 000 franaka;',
      '  2. gospodin Raoul Delorme dobiva trećinu Vaših dionica',
      '     tvrtke Delorme & Cie;',
      '  3. gospođica Klara Imhof, koju priznajete za svoju',
      '     kćer, dobiva trećinu Vaših dionica;',
      '  4. posljednja trećina ide u zakladu za mirovinski',
      '     fond radnika tvrtke Delorme & Cie.', '',
      'Dopustite da Vas podsjetim da se točka 3. nakon potpisa',
      'ne može opozvati, a da do potpisa nema nikakvu snagu.', '',
      'Vaš odani', '', '                                          P.-H. Jaquet'], 'Pismo javnog bilježnika otipkano na stroju') + '</article>';
  };

  D.B5 = function () {
    return '<article class="doc doc-hand"><p class="hd-head">Delorme &amp; Cie · u Alpskom nokturnu, 18. XII. 1936.</p>' +
      C.hand('<p>Upravi, Société Transalpine de Wagons-Lits, Pariz.</p>' +
        '<p>Gospodo, 3. studenoga, u ovom istom vlaku, vaš poslužitelj <u>E. Stoffel</u> bio je pijan na dužnosti i nije ga se moglo probuditi kad sam zvonio. Prešao sam preko toga uz upozorenje. <s>Žao mi je što moram reći</s> Večeras opet zaudara na grappu.</p>' +
        '<p>Moram zatražiti da ga se ukloni s Nokturna. Rekao sam mu to.</p><p>C. Delorme</p>') +
      '<p class="caption">Nacrt na memorandumu tvrtke, presavijen u rokovniku. Nikad poslan.</p></article>';
  };

  D.B6 = function () {
    return '<article class="doc doc-typed">' + C.typed('B6', { name: 'DR. BRANKO ŠIMIĆ', sub: 'ODVJETNIK · ATTORNEY AT LAW · ZAGREB', size: 24 }, [
      '                               Zagreb, 30. studenoga 1936.', 'Delorme & Cie, La Chaux-de-Fonds', 'n/p g. Casimira Delormea', '',
      'Predmet: Barić protiv Delorme & Cie, Trgovački sud, Beč', '', 'Gospodine,', '',
      'obavještavam Vas da je ročište u gore navedenom predmetu',
      'zakazano za utorak 22. prosinca u 10 sati.', '',
      'Moj klijent, gospodin Tomislav Barić, tvrdi da je zapor',
      'koji Vaša tvrtka prodaje kao kalibar Nocturne upravo onaj',
      'koji je on osmislio i izradio u Vašoj radionici 1924. te',
      'da je Vaš patent iz 1925. prijavljen bez njegova znanja.',
      'Na sudu će pokazati izvorni sat u kojem je taj zapor',
      'prvi put radio, kao i svoje radne bilježnice.', '',
      'Klijent me moli da Vam kažem kako prema Vama ne gaji',
      'osobnu mržnju i da je nagodba još moguća: njegovo ime',
      'na patentu i pravedan udio u licencnim naknadama.',
      'Naći ćete ga u svom vlaku 18. prosinca. Primjerak ovih',
      'spisa predat će Vam osobno.', '',
      'S poštovanjem,', '', '                                          Dr. B. Šimić'], 'Pismo Barićeva odvjetnika otipkano na stroju') + '</article>';
  };
})();
