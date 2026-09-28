/* Nocturne in Ice: envelope D (English). */
(function () {
  'use strict';
  var C = window.CASE, D = C.docs.en;
  var q = function (t) { return '<p>“' + t + '”</p>'; };

  D.D1 = function () {
    var ids = ['margit', 'raoul', 'stoffel', 'baric', 'pryor', 'klara', 'baron'];
    return '<article class="doc doc-interviews">' + C.head() + '<h3 class="rep-title">Second interviews, 04:30 to 06:00</h3>' +
      '<p class="rep-intro">This time I put the evidence in front of each of them first. — A.&nbsp;T.</p>' + C.jump('D1', ids) +
      C.stmt('D1', 'margit', q('Very well. I wasn’t in my compartment. At five past ten I went to Raoul’s, in car 1, number 3, and I stayed until just before eleven. The note was from him. I began to burn it and lost my nerve, and tore it up instead.') +
        q('When I came back my window was wide open, the compartment was like ice and there was soot everywhere, on the sill, on my pillow. I thought Stoffel had aired it and forgotten it. I shut it and got into bed. I didn’t look in on Casimir. God forgive me, I was glad of the closed door.') +
        q('The pistol? I haven’t touched it since Basel. I never lock the dressing case. Anyone who stood in that corridor saw exactly where it went.')) +
      C.stmt('D1', 'raoul', q('The note is mine. We’ve been… since the summer. My father didn’t know. Or perhaps he did; he knew most things.') +
        q('After the row I went back to my compartment at five to ten and I never left it again until the conductor came through at midnight. Margit came at about five past ten and went back at about ten to eleven. Ask your attendant in car 1; he sits there all night with his little book.')) +
      C.stmt('D1', 'stoffel', q('I lied to you, Inspector, and I’m sorry for it. I left my post at ten past ten and went to the dining car pantry for ice, and Giuseppe poured me a grappa for the tunnel, as he always does. The photographer took our picture. I was back at my seat at a quarter to eleven.') +
        q('I didn’t see the Croatian gentleman knock. The English lady told me about it afterwards. I said I’d seen it because Monsieur Delorme had already written to the Company about me, and I’d have lost my place.')) +
      C.stmt('D1', 'baric', q('Ask the guard. He never left my side in the van; they don’t trust passengers with the luggage. I came back just after the tunnel and knocked to give Delorme his papers. There was no answer, and I thought the old man was ignoring me, as he always had.') +
        q('Now you tell me he was already dead when I knocked. I have wished him dead for ten years, Inspector. It is a strange thing to find that I am sorry.')) +
      C.stmt('D1', 'pryor', q('All right: I wrote to him, three times. And I searched his compartment during dinner, from about five past eight until half past, looking for the workshop’s medical records. I found his pyjamas and a dispatch case I couldn’t open. I must have lost a hairpin under the berth.') +
        q('But at half past ten I was on a stool at the bar with my second gin fizz, and when the photographer’s flash went off I nearly dropped it. You have the picture.')) +
      C.stmt('D1', 'klara', q('He told me in November. He was my father, and he was going to say so, in Vienna, in front of a notary, on Monday. After twenty-eight years.') +
        q('Do you think I would kill him three days before he gave me his name? Now I am nobody again. The old will doesn’t know I exist.') +
        q('I was at the writing desk the whole evening, with my back to the room. The photographer made me jump.')) +
      C.stmt('D1', 'baron', q('I have told you. From a quarter past ten until a quarter to eleven I sat with Madame Duclos. Ask her.') +
        q('Your photograph shows her alone at half past ten? Then I was in the washroom. What a question to ask a man.') +
        q('I did not leave the train at Sankt Oswin. My coat is wet because I stood on the step for a breath of air. I don’t know any stationmaster.') +
        q('The watch? I have always worn it on the left. Casimir fussed about that crown for years.') +
        C.note('I asked him to make the repeater strike the quarters for me. He turned the crown back and forth for some time before he found the slide. The chief conductor, who is from Ticino and speaks Spanish, tried him in it; he says the baron’s Spanish is “the Spanish of a schoolbook”.')) + '</article>';
  };

  D.D2 = function () {
    return '<article class="doc doc-report">' + C.head() + '<h3 class="rep-title">Statement of Men Cadonau, stationmaster, Sankt Oswin</h3>' + '<p class="rep-intro">Taken at 04:20, when he came back from the avalanche.</p>' +
      q('At half past eleven Father Casutt came down from the church through the snow with a letter. “For Herr Delorme on the Nocturne,” he said. “Give it to him and nobody else.” I put it in my drawer.') +
      q('At a quarter past midnight, when the train had been standing a quarter of an hour, a gentleman came into my office from the train. Tall, fur collar, a scar on the left cheek. He asked if there was a letter or a telegram for Herr Delorme. He asked in our own valley German. You don’t hear that outside the Oswin valley; I took him for one of our families gone to the city.') +
      q('I said Father Casutt had left a letter, but that I could give it to Herr Delorme and nobody else. He said Herr Delorme was asleep and didn’t wish to be woken, and he’d take it to him. I said no. He looked at me a long moment and went back to the train.') +
      q('At twenty past twelve I locked the office and went out on the line with the avalanche crew. When I heard Herr Delorme was dead, I kept the letter for you. Here it is. I have not opened it.') + '</article>';
  };

  D.D3 = function () {
    return '<article class="doc doc-hand"><p class="hd-head">Pfarramt Sankt Oswin · 18 December 1936, 23:20</p>' +
      C.hand('<p>Dear Herr Delorme,</p><p>Your telegram reached me at a quarter to ten tonight. You ask whether Kaspar Gredig, the guide whom I buried here on 25 August 1934, was left-handed or right-handed.</p>' +
        '<p>He was right-handed. I watched him carve and shoot and cut bread for thirty years, always with the right hand.</p>' +
        '<p>But I must tell you what I have told no one. When I washed the body before we buried it, the middle finger of the left hand had the hard callus that comes from holding a pen for many years. Kaspar could barely write his name. I told myself that grief was playing tricks on me, and the face was gone, and the baron was in hospital in Innsbruck, and who was I to say anything.</p>' +
        '<p>If you know something, for the love of God, tell me. I will take this down to the station myself.</p><p>Luzi Casutt, parish priest</p>') +
      '<p class="caption">Handed to the police by the stationmaster at 04:20, unopened.</p></article>';
  };

  D.D4 = function () {
    return '<article class="doc doc-report">' + '<header class="rep-head"><span>Oswin Railway · Permanent Way</span><span>Track patrol</span></header>' +
      '<h3 class="rep-title">Track patrol report, Grauhorn Tunnel</h3>' +
      C.kv([['Patrol', 'Gion Derungs, foreman, with two men'], ['Time', '19 December 1936, 02:10 to 03:05, north portal to south portal on foot'],
        ['Reason', 'After the avalanche alarm, every tunnel on the line is walked to look for fallen ice']]) +
      '<p>At <b>3.9 km</b> from the north portal, in the ballast beside the down line, the line the Nocturne takes, we found a small automatic pistol: FN, calibre 6.35 mm, “Baby” model, serial number <span class="mono">81 604</span>. Black with soot. One cartridge fired, five left in the magazine.</p>' +
      '<p>It lay a metre from the rail, where a thing thrown from a carriage window would land.</p>' +
      '<p>No other train has passed through the tunnel since the Nocturne went through between 22:24 and 22:35. The line was closed behind it at Sargans at 22:40 because of the snow.</p>' +
      '<p class="sign">G. Derungs</p></article>';
  };

  D.D5 = function () {
    return '<article class="doc doc-interviews">' + C.head() + '<h3 class="rep-title">Statements of the train staff</h3>' +
      C.stmt('D5', 'tschudi', q('Mr Barić came to the van at a quarter past ten to see his crate, number 14. A big clock, all glass and brass. I stayed with him the whole time; passengers are never left alone in the van. He talked to that clock like it was a child. He went back at twenty-two thirty-eight, just after we came out of the tunnel.')) +
      C.stmt('D5', 'ferro', q('Emil came into my pantry at ten past ten for ice. We always drink one grappa for the Grauhorn, the two of us; it’s our custom, eleven minutes of dark and one glass. The photographer took our picture. Emil went back to his car at about a quarter to eleven.')) +
      C.stmt('D5', 'rinaldi', q('Miss Pryor sat at the bar from a quarter past ten until just after the tunnel. Two gin fizzes, and she wrote the whole time. Mademoiselle Imhof was at the writing desk from before ten until about five to eleven.') +
        q('The old lady at table 4 came in at about a quarter past ten and sat alone with her camomile. She dozed. The baron? He came later; I couldn’t tell you when, the salon filled up after the tunnel. He signed for a cognac, so the chit will say.')) + '</article>';
  };
})();
