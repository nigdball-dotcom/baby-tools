# UX Audit — BabyTools Sprint 1.1
**Date:** 2026-06-26  
**Scope:** Homepage, navigation, all shared components, tool page, blog index  
**Status:** Pre-implementation — read-only audit

---

## 1. Site Architecture Overview

```
app/
  page.tsx                    ← Homepage (Hero + Tools + Blog preview + About + Footer)
  layout.tsx                  ← Root layout (Sarabun font, GA4, Vercel Analytics, JSON-LD)
  blog/
    page.tsx                  ← Blog index
    [slug]/page.tsx           ← 30 individual blog articles
  tools/
    diaper-cost/page.tsx      ← Main tool page
    diaper-calculator/page.tsx← Redirect to diaper-cost

components/
  Hero.tsx                    ← Homepage hero section
  ToolCard.tsx                ← Tool card (used on homepage)
  About.tsx                   ← Features + upcoming tools CTA
  BlogLayout.tsx              ← Blog article wrapper (nav + article + CTA + related + footer)
  FAQ.tsx                     ← FAQ accordion (used on tool page)
  Breadcrumb.tsx              ← Breadcrumb nav with JSON-LD
  RelatedArticles.tsx         ← Related posts (used in BlogLayout)
  RecommendedProducts.tsx     ← Product cards with affiliate links
  DiaperCalculator.tsx        ← Interactive calculator ('use client')

lib/
  config.ts                   ← SITE constants + BLOG_POSTS array (30 entries, hardcoded)
  schema.ts                   ← JSON-LD schema factories

types/index.ts                ← Shared TypeScript interfaces
```

**Stack:** Next.js 16.2.9 · React 19 · TypeScript · Tailwind CSS v4 · Sarabun font · Vercel

---

## 2. Hero Audit

### What works
- Gradient background (blue-50 → white → rose-50) creates visual warmth without heaviness
- Decorative blur orbs add depth without impacting performance
- H1 typography is well-scaled: `4xl → 5xl → 6xl` across breakpoints
- `aria-hidden` on decorative orbs is correct
- Trust line ("ใช้ฟรีทุกเครื่องมือ · ไม่ต้องสมัครสมาชิก · ผลลัพธ์แม่นยำทันที") reinforces value before the fold

### Issues

**H1 Brand Tension**  
The H1 reads "คำนวณค่าผ้าอ้อมเด็ก ฟรี ง่าย ทันที" — this frames the site purely as a diaper calculator, which contradicts the brand positioning of BabyTools as a multi-tool platform. The badge above it says "เครื่องมือฟรีสำหรับพ่อแม่" (free tools for parents, plural), but the H1 narrows that to a single use case. As more tools are added, this will require a rewrite anyway.

**Secondary CTA Points to an Empty State**  
"ดูเครื่องมือทั้งหมด" scrolls to `#tools`, which currently contains only one ToolCard. A user clicking this expecting a suite of tools will find a single card — a trust-breaking experience.

**No Social Proof**  
No usage count, user testimonials, ratings, or third-party trust signals. For a financial/parenting tool, social proof meaningfully lifts conversion.

**Badge Emoji Accessibility**  
The 🍼 emoji inside the Hero badge has no `aria-hidden`. Screen readers may announce it as "bottle with popping cork" or similar, which disrupts the reading flow of "เครื่องมือฟรีสำหรับพ่อแม่".

**CTA Focus Styles**  
Both CTA buttons rely on browser-default focus rings. No explicit `focus-visible:ring-*` styles are set, which is inconsistent with WCAG 2.4.11 (Focus Appearance — AA in WCAG 2.2).

---

## 3. Navigation Audit

### Critical Issue: Navigation is Copy-Pasted in 4 Places

The `<header>` block is manually duplicated across four files with subtle differences in each:

| Location | Sticky | Background | Links |
|---|---|---|---|
| `app/page.tsx` | `sticky top-0` | `bg-white/80` | ผ้าอ้อม · บล็อก · เกี่ยวกับเรา |
| `components/BlogLayout.tsx` | `sticky top-0` | `bg-white/90` | Logo · \| · บล็อก only |
| `app/blog/page.tsx` | `sticky top-0` | `bg-white/90` | คำนวณผ้าอ้อม · บล็อก |
| `app/tools/diaper-cost/page.tsx` | **not sticky** | `bg-white/80` | เครื่องมือ · บล็อก |

This creates 4 independent bugs to fix whenever nav changes. The diaper-cost page nav is not sticky — an inconsistency that would likely go unnoticed for weeks.

### Mobile Navigation: Zero Coverage

Every nav block uses `hidden gap-6 text-sm font-medium text-gray-500 sm:flex`. On any screen below 640px, there are **no navigation links visible at all** — only the logo. There is no hamburger menu, no bottom nav, no fallback. Mobile users (who are the primary audience — parents on phones while holding babies) have no way to navigate beyond the back button or URL.

### No Active State System

The blog index manually applies `text-gray-900 font-semibold` to the active Blog link. No other page does this. Across all 4 nav implementations, there is no consistent active state pattern.

### Touch Target Size

Nav links are rendered as plain `<Link>` elements inside a flex container with `gap-6`. They have no explicit padding. At `text-sm` (14px), the tap targets are well below the WCAG-recommended 44×44px minimum for interactive elements.

---

## 4. CTA Audit

### Hero CTAs
- **Primary:** "คำนวณค่าผ้าอ้อม →" → `/tools/diaper-cost` — clear, action-oriented, well-styled ✓
- **Secondary:** "ดูเครื่องมือทั้งหมด" → `#tools` — misleading when only 1 tool exists

### About Section CTA
- Blue CTA box with two inline `<Link>` elements styled as underlined text — no `<button>` or styled CTA
- The CTA is informational ("เครื่องมือใหม่กำลังมา") and sends users to blog or the calculator — no clear conversion intent
- Weak visual hierarchy: the two text links inside the blue box look like body text, not calls to action

### BlogLayout CTA
- Gradient blue card ("คำนวณค่าผ้าอ้อมของลูกคุณ") with a well-styled white button ✓
- Positioned after article body, before related articles — good placement ✓
- Strong micro-copy: "กรอกแค่ 3 ค่า ดูผลลัพธ์ทันที ไม่ต้องสมัครสมาชิก" ✓

### Blog Index CTA
- Blue CTA box at bottom of article list ✓
- But no CTA above the fold on the blog index — users who don't scroll past 30 articles may not see it

### Tool Page CTAs
- No sticky "calculate" prompt for users who scroll past the calculator without interacting
- "อ่านเพิ่มเติม" links section at the bottom has good SEO value but no visual CTA treatment

---

## 5. Information Hierarchy Audit

### Homepage Section Order
```
[Header/Nav]
[Hero]              ← Above fold — strong
[Tools section]     ← Immediately follows — good, but thin with 1 tool
[Blog preview]      ← ALL 30 posts rendered here — critical issue (see below)
[About]             ← Trust signals appear AFTER 30 blog posts
[Footer]
```

**About section is buried.** Trust signals ("ผลลัพธ์ทันที", "ข้อมูลปลอดภัย", "รองรับมือถือ", "ฟรีตลอดไป") are value-driving content that should appear closer to the top, not after 30 blog cards.

### Blog Preview Renders All 30 Posts on Homepage

`app/page.tsx` line 89: `{BLOG_POSTS.map((post) => (` — this renders all 30 blog posts in a 3-column grid on the homepage with no limit. The intent appears to be a "preview" section, but the UI description says "บทความล่าสุด" (latest articles). This creates:
- Extremely long homepage scroll (30 cards × ~120px each ≈ 1,200px+ of content)
- No editorial curation of featured articles
- SEO confusion: homepage competes with its own blog index

**Expected behavior:** Show 3–6 cards with a "ดูทั้งหมด" link. The "ดูทั้งหมด" link already exists (`hidden sm:inline-flex`) but does nothing to limit the displayed posts.

### Single Tool in a Multi-Column Grid

The Tools section uses `grid gap-6 sm:grid-cols-2 lg:grid-cols-3` with 1 item. On desktop this renders a single card with 2 empty columns, which visually signals an incomplete product.

### Metadata vs H1 Mismatch
- Page `<title>`: "คำนวณค่าผ้าอ้อมเด็กฟรี 2026"
- Body `<h1>`: "คำนวณค่าผ้าอ้อมเด็ก ฟรี ง่าย ทันที"

Minor inconsistency, but search snippet vs. page experience should match.

---

## 6. Visual Hierarchy Audit

### What works
- H1 → H2 → H3 heading scale is legible and proportional
- Blue-600 as primary action color is consistent
- Card elevation (shadow-sm → shadow-md on hover) provides clear interactive feedback
- `active:scale-95` on interactive elements gives satisfying tactile feedback

### Issues

**Blog Card Title Size on Homepage**  
Blog post titles in the homepage preview use `text-sm font-bold` — too small at 14px for a headline. The same posts on the blog index use `text-xl font-bold`. This inconsistency suggests the homepage grid was sized down without reconsidering content legibility.

**About Features: No Visual Anchoring**  
The 4 features in `About.tsx` are identical in weight and size — no visual hierarchy between the most important feature and the least. All icons are the same size, all titles the same font weight.

**Color Saturation Overuse**  
The Hero badge, primary CTA button, H1 accent text, and trust line all share blue-600 or blue-100. When everything is the primary color, nothing is.

**About CTA Box (Blue on Blue)**  
The blue CTA box inside the About section uses `text-blue-200` for body text on `bg-blue-600`. The contrast ratio for `blue-200` on `blue-600` is approximately 2.4:1 — fails WCAG AA (4.5:1 required for normal text).

---

## 7. Whitespace Audit

### What works
- Section vertical padding (`py-20 sm:py-28`) is generous — gives content room to breathe
- Card internal padding (`p-5`, `p-6`) is consistent across ToolCard, BlogLayout CTA, FAQ
- Max-width constraint (`max-w-5xl` for full-width, `max-w-3xl` for article, `max-w-2xl` for section heads) creates good reading width

### Issues

**Tools Section Whitespace Imbalance**  
With only 1 tool, the `py-20 sm:py-28` section with a centered heading block, 12 units of margin, and a 3-column grid gives ~50% of the section to vertical whitespace. It feels like a placeholder page rather than a product section.

**Blog Cards on Homepage: Cramped Titles**  
`p-5` on cards with `text-sm` content and 3-column layout on desktop gives article titles very little horizontal space. Titles with 25+ Thai characters wrap to 3 lines, making cards vertically uneven.

**Footer Whitespace**  
`py-10` on footer with a single line of centered text (BlogLayout/tool footer) — this could be more compact.

---

## 8. Component Reuse Audit

### Duplicated Nav — 4 Instances

As documented in Section 3, the navigation is not a shared component. The footer has the same problem:

| Location | Footer Content |
|---|---|
| `app/page.tsx` | Brand text + 3 nav links (2-column layout) |
| `components/BlogLayout.tsx` | Centered brand text only |
| `app/blog/page.tsx` | Centered brand text only |
| `app/tools/diaper-cost/page.tsx` | Centered brand text only |

Homepage footer is richer; all others are stripped. No shared `<Footer>` component exists.

### Duplicated Utility Function

`formatThaiDate` is defined identically in both:
- `components/BlogLayout.tsx` (lines 18–25)
- `app/blog/page.tsx` (lines 24–31)

### Duplicated Arrow SVG

The same right-arrow SVG path is copy-pasted in:
- `components/ToolCard.tsx`
- `components/RelatedArticles.tsx`
- `components/BlogLayout.tsx` (CTA button)
- `app/blog/page.tsx` (article list links)

Should be an `<ArrowIcon />` component or pulled from a shared icon export.

### Blog Card Pattern Used in Two Places Without Sharing

The blog card pattern (rounded-2xl, border-gray-100, bg-white, p-5, shadow-sm, hover:shadow-md, hover:-translate-y-0.5) appears in:
- `app/page.tsx` (homepage blog preview)
- `components/RelatedArticles.tsx`

These are independently maintained duplicates that will diverge over time.

---

## 9. Mobile UX Audit

### Critical: No Mobile Navigation

As noted in Section 3, the nav is hidden on mobile (`hidden sm:flex`). The site has zero navigation affordance for screens under 640px. Mobile users on a parenting tool site are the **primary audience** — Thai parents searching for diaper calculators are overwhelmingly on mobile devices.

**Impact:** Bounce rate increase on mobile. Users cannot navigate from homepage to tool or blog without typing in the URL bar.

### Hero Mobile Experience

- CTAs stack correctly with `flex-col sm:flex-row` — ✓
- Both CTAs are `w-full` on mobile — appropriate
- H1 font at `4xl` (36px) on mobile is strong — ✓
- Decorative blur orbs (`h-96 w-96`) may extend the section on small screens — check overflow behavior

### DiaperCalculator Mobile Experience

- `inputMode="decimal"` on number inputs — good for mobile ✓
- Result cards use `grid-cols-2` without responsive override — on 320px-wide screens, two cards at `text-2xl font-bold` side by side may be cramped
- "เริ่มใหม่" button only appears after calculating — reduces screen clutter ✓

### Blog Cards on Mobile

Homepage uses `sm:grid-cols-3` (single column on mobile) — appropriate ✓  
Blog index is a single-column list — appropriate ✓

### Touch Target Audit

| Element | Estimated Touch Target | WCAG Min |
|---|---|---|
| Nav links | ~20×20px | 44×44px |
| Logo | ~40×40px | 44×44px |
| Hero primary CTA | ~48px height, full width | ✓ |
| Blog card | Full card is tappable | ✓ |
| FAQ summary | ~48px height | ✓ |
| Product "ดูสินค้า" button | ~36px height | Borderline |
| Footer nav links | ~20×20px | ✗ |

---

## 10. Accessibility Audit

### Passed
- `aria-hidden` on decorative orbs, SVG icons ✓
- `aria-label` on product links ✓
- `aria-current="page"` on breadcrumb last item ✓
- `aria-label="breadcrumb"` on breadcrumb nav ✓
- `aria-label="สารบัญ"` on TOC nav in BlogLayout ✓
- `role="alert"` on calculator error message ✓
- `<time dateTime={date}>` on article timestamps ✓
- `htmlFor` and `id` pairing on all calculator inputs ✓

### Failures / Gaps

**Missing `aria-label` on nav elements**  
The `<nav>` in the homepage header has no `aria-label`. WCAG 4.1.2 requires landmarks to be uniquely identifiable. With multiple nav elements (header nav, footer nav), they must be distinguishable.

**Color Contrast Issues**

| Element | Foreground | Background | Approx. Ratio | Required |
|---|---|---|---|---|
| Nav links | `text-gray-500` (#6B7280) | `bg-white` | ~4.1:1 | 4.5:1 ✗ |
| Footer text | `text-gray-400` (#9CA3AF) | `bg-white` | ~2.7:1 | 4.5:1 ✗ |
| Blog card description | `text-gray-500` | `bg-white` | ~4.1:1 | 4.5:1 ✗ |
| About CTA body text | `text-blue-200` | `bg-blue-600` | ~2.4:1 | 4.5:1 ✗ |
| Hero trust line | `text-gray-400` | gradient (near white) | ~2.7:1 | 4.5:1 ✗ |

**No Skip Navigation Link**  
Users navigating by keyboard or screen reader must tab through the entire sticky header on every page load before reaching content.

**Logo Emoji Not Hidden from Assistive Technology**  
The 🍼 emoji in logo and Hero badge is not `aria-hidden`. Screen readers will announce "bottle with popping cork" before reading "BabyTools" or the badge text.

**Focus Visible Styles Not Explicitly Set**  
Interactive elements (buttons, nav links, card links) rely on browser default focus rings. No `focus-visible:ring` or `focus-visible:outline` explicitly defined in components.

**`<main>` Landmark Inconsistency**  
- `app/page.tsx`: wraps content in `<main>` ✓
- `app/tools/diaper-cost/page.tsx`: uses `<div className="min-h-screen">` as root — no `<main>`
- `app/blog/page.tsx`: uses `<div className="min-h-screen">` as root — no `<main>` ✓ (has `<main>` child inside)

Actually checking: `app/blog/page.tsx` uses `<main>` inside correctly. But `app/tools/diaper-cost/page.tsx` uses `<div className="min-h-screen">` as the root and the calculator content is inside `<div className="mx-auto max-w-3xl">`, not `<main>`.

**`prose` Classes Without `@tailwindcss/typography`**  
`BlogLayout.tsx` applies Tailwind prose classes (`prose prose-blue prose-lg prose-headings:*`), but `@tailwindcss/typography` is not listed in `package.json`. In Tailwind v4, the typography plugin must be explicitly installed. Without it, all prose styles are silently ignored — blog article HTML has no prose formatting applied.

---

## 11. Performance Impact Audit

### What works
- Sarabun loaded with `display: 'swap'` — prevents invisible text ✓
- GA4 and Vercel Analytics use `strategy="afterInteractive"` — deferred ✓
- Only `DiaperCalculator.tsx` uses `'use client'` — minimal client-side JS ✓
- No images anywhere — no LCP/CLS image concerns ✓
- `BLOG_POSTS` data is static (no API calls) ✓

### Issues

**Homepage Renders 30 Blog Posts Fully**  
`app/page.tsx` maps all 30 `BLOG_POSTS` entries without a slice. This generates 30 `<Link>` components and their children on the homepage, inflating HTML size and Time-to-Interactive unnecessarily. The section is labeled "บทความล่าสุด" (latest articles) but shows all 30.

**No `@tailwindcss/typography` Package**  
If prose styles aren't resolving, the blog article body uses unstyled HTML — no font sizing, spacing, or list styles — which affects both UX and Core Web Vitals (no layout shift from missing styles at least, but legibility suffers).

**Tailwind v4 Import**  
`globals.css` uses `@import "tailwindcss"` (v4 syntax) ✓. This is correct for Tailwind v4 and should JIT-compile only used classes.

**JSON-LD in `<head>` vs. `<body>`**  
`app/layout.tsx` injects `websiteSchema()` JSON-LD inside `<head>`. Individual pages inject additional schemas via `dangerouslySetInnerHTML` inside the component, which lands in `<body>`. This is technically valid but non-standard placement.

**No `next/image` Component**  
No images exist yet, but when product images, author photos, or OG images are added, ensuring `next/image` with `priority` for above-fold images will be important.

---

## 12. Summary Score Card

| Dimension | Status | Severity |
|---|---|---|
| Hero | Functional but narratively weak | Medium |
| Navigation | No mobile menu; 4 duplicate implementations | Critical |
| CTA | Primary strong; secondary misleading; About CTA weak | High |
| Information Hierarchy | 30 posts on homepage; About buried | High |
| Visual Hierarchy | Generally good; blog card titles too small | Medium |
| Whitespace | Good; empty tools grid imbalanced | Low |
| Component Reuse | Nav/footer duplicated; utility functions duplicated | High |
| Mobile UX | No mobile navigation at all | Critical |
| Accessibility | Missing skip link; contrast failures; no ARIA on nav | High |
| Performance | 30-post homepage map; prose plugin missing | High |

---

*Audit complete. See Implementation_Plan.md for prioritized remediation.*
