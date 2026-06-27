import Link from 'next/link'
import { TOPICS } from '@/lib/config'

export default function BrowseByTopic() {
  return (
    <section className="border-t border-gray-100 bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            เลือกดูตามหัวข้อ
          </h2>
          <p className="mt-3 text-gray-500">บทความแบ่งตามหัวข้อที่คุณสนใจ</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {TOPICS.map((topic) => (
            <Link
              key={topic.slug}
              href={topic.href}
              className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition hover:scale-[1.02] hover:border-blue-100 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <span className="mb-2 text-3xl" aria-hidden="true">
                {topic.icon}
              </span>
              <span className="text-sm font-semibold leading-snug text-gray-900 transition-colors group-hover:text-blue-600">
                {topic.label}
              </span>
              <span className="mt-1.5 text-xs font-medium text-gray-500">{topic.count} บทความ</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
