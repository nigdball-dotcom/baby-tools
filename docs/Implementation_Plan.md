# Implementation Plan — BabyTools UX Sprint 1.1
**Date:** 2026-06-26 (revised)  
**Status:** Awaiting approval — DO NOT implement until approved  
**Based on:** UX_AUDIT.md findings + Sprint 1.1 approval decisions

---

## Sprint Scope

**Sprint 1.1 focuses exclusively on the Homepage.**

- Blog page (`app/blog/page.tsx`) — DO NOT MODIFY
- Calculator page (`app/tools/diaper-cost/page.tsx`) — DO NOT MODIFY
- Blog articles (`app/blog/[slug]/page.tsx`) — DO NOT MODIFY
- BlogLayout, RelatedArticles, DiaperCalculator — DO NOT MODIFY

Shared components (`Navbar`, `Footer`, `BlogCard`, `ArrowIcon`, `utils.ts`) are built this sprint for use on the homepage. They are designed to be reused in Sprint 1.2 when Blog and Calculator pages are refactored.

---

## Deferred to Sprint 1.2

| Item | Reason |
|---|---|
| Search | Significant feature; requires blog index changes |
| Category pages | New routes + data model beyond homepage scope |
| Hub pages | New content architecture |
| Pagination | Requires blog index changes |
| Typography redesign | Requires BlogLayout changes |
| Calculator redesign | Requires tool page changes |
| Blog redesign | Blog page out of scope for Sprint 1.1 |
| BlogLayout / RelatedArticles refactor | Blog pages out of scope |
| `@tailwindcss/typography` install | Fixes blog article rendering — blog out of scope |
| Wiring Navbar/Footer into blog and calculator pages | Pages out of scope |
| formatThaiDate de-duplication in BlogLayout | BlogLayout out of scope |
| ArrowIcon wiring in BlogLayout / blog index | Those files out of scope |

---

## Current Homepage Structure

```
app/page.tsx
│
├── <header> (inline — duplicated across 4 files)
│     └── Logo · คำนวณผ้าอ้อม · บล็อก · เกี่ยวกับเรา
│         └── sm:flex ONLY — no mobile navigation
│
├── <Hero />
│     └── py-20 sm:py-28  (tall)
│         H1: "คำนวณค่าผ้าอ้อมเด็ก ฟรี ง่าย ทันที" (tool-specific framing)
│         CTA 1: คำนวณค่าผ้าอ้อม → /tools/diaper-cost
│         CTA 2: ดูเครื่องมือทั้งหมด → #tools  (only 1 tool exists)
│
├── <section id="tools">  ("เครื่องมือของเรา")
│     └── 3-col grid with 1 ToolCard — 2 columns empty on desktop
│
├── <section>  ("บทความล่าสุด")
│     └── ALL 30 BLOG_POSTS mapped — no limit
│         3-col grid on desktop, 1-col on mobile
│         "ดูทั้งหมด →" link exists but posts are unlimited
│
├── <About />  ("สร้างมาเพื่อพ่อแม่ยุคใหม่")
│     └── Trust features grid + "เครื่องมือใหม่กำลังมา" CTA box
│         Buried after 30 blog cards
│
└── <footer> (inline — duplicated across 4 files)
      └── Brand text + 3 nav links
```

---

## Target Homepage Structure

```
app/page.tsx
│
├── <Navbar />  (new shared component — Sprint 1.1 homepage only)
│     └── Logo · คำนวณผ้าอ้อม · บล็อก · เกี่ยวกับเรา
│         Mobile: hamburger → full-width dropdown
│
├── <Hero />  (modified — reduced height)
│     └── py-14 sm:py-20  (reduced from py-20 sm:py-28)
│         H1: platform-level framing (TBD — see T2-A)
│
├── <PopularTools />  (new section — replaces current tools section)
│     └── Heading: "เครื่องมือยอดนิยม"
│         1 live ToolCard + 2 "coming soon" placeholder cards
│         3-col grid, always full on desktop
│
├── <BrowseByTopic />  (new section)
│     └── Heading: "เลือกดูตามหัวข้อ"
│         6 topic cards with icon + label + article count
│         Links to /blog (Sprint 1.2: will link to /blog/topic/[slug])
│         2-col mobile · 3-col tablet · 6-col desktop
│
├── <section>  ("บทความยอดนิยม" — Popular Articles)
│     └── 6 editorially curated posts using <BlogCard />
│         3-col grid desktop · 2-col tablet · 1-col mobile
│
├── <About />  (moved up — trust signals before latest articles)
│
├── <section>  ("บทความล่าสุด" — Latest Articles)
│     └── 6 most recent posts using <BlogCard />
│         3-col grid desktop · 2-col tablet · 1-col mobile
│
├── <section>  ("View All Articles" CTA)
│     └── Centered "ดูบทความทั้งหมด →" button link to /blog
│
└── <Footer />  (new shared component — Sprint 1.1 homepage only)
      └── Brand text left · nav links right · stacks on mobile
```

---

## Data Model Changes Required

Two new exports must be added to `lib/config.ts`. These do not affect any existing exports.

### POPULAR_POST_SLUGS

Six editorially curated post slugs displayed in the "Popular Articles" section. Order determines display order.

```ts
// lib/config.ts — add this export
export const POPULAR_POST_SLUGS = [
  'mamypoko-vs-babylove',        // high search intent comparison
  'newborn-diapers-per-day',     // top-of-funnel parenting question
  'monthly-diaper-cost',         // financial — core tool use case
  'diaper-brand-comparison',     // comparison — high engagement
  'baby-first-year-expenses',    // financial planning — broad appeal
  'diaper-size-guide',           // practical guide — wide audience
] as const
```

**Editorial decision:** These 6 slugs are a starting recommendation based on content type. The owner should review and adjust before implementation. The plan implementation will use whatever 6 slugs are confirmed.

### TOPICS

Six topic objects for the "Browse by Topic" section. In Sprint 1.1 the `href` links to `/blog`. In Sprint 1.2, `href` will be updated to `/blog/topic/[slug]` when category pages exist.

```ts
// lib/config.ts — add this export
export const TOPICS = [
  {
    slug: 'diapers',
    label: 'ผ้าอ้อมและของใช้เด็ก',
    icon: '👶',
    count: 9,   // articles in this topic
    href: '/blog',
  },
  {
    slug: 'sleep',
    label: 'การนอนของลูกน้อย',
    icon: '😴',
    count: 6,
    href: '/blog',
  },
  {
    slug: 'feeding',
    label: 'การให้นมลูก',
    icon: '🍼',
    count: 6,
    href: '/blog',
  },
  {
    slug: 'finance',
    label: 'การวางแผนการเงิน',
    icon: '💰',
    count: 5,
    href: '/blog',
  },
  {
    slug: 'health',
    label: 'สุขภาพและการดูแล',
    icon: '❤️',
    count: 2,
    href: '/blog',
  },
  {
    slug: 'parenting',
    label: 'คำแนะนำสำหรับพ่อแม่',
    icon: '👨‍👩‍👧',
    count: 3,
    href: '/blog',
  },
] as const
```

**Sprint 1.2 note:** When category pages are built, `href` values update to `/blog/topic/[slug]` and the `count` is derived dynamically from BLOG_POSTS filtering.

---

## Work Items

---

### TIER 1 — Shared Infrastructure (build first, prerequisite for all homepage sections)

---

#### T1-A: Create `lib/utils.ts`

**What:** Shared utility module. Sprint 1.1 adds `formatThaiDate`. Sprint 1.2 adds more as needed.

```ts
// lib/utils.ts
export function formatThaiDate(iso: string): string {
  const months = [
    'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.',
    'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.',
  ]
  const d = new Date(iso)
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear() + 543}`
}
```

**Note:** `BlogLayout.tsx` and `app/blog/page.tsx` each define this function locally today — they are NOT modified in Sprint 1.1. The duplicate will be removed in Sprint 1.2 when those files are refactored.

**Files to create:** `lib/utils.ts`  
**Files to modify:** none  
**Estimated risk:** None  
**Estimated time:** 10 minutes

---

#### T1-B: Create `components/icons/ArrowIcon.tsx`

**What:** Extracts the shared right-arrow Heroicon SVG into one place. Used in all new homepage components.

```tsx
// components/icons/ArrowIcon.tsx
export default function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
    </svg>
  )
}
```

**Note:** `ToolCard.tsx`, `RelatedArticles.tsx`, `BlogLayout.tsx`, and `app/blog/page.tsx` each copy this SVG today — they are NOT modified in Sprint 1.1. Those files adopt ArrowIcon in Sprint 1.2.

**Files to create:** `components/icons/ArrowIcon.tsx`  
**Files to modify:** none  
**Estimated risk:** None  
**Estimated time:** 10 minutes

---

#### T1-C: Create `components/BlogCard.tsx`

**What:** Shared blog card component used in the Popular Articles and Latest Articles homepage sections. Designed with Sprint 1.2 reuse in mind (will replace inline cards in RelatedArticles and blog index).

**Interface:**
```tsx
interface BlogCardProps {
  slug: string
  title: string
  description: string
  category: string
  readingTime?: string
  date?: string     // optional — not shown on homepage sections
}
```

**Design:**
- Matches the current card style: `rounded-2xl border border-gray-100 bg-white p-5 shadow-sm`
- Category pill (blue-50/blue-600) at top
- Title: `text-sm font-bold text-gray-900` (existing scale for grid cards)
- Description: `text-xs text-gray-600 leading-relaxed line-clamp-2` (upgraded from gray-500 — contrast fix)
- "อ่านบทความ" link row with ArrowIcon
- Full card is the `<Link>` target — hover state: `shadow-md -translate-y-0.5`

**Files to create:** `components/BlogCard.tsx`  
**Files to modify:** none  
**Estimated risk:** Low  
**Estimated time:** 45 minutes

---

#### T1-D: Create `components/Navbar.tsx`

**What:** Unified navigation component replacing the 4 separate inline `<header>` implementations. In Sprint 1.1, only wired into the homepage. Blog and Calculator pages keep their existing inline headers until Sprint 1.2.

**Props:**
```tsx
interface NavbarProps {
  activeHref?: string  // marks current page for aria-current and visual state
}
```

**Desktop behavior (≥ 640px):**
- Logo left, nav links right
- Links: คำนวณผ้าอ้อม (`/tools/diaper-cost`) · บล็อก (`/blog`) · เกี่ยวกับเรา (`/#about`)
- Active link: `text-gray-900 font-semibold` + `aria-current="page"`
- Inactive links: `text-gray-600 hover:text-gray-900` (upgraded from gray-500 for contrast)

**Mobile behavior (< 640px):**
- Logo left, hamburger button right
- Tap hamburger → animated dropdown below sticky bar, full-width
- Each dropdown link: min `py-3` height (~48px tap target), border-bottom separator
- Tapping any link closes menu
- Escape key closes menu

**Accessibility spec:**
- `<nav aria-label="เมนูหลัก">` on the nav element
- Logo emoji: `<span aria-hidden="true">🍼</span>` — screen reader reads only "BabyTools"
- Hamburger button: `aria-expanded={isOpen}`, `aria-label="เปิดเมนู"` / `"ปิดเมนู"`
- Active link: `aria-current="page"`
- Focus management: first menu item receives focus when menu opens
- Escape key listener closes menu and returns focus to hamburger

**Styling:**
- Sticky on all pages: `sticky top-0 z-50`
- Background: `bg-white/90 backdrop-blur-md` (consistent — replaces the mix of /80 and /90)
- Border: `border-b border-gray-100`
- `'use client'` for mobile open/close state only

**Sprint 1.2 scope note:** Wiring this into BlogLayout, blog/page, and diaper-cost/page is a Sprint 1.2 task. The component is built to be drop-in ready.

**Files to create:** `components/Navbar.tsx` (`'use client'`)  
**Files to modify (Sprint 1.1 only):** `app/page.tsx` — replace inline `<header>` with `<Navbar activeHref="/" />`  
**Estimated risk:** Medium — adds client component, mobile menu state logic  
**Estimated time:** 3 hours

---

#### T1-E: Create `components/Footer.tsx`

**What:** Unified footer component. In Sprint 1.1, only wired into the homepage.

**Design:**
- Two-column layout: brand text left · nav links right
- Stacks on mobile: brand text above, links below, centered
- Brand text: `© {year} BabyTools · สร้างด้วยความรักสำหรับพ่อแม่ทุกคน`
- Links: คำนวณผ้าอ้อม · บล็อก
- Text color: `text-gray-500` (upgraded from gray-400 — contrast fix)
- Link padding: `px-3 py-2` min to meet touch target requirements

**Accessibility spec:**
- `<nav aria-label="ลิงก์ท้ายหน้า">` on footer nav
- `<footer>` semantic element

**Sprint 1.2 scope note:** Replacing inline footers in BlogLayout, blog/page, and diaper-cost/page is a Sprint 1.2 task.

**Files to create:** `components/Footer.tsx`  
**Files to modify (Sprint 1.1 only):** `app/page.tsx` — replace inline `<footer>` with `<Footer />`  
**Estimated risk:** Low  
**Estimated time:** 45 minutes

---

#### T1-F: Add POPULAR_POST_SLUGS and TOPICS to `lib/config.ts`

**What:** Two new exports added to the existing config file. No existing exports changed.

**Files to modify:** `lib/config.ts` — append two new `export const` blocks  
**Estimated risk:** Very Low — additive only  
**Estimated time:** 15 minutes

---

### TIER 2 — Homepage New Sections

---

#### T2-A: Reduce Hero height

**Problem:** Current `py-20 sm:py-28` (80px / 112px vertical padding) pushes content below the fold, especially on mobile. With more sections now on the homepage, the Hero should be tighter so users can see content sooner.

**Change:**
```
Current: py-20 sm:py-28
Target:  py-14 sm:py-20
```

This reduces above-fold hero height by ~30% on desktop and ~25% on mobile, allowing the Popular Tools section to begin entering the viewport on desktop without scrolling.

**No other Hero content changes in Sprint 1.1.** Hero H1 copy, CTA text, and trust line are unchanged. (T3-D in original plan regarding H1 copy rewrite requires SEO analysis — deferred.)

**Files to modify:** `components/Hero.tsx` — update two className values  
**Estimated risk:** Very Low  
**Estimated time:** 5 minutes

---

#### T2-B: Build Popular Tools section

**What:** Replaces the current "เครื่องมือของเรา" section. Same position in page flow. Adds 2 "coming soon" placeholder cards to fill the 3-column grid.

**Section design:**
- Section heading: "เครื่องมือสำหรับพ่อแม่" (or existing "เครื่องมือของเรา" — editorial decision)
- Sub-heading: "ทุกเครื่องมือฟรี รวดเร็ว และทำงานในเบราว์เซอร์ของคุณ" (unchanged)
- Grid: `sm:grid-cols-2 lg:grid-cols-3` (unchanged)
- 1 live ToolCard (diaper-cost — unchanged)
- 2 ToolCard components with `comingSoon={true}` variant

**ToolCard `comingSoon` variant:**
- Prop: `comingSoon?: boolean`
- When `comingSoon`: renders as `<div>` instead of `<Link>` (not navigable)
- Styling: `opacity-75 cursor-default` — visually muted
- Badge changes to "เร็วๆ นี้" in gray instead of green
- "เปิดเครื่องมือ" row replaced with "กำลังมา..." in gray
- No hover elevation effect

**Coming soon placeholder entries (added to TOOLS array in `app/page.tsx`):**
```ts
{
  title: 'ตารางการนอนลูกน้อย',
  description: 'ติดตามรูปแบบการนอนของลูก คำนวณชั่วโมงนอนตามช่วงอายุ',
  href: '#',
  icon: '😴',
  badge: 'เร็วๆ นี้',
  color: 'bg-purple-100',
  comingSoon: true,
},
{
  title: 'ตารางการให้นม',
  description: 'บันทึกและวางแผนตารางการให้นมสำหรับทารก',
  href: '#',
  icon: '🍼',
  badge: 'เร็วๆ นี้',
  color: 'bg-rose-100',
  comingSoon: true,
},
```

**Files to modify:**
- `app/page.tsx` — update TOOLS array (add 2 entries), update section heading
- `components/ToolCard.tsx` — add `comingSoon` prop and variant rendering

**Estimated risk:** Low  
**Estimated time:** 1.5 hours

---

#### T2-C: Build Browse by Topic section

**What:** New section between Popular Tools and Popular Articles. Six topic category cards letting users browse by subject.

**Section design:**
- Section heading: "เลือกดูตามหัวข้อ"
- Sub-heading: "บทความแบ่งตามหัวข้อที่คุณสนใจ"
- Background: `bg-gray-50` with `border-t border-gray-100` (visually separated from above)
- Grid: `grid-cols-2 sm:grid-cols-3 lg:grid-cols-6`
- Each topic card:
  - `<Link href={topic.href}>` (links to `/blog` in Sprint 1.1)
  - White background, rounded-2xl, border-gray-100, shadow-sm
  - Centered content: emoji icon (text-3xl) + label (text-sm font-semibold) + count (text-xs text-gray-500 "X บทความ")
  - Hover: shadow-md + scale-[1.02]
  - Padding: `p-4`
- Sprint 1.2 migration note: add a TODO comment in the component indicating hrefs should point to `/blog/topic/[slug]` once category pages exist

**Component:**
- This section is complex enough to warrant its own component: `components/BrowseByTopic.tsx`
- Props: `topics: typeof TOPICS`
- Stateless server component

**Files to create:** `components/BrowseByTopic.tsx`  
**Files to modify:** `app/page.tsx` — import and place `<BrowseByTopic topics={TOPICS} />` in section order  
**Estimated risk:** Low  
**Estimated time:** 1.5 hours

---

#### T2-D: Build Popular Articles section

**What:** New section using 6 editorially curated posts from POPULAR_POST_SLUGS.

**Data derivation:**
```ts
// app/page.tsx
const popularPosts = POPULAR_POST_SLUGS.map(
  (slug) => BLOG_POSTS.find((p) => p.slug === slug)
).filter(Boolean)
```

**Section design:**
- Section heading: "บทความยอดนิยม"
- Sub-heading: "บทความที่พ่อแม่ค้นหามากที่สุด"
- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Each post rendered with `<BlogCard />` (T1-C)
- No "see all" link in this section (it's curated, not a list)

**No new component file needed** — section JSX is inline in `app/page.tsx`. BlogCard handles the card rendering.

**Files to modify:** `app/page.tsx`  
**Estimated risk:** Low — depends on T1-C (BlogCard) and T1-F (POPULAR_POST_SLUGS)  
**Estimated time:** 30 minutes

---

#### T2-E: Build Latest Articles section

**What:** Replaces the current "บทความล่าสุด" section. Shows 6 posts (not 30).

**Data derivation:**
```ts
// app/page.tsx
const latestPosts = BLOG_POSTS.slice(0, 6)
```

**Section design:**
- Section heading: "บทความล่าสุด"
- Sub-heading: "คำแนะนำและข้อมูลเพื่อพ่อแม่ไทย"
- Background: `bg-gray-50 border-t border-gray-100` (matches current section styling)
- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Each post rendered with `<BlogCard />` (T1-C)
- Header row: section title left · "ดูทั้งหมด →" link right (desktop only — currently `hidden sm:inline-flex`, keep as is)
- Mobile "ดูบทความทั้งหมด →" link below grid (currently exists — keep as is)

**This directly replaces the existing blog preview section in `app/page.tsx`.** The JSX structure is similar; the key changes are: using `<BlogCard />`, limiting to 6 posts, and the grid column count.

**Files to modify:** `app/page.tsx`  
**Estimated risk:** Low  
**Estimated time:** 30 minutes

---

#### T2-F: Build View All Articles CTA

**What:** Simple link section between Latest Articles and Footer.

**Design:**
- Full-width centered row with `py-10`
- Single `<Link>` styled as a secondary button:  
  `border border-gray-200 bg-white rounded-xl px-8 py-3 font-semibold text-gray-700 hover:bg-gray-50`
- Text: "ดูบทความทั้งหมด →"
- Link: `/blog`
- Optional: article count text above button ("มีบทความทั้งหมด {BLOG_POSTS.length} บทความ")

**No new component.** Inline section in `app/page.tsx`.

**Files to modify:** `app/page.tsx`  
**Estimated risk:** None  
**Estimated time:** 15 minutes

---

#### T2-G: Assemble new section order in `app/page.tsx`

**What:** Wire all sections together in the approved order. This is the final assembly step after individual sections are built.

```
Target order in app/page.tsx:
1. <Navbar activeHref="/" />
2. <Hero />                           (modified — T2-A)
3. Popular Tools section              (T2-B)
4. <BrowseByTopic topics={TOPICS} />  (T2-C)
5. Popular Articles section           (T2-D)
6. <About />                          (moved — was position 5)
7. Latest Articles section            (T2-E)
8. View All Articles CTA              (T2-F)
9. <Footer />
```

**Files to modify:** `app/page.tsx` — section ordering, removal of old inline header/footer, removal of old 30-post map  
**Estimated risk:** Low  
**Estimated time:** 30 minutes (mostly cut/paste and ordering)

---

### TIER 3 — Accessibility & Polish

---

#### T3-A: Add skip navigation link

**What:** First focusable element on every page, invisible until focused. Enables keyboard users to skip the sticky navigation.

```tsx
// app/layout.tsx — first child of <body>
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:fixed focus:z-[200] focus:top-4 focus:left-4 focus:rounded-xl focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white focus:font-semibold focus:shadow-lg"
>
  ข้ามไปยังเนื้อหาหลัก
</a>
```

Also add `id="main-content"` to the `<main>` element in `app/page.tsx`.

**Note:** Only `app/layout.tsx` and `app/page.tsx` are modified. Blog/calculator pages get their `id="main-content"` in Sprint 1.2.

**Files to modify:**
- `app/layout.tsx` — add skip link as first body child
- `app/page.tsx` — add `id="main-content"` to `<main>`

**Estimated risk:** Very Low  
**Estimated time:** 20 minutes

---

#### T3-B: Hero accessibility fixes

**What:**
1. Add `aria-hidden="true"` to the 🍼 emoji inside the Hero badge span
2. Add `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:outline-none` to both Hero CTAs

**Files to modify:** `components/Hero.tsx`  
**Estimated risk:** Very Low  
**Estimated time:** 10 minutes

---

#### T3-C: Fix About section CTA contrast

**What:** Body text inside the blue CTA box uses `text-blue-100` which fails WCAG AA on `bg-blue-600` (~2.7:1). Change to `text-white` (21:1 — passes).

**Current:**
```tsx
<p className="mt-3 text-blue-100">ตารางการให้นม ตารางนอน...</p>
<p className="mt-6 text-sm text-blue-200">...</p>
```

**Target:** Replace `text-blue-100` with `text-white`, `text-blue-200` with `text-blue-100` (slightly better contrast). The inline `<Link>` text within that paragraph should be `text-white underline`.

**Files to modify:** `components/About.tsx`  
**Estimated risk:** Very Low  
**Estimated time:** 10 minutes

---

## Files Summary

### Files to CREATE (Sprint 1.1)

| File | Purpose | Tier |
|---|---|---|
| `lib/utils.ts` | formatThaiDate utility | T1-A |
| `components/icons/ArrowIcon.tsx` | Shared arrow icon SVG | T1-B |
| `components/BlogCard.tsx` | Shared blog post card | T1-C |
| `components/Navbar.tsx` | Shared navigation (mobile + desktop) | T1-D |
| `components/Footer.tsx` | Shared footer | T1-E |
| `components/BrowseByTopic.tsx` | Topic browsing grid section | T2-C |

### Files to MODIFY (Sprint 1.1)

| File | Changes | Tier(s) |
|---|---|---|
| `lib/config.ts` | Add POPULAR_POST_SLUGS, TOPICS | T1-F |
| `app/page.tsx` | Replace inline header/footer; new section structure; use all new components | T2-B through T2-G, T3-A |
| `components/Hero.tsx` | Reduce py; aria-hidden emoji; focus-visible on CTAs | T2-A, T3-B |
| `components/ToolCard.tsx` | Add comingSoon prop + variant styling | T2-B |
| `components/About.tsx` | Fix CTA contrast | T3-C |
| `app/layout.tsx` | Add skip navigation link | T3-A |

### Files NOT MODIFIED (Sprint 1.1)

| File | Next action |
|---|---|
| `components/BlogLayout.tsx` | Sprint 1.2 — adopt Navbar, Footer, ArrowIcon; remove formatThaiDate |
| `components/RelatedArticles.tsx` | Sprint 1.2 — adopt BlogCard, ArrowIcon |
| `components/DiaperCalculator.tsx` | Sprint 1.2 — calculator redesign |
| `app/blog/page.tsx` | Sprint 1.2 — blog redesign |
| `app/tools/diaper-cost/page.tsx` | Sprint 1.2 — calculator page redesign |
| `app/blog/[slug]/page.tsx` (all) | Sprint 1.2 — typography redesign |
| `package.json` / `globals.css` | Sprint 1.2 — typography plugin |

---

## Implementation Order

```
Step 1 — Utilities and primitives (no visual output, no deps):
  T1-A  lib/utils.ts                              (10 min)
  T1-B  icons/ArrowIcon.tsx                       (10 min)
  T1-F  lib/config.ts additions                   (15 min)

Step 2 — Shared components (self-contained, testable individually):
  T1-C  BlogCard.tsx                              (45 min)
  T1-E  Footer.tsx                                (45 min)
  T1-D  Navbar.tsx                                (3 hours)

Step 3 — New homepage section components:
  T2-B  ToolCard.tsx comingSoon variant           (45 min)
  T2-C  BrowseByTopic.tsx                         (1.5 hours)

Step 4 — Homepage assembly in app/page.tsx:
  T2-A  Hero height reduction                     (5 min)
  T3-B  Hero accessibility fixes                  (10 min)
  T3-C  About contrast fix                        (10 min)
  T2-G  New section order + wire all components   (1 hour)
  (includes T2-D Popular Articles inline)
  (includes T2-E Latest Articles inline)
  (includes T2-F View All Articles inline)

Step 5 — Accessibility:
  T3-A  Skip link in layout + page               (20 min)
```

**Total estimated time: ~9 hours**  
**Checkpoint after Step 2:** Shared components exist and are individually verifiable  
**Checkpoint after Step 3:** New section components exist in isolation  
**Checkpoint after Step 4:** Homepage renders correctly end-to-end  
**Checkpoint after Step 5:** Full accessibility pass

---

## Responsive Considerations

| Component / Section | Mobile < 640px | Tablet 640–1024px | Desktop > 1024px |
|---|---|---|---|
| Navbar | Logo + hamburger; full-width dropdown | Logo + inline links | Logo + inline links |
| Hero | Reduced padding; CTAs stacked full-width | CTAs side by side | CTAs side by side |
| Popular Tools | 1 column | 2 columns | 3 columns |
| Browse by Topic | 2 columns | 3 columns | 6 columns |
| Popular Articles | 1 column | 2 columns | 3 columns |
| About features | 1 column | 2 columns | 4 columns |
| Latest Articles | 1 column | 2 columns | 3 columns |
| View All CTA | Full-width centered | Centered | Centered |
| Footer | Stacked (brand above, links below) | Side by side | Side by side |

**Mobile menu specifics:**
- Dropdown appears below sticky header, full viewport width
- Each nav item: min `py-3` height (≥48px tap target)
- Separator lines between items
- Tap outside / Escape key / tap any link → closes menu
- Menu slides or fades in (CSS transition, no JS animation library needed)

---

## Accessibility Considerations

| Item | WCAG Criterion | Sprint 1.1 Action |
|---|---|---|
| Skip link | 2.4.1 Bypass Blocks (A) | Add to layout.tsx + `id="main-content"` on homepage |
| Mobile menu keyboard | 2.1.1 Keyboard (A) | Escape closes; first item receives focus on open |
| Mobile menu role | 4.1.2 Name, Role, Value (A) | `aria-expanded` on hamburger; `aria-label` on button |
| Nav landmark label | 4.1.2 Name, Role, Value (A) | `aria-label="เมนูหลัก"` on header nav |
| Footer nav label | 4.1.2 Name, Role, Value (A) | `aria-label="ลิงก์ท้ายหน้า"` on footer nav |
| Logo emoji | 1.1.1 Non-text Content (A) | `aria-hidden="true"` on all emoji in logo/badge |
| Active nav state | 4.1.2 Name, Role, Value (A) | `aria-current="page"` on active Navbar link |
| Gray text contrast | 1.4.3 Contrast Minimum (AA) | Nav/footer text: gray-600 min; BlogCard description: gray-600 |
| About CTA contrast | 1.4.3 Contrast Minimum (AA) | Change blue-100/blue-200 text to white/white |
| Hero focus rings | 2.4.11 Focus Appearance (AA, WCAG 2.2) | Explicit `focus-visible:ring-*` on CTAs |
| Coming soon cards | 2.1.1 Keyboard (A) | Non-interactive (`<div>`, not `<Link>`) — not in tab order |
| Topic cards | 2.4.4 Link Purpose (A) | Accessible link text includes topic label |

---

## Performance Considerations

| Item | Impact | Sprint 1.1 Action |
|---|---|---|
| 30 → 6 latest posts on homepage | ~80% HTML reduction in that section | `.slice(0, 6)` (T2-E) |
| 6 popular posts (filtered) | Small — 6 find() calls on 30-item array | No impact |
| Navbar 'use client' | ~2KB JS for menu toggle state | Acceptable; scoped to toggle only |
| New sections HTML | 3 new sections ≈ +200 lines HTML | Offset by removing 24 blog cards (~600 lines) |
| BrowseByTopic | 6 static Link elements — negligible | Static, no JS |
| Shared components | No impact — Next.js RSC static renders | Compile-time only |
| ArrowIcon | Eliminates 4× SVG duplication in new components | Minor HTML reduction |

**Net result:** Homepage HTML should be meaningfully smaller than current (30-post map removed) despite adding 3 new sections.

---

## QA Checklist

### Pre-implementation
- [ ] Confirm branch strategy (recommended: `feat/ux-sprint-1.1` feature branch)
- [ ] Confirm POPULAR_POST_SLUGS — owner to review and approve the 6 selected article slugs
- [ ] Confirm section heading copy: "เครื่องมือสำหรับพ่อแม่" vs "เครื่องมือยอดนิยม" for Popular Tools section
- [ ] Confirm "coming soon" tool titles and descriptions are accurate

### After Step 2 (Shared components built):
- [ ] Navbar renders correctly on desktop — all links visible
- [ ] Navbar active state highlights correct link (test with activeHref="/")
- [ ] Navbar hamburger button visible on < 640px
- [ ] Hamburger tapped → dropdown appears with all links
- [ ] Dropdown link tapped → menu closes
- [ ] Escape key → menu closes
- [ ] Footer renders correctly at mobile (stacked) and desktop (side by side)
- [ ] BlogCard renders with all props: category pill, title, description, "อ่านบทความ" link
- [ ] BlogCard links navigate correctly to `/blog/[slug]`
- [ ] ArrowIcon renders at correct size across contexts

### After Step 3 (New section components):
- [ ] ToolCard comingSoon variant: renders as `<div>`, not tabbable, "เร็วๆ นี้" badge, muted appearance
- [ ] ToolCard normal variant: unchanged from current
- [ ] BrowseByTopic renders 6 topic cards with icons, labels, article counts
- [ ] BrowseByTopic links all point to `/blog`
- [ ] BrowseByTopic grid: 2-col mobile, 3-col tablet, 6-col desktop

### After Step 4 (Homepage assembled):
- [ ] Section order matches approved structure: Navbar → Hero → Popular Tools → Browse by Topic → Popular Articles → About → Latest Articles → View All → Footer
- [ ] Hero height is visibly reduced (Popular Tools section begins appearing at viewport edge on desktop)
- [ ] Popular Tools: 3 cards total (1 live + 2 coming soon), grid fully filled on desktop
- [ ] Popular Articles: exactly 6 posts displayed, matching POPULAR_POST_SLUGS order
- [ ] About section appears before Latest Articles (trust signals above article list)
- [ ] Latest Articles: exactly 6 posts displayed (first 6 of BLOG_POSTS)
- [ ] "ดูทั้งหมด →" link in Latest Articles header: visible on desktop, hidden on mobile
- [ ] "ดูบทความทั้งหมด" mobile link: visible below Latest Articles on mobile
- [ ] "View All Articles" CTA section: visible below Latest Articles on all screen sizes
- [ ] View All CTA links to `/blog`
- [ ] Inline `<header>` removed from `app/page.tsx` — no duplicate nav
- [ ] Inline `<footer>` removed from `app/page.tsx` — no duplicate footer
- [ ] `npm run build` passes with zero errors and zero warnings

### After Step 5 (Accessibility):
- [ ] Tab on any page → skip link appears at top-left with blue background
- [ ] Skip link navigates to `#main-content` on homepage
- [ ] All interactive elements (buttons, nav links, card links) show visible focus ring when tabbed to
- [ ] Logo "🍼" emoji announced as nothing (screen reader skips it)
- [ ] Hero badge "🍼" emoji announced as nothing
- [ ] Nav element has accessible name ("เมนูหลัก") in accessibility tree
- [ ] Footer nav has accessible name ("ลิงก์ท้ายหน้า") in accessibility tree
- [ ] About CTA box: text is white on blue — no blue-100/blue-200 text visible

### Cross-browser / device:
- [ ] iOS Safari — Mobile nav opens/closes correctly
- [ ] Chrome Android — Full homepage scroll, all sections render
- [ ] Chrome desktop — 1280px — Popular Tools 3-col, Browse by Topic 6-col
- [ ] Chrome desktop — 768px — Browse by Topic 3-col, articles 2-col
- [ ] 375px viewport (iPhone SE) — single column layout throughout
- [ ] 320px viewport — no horizontal overflow

### Blog/Calculator regression (confirm untouched):
- [ ] Blog index page (`/blog`) renders identically to pre-sprint
- [ ] Individual blog articles render identically to pre-sprint
- [ ] Diaper calculator (`/tools/diaper-cost`) renders identically to pre-sprint
- [ ] Calculator produces correct results
- [ ] Redirect `/tools/diaper-calculator` → `/tools/diaper-cost` still works

### SEO:
- [ ] Homepage canonical URL unchanged
- [ ] Homepage JSON-LD WebSite schema still present in `<head>`
- [ ] Homepage H1 unchanged (no SEO risk from copy change — T3-D not implemented this sprint)
- [ ] `next build` completes — no static generation errors
- [ ] Sitemap (`/sitemap.xml`) unchanged
- [ ] Robots (`/robots.txt`) unchanged

---

*Awaiting approval to begin implementation.*
