// Usage: node shot.mjs <html> <out.png> <width> <height> [fullPage=1]
import { chromium } from 'playwright';
const [, , html, out, w, h, full = '1'] = process.argv;
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: +w, height: +h }, deviceScaleFactor: 1 });
await page.goto('file://' + html, { waitUntil: 'networkidle' });
await page.waitForTimeout(800);
const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
await page.screenshot({ path: out, fullPage: full === '1' });
console.log(JSON.stringify({ out, horizontalOverflowPx: overflow }));
await browser.close();
