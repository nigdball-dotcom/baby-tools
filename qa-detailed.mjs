import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';

const OUT = '/tmp/babytools-qa';
await mkdir(OUT, { recursive: true });

const URL = 'http://localhost:3000';
const browser = await chromium.launch({ headless: true });

// ── Desktop 1280px ─────────────────────────────────────────────────────────
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: 'networkidle' });

  // Verify "View All Articles" section is present by section, not text match
  const viewAllSection = await page.locator('section').filter({ has: page.locator('a[href="/blog"]') }).last();
  const viewAllVisible = await viewAllSection.isVisible();
  const viewAllText = await viewAllSection.locator('a[href="/blog"]').last().textContent();
  console.log(`[desktop] View All Articles section visible: ${viewAllVisible}`);
  console.log(`[desktop] View All Articles link text: "${viewAllText?.trim()}"`);

  // Verify Browse by Topic has exactly 6 cards
  const topicSection = page.locator('section').filter({ hasText: 'เลือกดูตามหัวข้อ' });
  const topicLinks = await topicSection.locator('a').count();
  console.log(`[desktop] Browse by Topic links: ${topicLinks} (expected 6)`);

  // Verify footer text
  const footerText = await page.locator('footer').textContent();
  console.log(`[desktop] Footer present: ${footerText?.includes('BabyTools')}`);

  await page.screenshot({ path: `${OUT}/desktop-full.png`, fullPage: true });
  await page.screenshot({ path: `${OUT}/desktop-fold.png` });

  // Scroll to each section and capture
  await page.locator('section').filter({ hasText: 'เครื่องมือสำหรับพ่อแม่' }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${OUT}/desktop-tools.png` });

  await page.locator('section').filter({ hasText: 'เลือกดูตามหัวข้อ' }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${OUT}/desktop-topics.png` });

  await page.locator('section').filter({ hasText: 'บทความยอดนิยม' }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${OUT}/desktop-popular.png` });

  await page.locator('section[id="about"]').scrollIntoViewIfNeeded().catch(async () => {
    await page.locator('section').filter({ hasText: 'สร้างมาเพื่อพ่อแม่ยุคใหม่' }).scrollIntoViewIfNeeded();
  });
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${OUT}/desktop-about.png` });

  await page.locator('section').filter({ hasText: 'บทความล่าสุด' }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${OUT}/desktop-latest.png` });

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${OUT}/desktop-footer.png` });

  await ctx.close();
  console.log('[desktop] done');
}

// ── Tablet 768px ───────────────────────────────────────────────────────────
{
  const ctx = await browser.newContext({ viewport: { width: 768, height: 1024 } });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.screenshot({ path: `${OUT}/tablet-full.png`, fullPage: true });
  await page.screenshot({ path: `${OUT}/tablet-fold.png` });

  await page.locator('section').filter({ hasText: 'เลือกดูตามหัวข้อ' }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${OUT}/tablet-topics.png` });

  await ctx.close();
  console.log('[tablet] done');
}

// ── Mobile 375px ───────────────────────────────────────────────────────────
{
  const ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.screenshot({ path: `${OUT}/mobile-fold.png` });
  await page.screenshot({ path: `${OUT}/mobile-full.png`, fullPage: true });

  // Open hamburger
  await page.locator('button[aria-label="เปิดเมนู"]').click();
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${OUT}/mobile-menu-open.png` });
  await page.locator('button[aria-label="ปิดเมนู"]').click();
  await page.waitForTimeout(300);

  await page.locator('section').filter({ hasText: 'เลือกดูตามหัวข้อ' }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${OUT}/mobile-topics.png` });

  await ctx.close();
  console.log('[mobile] done');
}

await browser.close();

import { readdirSync, statSync } from 'fs';
const files = readdirSync(OUT).filter(f => f.endsWith('.png'));
console.log(`\nScreenshots captured (${files.length}):`);
files.forEach(f => console.log(`  ${OUT}/${f}  (${Math.round(statSync(`${OUT}/${f}`).size/1024)}KB)`));
