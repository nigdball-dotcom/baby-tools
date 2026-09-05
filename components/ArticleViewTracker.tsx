'use client'

import { useEffect } from 'react'
import { trackArticleView } from '@/lib/analytics'

interface Props {
  articleSlug: string
  topic: string
}

export default function ArticleViewTracker({ articleSlug, topic }: Props) {
  useEffect(() => {
    trackArticleView(articleSlug, topic)
  }, [articleSlug, topic])

  return null
}
