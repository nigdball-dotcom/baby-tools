import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Breadcrumb from './Breadcrumb'
import RelatedArticles from './RelatedArticles'
import { formatThaiDate } from '@/lib/utils'
import { AFFILIATE_PRODUCTS } from '@/lib/affiliate'
import type { BreadcrumbItem, TOCItem } from '@/types'

interface BlogLayoutProps {
  slug: string
  title: string
  description: string
  date: string
  readingTime: string
  category: string
  breadcrumbs: BreadcrumbItem[]
  toc?: TOCItem[]
  showProducts?: boolean
  children: React.ReactNode
}

export default function BlogLayout({
  slug,
  title,
  description,
  date,
  readingTime,
  category,
  breadcrumbs,
  toc,
  showProducts,
  children,
}: BlogLayoutProps) {
  const ctaConfig = getCTAConfig(category)

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeHref="/blog" />

      <main id="main-content" className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbs} />

        {/* Article header */}
        <div className="mt-6">
          <Link
            href={`/blog/topic/${getCategorySlug(category) ?? ''}`}
            className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 hover:bg-blue-100 transition-colors"
          >
            {category}
          </Link>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl leading-snug">
            {title}
          </h1>
          <p className="mt-3 text-lg text-gray-500 leading-relaxed">{description}</p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <time dateTime={date}>{formatThaiDate(date)}</time>
            <span>·</span>
            <span>อ่าน {readingTime}</span>
          </div>
        </div>

        {/* Table of Contents */}
        {toc && toc.length > 0 && (
          <nav
            aria-label="สารบัญ"
            className="my-8 rounded-2xl border border-blue-100 bg-blue-50 p-5"
          >
            <p className="mb-3 text-sm font-bold text-blue-800 uppercase tracking-wide">สารบัญ</p>
            <ol className="space-y-1.5">
              {toc.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="flex items-center gap-2 text-sm text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    <span className="shrink-0 text-blue-400 font-mono">{i + 1}.</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Article body */}
        <article className="prose prose-blue prose-lg max-w-none mt-8
          prose-headings:font-bold prose-headings:text-gray-900
          prose-p:text-gray-600 prose-p:leading-relaxed
          prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-gray-900
          prose-ul:text-gray-600 prose-ol:text-gray-600
          prose-li:leading-relaxed
          prose-table:text-sm
          prose-th:bg-gray-50 prose-th:text-gray-700 prose-th:font-semibold
          prose-td:text-gray-600
        ">
          {children}
        </article>

        {/* Recommended products — shown on comparison/product articles */}
        {showProducts && (
          <div className="mt-10 border-t border-gray-100 pt-10">
            <RecommendedProductsInline />
          </div>
        )}

        {/* CTA to calculator or relevant tool */}
        <div className="my-10 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white sm:p-8">
          <p className="text-sm font-semibold text-blue-200 uppercase tracking-wide">{ctaConfig.eyebrow}</p>
          <h2 className="mt-2 text-xl font-bold sm:text-2xl">{ctaConfig.heading}</h2>
          <p className="mt-2 text-blue-100 text-sm sm:text-base">{ctaConfig.description}</p>
          <Link
            href={ctaConfig.href}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50 active:scale-95"
          >
            <span>{ctaConfig.label}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        {/* Related articles */}
        <RelatedArticles currentSlug={slug} currentCategory={category} />
      </main>

      <Footer />
    </div>
  )
}

// ── Inline mini product section for comparison articles ──────────────────────

function RecommendedProductsInline() {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900">สินค้าที่กล่าวถึงในบทความ</h2>
      <p className="mt-1 text-sm text-gray-500">ราคาโดยประมาณ อาจแตกต่างตามร้านค้าและโปรโมชั่น</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {Object.values(AFFILIATE_PRODUCTS).map((p) => (
          <a
            key={p.brand}
            href={p.affiliateUrl}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{p.brand}</p>
              <p className="text-sm font-bold text-gray-900">{p.priceRange}</p>
              <span className="mt-1 inline-block rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-600">{p.badge}</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-blue-500 shrink-0" aria-hidden="true">
              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  )
}

// ── CTA config per category ──────────────────────────────────────────────────

const DIAPER_CATEGORIES = new Set([
  'คู่มือการเลือกผ้าอ้อม',
  'รีวิวและเปรียบเทียบ',
  'รีวิวสินค้า',
  'ผ้าอ้อมและของใช้เด็ก',
  'คำแนะนำสำหรับพ่อแม่',
])

const FINANCE_CATEGORIES = new Set(['การวางแผนการเงิน', 'งบประมาณครอบครัว'])

type CTAConfig = { eyebrow: string; heading: string; description: string; href: string; label: string }

function getCTAConfig(category: string): CTAConfig {
  if (DIAPER_CATEGORIES.has(category) || FINANCE_CATEGORIES.has(category)) {
    return {
      eyebrow: 'ลองใช้เลย',
      heading: 'คำนวณค่าผ้าอ้อมของลูกคุณ',
      description: 'กรอกแค่ 3 ค่า ดูผลลัพธ์ทันที ไม่ต้องสมัครสมาชิก',
      href: '/tools/diaper-cost',
      label: 'เปิดเครื่องคำนวณ',
    }
  }
  if (category === 'การนอนของลูกน้อย') {
    return {
      eyebrow: 'เครื่องมือที่เกี่ยวข้อง',
      heading: 'ตารางนอนเด็ก (กำลังมา)',
      description: 'เครื่องมือติดตามและวางแผนการนอนสำหรับลูกน้อย กำลังมาเร็วๆ นี้',
      href: '/blog/topic/sleep',
      label: 'ดูบทความการนอนทั้งหมด',
    }
  }
  if (category === 'การให้นมลูก') {
    return {
      eyebrow: 'เครื่องมือที่เกี่ยวข้อง',
      heading: 'ตารางให้นม (กำลังมา)',
      description: 'เครื่องมือวางแผนการให้นมสำหรับทารก กำลังมาเร็วๆ นี้',
      href: '/blog/topic/feeding',
      label: 'ดูบทความการให้นมทั้งหมด',
    }
  }
  if (category === 'สุขภาพและการดูแล') {
    return {
      eyebrow: 'อ่านเพิ่มเติม',
      heading: 'บทความสุขภาพและการดูแลลูกน้อย',
      description: 'คำแนะนำด้านสุขภาพและการดูแลลูกน้อยจากผู้เชี่ยวชาญ',
      href: '/blog/topic/health',
      label: 'ดูบทความสุขภาพทั้งหมด',
    }
  }
  // default fallback
  return {
    eyebrow: 'ลองใช้เลย',
    heading: 'คำนวณค่าผ้าอ้อมของลูกคุณ',
    description: 'กรอกแค่ 3 ค่า ดูผลลัพธ์ทันที ไม่ต้องสมัครสมาชิก',
    href: '/tools/diaper-cost',
    label: 'เปิดเครื่องคำนวณ',
  }
}

// ── Category slug helper (mirrors lib/utils) ─────────────────────────────────

const CATEGORY_SLUG_MAP: Record<string, string> = {
  'คู่มือการเลือกผ้าอ้อม': 'diapers',
  'รีวิวและเปรียบเทียบ': 'diapers',
  'รีวิวสินค้า': 'diapers',
  'ผ้าอ้อมและของใช้เด็ก': 'diapers',
  'การนอนของลูกน้อย': 'sleep',
  'การให้นมลูก': 'feeding',
  'การวางแผนการเงิน': 'finance',
  'งบประมาณครอบครัว': 'finance',
  'สุขภาพและการดูแล': 'health',
  'คำแนะนำสำหรับพ่อแม่': 'parenting',
}

function getCategorySlug(category: string): string | null {
  return CATEGORY_SLUG_MAP[category] ?? null
}
