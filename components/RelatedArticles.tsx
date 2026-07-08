import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/config'
import ArrowIcon from '@/components/icons/ArrowIcon'

interface RelatedArticlesProps {
  currentSlug: string
  currentCategory: string
}

export default function RelatedArticles({ currentSlug, currentCategory }: RelatedArticlesProps) {
  const sameCategory = BLOG_POSTS.filter(
    (p) => p.slug !== currentSlug && p.category === currentCategory,
  ).slice(0, 2)

  const needed = 2 - sameCategory.length
  const usedSlugs = new Set([currentSlug, ...sameCategory.map((p) => p.slug)])
  const fallback = needed > 0
    ? BLOG_POSTS.filter((p) => !usedSlugs.has(p.slug)).slice(0, needed)
    : []

  const related = [...sameCategory, ...fallback]
  if (related.length === 0) return null

  return (
    <section aria-labelledby="related-heading" className="border-t border-gray-100 pt-10 mt-10">
      <h2 id="related-heading" className="text-xl font-bold text-gray-900">
        บทความที่เกี่ยวข้อง
      </h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
          >
            <span className="mb-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
              {post.category}
            </span>
            <h3 className="text-base font-semibold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
              {post.title}
            </h3>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">
              {post.description}
            </p>
            <div className="mt-3 flex items-center gap-1 text-sm font-medium text-blue-600">
              <span>อ่านบทความ</span>
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
