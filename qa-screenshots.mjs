import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';

const OUT = '/tmp/babytools-qa';
await mkdir(OUT, { recursive: true });

const URL = 'http://localhost:3000';

const VIEWPORTS = [
  { name: 'desktop', width: 1280, height: 900 },
  { name: 'tablet',  width: 768,  height: 1024 },
  { name: 'mobile',  width: 375,  height: 812 },
];

const browser = await chromium.launch({ headless: true });

for (const vp of VIEWPORTS) {
  const ctx = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();

  // ── Full page ──────────────────────────────────────────────────────────────
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.screenshot({
    path: `${OUT}/${vp.name}-full.png`,
    fullPage: true,
  });

  // ── Above fold ─────────────────────────────────────────────────────────────
  await page.screenshot({ path: `${OUT}/${vp.name}-fold.png` });

  // ── Verify section headings present ────────────────────────────────────────
  const sections = [
    'เครื่องมือสำหรับพ่อแม่',
    'เลือกดูตามหัวข้อ',
    'บทความยอดนิยม',
    'สร้างมาเพื่อพ่อแม่ยุคใหม่',
    'บทความล่าสุด',
    'ดูบทความทั้งหมด',
  ];
  for (const txt of sections) {
    const el = page.getByText(txt).first();
    const vis = await el.isVisible().catch(() => false);
    console.log(`[${vp.name}] "${txt}" → ${vis ? '✅ present' : '❌ MISSING'}`);
  }

  // ── Count ToolCards (live + placeholder) ──────────────────────────────────
  const toolCards = await page.locator('a[href="/tools/diaper-cost"]').count();
  const placeholders = await page.getByText('เร็วๆ นี้').count();
  console.log(`[${vp.name}] Live tool cards: ${toolCards}  |  "เร็วๆ นี้" badges: ${placeholders}`);

  // ── Count topic cards ─────────────────────────────────────────────────────
  const topicCards = await page.getByText('บทความ').count();
  console.log(`[${vp.name}] Topic count labels (should be 6): ${topicCards}`);

  // ── Count Popular Article cards ───────────────────────────────────────────
  const popularSection = page.locator('section').filter({ hasText: 'บทความยอดนิยม' });
  const popularCards = await popularSection.locator('a[href^="/blog/"]').count();
  console.log(`[${vp.name}] Popular article cards: ${popularCards}`);

  // ── Count Latest Article cards ────────────────────────────────────────────
  const latestSection = page.locator('section').filter({ hasText: 'บทความล่าสุด' });
  const latestCards = await latestSection.locator('a[href^="/blog/"]').count();
  console.log(`[${vp.name}] Latest article cards: ${latestCards}`);

  // ── Check nav ─────────────────────────────────────────────────────────────
  const desktopNav = await page.locator('nav[aria-label="เมนูหลัก"]').first().isVisible();
  console.log(`[${vp.name}] Desktop nav visible: ${desktopNav}`);

  if (vp.name === 'mobile') {
    // hamburger should be visible
    const burger = await page.locator('button[aria-label="เปิดเมนู"]').isVisible();
    console.log(`[${vp.name}] Hamburger button visible: ${burger}`);

    // screenshot of open menu
    await page.locator('button[aria-label="เปิดเมนู"]').click();
    await page.waitForTimeout(400);
    await page.screenshot({ path: `${OUT}/mobile-menu-open.png` });

    const menuLinks = await page.locator('#mobile-nav-menu a').count();
    console.log(`[${vp.name}] Mobile menu links: ${menuLinks}`);

    // close
    await page.locator('button[aria-label="ปิดเมนู"]').click();
    await page.waitForTimeout(300);
  }

  // ── Skip link ─────────────────────────────────────────────────────────────
  const skipLink = await page.locator('a[href="#main-content"]').isVisible().catch(() => false);
  console.log(`[${vp.name}] Skip link in DOM: ${!!(await page.locator('a[href="#main-content"]').count())}`);

  // ── Footer ────────────────────────────────────────────────────────────────
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${OUT}/${vp.name}-footer.png` });

  await ctx.close();
  console.log(`[${vp.name}] screenshots saved.\n`);
}

await browser.close();
console.log('All screenshots done →', OUT);
