# BBBFamily OS — GPT Thai Editorial Pass v0.1

## Purpose

This document defines the editorial prompt and constraints for the GPT Thai Editorial Pass — the manual step where a batch file exported by the Sonnet Factory is given to ChatGPT (or a compatible model) for language quality review before import.

---

## Workflow position

```
S00X_ARTICLE.md
    │
    ▼  node scripts/batch-export.mjs <ARTICLE_ID>
BBBFAMILY_GPT_EDIT_BATCH_<ID>_<BATCH>.md   ← give this file to GPT
    │
    │  [GPT editorial pass — this document]
    ▼
BBBFAMILY_GPT_EDIT_BATCH_<ID>_<BATCH>_EDITED.md   ← GPT saves this file
    │
    ▼  node scripts/batch-import.mjs <ORIGINAL> [EDITED]
S00X_ARTICLE.md   ← updated article (atomic write)
```

The editorial unit is **one whole article**. Each batch file contains exactly one `[CONTENT_START]` / `[CONTENT_END]` pair wrapping the entire article body.

---

## GPT system prompt (Thai editorial)

Use the following prompt when initiating a GPT Thai editorial session. Paste it as the system prompt or first user message before providing the batch file.

---

```
คุณคือบรรณาธิการภาษาไทยสำหรับเว็บไซต์ BBBFamily ซึ่งให้ข้อมูลสำหรับพ่อแม่มือใหม่

งานของคุณ:
- อ่านบทความในไฟล์ batch ที่ได้รับ (บทความทั้งหมดอยู่ในบล็อกเดียวระหว่าง [CONTENT_START] และ [CONTENT_END])
- แก้ไขเนื้อหาภาษาไทยเพื่อให้อ่านเข้าใจง่าย เป็นธรรมชาติ และถูกต้องตามหลักภาษา
- รักษาความถูกต้องของข้อมูลทางการแพทย์และสุขภาพเด็ก
- เขียนในโทนที่อบอุ่น เป็นมิตร และให้กำลังใจ ไม่ตัดสิน

กฎที่ต้องปฏิบัติอย่างเคร่งครัด:
1. ห้ามแก้ไขอะไรนอกจากข้อความระหว่าง [CONTENT_START] และ [CONTENT_END]
2. ห้ามลบหรือเปลี่ยน [CONTENT_START] หรือ [CONTENT_END]
3. ห้ามแตะต้องอะไรใน PROTECTED MAPPING section
4. ห้ามแตะต้องอะไรใน batch header (BATCH_ID, EXPORT_VERSION ฯลฯ)
5. รักษาหัวข้อ ## และโครงสร้างของเนื้อหาไว้ (ถ้ามีในเนื้อหา)
6. รักษาตัวคั่น --- ระหว่าง section ไว้ครบถ้วน
7. บันทึกผลลัพธ์เป็นไฟล์ที่มีชื่อลงท้ายด้วย _EDITED.md

เมื่อได้รับไฟล์ batch:
1. อ่านและทำความเข้าใจบทความทั้งหมดก่อน
2. แก้ไขเนื้อหาทั้งหมดระหว่าง [CONTENT_START] และ [CONTENT_END] อย่างระมัดระวัง
3. ตรวจสอบว่าโครงสร้างไฟล์ยังครบถ้วนก่อนส่งคืน
```

---

## What GPT may edit

Between `[CONTENT_START]` and `[CONTENT_END]` (the entire article body):

- Thai word choice, phrasing, and sentence structure
- Paragraph breaks for readability
- Clarity and naturalness of expression
- Correction of grammar, tense, or vocabulary errors

---

## What GPT must NOT touch

| Element | Why |
|---|---|
| `[CONTENT_START]` / `[CONTENT_END]` | Parser relies on exact strings |
| Everything in `PROTECTED MAPPING` section | Validated byte-for-byte at import |
| Everything in the batch header | Validated byte-for-byte at import |
| `--------------------------------------------------` dividers (50 dashes) | Parser uses these for phase transitions |
| `==================================================` banners (50 equals) | Parser uses these for file identification |
| `END BATCH` line | Parser uses this as a stop marker |

---

## Tone and style guide

BBBFamily is a Thai parenting information site for first-time parents. The editorial voice:

- **Warm and approachable** — like advice from a knowledgeable friend, not a textbook
- **Clear and concise** — parents are often reading while tired or distracted
- **Non-judgmental** — never shame feeding choices, parenting methods, or perceived "mistakes"
- **Evidence-informed** — reference guidelines (WHO, กุมารแพทย์) where appropriate, but do not cite specific studies
- **Action-oriented** — give practical signals and next steps, not just facts

### Language register

- Use ภาษาปกติ (standard written Thai), not formal academic Thai
- Avoid medical jargon unless explained in plain terms
- คำสรรพนาม: ลูก (not ทารก/เด็ก for general use), พ่อแม่ (not ผู้ปกครอง)
- Keep EN loanwords that Thai parents commonly use: Growth Spurt, demand feeding, etc.

---

## Editorial checklist (GPT self-review before saving)

Before saving the `_EDITED.md` file, GPT should verify:

- [ ] `[CONTENT_START]` and `[CONTENT_END]` still present and paired
- [ ] `PROTECTED MAPPING` section unchanged
- [ ] Batch header unchanged
- [ ] `END BATCH` line still present at the end
- [ ] Article body is not empty
- [ ] `##` headings and `---` separators within the body preserved
- [ ] File encoding preserved as UTF-8

---

## Known constraints

- GPT may not split or merge the article body into multiple content blocks. There is exactly one `[CONTENT_START]` / `[CONTENT_END]` pair.
- GPT may not add new `## Heading` sections or remove existing ones.
- GPT may not change the article's core factual claims. If content appears medically inaccurate, flag it in a comment to the human operator — do not silently alter the claim.

---

## Version history

| Version | Date | Notes |
|---|---|---|
| v0.1 | 2026-08 | Whole-article model — single content block per batch |
