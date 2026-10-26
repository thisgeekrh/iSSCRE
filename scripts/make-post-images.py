"""Generate branded header images for blog posts.

Usage: python3 scripts/make-post-images.py
Requires: pip install playwright pillow && python3 -m playwright install chromium

Reads image specs from IMAGES below and writes 1600x840 WebP files to
assets/images/blog/. Each post in scripts/blog-posts.mjs points to one of
these files with its `image` field. Replace any of them with a real photo
(same file name, 1600x840) whenever you have one.
"""
from pathlib import Path
import html
from playwright.sync_api import sync_playwright
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "assets/images/blog"
FONT_DIR = (ROOT / "assets/fonts").as_uri()

# kind "route": origin -> destination. kind "steps": a short sequence.
IMAGES = [
    {"file": "new-york-to-columbia", "category": "Relocation", "kind": "route",
     "from": "New York, NY", "to": "Columbia, SC"},
    {"file": "charlotte-to-york-county", "category": "Relocation", "kind": "route",
     "from": "Charlotte, NC", "to": "Rock Hill, SC"},
    {"file": "california-to-south-carolina", "category": "Relocation", "kind": "route",
     "from": "California", "to": "South Carolina"},
    {"file": "florida-to-south-carolina", "category": "Relocation", "kind": "route",
     "from": "Florida", "to": "South Carolina"},
    {"file": "buying-from-out-of-state", "category": "Buying", "kind": "steps",
     "title": "Buying a South Carolina home from out of state",
     "steps": ["Plan", "Tour", "Offer", "Close"]},
]

CSS = f"""
@font-face {{ font-family: Sofia; src: url('{FONT_DIR}/Sofia%20Pro%20Regular.ttf'); font-weight: 400; }}
@font-face {{ font-family: Sofia; src: url('{FONT_DIR}/Sofia%20Pro%20Bold.ttf'); font-weight: 700; }}
* {{ margin: 0; box-sizing: border-box; }}
body {{ width: 1600px; height: 840px; overflow: hidden; font-family: Sofia, Arial, sans-serif; color: #fff;
  background:
    radial-gradient(900px 520px at 78% 30%, rgba(184,155,94,.28), transparent 70%),
    radial-gradient(700px 500px at 10% 100%, rgba(184,155,94,.12), transparent 70%),
    linear-gradient(135deg, #1d201c, #121411); }}
.grid {{ position: absolute; inset: 0; opacity: .16;
  background-image: radial-gradient(rgba(255,255,255,.55) 1.4px, transparent 1.6px); background-size: 34px 34px; }}
.eyebrow {{ position: absolute; left: 110px; top: 96px; color: #d3b679; font-weight: 700; letter-spacing: .22em; font-size: 26px; text-transform: uppercase; }}
.brand {{ position: absolute; left: 110px; bottom: 64px; color: rgba(255,255,255,.72); font-size: 24px; letter-spacing: .14em; text-transform: uppercase; }}
.brand b {{ color: #fff; }}
svg {{ position: absolute; inset: 0; }}
.label {{ position: absolute; font-weight: 700; font-size: 54px; line-height: 1.05; }}
.small {{ display: block; font-weight: 400; font-size: 24px; letter-spacing: .16em; text-transform: uppercase; color: rgba(255,255,255,.62); margin-bottom: 14px; }}
.title {{ position: absolute; left: 110px; top: 160px; width: 1180px; font-weight: 700; font-size: 76px; line-height: 1.05; }}
"""

def route(spec):
    a, b = (300, 470), (1300, 360)
    return f"""
<svg viewBox="0 0 1600 840"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#b89b5e" stop-opacity=".55"/><stop offset="1" stop-color="#e2c78d"/></linearGradient></defs>
<path d="M{a[0]} {a[1]} C 620 160, 980 120, {b[0]} {b[1]}" fill="none" stroke="url(#g)" stroke-width="6" stroke-dasharray="4 18" stroke-linecap="round"/>
<circle cx="{a[0]}" cy="{a[1]}" r="16" fill="#fff" fill-opacity=".9"/><circle cx="{a[0]}" cy="{a[1]}" r="34" fill="none" stroke="#fff" stroke-opacity=".25" stroke-width="3"/>
<circle cx="{b[0]}" cy="{b[1]}" r="20" fill="#e2c78d"/><circle cx="{b[0]}" cy="{b[1]}" r="46" fill="none" stroke="#e2c78d" stroke-opacity=".35" stroke-width="3"/><circle cx="{b[0]}" cy="{b[1]}" r="80" fill="none" stroke="#e2c78d" stroke-opacity=".15" stroke-width="3"/>
</svg>
<div class="label" style="left:{a[0]-190}px; top:{a[1]+56}px"><span class="small">Moving from</span>{html.escape(spec['from'])}</div>
<div class="label" style="right:{1600-b[0]-110}px; top:{b[1]+110}px; text-align:right"><span class="small">To</span>{html.escape(spec['to'])}</div>"""

def steps(spec):
    n = len(spec["steps"])
    xs = [200 + i * (1200 / (n - 1)) for i in range(n)]
    y = 560
    line = f'<line x1="{xs[0]}" y1="{y}" x2="{xs[-1]}" y2="{y}" stroke="#b89b5e" stroke-opacity=".6" stroke-width="5" stroke-dasharray="4 16" stroke-linecap="round"/>'
    dots = "".join(f'<circle cx="{x}" cy="{y}" r="{26 if i == n - 1 else 18}" fill="{"#e2c78d" if i == n - 1 else "#fff"}"/>' for i, x in enumerate(xs))
    labels = "".join(f'<div class="label" style="left:{x-150}px; width:300px; top:{y+48}px; text-align:center; font-size:44px"><span class="small">Step {i+1}</span>{html.escape(s)}</div>' for i, (x, s) in enumerate(zip(xs, spec["steps"])))
    return f'<div class="title">{html.escape(spec["title"])}</div><svg viewBox="0 0 1600 840">{line}{dots}</svg>{labels}'

def page(spec):
    art = route(spec) if spec["kind"] == "route" else steps(spec)
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>{CSS}</style></head><body>
<div class="grid"></div><div class="eyebrow">{html.escape(spec['category'])}</div>{art}
<div class="brand"><b>The Tyler Simmons Team</b> &nbsp;·&nbsp; Coldwell Banker Realty</div></body></html>"""

def main():
    OUT.mkdir(parents=True, exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch()
        pg = browser.new_page(viewport={"width": 1600, "height": 840})
        for spec in IMAGES:
            tmp = OUT / "_render.html"
            tmp.write_text(page(spec), encoding="utf-8")
            pg.goto(tmp.as_uri())
            pg.evaluate("document.fonts.ready")
            pg.wait_for_timeout(300)
            tmp.unlink()
            png = OUT / f"{spec['file']}.png"
            pg.screenshot(path=str(png))
            Image.open(png).convert("RGB").save(OUT / f"{spec['file']}.webp", "WEBP", quality=82)
            png.unlink()
            print("wrote", spec["file"])
        browser.close()

if __name__ == "__main__":
    main()
