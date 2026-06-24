import { chromium } from 'playwright';

const URL = process.env.URL || 'http://localhost:4123';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await chromium.launch({ channel: 'chrome' });

// Desktop dark — full page
const d = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const dp = await d.newPage();
await dp.goto(URL, { waitUntil: 'networkidle' });
await sleep(1000);
await dp.screenshot({ path: '/tmp/shots/desktop-top.png' });
await dp.screenshot({ path: '/tmp/shots/desktop-full.png', fullPage: true });

// Light
await dp.locator('button[aria-label*="theme"]').first().click();
await sleep(700);
await dp.screenshot({ path: '/tmp/shots/desktop-light.png', fullPage: true });
await d.close();

// Mobile dark
const m = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
const mp = await m.newPage();
await mp.goto(URL, { waitUntil: 'networkidle' });
await sleep(1000);
await mp.screenshot({ path: '/tmp/shots/mobile-full.png', fullPage: true });
await m.close();

await browser.close();
console.log('done');
