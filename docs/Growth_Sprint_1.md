# Growth Sprint 1 — First Organic Click

**Date:** 2026-07-08  
**Goal:** Increase probability of first organic clicks from Google  
**Method:** Optimize existing pages — no new articles  
**Data sources:** Search Console (Jun 21–Jul 5), GA4 (Jun 10–Jul 7), source code for 4 target pages

---

## Executive Summary

The site has 229 Search Console impressions and 0 clicks. The average positions for most pages sit between 30–50 — too deep for clicks. However, four pages are already ranked in the 8–25 band where clicks begin to occur. These are the only pages that can generate organic clicks in the near term without new content.

The path to the first click is narrow but clear: optimize title tags and meta descriptions on the two pages currently positioned in the top 11 (`nursery-cost-thailand` at pos 10.85 and `diaper-size-guide` at pos 11), then use targeted content additions on two mid-range pages to accelerate their approach to the click zone.

No new articles are recommended in this sprint. All wins come from editing existing pages.

---

## Top Opportunity Pages

Pages ranked within position 8–25 in Search Console (the click zone):

| Priority | Page | Avg Position | Impressions | CTR | Verdict |
|---|---|---|---|---|---|
| **#1** | `/blog/nursery-cost-thailand` | **10.85** | 27 | 0% | Ready for CTR optimization |
| **#2** | `/blog/diaper-size-guide` | **11.0** | 1 | 0% | Position confirmed, needs CTR boost |
| **#3** | `/blog/best-overnight-diaper` | **18.0** | 1 | 0% | Mid-range, title improvement needed |
| **#4** | Homepage `/` | **9.75** | 4 | 0% | Branded/site-level, low urgency |

Pages approaching the click zone (position 25–40) with meaningful impression volume:

| Page | Avg Position | Impressions | Notes |
|---|---|---|---|
| `/blog/breastmilk-vs-formula` | 36.9 | 12 | Specific query at pos 32 |
| `/blog/baby-feeding-1-month` | 41.4 | 21 | Feeding cluster anchor |
| `/blog/newborn-diapers-per-day` | 44.1 | 83 | Highest impressions — long-range target |

---

## Priority Ranking

### Priority 1 — nursery-cost-thailand (pos 10.85 · 27 impressions)

**Why it's #1:** Position 10.85 means the page appears at the bottom of page 1 or very top of page 2. This is the single page closest to generating clicks. 27 impressions in 15 days at this position with 0 clicks means the title and description are failing to earn the click even when the page is visible.

**Winning query signal:** "เนอสเซอรี่ ใกล้ฉัน ราคา" at position 24 (1 impression) appears in SC. The word "ราคา" (price) is the user's core intent. The current title buries the price information.

**Current title:**
```
ค่าเรียนเนอสเซอรี่ในไทย เท่าไรต่อเดือน? เปรียบเทียบราคา
```

**Issues:**
- "เท่าไรต่อเดือน?" is a question — the user already knows that's the question. They want the answer signal in the title.
- No year (2026) — Thai parents verify recency before clicking financial articles
- "เปรียบเทียบราคา" is generic and doesn't reflect the article's depth (5 types, regional comparison, hidden costs)

**Recommended title:**
```
ค่าเนอสเซอรี่ในไทย 2026: รัฐ 500 บ. – นานาชาติ 50,000 บ./เดือน
```

Rationale: Puts the answer range in the title. Users scanning results see immediately that this page has the specific price data they want. The range (500–50,000) signals comprehensive coverage.

**Current description:**
```
เปรียบเทียบค่าเนอสเซอรี่ในไทยทุกประเภท ตั้งแต่รัฐ เอกชน ไปจนถึงนานาชาติ พร้อมค่าใช้จ่ายแฝงที่หลายคนไม่รู้ วิธีเลือกเนอสเซอรี่ที่เหมาะสมกับงบ และเกณฑ์ที่ควรพิจารณา
```

**Issues:**
- Leads with "เปรียบเทียบ" which is weak — doesn't trigger urgency
- Doesn't mention Bangkok specifically despite Bangkok dominating our user geography
- "ค่าใช้จ่ายแฝงที่หลายคนไม่รู้" is good but buried

**Recommended description:**
```
ค่าเนอสเซอรี่ในกรุงเทพและทั่วไทย ปี 2026: รัฐ 500–3,000 บ., เอกชน 5,000–15,000 บ., นานาชาติ 25,000–50,000 บ./เดือน พร้อมค่าแรกเข้า ค่าใช้จ่ายแฝง และวิธีเลือกที่เหมาะกับงบ
```

Rationale: Specific numbers in the description trigger clicks — users see "5,000–15,000 บ." and know the article will answer their question before clicking.

**H1 (current):** `ค่าเรียนเนอสเซอรี่ในไทย เท่าไรต่อเดือน? เปรียบเทียบราคา`
**H1 is not the same concern as title tag.** The H1 can remain as-is or be updated separately. The title tag and meta description are the higher-impact changes for CTR.

**Opening paragraph — current:**
```
ค่าเนอสเซอรี่มักเป็นค่าใช้จ่ายที่ใหญ่ที่สุดสำหรับครอบครัวที่ทั้งพ่อแม่ทำงาน
และยังเป็นสิ่งที่วางแผนล่วงหน้าได้ยากที่สุด เพราะราคาและคุณภาพต่างกันมาก
บทความนี้รวบรวมข้อมูลทั้งหมดเพื่อให้ตัดสินใจได้อย่างมีข้อมูล
```

**Issue:** The opening paragraph does not directly answer the query "ค่าเนอสเซอรี่เท่าไร". Google uses the opening paragraph for featured snippets and for evaluating page relevance. The first paragraph should deliver the answer, not just promise it.

**Recommended opening paragraph addition** (prepend before current text):
```
ค่าเนอสเซอรี่ในไทยปี 2026 อยู่ที่ 500–50,000 บาทต่อเดือน ขึ้นอยู่กับประเภท:
ศูนย์พัฒนาเด็กเล็กรัฐ 500–3,000 บ., เนอสเซอรี่เอกชน 5,000–25,000 บ.,
และเนอสเซอรี่นานาชาติ 25,000–50,000+ บ. กรุงเทพมีราคาสูงกว่าต่างจังหวัดโดยเฉลี่ย 2–3 เท่า
```

This paragraph is designed to win a featured snippet for the query "ค่าเนอสเซอรี่เท่าไร" and "เนอสเซอรี่ราคา".

**Featured snippet opportunity:** The price table (ประเภทเนอสเซอรี่และช่วงราคา) is already structured as a proper HTML table — this is the ideal format for Google's table featured snippets. No structural change needed; the title/description optimization is what will elevate the page into snippet consideration.

**Missing FAQ question:**
The current FAQ covers 6 questions but misses "เนอสเซอรี่กรุงเทพราคาเฉลี่ยเท่าไร 2026?" which exactly matches the query at position 24. Adding this as a 7th FAQ item targets a featured snippet for the local query.

---

### Priority 2 — diaper-size-guide (pos 11.0 · 1 impression)

**Why it's #2:** Position 11 confirmed. Only 1 impression means Google has seen the page but almost no users have searched queries that trigger it yet. This is a timing problem, not a ranking problem. As Google crawls and promotes the page, impressions will grow. The title and description must be ready to convert those impressions when volume increases.

**Matching query signal:** "ผ้าอ้อมเด็กแรกเกิดใช้ขนาดเท่าไหร่" at position 34 (1 impression) is an adjacent query from the same user. The article covers this but the title doesn't signal it.

**Current title:**
```
ไซส์ผ้าอ้อมเด็กทุกยี่ห้อ เลือกขนาดไหนให้พอดีกับลูก?
```

**Issues:**
- "ทุกยี่ห้อ" is good but the brands aren't named — Thai parents search by brand name
- No year
- Question format doesn't signal the structured table data inside

**Recommended title:**
```
ตารางไซส์ผ้าอ้อม 2026: MamyPoko · BabyLove · Merries · Huggies · Moony
```

Rationale: Brand names in the title match brand-specific searches. "ตารางไซส์" is the exact language users type. This title ranks for brand-specific queries like "MamyPoko ไซส์" and "Huggies ไซส์ M กี่กก".

**Current description:**
```
ตารางไซส์ผ้าอ้อมเด็กทุกยี่ห้อ ทั้ง MamyPoko, BabyLove, Merries, Huggies และ Moony พร้อมวิธีรู้ว่าผ้าอ้อมไซส์เหมาะสมหรือไม่ และเมื่อไหรควรเปลี่ยนไซส์
```

The description is actually decent — brand names are present. The one improvement: add a weight reference so users know the page answers their specific child's weight question.

**Recommended description:**
```
ตารางไซส์ผ้าอ้อม MamyPoko, BabyLove, Merries, Huggies และ Moony ปี 2026 แบ่งตามน้ำหนักเด็ก พร้อมวิธีรู้ว่าผ้าอ้อมเล็กหรือใหญ่เกินไป และสัญญาณที่บอกว่าถึงเวลาเปลี่ยนไซส์
```

**Opening paragraph — current:**
```
การเลือกไซส์ผ้าอ้อมที่ถูกต้องเป็นพื้นฐานที่สำคัญมาก...
```

**Issue:** The answer to "ผ้าอ้อมเด็กแรกเกิดใช้ขนาดเท่าไหร่" doesn't appear until the MamyPoko table section.

**Recommended addition:** Add a direct-answer paragraph immediately after the opening paragraph and before the TOC:
```
สรุปโดยย่อ: ทารกแรกเกิด (2–5 กก.) ใช้ไซส์ NB (Newborn), เด็ก 3–8 กก. ใช้ไซส์ S,
เด็ก 6–11 กก. ใช้ไซส์ M ตารางน้ำหนักละเอียดของแต่ละยี่ห้ออยู่ด้านล่าง
```

**Featured snippet opportunity:** Every size table in this article (5 tables, each 6 rows) is formatted as a proper HTML `<table>`. These are strong candidates for Google's table featured snippets on queries like "MamyPoko ไซส์ M กี่กก" and "BabyLove ไซส์ตาราง". No structural change needed.

---

### Priority 3 — best-overnight-diaper (pos 18.0 · 1 impression)

**Why it's #3:** Position 18 is solidly page 2 — the first page of results where users rarely go. One optimization could move it to page 1 given the overall low competition for Thai overnight diaper queries.

**Current title:**
```
ผ้าอ้อมกลางคืนยี่ห้อไหนดี? เปรียบเทียบ 5 ยี่ห้อ
```

**Issues:**
- Generic question — doesn't differentiate from other "ยี่ห้อไหนดี" articles
- Missing year
- "5 ยี่ห้อ" doesn't name the brands — users searching for Huggies overnight or MamyPoko overnight won't see this as relevant

**Recommended title:**
```
ผ้าอ้อมกลางคืน 2026: เปรียบเทียบ Huggies · MamyPoko · Merries ไม่รั่วทั้งคืน
```

**Recommended description:**
```
เปรียบเทียบผ้าอ้อมกลางคืน 5 ยี่ห้อในไทย ปี 2026 — ซึมซับนาน 8–12 ชั่วโมง สำหรับเด็กที่ปัสสาวะมาก พร้อมสัญญาณบอกว่าถึงเวลาเปลี่ยนผ้าอ้อมเฉพาะกลางคืน
```

**FAQ additions recommended:** The FAQ already covers the key questions well (6 items). No additions needed for this sprint.

**Internal linking gap:** The article does not link to `diaper-size-guide` or `mamypoko-vs-babylove`. Both are highly relevant — a parent choosing an overnight diaper should also check the size guide and brand comparisons.

---

### Priority 4 — Homepage (pos 9.75 · 4 impressions)

**Assessment:** Homepage impressions are branded/navigational queries. Users who search "BabyTools" or "เครื่องมือผ้าอ้อม" already know the site. CTR improvement here is low-impact for new user acquisition.

**Single recommendation:** The homepage `<title>` in `app/layout.tsx` (or page-level metadata) should include "ฟรี 2026" if it doesn't already. Recency signal matters for parenting tools.

**Defer this page** — the effort-to-impact ratio is low compared to the article pages.

---

## Internal Linking Opportunities

The current site has limited cross-linking between topically related articles. The following links are missing and each represents a signal Google uses to understand content relationships.

### Missing Links — High Priority

| Source Article | Add Link To | Anchor Text |
|---|---|---|
| `nursery-cost-thailand` | `baby-first-year-expenses` | "ค่าใช้จ่ายทั้งหมดปีแรก" |
| `nursery-cost-thailand` | `monthly-baby-budget` | "งบประมาณเลี้ยงลูกต่อเดือน" |
| `diaper-size-guide` | `how-to-change-diaper` | "วิธีเปลี่ยนผ้าอ้อม" |
| `diaper-size-guide` | `mamypoko-vs-babylove` | "เปรียบเทียบ MamyPoko vs BabyLove" |
| `best-overnight-diaper` | `diaper-size-guide` | "ตารางไซส์ผ้าอ้อม" |
| `best-overnight-diaper` | `mamypoko-vs-babylove` | "MamyPoko vs BabyLove" |
| `breastmilk-vs-formula` | `newborn-feeding-schedule` | "ตารางให้นมเด็กแรกเกิด" |
| `breastmilk-vs-formula` | `baby-feeding-1-month` | "ตารางให้นมเด็ก 1 เดือน" |

### Missing Links — Cluster Coherence

The finance cluster (`baby-first-year-expenses`, `monthly-baby-budget`, `nursery-cost-thailand`, `baby-expenses-1-2-years`, `monthly-toddler-budget`) should form a ring — each linking to at least 2 others. Currently `nursery-cost-thailand` links to `monthly-toddler-budget` and `baby-expenses-1-2-years` but not to `baby-first-year-expenses` or `monthly-baby-budget`.

The diaper cluster (`diaper-size-guide`, `diaper-brand-comparison`, `mamypoko-vs-babylove`, `huggies-vs-mamypoko`, `babylove-vs-huggies`, `best-overnight-diaper`, `pull-up-vs-tape-diaper`) has thin cross-linking. `diaper-size-guide` only links to `diaper-brand-comparison`. Each brand comparison article should link to `diaper-size-guide` and to at least one other brand comparison.

### Calculator Internal Link Strategy

The calculator page receives 57 views (highest in GA4) but no blog article links directly to the calculator with in-body anchor text — only the BlogLayout CTA banner. Adding a sentence like "คำนวณค่าผ้าอ้อม [ยี่ห้อนั้น] ต่อเดือน →" as an inline link within the body of comparison articles would increase calculator traffic and reinforce the article→tool pipeline.

---

## Keyword Opportunities in Search Console — Not Fully Covered

These queries have impressions but the matching article is not optimized for them.

### Cluster 1 — Diaper Change Frequency (56 combined impressions · avg pos 46)

| Query | Impressions | Position |
|---|---|---|
| ควร เปลี่ยน แพ ม เพิ ส ทุก กี่ ชั่วโมง | 29 | 46 |
| เปลี่ยน แพ ม เพิ ส ทุก กี่ ชั่วโมง | 27 | 46 |
| ควรเปลี่ยนแพมเพิสทุกกี่ชั่วโมง | 20 | 48 |

**Matching article:** `how-to-change-diaper` — "วิธีเปลี่ยนผ้าอ้อมเด็กแรกเกิดอย่างถูกวิธี"

**Assessment:** This article exists but is not ranking for these queries. The article title focuses on "how to change" not "how often to change." The queries are about frequency — this is a different user intent.

**Recommendation (update existing article, not new article):** Add a dedicated H2 section to `how-to-change-diaper` titled "ควรเปลี่ยนผ้าอ้อมทุกกี่ชั่วโมง?" with a clear answer table:

| ช่วงอายุ | เปลี่ยนทุกกี่ชั่วโมง | จำนวนครั้ง/วัน |
|---|---|---|
| แรกเกิด – 1 เดือน | ทุก 2–3 ชั่วโมง | 8–12 ครั้ง |
| 1–6 เดือน | ทุก 3–4 ชั่วโมง | 6–8 ครั้ง |
| 6–12 เดือน | ทุก 4–5 ชั่วโมง | 5–6 ครั้ง |
| 1–2 ปี | ทุก 4–6 ชั่วโมง | 4–5 ครั้ง |

Also add a direct-answer FAQ item: "ควรเปลี่ยนแพมเพิสทุกกี่ชั่วโมง?" targeting the top query verbatim.

This is the single highest-impression keyword gap on the site.

---

### Cluster 2 — Breastfeeding Frequency (10 combined impressions · pos 28–29)

| Query | Impressions | Position |
|---|---|---|
| ให้ลูกเข้าเต้า ทุกกี่ชั่วโมง | 8 | 29 |
| ให้ลูกเข้าเต้าทุกกี่ชั่วโมง | 2 | 28 |
| ทารกดูดเต้ากี่นาที | 1 | 35 |

**Position 29 is the closest to the click zone of all high-volume queries.** This cluster only needs to move 4 positions to reach page 1.

**Matching article:** `newborn-feeding-schedule` — pos 47 overall but this specific query is triggering at pos 28-29, suggesting a subsection of the article is already well-matched.

**Recommendation:** Add a standalone H2 directly answering "ให้ลูกเข้าเต้าทุกกี่ชั่วโมง?" near the top of `newborn-feeding-schedule`. The current article leads with a general introduction — surfacing the frequency answer earlier in the page increases relevance signal for this high-position query.

Also add a FAQ item: "ให้ลูกเข้าเต้าทุกกี่ชั่วโมง?" in `breastmilk-vs-formula` which is already at pos 37 for adjacent queries.

---

### Cluster 3 — Formula by Age (26 combined impressions · pos 43–83)

| Query | Impressions | Position |
|---|---|---|
| นมผง เด็ก 3 เดือน | 12 | 43 |
| นมผง สำหรับ เด็ก 3 เดือน | 3 | 46 |
| นมผง เด็ก 6 เดือน | 7 | 63 |
| นมผง สำหรับ เด็ก 6 เดือน | 4 | 83 |

**Matching articles:** `baby-feeding-3-months` and `baby-feeding-6-months` both exist but rank at pos 41 and 64 respectively.

**Assessment:** The queries ask specifically about which formula to choose, not just how much to feed. The current articles cover feeding amounts but likely don't answer "นมผงยี่ห้อไหนสำหรับเด็ก 3 เดือน." This is a content gap within existing articles.

**Recommendation:** Add a brief "นมผงสำหรับเด็ก [อายุ]" subsection to each feeding article covering: what to look for in formula at that age, typical volume, and transition guidance. This targets the query without a new article.

---

### Cluster 4 — Breastmilk vs Formula (9 impressions · pos 32)

| Query | Impressions | Position |
|---|---|---|
| นมแม่กับนมผง | 9 | 32 |
| นมแม่ vs นมผง | 3 | 51 |

**Matching article:** `breastmilk-vs-formula` — the Thai query "นมแม่กับนมผง" is already ranking at pos 32, which is approaching the click zone.

**Recommendation:** Update the `breastmilk-vs-formula` title to lead with the Thai phrasing:

Current: `นมแม่ vs นมผง ต่างกันอย่างไร? ข้อดีข้อเสียที่พ่อแม่ควรรู้`  
Recommended: `นมแม่กับนมผง ต่างกันอย่างไร? เปรียบเทียบข้อดีข้อเสีย 2026`

The word "กับ" (the Thai preposition) versus "vs" (English) matters — the higher-impression query uses "กับ." Matching the title language to the query language is a low-effort, high-signal change.

---

## Featured Snippet Opportunities

Google's featured snippets (position 0) appear for specific query patterns. The following pages have the right content structure to win snippets without code changes.

### Snippet Type: Table

**`nursery-cost-thailand`** — The "ประเภทเนอสเซอรี่และช่วงราคา" table is formatted as a proper HTML `<table>` with thead/tbody. Target query: "ค่าเนอสเซอรี่ในไทย". When this page moves to position 1–5, the table has a strong chance of appearing as a table snippet.

**`diaper-size-guide`** — 5 brand-specific size tables with weight ranges. Target queries: "MamyPoko ไซส์ตาราง", "BabyLove ไซส์กก", "ผ้าอ้อม M กี่กก". These queries have a clear answer format that tables serve well.

### Snippet Type: Direct Answer / Paragraph

**`nursery-cost-thailand`** — After the opening paragraph addition recommended above, the page can win a paragraph snippet for "ค่าเนอสเซอรี่เท่าไร" using the price summary sentence.

**`how-to-change-diaper`** (after recommended update) — The diaper change frequency table targets a snippet for "ควรเปลี่ยนผ้าอ้อมทุกกี่ชั่วโมง". This is the most achievable snippet because 75 impressions at pos 46 means Google is already confident this article is topically relevant — it just needs the direct answer surfaced higher.

### Snippet Type: FAQ (People Also Ask)

All 4 priority pages have FAQPage JSON-LD schema already implemented. The FAQ schema means every FAQ item is eligible for a "People Also Ask" box. The following FAQ items are the most likely candidates:

- `nursery-cost-thailand` — "เนอสเซอรี่เอกชนในกรุงเทพราคาเฉลี่ยเท่าไร?" 
- `diaper-size-guide` — "น้ำหนักลูกอยู่ระหว่างสองไซส์ควรเลือกไซส์ไหน?"
- `best-overnight-diaper` — "ควรใส่ผ้าอ้อมกี่ชั่วโมงในตอนกลางคืน?"
- `how-to-change-diaper` (after update) — "ควรเปลี่ยนแพมเพิสทุกกี่ชั่วโมง?"

---

## Quick Wins Summary

Items that take less than 30 minutes each:

| # | Change | File | Effort | Expected Impact |
|---|---|---|---|---|
| 1 | Update title tag on `nursery-cost-thailand` | `app/blog/nursery-cost-thailand/page.tsx` | 5 min | CTR increase on 27 impressions at pos 11 |
| 2 | Update meta description on `nursery-cost-thailand` | same | 5 min | CTR increase |
| 3 | Add direct-answer opening paragraph to `nursery-cost-thailand` | same | 10 min | Featured snippet eligibility |
| 4 | Update title tag on `diaper-size-guide` (add brand names) | `app/blog/diaper-size-guide/page.tsx` | 5 min | Match brand-specific searches |
| 5 | Update title tag on `breastmilk-vs-formula` ("กับ" vs "vs") | `app/blog/breastmilk-vs-formula/page.tsx` | 5 min | Align with pos-32 query |
| 6 | Update title tag on `best-overnight-diaper` (add brand names + year) | `app/blog/best-overnight-diaper/page.tsx` | 5 min | Click differentiation |

Total estimated time for Quick Wins: ~35 minutes

---

## Recommended Content Updates (Existing Articles Only)

### Update 1 — `how-to-change-diaper` (highest keyword gap)

Add to body:
- New H2: "ควรเปลี่ยนผ้าอ้อมทุกกี่ชั่วโมง?"
- Age-based frequency table (see Cluster 1 section above)
- New FAQ item: "ควรเปลี่ยนแพมเพิสทุกกี่ชั่วโมง?" with direct answer

Expected outcome: Capture 56-impression keyword cluster currently at pos 46; move toward page 1 for the top Thai diaper query.

### Update 2 — `newborn-feeding-schedule`

Add to body:
- Promote the breastfeeding frequency answer to earlier in the article (before the schedule tables)
- Ensure H2 heading includes "ให้ลูกเข้าเต้าทุกกี่ชั่วโมง" verbatim

Expected outcome: Consolidate the pos-28 ranking for breastfeeding frequency queries; potential to reach page 1.

### Update 3 — `breastmilk-vs-formula`

- Change title to use "กับ" instead of "vs"
- Add FAQ item: "ให้ลูกเข้าเต้าทุกกี่ชั่วโมง?"
- Add internal link to `newborn-feeding-schedule` and `baby-feeding-1-month`

Expected outcome: Improve pos-32 ranking toward page 1 for "นมแม่กับนมผง".

---

## Success Metrics

Track these after implementing this sprint:

| Metric | Current | Target (30 days) | Target (60 days) |
|---|---|---|---|
| Organic search clicks | 0 | 1–5 | 10–30 |
| `nursery-cost-thailand` position | 10.85 | 8–11 | 5–10 |
| `nursery-cost-thailand` CTR | 0% | 2–5% | 5–10% |
| `diaper-size-guide` impressions | 1 | 10–30 | 30–80 |
| `how-to-change-diaper` impressions | ~0 | 20–50 | 60–150 |
| `breastmilk-vs-formula` position | 36.9 | 25–35 | 15–25 |
| Pages ranked in top 20 | 3 | 5 | 8 |
| Total SC impressions | 229 | 400 | 700 |

---

## Recommended Implementation Order

**Do first (title/description changes — no content risk, immediate signal to Google):**
1. `nursery-cost-thailand` — new title and description
2. `diaper-size-guide` — new title (add brands)
3. `breastmilk-vs-formula` — title language change ("กับ" vs "vs")
4. `best-overnight-diaper` — new title (add brands + year)

**Do second (content additions — adds answer paragraphs and FAQ items):**
5. `nursery-cost-thailand` — add direct-answer opening paragraph
6. `how-to-change-diaper` — add diaper change frequency section + FAQ item
7. `newborn-feeding-schedule` — promote breastfeeding frequency answer higher
8. `breastmilk-vs-formula` — add FAQ item + internal links

**Do third (internal linking — 1–2 links per article, no content writing):**
9. Add cross-links in finance cluster (nursery ↔ baby-first-year ↔ monthly-budget)
10. Add cross-links in diaper cluster (size-guide ↔ brand comparisons ↔ overnight)
11. Add inline calculator links in comparison article bodies

**Verify after 14 days:**
- Re-pull Search Console data
- Check if `nursery-cost-thailand` CTR has improved
- Check if `how-to-change-diaper` impressions have appeared for the diaper frequency queries
- Adjust priorities based on what moved
