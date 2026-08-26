/**
 * BBBFamily GPT Editorial Batch — Export CLI
 *
 * Usage:
 *   node scripts/batch-export.mjs <ARTICLE_ID> [BATCH_NUMBER]
 *
 * Examples:
 *   node scripts/batch-export.mjs S005
 *   node scripts/batch-export.mjs S005 B002
 *
 * Reads:  contents/Article/<ARTICLE_ID>/<ARTICLE_ID>_ARTICLE.md
 * Writes: contents/Article/<ARTICLE_ID>/BBBFAMILY_GPT_EDIT_BATCH_<ARTICLE_ID>_<BATCH>.md
 *
 * The exported file is the REFERENCE for the importer.
 * Do NOT edit the exported file — give it to GPT for editorial review, then save
 * the edited version as BBBFAMILY_GPT_EDIT_BATCH_<ARTICLE_ID>_<BATCH>_EDITED.md
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve, join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseArticleFile, buildBatchExport } from './batch-utils.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, '..')

const args = process.argv.slice(2)
if (args.length < 1) {
  console.error('Usage: node scripts/batch-export.mjs <ARTICLE_ID> [BATCH_NUMBER]')
  console.error('Example: node scripts/batch-export.mjs S005 B001')
  process.exit(1)
}

const articleId   = args[0].toUpperCase()
const batchNumber = (args[1] || 'B001').toUpperCase()
const batchId     = `${articleId}-${batchNumber}`

const articleDir  = join(REPO_ROOT, 'contents', 'Article', articleId)
const articleFile = join(articleDir, `${articleId}_ARTICLE.md`)
const outputFile  = join(articleDir, `BBBFAMILY_GPT_EDIT_BATCH_${articleId}_${batchNumber}.md`)
const sourceFile  = `contents/Article/${articleId}/${articleId}_ARTICLE.md`

if (!existsSync(articleFile)) {
  console.error(`Article file not found: ${articleFile}`)
  process.exit(1)
}

let article
try {
  article = parseArticleFile(readFileSync(articleFile, 'utf8'))
} catch (err) {
  console.error(`Failed to parse article: ${err.message}`)
  process.exit(1)
}

const batchContent = buildBatchExport({
  articleId:   article.articleId,
  sourceFile,
  title:       article.title,
  frontmatter: article.frontmatter,
  body:        article.body,
  batchId,
  exportedAt:  new Date().toISOString(),
})

writeFileSync(outputFile, batchContent, { encoding: 'utf8' })

console.log(`Exported: ${sourceFile}`)
console.log(`Batch ID: ${batchId}`)
console.log(`Output:   ${outputFile.replace(REPO_ROOT + '\\', '').replace(REPO_ROOT + '/', '')}`)
console.log('')
console.log('Next steps:')
console.log('  1. Give the batch file to GPT for editorial review')
console.log(`  2. Save GPT output as: BBBFAMILY_GPT_EDIT_BATCH_${articleId}_${batchNumber}_EDITED.md`)
console.log(`  3. Run: node scripts/batch-import.mjs ${sourceFile.replace(articleId + '_ARTICLE.md', `BBBFAMILY_GPT_EDIT_BATCH_${articleId}_${batchNumber}.md`)}`)
