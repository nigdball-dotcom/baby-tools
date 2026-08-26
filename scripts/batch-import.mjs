/**
 * BBBFamily GPT Editorial Batch — Import CLI
 *
 * Usage:
 *   node scripts/batch-import.mjs <ORIGINAL_BATCH_FILE> [EDITED_BATCH_FILE]
 *
 * Examples:
 *   node scripts/batch-import.mjs contents/Article/S005/BBBFAMILY_GPT_EDIT_BATCH_S005_B001.md
 *   node scripts/batch-import.mjs contents/Article/S005/BBBFAMILY_GPT_EDIT_BATCH_S005_B001.md \
 *                                  contents/Article/S005/BBBFAMILY_GPT_EDIT_BATCH_S005_B001_EDITED.md
 *
 * ATOMIC: on PASS, writes to <article>.import.tmp then renames — no partial writes.
 *         on REJECT, nothing is written to the article file.
 *         The import report is always written.
 */

import { readFileSync, writeFileSync, renameSync, existsSync, unlinkSync } from 'node:fs'
import { resolve, join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  parseArticleFile,
  parseBatchFile,
  validateBatchImport,
  buildIntegrityReport,
  rebuildArticle,
} from './batch-utils.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, '..')

const args = process.argv.slice(2)
if (args.length < 1) {
  console.error('Usage: node scripts/batch-import.mjs <ORIGINAL_BATCH> [EDITED_BATCH]')
  console.error('Example: node scripts/batch-import.mjs contents/Article/S005/BBBFAMILY_GPT_EDIT_BATCH_S005_B001.md')
  process.exit(1)
}

const originalBatchArg  = args[0]
const editedBatchArg    = args[1] || originalBatchArg.replace(/\.md$/, '_EDITED.md')

const originalBatchFile = resolve(REPO_ROOT, originalBatchArg)
const editedBatchFile   = resolve(REPO_ROOT, editedBatchArg)

for (const [label, file] of [['Original batch', originalBatchFile], ['Edited batch', editedBatchFile]]) {
  if (!existsSync(file)) {
    console.error(`${label} file not found: ${file}`)
    process.exit(1)
  }
}

// ── Parse original batch ───────────────────────────────────────────────────────

let originalParsed
try {
  originalParsed = parseBatchFile(readFileSync(originalBatchFile, 'utf8'))
} catch (err) {
  console.error(`Failed to parse original batch: ${err.message}`)
  process.exit(1)
}

const batchId   = originalParsed.header['BATCH_ID']   || '(unknown)'
const articleId = originalParsed.mapping['ARTICLE_ID']

if (!articleId) {
  console.error('Original batch missing ARTICLE_ID in mapping')
  process.exit(1)
}

// ── Resolve and parse source article ──────────────────────────────────────────

const articleFile = join(REPO_ROOT, 'contents', 'Article', articleId, `${articleId}_ARTICLE.md`)
if (!existsSync(articleFile)) {
  console.error(`Source article not found: ${articleFile}`)
  process.exit(1)
}

let article
try {
  article = parseArticleFile(readFileSync(articleFile, 'utf8'))
} catch (err) {
  console.error(`Failed to parse source article: ${err.message}`)
  process.exit(1)
}

// ── Parse edited batch ─────────────────────────────────────────────────────────

const reportFile = editedBatchFile.replace(/\.md$/, '.IMPORT_REPORT.md')

let editedParsed
try {
  editedParsed = parseBatchFile(readFileSync(editedBatchFile, 'utf8'))
} catch (err) {
  // Structural parse failure = automatic REJECT; write report and exit
  const report = [
    '==================================================',
    'GPT EDITORIAL IMPORT REPORT',
    '==================================================',
    '',
    `Batch:       ${batchId}`,
    `Article ID:  ${articleId}`,
    '',
    'STATUS: REJECT',
    '',
    'REJECT',
    'Reason: STRUCTURAL_PARSE_ERROR',
    `Detail: ${err.message}`,
    '',
  ].join('\n')
  writeFileSync(reportFile, report, { encoding: 'utf8' })
  console.error(`STATUS: REJECT — structural parse error: ${err.message}`)
  console.error(`Report: ${reportFile}`)
  process.exit(1)
}

// ── Validate ───────────────────────────────────────────────────────────────────

const validationResult = validateBatchImport(originalParsed, editedParsed)
const report = buildIntegrityReport({ batchId, originalParsed, editedParsed, validationResult })

// Report is always written regardless of outcome
writeFileSync(reportFile, report, { encoding: 'utf8' })

// ── REJECT path: exit without touching the article ────────────────────────────

if (validationResult.status === 'REJECT') {
  console.error(`STATUS: REJECT — article NOT updated`)
  for (const err of validationResult.errors) {
    let msg = `  [${err.type}]`
    if (err.field) msg += ` field=${err.field}`
    console.error(msg)
  }
  console.error(`Report: ${reportFile}`)
  process.exit(1)
}

// ── PASS path: atomic article update ──────────────────────────────────────────

const newBody = editedParsed.content.trim()
const rebuilt = rebuildArticle({
  title:       article.title,
  frontmatter: article.frontmatter,
  body:        newBody,
})

const tmpFile = `${articleFile}.import.tmp`
try {
  writeFileSync(tmpFile, rebuilt, { encoding: 'utf8' })
  renameSync(tmpFile, articleFile)
} catch (err) {
  try { if (existsSync(tmpFile)) unlinkSync(tmpFile) } catch (_) {}
  console.error(`Failed to write article file: ${err.message}`)
  process.exit(1)
}

console.log(`STATUS: PASS`)
console.log(`Article updated: ${articleFile}`)
console.log(`Content changed: ${validationResult.contentChanged ? 'YES' : 'NO'}`)
console.log(`Report:          ${reportFile}`)
