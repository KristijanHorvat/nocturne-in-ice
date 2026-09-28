/* Nocturne in Ice: envelope A, part 2 (English). */
(function () {
  'use strict';
  var C = window.CASE, D = C.docs.en;
  var q = function (t) { return '<p>“' + t + '”</p>'; };

  D.A7 = function () {
    var ids = ['baron', 'margit', 'raoul', 'baric', 'stoffel', 'pryor', 'klara'];
    return '<article class="doc doc-interviews">' + C.head() + '<h3 class="rep-title">First interviews, 01:00 to 02:45</h3>' +
      '<p class="rep-intro">Taken in the dining car, one at a time. Their own words, as near as I could write them. — A.&nbsp;T.</p>' + C.jump('A7', ids) +
      C.stmt('A7', 'baron', q('I’ve known Casimir since September; we were to sign in Vienna on Monday. I dined with him, his wife and his son at the first sitting. Casimir was quiet, odd even. He left before the dessert to send a wire at Zurich. Business, I suppose.') +
        q('At about a quarter past nine I stopped at his compartment to say goodnight. He said he wanted one more day to think about the agreement and that I would have his answer at Sankt Oswin. Old men get cold feet. I wasn’t worried.') +
        q('Then I wrote letters in my compartment until about ten. At a quarter past ten I went along to the salon car and sat with Madame Duclos, a delightful old lady. We talked about the Andes. I left her at a quarter to eleven and went to bed. I heard nothing until the attendant started shouting at midnight, and after that I stayed in my compartment.') +
        q('Sankt Oswin? I was carried through it on a stretcher in 1934. I remember nothing of the place and hoped never to see it again. The avalanche has a cruel sense of humour.') +
        C.note('Hands unsteady; he says it is the cold. Wears a gold Delorme wristwatch, which he tells me Casimir made for him in 1931.')) +
      C.stmt('A7', 'margit', q('I had one of my migraines. After dinner I went to my compartment. At about ten I knocked on the communicating door and said goodnight to Casimir. He was reading in bed and said he’d taken his powder. Then I lay down in the dark, fell asleep and heard nothing at all until the attendant woke me at midnight.') +
        q('Casimir never bolted his side of that door. He liked to think I might come in. I never bolted mine either.') +
        q('My pistol? It’s in my dressing case. The whole corridor saw it at Basel, when the customs officer made his little scene. I carry it because I so often travel alone.') +
        q('Was I happy? I was married to a clock, Inspector. He was kind and he was punctual, and he was never once late for anything in his life.')) +
      C.stmt('A7', 'raoul', q('Yes, I went to see my father after dinner, at about half past nine, and yes, we shouted. I expect the whole car heard. He was selling forty per cent of the firm to a man he’d known for three months and making him a director over my head.') +
        q('I said, “You’d let a stranger into the firm before your own son?” And he said the oddest thing. He laughed and said, “A stranger? You have no idea how right you are.” Then he told me to get out.') +
        q('I went back to my compartment in car 1 at about five to ten and stayed there. I read, I slept, I saw nobody. I didn’t kill my father. I don’t need his money that badly.') +
        C.note('Smelled of cognac. Answered every question before I had finished asking it.')) +
      C.stmt('A7', 'baric', q('I will not pretend I liked him. In 1924 I built an escapement that runs ten years without oil. Delorme patented it in his own name, and he has sold a hundred thousand “Nocturne” watches with my heart inside them. On Tuesday my case is heard in Vienna.') +
        q('At dinner I lost my temper. I told him that before this night was over he would answer for what he stole. I meant the court papers: my lawyer asked me to put a copy in his hands before the hearing.') +
        q('At a quarter past ten I went to the luggage van to see to my clock, the prototype, in crate 14. It is the proof of my case, and the van is cold. When I came back I knocked on his door to give him the papers. No answer. I went to bed.') +
        q('You are looking at my hands, Inspector. Yes, with the tools in my bag I could open most locks on this train. I did not open his.') +
        C.note('A roll of fine watchmaker’s picks and drivers in his bag.')) +
      C.stmt('A7', 'stoffel', q('At five past ten Monsieur Delorme rang. I brought him his Vichy water and his sleeping powder, as every night. He asked me to wake him at Sankt Oswin: “a letter will be waiting for me there.” As I went out I heard him put the chain on behind me.') +
        q('Then I sat at my post at the end of the corridor until midnight. I never left it. Nobody went into number 5 or number 6. At about twenty to eleven the Croatian gentleman knocked at number 5, got no answer and went back to his compartment.') +
        q('At four minutes past midnight I knocked to wake him. The chain was on. I fetched Madame from number 6 and we went in through the communicating door. I’ll not forget it.') +
        q('Did he say anything else tonight? He said, “I have written to your company, Stoffel.” About November. He was a hard man about drink.')) +
      C.stmt('A7', 'pryor', q('I’d never met the man before tonight. I dined at the first sitting, at a table of my own, and read in my compartment afterwards.') +
        q('At a quarter past nine I passed his door and heard him say to someone, “You’ll have my answer at Sankt Oswin, not before.”') +
        q('At about a quarter past ten I went to the salon car for a gin fizz and to write. I stayed at the bar until just after we came out of the long tunnel, then walked back to bed. As I came into car 2 the Croatian gentleman was knocking at number 5 and nobody answered. That was about twenty to eleven. I remember that the attendant’s seat at the far end of the car was empty; I wanted a hot-water bottle and there was no one to ask.') +
        q('Why am I on this train? I’m writing about the Alps in winter.') +
        C.note('Her notebook is in shorthand. She would not let me read it.')) +
      C.stmt('A7', 'klara', q('I have been Monsieur Delorme’s secretary for six years. After dinner, at a quarter to ten, I took my portfolio to the writing desk in the salon car and wrote up his letters until nearly eleven. Then I went to bed.') +
        q('He was not himself after dinner. At Zurich he got down to send two telegrams himself; he never does that, he always sends me. When he came back he asked whether I remembered the baron’s watch being ordered in 1931. I didn’t. I was in the Geneva office then.') +
        q('The dispatch case? He resets the combination at the start of every journey. He sets it to the minute the train crosses into Switzerland, and by Swiss time, always. “A Swiss watchmaker keeps Swiss time,” he used to say. I never knew the numbers. It amused him that I didn’t.') +
        C.note('Wept throughout.')) + '</article>';
  };

  D.A8 = function () {
    return '<article class="doc doc-interviews">' + C.head() + '<h3 class="rep-title">Witness statements</h3>' +
      C.stmt('A8', 'duclos', q('I am eighty-one, Inspector, and I sleep badly on trains, so I sit up in the salon car. I went there after the second sitting and had my first tisane at about twenty past nine.') +
        q('The baron came and sat with me at a quarter past ten. I know because he asked me the time and I looked at my watch; it is my Albert’s watch, and I keep it open on the table in front of me. The moment he sat down he ordered me a fresh camomile and a cognac for himself, and he told me about the mountains of the Argentine. Such a gentleman. At a quarter to eleven he asked me the time again, kissed my hand and went to bed. He never left my table in all that time.') +
        q('My daughter writes that I must take my drops at seven o’clock, and I took them just as we pulled out of Basel, at eight minutes to seven. The customs men had been very rude to that poor Hungarian lady.') +
        q('After the baron left I dozed in my chair until the train stopped and everyone began to run about.')) +
      C.stmt('A8', 'vautier', q('First sitting, 19:55. At the Delorme table: Monsieur and Madame Delorme, Monsieur Raoul and the baron. Monsieur Delorme hardly ate. He kept looking at the baron’s wrist, the way a jeweller looks at a stone. Once he asked him, “Does it still strike the quarters for you?” The baron laughed and said he never bothered with the thing.') +
        q('The English lady at table 3 left at five past eight, before her main course came.') +
        q('At about half past eight the gentleman at table 7, Monsieur Barić, stood up and shouted at Monsieur Delorme: “Before this night is over, you will answer for what you stole!” I asked him to sit down, and he did.') +
        q('At twenty to nine Monsieur Delorme got up before his dessert and said he had to send a wire at Zurich. The dining car closed at ten, as it always does.')) + '</article>';
  };

  D.A9 = function () {
    return '<article class="doc doc-typed">' + C.typed('A9', { name: 'J. MORAND', sub: 'HORLOGERIE · RHABILLAGES · INNSBRUCK, TIROL', mark: 'edelweiss' }, [
      '                              Innsbruck, 14 December 1936', '', 'Monsieur C. Delorme', 'Delorme & Cie, La Chaux-de-Fonds', '',
      'Dear Monsieur Delorme,', '',
      'Thank you for your letter of the 2nd. I regret that [the]',
      'cold has kept me from the bench, but your chronometer',
      'will be ready before Christmas. The en[grave]r promises the',
      'case back by Friday, and I shall send it on to you [at]',
      'once. Your instructions for the balance I have followed', 'to the letter.', '',
      'As to the other matter: I went over the pass by way of',
      '[Sankt] Anton, as you asked, and called on my cousin',
      '[Oswin], who still keeps the old ledgers of the valley. He',
      '[holds] that nothing up there is quite what it seems. [A]',
      'curious business, and I will say no more of it on paper.',
      'The undertaker of 1934 is an old man now, but he',
      'remembers everything. You will understand when we meet.', '',
      'Finally, the repeater you sent me has a winding stem cut',
      'for a [left]-hand thread, which is why it would not take.',
      'I have [handed] it to my apprentice to re-cut. The best',
      '[man] for such work is away in Geneva until January.', '',
      'With my respectful greetings,', '', '                                             J. Morand'], 'Typewritten letter from J. Morand') +
      '<p class="caption">Typewritten on one sheet. Found folded in the inside pocket of Mr Delorme’s jacket.</p></article>';
  };

  D.A10 = function () {
    return '<article class="doc doc-form"><header class="form-head"><p class="form-org">Swiss Federal Customs · Basel SBB</p><p class="form-no">No. 4471</p></header>' +
      '<h3 class="form-title">Declaration of firearms carried by a traveller</h3>' +
      C.kv([['Date and time', '18 December 1936, 19:41'], ['Train', 'The Alpine Nocturne, sleeping car 2'],
        ['Traveller', 'Mrs Margit Delorme, compartment 6'], ['Weapon', 'Automatic pistol, FN Herstal, calibre 6.35 mm, “Baby” model'],
        ['Serial number', '<span class="mono">81 604</span>'], ['Ammunition', 'Six cartridges in the magazine'], ['Permit', 'Hungarian firearms permit no. 2207/1934, in order'],
        ['Decision', 'Returned to the owner']]) +
      '<p class="form-remarks"><b>Remarks.</b> The lady objected loudly to the inspection, which was carried out in the corridor in view of several passengers (car 2, nos. 2, 4, 7 and 9). The pistol was put back in her dressing case in their sight.</p>' +
      '<p class="form-sig">Customs officer <span class="sigline hand-sig">Gisler</span></p></article>';
  };
})();
