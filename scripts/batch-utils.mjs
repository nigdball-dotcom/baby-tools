/**
 * BBBFamily GPT Editorial Batch — Core Utilities
 *
 * Whole-article editorial model:
 *   S00X_ARTICLE.md  →  batch export  →  GPT edits  →  batch import  →  S00X_ARTICLE.md
 *
 * The editorial unit is ONE WHOLE ARTICLE, not individual sections.
 * Sections inside the markdown are structural — not independently publishable.
 */

import { createHash } from 'node:crypto'

// ── Sentinel constants ─────────────────────────────────────────────────────────

export const SENTINELS = {
  BANNER_LINE:             '==================================================',
  BANNER_TITLE:            'BBBFAMILY GPT EDITORIAL BATCH',
  DIVIDER:                 '--------------------------------------------------',
  PROTECTED_MAPPING_LABEL: 'PROTECTED MAPPING',
  EDITABLE_CONTENT_LABEL:  'EDITABLE CONTENT',
  END_BATCH_LABEL:         'END BATCH',
  CONTENT_START:           '[CONTENT_START]',
  CONTENT_END:             '[CONTENT_END]',
}

// ── Article parsing ────────────────────────────────────────────────────────────

/**
 * Parse an S-series source article markdown file.
 * Returns { articleId, title, frontmatter, body }
 *
 * Protected:  everything before the first \n---\n separator (title + frontmatter)
 * Editable:   everything after the first \n---\n separator (the article body)
 */
export function parseArticleFile(rawContent) {
  const raw = normalizeLineEndings(rawContent)

  const sepIdx = raw.indexOf('\n---\n')
  if (sepIdx === -1) {
    throw new Error('Article missing --- separator between frontmatter and body')
  }

  const headerBlock = raw.slice(0, sepIdx)
  const body        = raw.slice(sepIdx + '\n---\n'.length).trim()

  let title = null
  const frontmatter = {}

  for (const line of headerBlock.split('\n')) {
    const t = line.trim()
    if (t.startsWith('# ')) {
      title = t.slice(2).trim()
    } else if (!t.startsWith('#') && t.includes(': ')) {
      const colonIdx = t.indexOf(': ')
      const key      = t.slice(0, colonIdx).trim()
      const value    = t.slice(colonIdx + 2).trim()
      if (key && value) frontmatter[key] = value
    }
  }

  if (!title) throw new Error('Article missing # Title')
  if (!frontmatter['Content ID']) throw new Error('Article frontmatter missing Content ID')

  return {
    articleId: frontmatter['Content ID'],
    title,
    frontmatter,
    body,
  }
}

// ── Hashing ────────────────────────────────────────────────────────────────────

/** SHA256 of content, first 16 hex chars. Stable, deterministic. */
export function hashContent(text) {
  return createHash('sha256').update(text, 'utf8').digest('hex').slice(0, 16)
}

// ── Batch export ───────────────────────────────────────────────────────────────

/**
 * Build the batch export file from a parsed article.
 *
 * The batch file has three sections:
 *   1. Header — batch control fields (BATCH_ID, EXPORT_VERSION, EXPORTED_AT)
 *   2. Protected mapping — article identity and original content hash
 *   3. Editable content — the full article body between [CONTENT_START]/[CONTENT_END]
 */
export function buildBatchExport({ articleId, sourceFile, title, frontmatter, body, batchId, exportedAt }) {
  const {
    BANNER_LINE, BANNER_TITLE, DIVIDER,
    PROTECTED_MAPPING_LABEL, EDITABLE_CONTENT_LABEL,
    END_BATCH_LABEL, CONTENT_START, CONTENT_END,
  } = SENTINELS

  const contentHash = hashContent(body.trim())
  const L = []

  // Header
  L.push(BANNER_LINE)
  L.push(BANNER_TITLE)
  L.push(BANNER_LINE)
  L.push('')
  L.push(`BATCH_ID: ${batchId}`)
  L.push(`EXPORT_VERSION: 1`)
  L.push(`EXPORTED_AT: ${exportedAt}`)
  L.push('')

  // Protected mapping
  L.push(DIVIDER)
  L.push(PROTECTED_MAPPING_LABEL)
  L.push(DIVIDER)
  L.push('')
  L.push(`ARTICLE_ID: ${articleId}`)
  L.push(`SOURCE_FILE: ${sourceFile}`)
  L.push(`ARTICLE_TITLE: ${title}`)
  L.push(`ARTICLE_VERSION: ${frontmatter['Version'] || ''}`)
  L.push(`ARTICLE_STATUS: ${frontmatter['Status'] || ''}`)
  L.push(`CONTENT_HASH: ${contentHash}`)
  L.push('')

  // Editable content — one block, the whole article body
  L.push(DIVIDER)
  L.push(EDITABLE_CONTENT_LABEL)
  L.push(DIVIDER)
  L.push('')
  L.push(CONTENT_START)
  L.push(body.trim())
  L.push(CONTENT_END)
  L.push('')

  // End
  L.push(DIVIDER)
  L.push(END_BATCH_LABEL)
  L.push(DIVIDER)

  return L.join('\n')
}

// ── Batch parsing ──────────────────────────────────────────────────────────────

/**
 * Parse a batch file (original export or GPT-edited version).
 * Returns { header, mapping, content }
 *
 * Throws on structural errors:
 *   - Missing [CONTENT_START]
 *   - Missing [CONTENT_END]
 *   - Duplicate [CONTENT_START]
 *   - Duplicate [CONTENT_END]
 *   - [CONTENT_END] without preceding [CONTENT_START]
 */
export function parseBatchFile(rawContent) {
  const raw   = normalizeLineEndings(rawContent)
  const lines = raw.split('\n')

  const {
    BANNER_LINE, BANNER_TITLE, DIVIDER,
    PROTECTED_MAPPING_LABEL, EDITABLE_CONTENT_LABEL, END_BATCH_LABEL,
    CONTENT_START, CONTENT_END,
  } = SENTINELS

  let phase   = 'pre'
  const headerLines  = []
  const mappingLines = []
  const contentLines = []
  let inContent        = false
  let contentStartCount = 0
  let contentEndCount   = 0

  for (const line of lines) {
    // END BATCH terminates the file — only when not inside a content block
    if (line === END_BATCH_LABEL && !inContent) break

    // Structural phase transitions — only meaningful outside content
    if (!inContent) {
      if (line === PROTECTED_MAPPING_LABEL) { phase = 'mapping'; continue }
      if (line === EDITABLE_CONTENT_LABEL)  { phase = 'content'; continue }
      if (line === BANNER_TITLE)            { phase = 'header';  continue }
      if (line === BANNER_LINE || line === DIVIDER) continue
    }

    // Content sentinel handling (applies in any phase; GPT edits only EDITABLE CONTENT)
    if (line === CONTENT_START) {
      contentStartCount++
      if (contentStartCount > 1) throw new Error('Duplicate [CONTENT_START] in batch file')
      inContent = true
      continue
    }
    if (line === CONTENT_END) {
      contentEndCount++
      if (contentEndCount > 1) throw new Error('Duplicate [CONTENT_END] in batch file')
      if (!inContent) throw new Error('[CONTENT_END] found without preceding [CONTENT_START]')
      inContent = false
      continue
    }

    // Accumulate
    if (inContent) {
      contentLines.push(line)
    } else if (phase === 'header') {
      headerLines.push(line)
    } else if (phase === 'mapping') {
      mappingLines.push(line)
    }
  }

  if (inContent) throw new Error('Missing [CONTENT_END] — content block was never closed')
  if (contentStartCount === 0) throw new Error('Missing [CONTENT_START] in batch file')

  const header  = parseKeyValueBlock(headerLines)
  const mapping = parseKeyValueBlock(mappingLines)
  const content = contentLines.join('\n')

  if (header.EXPORT_VERSION !== undefined) {
    header.EXPORT_VERSION = Number(header.EXPORT_VERSION)
  }

  return { header, mapping, content }
}

// ── Validation ─────────────────────────────────────────────────────────────────

/**
 * Compare original batch against GPT-edited batch.
 * Returns { status, errors, contentChanged, editedHash }
 *
 * PASS  — all protected fields unchanged, content non-empty
 * REJECT — any protected field changed, or empty content
 */
export function validateBatchImport(originalParsed, editedParsed) {
  const errors = []

  // Protected header fields
  for (const field of ['BATCH_ID', 'EXPORT_VERSION']) {
    const orig   = String(originalParsed.header[field]  ?? '')
    const edited = String(editedParsed.header[field]    ?? '')
    if (orig !== edited) {
      errors.push({ type: 'PROTECTED_HEADER_CHANGED', field, original: orig, edited })
    }
  }

  // Protected mapping fields
  for (const field of ['ARTICLE_ID', 'SOURCE_FILE', 'ARTICLE_TITLE', 'ARTICLE_VERSION', 'ARTICLE_STATUS', 'CONTENT_HASH']) {
    const orig   = String(originalParsed.mapping[field] ?? '')
    const edited = String(editedParsed.mapping[field]   ?? '')
    if (orig !== edited) {
      errors.push({ type: 'PROTECTED_MAPPING_CHANGED', field, original: orig, edited })
    }
  }

  // Content must not be empty
  const editedBody = editedParsed.content.trim()
  if (!editedBody) {
    errors.push({ type: 'EMPTY_CONTENT' })
  }

  const originalHash   = originalParsed.mapping.CONTENT_HASH || ''
  const editedHash     = editedBody ? hashContent(editedBody) : ''
  const contentChanged = editedBody ? editedHash !== originalHash : false

  return {
    status: errors.length === 0 ? 'PASS' : 'REJECT',
    errors,
    contentChanged,
    editedHash,
  }
}

// ── Integrity report ───────────────────────────────────────────────────────────

export function buildIntegrityReport({ batchId, validationResult, originalParsed, editedParsed }) {
  const { status, errors, contentChanged, editedHash } = validationResult
  const originalHash = originalParsed.mapping.CONTENT_HASH || ''

  const L = []
  L.push('==================================================')
  L.push('GPT EDITORIAL IMPORT REPORT')
  L.push('==================================================')
  L.push('')
  L.push(`Batch:           ${batchId}`)
  L.push(`Article ID:      ${originalParsed.mapping.ARTICLE_ID || '(unknown)'}`)
  L.push(`Source file:     ${originalParsed.mapping.SOURCE_FILE || '(unknown)'}`)
  L.push('')
  L.push(`Original hash:   ${originalHash}`)
  L.push(`Edited hash:     ${editedHash || '(empty)'}`)
  L.push(`Content changed: ${contentChanged ? 'YES' : 'NO'}`)
  L.push('')

  if (status === 'PASS') {
    L.push('STATUS: PASS')
    L.push(contentChanged
      ? 'Article updated with GPT editorial changes.'
      : 'Content unchanged — no edits detected.')
  } else {
    L.push('STATUS: REJECT')
    L.push('')
    for (const err of errors) {
      L.push('REJECT')
      L.push(`Reason: ${err.type}`)
      if (err.field    !== undefined) L.push(`Field: ${err.field}`)
      if (err.original !== undefined) L.push(`Original: ${err.original}`)
      if (err.edited   !== undefined) L.push(`Edited: ${err.edited}`)
      L.push('')
    }
  }

  return L.join('\n')
}

// ── Article rebuild ────────────────────────────────────────────────────────────

/**
 * Reconstruct the S-series markdown file from original metadata + new body.
 * The frontmatter is preserved exactly; only the body changes.
 */
export function rebuildArticle({ title, frontmatter, body }) {
  const L = [`# ${title}`, '']
  for (const [k, v] of Object.entries(frontmatter)) {
    L.push(`${k}: ${v}`)
  }
  L.push('')
  L.push('---')
  L.push('')
  L.push(body.trim())
  L.push('')
  return L.join('\n')
}

// ── Helpers ────────────────────────────────────────────────────────────────────

function parseKeyValueBlock(lines) {
  const obj = {}
  for (const line of lines) {
    const t = line.trim()
    if (!t) continue
    const idx = t.indexOf(': ')
    if (idx > 0) obj[t.slice(0, idx)] = t.slice(idx + 2)
  }
  return obj
}

function normalizeLineEndings(text) {
  return text.replace(/\r\n/g, '\n').replace(/\r/g, '\n')
}
