import Link from 'next/link'
import type { ToolMeta } from '@/types'

export default function ToolCard({ title, description, href, icon, badge, color }: ToolMeta) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]"
    >
      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${color}`}>
        {icon}
      </div>

      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        {badge && (
          <span className="shrink-0 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
            {badge}
          </span>
        )}
      </div>

      <p className="mt-2 text-sm text-gray-500 leading-relaxed">{description}</p>

      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-blue-600">
        <span>เปิดเครื่องมือ</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
        >
          <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
        </svg>
      </div>
    </Link>
  )
}
