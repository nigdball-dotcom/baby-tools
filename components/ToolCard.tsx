import Link from 'next/link'
import ArrowIcon from '@/components/icons/ArrowIcon'
import type { ToolMeta } from '@/types'

export default function ToolCard({ title, description, href, icon, badge, color }: ToolMeta) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
      <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-xl text-3xl ${color}`}>
        {icon}
      </div>

      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600">
          {title}
        </h3>
        {badge && (
          <span className="shrink-0 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
            {badge}
          </span>
        )}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-gray-600">{description}</p>

      <div className="mt-auto flex items-center gap-1 border-t border-gray-100 pt-4 text-sm font-medium text-blue-600">
        <span>เปิดเครื่องมือ</span>
        <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  )
}
