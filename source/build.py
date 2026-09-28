"""Build Nocturne in Ice.

1. Writes js/secrets.js: lock answers, hints, replies and the solution in both languages,
   scrambled and base64-encoded so nobody spoils the ending by glancing at the source.
2. Bundles index.html, css/, js/ and the fonts into one self-contained dist/index.html.
"""
import base64, json, os, re
import fonts
from secret_en import EN
from secret_en2 import CHAPTERS as EN_MORE
from secret_hr import HR
from secret_hr2 import CHAPTERS as HR_MORE

ROOT = os.path.dirname(os.path.abspath(__file__))
KEY = b"Semper paratus, 7031"

EN["chapters"] = EN["chapters"] + EN_MORE
HR["chapters"] = HR["chapters"] + HR_MORE

SECRET = {
    "locks": {
        "B": "1927", "B_near": ["1827"],
        "C_any": [["LEFTHANDED", "LEFTHANDER", "LJEVAK", "LJEVORUK"], ["GRAVE", "GROB", "OSWIN"]],
        "D": ["RAOUL"],
    },
    "solution": {"who": "baron", "how": "cdoor", "when": "tunnel", "why": "identity", "alibi": "watch"},
    "en": EN,
    "hr": HR,
}

SCRIPTS = ["art-core", "art-portraits", "art-scene", "art-salon", "art-misc", "art-paper", "art-title",
           "i18n-en", "i18n-hr", "case-meta", "docs-kit",
           "docs-a1-en", "docs-a2-en", "docs-a1-hr", "docs-a2-hr", "docs-b1-en", "docs-b2-en", "docs-b1-hr", "docs-b2-hr",
           "docs-c1-en", "docs-c2-en", "docs-c1-hr", "docs-c2-hr", "docs-d-en", "docs-d-hr",
           "secrets", "audio", "app-core", "app-locks", "app-puzzles", "app-play"]
STYLES = ["base", "app", "docs"]


def scramble(obj):
    raw = json.dumps(obj, ensure_ascii=False).encode("utf-8")
    out = bytes(b ^ KEY[i % len(KEY)] for i, b in enumerate(raw))
    return base64.b64encode(out).decode("ascii")


def read(rel):
    with open(os.path.join(ROOT, rel), encoding="utf-8") as f:
        return f.read()


def main():
    assert len(EN["chapters"]) == len(HR["chapters"]) == 7
    for k in ("B", "C", "D", "F"):
        assert len(EN["hints"][k]) == len(HR["hints"][k]) == 3, k
    with open(os.path.join(ROOT, "js", "secrets.js"), "w", encoding="utf-8") as f:
        f.write("/* Lock answers, hints and the solution. Scrambled so nobody spoils the ending by accident. */\n")
        f.write("window.NI_SECRET = { k: '" + base64.b64encode(KEY).decode("ascii") + "', d: '" + scramble(SECRET) + "' };\n")

    html = read("index.html")
    tag = '<link rel="stylesheet" href="css/fonts.css">'
    assert tag in html
    html = html.replace(tag, "<style>\n" + fonts.css(embedded=True) + "\n</style>")
    for css in STYLES:
        tag = '<link rel="stylesheet" href="css/%s.css">' % css
        assert tag in html, tag
        html = html.replace(tag, "<style>\n" + read("css/%s.css" % css) + "\n</style>")
    for js in SCRIPTS:
        tag = '<script src="js/%s.js"></script>' % js
        assert tag in html, tag
        code = read("js/%s.js" % js).replace("</script", "<\\/script")
        html = html.replace(tag, "<script>\n" + code + "\n</script>")
    assert not re.search(r'src="js/|href="css/', html)
    os.makedirs(os.path.join(ROOT, "dist"), exist_ok=True)
    with open(os.path.join(ROOT, "dist", "index.html"), "w", encoding="utf-8") as f:
        f.write(html)
    print("dist/index.html: %.0f KB" % (len(html.encode("utf-8")) / 1024))


if __name__ == "__main__":
    main()
