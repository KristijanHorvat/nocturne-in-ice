# -*- coding: utf-8 -*-
"""SPOILERI. Savjeti, odgovori na brave, ocjene i rješenje, na hrvatskom."""

HR = {
    "replies": {
        "B_near": "Kopča se ne miče. Ali bilo je blizu. Po čijem je satu ta minuta?",
        "C_ok": "Tscharner: „Ljevak u grobu u Sankt Oswinu… a mi sjedimo baš u Sankt Oswinu, sa zatrpanom prugom. "
                "Odmah pretražujem sve kupee. Poslat ću vam što pronađemo, liječnički nalaz i fotografove ploče.“",
        "D_ok": "Tscharner: „Nije ni pokušao nijekati. Sad ponovno razgovaram sa svih sedmero, a šef postaje vratio se s lavine "
                "i nešto nam je donio.“",
    },
    "hints": {
        "B": [
            "Klara Imhof zna pravilo za kombinaciju, iako nikad nije znala brojeve. Pročitajte njezino prvo saslušanje.",
            "Vozni red navodi minutu u kojoj Nokturno prelazi granicu. Pogledajte mali broj uz to vrijeme i pročitajte bilješku "
            "ispod tablice: po čijem je satu to vrijeme?",
            "Granica se prelazi u 18.27 po francuskom vremenu. Delorme se uvijek držao švicarskog vremena, koje je sat ispred.",
        ],
        "C": [
            "Delormeov rokovnik kaže koje pismo treba čitati s karticom br. 3. Koji je to dokument u omotnici A?",
            "Položite karticu preko Morandova pisma. Na ekranu odaberite pismo ispod kartice i vucite karticu dok ne sjedne na "
            "mjesto. Na papiru izrežite karticu i njezine prozorčiće i položite je na pismo, rub na rub. Čitajte riječi u "
            "prozorčićima redom, redak po redak.",
            "Poruka počinje s U GROBU U… Čitajte dalje i recite inspektoru cijelu rečenicu.",
        ],
        "D": [
            "Najprije sastavite poderanu poruku. Komadići pristaju samo na jedan način.",
            "Poruka navodi vagon i vrata, a potpisana je jednim inicijalom. Plan vlaka (A6) pokazuje tko je spavao iza tih vrata.",
            "Vagon 1, vrata 3 kupe je R. Delormea. Usporedite potpis na poleđini čeka u B8.",
        ],
        "F": [
            "Utvrdite kada je umro. Gdje je pronađen pištolj? Što vam govori čađa u kupeu 6? I zašto se nitko nije javio kad je "
            "Barić pokucao u 22:40?",
            "Za minute dok je vlak bio u tunelu Grauhorn, od 22:24 do 22:35, provjerite gdje je bio svaki osumnjičeni pomoću "
            "drugog, neovisnog dokumenta: dnevnika, računa, fotografija, ostalog osoblja. Jedan alibi počiva isključivo na satu "
            "jedne stare gospođe.",
            "Pažljivo pogledajte sat gospođe Duclos na ploči 12 i usporedite ga sa satom u salonu. Zatim njezino „osam minuta do "
            "sedam“ u Baselu usporedite s voznim redom i pronađite račun za konjak za koji kaže da je naručen čim je njezin "
            "sugovornik sjeo.",
        ],
    },
    "answers": {
        "B": "Minuta granice je 18.27 po francuskom vremenu, to jest 19.27 po švicarskim satovima. Kombinacija je <strong>1927</strong>.",
        "C": "U prozorčićima piše: <strong>U GROBU U SANKT OSWINU LEŽI LJEVAK</strong>. To recite inspektoru.",
        "D": "Napisao ju je <strong>Raoul Delorme</strong>. Vagon 1, kupe 3 njegov je, a R odgovara njegovu potpisu na poleđini čeka.",
    },
    "ratings": {
        "perfect": ["Majstori voznog reda", "Pet od pet, i gotovo bez savjeta. Svaka minuta one noći objašnjena. Inspektor "
                    "Tscharner želi vas u svakom vlaku koji bude morao istraživati."],
        "excellent": ["Detektivi prvog razreda", "Pet od pet. Tu i tamo trebao vam je mali poticaj, ali cijelu ste noć pročitali "
                      "točno, sve do sata koji se nikad nije dogodio."],
        "good": ["Detektivi oštra oka", "Imenovali ste ubojicu i većinu toga kako je to učinio. Jedan vam je detalj promaknuo, "
                 "ali slučaj stoji."],
        "who": ["Uhvatili ste ga, ali za dlaku", "Imenovali ste pravog čovjeka, ali njegov će se odvjetnik dobro zabaviti "
                "detaljima. Pročitajte što se stvarno dogodilo da vidite što vam je promaknulo."],
        "wrong": ["Krivi putnik", "Čovjek koji se naziva barunom von Aschauom silazi u Innsbrucku i više ga nitko ne vidi, dok "
                  "netko drugi odgovara za njegov zločin. Pročitajte što se stvarno dogodilo pa pokušajte ponovno neke zimske noći."],
    },
    "chapters": [
        {"title": "Čovjek koji je sišao s planine", "html":
            "<p>Kaspar Gredig rodio se u Sankt Oswinu 1900. i s dvadeset i dvije godine već je vodio klijente na Grauhorn. Bio je "
            "izvrstan vodič i siromah. U ljeto 1934. unajmio ga je najbogatiji klijent kojeg je ikad imao: barun Friedrich von "
            "Aschau, donedavno iz Buenos Airesa, koji se vratio austrijskom imanju i bogatstvu, a u Europi nije poznavao gotovo "
            "nikoga.</p>"
            "<p>Dvojica muškaraca bila su iste visine i gotovo iste dobi. U sjevernoj stijeni, 19. kolovoza, odlomila se snježna "
            "streha i pali su zajedno. Kad se Kaspar osvijestio na ledenjaku, barun je ležao mrtav pokraj njega, uništena lica.</p>"
            "<p>Nitko nikad neće saznati koliko je dugo Kaspar ondje sjedio prije nego što im je zamijenio papire u džepovima. I "
            "sam je bio ozlijeđen, u lice i lijevu šaku, a kad su stigli spasioci, rekao im je da je on barun. Vršak prsta koji je "
            "1929. izgubio zbog ozeblina postao je ozljeda od pada. Četiri mjeseca u bolnici, zavijeno lice i nova putovnica "
            "učinili su ostalo, a župnik Casutt pokopao je baruna pod Kasparovim imenom.</p>"
            "<p>Dvije je godine „barun“ živio oprezno: Beč, Innsbruck, nikad Oswinska dolina. Vježbao je španjolski iz gramatike. "
            "Nosio je barunov zlatni sat, br. 7031, jer bi ga barun nosio. Nije znao da je izrađen za ljevaka.</p>"},
        {"title": "Sat br. 7031", "html":
            "<p>U rujnu 1936. barun je Casimiru Delormeu ponudio dva milijuna franaka za 40 % njegove tvrtke. Delorme je po naravi "
            "bio oprezan pa je barunovu prošlost dao provjeriti J. Morandu iz Innsbrucka, uraru koji je za njega obavljao diskretne "
            "provjere. Morand je našao da su imanja u redu, i jednu stvar koja mu se nije svidjela: pogrebnik koji je 1934. "
            "pripremio vodičevo tijelo sjećao se pisarskog žulja na lijevoj ruci, a Kaspar Gredig, kako su svi znali, jedva se "
            "znao potpisati. Morand je to napisao jedinim načinom kojem je vjerovao, u pismu koje se čita kroz karticu br. 3: "
            "<i>u grobu u Sankt Oswinu leži ljevak.</i></p>"
            "<p>Delorme ga je pročitao 18. poslijepodne i nije ga želio razumjeti. A onda je za večerom ugledao sat 7031 na "
            "barunovu <i>lijevom</i> zglobu, krunicu koju je sam postavio na devet sati kako se zabada čovjeku u nadlanicu. Taj je "
            "sat napravio za ljevaka koji ga nosi na desnoj ruci. Pitao je otkucava li još četvrti; barun nije znao kako se to "
            "radi.</p>"
            "<p>U Zürichu je Delorme brzojavio župniku u Sankt Oswinu (je li Gredig bio ljevak ili dešnjak?) i Morandu te zatražio "
            "odgovore na postaji Sankt Oswin. U 21:15 rekao je barunu da će ondje dobiti odgovor. Pola sata kasnije sinu se "
            "izlanuo više nego što je htio: „Stranca? Nemaš pojma koliko si u pravu.“</p>"
            "<p>Barun je shvatio. U ponoć će vlak stati u Sankt Oswinu, a ono što ondje čeka bit će njegov kraj.</p>"},
    ],
}
