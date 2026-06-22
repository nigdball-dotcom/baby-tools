import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS, SITE_URL, SITE_NAME } from '@/lib/config'
import { blogIndexSchema } from '@/lib/schema'
import Breadcrumb from '@/components/Breadcrumb'

const BLOG_DESCRIPTION =
  'บทความและคำแนะนำสำหรับพ่อแม่ไทย เรื่องค่าใช้จ่ายผ้าอ้อม การเลี้ยงดูทารก และการวางแผนงบประมาณครอบครัว'

export const metadata: Metadata = {
  title: 'บล็อก · คำแนะนำดูแลลูกน้อย',
  description: BLOG_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: `บล็อก BabyTools · คำแนะนำสำหรับพ่อแม่ไทย`,
    description: BLOG_DESCRIPTION,
    url: `${SITE_URL}/blog`,
    type: 'website',
    locale: 'th_TH',
    siteName: SITE_NAME,
  },
}

function formatThaiDate(iso: string): string {
  const months = [
    'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.',
    'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.',
  ]
  const d = new Date(iso)
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear() + 543}`
}

export default function BlogPage() {
  const schema = blogIndexSchema()

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 font-bold text-gray-900 text-lg">
            <span>🍼</span>
            <span>{SITE_NAME}</span>
          </Link>
          <nav className="hidden gap-6 text-sm font-medium text-gray-500 sm:flex">
            <Link href="/tools/diaper-cost" className="hover:text-gray-900 transition-colors">คำนวณผ้าอ้อม</Link>
            <Link href="/blog" className="text-gray-900 font-semibold">บล็อก</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'หน้าแรก', href: '/' },
            { label: 'บล็อก' },
          ]}
        />
        <div className="text-center mb-12 mt-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            บล็อก BabyTools
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            คำแนะนำและข้อมูลเพื่อพ่อแม่ไทย จากผู้เชี่ยวชาญด้านการดูแลลูกน้อย
          </p>
        </div>

        <div className="space-y-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                  {post.category}
                </span>
                <span className="text-xs text-gray-400">{formatThaiDate(post.date)}</span>
                <span className="text-xs text-gray-400">· อ่าน {post.readingTime}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-gray-500 leading-relaxed">{post.description}</p>
              <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-blue-600">
                <span>อ่านบทความ</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform group-hover:translate-x-1">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl bg-blue-600 p-8 text-center text-white">
          <h2 className="text-xl font-bold">ลองใช้เครื่องคำนวณผ้าอ้อมของเรา</h2>
          <p className="mt-2 text-blue-100">คำนวณค่าใช้จ่ายต่อเดือนและต่อปีภายในไม่กี่วินาที</p>
          <Link
            href="/tools/diaper-cost"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            เปิดเครื่องคำนวณ →
          </Link>
        </div>
      </main>

      <footer className="border-t border-gray-100 py-10 mt-10">
        <div className="mx-auto max-w-5xl px-4 text-center text-sm text-gray-400 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {SITE_NAME} · สร้างด้วยความรักสำหรับพ่อแม่ทุกคน</p>
        </div>
      </footer>
    </div>
  )
}
