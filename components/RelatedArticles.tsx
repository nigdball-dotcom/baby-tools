import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/config'

export default function RelatedArticles({ currentSlug }: { currentSlug: string }) {
  const related = BLOG_POSTS.filter((p) => p.slug !== currentSlug).slice(0, 2)

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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform group-hover:translate-x-1">
                <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
