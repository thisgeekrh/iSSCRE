import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
const sitemapFiles = [...sitemap.matchAll(/<loc>https:\/\/isellscre\.com\/(.*?)<\/loc>/g)]
  .map((match) => match[1] || "index.html")
  .map((file) => file === "" ? "index.html" : file);
const extraFiles = ["care.html", "text.html", "thanks.html"];
const htmlFiles = [...new Set([...sitemapFiles, ...extraFiles])];
const errors = [];
const warnings = [];
const titles = new Map();
const descriptions = new Map();

const textBetween = (html, tag) => [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, "gi"))]
  .map((match) => match[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());

const attribute = (tag, name) => {
  const match = tag.match(new RegExp(`\\b${name}=["']([^"']*)["']`, "i"));
  return match ? match[1] : null;
};

function recordUnique(map, value, file, label) {
  if (!value) return;
  if (map.has(value)) errors.push(`${file}: duplicate ${label} also used by ${map.get(value)}`);
  else map.set(value, file);
}

for (const file of htmlFiles) {
  const fullPath = path.join(root, file);
  if (!fs.existsSync(fullPath)) {
    errors.push(`${file}: listed but missing`);
    continue;
  }

  const html = fs.readFileSync(fullPath, "utf8");
  const lower = html.toLowerCase();
  const title = textBetween(html, "title")[0];
  const h1s = textBetween(html, "h1");
  const descriptionTag = html.match(/<meta\b[^>]*name=["']description["'][^>]*>/i)?.[0] || "";
  const description = attribute(descriptionTag, "content");
  const canonicalTag = html.match(/<link\b[^>]*rel=["']canonical["'][^>]*>/i)?.[0] || "";
  const canonical = attribute(canonicalTag, "href");
  const robotsTag = html.match(/<meta\b[^>]*name=["']robots["'][^>]*>/i)?.[0] || "";
  const robots = attribute(robotsTag, "content") || "";
  const ids = [...html.matchAll(/\bid=["']([^"']+)["']/gi)].map((match) => match[1]);

  if (!lower.startsWith("<!doctype html>")) errors.push(`${file}: missing HTML5 doctype`);
  if (!/<html\b[^>]*lang=["']en-US["']/i.test(html)) errors.push(`${file}: missing en-US language declaration`);
  if (!title) errors.push(`${file}: missing title`);
  if (!description) errors.push(`${file}: missing meta description`);
  if (!canonical) errors.push(`${file}: missing canonical URL`);
  if (!robots.toLowerCase().includes("noindex") && h1s.length !== 1) errors.push(`${file}: expected one H1, found ${h1s.length}`);
  if (new Set(ids).size !== ids.length) errors.push(`${file}: contains duplicate element IDs`);
  if (html.includes("\u2014")) errors.push(`${file}: contains an em dash`);

  recordUnique(titles, title, file, "title");
  recordUnique(descriptions, description, file, "description");

  for (const script of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      JSON.parse(script[1]);
    } catch (error) {
      errors.push(`${file}: invalid JSON-LD, ${error.message}`);
    }
  }

  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = match[0];
    if (attribute(tag, "alt") === null) errors.push(`${file}: image missing alt text`);
    if (!attribute(tag, "width") || !attribute(tag, "height")) errors.push(`${file}: image missing width or height, ${attribute(tag, "src") || "unknown source"}`);
    const src = attribute(tag, "src");
    if (src && src.startsWith("/")) {
      const imagePath = src.slice(1);
      if (!fs.existsSync(path.join(root, imagePath))) errors.push(`${file}: missing image ${src}`);
    }
  }

  for (const match of html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi)) {
    const href = match[1];
    if (/^(https?:|mailto:|tel:|javascript:)/i.test(href) || href === "#") continue;
    const [rawFile, fragment] = href.split("#");
    let targetFile = rawFile;
    if (targetFile === "" || targetFile === "/") targetFile = "index.html";
    targetFile = targetFile.replace(/^\//, "");
    if (!targetFile) targetFile = file;
    const targetPath = path.join(root, targetFile);
    if (!fs.existsSync(targetPath)) {
      errors.push(`${file}: internal link target missing, ${href}`);
      continue;
    }
    if (fragment) {
      const targetHtml = targetFile === file ? html : fs.readFileSync(targetPath, "utf8");
      const escaped = fragment.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      if (!new RegExp(`\\bid=["']${escaped}["']`, "i").test(targetHtml)) errors.push(`${file}: fragment target missing, ${href}`);
    }
  }

  const staleTerms = ["tylersimmons.fathomrealty.com", "Nesha Rowe", "Slade MacDowell", "Simmons Stratton Group", "Matt’s Profile layout", "Fairway Mortgage"];
  for (const term of staleTerms) if (html.includes(term)) errors.push(`${file}: stale content found, ${term}`);
}

for (const jsonFile of ["data/site.json", "schema.json"]) {
  try {
    JSON.parse(fs.readFileSync(path.join(root, jsonFile), "utf8"));
  } catch (error) {
    errors.push(`${jsonFile}: invalid JSON, ${error.message}`);
  }
}

for (const expected of ["OAI-SearchBot", "GPTBot", "Google-Extended", "PerplexityBot", "ClaudeBot"]) {
  if (!fs.readFileSync(path.join(root, "robots.txt"), "utf8").includes(`User-agent: ${expected}`)) errors.push(`robots.txt: missing ${expected}`);
}

if (warnings.length) console.warn(warnings.join("\n"));
if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Validated ${htmlFiles.length} HTML pages, structured data, internal links, images, crawler rules, and JSON files.`);
}
