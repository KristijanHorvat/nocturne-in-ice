"""Checks every PDF in dist/print and renders each page to PNG.

Usage: python3 test/check_pdfs.py <png-out-dir>
Flags: text outside the printable area, headings stranded at the bottom of a page,
pages that are nearly empty, and fonts that are not embedded.
"""
import os, sys, glob
import fitz  # PyMuPDF

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "dist", "print")
OUT = sys.argv[1] if len(sys.argv) > 1 else "pdf-png"
MM = 72 / 25.4
LEFT, RIGHT, TOP, BOTTOM = 15 * MM, (210 - 15) * MM, 14 * MM, (297 - 16) * MM
HEADING_FONTS = ("Josefin", "Poiret", "Playfair")
problems = 0

for pdf in sorted(glob.glob(os.path.join(ROOT, "*", "*.pdf"))):
    lang = os.path.basename(os.path.dirname(pdf))
    doc = fitz.open(pdf)
    fonts = set()
    name = lang + "/" + os.path.basename(pdf)
    out_dir = os.path.join(OUT, lang, os.path.basename(pdf)[:-4])
    os.makedirs(out_dir, exist_ok=True)
    for pno, page in enumerate(doc):
        for f in page.get_fonts(full=True):
            fonts.add((f[3], f[1] != "n/a" and f[1] != ""))
        page.get_pixmap(dpi=60).save(os.path.join(out_dir, "p%02d.png" % (pno + 1)))
        spans, rotated = [], False
        for b in page.get_text("dict")["blocks"]:
            for l in b.get("lines", []):
                rotated = rotated or abs(l["dir"][0]) < .5
                for s in l["spans"]:
                    if s["text"].strip():
                        spans.append(s)
        body = [s for s in spans if s["bbox"][3] < BOTTOM + 2]  # footer lives below BOTTOM
        chars = sum(len(s["text"].strip()) for s in body)
        for s in body:
            x0, y0, x1, y1 = s["bbox"]
            if x0 < LEFT - 3 or x1 > RIGHT + 3 or y0 < TOP - 3:
                problems += 1
                print("%s p%d OUTSIDE margins: %r %s" % (name, pno + 1, s["text"][:40], [round(v / MM, 1) for v in s["bbox"]]))
        if body:
            last = max(body, key=lambda s: s["bbox"][3])
            lowest_heading = [s for s in body if any(h in s["font"] for h in HEADING_FONTS) and s["size"] >= 9.5 and s["bbox"][1] > BOTTOM - 22 * MM]
            for h in lowest_heading:
                below = [s for s in body if s["bbox"][1] > h["bbox"][3] + 1]
                if len(below) <= 1:
                    problems += 1
                    print("%s p%d HEADING at bottom: %r" % (name, pno + 1, h["text"][:50]))
        low = max((sp["bbox"][3] for sp in body), default=0)
        if pno > 0 and not rotated and low < TOP + 45 * MM:
            problems += 1
            print("%s p%d SHORT page, content ends %.0f mm from the top" % (name, pno + 1, low / MM))
        elif chars < 60 and pno > 0:
            problems += 1
            print("%s p%d nearly EMPTY page (%d chars)" % (name, pno + 1, chars))
    not_embedded = [f for f, emb in fonts if not emb]
    print("%-40s %2d pages, fonts: %s%s" % (name, len(doc), ", ".join(sorted(set(f.split("+")[-1] for f, _ in fonts))),
                                           ("  NOT EMBEDDED: %s" % not_embedded) if not_embedded else ""))
print("problems:", problems)
