# BabyTools — Production Review v1.0

**Date:** 2026-07-08  
**Scope:** Full product audit post Sprint 1.1 + Sprint 1.2  
**Data sources:** Source code, docs/, analytics exports (GA4 Jun 10–Jul 7), Search Console (Jun 21–Jul 5), UX mockup v1  
**Status:** Read-only — no source files modified

---

## 1. Executive Summary

BabyTools has completed two structured UX sprints and reached an early but functional v1 state. The homepage is rebuilt, shared navigation is wired across all page types, 30 blog articles are live with prose formatting, and category pages are functional. The diaper cost calculator has auto-calculate, age presets, and brand quick-fill. The content cluster architecture is sound.

The product is at a **pre-revenue, early-traffic stage**. In 28 days, it served 37 unique users and generated zero affiliate clicks. The site is indexed by Google (23+ pages) but none rank on page 1 — average positions are 30–51. Organic search has driven zero clicks despite 229 impressions.

The single most urgent unresolved issue: **affiliate URLs on the calculator page (`RecommendedProducts.tsx`) are still set to `'#'`**, making the primary revenue path non-functional while every other piece is in place.

**Overall maturity score: 5.5 / 10**

The foundation is solid. The site needs an SEO ranking breakout and a working revenue mechanism to cross into sustainable operation.

---

## 2. Traffic Analysis

### 2.1 GA4 Summary (Jun 10 – Jul 7, 2026 · 28 days)

| Metric | Value |
|---|---|
| Active users | 37 |
| New users | 37 |
| Returning users | 7 (observed across daily cohorts days 13–27) |
| Sessions | 48 |
| Events | 202 |
| Page views | 86 |
| Avg engagement time / user | 18.2 seconds |
| Scroll events | 13 |
| User engagement events | 18 |
| Organic search clicks | 0 |
| Revenue | ฿0 |

### 2.2 Traffic Sources (Sessions)

| Source | Sessions | Engagement Rate | Avg Engagement Time |
|---|---|---|---|
| Direct | 20 | 30% | 18.3 sec |
| Organic Social (Facebook) | 20 | 40% | 1.7 sec |
| Referral (Vercel/other) | 8 | 75% | 34.4 sec |

**Key finding:** Facebook social referrals have a 1.7-second average engagement time — users who arrive from social posts bounce almost immediately. This indicates the traffic is mostly testing/preview visits rather than real organic discovery. Direct traffic (likely the owner and team) has the highest engagement.

### 2.3 Top Pages by Views

| Page | Views | Active Users | Bounce Rate |
|---|---|---|---|
| Calculator (`/tools/diaper-cost`) | 57 | 36 | 56.5% |
| Calculator blog article | 13 | 8 | 8.3% |
| Blog index (`/blog`) | 7 | 4 | 0% |
| MamyPoko vs BabyLove | 3 | 1 | 0% |
| Newborn diapers per day | 2 | 1 | 0% |

The calculator is the primary landing destination. The blog article about diaper cost has a low bounce rate (8.3%), suggesting genuine engagement from users who read it. The blog index and article pages have meaningful engagement when visited.

### 2.4 Geography

| Country | Users |
|---|---|
| Thailand | 30 |
| United States | 3 |
| Other | 4 |

**Language split:** 23 English browser locale, 15 Thai. This is expected — many Thai users operate devices in English locale, and Vercel/team previews are from non-Thai IP addresses.

**Bangkok-heavy:** 20 of 37 users are from Bangkok. No Tier 2 city traffic yet — consistent with zero organic search ranking.

### 2.5 User Retention

Cohort retention shows no Week 1 retention and no Week 2+ retention. The site is too new to have established a returning user base. Notable is a spike of 14 new users in the week of Jun 21–27, likely the launch cohort.

### 2.6 Key Growth Concerns

- **Zero organic search revenue in month 1** is expected but sets the baseline
- **Traffic is entirely non-organic** (direct + social + referral)
- **Engagement time is low overall** (18 sec avg) because social arrivals bounce fast
- The site has not yet achieved any keyword ranking in the top 30 positions

---

## 3. SEO Health

### 3.1 Search Console Summary (Jun 21 – Jul 5, 2026)

| Metric | Value |
|---|---|
| Total impressions | 229 |
| Total clicks | 0 |
| Overall CTR | 0% |
| Best avg position | 9.75 (homepage) |
| Most impressed page | `/blog/newborn-diapers-per-day` (83 impressions) |
| Date of first impression | Jun 22, 2026 |

The site appeared in Google results within 24 hours of launch, which confirms sitemap submission and correct robots.txt. However, zero clicks despite 229 impressions means all pages are currently ranked below positions where users click (most queries average pos 28–82).

### 3.2 Indexed Pages

**23 pages indexed** as of Jun 30 (first confirmed indexing data point). The sitemap contains:
- 3 static routes (homepage, blog index, calculator)
- 6 category pages
- 30 blog articles

**Total expected: 39 URLs.** With only 23 confirmed indexed, approximately 16 pages (likely newer articles and category pages) are still being crawled. Coverage report shows zero critical issues and zero non-critical issues — the indexation gap is timing, not a crawl block.

### 3.3 CTR and Rankings

| Top Pages (Impressions) | Impressions | Position | CTR |
|---|---|---|---|
| `/blog/newborn-diapers-per-day` | 83 | 44 | 0% |
| `/blog/baby-feeding-3-months` | 37 | 41 | 0% |
| `/blog/newborn-feeding-schedule` | 34 | 47 | 0% |
| `/blog/nursery-cost-thailand` | 27 | **10.85** | 0% |
| `/blog/baby-feeding-1-month` | 21 | 41 | 0% |
| `/blog/breastmilk-vs-formula` | 12 | 37 | 0% |
| Homepage | 4 | **9.75** | 0% |

**Standout:** `nursery-cost-thailand` averages position 10.85 and the homepage averages 9.75 — both near page 1. These two are the most likely candidates to break into click-generating positions first.

### 3.4 Top Ranking Queries

| Query | Impressions | Position |
|---|---|---|
| ควรเปลี่ยนแพมเพิสทุกกี่ชั่วโมง | 29 | 46 |
| เปลี่ยนแพมเพิสทุกกี่ชั่วโมง | 27 | 46 |
| นมผง เด็ก 3 เดือน | 12 | 43 |
| เด็ก 3 เดือน กิน กี่ออนซ์ | 12 | 46 |
| นมแม่กับนมผง | 9 | 32 |
| ให้ลูกเข้าเต้า ทุกกี่ชั่วโมง | 8 | 29 |

**Key finding:** The highest-impression queries are about **breastfeeding frequency and formula feeding** — not diaper brand comparisons. The content cluster that is gaining the most early traction is the feeding category, not the primary diaper topic. No diaper brand comparison queries appear in the top queries list yet.

### 3.5 Content Gaps

Based on queries with impressions but 0 clicks:

1. **Diaper change frequency article** — "ควรเปลี่ยนแพมเพิสทุกกี่ชั่วโมง" has 56+ impressions combined but no matching article exists. This is the highest-volume unserved query cluster.
2. **Baby formula by age** — formula queries for 3-month and 6-month babies have combined 26 impressions at position 43–63. A dedicated formula guide or calculator would capture this.
3. **Breastfeeding schedule** — queries about breastfeeding frequency are ranking at position 29–35, closest to page 1 among all queries.
4. **Nursery cost** — existing article at pos 10.85 — content expansion could push it to page 1.

### 3.6 SEO Architecture Assessment

**Strengths:**
- Proper canonical URLs on all 30 articles
- JSON-LD schemas: ArticleSchema, FAQPage, BreadcrumbList, WebApplication, ItemList
- Sitemap includes all pages including category routes
- robots.txt is correct
- OpenGraph tags present on all pages
- Sarabun font with `display: swap` prevents FOIT
- `@tailwindcss/typography` now installed — blog article prose is styled

**Issues:**
- **No custom domain** — site is on `baby-tools-blond.vercel.app`. A custom domain (e.g., `babytools.co.th`) is needed for brand authority and SEO permanence. Vercel subdomains don't build domain authority.
- **SearchAction schema mismatch** — `lib/schema.ts` websiteSchema advertises a SearchAction at `/blog?q=` but no search implementation exists. This creates a false schema claim.
- **25 of 30 articles share date `2026-06-22`** — batch-published articles with identical dates reduce perceived freshness signal.

---

## 4. User Behavior

### 4.1 Landing Pages

The calculator (`/tools/diaper-cost`) is the primary entry point with 57 views, suggesting that social sharing or direct links are driving users to the tool rather than to blog content. The fact that users are landing on the calculator first is structurally positive — it's the highest-converting page type. However, with affiliate links broken, those users convert to nothing.

### 4.2 Navigation Patterns

- Users arrive at calculator → bounce at 56.5% rate. Those who don't bounce have near-zero affiliate click opportunity (links go to `#`).
- Blog index (7 views, 0% bounce) — users who visit the blog tend to engage.
- Article pages (2–3 views each) — limited data, positive engagement where measured.

### 4.3 Bounce/Engagement

The 8.3% bounce rate on the diaper cost calculator article is the best engagement signal in the data. Users who find that article (typically from blog CTAs) read it. This is the article-to-tool pipeline working as designed.

Social arrivals (Facebook) average 1.7 seconds — these are not engaged users. The Facebook traffic appears to be initial sharing/preview visits, not returning organic social traffic.

### 4.4 Retention

Zero Day 1 and Day 7 retention in cohort data. The site is too early for retention patterns to emerge. The returning user count of 7 observed across the period represents the owner/team testing the product, not organic retention.

### 4.5 Conversion Opportunities

The main conversion funnel is:
```
User arrives → reads article / uses calculator → sees affiliate product → clicks "ดูสินค้า" → Lazada/Shopee
```

This funnel is **completely broken at step 4** because `RecommendedProducts.tsx` affiliate URLs are `'#'`. Every other step of the funnel is structurally in place.

---

## 5. UX Review

### 5.1 Homepage

**Implemented correctly:**
- Sticky shared Navbar with mobile hamburger
- Hero section with reduced padding
- Popular Tools (1 live + 2 coming-soon placeholders filling the grid)
- BrowseByTopic — 6 topic cards now linking to real category pages
- Popular Articles — 6 curated posts
- About section before Latest Articles (trust signals above content)
- Latest Articles — 6 recent posts (not 30)
- View All Articles CTA
- Shared Footer

**Gaps vs. mockup:**
- Mockup shows a **hero image** (mother holding baby) — current implementation uses decorative gradient blur orbs. The image would add emotional resonance and professional credibility.
- Mockup shows social proof indicators (usage counts) — not implemented.
- Mockup shows article cards with thumbnail photos — current cards use text-only layouts.

**Overall:** Homepage is structurally sound and matches the mockup information architecture. The visual gap is primarily the absence of imagery.

### 5.2 Blog

**Implemented correctly:**
- Shared Navbar + Footer wired in
- Category filter tabs (ทั้งหมด, ผ้าอ้อม, การนอน, etc.) via `BlogIndexClient.tsx`
- Featured article card (first post in current filter gets the hero treatment)
- Category counts visible in filter pills
- BlogCard used consistently in the grid
- ArrowIcon used throughout
- formatThaiDate from `lib/utils.ts`

**Gaps:**
- **No search** — schema advertises it, no implementation exists.
- **No pagination** — all 30 articles load at once. Acceptable at 30, will become a problem at 60+.
- **25 articles share the same date (2026-06-22)** — the filter shows them in insertion order, not by date variety. Visually, if all articles in a category show the same date, it looks like a bulk upload, not a living publication.
- **No article images** — category icons substitute as thumbnails in the featured card.

### 5.3 Calculator

**Implemented correctly:**
- Auto-calculate via `useMemo` — results update on any input change, no "คำนวณ" button required
- Age quick-select chips (6 age ranges: แรกเกิด → 2+ ปี)
- Brand quick-fill presets (MamyPoko, BabyLove, Huggies)
- 2-column layout on desktop (form left, results right)
- Tips section (amber box)
- FAQ section
- `<main id="main-content">` — accessible
- Shared Navbar + Footer wired in
- Breadcrumb corrected (no fragile `/#tools` anchor)

**Gaps:**
- **Affiliate links broken** — `RecommendedProducts.tsx` still uses `affiliateUrl: '#'`. The inline product section in `BlogLayout.tsx` uses real Lazada catalog URLs, but the calculator page's `RecommendedProducts.tsx` component has `#` for all 3 products.
- **Result hierarchy** — monthly and yearly both show with equal visual weight (both use the blue highlight). The UX audit recommended monthly as the primary result.
- **No comparison mode** — side-by-side brand comparison deferred to Sprint 1.3.
- **No share/URL-encode result** — deferred to Sprint 1.3.

### 5.4 Navigation

| Page | Navbar | Footer | Mobile Nav |
|---|---|---|---|
| `/` | ✓ Shared | ✓ Shared | ✓ Hamburger |
| `/blog` | ✓ Shared | ✓ Shared | ✓ Hamburger |
| `/blog/[slug]` | ✓ Shared | ✓ Shared | ✓ Hamburger |
| `/blog/topic/[slug]` | ✓ Shared | ✓ Shared | ✓ Hamburger |
| `/tools/diaper-cost` | ✓ Shared | ✓ Shared | ✓ Hamburger |

Navigation is now consistent across all page types. This was the most critical Sprint 1.2 structural fix and it is fully resolved.

### 5.5 Mobile UX

- Hamburger mobile navigation is functional on all pages ✓
- Calculator uses `inputMode="decimal"` on all number inputs ✓
- Age/brand preset chips wrap gracefully on small screens ✓
- Blog category filter tabs wrap on mobile ✓
- Touch targets on preset buttons are adequate (>= 32px height) — borderline for WCAG 44px minimum
- No horizontal overflow issues observed in code

### 5.6 Desktop UX

- 2-column calculator layout on desktop (lg:grid-cols-2) — matches mockup ✓
- 3-column article grids — standard and appropriate ✓
- 6-column Browse by Topic on large screens ✓

### 5.7 Consistency

- Shared components are now used across all page types (Navbar, Footer, BlogCard, ArrowIcon, formatThaiDate)
- Inline SVG arrows, duplicate formatThaiDate, and inline headers have been removed
- Remaining duplication: inline arrow SVG still present in `BlogLayout.tsx` CTA button (line ~119) — not using `<ArrowIcon>`, though a very minor issue

### 5.8 Accessibility

| Item | Status |
|---|---|
| Skip link to `#main-content` | ✓ Present in layout.tsx |
| `<main id="main-content">` | ✓ Present on all page types |
| Navbar `aria-label="เมนูหลัก"` | ✓ Present |
| Mobile hamburger `aria-expanded` | ✓ Present |
| Breadcrumb `aria-label` | ✓ Present |
| FAQ `role="alert"` on calculator error | ✓ Present |
| Logo emoji `aria-hidden` | ✓ Present in Navbar |
| Category pill contrast (blue-600 on blue-50) | ✓ ~5.9:1 passes AA |
| Nav link contrast (gray-600 on white) | ✓ Upgraded from gray-500 |
| About CTA contrast | ✓ Fixed (text-white on blue-600) |

**Remaining accessibility issues:**
- Footer text still `text-gray-400` in some inline contexts — contrast ~2.7:1 (fails AA). Shared Footer uses `text-gray-500` which also fails at ~4.1:1.
- Preset chips (age, brand) have ~32px tap targets — below WCAG 44px minimum.

---

## 6. Architecture Review

### 6.1 Current Strengths

**Stack maturity:** Next.js 16.2.9 + React 19 + TypeScript + Tailwind v4. This is a modern, production-grade stack. Static generation via `generateStaticParams` means zero server-side rendering cost for blog pages.

**Component architecture:** The shared component system (Navbar, Footer, BlogCard, ArrowIcon, BlogLayout, Breadcrumb, CategoryPill-equivalent) is now coherent and consistent. There is minimal duplication remaining.

**Data model:** `BLOG_POSTS` as a typed static array with `TOPIC_CATEGORY_MAP` providing the category→slug mapping is clean and works well for the current scale (30 articles). The `TOPICS` array with `count` and `href` is well-structured.

**SEO infrastructure:** JSON-LD schemas for all content types (Article, WebApplication, BreadcrumbList, ItemList, FAQPage) are in place. Canonical URLs, OpenGraph, sitemap, and robots.txt are correctly configured.

**Performance:** Minimal JavaScript sent to the client (`DiaperCalculator` and `BlogIndexClient` are the only client components). Static HTML is pre-generated for all 39 URLs. No image assets means no LCP image concern.

### 6.2 Technical Debt

**Minor remaining duplication:**
- Inline arrow SVG in `BlogLayout.tsx` CTA section (~line 119) — should use `<ArrowIcon>`.
- `BlogCard` has no `variant="list"` prop; `BlogIndexClient` uses `BlogCard` in grid mode for all non-featured posts.

**Data model scalability:**
- `BLOG_POSTS` is a hardcoded array in `lib/config.ts`. At 30 articles this is fine. At 80+ articles, this file becomes unwieldy. A future migration to MDX files or a CMS is recommended as the content library grows.
- `POPULAR_POST_SLUGS` is hardcoded — a TODO comment acknowledges this should be analytics-driven. After 3–6 months of real traffic data, replace with actual top-performing slugs.

**SearchAction schema false claim:** `lib/schema.ts` websiteSchema includes a SearchAction pointing to `/blog?q=` but no search is implemented. This should be removed from the schema until search exists.

**Custom domain missing:** The `SITE_URL` in `lib/config.ts` is `baby-tools-blond.vercel.app`. All canonical URLs, OG images, and sitemaps reference this Vercel subdomain. When a custom domain is added, this constant plus the Vercel project configuration must be updated together.

### 6.3 Component Quality

| Component | Quality | Notes |
|---|---|---|
| `Navbar.tsx` | High | Accessible, mobile-responsive, shared across all pages |
| `Footer.tsx` | High | Clean, shared, semantic `<footer>` |
| `BlogCard.tsx` | Good | No `variant` prop; fine for current use |
| `BlogLayout.tsx` | Good | Context-aware CTA, showProducts, category-aware related articles |
| `DiaperCalculator.tsx` | High | useMemo auto-calc, age+brand presets, accessible inputs |
| `BlogIndexClient.tsx` | High | Featured article + category filter + CTA |
| `RecommendedProducts.tsx` | Broken | Correct structure, all affiliate URLs `'#'` |
| `RelatedArticles.tsx` | Good | Category-aware with fallback |
| `BrowseByTopic.tsx` | Good | Links now functional to category pages |

### 6.4 Maintainability

Adding a new blog article requires:
1. Add entry to `BLOG_POSTS` in `lib/config.ts`
2. Create `app/blog/[slug]/page.tsx`
3. Rebuild (auto-triggered on deploy)

This is the right level of friction for a content-heavy static site. No database, no CMS complexity. The sitemap regenerates automatically.

Adding a new tool requires a new route + tool component. The `TOPICS` count values are hardcoded and would need manual update when a new article is added to a category. This is a minor maintenance risk.

---

## 7. Business Review

### 7.1 Current Value Proposition

BabyTools positions itself as "free tools for Thai parents" with the diaper cost calculator as the anchor product. The content cluster (30 articles in 6 topic areas) serves as SEO traffic acquisition. The intended monetization is affiliate commissions from Lazada/Shopee product purchases.

The value proposition is clear, differentiated for Thai parents, and the tool itself delivers genuine utility. The content quality assessment requires reading individual articles (not done in this read-only audit), but the topics, titles, and meta-descriptions are well-structured and target real user questions.

### 7.2 Content Strategy

The 30-article cluster covers:
- Diapers (7 articles) — core topic, matches the tool
- Sleep (6 articles) — high search volume category
- Feeding (6 articles) — gaining the most early SEO traction
- Finance (6 articles) — high commercial intent
- Health (2 articles) — thinnest coverage
- Parenting (3 articles) — general advice

**Strategic observation:** The feeding category is gaining more search impressions than the diaper category in month 1 (`baby-feeding-3-months` at 37 impressions, `newborn-feeding-schedule` at 34 vs. diaper articles at lower positions). The content strategy should lean into what Google is already responding to, which appears to be feeding/infant care queries, not just diaper comparisons.

The most important unserved query cluster — "ควรเปลี่ยนแพมเพิสทุกกี่ชั่วโมง" with 56 combined impressions — has no matching article.

### 7.3 Affiliate Opportunity

**Current revenue: ฿0.**

The affiliate architecture is in place:
- Calculator page has `RecommendedProducts` with 3 product cards — affiliate URLs broken (`#`)
- 5 comparison articles (`mamypoko-vs-babylove`, `huggies-vs-mamypoko`, `babylove-vs-huggies`, `diaper-brand-comparison`, `best-overnight-diaper`) now show inline product sections via `BlogLayout.tsx` `showProducts={true}` — **these use real Lazada catalog URLs** (`https://www.lazada.co.th/catalog/?q=mamypoko+pants+m`, etc.)

**Therefore:** The comparison articles are currently the only functional affiliate touchpoints on the site. The calculator page product section remains broken.

The `RecommendedProductsInline` component in `BlogLayout.tsx` uses catalog search URLs, not direct product affiliate links. These are functional (they navigate to Lazada), but they are not affiliate-tracked URLs with commission parameters. Real affiliate commission requires affiliate program enrollment and tracked link parameters.

### 7.4 Monetization Readiness

| Element | Status |
|---|---|
| Affiliate link infrastructure | Partial — broken on calculator, functional-but-untracked on blog |
| Affiliate program enrollment | Unknown — not visible in code |
| Email/waitlist capture | Not implemented |
| Tool expansion (sleep, feeding tools) | Placeholder cards only |
| Product image quality | Letter avatars (professional product images needed) |

The site is **not generating revenue** but is structurally 80% ready to do so. The gap is primarily the broken calculator affiliate links and (likely) affiliate program enrollment.

### 7.5 Trust Signals

**Present:**
- "ใช้ฟรีทุกเครื่องมือ · ไม่ต้องสมัครสมาชิก · ผลลัพธ์แม่นยำทันที" — hero trust line ✓
- About section: 4 trust features (speed, safety, mobile, free) ✓
- FAQ sections on calculator and articles ✓
- JSON-LD organizational schema ✓

**Missing:**
- No usage count or social proof ("X พ่อแม่ใช้แล้ว")
- No author attribution on articles
- No editorial/review policy
- No "last updated" dates on articles (25 articles share 2026-06-22)
- Letter avatars instead of real product imagery

---

## 8. Priority Matrix

### P0 — Broken in Production (fix before any Sprint 2 work)

| Item | Impact | Effort | Business Value |
|---|---|---|---|
| Fix affiliate URLs in `RecommendedProducts.tsx` (calculator page) | Critical — zero revenue from highest-traffic page | 15 min (owner provides 3 real affiliate URLs) | Immediate — first ฿ revenue possible |
| Remove or implement SearchAction schema in `lib/schema.ts` | Medium — false schema claim, potential Google penalty | 15 min | Risk mitigation |

### P1 — Critical for SEO/Revenue Breakout (Sprint 2 core)

| Item | Impact | Effort | Business Value |
|---|---|---|---|
| Set up custom domain (e.g., `babytools.co.th`) and update `SITE_URL` | High — Vercel subdomain can't build domain authority | Low (Vercel + DNS config) | Foundation for all future SEO |
| Write "ควรเปลี่ยนผ้าอ้อมทุกกี่ชั่วโมง" article | High — top unserved query cluster (56 impressions with zero content) | Medium (1 new article) | Direct CTR from high-volume query |
| Enroll in Lazada/Shopee affiliate program and replace catalog URLs with tracked affiliate URLs | Critical — current Lazada catalog links are untracked | Medium (program enrollment + URL generation) | Enables commission revenue |
| Real product photos/images on `RecommendedProducts` and `BlogLayout` inline products | Medium — letter avatars reduce purchase trust | Medium (image sourcing) | Affiliate CTR improvement |

### P2 — High Product Impact (Sprint 2 optional / Sprint 3 core)

| Item | Impact | Effort | Business Value |
|---|---|---|---|
| Add author/editorial attribution to articles | Medium — E-E-A-T signal for Google | Medium (authorship system or single author profile) | Long-term SEO quality signal |
| Publish "diaper change frequency" article targeting top query | High — direct match to 56 current impressions | Medium | Near-term CTR from existing impressions |
| Hero image (mother/baby photo) matching mockup | Medium — brand credibility, emotional resonance | Low (sourcing licensed image) | Trust + conversion on homepage |
| Usage counter or social proof on homepage | Medium — lift homepage conversion | Low | Conversion rate |
| Email capture / waitlist for upcoming tools | Medium — list building for tool launch | Medium (form + integration) | Long-term growth |
| LINE share button on articles | Medium — dominant Thai social sharing channel | Low | Organic social growth |
| Pagination on blog index (beyond 30 articles) | Low now, High later | Medium | Scalability |

### P3 — Medium Impact (Sprint 3+)

| Item | Impact | Effort | Business Value |
|---|---|---|---|
| Calculator comparison mode (2 brands side-by-side) | Medium — primary user question "which brand saves more?" | High (major UX feature) | Engagement + tool differentiation |
| Share/URL-encode calculator result | Low | Medium | Virality |
| Build sleep tracker tool | High — second tool validates the platform | Very High | Platform expansion |
| Build feeding schedule tool | High — feeding articles gaining SEO traction | Very High | Platform expansion |
| `BlogCard variant="list"` prop | Low (visual polish) | Low | Code quality |
| Remove `POPULAR_POST_SLUGS` hardcoding → analytics-driven | Low (maintenance) | Medium | Operational |
| Migrate `BLOG_POSTS` from config.ts to MDX/CMS | Medium (scalability) | High | Needed at 80+ articles |

---

## 9. Sprint Recommendations

### Sprint 2 Recommendation: SEO Anchor + Revenue Fix

**Theme:** Make the existing product generate revenue and accelerate the first keyword ranking breakout.

**Priority 1 (do immediately, pre-sprint):**
- Fix affiliate URLs in `RecommendedProducts.tsx`
- Remove false SearchAction from schema

**Priority 2 (Sprint 2 core):**
- Register custom domain and update `SITE_URL`
- Enroll in Lazada/Shopee affiliate program, replace all product URLs with tracked affiliate URLs
- Write 1–2 new articles targeting the "diaper change frequency" and "breastfeeding schedule" query clusters (highest impression, zero content match)
- Add author attribution block to `BlogLayout`

**Priority 3 (Sprint 2 stretch):**
- Hero image sourcing and implementation
- LINE share button on articles
- Usage counter / social proof copy on homepage

**Estimated effort:** ~20 hours total (excluding affiliate program enrollment which is a business task)

### Sprint 3 Recommendation: Content Velocity + Trust

**Theme:** Scale content output, improve E-E-A-T signals, and establish the site as an authoritative resource.

**Priority:**
- Publish 10–15 new articles targeting queries currently showing impressions (baby formula by age, nursery cost expansion, vaccine guide expansion)
- Add "last updated" dates and author profiles to all existing articles
- Implement email capture / waitlist form on the About section
- Add product comparison tables to additional article types (not just 5 comparison articles)
- Address gray text contrast issues

**Estimated effort:** ~30 hours + content writing time

### Sprint 4 Recommendation: Product Expansion

**Theme:** Move from "one-tool site" to "tools platform."

**Priority:**
- Build baby sleep tracker (second live tool — fills sleep placeholder card)
- Build feeding schedule tool (third live tool — high content traction suggests demand)
- Implement blog search (or remove schema claim)
- Calculator comparison mode
- Consider CMS migration if articles exceed 60

---

## 10. Overall Scores

| Dimension | Score | Notes |
|---|---|---|
| **Product** | 5 / 10 | Functional core product; revenue mechanism broken; zero organic traffic |
| **UX** | 7 / 10 | Clean design, consistent navigation, good calculator UX, missing imagery |
| **SEO** | 4 / 10 | Correct infrastructure, zero rankings in top 30, 229 impressions no clicks, no custom domain |
| **Architecture** | 8 / 10 | Solid Next.js static architecture, shared components, typed data model; minor tech debt |
| **Content** | 5 / 10 | 30 articles on right topics, bulk-published dates, no author attribution, misses top query |
| **Business** | 3 / 10 | Zero revenue, affiliate architecture incomplete (URLs broken, no tracking), no email list |
| **Overall** | **5.5 / 10** | Strong foundation, pre-revenue, pre-ranking; needs custom domain + affiliate fix to become viable |

---

## Additional Data Recommended

The following data would improve the accuracy and depth of this review. It was not available in the provided exports:

1. **Article body content quality** — This audit did not read individual article page content (`app/blog/[slug]/page.tsx` body text). The SEO ranking trajectory will depend heavily on content depth, accuracy, and whether E-E-A-T signals are embedded in the article body. A content quality audit of at least the top 5 articles by impressions is recommended.

2. **Affiliate program status** — It is unknown whether BabyTools is enrolled in Lazada Thailand, Shopee Thailand, or any other affiliate program. The Lazada catalog URLs in `BlogLayout.tsx` (`https://www.lazada.co.th/catalog/?q=...`) are not affiliate-tracked. Commission requires program enrollment, tracked link parameters (e.g., `aff_src`, `aff_id`), and approval. This is the single most important business question to resolve.

3. **Vercel Analytics data** — GA4 tracks users and sessions. Vercel Analytics (installed via `@vercel/analytics`) captures performance metrics (Core Web Vitals: LCP, CLS, FID). This data would reveal whether there are performance issues affecting SEO Core Web Vitals scoring. Not included in the provided exports.

4. **Search Console full historical data (90 days)** — The provided SC export covers only Jun 21 – Jul 5 (15 days). A 90-day view would reveal the ranking trend and whether any page is moving toward page 1.

5. **Mobile vs. desktop traffic breakdown (GA4)** — The SC device split shows Desktop: 124 impressions, Mobile: 104 impressions in search. But GA4 doesn't have a device breakdown in the provided exports. Given the target audience (Thai parents on phones), the mobile UX score hinges on real mobile session data.

6. **Conversion events** — GA4 has no conversion events configured. The `Key events` column shows 0 throughout. Setting up a custom event for calculator engagement (e.g., `calculator_used` when results appear, `affiliate_click` on any product link) would make the next analytics review far more actionable.

---

*Review complete — read-only, no source files modified.*
