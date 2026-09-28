/* Nocturne in Ice: the case. Envelopes, suspects, evidence index and the accusation form, in English and Croatian. */
window.CASE = (function () {
  'use strict';
  var C = { lang: 'en', docs: { en: {}, hr: {} } };
  C.L = function (o) { return o == null ? '' : typeof o === 'string' ? o : (o[C.lang] != null ? o[C.lang] : o.en); };
  C.T = function (k) { var t = window.I18N[C.lang] || window.I18N.en; return t[k] != null ? t[k] : window.I18N.en[k]; };

  C.envelopes = [
    { id: 'A', title: { en: 'The night of the Nocturne', hr: 'Noć Nokturna' }, line: { en: 'Inspector Tscharner’s first file.', hr: 'Prvi spis inspektora Tscharnera.' } },
    { id: 'B', title: { en: 'The dispatch case', hr: 'Aktovka' }, line: { en: 'What Casimir Delorme kept under lock and key.', hr: 'Ono što je Casimir Delorme čuvao pod ključem.' }, lock: 'case' },
    { id: 'C', title: { en: 'The search of the train', hr: 'Pretraga vlaka' }, line: { en: 'Compartments, plates, chits and logs.', hr: 'Kupei, ploče, računi i dnevnici.' }, lock: 'report' },
    { id: 'D', title: { en: 'Sankt Oswin', hr: 'Sankt Oswin' }, line: { en: 'Second interviews, and what the village knows.', hr: 'Druga saslušanja i ono što selo zna.' }, lock: 'note' }
  ];

  C.suspects = [
    { id: 'baron', name: 'Baron Friedrich von Aschau', short: 'Aschau', age: 37, comp: { en: 'Car 2, no. 9', hr: 'Vagon 2, br. 9' },
      from: { en: 'Austrian, raised in Argentina', hr: 'Austrijanac, odrastao u Argentini' }, role: { en: 'Investor', hr: 'Ulagač' },
      about: { en: 'Born in Buenos Aires in 1899, son of an Austrian landowner; came to Europe in 1933 to take up the family estate near Innsbruck. A keen mountaineer until August 1934, when he survived a fall on the north face of the Grauhorn in which his guide was killed, and spent four months in hospital in Innsbruck. Scar on the left cheek; lost the top of the little finger of his left hand in the fall. Travelling with Mr Delorme to Vienna, where on Monday he was to sign for a 40% share in Delorme & Cie for two million francs.',
        hr: 'Rođen u Buenos Airesu 1899., sin austrijskog zemljoposjednika; došao u Europu 1933. da preuzme obiteljsko imanje kraj Innsbrucka. Strastven alpinist do kolovoza 1934., kad je preživio pad u sjevernoj stijeni Grauhorna u kojem je poginuo njegov vodič; četiri mjeseca proveo je u bolnici u Innsbrucku. Ožiljak na lijevom obrazu; u padu je izgubio vršak malog prsta lijeve ruke. Putuje s gospodinom Delormeom u Beč, gdje je u ponedjeljak trebao potpisati otkup 40 % udjela u tvrtki Delorme & Cie za dva milijuna franaka.' } },
    { id: 'margit', name: 'Margit Delorme', short: 'Margit', age: 34, comp: { en: 'Car 2, no. 6', hr: 'Vagon 2, br. 6' },
      from: { en: 'Hungarian', hr: 'Mađarica' }, role: { en: 'The victim’s wife', hr: 'Žrtvina supruga' },
      about: { en: 'Née Szabó. A figure skater who skated for Hungary at the 1928 Winter Games. Married Casimir Delorme in 1931 as his second wife. Wore a silver-fox wrap tonight. Her compartment connects to her husband’s through a communicating door.',
        hr: 'Rođena Szabó. Umjetnička klizačica koja je nastupila za Mađarsku na Zimskim igrama 1928. Udala se za Casimira Delormea 1931. kao njegova druga žena. Večeras je nosila ogrtač od srebrne lisice. Njezin je kupe s muževljevim spojen vratima između kupea.' } },
    { id: 'raoul', name: 'Raoul Delorme', short: 'Raoul', age: 39, comp: { en: 'Car 1, no. 3', hr: 'Vagon 1, br. 3' },
      from: { en: 'Swiss', hr: 'Švicarac' }, role: { en: 'The victim’s son', hr: 'Žrtvin sin' },
      about: { en: 'Mr Delorme’s son by his first marriage and sales director of Delorme & Cie. Lives in Geneva. A familiar face at the casinos of Évian and Monte Carlo.',
        hr: 'Sin gospodina Delormea iz prvog braka i prodajni direktor tvrtke Delorme & Cie. Živi u Ženevi. Poznato lice u kockarnicama Éviana i Monte Carla.' } },
    { id: 'baric', name: 'Tomislav Barić', short: 'Barić', age: 46, comp: { en: 'Car 2, no. 2', hr: 'Vagon 2, br. 2' },
      from: { en: 'Yugoslav, from Zagreb', hr: 'Jugoslaven, iz Zagreba' }, role: { en: 'Watchmaker', hr: 'Urar' },
      about: { en: 'Worked for Delorme & Cie in La Chaux-de-Fonds from 1919 to 1926, then went home to Zagreb and opened his own workshop. Travelling to Vienna. Has a crate in the luggage van.',
        hr: 'Radio za Delorme & Cie u La Chaux-de-Fondsu od 1919. do 1926., zatim se vratio u Zagreb i otvorio vlastitu radionicu. Putuje u Beč. U prtljažnom vagonu ima sanduk.' } },
    { id: 'stoffel', name: 'Emil Stoffel', short: 'Stoffel', age: 52, comp: { en: 'Attendant, car 2', hr: 'Poslužitelj, vagon 2' },
      from: { en: 'Swiss', hr: 'Švicarac' }, role: { en: 'Sleeping-car attendant', hr: 'Poslužitelj spavaćih kola' },
      about: { en: 'With the Société Transalpine for 24 years, and attendant of car 2 on the Nocturne since 1930. His seat is at the front end of the car. Carries the square key that opens the lock of every compartment in car 2.',
        hr: 'Kod Société Transalpine radi 24 godine, a od 1930. poslužitelj je vagona 2 na Nokturnu. Njegovo je mjesto na prednjem kraju vagona. Nosi četvrtasti ključ koji otvara bravu svakog kupea u vagonu 2.' } },
    { id: 'pryor', name: 'Constance Pryor', short: 'Pryor', age: 32, comp: { en: 'Car 2, no. 4', hr: 'Vagon 2, br. 4' },
      from: { en: 'British', hr: 'Britanka' }, role: { en: 'Journalist', hr: 'Novinarka' },
      about: { en: 'Writes for The Clarion, a London weekly. Travelling alone to Vienna “for a story”. Takes notes in shorthand.',
        hr: 'Piše za The Clarion, londonski tjednik. Putuje sama u Beč „zbog priče“. Bilješke vodi stenografski.' } },
    { id: 'klara', name: 'Klara Imhof', short: 'Klara', age: 28, comp: { en: 'Car 2, no. 7', hr: 'Vagon 2, br. 7' },
      from: { en: 'Swiss, from Bern', hr: 'Švicarka, iz Berna' }, role: { en: 'Private secretary', hr: 'Privatna tajnica' },
      about: { en: 'Mr Delorme’s private secretary for six years. Travels with him everywhere, keeps his diary and his correspondence.',
        hr: 'Privatna tajnica gospodina Delormea šest godina. Putuje s njim posvuda, vodi mu rokovnik i prepisku.' } }
  ];

  C.witnesses = {
    duclos: { name: 'Honorine Duclos', role: { en: 'Passenger, car 2, no. 3', hr: 'Putnica, vagon 2, br. 3' } },
    vautier: { name: 'Henri Vautier', role: { en: 'Steward, dining car', hr: 'Šef vagona-restorana' } },
    tschudi: { name: 'Alois Tschudi', role: { en: 'Guard, luggage van', hr: 'Kondukter prtljažnog vagona' } },
    ferro: { name: 'Giuseppe Ferro', role: { en: 'Chef, dining car', hr: 'Kuhar, vagon-restoran' } },
    rinaldi: { name: 'Paolo Rinaldi', role: { en: 'Barman, salon car', hr: 'Barmen, salonski vagon' } }
  };

  var E = function (id, env, kind, en, hr, ben, bhr) { return { id: id, env: env, kind: kind, title: { en: en, hr: hr }, blurb: { en: ben, hr: bhr } }; };
  C.evidence = [
    E('A1', 'A', 'letter', 'Letter from the inspector', 'Pismo inspektora', 'Your briefing. Read this first.', 'Vaše upute. Pročitajte najprije ovo.'),
    E('A2', 'A', 'report', 'Scene report: compartment 5', 'Zapisnik o očevidu: kupe 5', 'How the body was found.', 'Kako je tijelo pronađeno.'),
    E('A3', 'A', 'photo', 'Police photograph', 'Policijska fotografija', 'Compartment 5 at 01:20. Look closely.', 'Kupe 5 u 01:20. Pogledajte pažljivo.'),
    E('A4', 'A', 'dossier', 'The seven suspects', 'Sedmero osumnjičenih', 'Who they are, and why they are aboard.', 'Tko su i zašto su u vlaku.'),
    E('A5', 'A', 'timetable', 'Timetable and route guide', 'Vozni red i vodič kroz rutu', 'The Nocturne’s printed timetable.', 'Tiskani vozni red Nokturna.'),
    E('A6', 'A', 'plan', 'Plan of the train', 'Plan vlaka', 'Who slept where.', 'Tko je gdje spavao.'),
    E('A7', 'A', 'interview', 'First interviews', 'Prva saslušanja', 'The seven, between 01:00 and 02:45.', 'Sedmero, između 01:00 i 02:45.'),
    E('A8', 'A', 'interview', 'Witness statements', 'Izjave svjedoka', 'Madame Duclos and the dining car steward.', 'Madame Duclos i šef vagona-restorana.'),
    E('A9', 'A', 'typed', 'Letter from J. Morand', 'Pismo J. Moranda', 'Found in the victim’s jacket.', 'Pronađeno u žrtvinu sakou.'),
    E('A10', 'A', 'customs', 'Basel customs slip', 'Carinska potvrda iz Basela', 'A declaration made in the corridor.', 'Prijava obavljena u hodniku.'),
    E('B1', 'B', 'notebook', 'Delorme’s pocket diary', 'Delormeov džepni rokovnik', 'His last two days, in his hand.', 'Njegova posljednja dva dana, njegovim rukopisom.'),
    E('B2', 'B', 'ledger', 'Register entry no. 7031', 'Upis u registar br. 7031', 'The firm’s record of one watch.', 'Zapis tvrtke o jednom satu.'),
    E('B3', 'B', 'contract', 'Draft agreement', 'Nacrt ugovora', 'To be signed in Vienna on Monday.', 'Trebao se potpisati u Beču u ponedjeljak.'),
    E('B4', 'B', 'typed', 'Letter from the notary', 'Pismo javnog bilježnika', 'About the new will.', 'O novoj oporuci.'),
    E('B5', 'B', 'letter', 'Unsent complaint', 'Neposlana pritužba', 'A draft in Delorme’s hand.', 'Nacrt Delormeovim rukopisom.'),
    E('B6', 'B', 'typed', 'Letter from Barić’s lawyer', 'Pismo Barićeva odvjetnika', 'Barić v. Delorme & Cie.', 'Barić protiv Delorme & Cie.'),
    E('B7', 'B', 'card', 'Reading card no. 3', 'Kartica za čitanje br. 3', 'A card full of little windows.', 'Kartica puna malih prozorčića.'),
    E('B8', 'B', 'letter', 'Letter from the bank', 'Pismo banke', 'About a cheque.', 'O jednom čeku.'),
    E('B9', 'B', 'letter', 'Letter from Constance Pryor', 'Pismo Constance Pryor', 'Kept, never answered.', 'Sačuvano, nikad odgovoreno.'),
    E('C1', 'C', 'report', 'Search of the compartments', 'Pretraga kupea', 'What the police found.', 'Što je policija pronašla.'),
    E('C2', 'C', 'medical', 'The doctor’s report', 'Liječnički nalaz', 'Dr Caflisch, village doctor.', 'Dr. Caflisch, seoska liječnica.'),
    E('C3', 'C', 'photo', 'Plate 12: the salon car', 'Ploča 12: salonski vagon', 'Taken by flash, inside the tunnel.', 'Snimljeno uz bljeskalicu, u tunelu.'),
    E('C4', 'C', 'log', 'The photographer’s plate book', 'Fotografova knjiga ploča', 'Otto Kessler’s evening.', 'Večer Otta Kesslera.'),
    E('C5', 'C', 'chits', 'Bar chits, salon car', 'Računi s bara, salonski vagon', 'Every drink, time-stamped.', 'Svako piće, s vremenskim žigom.'),
    E('C6', 'C', 'log', 'Car 1 attendant’s log', 'Dnevnik poslužitelja vagona 1', 'Everyone who passed his seat.', 'Svi koji su prošli pokraj njegova mjesta.'),
    E('C7', 'C', 'clipping', 'Newspaper cutting, 1934', 'Novinski isječak, 1934.', 'Pinned up in the station waiting room.', 'Pribodeno u čekaonici postaje.'),
    E('C8', 'C', 'torn', 'The torn note', 'Poderana poruka', 'From the ashtray in compartment 6.', 'Iz pepeljare u kupeu 6.'),
    E('D1', 'D', 'interview', 'Second interviews', 'Druga saslušanja', 'The seven, confronted.', 'Sedmero, suočeno s dokazima.'),
    E('D2', 'D', 'report', 'The stationmaster’s statement', 'Izjava šefa postaje', 'Sankt Oswin station, 00:14.', 'Postaja Sankt Oswin, 00:14.'),
    E('D3', 'D', 'letter', 'Letter from Father Casutt', 'Pismo župnika Casutta', 'Left at the station for Delorme.', 'Ostavljeno na postaji za Delormea.'),
    E('D4', 'D', 'report', 'Track patrol report', 'Izvještaj ophodnje pruge', 'The Grauhorn Tunnel, 02:30.', 'Tunel Grauhorn, 02:30.'),
    E('D5', 'D', 'interview', 'Train staff statements', 'Izjave osoblja vlaka', 'The guard, the chef and the barman.', 'Kondukter, kuhar i barmen.')
  ];

  var O = function (id, en, hr) { return { id: id, t: { en: en, hr: hr } }; };
  C.accusation = [
    { id: 'who', q: { en: 'Who killed Casimir Delorme?', hr: 'Tko je ubio Casimira Delormea?' }, type: 'suspect' },
    { id: 'how', q: { en: 'How did the killer reach him, and how did he die?', hr: 'Kako je ubojica došao do njega i kako je umro?' }, options: [
      O('key', 'The killer opened the corridor door with the attendant’s square key and shot him in his berth', 'Ubojica je otvorio vrata prema hodniku poslužiteljevim četvrtastim ključem i ustrijelio ga u ležaju'),
      O('picks', 'The killer picked the lock and the chain with watchmaker’s tools, then shot him', 'Ubojica je urarskim alatom otvorio bravu i lanac, a zatim ga ustrijelio'),
      O('cdoor', 'The killer came through the communicating door from Mrs Delorme’s empty compartment and shot him through a pillow with her pistol', 'Ubojica je ušao kroz vrata između kupea iz praznog kupea gospođe Delorme i ustrijelio ga kroz jastuk njezinim pištoljem'),
      O('window', 'The killer fired through the window from outside the carriage', 'Ubojica je pucao kroz prozor izvana, s vanjske strane vagona'),
      O('poison', 'He was poisoned with veronal in his Vichy water, and the shot came afterwards', 'Otrovan je veronalom u vodi Vichy, a hitac je uslijedio poslije')] },
    { id: 'when', q: { en: 'When did Casimir Delorme die?', hr: 'Kada je Casimir Delorme umro?' }, options: [
      O('quarrel', 'Between 21:32 and 21:55, during the quarrel with his son', 'Između 21:32 i 21:55, za svađe sa sinom'),
      O('powder', 'Between 22:05 and 22:10, just after the attendant brought his powder', 'Između 22:05 i 22:10, odmah nakon što mu je poslužitelj donio prašak'),
      O('tunnel', 'Between 22:24 and 22:35, while the train was in the Grauhorn Tunnel', 'Između 22:24 i 22:35, dok je vlak bio u tunelu Grauhorn'),
      O('knock', 'At about 22:40, when Tomislav Barić knocked at his door', 'Oko 22:40, kad je Tomislav Barić pokucao na njegova vrata'),
      O('late', 'Between 23:15 and 23:45', 'Između 23:15 i 23:45'),
      O('station', 'Just before midnight, as the train pulled into Sankt Oswin', 'Malo prije ponoći, dok je vlak ulazio u Sankt Oswin')] },
    { id: 'why', q: { en: 'Why?', hr: 'Zašto?' }, options: [
      O('will', 'To inherit under the old will before the new one was signed', 'Da naslijedi po staroj oporuci prije nego što se potpiše nova'),
      O('cheque', 'To stop the sale of the firm and bury a forged cheque', 'Da spriječi prodaju tvrtke i zataška krivotvoreni ček'),
      O('radium', 'To avenge a sister killed by radium paint', 'Da osveti sestru koju je ubila radijeva boja'),
      O('patent', 'To avenge a stolen invention', 'Da osveti ukradeni izum'),
      O('job', 'To avoid being reported and dismissed', 'Da izbjegne prijavu i otkaz'),
      O('daughter', 'To inherit as his secret daughter', 'Da naslijedi kao njegova tajna kći'),
      O('identity', 'To stop him exposing a stolen identity', 'Da ga spriječi da razotkrije ukradeni identitet')] },
    { id: 'alibi', q: { en: 'How did the killer make it look as if they were somewhere else when Delorme died?', hr: 'Kako je ubojica stvorio privid da je u vrijeme Delormeove smrti bio negdje drugdje?' }, options: [
      O('watch', 'Madame Duclos’s watch still showed French time, an hour behind the train', 'Sat gospođe Duclos još je pokazivao francusko vrijeme, sat manje od vlaka'),
      O('clock', 'The salon car clock had been put back an hour', 'Sat u salonskom vagonu bio je vraćen jedan sat unatrag'),
      O('coat', 'Someone else wore the killer’s coat and was seen in their place', 'Netko drugi nosio je ubojičin kaput i viđen je umjesto njega'),
      O('lovers', 'Two people swore they were together, and one of them was lying', 'Dvoje ljudi zakleli su se da su bili zajedno, a jedno od njih lagalo je'),
      O('photo', 'The photograph was taken before the tunnel, not during it', 'Fotografija je snimljena prije tunela, a ne u njemu')] }
  ];

  C.esc = function (t) {
    return String(t == null ? '' : t).replace(/[&<>"']/g, function (m) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]; });
  };
  C.suspect = function (id) { return C.suspects.filter(function (s) { return s.id === id; })[0]; };
  C.ev = function (id) { return C.evidence.filter(function (e) { return e.id === id; })[0]; };
  C.render = function (id, ctx) {
    var fn = C.docs[C.lang][id] || C.docs.en[id];
    return fn ? fn(ctx || { names: ['', ''] }) : '';
  };
  return C;
})();
