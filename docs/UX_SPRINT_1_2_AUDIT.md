# UX & Product Audit — BabyTools Sprint 1.2
**Date:** 2026-07-05  
**Scope:** All pages, all shared components, full product experience  
**Based on:** Complete codebase read — app/, components/, lib/, styles/, public/, docs/  
**Status:** Audit complete — read-only, no source files modified

---

## Sprint 1.1 Completion Summary

Sprint 1.1 delivered the homepage rebuild. The following are confirmed completed:

| Component | Status |
|---|---|
| `components/layout/Navbar.tsx` | ✓ Done — sticky, mobile hamburger, aria-expanded, Escape key |
| `components/layout/Footer.tsx` | ✓ Done — brand + nav columns, 4-column layout |
| `components/cards/BlogCard.tsx` | ✓ Done — shared card with ArrowIcon |
| `components/cards/ToolPlaceholderCard.tsx` | ✓ Done — "เร็วๆ นี้" placeholder cards |
| `components/icons/ArrowIcon.tsx` | ✓ Done — shared SVG |
| `components/sections/PopularTools.tsx` | ✓ Done — 1 live + 2 coming-soon cards |
| `components/sections/BrowseByTopic.tsx` | ✓ Done — 6 topic cards |
| `components/sections/PopularArticles.tsx` | ✓ Done — 6 curated posts |
| `components/sections/LatestArticles.tsx` | ✓ Done — 6 latest posts |
| `lib/utils.ts` | ✓ Done — formatThaiDate |
| `app/layout.tsx` | ✓ Done — skip link |
| `app/page.tsx` | ✓ Done — new section order, 6+6 blog posts |
| `lib/config.ts` | ✓ Done — POPULAR_POST_SLUGS, TOPICS |

**Still deferred from Sprint 1.1 (now Sprint 1.2 scope):**

| Item | Reason for Deferral |
|---|---|
| Wire Navbar/Footer into blog/page, diaper-cost/page, BlogLayout | Sprint 1.1 homepage only |
| @tailwindcss/typography plugin | Blog pages out of scope |
| formatThaiDate de-duplication in BlogLayout + blog/page | Files out of scope |
| ArrowIcon wiring in BlogLayout + blog/page | Files out of scope |
| BlogCard wiring in blog/page + RelatedArticles | Files out of scope |
| Blog index redesign | Out of scope |
| Calculator page redesign | Out of scope |
| Category pages | Requires new routes |
| BrowseByTopic → /blog/topic/[slug] links | Requires category pages first |

---

## 1. Calculator UX Audit

### 1.1 Page Wrapper

The calculator page (`/tools/diaper-cost`) still uses its own inline `<header>` and `<footer>`, not the shared `Navbar`/`Footer` components built in Sprint 1.1.

**Inline header differences vs. shared Navbar:**
- Not sticky (`border-b border-gray-100 bg-white/80 backdrop-blur-md` without `sticky top-0`)
- Missing hamburger button — zero mobile navigation
- Shows "เครื่องมือ" linking to `/#tools` (anchors to homepage) rather than having a tools dropdown
- No `aria-current`, no focus-visible styles, no mobile fallback

This means mobile users on the calculator page have no navigation at all — the same bug that existed on the homepage before Sprint 1.1 is still present on all non-homepage pages.

### 1.2 Input Flow

The form has 3 fields: ผ้าอ้อม/วัน → ชิ้น/แพ็ก → ราคา/แพ็ก. The input flow is clean and logical.

**Issues:**

**No auto-calculate.** The user must fill all 3 fields and press "คำนวณ" to see results. Modern calculator UX (especially for parents on mobile) auto-updates as inputs change. The 3-field form is simple enough that `useEffect` on any input change would eliminate a friction point. This is especially important given the "ผลลัพธ์แม่นยำทันที" (instant results) promise in the marketing copy.

**No brand quick-fill.** A user who just wants to know what MamyPoko M (60 pcs, ~370 baht) costs per month must type "60" and "370" manually. A row of quick-fill preset buttons ("MamyPoko M", "BabyLove M", "Huggies Gold M") would eliminate lookup friction and pre-populate the form with current market prices. This doubles as a discovery mechanism — users who didn't know the price learn it. Pre-fill buttons also create implicit comparison framing.

**No comparison mode.** The most common user question is "MamyPoko หรือ BabyLove คุ้มกว่า?" (which is better value?). The current calculator answers one at a time. A side-by-side "เปรียบเทียบ 2 ยี่ห้อ" mode would directly answer this question and is the strongest possible argument for using the tool over just Googling the price.

**No diaper count by age suggestion.** The hint text says "เด็กแรกเกิดโดยทั่วไป 8–12 ชิ้น" — but parents of a 6-month-old don't know 5–8 is typical. A small "ตามอายุ" dropdown (แรกเกิด / 1–3 เดือน / 3–6 เดือน / 6–12 เดือน / 1–2 ปี) that auto-fills a suggested number would make the form usable for parents at any stage.

### 1.3 Result Presentation

Results are shown in a 2×2 grid:
```
[ราคาต่อชิ้น]       [ค่าใช้จ่ายต่อวัน]
[ค่าใช้จ่ายต่อเดือน] [ค่าใช้จ่ายต่อปี]
```

Monthly and yearly are both `highlight` (blue background). This creates two visually identical "primary" results with no hierarchy. Monthly cost is the most actionable number for budget planning — it should be the primary result (larger, prominent), with yearly as a secondary callout.

**Missing: savings context.** After calculating, users don't know if their result is good or bad. "ค่าผ้าอ้อมต่อเดือน 1,415 บาท" is meaningless without a reference point. A small comparison line like "เทียบกับยี่ห้อประหยัด: ประหยัดได้ประมาณ 500 บาท/เดือน" would transform a number into insight.

**Missing: share/save result.** No URL state encoding means users who want to show their spouse the calculation must repeat it. A "คัดลอกผลลัพธ์" or "แชร์ผล" button (even just copying a formatted text to clipboard) would be useful.

**Disclaimer note is vague.** "* คำนวณจาก 30.44 วัน/เดือนโดยเฉลี่ย" is accurate but doesn't explain the yearly calculation basis. Users may wonder if 365 or 366 days is used.

### 1.4 RecommendedProducts — Placement and Effectiveness

The product section is placed immediately after the calculator (below results), before tips and FAQ. This is reasonable placement.

**Critical issue: all affiliate URLs are `'#'`.** All three `affiliateUrl` values are placeholder hashes. The "ดูสินค้า" CTA goes nowhere. This is a zero-revenue state — the entire affiliate monetization is non-functional.

**Static product display.** MamyPoko, BabyLove, Huggies are hardcoded and always shown regardless of what the user entered. If a user calculated based on Pampers or Moony prices, the recommendations are irrelevant. The products shown should reflect what the user was calculating.

**Product cards lack real price data.** Price ranges like "350–420 บาท" are estimates. As market prices change, these become stale. No "อัปเดตราคาล่าสุด:" timestamp.

**No click-to-fill affordance.** The ProductCard could have a "ใช้ราคานี้คำนวณ" button that pre-fills the calculator with that brand's pack size and price — a high-value conversion loop.

### 1.5 Tips Section

The amber box "💡 เคล็ดลับประหยัดค่าผ้าอ้อม" has 4 generic tips. These are accurate but static.

**Opportunity:** Make one tip context-aware. If the user calculated a premium brand (cost/piece > 7 baht), the first tip could be: "ราคาต่อชิ้นของคุณอยู่ที่ [X บาท] — ถ้าเปลี่ยนมา BabyLove จะประหยัดได้ประมาณ [Y บาท]/เดือน" — turning a generic tip into a personalized insight.

### 1.6 Internal Links Section

The "อ่านเพิ่มเติม" section at the bottom has 3 blog links with inline arrow "→" text. These should use the `ArrowIcon` component (already built) and the `BlogCard` component for consistency.

### 1.7 SEO / Trust Signals

The calculator page has good SEO metadata and JSON-LD WebApplication schema.

**Missing:** No social proof on the page. No usage count, no testimonials, no "verified by" badge. For a financial planning tool, trust signals lift conversion. Even a simple "พ่อแม่กว่า X คน ใช้เครื่องคำนวณนี้แล้ว" would help — though this requires either a counter or a made-up-but-honest estimate.

The `<main>` landmark is missing on this page — the root element is `<div className="min-h-screen">`. This is both an accessibility issue and a structural one.

### 1.8 Calculator UX Scorecard

| Dimension | Current State | Severity |
|---|---|---|
| Navbar/Footer | Inline, non-sticky, no mobile nav | Critical |
| Auto-calculate | Not implemented | High |
| Brand quick-fill | Not implemented | High |
| Comparison mode | Not implemented | High |
| Result hierarchy | Two equally-highlighted results | Medium |
| Affiliate links | All point to '#' | Critical (revenue) |
| Product relevance | Always shows same 3 products | Medium |
| Context-aware tips | Generic, not personalized | Low |
| `<main>` landmark | Missing | Medium (a11y) |
| Share result | Not implemented | Low |
| Age-based diapers/day | Not implemented | Medium |

---

## 2. Blog UX Audit

### 2.1 Blog Index Page (`/blog`)

**Navbar/Footer:** Uses its own inline `<header>` and `<footer>`. Not using shared components. Mobile users have no navigation.

**No category filtering.** 30 articles are displayed in a flat chronological list with no way to filter by category. A parent interested only in sleep articles must scroll through diaper brand comparisons. The categories are clearly defined (6 topics in `TOPICS`) — there is a filter UI waiting to be built.

**No search.** There is no search field. The websiteSchema in `lib/schema.ts` includes a SearchAction pointing to `/blog?q={search_term_string}`, but no search implementation exists. Users who want a specific article must visually scan 30 entries.

**No pagination.** All 30 articles render at once. As content grows to 50, 80, 100+ articles, this becomes unusable. Sprint 1.2 should introduce either pagination (preferred for SEO) or a "Load more" pattern (preferred for UX).

**Blog card inconsistency.** The blog index uses its own inline card markup:
```tsx
<Link className="group block rounded-2xl border border-gray-100 bg-white p-6 shadow-sm...">
  <h2 className="text-xl font-bold...">
```
The shared `<BlogCard>` uses `<h3 className="text-sm font-bold">`. Two different visual treatments for the same content type. The blog index renders a larger, richer card (appropriate for a list page), while BlogCard is sized for 3-column grids. Both should converge on a shared component with a `size` or `variant` prop.

**formatThaiDate duplication.** `formatThaiDate` is defined locally on lines 24–31 in `app/blog/page.tsx`. `lib/utils.ts` already has the canonical version. This duplicate should be removed.

**ArrowIcon duplication.** An inline arrow SVG is copy-pasted in `app/blog/page.tsx` line 92–94. Should use `<ArrowIcon>`.

**No featured/pinned article.** The blog index is flat — there's no editorial hierarchy. A "Featured Article" hero placement for the most important piece would increase click-through for high-value content.

**Date UX problem.** 25 of the 30 articles have date `2026-06-22` — the bulk publish date. When displayed in the list, they all show the same date, which makes the blog look like one mass upload rather than a living publication. Consider hiding dates on the index (show only on article pages) or using "updated" dates.

**CTA placement.** The calculator CTA is at the bottom of the list after 30 articles. Most users won't scroll there. A sticky CTA bar or a mid-list CTA (after every 6 articles) would increase calculator CTR from blog traffic.

### 2.2 Blog Article Pages

**BlogLayout inline header.** The `BlogLayout.tsx` uses its own minimal header:
```tsx
<Link href="/">🍼 BabyTools</Link>
<span>|</span>
<Link href="/blog">บล็อก</Link>
```
This is a stripped-down nav that doesn't use the shared `Navbar`. It has no mobile hamburger, no active state, no proper `aria-label` on the nav element, and its styling differs slightly from the homepage Navbar (`bg-white/90` vs `bg-white/80`).

**BlogLayout inline footer.** Just `© {year} BabyTools`. The shared `Footer` component has nav columns and richer content but isn't wired in here.

**formatThaiDate duplication in BlogLayout.** Defined locally in `BlogLayout.tsx` lines 18–25. Should use `lib/utils.ts`.

**ArrowIcon duplication.** Inline SVG in `components/BlogLayout.tsx` CTA button (lines 130–131). Should use `<ArrowIcon>`.

**RelatedArticles is not category-aware.** Current implementation:
```ts
const related = BLOG_POSTS.filter((p) => p.slug !== currentSlug).slice(0, 2)
```
This returns the first 2 posts in `BLOG_POSTS` that aren't the current article — regardless of relevance. A user reading "เด็ก 1 เดือนนอนกี่ชั่วโมง?" gets "เด็กแรกเกิดใช้ผ้าอ้อมกี่ชิ้น?" as the first related article, which is a different category entirely. Related articles should be filtered by matching category first, with fallback to non-matching.

**No category-based discovery from articles.** Each article shows its category as a pill at the top, but the pill is not clickable. Tapping "การนอนของลูกน้อย" should navigate to a page with all sleep articles. This is the missing link between article pages and the category browsing system.

**Calculator CTA is always diaper-focused.** The blue CTA box in BlogLayout says "คำนวณค่าผ้าอ้อมของลูกคุณ" on every article. For sleep, feeding, and vaccine articles, this CTA is irrelevant. Users reading "เด็ก 1 เดือนกินนมกี่ออนซ์?" don't want to calculate diaper costs — they want a feeding schedule. The CTA should be context-aware:
- Diaper articles → "คำนวณค่าผ้าอ้อม" (current, correct)
- Sleep articles → "ตารางนอนเด็ก (กำลังมา)" with waitlist or link to sleep blog
- Feeding articles → "ตารางให้นม (กำลังมา)"
- Finance articles → "คำนวณค่าผ้าอ้อมรวม" (still relevant)

**No inline product recommendations within articles.** The diaper brand comparison articles ("MamyPoko vs BabyLove", "Huggies vs MamyPoko") are the highest commercial-intent pages on the site. None of them include the `RecommendedProducts` component — it only appears on the calculator page. Adding a condensed "สินค้าที่กล่าวถึงในบทความ" product section to comparison articles would directly increase affiliate CTR from the highest-converting content.

**No reading progress indicator.** Long articles (8–9 min reads) have no progress bar. Readers don't know how far they are through the content.

**TOC is not sticky.** The Table of Contents renders once near the top of the article and scrolls away. For long articles, users lose navigation context. A sticky sidebar TOC (visible at ≥1024px) or a fixed-position floating TOC button would help navigation within articles.

**No author / editorial credibility section.** Every article page has zero author attribution. The metadata says `author: { '@type': 'Organization', name: 'BabyTools' }`. For E-E-A-T purposes (Experience, Expertise, Authoritativeness, Trustworthiness), a brief author or editorial team note at the bottom would strengthen Google's quality assessment.

**No sharing affordance.** Articles have no social sharing buttons. LINE sharing is the dominant channel for parenting advice in Thailand. A "แชร์บทความ" button that copies the URL or opens LINE share is an easy engagement win.

**Breadcrumb inconsistency.** The breadcrumb on article pages ends with the article title (no link, correct). But the breadcrumb on the calculator page has `{ label: 'เครื่องมือ', href: '/#tools' }` — this links to the homepage tools section anchor rather than a standalone tools page. This will break if the tools section moves on the homepage.

### 2.3 Blog UX Scorecard

| Dimension | Current State | Severity |
|---|---|---|
| Navbar/Footer on blog/calculator | Inline, no mobile nav | Critical |
| Category filtering | Not implemented | High |
| Search | Not implemented (schema advertises it) | High |
| Pagination | Not implemented | High |
| BlogCard consistency | Two different card implementations | Medium |
| formatThaiDate/ArrowIcon dedup | Duplicate in blog/page + BlogLayout | Medium |
| RelatedArticles relevance | Ignores category | High |
| Category pill link | Not clickable | Medium |
| Calculator CTA context | Same diaper CTA on all article types | Medium |
| Inline products in comparison articles | Not implemented | High (revenue) |
| Sticky TOC | Not implemented | Low |
| Reading progress | Not implemented | Low |
| Author/editorial section | Not implemented | Medium (E-E-A-T) |
| Share buttons | Not implemented | Medium |

---

## 3. Navigation Audit

### 3.1 Navbar Coverage

| Page | Navbar Component | Mobile Menu |
|---|---|---|
| `/` (homepage) | ✓ Shared Navbar | ✓ Hamburger |
| `/blog` | ✗ Inline header | ✗ None |
| `/tools/diaper-cost` | ✗ Inline header | ✗ None |
| `/blog/[slug]` | ✗ BlogLayout custom | ✗ None |

The shared Navbar built in Sprint 1.1 covers only the homepage. Three page types — blog index, calculator, article pages — still have no mobile navigation. Since the primary audience is Thai parents on mobile phones (often one-handed, holding a baby), this is a critical gap on the highest-traffic pages.

### 3.2 Footer Coverage

| Page | Footer Component |
|---|---|
| `/` | ✓ Shared Footer (brand + 3 nav columns) |
| `/blog` | ✗ Inline — centered copyright only |
| `/tools/diaper-cost` | ✗ Inline — centered copyright only |
| `/blog/[slug]` | ✗ BlogLayout — centered copyright only |

### 3.3 BrowseByTopic Link Fidelity

All 6 topic cards in `BrowseByTopic.tsx` link to `/blog` — the full blog list. The `TOPICS` array in `lib/config.ts` defines `href: '/blog'` for all. This creates a broken user promise: clicking "การนอนของลูกน้อย" takes the user to a list of all 30 articles, not a filtered sleep article list.

This means the entire BrowseByTopic section is currently decorative — it looks like category navigation but doesn't function as one. Sprint 1.2 must deliver either:
- **Option A:** Category pages at `/blog/topic/[slug]` (proper IA, better SEO, more work)
- **Option B:** Client-side filter on `/blog` — clicking a topic card adds `?category=sleep` to the URL and filters the list in place (faster to build, worse SEO for categories)

Option A is strongly recommended given the existing SEO investment.

### 3.4 Active State Consistency

The shared `Navbar` prop `activeHref` marks the current page. The blog/calculator pages' inline headers manually set active styles. When `Navbar` is adopted across all pages, `activeHref` must be threaded through correctly:
- Blog index → `activeHref="/blog"`
- Calculator → `activeHref="/tools/diaper-cost"` (not currently in NAV_LINKS)
- Article pages → `activeHref="/blog"` (parent section)

Note: "คำนวณผ้าอ้อม" (`/tools/diaper-cost`) is in `NAV_LINKS` but is not `activeHref` on any page — the calculator page would need `activeHref="/tools/diaper-cost"` to be passed. This requires BlogLayout to accept an `activeHref` prop.

### 3.5 Breadcrumb — Calculator Anchor Issue

The calculator page breadcrumb has:
```tsx
{ label: 'เครื่องมือ', href: '/#tools' }
```
This anchor `/#tools` points to the homepage tools section. If the homepage structure changes, this breadcrumb becomes a dead link. It should either link to a standalone `/tools` page (Sprint 1.3+) or be removed from the breadcrumb so the trail is just: หน้าแรก → คำนวณค่าใช้จ่ายผ้าอ้อมเด็ก.

### 3.6 Navigation Scorecard

| Dimension | Current State | Severity |
|---|---|---|
| Navbar on blog/calculator/articles | Inline, no mobile | Critical |
| Footer on blog/calculator/articles | Inline, minimal | Medium |
| BrowseByTopic functional links | All link to /blog (no filtering) | Critical |
| Active state in Navbar | Only on homepage | Medium |
| Calculator breadcrumb anchor | Fragile `/#tools` link | Low |

---

## 4. Design System Audit

### 4.1 Current Component Inventory

| Component | Used By | Status |
|---|---|---|
| `components/layout/Navbar.tsx` | `app/page.tsx` only | Partial — 3 pages pending |
| `components/layout/Footer.tsx` | `app/page.tsx` only | Partial — 3 pages pending |
| `components/cards/BlogCard.tsx` | PopularArticles, LatestArticles | Partial — blog/page + RelatedArticles pending |
| `components/cards/ToolPlaceholderCard.tsx` | PopularTools | Fully used |
| `components/ToolCard.tsx` | PopularTools | Fully used |
| `components/icons/ArrowIcon.tsx` | BlogCard | Partial — BlogLayout, blog/page pending |
| `components/BlogLayout.tsx` | All 30 blog articles | Fully used (but internals need cleanup) |
| `components/Breadcrumb.tsx` | BlogLayout, calculator page | Fully used |
| `components/DiaperCalculator.tsx` | Calculator page | Fully used |
| `components/RecommendedProducts.tsx` | Calculator page | Fully used (affiliate links broken) |
| `components/FAQ.tsx` | Calculator page, blog articles | Fully used |
| `components/RelatedArticles.tsx` | BlogLayout | Fully used (category logic missing) |
| `components/About.tsx` | Homepage | Fully used |
| `components/Hero.tsx` | Homepage | Fully used |
| `lib/utils.ts` (formatThaiDate) | `app/page.tsx` sections | Partial — BlogLayout + blog/page pending |

### 4.2 Remaining Duplication

**formatThaiDate — 3 definitions exist:**
1. `lib/utils.ts` — canonical ✓
2. `components/BlogLayout.tsx` — lines 18–25 (duplicate)
3. `app/blog/page.tsx` — lines 24–31 (duplicate)

**Arrow SVG — 4+ definitions exist:**
1. `components/icons/ArrowIcon.tsx` — canonical ✓ (used in BlogCard, RelatedArticles)
2. `components/ToolCard.tsx` — inline SVG, not using ArrowIcon
3. `components/BlogLayout.tsx` CTA button — inline SVG (line 130)
4. `app/blog/page.tsx` — inline SVG (line 92)

**Inline header — 3 separate implementations:**
1. `app/blog/page.tsx` — logo + คำนวณผ้าอ้อม + บล็อก (active)
2. `app/tools/diaper-cost/page.tsx` — logo + เครื่องมือ + บล็อก (no sticky)
3. `components/BlogLayout.tsx` — logo | บล็อก only

**Blog card — 2 separate implementations:**
1. `components/cards/BlogCard.tsx` — canonical (text-sm, p-5)
2. `app/blog/page.tsx` inline card — h2, text-xl, p-6 (larger, richer)

The blog index card is intentionally larger for a list-view context, which is correct UX. The solution is to add a `variant="list"` prop to BlogCard rather than maintaining two separate implementations.

**CTA banner — 3 separate implementations:**
1. `components/BlogLayout.tsx` — gradient blue, "คำนวณค่าผ้าอ้อมของลูกคุณ" (lines 116–133)
2. `app/blog/page.tsx` — solid blue, "ลองใช้เครื่องคำนวณผ้าอ้อมของเรา" (lines 101–110)
3. `components/About.tsx` — solid blue, "เครื่องมือใหม่กำลังมา" (lines 52–67)

All three follow the same pattern: blue bg → heading → description → button/link. A shared `<CTABanner>` component with `title`, `description`, `ctaLabel`, `ctaHref`, `variant` ("gradient" | "solid") would eliminate this duplication and enable sprint-by-sprint updates without touching multiple files.

### 4.3 Missing Reusable Components

**`<SectionHeader>`** — Used by every homepage section and the blog index:
```tsx
<h2 className="text-2xl font-bold...">Section Title</h2>
<p className="mt-2 text-gray-500">Subtitle</p>
```
Pattern appears in: PopularTools, BrowseByTopic, PopularArticles, LatestArticles, About, blog index, calculator page. A component with `title`, `subtitle`, `align?` props would standardize this.

**`<CategoryPill>`** — The category badge:
```tsx
<span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
  {category}
</span>
```
Appears in: BlogCard, BlogLayout article header, RelatedArticles, blog/page.tsx cards. A shared `<CategoryPill category={post.category} href={...} />` component — where `href` links to the category page — would let Sprint 1.2 add category page links in one place.

**`<CTABanner>`** — As described above. Consolidate 3 existing CTA banners into one component.

**`<BlogGrid>`** — The 3-column card grid:
```tsx
<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
  {posts.map(post => <BlogCard key={post.slug} {...post} />)}
</div>
```
Used by PopularArticles and LatestArticles identically. A `<BlogGrid posts={posts} />` component would let future sections be added in one line.

### 4.4 @tailwindcss/typography — Critical Missing Dependency

`BlogLayout.tsx` applies Tailwind prose classes:
```tsx
<article className="prose prose-blue prose-lg max-w-none mt-8
  prose-headings:font-bold prose-headings:text-gray-900
  prose-p:text-gray-600 prose-p:leading-relaxed
  ...
```

The `package.json` has **no `@tailwindcss/typography` package**. In Tailwind v4, the typography plugin must be explicitly installed via:
```
npm install @tailwindcss/typography
```
And enabled in `globals.css` via:
```css
@plugin "@tailwindcss/typography";
```

Without this plugin, **all prose formatting on every blog article is silently ignored**. Article bodies are unstyled plain HTML — no font sizing on headings, no paragraph spacing, no list indentation, no table styling. This is a live bug affecting all 30 blog articles in production.

This must be the first item in Sprint 1.2.

### 4.5 Design System Scorecard

| Item | Current State | Severity |
|---|---|---|
| @tailwindcss/typography | Missing — blog articles unstyled | Critical |
| ArrowIcon adoption | Partial — 2 remaining inline SVGs | Medium |
| formatThaiDate adoption | Partial — 2 remaining duplicates | Medium |
| BlogCard adoption | Partial — 2 remaining inline patterns | Medium |
| CTABanner component | Not built — 3 separate implementations | Low (Sprint 1.3) |
| SectionHeader component | Not built — repeated pattern | Low (Sprint 1.3) |
| CategoryPill component | Not built — repeated pattern | Medium (needed for category pages) |
| BlogCard variant="list" | Not built — blog index needs larger card | Medium |

---

## 5. Information Architecture Audit

### 5.1 Current Site Map

```
/ (Homepage)
├── Hero
├── Popular Tools (1 live, 2 coming-soon)
├── Browse by Topic (6 links → all /blog, no filtering)
├── Popular Articles (6 curated)
├── About
├── Latest Articles (6 recent)
└── Footer

/blog
└── 30 articles (flat list, no filtering)

/blog/[slug] (30 pages)
├── Article body
├── CTA → /tools/diaper-cost
└── Related (2 non-current posts, no category logic)

/tools/diaper-cost
├── Calculator
├── RecommendedProducts (3 hardcoded products)
├── Tips
├── FAQ
└── Blog links (3 manual links)
```

### 5.2 Missing IA Layer: Category Pages

The biggest IA gap is the absence of category pages. The site has:
- 6 well-defined topic categories in `TOPICS`
- 30 articles cleanly categorized
- A "Browse by Topic" UI on the homepage that implies category pages exist

But the category pages don't exist. All 6 BrowseByTopic links go to the generic blog list. Category pages at `/blog/topic/[slug]` would:
1. Make BrowseByTopic functional
2. Enable category pills on articles to link somewhere
3. Create SEO-indexable category landing pages ("บทความเกี่ยวกับผ้าอ้อม")
4. Improve topic-based internal linking

These pages can be built as a single dynamic route `app/blog/topic/[slug]/page.tsx` filtering `BLOG_POSTS` by category mapping.

### 5.3 Tool Discoverability

The site has one live tool and two coming-soon placeholders. Users who arrive via blog articles don't have a clear path to discover the tool unless they click the blue CTA banner. The Navbar includes "คำนวณผ้าอ้อม" which helps, but:

- No standalone `/tools` listing page exists
- The breadcrumb on calculator page uses `/#tools` (fragile anchor)
- Articles don't cross-link to the calculator in body text consistently (only the dedicated "คำนวณค่าใช้จ่าย" section in some articles)

### 5.4 Blog Discoverability

Within blog articles, the only discovery paths are:
1. Related Articles section (2 posts, no category logic)
2. The blue CTA to the calculator

There is no "More articles about [category]" link. There is no tag system. There is no "ยอดนิยมในหมวดนี้" (popular in this category) sidebar or section. Readers who finish an article have limited onward paths.

### 5.5 IA Scorecard

| Dimension | Current State | Severity |
|---|---|---|
| Category pages | Missing — BrowseByTopic non-functional | Critical |
| Article → category navigation | No clickable category links | High |
| Blog discoverability from articles | Only 2 naive related posts | High |
| Tool discoverability from blog | Only CTA banner | Medium |
| `/tools` index page | Missing (breadcrumb uses anchor) | Low |

---

## 6. Conversion Audit

### 6.1 Affiliate Monetization: Zero Functional Revenue

The `RecommendedProducts` component has `affiliateUrl: '#'` for all three products. Every "ดูสินค้า" button goes nowhere. This means:
- Zero affiliate click-through to Lazada/Shopee
- Zero affiliate revenue generated
- Users who click "ดูสินค้า" get a broken experience (the page doesn't navigate)

This is the most urgent conversion issue. Real affiliate links from Lazada, Shopee, or Amazon.co.th must be wired in before Sprint 1.2 ships.

### 6.2 Affiliate Placement Coverage

Products are only shown on the calculator page. The highest-intent pages for product purchase are the brand comparison articles:
- `mamypoko-vs-babylove` — directly compares products → no product section
- `huggies-vs-mamypoko` — direct comparison → no product section
- `babylove-vs-huggies` — direct comparison → no product section
- `diaper-brand-comparison` — 5-brand comparison → no product section
- `best-overnight-diaper` — purchase-intent title → no product section

Adding a `<RecommendedProducts>` block to these 5 articles would convert the highest commercial-intent traffic directly. Alternatively, a new `<ArticleProducts>` component specifically for articles could show 2 relevant products (not all 3) in a compact layout.

### 6.3 Calculator → Product Conversion Loop

The current flow:
```
User fills calculator → sees monthly cost → scrolls to products → "ดูสินค้า" → (#)
```

An improved flow:
```
User fills calculator → result shows monthly cost → 
  "ซื้อ [ยี่ห้อที่คุณคำนวณ] ที่ราคาดีที่สุด →" [affiliate link] → Lazada/Shopee
```

This requires the calculator to know which brand the user calculated (possible if brand quick-fill presets are added) and surface a relevant affiliate link in the results section.

### 6.4 Email / Waitlist Capture

There is no email capture on the site. The "เครื่องมือใหม่กำลังมา" CTA in the About section mentions upcoming tools but provides no way to be notified. A simple waitlist form ("แจ้งเตือนเมื่อเครื่องมือพร้อมใช้งาน") would:
1. Build an email list for future tool launches
2. Increase engagement by creating anticipation
3. Provide data on which tools users most want

This is lower priority but strategically important for long-term growth.

### 6.5 Conversion Scorecard

| Dimension | Current State | Severity |
|---|---|---|
| Affiliate links | All broken (#) | Critical |
| Products on comparison articles | Not implemented | High |
| Calculator → product link | Not implemented | High |
| Email/waitlist capture | Not implemented | Medium |
| CTA in blog articles | Always diaper, not context-aware | Medium |
| Product click-to-fill calculator | Not implemented | Low |

---

## 7. Accessibility Carry-Over Audit

Accessibility items from Sprint 1.1 that applied to deferred pages:

| Item | Status | Remaining Work |
|---|---|---|
| Skip link | ✓ In layout.tsx — works for all pages | Wire `id="main-content"` on blog/calculator `<main>` |
| `<main>` on calculator page | ✗ Missing — uses `<div className="min-h-screen">` | Wrap in `<main>` |
| Nav aria-label | ✓ On homepage Navbar | Auto-fixed when Navbar replaces inline headers |
| Focus rings on blog/calculator interactive elements | Not verified | Check after Navbar adoption |
| Text contrast in BlogLayout | `text-gray-400` footer (~2.7:1) fails AA | Fixed when shared Footer replaces inline |
| Category pill contrast | `text-blue-600` on `bg-blue-50` — ~5.9:1 ✓ | No action needed |
| Logo emoji aria-hidden | ✓ In Navbar | BlogLayout header emoji not hidden — fix when Navbar adopted |

---

## 8. SEO Considerations for Sprint 1.2

### What must not change
- Canonical URLs on all 30 blog articles
- H1 content on any article (ranking signal)
- JSON-LD schemas (ArticleSchema, FAQPage, BreadcrumbList)
- Sitemap structure
- Internal link structure from articles to `/tools/diaper-cost`

### What Sprint 1.2 should add
- Category pages (`/blog/topic/[slug]`) with proper canonical + BreadcrumbList schema
- Category pages should be included in `sitemap.ts`
- Blog index filter (`?category=`) should use canonical without query param to avoid duplicate content
- `@tailwindcss/typography` fix — currently live articles have unstyled body text, which may affect Core Web Vitals (CLS from reflow) — verify after install

### SearchAction schema gap
`lib/schema.ts` websiteSchema includes a SearchAction for `/blog?q=` but there is no search implementation. Either implement search or remove this from the schema (a false schema claim can theoretically be penalized).

---

## 9. Priority Classification for Sprint 1.2

### P0 — Broken in Production (must fix immediately)
1. **@tailwindcss/typography** — blog article prose is completely unstyled
2. **Affiliate links point to '#'** — zero revenue, broken UX

### P1 — Critical Structural (deferred from Sprint 1.1)
3. **Wire Navbar into** `app/blog/page.tsx`, `app/tools/diaper-cost/page.tsx`, `components/BlogLayout.tsx`
4. **Wire Footer into** same 3 files
5. **De-duplicate** formatThaiDate and ArrowIcon from BlogLayout + blog/page
6. **Wire BlogCard** into blog/page + RelatedArticles

### P2 — High Product Impact
7. **Category pages** `/blog/topic/[slug]` — makes BrowseByTopic functional
8. **Category-aware RelatedArticles** — fix naive "first 2" logic
9. **Add products to comparison articles** — direct revenue impact
10. **Auto-calculate on input** in DiaperCalculator
11. **Context-aware CTAs** in BlogLayout by category

### P3 — Medium Product Impact
12. **Blog index category filter** (UI filter, or redirect to category page)
13. **Brand quick-fill presets** in DiaperCalculator
14. **BlogCard variant="list"** for blog index page
15. **CategoryPill component** — reusable, links to category page
16. **`<main>` landmark** on calculator page

### P4 — Enhancements (Sprint 1.3+)
17. Comparison mode in DiaperCalculator
18. Share/copy result from calculator
19. Email capture / waitlist
20. Share buttons on articles
21. Sticky TOC on desktop for long articles
22. CTABanner shared component
23. SectionHeader shared component
24. Author/editorial section on articles

---

*Audit complete — see UX_SPRINT_1_2_IMPLEMENTATION_PLAN.md for the execution plan.*
