import Link from 'next/link'
import { breadcrumbSchema } from '@/lib/schema'
import type { BreadcrumbItem } from '@/types'

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const schema = breadcrumbSchema(
    items.map((item) => ({ name: item.label, href: item.href })),
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
          {items.map((item, i) => {
            const isLast = i === items.length - 1
            return (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-3.5 w-3.5 text-gray-300"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {isLast || !item.href ? (
                  <span
                    className="text-gray-900 font-medium"
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-blue-600 transition-colors">
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
