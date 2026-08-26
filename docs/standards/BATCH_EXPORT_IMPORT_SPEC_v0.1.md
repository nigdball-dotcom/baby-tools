# BBBFamily OS — Batch Export / Import Specification v0.1

## Overview

The Batch Export / Import workflow moves article content between the Sonnet Factory (source truth) and a GPT editorial pass without exposing protected metadata to modification. The workflow is file-based and manual — no API calls are made automatically.

The editorial unit is one **whole article**. One batch file contains one article. Sections within the article body (separated by `---` or `##` headings) are structural — they are not individually addressable and are not independently publishable.

```
S00X_ARTICLE.md
    │
    ▼  node scripts/batch-export.mjs <ARTICLE_ID>
BBBFAMILY_GPT_EDIT_BATCH_<ID>_<BATCH>.md  ← original (read-only reference)
    │
    │  [manual GPT editorial pass]
    ▼
BBBFAMILY_GPT_EDIT_BATCH_<ID>_<BATCH>_EDITED.md  ← GPT output
    │
    ▼  node scripts/batch-import.mjs <ORIGINAL> [EDITED]
S00X_ARTICLE.md  ← updated (atomic write)
<EDITED>.IMPORT_REPORT.md  ← integrity report (always written)
```

---

## File naming conventions

| File | Description |
|---|---|
| `BBBFAMILY_GPT_EDIT_BATCH_<ID>_<BATCH>.md` | Original exported batch (reference, never edit) |
| `BBBFAMILY_GPT_EDIT_BATCH_<ID>_<BATCH>_EDITED.md` | GPT-edited batch (importer input) |
| `BBBFAMILY_GPT_EDIT_BATCH_<ID>_<BATCH>_EDITED.IMPORT_REPORT.md` | Import result report |

All three files live in `contents/Article/<ARTICLE_ID>/`.

---

## Batch file structure

A batch file has three sections separated by the `--------------------------------------------------` (50-dash) divider line.

### 1. Header (protected)

```
==================================================
BBBFAMILY GPT EDITORIAL BATCH
==================================================

BATCH_ID: S005-B001
EXPORT_VERSION: 1
EXPORTED_AT: 2026-08-26T00:00:00.000Z
```

**All header fields are protected.** The importer rejects any change.

### 2. Protected mapping (protected)

```
--------------------------------------------------
PROTECTED MAPPING
--------------------------------------------------

ARTICLE_ID: S005
SOURCE_FILE: contents/Article/S005/S005_ARTICLE.md
ARTICLE_TITLE: ลูกงีบกลางวันนานไปไหม
ARTICLE_VERSION: 1.0
ARTICLE_STATUS: Article
CONTENT_HASH: <16-char sha256 hex>
```

**All mapping fields are protected.** The importer rejects any change.

`CONTENT_HASH` is a 16-character truncated SHA-256 hex of the original article body. It is used to detect whether the GPT editorial pass made any changes.

### 3. Editable content

```
--------------------------------------------------
EDITABLE CONTENT
--------------------------------------------------

[CONTENT_START]
<entire article body — everything after the first --- separator in the source file>
[CONTENT_END]

--------------------------------------------------
END BATCH
--------------------------------------------------
```

**GPT may ONLY modify text between `[CONTENT_START]` and `[CONTENT_END]`.** Everything else must not change.

The body may contain internal `---` separators (3 dashes) and `##` headings — these are structural elements within the article and are part of the editable content. They are distinct from the 50-dash batch divider lines.

---

## Sentinel strings

These exact strings are enforced by the parser. Any deviation causes a structural parse error (automatic REJECT).

| Sentinel | Purpose |
|---|---|
| `==================================================` | Banner lines (50 equals signs) |
| `BBBFAMILY GPT EDITORIAL BATCH` | File type identifier |
| `--------------------------------------------------` | Section dividers (50 dashes) |
| `PROTECTED MAPPING` | Mapping section label |
| `EDITABLE CONTENT` | Content section label |
| `END BATCH` | End-of-file marker |
| `[CONTENT_START]` | Start of editable content block |
| `[CONTENT_END]` | End of editable content block |

---

## Import validation rules

The importer compares the original batch (protected reference) against the edited batch. Validation is **atomic**: if any rule fails, nothing is written to the article file.

### Header protection

All of the following fields must be byte-identical in the edited batch:

- `BATCH_ID`
- `EXPORT_VERSION`

**Error type:** `PROTECTED_HEADER_CHANGED`

### Mapping protection

All of the following fields must be byte-identical in the edited batch:

- `ARTICLE_ID`
- `SOURCE_FILE`
- `ARTICLE_TITLE`
- `ARTICLE_VERSION`
- `ARTICLE_STATUS`
- `CONTENT_HASH`

**Error type:** `PROTECTED_MAPPING_CHANGED`

### Content validation

- Content between `[CONTENT_START]` and `[CONTENT_END]` must not be empty (whitespace-only counts as empty).

**Error type:** `EMPTY_CONTENT`

### Structural validation

- `[CONTENT_START]` must be present exactly once.
- `[CONTENT_END]` must be present exactly once.
- `[CONTENT_END]` without a preceding `[CONTENT_START]` is rejected.
- Unclosed content block (missing `[CONTENT_END]`) is rejected.
- Duplicate `[CONTENT_START]` or `[CONTENT_END]` is rejected.

**Result:** structural parse error → automatic REJECT before validation even runs.

---

## Integrity report format

Every import run writes an `IMPORT_REPORT.md` alongside the edited batch file, regardless of pass or fail.

### PASS example

```
==================================================
GPT EDITORIAL IMPORT REPORT
==================================================

Batch:           S005-B001
Article ID:      S005
Source file:     contents/Article/S005/S005_ARTICLE.md

Original hash:   3a9f12b4c7e08d21
Edited hash:     b5e4f09c3d71a826
Content changed: YES

STATUS: PASS
Article updated with GPT editorial changes.
```

### REJECT example

```
==================================================
GPT EDITORIAL IMPORT REPORT
==================================================

Batch:           S005-B001
Article ID:      S005
Source file:     contents/Article/S005/S005_ARTICLE.md

Original hash:   3a9f12b4c7e08d21
Edited hash:     (empty)
Content changed: NO

STATUS: REJECT

REJECT
Reason: PROTECTED_MAPPING_CHANGED
Field: ARTICLE_ID
Original: S005
Edited: S999
```

---

## CLI usage

### Export

```bash
node scripts/batch-export.mjs S005
node scripts/batch-export.mjs S005 B002
```

### Import

```bash
# Auto-derives edited path: BBBFAMILY_..._B001.md → BBBFAMILY_..._B001_EDITED.md
node scripts/batch-import.mjs contents/Article/S005/BBBFAMILY_GPT_EDIT_BATCH_S005_B001.md

# Explicit edited file
node scripts/batch-import.mjs contents/Article/S005/BBBFAMILY_GPT_EDIT_BATCH_S005_B001.md \
                               contents/Article/S005/BBBFAMILY_GPT_EDIT_BATCH_S005_B001_EDITED.md
```

---

## What the importer does NOT do

- Does not call any external API (OpenAI, Facebook, etc.)
- Does not partially import a batch that fails validation
- Does not silently repair corrupted mappings
- Does not modify any production article not explicitly named in the batch
- Does not commit or push changes
- Does not modify TSX page components, lib/config.ts, affiliate data, or schemas

---

## Version history

| Version | Date | Notes |
|---|---|---|
| v0.1 | 2026-08 | Whole-article model — one article per batch, single content block |
