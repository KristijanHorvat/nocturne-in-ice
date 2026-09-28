# -*- coding: utf-8 -*-
"""SPOILERS. Hints, lock replies, ratings and the solution text, in English."""

EN = {
    "replies": {
        "B_near": "The hasp doesn’t move. Close, though. Whose clock was that minute on?",
        "C_ok": "Tscharner: “A left-handed man in a grave at Sankt Oswin… and here we sit, in Sankt Oswin, with the line buried. "
                "I’m searching every compartment now. I’ll send you what we find, the doctor’s report and the photographer’s plates.”",
        "D_ok": "Tscharner: “He didn’t even try to deny it. I’m talking to all seven again now, and the stationmaster is back "
                "from the avalanche with something for us.”",
    },
    "hints": {
        "B": [
            "Klara Imhof knows the rule for the combination, even though she never knew the numbers. Read her first interview.",
            "The timetable gives the minute the Nocturne crosses the frontier. Look at the little number beside that time and read "
            "the footnote: whose clock is it on?",
            "The frontier is crossed at 18.27 by French time. Delorme always kept Swiss time, which is one hour ahead.",
        ],
        "C": [
            "Delorme’s diary tells you which letter to read with card no. 3. Which document in envelope A is it?",
            "Lay the card over Morand’s letter. On screen, choose the letter under the card and drag the card until it clicks. "
            "On paper, cut out the card and its windows and lay it on the letter, edges together. Read the words in the windows "
            "in order, line by line.",
            "The message begins THE GRAVE AT… Read on, and tell the inspector the whole sentence.",
        ],
        "D": [
            "Put the torn note back together first. The pieces only fit one way.",
            "The note names a car and a door, and it is signed with a single initial. The plan of the train (A6) shows who slept "
            "behind that door.",
            "Car 1, door 3 is R. Delorme’s compartment. Compare the endorsement on the back of the cheque in B8.",
        ],
        "F": [
            "Pin down when he died. Where was the pistol found? What does the soot in compartment 6 tell you? And why did nobody "
            "answer Barić’s knock at 22:40?",
            "For the minutes the train was in the Grauhorn Tunnel, 22:24 to 22:35, test every suspect’s whereabouts against a "
            "second, independent document: logs, chits, photographs, other staff. One alibi rests entirely on one old lady’s watch.",
            "Look closely at Madame Duclos’s watch in plate 12 and compare it with the salon clock. Then set her “eight minutes to "
            "seven” at Basel beside the timetable, and find the chit for the cognac she says was ordered the moment her companion "
            "sat down.",
        ],
    },
    "answers": {
        "B": "The frontier minute is 18.27 French time, which is 19.27 by Swiss clocks. The combination is <strong>1927</strong>.",
        "C": "The windows read: <strong>THE GRAVE AT SANKT OSWIN HOLDS A LEFT-HANDED MAN</strong>. Tell the inspector that.",
        "D": "<strong>Raoul Delorme</strong> wrote it. Car 1, compartment 3 is his, and the R matches his endorsement on the cheque.",
    },
    "ratings": {
        "perfect": ["Masters of the timetable", "Five for five, and barely a hint. Every minute of that night accounted for. "
                    "Inspector Tscharner would like you aboard every train he ever has to investigate."],
        "excellent": ["First-class detectives", "Five for five. You needed a nudge or two along the way, but you read the whole "
                      "night correctly, down to the hour that never happened."],
        "good": ["Sharp-eyed detectives", "You named the killer and most of how he did it. One detail slipped past you, but the "
                 "case holds."],
        "who": ["You caught him, just about", "You named the right man, but his lawyer will have fun with the details. Read what "
                "really happened to see what you missed."],
        "wrong": ["The wrong passenger", "The man who calls himself Baron von Aschau steps down at Innsbruck and is never seen "
                  "again, while someone else answers for his crime. Read what really happened, then try again some winter night."],
    },
    "chapters": [
        {"title": "The man who came down the mountain", "html":
            "<p>Kaspar Gredig was born in Sankt Oswin in 1900 and was taking clients up the Grauhorn by the time he was "
            "twenty-two. He was a fine guide and a poor man. In the summer of 1934 he was hired by the richest client he ever had: "
            "Baron Friedrich von Aschau, lately of Buenos Aires, who had come home to an Austrian estate and a fortune and knew "
            "almost nobody in Europe.</p>"
            "<p>The two men were the same height and near enough the same age. On the north face, on 19 August, a cornice broke "
            "and they fell together. When Kaspar came to on the glacier, the baron lay dead beside him, his face destroyed.</p>"
            "<p>Nobody will ever know how long Kaspar sat there before he changed the papers in their pockets. He was hurt "
            "himself, in the face and the left hand, and when the rescuers came he told them he was the baron. The fingertip he "
            "had lost to frostbite in 1929 became an injury from the fall. Four months in hospital, a bandaged face and a new "
            "passport did the rest, and Father Casutt buried the baron under Kaspar’s name.</p>"
            "<p>For two years the “baron” lived carefully: Vienna, Innsbruck, never the Oswin valley. He practised his Spanish "
            "from a grammar. He wore the baron’s gold watch, no. 7031, because the baron would have worn it. He did not know it "
            "had been made for a left-handed man.</p>"},
        {"title": "Watch no. 7031", "html":
            "<p>In September 1936 the baron offered Casimir Delorme two million francs for 40% of his firm. Delorme was cautious by "
            "nature and had the baron’s background checked by J. Morand of Innsbruck, the watch-repairer who made his discreet "
            "enquiries. Morand found the estates in order, and one thing he did not like: the undertaker who prepared the guide’s "
            "body in 1934 remembered a writer’s callus on the left hand, and Kaspar Gredig, everyone knew, could barely write. "
            "Morand put it the only way he trusted, in a letter to be read through reading card no. 3: <i>the grave at Sankt "
            "Oswin holds a left-handed man.</i></p>"
            "<p>Delorme read it on the afternoon of the 18th and did not want to understand it. Then at dinner he saw watch 7031 "
            "on the baron’s <i>left</i> wrist, the crown he had set at nine o’clock digging into the back of the man’s hand. He had "
            "built that watch for a left-hander to wear on the right. He asked whether it still struck the quarters; the baron "
            "didn’t know how to make it.</p>"
            "<p>At Zurich Delorme telegraphed the priest of Sankt Oswin (was Gredig left- or right-handed?) and Morand, and asked "
            "for the replies at Sankt Oswin station. At 21:15 he told the baron he would have his answer there. Half an hour later "
            "he let slip more than he meant to his son: “A stranger? You have no idea how right you are.”</p>"
            "<p>The baron understood. At midnight the train would stop at Sankt Oswin, and whatever was waiting there would end "
            "him.</p>"},
        {"title": "Eleven minutes in the dark", "html":
            "<ol>"
            "<li><strong>19:41, Basel.</strong> In the corridor of car 2, in front of the baron and three others, the customs "
            "officer inspects Margit Delorme’s pistol and puts it back in her unlocked dressing case.</li>"
            "<li><strong>22:05.</strong> Delorme takes his veronal and chains his door behind Stoffel. Margit slips away to "
            "Raoul’s compartment in car 1, leaving hers empty and the communicating door unbolted on both sides, as always.</li>"
            "<li><strong>22:10.</strong> Stoffel leaves his post for a grappa in the pantry. The corridor of car 2 is empty: Barić "
            "is in the van, Pryor and Klara in the salon car, the Eglis and Dr Wirz asleep.</li>"
            "<li><strong>About 22:20.</strong> The baron walks from no. 9 into Margit’s empty compartment and takes the pistol "
            "from her dressing case.</li>"
            "<li><strong>22:24.</strong> The Nocturne enters the Grauhorn Tunnel. For eleven minutes the roar of steam and stone "
            "drowns everything.</li>"
            "<li><strong>About 22:26.</strong> He opens the communicating door. Delorme is asleep. He presses the pillow over his "
            "face and fires once.</li>"
            "<li><strong>About 22:29.</strong> Back in no. 6, he lowers the window and throws the pistol into the dark. At 48 km/h, "
            "five minutes in, it lands 3.9 km from the portal. Smoke and soot pour in; he leaves the window down, and two feathers "
            "from the pillow fall from his sleeve to the floor.</li>"
            "<li><strong>22:31.</strong> He is back in his own compartment. In the salon car, Kessler’s flash catches Madame "
            "Duclos alone with her tisane.</li>"
            "<li><strong>22:40.</strong> Barić knocks at no. 5 with his court papers. No answer: Delorme is already dead.</li>"
            "<li><strong>22:52.</strong> Margit comes back to a freezing, sooty compartment, shuts the window and goes to bed "
            "without opening the communicating door.</li>"
            "<li><strong>23:15.</strong> The baron sits down with Madame Duclos and asks her the time.</li>"
            "<li><strong>00:14, Sankt Oswin.</strong> He tries to collect the priest’s letter, in the dialect of the valley he grew "
            "up in. The stationmaster refuses him.</li>"
            "</ol>"},
    ],
}
