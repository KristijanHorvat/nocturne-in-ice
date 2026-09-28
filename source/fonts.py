"""@font-face rules for the game's fonts (all from @fontsource, SIL Open Font License).

embedded=True inlines every font as base64 for the single-file game.
embedded=False links the files in fonts/ for the print pipeline.
"""
import base64, os

ROOT = os.path.dirname(os.path.abspath(__file__))
LATIN = ("U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,"
         "U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD")
LATIN_EXT = ("U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,"
             "U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF")
FACES = [
    ("Poiret One", "poiret-one", ["400-normal"]),
    ("Josefin Sans", "josefin-sans", ["400-normal", "600-normal", "700-normal"]),
    ("Libre Baskerville", "libre-baskerville", ["400-normal", "400-italic", "700-normal"]),
    ("Courier Prime", "courier-prime", ["400-normal", "700-normal"]),
    ("Dancing Script", "dancing-script", ["500-normal", "700-normal"]),
    ("Playfair Display", "playfair-display", ["700-normal", "900-normal"]),
]


def css(embedded=True, prefix="fonts/"):
    out = []
    for family, slug, variants in FACES:
        for v in variants:
            weight, style = v.split("-")
            for sub, rng in (("latin-ext", LATIN_EXT), ("latin", LATIN)):
                name = "%s-%s-%s.woff2" % (slug, sub, v)
                if embedded:
                    with open(os.path.join(ROOT, "fonts", name), "rb") as f:
                        src = "data:font/woff2;base64," + base64.b64encode(f.read()).decode("ascii")
                else:
                    src = prefix + name
                out.append("@font-face{font-family:'%s';font-style:%s;font-weight:%s;font-display:swap;"
                           "src:url(%s) format('woff2');unicode-range:%s}" % (family, style, weight, src, rng))
    return "\n".join(out)


if __name__ == "__main__":
    with open(os.path.join(ROOT, "print", "fonts.css"), "w", encoding="utf-8") as f:
        f.write(css(embedded=False, prefix="../fonts/") + "\n")
    with open(os.path.join(ROOT, "css", "fonts.css"), "w", encoding="utf-8") as f:
        f.write(css(embedded=False, prefix="../fonts/") + "\n")
    print("wrote print/fonts.css and css/fonts.css")
