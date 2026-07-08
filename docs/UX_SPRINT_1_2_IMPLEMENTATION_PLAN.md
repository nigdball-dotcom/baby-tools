# Implementation Plan — BabyTools UX Sprint 1.2
**Date:** 2026-07-05  
**Status:** Awaiting approval — DO NOT implement until approved  
**Based on:** UX_SPRINT_1_2_AUDIT.md

---

## Sprint Scope

Sprint 1.2 completes the structural work deferred from Sprint 1.1, fixes two production bugs, and delivers a targeted set of high-impact product features.

**In scope:**
- `app/blog/page.tsx`
- `app/tools/diaper-cost/page.tsx`
- `components/BlogLayout.tsx`
- `components/RelatedArticles.tsx`
- `components/DiaperCalculator.tsx`
- `components/RecommendedProducts.tsx`
- New: `app/blog/topic/[slug]/page.tsx`
- Supporting: `package.json`, `app/globals.css`, `lib/utils.ts`, `lib/config.ts`

**Explicitly out of scope for Sprint 1.2:**
- Comparison mode in DiaperCalculator (Sprint 1.3)
- Email capture / waitlist (Sprint 1.3)
- Share buttons on articles (Sprint 1.3)
- Sticky TOC sidebar (Sprint 1.3)
- CTABanner / SectionHeader shared components (Sprint 1.3 — refactor)
- Hero H1 copy rewrite (SEO analysis needed)
- Author/editorial section (Sprint 1.3)
- Any new blog article content

---

## Phase Structure

```
Phase 1 — Fix broken production bugs (no approval needed: these are live defects)
Phase 2 — Complete Sprint 1.1 deferred work (structural cleanup)
Phase 3 — Category pages (new feature, highest IA impact)
Phase 4 — Product experience improvements (calculator + blog)
Phase 5 — Accessibility + QA pass
```

---

## Phase 1 — Fix Broken Production Bugs

These are live defects. They do not require product approval — implement immediately upon sprint start.

---

### P1-A: Install @tailwindcss/typography

**Problem:** `BlogLayout.tsx` applies Tailwind prose classes (`prose prose-blue prose-lg prose-headings:* prose-p:*`) but the typography plugin is not installed. Every blog article renders as unstyled plain HTML — no heading sizes, no paragraph spacing, no list indentation, no table styling.

**Fix:**

Step 1 — install:
```
npm install @tailwindcss/typography
```

Step 2 — enable in `app/globals.css`:
```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";
```

Step 3 — verify `BlogLayout.tsx` prose classes resolve correctly. Confirm that `prose-blue`, `prose-lg`, all modifier classes are available.

Step 4 — check that existing `not-prose` overrides on inline table blocks and decision boxes in article pages still work correctly (these use `not-prose my-4` to escape prose styles — this is correct behavior and should not break).

**Files to modify:**
- `package.json` — add `@tailwindcss/typography` to dependencies
- `app/globals.css` — add `@plugin` directive

**Estimated effort:** 30 minutes (install + verify in 2–3 representative articles)  
**Risk:** Low. The plugin is additive — it only applies styles to `prose` class contexts.  
**SEO impact:** Positive. Prose styles improve article readability and structure, which may improve Core Web Vitals (Content Layout Shift from reflow) and user dwell time.

---

### P1-B: Wire real affiliate links into RecommendedProducts

**Problem:** All three `affiliateUrl` values in `RecommendedProducts.tsx` are `'#'`. The "ดูสินค้า" button goes nowhere. Zero affiliate revenue.

**Fix:** Replace `'#'` with real affiliate URLs for Lazada Thailand or Shopee Thailand. These URLs should use the site's affiliate tracking parameters.

**Required action before coding:** Owner must provide 3 real affiliate URLs (one per product). This is an editorial/business task, not a coding task.

**Placeholder pattern:**
```ts
affiliateUrl: 'https://www.lazada.co.th/products/mamypoko-pants-m-i12345.html?aff_src=babytools',
```

Until real URLs are available, the "ดูสินค้า" button text should change to "ดูราคา (เร็วๆ นี้)" or the button should be temporarily hidden to avoid broken UX.

**Files to modify:**
- `components/RecommendedProducts.tsx` — update `affiliateUrl` values in `PRODUCTS` array; change `rel="noopener noreferrer sponsored"` remains correct

**Estimated effort:** 15 minutes (code change) + owner time to provide affiliate URLs  
**Risk:** None. Additive change.

---

## Phase 2 — Complete Sprint 1.1 Deferred Work

These items were explicitly identified as Sprint 1.2 tasks in the Sprint 1.1 plan.

---

### P2-A: Adopt Navbar in blog/page.tsx

**Problem:** `app/blog/page.tsx` has its own inline `<header>` block:
```tsx
<header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
  <div className="...flex...">
    <Link href="/">🍼 {SITE_NAME}</Link>
    <nav className="hidden gap-6 text-sm font-medium text-gray-500 sm:flex">
      <Link href="/tools/diaper-cost">คำนวณผ้าอ้อม</Link>
      <Link href="/blog" className="text-gray-900 font-semibold">บล็อก</Link>
    </nav>
  </div>
</header>
```

**Fix:** Replace with `<Navbar activeHref="/blog" />`.

**Import:**
```tsx
import Navbar from '@/components/layout/Navbar'
```

**Result:** Mobile hamburger menu, consistent sticky behavior, shared active state logic, consistent focus styles.

**Files to modify:** `app/blog/page.tsx` — remove inline `<header>`, add `<Navbar activeHref="/blog" />`  
**Estimated effort:** 20 minutes  
**Risk:** Very Low. Direct component swap.

---

### P2-B: Adopt Footer in blog/page.tsx

**Problem:** `app/blog/page.tsx` has:
```tsx
<footer className="border-t border-gray-100 py-10 mt-10">
  <div className="...text-center text-sm text-gray-400...">
    <p>© {new Date().getFullYear()} {SITE_NAME} · สร้างด้วยความรักสำหรับพ่อแม่ทุกคน</p>
  </div>
</footer>
```

**Fix:** Replace with `<Footer />`.

**Import:**
```tsx
import Footer from '@/components/layout/Footer'
```

**Files to modify:** `app/blog/page.tsx` — remove inline `<footer>`, add `<Footer />`  
**Estimated effort:** 10 minutes  
**Risk:** Very Low.

---

### P2-C: Adopt Navbar + Footer in diaper-cost/page.tsx

**Problem:** `app/tools/diaper-cost/page.tsx` has its own inline `<header>` (not sticky) and `<footer>`.

**Fix:** Replace both with `<Navbar activeHref="/tools/diaper-cost" />` and `<Footer />`.

Note: The `NAV_LINKS` array in `Navbar.tsx` currently contains:
```ts
{ label: 'คำนวณผ้าอ้อม', href: '/tools/diaper-cost' },
{ label: 'บล็อก', href: '/blog' },
{ label: 'เกี่ยวกับเรา', href: '/#about' },
```

So `activeHref="/tools/diaper-cost"` will correctly highlight the calculator link.

Additionally, the calculator page uses `<div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">` as the root. After adding Navbar and Footer, the structure should be:
```tsx
<>
  <Navbar activeHref="/tools/diaper-cost" />
  <main id="main-content" className="...">
    {/* existing content */}
  </main>
  <Footer />
</>
```

**Files to modify:** `app/tools/diaper-cost/page.tsx` — remove inline header/footer, add Navbar/Footer, wrap content in `<main id="main-content">`  
**Estimated effort:** 30 minutes  
**Risk:** Low. Structural change but no logic changes.

---

### P2-D: Adopt Navbar + Footer in BlogLayout.tsx

**Problem:** `components/BlogLayout.tsx` renders its own stripped-down `<header>` and `<footer>`:
```tsx
<header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
  <div className="...flex...items-center gap-4...">
    <Link href="/">🍼 BabyTools</Link>
    <span className="text-gray-200">|</span>
    <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-900">บล็อก</Link>
  </div>
</header>
```

**Fix:** Replace with `<Navbar activeHref="/blog" />` and `<Footer />`.

BlogLayout already receives a `slug` prop — no new prop is needed for Navbar.

After the change, `BlogLayout` imports:
```tsx
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
```

**Files to modify:** `components/BlogLayout.tsx` — replace inline header/footer with Navbar/Footer  
**Estimated effort:** 30 minutes  
**Risk:** Low. Applies to all 30 blog articles simultaneously via the shared component.

---

### P2-E: De-duplicate formatThaiDate

**Problem:** `formatThaiDate` is defined in `lib/utils.ts` (canonical) and duplicated in both `components/BlogLayout.tsx` (lines 18–25) and `app/blog/page.tsx` (lines 24–31).

**Fix:**

In `components/BlogLayout.tsx`:
```tsx
// Remove the local formatThaiDate function definition
// Add import:
import { formatThaiDate } from '@/lib/utils'
```

In `app/blog/page.tsx`:
```tsx
// Remove the local formatThaiDate function definition
// Add import:
import { formatThaiDate } from '@/lib/utils'
```

**Files to modify:**
- `components/BlogLayout.tsx` — remove local function, add import
- `app/blog/page.tsx` — remove local function, add import

**Estimated effort:** 15 minutes  
**Risk:** Very Low. Pure refactor — same function, same behavior.

---

### P2-F: Wire ArrowIcon into BlogLayout + blog/page

**Problem:** `ArrowIcon` is a shared component in `components/icons/ArrowIcon.tsx` but is not used in `BlogLayout.tsx` or `app/blog/page.tsx`, which both contain inline SVG copies.

**Fix:**

In `components/BlogLayout.tsx` CTA button (line ~130):
```tsx
import ArrowIcon from '@/components/icons/ArrowIcon'
// Replace inline SVG with:
<ArrowIcon className="h-4 w-4" />
```

In `app/blog/page.tsx` article list cards:
```tsx
import ArrowIcon from '@/components/icons/ArrowIcon'
// Replace inline SVG with:
<ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
```

Also: `components/ToolCard.tsx` still has an inline arrow SVG. Wire ArrowIcon here too.

**Files to modify:**
- `components/BlogLayout.tsx` — remove inline SVG, add ArrowIcon
- `app/blog/page.tsx` — remove inline SVG, add ArrowIcon
- `components/ToolCard.tsx` — remove inline SVG, add ArrowIcon

**Estimated effort:** 20 minutes  
**Risk:** Very Low.

---

### P2-G: Wire BlogCard into blog/page.tsx and RelatedArticles.tsx

**Problem:** `components/cards/BlogCard.tsx` is the canonical blog card but is only used in homepage sections. Two other places have their own card implementations:

1. `app/blog/page.tsx` — renders inline cards with `<h2 className="text-xl font-bold">` (larger, richer)
2. `components/RelatedArticles.tsx` — renders inline cards with its own markup

**Fix:**

**For RelatedArticles.tsx:** The RelatedArticles card is close to BlogCard's styling. Replace the inline card markup with `<BlogCard>`.

**For blog/page.tsx:** The blog index card is intentionally larger (`text-xl`, `p-6`, shows full description without clamp). Rather than forcing this into BlogCard as-is, add a `variant` prop:
```tsx
// components/cards/BlogCard.tsx
interface BlogCardProps {
  variant?: 'grid' | 'list'  // 'grid' = compact (default); 'list' = expanded
  // ...existing props
}
```

`variant="list"` renders `p-6`, `text-xl font-bold` title (no line-clamp), full description (no line-clamp), and shows the date.

This approach consolidates both implementations into one component while preserving the intentional size difference.

**Files to modify:**
- `components/cards/BlogCard.tsx` — add `variant` prop with `'list'` styling
- `components/RelatedArticles.tsx` — use `<BlogCard>`
- `app/blog/page.tsx` — use `<BlogCard variant="list">`

**Files to NOT modify:** Any individual blog article page files.

**Estimated effort:** 1.5 hours  
**Risk:** Medium. Changing RelatedArticles and blog/page visuals — verify appearance in both contexts.

---

### P2-H: Fix breadcrumb on calculator page

**Problem:** The calculator breadcrumb contains `{ label: 'เครื่องมือ', href: '/#tools' }` which is a fragile homepage anchor.

**Fix:** Remove the "เครื่องมือ" middle item. The breadcrumb becomes:
```
หน้าแรก → คำนวณค่าใช้จ่ายผ้าอ้อมเด็ก
```

This is cleaner and more accurate — there is no standalone tools page to link to.

**Files to modify:** `app/tools/diaper-cost/page.tsx` — update breadcrumbs array

**Estimated effort:** 5 minutes  
**Risk:** None. SEO neutral — the BreadcrumbList schema updates accordingly.

---

## Phase 3 — Category Pages

This is the highest-impact IA feature in Sprint 1.2. It makes BrowseByTopic functional and enables category-based discovery.

---

### P3-A: Build category page route

**What:** A dynamic route `app/blog/topic/[slug]/page.tsx` that shows all articles in a given topic category.

**URL structure:**
```
/blog/topic/diapers    → ผ้าอ้อมและของใช้เด็ก (9 articles)
/blog/topic/sleep      → การนอนของลูกน้อย (6 articles)
/blog/topic/feeding    → การให้นมลูก (6 articles)
/blog/topic/finance    → การวางแผนการเงิน (5 articles)
/blog/topic/health     → สุขภาพและการดูแล (2 articles)
/blog/topic/parenting  → คำแนะนำสำหรับพ่อแม่ (3 articles)
```

**Data model change needed in `lib/config.ts`:**

The current `BLOG_POSTS` entries use human-readable Thai category strings (`'คำแนะนำสำหรับพ่อแม่'`, `'การนอนของลูกน้อย'`). The `TOPICS` array uses English slugs (`'parenting'`, `'sleep'`). These are not currently connected.

A mapping must be added to connect topic slugs to category strings:

```ts
// lib/config.ts — add this
export const TOPIC_CATEGORY_MAP: Record<string, string[]> = {
  diapers:   ['คู่มือการเลือกผ้าอ้อม', 'รีวิวและเปรียบเทียบ', 'รีวิวสินค้า', 'ผ้าอ้อมและของใช้เด็ก'],
  sleep:     ['การนอนของลูกน้อย'],
  feeding:   ['การให้นมลูก'],
  finance:   ['การวางแผนการเงิน', 'งบประมาณครอบครัว'],
  health:    ['สุขภาพและการดูแล'],
  parenting: ['คำแนะนำสำหรับพ่อแม่'],
}
```

Note: The "diapers" topic maps to 4 distinct category strings in BLOG_POSTS (the categories are inconsistently named — some diaper articles are in 'รีวิวสินค้า', some in 'รีวิวและเปรียบเทียบ', some in 'ผ้าอ้อมและของใช้เด็ก'). The mapping must cover all variants or the article count will be wrong.

**Category page design:**
- Uses shared `Navbar` with `activeHref="/blog"`
- Page header: topic icon (large, `text-5xl`), topic label (`text-3xl font-extrabold`), article count
- Breadcrumb: หน้าแรก → บล็อก → [Topic Label]
- Article grid: `BlogCard variant="list"` in 1-column (mobile) / 2-column (desktop) layout
- CTA at bottom (calculator, for diaper/finance topics; "coming soon" for sleep/feeding)
- Schema: `BreadcrumbList` + `ItemList` for the article list

**Static generation:** Use `generateStaticParams` to pre-render all 6 category pages:
```ts
export function generateStaticParams() {
  return TOPICS.map(t => ({ slug: t.slug }))
}
```

**Metadata:**
```ts
export async function generateMetadata({ params }): Promise<Metadata> {
  const topic = TOPICS.find(t => t.slug === params.slug)
  return {
    title: `${topic.label} · บทความ BabyTools`,
    description: `รวมบทความเกี่ยวกับ${topic.label} สำหรับพ่อแม่ไทย`,
    alternates: { canonical: `${SITE_URL}/blog/topic/${params.slug}` },
  }
}
```

**Files to create:** `app/blog/topic/[slug]/page.tsx`  
**Files to modify:**
- `lib/config.ts` — add `TOPIC_CATEGORY_MAP`
- `app/sitemap.ts` — add category page routes to sitemap
- `components/sections/BrowseByTopic.tsx` — update `href` values from `/blog` to `/blog/topic/[slug]`
- `lib/config.ts` TOPICS array — update `href` values to `/blog/topic/[slug]`

**Estimated effort:** 3 hours  
**Risk:** Medium. New route + data model change. Must verify article counts match after mapping.

---

### P3-B: Add CategoryPill component

**What:** A reusable category badge that links to the category page.

```tsx
// components/CategoryPill.tsx
interface CategoryPillProps {
  category: string
  href?: string  // if provided, renders as <Link>; otherwise as <span>
}
```

When `href` is provided, it links to the category page. This allows article pages to have clickable category pills that navigate to the category listing.

**Finding the right href:** A utility function in `lib/utils.ts` maps a category string back to a topic slug:
```ts
export function getCategorySlug(category: string): string | null {
  for (const [slug, categories] of Object.entries(TOPIC_CATEGORY_MAP)) {
    if (categories.includes(category)) return slug
  }
  return null
}
```

**Usage in BlogLayout:**
```tsx
<CategoryPill 
  category={category} 
  href={getCategorySlug(category) ? `/blog/topic/${getCategorySlug(category)}` : undefined}
/>
```

**Files to create:** `components/CategoryPill.tsx`  
**Files to modify:**
- `lib/utils.ts` — add `getCategorySlug` utility
- `components/BlogLayout.tsx` — use `<CategoryPill>` instead of inline span
- `components/cards/BlogCard.tsx` — use `<CategoryPill>`
- `components/RelatedArticles.tsx` — use `<CategoryPill>`
- `app/blog/page.tsx` — use `<CategoryPill>`

**Estimated effort:** 1 hour  
**Risk:** Low. Component creation + adoption is mechanical.

---

### P3-C: Category-aware RelatedArticles

**Problem:** `RelatedArticles.tsx` returns the first 2 non-current posts regardless of category.

**Fix:**
```ts
// First: try to find 2 posts in the same category
const sameCategory = BLOG_POSTS.filter(
  p => p.slug !== currentSlug && p.category === currentCategory
).slice(0, 2)

// Fallback: if fewer than 2 in same category, fill with other posts
const fallback = BLOG_POSTS.filter(
  p => p.slug !== currentSlug && !sameCategory.find(r => r.slug === p.slug)
).slice(0, 2 - sameCategory.length)

const related = [...sameCategory, ...fallback]
```

`RelatedArticles` needs to accept `currentCategory` as a new prop:
```tsx
interface RelatedArticlesProps {
  currentSlug: string
  currentCategory: string
}
```

`BlogLayout.tsx` passes `category` prop through to `RelatedArticles`.

**Files to modify:**
- `components/RelatedArticles.tsx` — add category-aware selection logic, new prop
- `components/BlogLayout.tsx` — pass `category={category}` to `<RelatedArticles>`

**Estimated effort:** 45 minutes  
**Risk:** Low. Logic change with clear test cases.

---

## Phase 4 — Product Experience Improvements

---

### P4-A: Auto-calculate in DiaperCalculator

**What:** Remove the "คำนวณ" button requirement — results update automatically as the user types.

**How:** Replace the button-driven `calculate()` call with a `useEffect` that runs when form values change:

```ts
useEffect(() => {
  const dpd = parseFloat(form.diapersPerDay)
  const dpp = parseFloat(form.diapersPerPack)
  const pp = parseFloat(form.packPrice)

  if (isNaN(dpd) || isNaN(dpp) || isNaN(pp)) {
    setResults(null)
    return
  }
  if (dpd <= 0 || dpp <= 0 || pp <= 0) {
    setResults(null)
    return
  }

  const costPerDiaper = pp / dpp
  const dailyCost = dpd * costPerDiaper
  const monthlyCost = dailyCost * 30.44
  const yearlyCost = dailyCost * 365

  setResults({ costPerDiaper, dailyCost, monthlyCost, yearlyCost })
}, [form.diapersPerDay, form.diapersPerPack, form.packPrice])
```

The "คำนวณ" button becomes optional / removed. The error state becomes simpler (only show if user has typed something invalid, not if fields are empty).

The "เริ่มใหม่" button remains — it clears all fields.

**UX note:** Results should appear smoothly as the user types. Since the calculation is synchronous, there's no loading state needed.

**Files to modify:** `components/DiaperCalculator.tsx`  
**Estimated effort:** 1 hour  
**Risk:** Low. State logic change only, no DOM structure changes.

---

### P4-B: Add age-based diapers/day quick-select

**What:** Below the "จำนวนผ้าอ้อมที่ใช้ต่อวัน" label, add quick-select chips for common age ranges that pre-fill the suggested diaper count.

**Design:**
```
จำนวนผ้าอ้อมที่ใช้ต่อวัน
[แรกเกิด: 10] [1–3 เดือน: 8] [3–6 เดือน: 6] [6–12 เดือน: 5] [1–2 ปี: 4]
[input field]
```

Clicking a chip sets `form.diapersPerDay` to the suggested median value for that range. The input field remains editable — chips are just suggestion shortcuts.

This solves a real user pain point (parents don't know what number to enter) while keeping the form flexible.

**Files to modify:** `components/DiaperCalculator.tsx`  
**Estimated effort:** 1.5 hours  
**Risk:** Low. Additive UI change.

---

### P4-C: Improve result hierarchy

**Problem:** Both "ค่าใช้จ่ายต่อเดือน" and "ค่าใช้จ่ายต่อปี" use `highlight={true}` (blue background), giving them equal visual weight.

**Fix:** Only "ค่าใช้จ่ายต่อเดือน" should be `highlight`. "ค่าใช้จ่ายต่อปี" should be secondary. Change the yearly card to use a distinct style — for example, `bg-blue-50 text-blue-900` instead of the solid blue — so it's visually notable but clearly subordinate to monthly.

Additionally, make the monthly result card larger than the others:
```
[ราคาต่อชิ้น  (gray)]  [ต่อวัน (gray)]
[ต่อเดือน (blue, 2 columns wide, larger text)]
[ต่อปี (light-blue, full width)]
```

This restructures the 2×2 grid into a more intentional hierarchy.

**Files to modify:** `components/DiaperCalculator.tsx` — ResultCard layout and highlighting logic  
**Estimated effort:** 45 minutes  
**Risk:** Low.

---

### P4-D: Add products to comparison articles

**What:** Insert `<RecommendedProducts />` into the 5 highest-intent comparison articles:
- `mamypoko-vs-babylove`
- `huggies-vs-mamypoko`
- `babylove-vs-huggies`
- `diaper-brand-comparison`
- `best-overnight-diaper`

**Placement:** After the article body (after the verdict/conclusion section), before the FAQ — the same position as the calculator CTA in BlogLayout. Or place it inside the article body as an inline section.

**Implementation options:**

**Option A (recommended):** Pass an optional `showProducts?: boolean` prop to `BlogLayout`. When true, render `<RecommendedProducts />` after the calculator CTA. Comparison articles set `showProducts={true}`.

**Option B:** Import and render `<RecommendedProducts />` directly in each comparison article's `page.tsx`, placed within the article body (after the verdict section, using `not-prose` wrapper).

Option A is cleaner and easier to extend. Option B gives per-article placement control.

**Files to modify:**
- `components/BlogLayout.tsx` — add `showProducts?: boolean` prop (Option A)
- `app/blog/mamypoko-vs-babylove/page.tsx` — pass `showProducts={true}`
- `app/blog/huggies-vs-mamypoko/page.tsx` — pass `showProducts={true}`
- `app/blog/babylove-vs-huggies/page.tsx` — pass `showProducts={true}`
- `app/blog/diaper-brand-comparison/page.tsx` — pass `showProducts={true}`
- `app/blog/best-overnight-diaper/page.tsx` — pass `showProducts={true}`

**Estimated effort:** 1 hour  
**Risk:** Low. Additive change — if affiliate links are real (P1-B), this directly generates revenue.

---

### P4-E: Context-aware CTA in BlogLayout

**Problem:** Every blog article shows the same "คำนวณค่าผ้าอ้อมของลูกคุณ" CTA regardless of article topic. Sleep and feeding articles have no relevant CTA.

**Fix:** Pass `ctaVariant` to BlogLayout based on the article's category mapping:

```tsx
type CTAVariant = 'diaper' | 'sleep' | 'feeding' | 'finance' | 'health' | 'parenting'
```

Define CTA content per variant:

| Variant | Heading | Description | CTA Label | CTA Href |
|---|---|---|---|---|
| `diaper` | คำนวณค่าผ้าอ้อมของลูกคุณ | กรอกแค่ 3 ค่า ดูผลลัพธ์ทันที | เปิดเครื่องคำนวณ | /tools/diaper-cost |
| `finance` | คำนวณค่าผ้าอ้อมรายเดือน | วางแผนงบประมาณได้ทันที | เปิดเครื่องคำนวณ | /tools/diaper-cost |
| `sleep` | ตารางนอนเด็ก (กำลังมา) | เครื่องมือติดตามการนอนสำหรับลูกน้อย กำลังมาเร็วๆ นี้ | ดูบทความการนอน | /blog/topic/sleep |
| `feeding` | ตารางให้นม (กำลังมา) | เครื่องมือวางแผนการให้นม กำลังมาเร็วๆ นี้ | ดูบทความการให้นม | /blog/topic/feeding |
| `health` | อ่านบทความสุขภาพเพิ่มเติม | คำแนะนำด้านสุขภาพจากผู้เชี่ยวชาญ | ดูบทความสุขภาพ | /blog/topic/health |
| `parenting` | คำนวณค่าใช้จ่ายเลี้ยงลูก | เครื่องคำนวณค่าผ้าอ้อมฟรี | เปิดเครื่องคำนวณ | /tools/diaper-cost |

**Implementation:** `BlogLayout` maps `category` prop → `CTAVariant` using the `getCategorySlug` utility (from P3-B), then selects the appropriate CTA content from a config object.

This does not require changes to any individual article pages — BlogLayout already receives the `category` prop.

**Files to modify:** `components/BlogLayout.tsx` — CTA section logic  
**Estimated effort:** 2 hours  
**Risk:** Medium. Logic change + must verify all 6 CTA variants render correctly across article types.

---

### P4-F: Update blog index to use CategoryPill + show category filter

**What:** Upgrade the blog index page to be more useful for discovery.

**Sub-tasks:**

**F1 — Category filter tabs:**
Add a horizontal filter bar above the article list with topic tabs:
```
[ทั้งหมด] [ผ้าอ้อม] [การนอน] [การให้นม] [การเงิน] [สุขภาพ] [พ่อแม่]
```
Active tab: `bg-blue-600 text-white`; inactive: `bg-white border-gray-200 text-gray-700`

Filter state managed with `useState`. No URL change needed (category pages handle that). This is a pure UI filter for the blog index experience.

On click, filter `BLOG_POSTS` to show only articles matching the selected topic's category strings (using `TOPIC_CATEGORY_MAP`).

**F2 — Wire BlogCard variant="list":**
Replace the blog index's inline card markup with `<BlogCard variant="list">` (from P2-G).

**F3 — Move CTA earlier:**
Place the calculator CTA after the filter tabs (before the article list) rather than after all 30 articles. A slim banner — not the full blue box — at the top of the list would increase CTR without breaking the reading flow.

**Files to modify:** `app/blog/page.tsx`  
**Estimated effort:** 2.5 hours (category filter is the main work)  
**Risk:** Medium. UI state logic + CategoryPill + BlogCard adoption in one file.

---

## Phase 5 — Accessibility + QA Pass

---

### P5-A: Add `id="main-content"` to calculator page

The skip link in `app/layout.tsx` jumps to `#main-content`. This anchor is on the homepage `<main>` but missing from the calculator page (which uses a `<div>` root).

**Fix:** In `app/tools/diaper-cost/page.tsx`, after adding `<Navbar>` in P2-C, wrap content in `<main id="main-content" className="...">`.

**Files to modify:** `app/tools/diaper-cost/page.tsx` (done as part of P2-C)  
**Estimated effort:** 0 (included in P2-C)

---

### P5-B: Add `id="main-content"` to blog pages

BlogLayout renders `<main className="mx-auto max-w-3xl...">`. Add `id="main-content"`.

**Files to modify:** `components/BlogLayout.tsx`  
**Estimated effort:** 2 minutes (included in P2-D cleanup)

---

### P5-C: Verify focus styles after Navbar adoption

After wiring Navbar into all pages (P2-A through P2-D), do a focused pass to verify:
- All nav links have `focus-visible:ring-2` (already in Navbar)
- All CTA buttons have `focus-visible:ring-2` (verify in DiaperCalculator, BlogLayout CTA, blog/page CTA)
- All BlogCard links have focus rings (already in BlogCard)
- Calculator inputs have focus rings (already: `focus:border-blue-500 focus:ring-2 focus:ring-blue-100`)

**Estimated effort:** 30 minutes (manual keyboard tabbing test)

---

## Files Summary

### Files to CREATE (Sprint 1.2)

| File | Purpose | Phase |
|---|---|---|
| `app/blog/topic/[slug]/page.tsx` | Category pages | P3-A |
| `components/CategoryPill.tsx` | Reusable category badge with optional link | P3-B |

### Files to MODIFY (Sprint 1.2)

| File | Changes | Phase(s) |
|---|---|---|
| `package.json` | Add @tailwindcss/typography | P1-A |
| `app/globals.css` | Add @plugin directive | P1-A |
| `components/RecommendedProducts.tsx` | Real affiliate URLs | P1-B |
| `app/blog/page.tsx` | Navbar, Footer, BlogCard, ArrowIcon, formatThaiDate dedup, CategoryPill, category filter | P2-A, P2-B, P2-E, P2-F, P2-G, P3-B, P4-F |
| `app/tools/diaper-cost/page.tsx` | Navbar, Footer, `<main>`, breadcrumb fix | P2-C, P2-H |
| `components/BlogLayout.tsx` | Navbar, Footer, formatThaiDate dedup, ArrowIcon, `main` id, context-aware CTA, showProducts prop, CategoryPill | P2-D, P2-E, P2-F, P3-B, P4-D, P4-E, P5-B |
| `components/cards/BlogCard.tsx` | Add `variant="list"` prop | P2-G |
| `components/RelatedArticles.tsx` | Category-aware logic, BlogCard, CategoryPill | P2-G, P3-B, P3-C |
| `components/DiaperCalculator.tsx` | Auto-calculate, age quick-select, result hierarchy | P4-A, P4-B, P4-C |
| `components/ToolCard.tsx` | Wire ArrowIcon | P2-F |
| `lib/config.ts` | Add TOPIC_CATEGORY_MAP, update TOPICS href values | P3-A |
| `lib/utils.ts` | Add getCategorySlug utility | P3-B |
| `app/sitemap.ts` | Add category page routes | P3-A |
| `app/blog/mamypoko-vs-babylove/page.tsx` | showProducts={true} | P4-D |
| `app/blog/huggies-vs-mamypoko/page.tsx` | showProducts={true} | P4-D |
| `app/blog/babylove-vs-huggies/page.tsx` | showProducts={true} | P4-D |
| `app/blog/diaper-brand-comparison/page.tsx` | showProducts={true} | P4-D |
| `app/blog/best-overnight-diaper/page.tsx` | showProducts={true} | P4-D |

### Files NOT MODIFIED (Sprint 1.2)

| File | Next action |
|---|---|
| All other `app/blog/[slug]/page.tsx` (25 articles) | Sprint 1.3 — only receive passive improvements via BlogLayout |
| `components/Hero.tsx` | Sprint 1.3 — H1 copy rewrite pending SEO analysis |
| `components/About.tsx` | Sprint 1.3 — email capture / waitlist |
| `components/FAQ.tsx` | Sprint 1.3 — no changes needed |
| `components/Breadcrumb.tsx` | Sprint 1.3 — no changes needed |
| `app/layout.tsx` | No changes needed |
| `app/opengraph-image.tsx` | No changes needed |
| `app/sitemap.ts` | Modified in P3-A only |
| `app/robots.ts` | No changes needed |

---

## Implementation Order

```
Step 1 — Production fixes (do first, no approval gates):
  P1-A  Install @tailwindcss/typography                        (30 min)
  P1-B  Wire real affiliate links (owner provides URLs)        (15 min + owner time)

Step 2 — Shared component adoption (no new features, pure cleanup):
  P2-E  De-duplicate formatThaiDate (utils import)            (15 min)
  P2-F  Wire ArrowIcon in BlogLayout, blog/page, ToolCard     (20 min)
  P2-H  Fix calculator breadcrumb                             (5 min)
  P2-D  BlogLayout: Navbar + Footer + main id                 (30 min)
  P2-A  blog/page: Navbar                                     (20 min)
  P2-B  blog/page: Footer                                     (10 min)
  P2-C  diaper-cost/page: Navbar + Footer + main             (30 min)

Step 3 — BlogCard adoption:
  P2-G  BlogCard variant="list" + RelatedArticles + blog/page (1.5 hrs)

Step 4 — Category infrastructure:
  P3-A  Category pages + config changes + sitemap             (3 hrs)
  P3-B  CategoryPill component + getCategorySlug util         (1 hr)
  P3-C  RelatedArticles category-aware logic                  (45 min)

Step 5 — Product improvements:
  P4-A  DiaperCalculator auto-calculate                       (1 hr)
  P4-B  DiaperCalculator age quick-select                     (1.5 hrs)
  P4-C  DiaperCalculator result hierarchy                     (45 min)
  P4-D  Products on comparison articles                       (1 hr)
  P4-E  Context-aware CTA in BlogLayout                      (2 hrs)
  P4-F  Blog index category filter + BlogCard + CategoryPill (2.5 hrs)

Step 6 — QA pass:
  P5-C  Focus styles verification                             (30 min)
  Full build + lint                                           (15 min)
```

**Total estimated effort: ~18 hours**

---

## Priorities Summary

| Item | Priority | Effort | Impact |
|---|---|---|---|
| @tailwindcss/typography | P0 | 30 min | Critical — all blog articles broken |
| Real affiliate links | P0 | 15 min | Critical — zero revenue |
| Navbar/Footer on blog + calculator | P1 | 1.5 hrs | Critical — no mobile nav |
| formatThaiDate / ArrowIcon dedup | P1 | 35 min | Medium — code quality |
| BlogCard adoption | P1 | 1.5 hrs | Medium — consistency |
| Category pages | P2 | 3 hrs | High — makes IA functional |
| CategoryPill component | P2 | 1 hr | High — category navigation |
| Category-aware RelatedArticles | P2 | 45 min | High — article engagement |
| Products on comparison articles | P2 | 1 hr | High — revenue |
| Auto-calculate | P2 | 1 hr | Medium — UX friction |
| Age quick-select | P2 | 1.5 hrs | Medium — UX |
| Result hierarchy | P2 | 45 min | Low — polish |
| Context-aware CTA | P3 | 2 hrs | Medium — engagement |
| Blog index category filter | P3 | 2.5 hrs | Medium — discoverability |

---

## Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Typography plugin breaks existing not-prose overrides | Low | Medium | Test 3 representative articles before merging |
| TOPIC_CATEGORY_MAP miscounts articles | Medium | Low | Unit test: count articles per topic, verify matches TOPICS.count |
| BlogCard variant="list" breaks blog index layout | Low | Medium | Side-by-side visual comparison before/after |
| Context-aware CTA shows wrong variant | Medium | Medium | Create a test matrix: run each category article, verify CTA |
| Category pages return 0 articles for a topic | Low | Low | Add console.warn + fallback in generateStaticParams |
| Affiliate URL format rejected by affiliate program | Low | High | Owner validates URLs before commit |

---

## Reusable Components Built in Sprint 1.2

| Component | Sprint 1.2 Usage | Future Sprints |
|---|---|---|
| `CategoryPill` | BlogCard, BlogLayout, RelatedArticles, blog/page | Any new content type with categories |
| `BlogCard variant="list"` | Blog index, category pages | Any future list page |
| Category pages (dynamic route) | 6 category pages | Scales automatically as new articles are added |

---

## QA Checklist

### Phase 1 — Production fixes
- [ ] `npm run build` succeeds after typography plugin install
- [ ] Open 3 representative blog articles — verify h2/h3 sizing, paragraph spacing, list indentation, table styling are applied
- [ ] Open a blog article with `not-prose` tables — verify they are not affected by prose styles
- [ ] "ดูสินค้า" button in RecommendedProducts navigates to a real product page (not '#')
- [ ] Affiliate links use correct `rel="noopener noreferrer sponsored"` ✓ (already in place)

### Phase 2 — Shared component adoption
- [ ] `/blog` — Navbar renders with hamburger on mobile, active "บล็อก" link on desktop
- [ ] `/blog` — Footer renders with brand text and nav columns
- [ ] `/tools/diaper-cost` — Navbar renders with hamburger on mobile, active "คำนวณผ้าอ้อม" link
- [ ] `/tools/diaper-cost` — Footer renders
- [ ] `/blog/[any-slug]` — Navbar renders, active "บล็อก" link
- [ ] `/blog/[any-slug]` — Footer renders
- [ ] Mobile (375px): hamburger visible, tapping opens dropdown on blog + calculator + articles
- [ ] Skip link works on all 4 page types (tab → skip link appears → Enter → focus jumps past nav)
- [ ] Calculator breadcrumb: only 2 items (หน้าแรก → คำนวณ)

### Phase 3 — Category pages
- [ ] `/blog/topic/diapers` renders 9 articles (verify count)
- [ ] `/blog/topic/sleep` renders 6 articles
- [ ] `/blog/topic/feeding` renders 6 articles
- [ ] `/blog/topic/finance` renders 5 articles
- [ ] `/blog/topic/health` renders 2 articles
- [ ] `/blog/topic/parenting` renders 3 articles
- [ ] Category page: Navbar has active "บล็อก" link
- [ ] Category page: breadcrumb = หน้าแรก → บล็อก → [Topic]
- [ ] BrowseByTopic on homepage: clicking "การนอนของลูกน้อย" navigates to `/blog/topic/sleep`
- [ ] `/blog/topic/invalid-slug` — Next.js returns 404
- [ ] All 6 category pages appear in `/sitemap.xml`
- [ ] Category pill on a blog article is clickable and links to correct category page
- [ ] RelatedArticles: reading a sleep article shows sleep-related articles as related

### Phase 4 — Product improvements
- [ ] DiaperCalculator: typing in any field auto-updates results without clicking "คำนวณ"
- [ ] DiaperCalculator: age chip "แรกเกิด: 10" pre-fills diapers/day with 10
- [ ] DiaperCalculator: monthly result is visually dominant (larger/bolder) vs. yearly
- [ ] `mamypoko-vs-babylove` article: RecommendedProducts section visible after verdict section
- [ ] Comparison articles: "ดูสินค้า" buttons link to real product pages (P1-B prerequisite)
- [ ] BlogLayout on sleep article: CTA shows sleep-related content, not diaper calculator
- [ ] BlogLayout on diaper article: CTA still shows calculator correctly
- [ ] Blog index: clicking "การนอน" tab filters to sleep articles only
- [ ] Blog index: clicking "ทั้งหมด" shows all 30 articles
- [ ] Blog index: cards use `BlogCard variant="list"` (h2, larger, full description)

### Phase 5 — Accessibility
- [ ] All interactive elements (nav links, buttons, cards, inputs, category pills) show visible focus ring when tabbed
- [ ] Screen reader announces nav as "เมนูหลัก" on all pages (via shared Navbar)
- [ ] Calculator `<main id="main-content">` exists

### Cross-browser / device
- [ ] iOS Safari (375px) — Navbar mobile menu opens/closes on all pages
- [ ] Chrome Android (360px) — Category filter tabs scroll horizontally without overflow
- [ ] Chrome desktop (1280px) — Category pages: 2-column article grid
- [ ] Chrome desktop (768px) — Blog index category filter tabs wrap correctly

### SEO regression check
- [ ] All 30 blog article canonical URLs unchanged
- [ ] All 30 blog article H1 text unchanged
- [ ] All 30 blog article JSON-LD schemas still present
- [ ] 6 new category pages have correct canonical URLs
- [ ] `npm run build` — no static generation errors
- [ ] `/sitemap.xml` contains all 30 blog articles + 6 category pages + 3 static routes

### Blog/Calculator regression (confirm existing content unchanged)
- [ ] Article body prose styles now rendering (visual upgrade, not regression)
- [ ] Calculator logic produces same numeric results as before
- [ ] Calculator reset button clears all fields
- [ ] FAQ accordion open/close works on article pages
- [ ] Redirect `/tools/diaper-calculator` → `/tools/diaper-cost` still works

---

## Rollout Plan

**Recommended branch:** `feat/ux-sprint-1.2`

**Deploy order:**

1. **Production hotfix PR (immediate):** P1-A (typography) only — merge and deploy immediately as a bugfix before the full sprint. This fixes the live blog article rendering bug without any risk.

2. **Sprint 1.2 main PR:** All remaining changes on `feat/ux-sprint-1.2`. Review against QA checklist before merge.

3. **Affiliate links:** Merge P1-B only after owner provides real URLs and validates they track correctly in the affiliate dashboard.

**Do not deploy until:**
- [ ] `npm run build` passes with zero errors
- [ ] QA checklist Phase 1–5 is complete
- [ ] At least one representative article from each category type verified in browser
- [ ] Mobile test on at least 2 real devices (iOS + Android) for Navbar

---

*Plan complete. Awaiting approval to begin implementation.*
