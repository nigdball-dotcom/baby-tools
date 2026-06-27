import BlogCard from '@/components/cards/BlogCard'
import { BLOG_POSTS, POPULAR_POST_SLUGS } from '@/lib/config'

// TODO: Sprint 2.x — replace with dynamic popular posts based on analytics / pageview data
const popularPosts = POPULAR_POST_SLUGS
  .map((slug) => BLOG_POSTS.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => p !== undefined)

export default function PopularArticles() {
  return (
    <section className="border-t border-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">บทความยอดนิยม</h2>
          <p className="mt-2 text-gray-500">บทความที่พ่อแม่ค้นหามากที่สุด</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {popularPosts.map((post) => (
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
      </div>
    </section>
  )
}
