import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import BlogCard from '@/components/cards/BlogCard'
import { BLOG_POSTS, TOPICS, TOPIC_CATEGORY_MAP, SITE_URL, SITE_NAME } from '@/lib/config'
import { itemListSchema, breadcrumbSchema } from '@/lib/schema'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return TOPICS.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const topic = TOPICS.find((t) => t.slug === slug)
  if (!topic) return {}
  return {
    title: `${topic.label} · บทความ BabyTools`,
    description: `รวมบทความเกี่ยวกับ${topic.label} สำหรับพ่อแม่ไทย ข้อมูลครบถ้วน อ่านฟรี`,
    alternates: { canonical: `${SITE_URL}/blog/topic/${slug}` },
    openGraph: {
      title: `${topic.label} · BabyTools`,
      description: `รวมบทความเกี่ยวกับ${topic.label} สำหรับพ่อแม่ไทย`,
      url: `${SITE_URL}/blog/topic/${slug}`,
      type: 'website',
      locale: 'th_TH',
      siteName: SITE_NAME,
    },
  }
}

export default async function TopicPage({ params }: PageProps) {
  const { slug } = await params
  const topic = TOPICS.find((t) => t.slug === slug)
  if (!topic) notFound()

  const categories = TOPIC_CATEGORY_MAP[slug] ?? []
  const posts = BLOG_POSTS.filter((p) => categories.includes(p.category))

  const listSchema = itemListSchema(
    posts.map((p) => ({ name: p.title, url: `/blog/${p.slug}`, description: p.description })),
  )
  const bcSchema = breadcrumbSchema([
    { name: 'หน้าแรก', href: '/' },
    { name: 'บล็อก', href: '/blog' },
    { name: topic.label },
  ])

  const isDiaperTopic = ['diapers', 'finance', 'parenting'].includes(slug)

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />

      <Navbar activeHref="/blog" />

      <main id="main-content" className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'หน้าแรก', href: '/' },
            { label: 'บล็อก', href: '/blog' },
            { label: topic.label },
          ]}
        />

        {/* Topic header */}
        <div className="mt-8 text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50 text-4xl">
            <span aria-hidden="true">{topic.icon}</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {topic.label}
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            บทความทั้งหมด {posts.length} บทความในหมวดหมู่นี้
          </p>
        </div>

        {/* Other topics */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {TOPICS.filter((t) => t.slug !== slug).map((t) => (
            <Link
              key={t.slug}
              href={t.href}
              className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              <span aria-hidden="true">{t.icon}</span>
              <span>{t.label}</span>
            </Link>
          ))}
        </div>

        {/* Article grid */}
        {posts.length > 0 ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                description={post.description}
                category={post.category}
                readingTime={post.readingTime}
              />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-center text-gray-500">ยังไม่มีบทความในหมวดนี้</p>
        )}

        {/* CTA */}
        {isDiaperTopic && (
          <div className="mt-14 rounded-2xl bg-blue-600 p-8 text-center text-white">
            <h2 className="text-xl font-bold">คำนวณค่าผ้าอ้อมของลูกคุณ</h2>
            <p className="mt-2 text-blue-100">กรอกแค่ 3 ค่า ดูผลลัพธ์ทันที ไม่ต้องสมัครสมาชิก</p>
            <Link
              href="/tools/diaper-cost"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              เปิดเครื่องคำนวณ →
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
