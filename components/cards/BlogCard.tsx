import Link from 'next/link'
import ArrowIcon from '@/components/icons/ArrowIcon'

interface BlogCardProps {
  slug: string
  title: string
  description: string
  category: string
  readingTime?: string
}

export default function BlogCard({
  slug,
  title,
  description,
  category,
  readingTime,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
      <span className="mb-2 inline-block rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
        {category}
      </span>
      <h3 className="mt-1 line-clamp-2 text-sm font-bold leading-snug text-gray-900 transition-colors group-hover:text-blue-600">
        {title}
      </h3>
      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gray-600">{description}</p>
      {readingTime && (
        <p className="mt-2 text-xs text-gray-500">{readingTime}</p>
      )}
      <div className="mt-auto flex items-center gap-1 pt-3 text-sm font-medium text-blue-600">
        <span>อ่านบทความ</span>
        <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  )
}
