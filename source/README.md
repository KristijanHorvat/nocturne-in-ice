# Nocturne in Ice / Nokturno u ledu

A murder mystery for two detectives, in English and Croatian. It's December 1936 and the Alpine Nocturne, a luxury sleeper from Paris to Vienna, is stuck in the snow. A watchmaker has been shot in a compartment locked from the inside, and seven passengers are under suspicion. Plan on 2 to 2½ hours.

The game is one HTML file. You can also print the case file as A4 PDFs and play from paper, with the game handling the locks, hints and your accusation.

## Play it

Open `index.html` in any modern browser (Chrome, Firefox, Safari or Edge). There's nothing to install, no server, and it works offline. Progress saves automatically in that browser, so you can stop and come back later.

Pick **English** or **Hrvatski** on the title screen. You can switch language at any point from the menu (☰), and your progress stays the same.

## Put it on GitHub Pages

1. Create a new repository on GitHub, for example `nocturne-in-ice`.
2. Click **Add file > Upload files**, drop in `index.html` and commit.
3. Go to **Settings > Pages**. Under *Build and deployment* choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. After a minute or two the game is at `https://<your-username>.github.io/nocturne-in-ice/`.

## Before the evening

- Open the game once on the device you'll play on to check it loads and the music plays. Don't open any documents yet.
- A laptop or tablet you can both see works best. Phones work too.
- The music and sound buttons are in the bottom-right corner.
- The solution, hints and lock answers are scrambled inside the file, so looking at the page source won't give anything away.

## The printed case file

The `print/en` and `print/hr` folders each hold five A4 PDFs in one language:

| English | Hrvatski | What it is |
|---|---|---|
| `0-Detective-worksheets.pdf` | `0-Radni-listovi.pdf` | Case board, timeline and accusation form. Print one set to share, or one each. |
| `1-Envelope-A.pdf` | `1-Omotnica-A.pdf` | The opening evidence. You can read this from the start. |
| `2-Envelope-B-sealed.pdf` | `2-Omotnica-B-zapecacena.pdf` | Sealed. |
| `3-Envelope-C-sealed.pdf` | `3-Omotnica-C-zapecacena.pdf` | Sealed. |
| `4-Envelope-D-sealed.pdf` | `4-Omotnica-D-zapecacena.pdf` | Sealed. |

Everything on paper is in the game too, so you can mix the two.

**Printing the sealed envelopes without spoiling them for yourself:**

1. Open the PDF and print it straight away. Page 1 is a cover sheet, so that's all you'll see on screen.
2. Pick up the printed pages without reading them, slide them into an envelope with the cover on top, and seal it.
3. Print at **100% / Actual size**, not "Fit to page". This matters for one page in envelope B that has to line up exactly with pages in envelopes A and B.
4. Colour looks best. Black and white works too.

**For the evening you'll need:** four envelopes, pens (two colours help you tell whose notes are whose), scissors, a craft knife or small pointed scissors, and a magnifying glass if you have one (a phone camera's zoom also works). The game tells you when to open each envelope.

Some pages are meant to be cut out. Each one says so on the page.

## Editing

The `source` zip has the game split into small, readable files:

- `python3 build.py` rebuilds `dist/index.html`. It inlines the CSS, JavaScript and fonts, and scrambles the secrets.
- `node print/make_pdfs.js` rebuilds all ten PDFs. It needs Playwright (`npm i playwright`, then `npx playwright install chromium`).
- `node test/e2e.js` plays the whole game in both languages in a headless browser: every lock right and wrong, every hint, both paper puzzles, and a correct and a wrong accusation.
- `python3 test/check_pdfs.py` checks every PDF page for overflowing text, stranded headings and fonts that aren't embedded.

`secret_*.py` and `build.py` contain the solution. Don't open them unless you want spoilers.

The story and characters are original. All art is SVG drawn in code, and all music and sound effects are generated live with the Web Audio API. The fonts (Poiret One, Josefin Sans, Libre Baskerville, Courier Prime, Dancing Script and Playfair Display) are under the SIL Open Font License and come from the @fontsource packages. They're embedded in both the game and the PDFs.

---

## Ukratko na hrvatskom

**Igranje:** otvorite `index.html` u bilo kojem modernom pregledniku. Na naslovnom zaslonu odaberite **Hrvatski**. Jezik možete promijeniti i kasnije, u izborniku (☰). Napredak se sam sprema u pregledniku.

**GitHub Pages:** napravite novi repozitorij, prenesite `index.html` (*Add file > Upload files*), zatim u *Settings > Pages* odaberite *Deploy from a branch*, granu **main** i mapu **/ (root)**. Igra će za minutu-dvije biti na `https://<korisničko-ime>.github.io/<repozitorij>/`.

**Ispis:** hrvatski PDF-ovi nalaze se u mapi `print/hr`. Zapečaćene omotnice ispišite odmah nakon otvaranja PDF-a, jer je prva stranica naslovnica i samo nju vidite na ekranu. Stranice stavite u omotnicu bez čitanja. Ispisujte u **100 %** veličini (*Actual size*), ne "prilagodi stranici". Trebat će vam četiri omotnice, olovke, škare, skalpel ili male šiljaste škare te povećalo ako ga imate. Igra vam kaže kada smijete otvoriti koju omotnicu.
