# Growth Sprint 2 Freeze

Version: 1.0

Status: FROZEN

Last Updated: 2026-07-09

## Sprint Summary

| Field | Value |
|---|---|
| **Objective** | Increase organic CTR and clicks across the diaper and sleep content cluster via answer-first optimization, Featured Snippet eligibility, FAQ schema, and internal link strengthening |
| **Duration** | Growth Sprint 2 (completed 2026-07-09) |
| **Result** | 8 existing articles optimized, 2 new articles created (10 total), 1 hero image updated, affiliate architecture centralized |
| **Build status** | ✓ Clean — 47/47 static pages, 0 TypeScript errors |
| **Deployment status** | Deployed to Vercel — `dd9bbac..d726021 main → main` |

---

## Completed Articles

### Phase 1 — nursery-cost-thailand
**Commit:** `7c68519`
**Purpose:** First Growth Sprint 2 pass — answer-first optimization, SEO title improvement, Featured Snippet block, FAQ schema audit, internal linking to diaper cost calculator

---

### Phase 2 — diaper-size-guide
**Commit:** `b5dac55`
**Purpose:** Optimize for size-related queries — improve meta description specificity, add คำตอบสั้น, strengthen links to newborn and diaper cost articles

---

### Phase 3 — best-overnight-diaper
**Commit:** `04de54e`
**Purpose:** Target overnight diaper search intent — answer-first block with conditional recommendations, FAQ schema, links to comparison cluster (mamypoko-vs-babylove, huggies-vs-mamypoko)

---

### Phase 4 — monthly-diaper-cost
**Commit:** `fafcff9`
**Purpose:** Optimize for cost-calculation queries — improve meta, add คำตอบสั้น with specific price ranges, link to diaper cost calculator tool and comparison articles

---

### Phase 5a — newborn-diapers-per-day
**Commit:** `b30c0a8`
**Purpose:** Target newborn usage frequency queries — answer-first with specific numbers (8–12 ชิ้น/วัน), FAQ targeting quantity and size questions

---

### Phase 5b — how-to-change-diaper
**Commit:** `f9faad4`
**Purpose:** Optimize for diaper-change frequency queries — improve step structure, add contextual links to newborn-diapers-per-day and diaper-rash-prevention

---

### Phase 5c — baby-sleep-hours-by-age (S004)
**Commit:** `d6da80b`
**Purpose:** New hub article for sleep hours by age — age navigation CTA, sleep table, คำตอบสั้น, faqSchema, links to age-specific sleep articles

---

### Phase 5d — baby-nap-schedule (S005)
**Commits:** `28f0f8b` (article), `4eaf3d9` (hero image update)
**Purpose:** New article targeting nap schedule queries — nap table by age, คำตอบสั้น answering "should I wake my baby from a nap?", FAQ ordered by search volume, hero image `webheroS005_2.png`

---

### Phase 6 — mamypoko-vs-babylove
**Commit:** `dd9bbac`
**Purpose:** Optimize primary diaper comparison article — rewrite title/description to answer-first, add คำตอบสั้น with conditional brand recommendations, add faqSchema, new FAQ questions targeting "อันไหนดีกว่า?" and "Extra Dry กลางคืน?", contextual links to best-overnight-diaper and diaper-rash-prevention, post-FAQ CTA cluster block, E-E-A-T improved by removing absolute claims

---

### Phase 7 — diaper-brand-comparison
**Commit:** `d726021`
**Purpose:** Optimize hub comparison article — rewrite meta to open with "ผ้าอ้อมยี่ห้อไหนดี?", add คำตอบสั้น opening with "ไม่มีผ้าอ้อมยี่ห้อไหนดีที่สุดสำหรับเด็กทุกคน", remove duplicate faqSchema (FAQ component owns it), fix `<a>` → `<Link>` in info box, fix raw HTML in FAQ answer string, add links to all pairwise comparison articles, replace low-intent FAQ Q ("ซื้อได้จากที่ไหน?") with "ผ้าอ้อมยี่ห้อไหนซึมซับดีที่สุด?", post-FAQ CTA with full comparison cluster

---

## SEO Improvements

The following became standard practice during this sprint:

### Answer-First Content
Every article opens with a `คำตอบสั้น:` paragraph immediately after the opening context paragraph. The answer precedes all H2 sections. Answers are 40–60 Thai words and written for Featured Snippet extraction.

### Featured Snippet Block
- Label: `<strong>คำตอบสั้น:</strong>`
- Placement: after the opening `<p>`, before the first `<h2>`
- Length: 40–60 Thai words
- Structure: answer the primary question first, then add qualifying conditions
- Comparison articles: open with "ไม่มี X ที่ดีที่สุดสำหรับทุกคน" then branch by use case (budget / overnight / sensitive skin)
- Single-topic articles: state the direct answer, then add age/weight/frequency context

### FAQ Optimization
- Q1 must match the primary search query (e.g., "ยี่ห้อไหนดีกว่า?" not a secondary question)
- Order by estimated search volume, not editorial preference
- Never embed raw HTML (`<a>` tags) in `answer` strings — FAQ component renders `{item.answer}` as plain text
- Remove low-intent questions ("ซื้อได้จากที่ไหน?", "ควรเปลี่ยนยี่ห้อบ่อยๆ ไหม?")
- Replace with comparison or quantitative queries ("ยี่ห้อไหนซึมซับดีที่สุด?", "ยี่ห้อไหนดีที่สุดสำหรับ X?")

### Meta Description Optimization
- Under ~160 characters
- For comparison articles: open with the primary question ("ผ้าอ้อมยี่ห้อไหนดี?")
- Include specific numbers where available (price ranges, percentages)
- End with a use-case hint ("พร้อมแนะนำว่าควรเลือกยี่ห้อไหนและเมื่อไร")
- Never begin with a brand name if a question form is available

### Title Optimization
- Move highest-intent keyword to the front of the title
- For comparison articles: include both brand names and the comparison verb ("อันไหนดีกว่า?", "เปรียบเทียบ")
- For hub articles: include count and category ("เปรียบเทียบ 5 ยี่ห้อ")
- Avoid superlatives ("ดีที่สุด") in titles unless the article genuinely ranks multiple options

### Internal Linking
- Every article must link to at least 2 other articles in its cluster
- Anchor text must be descriptive — never "อ่านเพิ่มเติม" or "คลิกที่นี่"
- Hub articles link down to all supporting and comparison articles
- Comparison articles link to the hub and to adjacent pairwise comparisons
- Supporting articles link up to the hub

### Topic Clustering
- Diaper cluster: `diaper-brand-comparison` (hub) → pairwise comparisons → supporting articles → tools
- Sleep cluster: `baby-sleep-hours-by-age` (hub) → age-specific sleep articles
- Each hub explicitly links to all children; each child links back to hub

### Comparison Article Strategy
- Never declare one brand universally better
- Use conditional structure: "ถ้า X → แนะนำ A / ถ้า Y → แนะนำ B"
- Include a post-FAQ CTA block linking to all related pairwise comparisons
- Pairwise comparison articles must link to the hub and at least 2 sibling comparisons

---

## REVIEW_GATE

The official REVIEW_GATE for all articles entering production:

### SEO

| Check | Standard |
|---|---|
| **Title** | Primary keyword in first 40 characters; no generic phrasing; no keyword stuffing |
| **Meta** | Under ~160 characters; opens with primary question or keyword; includes specific data points; ends with use-case hint |
| **H1** | Rendered by BlogLayout from `title` prop — matches page intent |
| **H2 hierarchy** | Sequential (H2 → H3), no skipped levels; each H2 targets a distinct sub-query |
| **Featured Snippet** | `คำตอบสั้น:` block present, 40–60 Thai words, placed after opening paragraph, before first H2 |
| **FAQ** | Q1 matches primary search intent; all questions are real search queries; no raw HTML in answer strings; no low-intent questions |
| **Cannibalization** | Each article covers a distinct query; hub vs. pairwise comparisons serve different depths of intent |

### Content

| Check | Standard |
|---|---|
| **Duplicate detection** | No repeated sections, repeated tables, or repeated explanations within the same article |
| **Repetition** | If information appears twice, merge — never simply delete |
| **Helpful Content** | Concrete numbers, conditions, and caveats; no vague recommendations |
| **Answer-first** | Primary question answered before any supporting context |

### Internal Links

| Check | Standard |
|---|---|
| **Outgoing** | Minimum 3 contextual outgoing links per article; all links use `<Link>` not `<a>` |
| **Incoming** | Every new or optimized article must be linked from at least one existing article |
| **Anchor text** | Descriptive Thai text matching destination topic; never "อ่านเพิ่มเติม" or "คลิกที่นี่" |
| **Cluster balance** | Hub links to all children; children link back to hub; comparison articles link to siblings |

### CTA

| Check | Standard |
|---|---|
| **Contextual CTA** | One in-body CTA where it naturally fits (e.g., after price discussion → calculator link) |
| **Affiliate CTA** | Managed by BlogLayout `showProducts` prop — do not add inline affiliate CTAs |
| **Related article CTA** | Post-FAQ block with 3–5 related articles; use `not-prose` blue card style |

### Technical

| Check | Standard |
|---|---|
| **Schema** | `articleSchema` emitted from page; `faqSchema` emitted by `<FAQ>` component — do NOT also emit it manually from the page |
| **TOC** | All H2 ids listed in `TOC` array; TOC passed to BlogLayout; no orphan or missing ids |
| **ids** | All H2 `id` attributes are unique; all match TOC entries |
| **Build** | `npm run build` must pass with 0 TypeScript errors before commit |
| **Metadata** | `canonical`, `openGraph.url`, `openGraph.type: 'article'`, `locale: 'th_TH'` all present |

### UX

| Check | Standard |
|---|---|
| **Reading flow** | Opening → คำตอบสั้น → source attribution → H2 body sections → verdict/summary → FAQ → post-FAQ CTA |
| **Mobile scan** | Short paragraphs (2–4 lines); bullet lists for pros/cons; tables for comparisons |
| **Tables** | `not-prose` wrapper; `overflow-x-auto` for mobile; `text-sm`; alternating hover row |
| **Summary** | Comparison articles include verdict cards (green/orange pattern) before FAQ |

---

## Architecture Decisions

### FAQ Component Owns FAQ Schema
`<FAQ items={FAQ_ITEMS} />` always emits its own `faqSchema` JSON-LD script. Page components must NOT also manually emit faqSchema — this creates duplicate structured data. Only `articleSchema` should be emitted from the page component.

### BlogLayout Architecture
`BlogLayout` is the single wrapper for all blog articles. It accepts: `slug`, `title`, `description`, `date`, `readingTime`, `category`, `breadcrumbs`, `toc`, `showProducts`. The `showProducts` prop controls the affiliate product block — do not add affiliate links inline.

### Single Source of Truth for Affiliate Products
Affiliate products are managed centrally in `lib/affiliate.ts`. BlogLayout renders them via `showProducts`. No inline affiliate links in article body content.

### `<Link>` Not `<a>` for Internal Navigation
All internal links must use Next.js `<Link>` component for client-side routing. Raw `<a href=...>` is only acceptable for external links.

### No HTML in FAQ Answer Strings
`FAQItem.answer` is rendered as plain text (`{item.answer}`). Embedding `<a>` or other HTML tags in answer strings results in literal tag text visible to users. Use plain Thai text only.

### Review Before Commit
All changes are reviewed for correctness and SEO impact before staging. The REVIEW_GATE must pass before approval is requested.

### Build Before Commit
`npm run build` must pass cleanly before any commit. TypeScript errors block commit.

### Approval Before Push
Every commit requires explicit user approval of the diff and commit message before `git push`.

### Topic Cluster Philosophy
Content is organized into clusters with a hub article at the center. The hub links to all cluster members. Cluster members link back to the hub. Pairwise comparison articles also link sideways to siblings. This structure maximizes internal PageRank distribution and signals topical authority to search engines.

---

## Content Standards

### Opening
1–2 short paragraphs establishing context (why this decision matters, scale of the problem). Include at least one specific number (cost, frequency, duration). Link the most prominent number to a related supporting article if one exists.

### Direct Answer (คำตอบสั้น)
- Label: `<strong>คำตอบสั้น:</strong>`
- 40–60 Thai words
- Placed immediately after opening paragraphs, before first H2
- For comparison articles: open with "ไม่มี X ที่ดีที่สุดสำหรับทุกคน", then branch by use case
- For informational articles: state the answer directly, then add age/condition qualifiers
- Bold brand names and key figures

### Tables
- Wrapped in `not-prose my-4 overflow-x-auto rounded-xl border border-gray-100`
- `text-sm` on table
- Blue header row: `bg-blue-50`
- `hover:bg-gray-50` on rows
- Footnote below table if data requires qualification

### Body Sections (H2)
- Each H2 targets a distinct sub-query
- Start with a 1–2 sentence context paragraph
- Follow with bullet list or table for scannable comparison data
- End section with a contextual internal link where relevant
- Comparison articles use per-brand sections (จุดเด่น / จุดด้อย / ราคา pattern)

### FAQ
- 4–6 items
- Q1 = primary search intent of the article
- All questions are real Thai search queries
- Answers are plain text only (no HTML)
- Answers are 2–4 sentences: direct answer + supporting detail
- Rendered by `<FAQ items={FAQ_ITEMS} />` which handles both UI and faqSchema

### Summary / Verdict
- Comparison articles: use the 2-column verdict card pattern (green = budget pick, orange = premium/overnight pick)
- Informational articles: 1–2 paragraph summary restating key numbers
- Always include link to diaper cost calculator if cost is discussed

### CTA (In-Body)
- One contextual CTA block per article maximum
- Blue-on-blue card style for calculator CTAs
- No sales language ("ฟรี" is acceptable; "ซื้อเลย" is not)
- Placed after the section it relates to, not at the top

### Related Articles (Post-FAQ)
- `not-prose mt-8 rounded-2xl bg-blue-50 border border-blue-100 p-6` card
- Heading: short label ("เปรียบเทียบเชิงลึกแบบ 2 ยี่ห้อ", "บทความที่เกี่ยวข้อง")
- 3–5 links with descriptive anchor text and a short dash-separated description
- Links use `text-blue-700 hover:underline font-medium`

---

## Internal Linking Standards

### Hub Articles
A hub article covers the broadest query in its cluster. It links to every child article in the cluster. It receives links from all children.

- Diaper hub: `diaper-brand-comparison` → links to all 4 pairwise comparisons + best-overnight-diaper + diaper-size-guide + diaper-rash-prevention + newborn-diapers-per-day
- Sleep hub: `baby-sleep-hours-by-age` → links to all 5 age-specific sleep articles + baby-nap-schedule

### Supporting Articles
Informational deep-dives on a subtopic. They link up to the hub and sideways to related supporting articles.

- Examples: `newborn-diapers-per-day`, `diaper-size-guide`, `diaper-rash-prevention`, `how-to-change-diaper`
- Must link to hub + at least 1 sibling supporting article

### Comparison Articles (Pairwise)
Cover a head-to-head between two brands or options. They link to the hub, to `best-overnight-diaper`, and to at least 2 sibling comparisons.

- Examples: `mamypoko-vs-babylove`, `huggies-vs-mamypoko`, `babylove-vs-huggies`
- Must link: hub (`diaper-brand-comparison`) + adjacent comparisons + best-overnight-diaper

### Review Articles
Evaluate a product or category for a specific use case. They link to relevant comparison articles and the hub.

- Example: `best-overnight-diaper`
- Must link to pairwise comparisons where those brands appear in the review

### Money Pages (Tools)
- `tools/diaper-cost` — every article that mentions cost or price must include at least one link to this tool
- Anchor text: "เครื่องคำนวณค่าผ้าอ้อม" or inline contextual text

### Affiliate Pages
- Managed by BlogLayout `showProducts` prop
- No duplicate affiliate links in article body
- Use `showProducts` only on articles where product recommendations are contextually appropriate (reviews, comparisons, how-tos)

---

## SEO Standards

### Title
- Primary keyword in first 40 characters
- No keyword stuffing (max 2 keyword variations)
- Year ("2026") included for freshness signal
- Comparison: both brand names + comparison verb
- Hub: category name + count ("5 ยี่ห้อ")
- Question format preferred for high-intent queries

### Meta Description
- Under ~160 characters
- Opens with primary keyword or question
- Includes at least one specific data point (number, price, duration)
- Ends with use-case promise ("พร้อมแนะนำว่าควรเลือกยี่ห้อไหนและเมื่อไร")
- Must not begin with a brand name for comparison articles

### Featured Snippet
- `คำตอบสั้น:` block, 40–60 Thai words
- Placed before all H2 sections
- Written as a direct answer paragraph — not a list, not a table
- For comparison: conditional structure by use case
- Bold the key recommendations

### FAQ
- 4–6 questions per article
- Q1 = primary search intent
- Ordered by search volume descending
- All plain text (no HTML in answer strings)
- Questions are real search queries, not editorial headings
- Handled by `<FAQ>` component (UI + schema)

### Schema
- Every article: `articleSchema` from page component
- Every FAQ block: `faqSchema` from `<FAQ>` component (automatic)
- Do NOT emit faqSchema manually from page — causes duplicate JSON-LD
- Canonical URL: `${SITE_URL}/blog/${SLUG}`

### Internal Links
- Minimum 3 outgoing links per article
- All use `<Link>` component
- All anchor text is descriptive Thai
- Every article links to at least one money page (diaper cost calculator) if cost is discussed

### Helpful Content
- Specific numbers over vague statements ("1.80–3.20 บาท/ชิ้น" not "ราคาถูก")
- Conditional recommendations over absolutes ("ถ้า X → แนะนำ A" not "A ดีที่สุด")
- Source attribution box for medical or clinical claims

### E-E-A-T
- Source attribution box on articles citing medical sources (กุมารแพทย์, NHS, Mayo Clinic, Nemours)
- No absolute brand superiority claims — always conditional
- Author of content signals derived from specific use-case knowledge, not generic praise

---

## Sprint Metrics

| Metric | Value |
|---|---|
| Existing articles optimized | 8 (nursery-cost-thailand, diaper-size-guide, best-overnight-diaper, monthly-diaper-cost, newborn-diapers-per-day, how-to-change-diaper, mamypoko-vs-babylove, diaper-brand-comparison) |
| New articles created | 2 (baby-sleep-hours-by-age S004, baby-nap-schedule S005) |
| Total article work | 10 |
| Hero images updated | 1 (WebHeroS005.png → webheroS005_2.png) |
| Internal links added | ~25 across all phases |
| faqSchema fixed (duplicate removed) | 1 (diaper-brand-comparison) |
| FAQPage schemas active | All articles using `<FAQ>` component |
| ArticleSchema schemas active | All blog articles |
| Topic clusters strengthened | 2 (diaper cluster, sleep cluster) |
| คำตอบสั้น blocks added | 7 articles |
| Build status | ✓ Clean — 47/47 static pages |
| Deployments | Vercel auto-deploy on each push to main |

---

## Lessons Learned

### What Worked Well
- **Conditional recommendation language** ("ถ้า X → แนะนำ A") is more SEO-friendly than absolute superlatives and satisfies Helpful Content guidelines simultaneously
- **REVIEW_GATE before commit** caught real bugs: raw HTML in FAQ answer strings, duplicate faqSchema, `<a>` instead of `<Link>`, missing cluster links
- **Answer-first structure** (คำตอบสั้น block) is easy to add without restructuring the rest of the article
- **Post-FAQ CTA clusters** significantly improve internal link density on comparison articles without disrupting the reading flow
- **Phase-by-phase approval** (build → review → approve → commit → push) keeps the main branch stable at every step

### What Should Never Be Repeated
- Do NOT embed HTML tags in `FAQItem.answer` strings — the FAQ component renders them as plain text, so tags appear literally
- Do NOT emit `faqSchema` manually from a page that uses `<FAQ>` — the component handles it; duplicate structured data is a Search Console issue
- Do NOT use `<a href=...>` for internal links — always use `<Link>` from `next/link`
- Do NOT commit before build passes — even cosmetic changes can introduce TypeScript errors
- Do NOT push without explicit user approval of the diff

### What Became Official Standards
- `คำตอบสั้น` block (40–60 words, before first H2) on every article
- FAQ Q1 = primary search intent
- `<FAQ>` component owns faqSchema — page only emits articleSchema
- Conditional recommendation language for all comparison articles
- Post-FAQ CTA block with cluster links on all comparison and review articles
- All internal links via `<Link>`, all anchor text descriptive

---

## Locked Decisions

The following decisions are frozen and apply to all future development unless explicitly changed via a documented RFC:

| Decision | Standard |
|---|---|
| **REVIEW_GATE** | Every article must pass the full REVIEW_GATE checklist before commit |
| **Answer-first** | All articles must have a คำตอบสั้น block (40–60 words) before the first H2 |
| **Featured Snippet structure** | Conditional for comparisons; direct answer for informational |
| **Build before Commit** | `npm run build` must pass cleanly; zero TypeScript errors |
| **Approval before Push** | User must explicitly approve diff + commit message before `git push` |
| **FAQ component owns faqSchema** | Never emit faqSchema manually from a page component |
| **No HTML in FAQ answers** | `FAQItem.answer` is plain text only |
| **`<Link>` for internal navigation** | Never use `<a>` for internal links |
| **Descriptive anchor text** | Never "อ่านเพิ่มเติม" or "คลิกที่นี่" |
| **Topic Cluster Strategy** | Hub → children → tools; all nodes link to hub; hub links to all nodes |
| **Affiliate Strategy** | Centralized via `lib/affiliate.ts`; controlled by BlogLayout `showProducts` prop; no inline affiliate links |
| **Blog Architecture** | All articles use `BlogLayout`; all follow Opening → คำตอบสั้น → H2 body → FAQ → post-FAQ CTA structure |
| **Conditional recommendations** | Comparison articles never declare one option universally better |
| **Single Source of Truth** | All configuration — affiliate products, site URLs, blog metadata — is stored in centralized `lib/` files; article pages import from these sources and do not define configuration inline |
| **FAQ component owns faqSchema** | `<FAQ>` component always emits faqSchema; page components emit only `articleSchema`; never emit faqSchema in both places |
| **Sprint Freeze required** | A `GROWTH_SPRINT_X_FREEZE.md` document must be committed and approved before the next Growth Sprint begins |

---

## Known Technical Debt

| Item | File | Severity | Description |
|---|---|---|---|
| Duplicate faqSchema | `app/blog/mamypoko-vs-babylove/page.tsx` | Medium | Page manually emits `faqSchema` JSON-LD AND `<FAQ>` component also emits it — results in duplicate structured data on the page. The identical bug was identified and fixed in `diaper-brand-comparison` during Phase 7. Must be resolved before Growth Sprint 3. |

---

## Backlog

Items identified but not implemented during this sprint. Do NOT implement until scheduled in a future sprint.

### P1 — Critical Next Sprint

- Fix duplicate faqSchema on `mamypoko-vs-babylove` *(see Known Technical Debt)*
- Structured data testing via Google Rich Results Test for all optimized articles

### P2 — Growth Sprint 3

- Optimize remaining comparison articles: `babylove-vs-huggies`, `huggies-vs-mamypoko`
- Optimize sleep cluster articles: `baby-sleep-1-month`, `baby-sleep-2-months`, `baby-sleep-3-months`, `baby-sleep-6-months`, `baby-sleep-1-year`, `newborn-sleep-hours`
- Optimize feeding cluster: `baby-feeding-1-month` through `baby-feeding-6-months`, `newborn-feeding-schedule`, `breastmilk-vs-formula`
- S006 article (next sleep or feeding topic)
- Search Console integration and click-through rate monitoring

### P3 — Future Ideas

- Baby expense deep-dive cluster (`baby-first-year-expenses`, `monthly-baby-budget`)
- Diaper rash treatment article expansion (current `diaper-rash-prevention` is thin)
- Sleep calculator tool (input age → recommended hours + nap schedule)
- Feeding calculator tool (input age/weight → feeding frequency and volume)
- Image optimization audit (WebP conversion, lazy loading review)
- Core Web Vitals baseline measurement
- Affiliate expansion — sleep cluster (white noise machines, sleep sacks)
- Review affiliate product selection against current bestseller data

---

## Sprint Baseline

Growth Sprint 3 must use this document as the official baseline.

The following items are considered frozen until the next Sprint Freeze:

- Architecture
- SEO standards
- REVIEW_GATE workflow
- Content standards
- Internal linking strategy
- Affiliate architecture
- Documentation standards

No architectural, SEO, REVIEW_GATE, or workflow changes should be introduced without updating the next Sprint Freeze document.

Any approved improvement during Growth Sprint 3 must be documented in the next Freeze document before becoming the new baseline.
