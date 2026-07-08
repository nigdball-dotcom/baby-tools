'use client'

import { useState } from 'react'
import Link from 'next/link'
import BlogCard from '@/components/cards/BlogCard'
import ArrowIcon from '@/components/icons/ArrowIcon'
import { formatThaiDate } from '@/lib/utils'
import type { BlogPost, Topic } from '@/types'

interface BlogIndexClientProps {
  posts: BlogPost[]
  topics: Topic[]
  topicCategoryMap: Record<string, string[]>
}

export default function BlogIndexClient({ posts, topics, topicCategoryMap }: BlogIndexClientProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null)

  const filtered = activeSlug
    ? posts.filter((p) => (topicCategoryMap[activeSlug] ?? []).includes(p.category))
    : posts

  const featured = filtered[0] ?? null
  const rest = filtered.slice(1)

  const topicIconFor = (category: string) =>
    topics.find((t) => (topicCategoryMap[t.slug] ?? []).includes(category))?.icon ?? '📖'

  return (
    <div>
      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 border-b border-gray-100 pb-6">
        <button
          type="button"
          onClick={() => setActiveSlug(null)}
          className={`rounded-full px-4 py-1.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
            activeSlug === null
              ? 'bg-blue-600 text-white shadow-sm'
              : 'border border-gray-200 bg-white text-gray-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700'
          }`}
        >
          ทั้งหมด ({posts.length})
        </button>
        {topics.map((topic) => (
          <button
            key={topic.slug}
            type="button"
            onClick={() => setActiveSlug(topic.slug)}
            className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
              activeSlug === topic.slug
                ? 'bg-blue-600 text-white shadow-sm'
                : 'border border-gray-200 bg-white text-gray-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700'
            }`}
          >
            <span aria-hidden="true">{topic.icon}</span>
            <span>{topic.label}</span>
            <span
              className={`rounded-full px-1.5 py-0.5 text-xs ${
                activeSlug === topic.slug ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
              }`}
            >
              {topic.count}
            </span>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-gray-500">ไม่มีบทความในหมวดนี้</p>
      )}

      {/* Featured article — first in current filter */}
      {featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="group mt-8 flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:flex-row focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          <div className="flex h-32 shrink-0 items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 sm:h-auto sm:w-52">
            <span className="text-5xl" aria-hidden="true">
              {topicIconFor(featured.category)}
            </span>
          </div>
          <div className="flex flex-col justify-between p-6">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                  {featured.category}
                </span>
                <span className="text-xs text-gray-400">{formatThaiDate(featured.date)}</span>
                <span className="text-xs text-gray-400">· อ่าน {featured.readingTime}</span>
              </div>
              <h2 className="text-xl font-bold leading-snug text-gray-900 transition-colors group-hover:text-blue-600 sm:text-2xl">
                {featured.title}
              </h2>
              <p className="mt-2 leading-relaxed text-gray-500 line-clamp-2">{featured.description}</p>
            </div>
            <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-blue-600">
              <span>อ่านบทความ</span>
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
      )}

      {/* Rest of articles */}
      {rest.length > 0 && (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
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
      )}

      {/* CTA */}
      <div className="mt-14 rounded-2xl bg-blue-600 p-8 text-center text-white">
        <h2 className="text-xl font-bold">ลองใช้เครื่องคำนวณผ้าอ้อมของเรา</h2>
        <p className="mt-2 text-blue-100">คำนวณค่าใช้จ่ายต่อเดือนและต่อปีภายในไม่กี่วินาที</p>
        <Link
          href="/tools/diaper-cost"
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-blue-700 transition hover:bg-blue-50"
        >
          เปิดเครื่องคำนวณ →
        </Link>
      </div>
    </div>
  )
}
