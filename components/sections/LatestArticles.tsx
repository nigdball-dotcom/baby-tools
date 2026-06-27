import Link from 'next/link'
import BlogCard from '@/components/cards/BlogCard'
import { BLOG_POSTS } from '@/lib/config'

const latestPosts = BLOG_POSTS.slice(0, 6)

export default function LatestArticles() {
  return (
    <>
      <section className="border-t border-gray-100 bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">บทความล่าสุด</h2>
              <p className="mt-2 text-gray-500">คำแนะนำและข้อมูลเพื่อพ่อแม่ไทย</p>
            </div>
            <Link
              href="/blog"
              className="hidden rounded text-sm font-semibold text-blue-600 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:inline-flex sm:items-center sm:gap-1"
            >
              ดูทั้งหมด →
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
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

          <div className="mt-6 text-center sm:hidden">
            <Link
              href="/blog"
              className="text-sm font-semibold text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              ดูบทความทั้งหมด →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 py-10">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-sm text-gray-500">
            มีบทความทั้งหมด {BLOG_POSTS.length} บทความ
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-8 py-3 text-base font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            ดูบทความทั้งหมด →
          </Link>
        </div>
      </section>
    </>
  )
}
