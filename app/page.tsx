import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import ToolCard from '@/components/ToolCard'
import About from '@/components/About'
import type { ToolMeta } from '@/types'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, BLOG_POSTS } from '@/lib/config'

export const metadata: Metadata = {
  title: 'คำนวณค่าผ้าอ้อมเด็กฟรี 2026',
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `คำนวณค่าผ้าอ้อมเด็กฟรี 2026 | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
}

const TOOLS: ToolMeta[] = [
  {
    title: 'คำนวณค่าใช้จ่ายผ้าอ้อมเด็ก',
    description:
      'คำนวณค่าใช้จ่ายผ้าอ้อมต่อเดือนและต่อปีอัตโนมัติ เปรียบเทียบยี่ห้อเพื่อหาตัวเลือกที่คุ้มค่าที่สุด',
    href: '/tools/diaper-cost',
    icon: '👶',
    badge: 'ใหม่',
    color: 'bg-blue-100',
  },
]

export default function HomePage() {
  return (
    <main>
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 font-bold text-gray-900 text-lg">
            <span>🍼</span>
            <span>BabyTools</span>
          </Link>
          <nav className="hidden gap-6 text-sm font-medium text-gray-500 sm:flex">
            <Link href="/tools/diaper-cost" className="hover:text-gray-900 transition-colors">คำนวณผ้าอ้อม</Link>
            <Link href="/blog" className="hover:text-gray-900 transition-colors">บล็อก</Link>
            <a href="#about" className="hover:text-gray-900 transition-colors">เกี่ยวกับเรา</a>
          </nav>
        </div>
      </header>

      <Hero />

      {/* Tools section */}
      <section id="tools" className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              เครื่องมือของเรา
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              ทุกเครื่องมือฟรี รวดเร็ว และทำงานในเบราว์เซอร์ของคุณ
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TOOLS.map((tool) => (
              <ToolCard key={tool.href} {...tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview section */}
      <section className="border-t border-gray-100 py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">บทความล่าสุด</h2>
              <p className="mt-2 text-gray-500">คำแนะนำและข้อมูลเพื่อพ่อแม่ไทย</p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              ดูทั้งหมด →
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="mb-2 inline-block rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                  {post.category}
                </span>
                <h3 className="mt-1 text-sm font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-2 text-xs text-gray-500 leading-relaxed line-clamp-2">{post.description}</p>
                <p className="mt-2 text-xs text-gray-400">{post.readingTime}</p>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center sm:hidden">
            <Link href="/blog" className="text-sm font-semibold text-blue-600">
              ดูบทความทั้งหมด →
            </Link>
          </div>
        </div>
      </section>

      <About />

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} BabyTools · สร้างด้วยความรักสำหรับพ่อแม่ทุกคน</p>
            <nav className="flex gap-5 text-sm text-gray-400">
              <Link href="/tools/diaper-cost" className="hover:text-gray-700 transition-colors">คำนวณผ้าอ้อม</Link>
              <Link href="/blog" className="hover:text-gray-700 transition-colors">บล็อก</Link>
              <Link href="/blog/mamypoko-vs-babylove" className="hover:text-gray-700 transition-colors">MamyPoko vs BabyLove</Link>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  )
}
