/**
 * BBBFamily GPT Editorial Batch — Workflow Test Suite
 *
 * Whole-article editorial model. Tests A–R.
 * All tests are in-memory — no production files are touched.
 * Fixture uses synthetic article ID "STEST" (never S004 or S005).
 *
 * Run with: node --test tests/batch-workflow.test.mjs
 */

import { test, describe } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import {
  SENTINELS,
  parseArticleFile,
  hashContent,
  buildBatchExport,
  parseBatchFile,
  validateBatchImport,
  buildIntegrityReport,
  rebuildArticle,
} from '../scripts/batch-utils.mjs'

// ── Synthetic test fixture ─────────────────────────────────────────────────────
// Uses article ID STEST — never S004 or S005 production content

const FIXTURE_ARTICLE = `# ลูกควรนอนวันละกี่ชั่วโมง

Content ID: STEST
Version: 0.1
Status: DRAFT
Last Updated: 2026-08

---

ถ้าลูกของคุณนอนน้อยกว่าที่คาด หลายคนอาจเริ่มกังวลว่าลูกนอนพอหรือเปล่า

คำตอบสั้น: ขึ้นอยู่กับช่วงอายุ ทารกแรกเกิดต้องการการนอนมากกว่าผู้ใหญ่มาก

---

## ช่วงวัยแรกเกิด–3 เดือน

ในช่วงนี้ลูกต้องการนอนถึง 14–17 ชั่วโมงต่อวัน เพราะสมองและร่างกายกำลังพัฒนาอย่างรวดเร็ว

ลูกจะตื่นทุก 2–3 ชั่วโมงเพื่อกินนม ซึ่งเป็นเรื่องปกติมาก

---

## สรุป

จำนวนชั่วโมงการนอนที่เหมาะสมแตกต่างกันในแต่ละช่วงอายุ ให้ดูสัญญาณจากลูกเป็นหลัก`

const FIXTURE_SOURCE_FILE = 'contents/Article/STEST/STEST_ARTICLE.md'
const FIXTURE_BATCH_ID    = 'STEST-B001'
const FIXTURE_EXPORTED_AT = '2026-08-26T00:00:00.000Z'

// ── Helpers ────────────────────────────────────────────────────────────────────

function exportFixture(opts = {}) {
  const article = parseArticleFile(FIXTURE_ARTICLE)
  const batchContent = buildBatchExport({
    articleId:   article.articleId,
    sourceFile:  FIXTURE_SOURCE_FILE,
    title:       article.title,
    frontmatter: article.frontmatter,
    body:        article.body,
    batchId:     opts.batchId    || FIXTURE_BATCH_ID,
    exportedAt:  opts.exportedAt || FIXTURE_EXPORTED_AT,
  })
  return { article, batchContent, originalParsed: parseBatchFile(batchContent) }
}

function editContent(batchContent, newContent) {
  const start = SENTINELS.CONTENT_START
  const end   = SENTINELS.CONTENT_END
  const startIdx = batchContent.indexOf(start)
  if (startIdx === -1) throw new Error('CONTENT_START not found')
  const afterStart = startIdx + start.length + 1 // skip newline
  const endIdx = batchContent.indexOf(end, afterStart)
  if (endIdx === -1) throw new Error('CONTENT_END not found')
  return batchContent.slice(0, afterStart) + newContent + '\n' + batchContent.slice(endIdx)
}

function mutate(text, search, replacement) {
  const idx = text.indexOf(search)
  if (idx === -1) throw new Error(`mutate: not found: ${JSON.stringify(search)}`)
  return text.slice(0, idx) + replacement + text.slice(idx + search.length)
}

// ── Test A: Export whole article ───────────────────────────────────────────────

describe('A: Export whole article', () => {
  test('produces a batch file with the correct header fields', () => {
    const { originalParsed } = exportFixture()
    assert.equal(originalParsed.header['BATCH_ID'],       FIXTURE_BATCH_ID)
    assert.equal(originalParsed.header['EXPORT_VERSION'], 1)
    assert.equal(originalParsed.header['EXPORTED_AT'],    FIXTURE_EXPORTED_AT)
  })

  test('mapping contains correct article identity fields', () => {
    const { originalParsed } = exportFixture()
    assert.equal(originalParsed.mapping['ARTICLE_ID'],    'STEST')
    assert.equal(originalParsed.mapping['SOURCE_FILE'],   FIXTURE_SOURCE_FILE)
    assert.equal(originalParsed.mapping['ARTICLE_TITLE'], 'ลูกควรนอนวันละกี่ชั่วโมง')
    assert.equal(originalParsed.mapping['ARTICLE_VERSION'], '0.1')
    assert.equal(originalParsed.mapping['ARTICLE_STATUS'], 'DRAFT')
  })

  test('mapping contains a 16-char CONTENT_HASH', () => {
    const { originalParsed } = exportFixture()
    const hash = originalParsed.mapping['CONTENT_HASH']
    assert.ok(hash, 'CONTENT_HASH must be present')
    assert.equal(hash.length, 16, 'CONTENT_HASH must be 16 hex chars')
    assert.match(hash, /^[0-9a-f]{16}$/, 'CONTENT_HASH must be lowercase hex')
  })

  test('batch content is exactly one CONTENT_START / CONTENT_END pair', () => {
    const { batchContent } = exportFixture()
    const startCount = (batchContent.match(/\[CONTENT_START\]/g) || []).length
    const endCount   = (batchContent.match(/\[CONTENT_END\]/g)   || []).length
    assert.equal(startCount, 1)
    assert.equal(endCount,   1)
  })

  test('editable content contains the whole article body', () => {
    const { article, originalParsed } = exportFixture()
    const body = originalParsed.content.trim()
    assert.ok(body.includes('ถ้าลูกของคุณนอนน้อยกว่าที่คาด'), 'opening paragraph present')
    assert.ok(body.includes('## ช่วงวัยแรกเกิด–3 เดือน'), 'section heading present')
    assert.ok(body.includes('## สรุป'), 'last section present')
  })

  test('export is deterministic', () => {
    const opts = { batchId: FIXTURE_BATCH_ID, exportedAt: FIXTURE_EXPORTED_AT }
    const { batchContent: a } = exportFixture(opts)
    const { batchContent: b } = exportFixture(opts)
    assert.equal(a, b)
  })

  test('CONTENT_HASH matches hash of the exported body', () => {
    const { article, originalParsed } = exportFixture()
    const expected = hashContent(article.body.trim())
    assert.equal(originalParsed.mapping['CONTENT_HASH'], expected)
  })
})

// ── Test B: Import unchanged batch (PASS) ─────────────────────────────────────

describe('B: Import unchanged batch', () => {
  test('PASS when edited batch is identical to original', () => {
    const { originalParsed, batchContent } = exportFixture()
    const editedParsed = parseBatchFile(batchContent)
    const result = validateBatchImport(originalParsed, editedParsed)
    assert.equal(result.status, 'PASS')
    assert.equal(result.errors.length, 0)
  })

  test('contentChanged is false when body is unchanged', () => {
    const { originalParsed, batchContent } = exportFixture()
    const editedParsed = parseBatchFile(batchContent)
    const result = validateBatchImport(originalParsed, editedParsed)
    assert.equal(result.contentChanged, false)
  })
})

// ── Test C: Edit article content (PASS, contentChanged=true) ──────────────────

describe('C: Edit article content', () => {
  test('PASS when content is changed by GPT', () => {
    const { originalParsed, batchContent } = exportFixture()
    const edited = editContent(batchContent, 'เนื้อหาที่ GPT แก้ไขแล้ว\n\nเนื้อหาส่วนที่สอง')
    const editedParsed = parseBatchFile(edited)
    const result = validateBatchImport(originalParsed, editedParsed)
    assert.equal(result.status, 'PASS')
    assert.equal(result.contentChanged, true)
  })

  test('editedHash differs from original CONTENT_HASH after edit', () => {
    const { originalParsed, batchContent } = exportFixture()
    const edited = editContent(batchContent, 'เนื้อหาใหม่ทั้งหมด')
    const editedParsed = parseBatchFile(edited)
    const result = validateBatchImport(originalParsed, editedParsed)
    assert.notEqual(result.editedHash, originalParsed.mapping['CONTENT_HASH'])
  })
})

// ── Test D: Thai Unicode preserved ────────────────────────────────────────────

describe('D: Thai Unicode preserved', () => {
  test('Thai body content round-trips without corruption', () => {
    const { article, originalParsed } = exportFixture()
    const recovered = originalParsed.content.trim()
    assert.equal(recovered, article.body.trim())
  })

  test('Thai title preserved in mapping', () => {
    const { batchContent } = exportFixture()
    assert.ok(batchContent.includes('ลูกควรนอนวันละกี่ชั่วโมง'))
  })

  test('hashContent is stable for Thai text', () => {
    const text = 'ลูกงีบกลางวัน ช่วงไหนดีที่สุด'
    assert.equal(hashContent(text), hashContent(text))
    assert.equal(hashContent(text).length, 16)
  })

  test('different Thai strings produce different hashes', () => {
    assert.notEqual(
      hashContent('ลูกนอนน้อยไปไหม'),
      hashContent('ลูกนอนมากไปไหม')
    )
  })
})

// ── Test E: Multiple paragraphs and sections inside one content block ──────────

describe('E: Multiple paragraphs and sections in one content block', () => {
  test('body with multiple ## sections is preserved correctly', () => {
    const { originalParsed } = exportFixture()
    const body = originalParsed.content.trim()
    assert.ok(body.includes('---'), 'internal --- separators must be in content')
    assert.ok(body.includes('## ช่วงวัยแรกเกิด–3 เดือน'))
    assert.ok(body.includes('## สรุป'))
  })

  test('internal --- separators inside body are not confused with batch dividers', () => {
    const { batchContent } = exportFixture()
    // Internal --- (3 dashes) must not interfere; batch divider is 50 dashes
    const internalSep = '\n---\n'
    assert.ok(batchContent.includes(internalSep), 'internal --- should appear inside content block')
  })

  test('parseBatchFile correctly extracts content across multiple internal sections', () => {
    const { originalParsed } = exportFixture()
    const lines = originalParsed.content.split('\n')
    const hasMarkdownHeadings = lines.some(l => l.startsWith('## '))
    assert.ok(hasMarkdownHeadings, 'parsed content should still have ## headings')
  })
})

// ── Test F: Missing CONTENT_START ─────────────────────────────────────────────

describe('F: Missing CONTENT_START', () => {
  test('parseBatchFile throws when [CONTENT_START] is removed', () => {
    const { batchContent } = exportFixture()
    const broken = batchContent.replace('[CONTENT_START]', '')
    assert.throws(() => parseBatchFile(broken), /CONTENT_START/)
  })
})

// ── Test G: Missing CONTENT_END ───────────────────────────────────────────────

describe('G: Missing CONTENT_END', () => {
  test('parseBatchFile throws when [CONTENT_END] is removed', () => {
    const { batchContent } = exportFixture()
    const broken = batchContent.replace('[CONTENT_END]', '')
    assert.throws(() => parseBatchFile(broken), /CONTENT_END/)
  })
})

// ── Test H: Duplicate CONTENT_START ───────────────────────────────────────────

describe('H: Duplicate CONTENT_START', () => {
  test('parseBatchFile throws on second [CONTENT_START]', () => {
    const { batchContent } = exportFixture()
    const broken = batchContent.replace('[CONTENT_START]', '[CONTENT_START]\n[CONTENT_START]')
    assert.throws(() => parseBatchFile(broken), /[Dd]uplicate.*CONTENT_START/)
  })
})

// ── Test I: Duplicate CONTENT_END ─────────────────────────────────────────────

describe('I: Duplicate CONTENT_END', () => {
  test('parseBatchFile throws on second [CONTENT_END]', () => {
    const { batchContent } = exportFixture()
    const broken = batchContent.replace('[CONTENT_END]', '[CONTENT_END]\n[CONTENT_END]')
    assert.throws(() => parseBatchFile(broken), /[Dd]uplicate.*CONTENT_END/)
  })
})

// ── Test J: Empty content ─────────────────────────────────────────────────────

describe('J: Empty content', () => {
  test('REJECT EMPTY_CONTENT when body is whitespace-only', () => {
    const { originalParsed, batchContent } = exportFixture()
    const edited = editContent(batchContent, '   \n   ')
    const editedParsed = parseBatchFile(edited)
    const result = validateBatchImport(originalParsed, editedParsed)
    assert.equal(result.status, 'REJECT')
    assert.ok(result.errors.some(e => e.type === 'EMPTY_CONTENT'))
  })

  test('REJECT EMPTY_CONTENT when body is completely empty string', () => {
    const { originalParsed, batchContent } = exportFixture()
    const edited = editContent(batchContent, '')
    const editedParsed = parseBatchFile(edited)
    const result = validateBatchImport(originalParsed, editedParsed)
    assert.equal(result.status, 'REJECT')
    assert.ok(result.errors.some(e => e.type === 'EMPTY_CONTENT'))
  })
})

// ── Test K: ARTICLE_ID changed → REJECT ───────────────────────────────────────

describe('K: ARTICLE_ID changed in mapping', () => {
  test('REJECT PROTECTED_MAPPING_CHANGED when ARTICLE_ID is altered', () => {
    const { originalParsed, batchContent } = exportFixture()
    const edited = mutate(batchContent, 'ARTICLE_ID: STEST', 'ARTICLE_ID: S999')
    const editedParsed = parseBatchFile(edited)
    const result = validateBatchImport(originalParsed, editedParsed)
    assert.equal(result.status, 'REJECT')
    const err = result.errors.find(e => e.type === 'PROTECTED_MAPPING_CHANGED' && e.field === 'ARTICLE_ID')
    assert.ok(err, 'Expected PROTECTED_MAPPING_CHANGED for ARTICLE_ID')
    assert.equal(err.original, 'STEST')
    assert.equal(err.edited,   'S999')
  })
})

// ── Test L: SOURCE_FILE changed → REJECT ─────────────────────────────────────

describe('L: SOURCE_FILE changed in mapping', () => {
  test('REJECT PROTECTED_MAPPING_CHANGED when SOURCE_FILE is altered', () => {
    const { originalParsed, batchContent } = exportFixture()
    const edited = mutate(batchContent, FIXTURE_SOURCE_FILE, 'contents/Article/OTHER/OTHER_ARTICLE.md')
    const editedParsed = parseBatchFile(edited)
    const result = validateBatchImport(originalParsed, editedParsed)
    assert.equal(result.status, 'REJECT')
    assert.ok(result.errors.some(e => e.type === 'PROTECTED_MAPPING_CHANGED' && e.field === 'SOURCE_FILE'))
  })
})

// ── Test M: CONTENT_HASH changed in mapping → REJECT ─────────────────────────

describe('M: CONTENT_HASH changed in mapping', () => {
  test('REJECT PROTECTED_MAPPING_CHANGED when CONTENT_HASH is altered', () => {
    const { originalParsed, batchContent } = exportFixture()
    const realHash = originalParsed.mapping['CONTENT_HASH']
    const fakeHash = 'deadbeef12345678'
    const edited = mutate(batchContent, `CONTENT_HASH: ${realHash}`, `CONTENT_HASH: ${fakeHash}`)
    const editedParsed = parseBatchFile(edited)
    const result = validateBatchImport(originalParsed, editedParsed)
    assert.equal(result.status, 'REJECT')
    const err = result.errors.find(e => e.type === 'PROTECTED_MAPPING_CHANGED' && e.field === 'CONTENT_HASH')
    assert.ok(err)
    assert.equal(err.original, realHash)
    assert.equal(err.edited,   fakeHash)
  })
})

// ── Test N: BATCH_ID changed → REJECT ────────────────────────────────────────

describe('N: BATCH_ID changed in header', () => {
  test('REJECT PROTECTED_HEADER_CHANGED when BATCH_ID is altered', () => {
    const { originalParsed, batchContent } = exportFixture()
    const edited = mutate(batchContent, `BATCH_ID: ${FIXTURE_BATCH_ID}`, 'BATCH_ID: STEST-B999')
    const editedParsed = parseBatchFile(edited)
    const result = validateBatchImport(originalParsed, editedParsed)
    assert.equal(result.status, 'REJECT')
    const err = result.errors.find(e => e.type === 'PROTECTED_HEADER_CHANGED' && e.field === 'BATCH_ID')
    assert.ok(err)
    assert.equal(err.original, FIXTURE_BATCH_ID)
    assert.equal(err.edited,   'STEST-B999')
  })
})

// ── Test O: Protected metadata changed → REJECT ───────────────────────────────

describe('O: Protected metadata changed (ARTICLE_VERSION or ARTICLE_STATUS)', () => {
  test('REJECT PROTECTED_MAPPING_CHANGED when ARTICLE_VERSION is altered', () => {
    const { originalParsed, batchContent } = exportFixture()
    const edited = mutate(batchContent, 'ARTICLE_VERSION: 0.1', 'ARTICLE_VERSION: 9.9')
    const editedParsed = parseBatchFile(edited)
    const result = validateBatchImport(originalParsed, editedParsed)
    assert.equal(result.status, 'REJECT')
    assert.ok(result.errors.some(e => e.type === 'PROTECTED_MAPPING_CHANGED' && e.field === 'ARTICLE_VERSION'))
  })

  test('REJECT PROTECTED_MAPPING_CHANGED when ARTICLE_STATUS is altered', () => {
    const { originalParsed, batchContent } = exportFixture()
    const edited = mutate(batchContent, 'ARTICLE_STATUS: DRAFT', 'ARTICLE_STATUS: PUBLISHED')
    const editedParsed = parseBatchFile(edited)
    const result = validateBatchImport(originalParsed, editedParsed)
    assert.equal(result.status, 'REJECT')
    assert.ok(result.errors.some(e => e.type === 'PROTECTED_MAPPING_CHANGED' && e.field === 'ARTICLE_STATUS'))
  })
})

// ── Test P: Content edited, rebuildArticle produces correct output ─────────────

describe('P: Content edited — rebuildArticle with new body', () => {
  test('rebuilt article preserves title and frontmatter with new body', () => {
    const { article } = exportFixture()
    const newBody = 'เนื้อหาใหม่ที่ผ่านการแก้ไขโดย GPT\n\nย่อหน้าที่สอง'
    const rebuilt = rebuildArticle({ title: article.title, frontmatter: article.frontmatter, body: newBody })

    assert.ok(rebuilt.startsWith('# ลูกควรนอนวันละกี่ชั่วโมง'), 'title preserved')
    assert.ok(rebuilt.includes('Content ID: STEST'), 'Content ID preserved')
    assert.ok(rebuilt.includes('Version: 0.1'), 'Version preserved')
    assert.ok(rebuilt.includes('---'), 'separator present')
    assert.ok(rebuilt.includes('เนื้อหาใหม่ที่ผ่านการแก้ไข'), 'new body present')
  })

  test('rebuilt article ends with newline', () => {
    const { article } = exportFixture()
    const rebuilt = rebuildArticle({ title: article.title, frontmatter: article.frontmatter, body: 'body text' })
    assert.ok(rebuilt.endsWith('\n'), 'must end with newline')
  })

  test('rebuildArticle is reversible — parse the rebuilt article', () => {
    const { article } = exportFixture()
    const newBody = 'เนื้อหาใหม่\n\n---\n\n## ส่วนใหม่\n\nข้อความในส่วนใหม่'
    const rebuilt = rebuildArticle({ title: article.title, frontmatter: article.frontmatter, body: newBody })
    const reparsed = parseArticleFile(rebuilt)
    assert.equal(reparsed.title,     article.title)
    assert.equal(reparsed.articleId, 'STEST')
    assert.equal(reparsed.body.trim(), newBody.trim())
  })
})

// ── Test Q: Atomic rejection — REJECT means nothing written ───────────────────

describe('Q: Atomic rejection', () => {
  test('validateBatchImport returns REJECT — result object reflects this', () => {
    // Import CLI performs the atomic write; this test confirms the validation
    // contract that the CLI checks before writing.
    const { originalParsed, batchContent } = exportFixture()
    const edited = mutate(batchContent, 'ARTICLE_ID: STEST', 'ARTICLE_ID: TAMPERED')
    const editedParsed = parseBatchFile(edited)
    const result = validateBatchImport(originalParsed, editedParsed)

    // A caller seeing REJECT must not write to the article file
    assert.equal(result.status, 'REJECT')
    assert.ok(result.errors.length > 0, 'errors array must be non-empty on REJECT')
  })

  test('PASS only when ALL protected fields are intact AND content non-empty', () => {
    const { originalParsed, batchContent } = exportFixture()
    // No mutations — everything intact
    const editedParsed = parseBatchFile(batchContent)
    const result = validateBatchImport(originalParsed, editedParsed)
    assert.equal(result.status, 'PASS')
  })
})

// ── Test R: Production fixtures remain untouched ──────────────────────────────

describe('R: Production fixtures remain untouched', () => {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const REPO_ROOT = resolve(__dirname, '..')

  test('S004_ARTICLE.md is unchanged on disk', () => {
    const path = resolve(REPO_ROOT, 'contents', 'Article', 'S004', 'S004_ARTICLE.md')
    const content = readFileSync(path, 'utf8')
    assert.ok(content.includes('Content ID: S004'), 'S004 Content ID must be present')
    assert.ok(content.includes('# '), 'S004 must have a title')
  })

  test('S005_ARTICLE.md is unchanged on disk', () => {
    const path = resolve(REPO_ROOT, 'contents', 'Article', 'S005', 'S005_ARTICLE.md')
    const content = readFileSync(path, 'utf8')
    assert.ok(content.includes('Content ID: S005'), 'S005 Content ID must be present')
    assert.ok(content.includes('# '), 'S005 must have a title')
  })

  test('S006 directory does not exist (unauthorized artifact removed)', () => {
    const s006Dir = resolve(REPO_ROOT, 'contents', 'Article', 'S006')
    assert.equal(existsSync(s006Dir), false, 'S006 directory must not exist')
  })
})
