// Accessibility check for isellscre.com (WCAG 2.2 AA, using axe-core).
// Runs on GitHub for every change. Serious and critical problems fail the
// check (GitHub emails you); smaller ones are listed as warnings.
//
//   node scripts/accessibility-check.mjs            (from the repo folder)
import { createServer } from "node:http";
import { readFile, readdir } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { createRequire } from "node:module";
import { chromium } from "playwright";

const require = createRequire(import.meta.url);
const AXE = await readFile(require.resolve("axe-core/axe.min.js"), "utf8");
const ROOT = process.cwd();
// Old pages from the previous site design that nothing links to.
const SKIP = new Set(["accessibility-enhancements.html", "contract.html", "initial.html"]);
const TYPES = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".json": "application/json",
  ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".ttf": "font/ttf" };

const server = createServer(async (req, res) => {
  let path = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (path.endsWith("/")) path += "index.html";
  try {
    const file = normalize(join(ROOT, path));
    if (!file.startsWith(ROOT)) throw new Error("outside");
    res.writeHead(200, { "content-type": TYPES[extname(file)] || "application/octet-stream" });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404); res.end("not found");
  }
}).listen(0);
const base = `http://127.0.0.1:${server.address().port}`;

const pages = [
  ...(await readdir(ROOT)).filter((f) => f.endsWith(".html") && !SKIP.has(f)),
  ...(await readdir(join(ROOT, "blog"))).filter((f) => f.endsWith(".html")).map((f) => `blog/${f}`),
];

const browser = await chromium.launch();
const context = await browser.newContext();
await context.route((url) => !url.href.startsWith(base), (route) => route.abort());
const failures = [];
const warnings = [];
for (const page of pages) {
  for (const viewport of [{ width: 1280, height: 900 }, { width: 390, height: 844 }]) {
    const tab = await context.newPage();
    await tab.setViewportSize(viewport);
    await tab.goto(`${base}/${page}`, { waitUntil: "load" });
    // Open the Text us panel so it gets checked too.
    await tab.evaluate(() => document.querySelector(".text-us-toggle")?.click());
    await tab.addScriptTag({ content: AXE });
    const result = await tab.evaluate(() => axe.run(document, {
      runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"] },
    }));
    for (const v of result.violations) {
      const line = `${page}${viewport.width < 500 ? " (phone)" : ""}: ${v.help} [${v.id}] at ${v.nodes.slice(0, 3).map((n) => n.target.join(" ")).join(", ")}`;
      (["serious", "critical"].includes(v.impact) ? failures : warnings).push(line);
    }
    await tab.close();
  }
}
await browser.close();
server.close();

for (const w of warnings) console.log(`::warning::${w}`);
for (const f of failures) console.log(`::error::${f}`);
console.log(`\nChecked ${pages.length} pages at desktop and phone sizes: ${failures.length} problems, ${warnings.length} warnings.`);
process.exit(failures.length ? 1 : 0);
