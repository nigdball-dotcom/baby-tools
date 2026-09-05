'use client'

import Link from 'next/link'
import { trackArticleCtaClick } from '@/lib/analytics'

interface Props {
  href: string
  label: string
  articleSlug: string
  topic: string
  ctaType: string
}

export default function ArticleCtaLink({ href, label, articleSlug, topic, ctaType }: Props) {
  return (
    <Link
      href={href}
      className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50 active:scale-95"
      onClick={() => trackArticleCtaClick(articleSlug, topic, href, ctaType)}
    >
      <span>{label}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  )
}
