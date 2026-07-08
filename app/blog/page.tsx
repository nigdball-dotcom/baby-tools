import type { Metadata } from 'next'
import type { BlogPost } from '@/types'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import BlogIndexClient from '@/components/blog/BlogIndexClient'
import { blogIndexSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME, BLOG_POSTS, TOPICS, TOPIC_CATEGORY_MAP } from '@/lib/config'

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

export default function BlogPage() {
  const schema = blogIndexSchema()
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <Navbar activeHref="/blog" />

      <main id="main-content" className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'หน้าแรก', href: '/' },
            { label: 'บล็อก' },
          ]}
        />

        <div className="mt-6 mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            บล็อก BabyTools
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            คำแนะนำและข้อมูลเพื่อพ่อแม่ไทย จากผู้เชี่ยวชาญด้านการดูแลลูกน้อย
          </p>
        </div>

        <BlogIndexClient
          posts={BLOG_POSTS as unknown as BlogPost[]}
          topics={TOPICS}
          topicCategoryMap={TOPIC_CATEGORY_MAP}
        />
      </main>

      <Footer />
    </div>
  )
}
