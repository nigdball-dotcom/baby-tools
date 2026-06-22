import Link from 'next/link'
import Breadcrumb from './Breadcrumb'
import RelatedArticles from './RelatedArticles'
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
  children: React.ReactNode
}

function formatThaiDate(iso: string): string {
  const months = [
    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม',
  ]
  const d = new Date(iso)
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear() + 543}`
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
  children,
}: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-gray-900"
          >
            <span>🍼</span>
            <span>BabyTools</span>
          </Link>
          <span className="text-gray-200">|</span>
          <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            บล็อก
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbs} />

        {/* Article header */}
        <div className="mt-6">
          <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
            {category}
          </span>
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

        {/* CTA to calculator */}
        <div className="my-10 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white sm:p-8">
          <p className="text-sm font-semibold text-blue-200 uppercase tracking-wide">ลองใช้เลย</p>
          <h2 className="mt-2 text-xl font-bold sm:text-2xl">
            คำนวณค่าผ้าอ้อมของลูกคุณ
          </h2>
          <p className="mt-2 text-blue-100 text-sm sm:text-base">
            กรอกแค่ 3 ค่า ดูผลลัพธ์ทันที ไม่ต้องสมัครสมาชิก
          </p>
          <Link
            href="/tools/diaper-cost"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50 active:scale-95"
          >
            <span>เปิดเครื่องคำนวณ</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        {/* Related articles */}
        <RelatedArticles currentSlug={slug} />
      </main>

      <footer className="border-t border-gray-100 py-10 mt-10">
        <div className="mx-auto max-w-5xl px-4 text-center text-sm text-gray-400 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} BabyTools · สร้างด้วยความรักสำหรับพ่อแม่ทุกคน</p>
        </div>
      </footer>
    </div>
  )
}
