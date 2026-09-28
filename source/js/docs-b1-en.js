/* Nocturne in Ice: envelope B, part 1 (English). */
(function () {
  'use strict';
  var C = window.CASE, Art = window.Art, D = C.docs.en;

  D.B1 = function () {
    var e = function (t, h) { return '<p class="nb-entry"><span class="nb-t">' + t + '</span>' + h + '</p>'; };
    return '<article class="doc doc-notebook"><div class="nb-page"><h4 class="nb-day">Thursday 17 December — Paris</h4>' +
      e('', 'Letter from Morand at the hotel. Read it with card 3 on the train. Morand does not write like that for nothing.') +
      e('', 'Wire Klara: Vienna notary, Monday 11.00.') +
      '<h4 class="nb-day">Friday 18 December</h4>' +
      e('11.50', 'Gare de l’Est. F. as charming as ever.') +
      e('p.m.', 'Morand, with card 3. I don’t understand him. Or I do, and don’t want to.') +
      e('dinner', '7031 on the wrong wrist. The crown digs into the back of his hand and he doesn’t even notice. He winds it like a stranger. I built that watch. I know who it was built for.') +
      e('Zurich', 'Wired Casutt and Morand. Answer at S. Oswin.') +
      e('21.15', 'Told F. he would have my answer at S. Oswin. He smiled. I did not like the smile.') +
      e('', 'R. again. No. Not tonight of all nights.') +
      e('22.00', 'M. says goodnight through the door. Powder. Bed. If Casutt says what I think he will say, Vienna is off, and God help us all.') +
      '</div><p class="caption">A small black pocket diary from the dispatch case. The last two written pages.</p></article>';
  };

  D.B2 = function () {
    return '<article class="doc doc-ledger"><header class="lg-head"><p>Delorme &amp; Cie · La Chaux-de-Fonds</p><h3>Register of grand complications</h3><p class="lg-no">No. 7031</p></header>' +
      C.kv([['Ordered', '12 March 1931, by letter from Buenos Aires'], ['Client', 'Baron Friedrich von Aschau, Estancia Santa Inés, Buenos Aires'],
        ['Watch', 'Wristwatch in 18-carat gold with minute repeater: when the slide is pushed it strikes the hours, the quarters and the minutes. Calibre Nocturne II.'],
        ['Client’s instruction', '<span class="hand-inline">“I am left-handed and wear my watch on my right wrist. Kindly put the winder on the other side, where it will not dig into the back of my hand.”</span>'],
        ['Signed', '<span class="sig sig-back">F. v. Aschau</span>'],
        ['Work done', 'Crown and repeater slide placed at nine o’clock. Case back engraved <i>F. v. A. · Semper paratus</i>.'],
        ['Delivered', 'By registered post to Buenos Aires, 3 October 1931. The client has not been seen in person. Price 9,400 francs.'],
        ['Service', 'September 1934, received through J. Morand, Innsbruck: crystal broken, case dented, balance staff broken, “damaged in a fall on the Grauhorn”. Repaired and returned to Morand on 30 November 1934.']], 'kv-ledger') +
      '<div class="lg-sketch">' + Art.watch7031({ aria: 'Sketch of watch 7031 with the crown at nine o’clock', crown: 'crown at IX', wrist: 'for the right wrist' }) + '</div>' +
      '<p class="lg-pencil hand">right wrist — C.D.</p>' +
      '<p class="caption">Copy of the register page, sent to Mr Delorme in Paris by the Geneva office on 15 December.</p></article>';
  };

  D.B3 = function () {
    var cl = [
      'Baron Friedrich von Aschau buys 40% of the shares of Delorme & Cie SA for two million Swiss francs, payable on signature.',
      'The Baron joins the board as vice-chairman.',
      'Mr Casimir Delorme remains chairman and keeps the casting vote.',
      'Mr Raoul Delorme remains sales director, reporting to the vice-chairman.',
      'The Nocturne calibre and all its patents remain the property of the company.',
      'Neither party may sell shares to a third party for five years without the other’s consent.',
      'This agreement is governed by Swiss law.',
      'It will be signed in Vienna on Monday 21 December 1936, before Dr Leitner, notary.',
      'This agreement lapses if either party dies before it is signed. Nothing is then owed by either side.'];
    return '<article class="doc doc-contract"><h3 class="ct-title">Agreement</h3><p class="ct-sub">between Delorme &amp; Cie SA, La Chaux-de-Fonds, and Baron Friedrich von Aschau, Innsbruck</p>' +
      '<p class="ct-draft">Draft · not signed</p><ol class="ct-list">' + cl.map(function (c) { return '<li>' + c + '</li>'; }).join('') + '</ol>' +
      '<div class="ct-init"><p>Initialled in Paris, 17 December 1936</p><div><span class="sig">C.&nbsp;D.</span><span class="sig sig-fwd">F.&nbsp;v.&nbsp;A.</span></div></div></article>';
  };

  D.B4 = function () {
    return '<article class="doc doc-typed">' + C.typed('B4', { name: 'Me PAUL-HENRI JAQUET', sub: 'NOTAIRE · LA CHAUX-DE-FONDS', size: 24 }, [
      '                        La Chaux-de-Fonds, 10 December 1936', 'Monsieur Casimir Delorme, by hand', '', 'Dear Sir,', '',
      'As you instructed, I have prepared your new will for',
      'signature in Vienna on Monday 21 December, before my',
      'colleague Dr Leitner, who will act as witness.', '',
      'Your present will, of 4 May 1932, leaves your estate in',
      'two equal halves to Madame Margit Delorme and to Monsieur',
      'Raoul Delorme. It remains in force until you sign.', '',
      'Under the new will:',
      '  1. Madame Delorme receives the house at Montreux and a',
      '     life annuity of 30,000 francs;',
      '  2. Monsieur Raoul Delorme receives one third of your',
      '     shares in Delorme & Cie;',
      '  3. Mademoiselle Klara Imhof, whom you acknowledge as',
      '     your daughter, receives one third of your shares;',
      '  4. The last third is held in trust for the pension',
      '     fund of the workers of Delorme & Cie.', '',
      'May I remind you that point 3 cannot be undone once it',
      'is signed, and that until it is signed it has no force.', '',
      'Your devoted servant,', '', '                                          P.-H. Jaquet'], 'Typewritten letter from the notary') + '</article>';
  };

  D.B5 = function () {
    return '<article class="doc doc-hand"><p class="hd-head">Delorme &amp; Cie · on board the Alpine Nocturne, 18.xii.36</p>' +
      C.hand('<p>To the Management, Société Transalpine de Wagons-Lits, Paris.</p>' +
        '<p>Gentlemen, on 3 November, on this same train, your attendant <u>E. Stoffel</u> was drunk on duty and could not be woken when I rang. I let it pass with a warning. <s>I am sorry to say</s> Tonight he smells of grappa again.</p>' +
        '<p>I must ask that he be removed from the Nocturne. I have told him so.</p><p>C. Delorme</p>') +
      '<p class="caption">A draft on the firm’s notepaper, folded in the diary. Never sent.</p></article>';
  };

  D.B6 = function () {
    return '<article class="doc doc-typed">' + C.typed('B6', { name: 'DR BRANKO ŠIMIĆ', sub: 'ODVJETNIK · ATTORNEY AT LAW · ZAGREB', size: 24 }, [
      '                                  Zagreb, 30 November 1936', 'Delorme & Cie, La Chaux-de-Fonds', 'For the attention of M. Casimir Delorme', '',
      'Re: Barić v. Delorme & Cie, Commercial Court, Vienna', '', 'Sir,', '',
      'I write to give you notice that the hearing in the above',
      'matter is fixed for Tuesday 22 December at 10 a.m.', '',
      'My client, Mr Tomislav Barić, maintains that the',
      'escapement your firm sells as the Nocturne calibre is',
      'the one he designed and built in your workshop in 1924,',
      'and that your patent of 1925 was filed without his',
      'knowledge. He will produce in court the original clock',
      'in which that escapement first ran, and his workbooks.', '',
      'My client asks me to say that he bears you no personal',
      'ill will, and that a settlement is still possible: his',
      'name on the patent, and a fair share of the royalties.',
      'You will find him on your train on the 18th. He will',
      'hand you a copy of these papers himself.', '',
      'Yours faithfully,', '', '                                          Dr B. Šimić'], 'Typewritten letter from Barić’s lawyer') + '</article>';
  };
})();
