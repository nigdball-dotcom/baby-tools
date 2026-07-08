import type { MetadataRoute } from 'next'
import { SITE_URL, BLOG_POSTS, TOPICS } from '@/lib/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/tools/diaper-cost`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  const topicRoutes: MetadataRoute.Sitemap = TOPICS.map((topic) => ({
    url: `${SITE_URL}/blog/topic/${topic.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }))

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...topicRoutes, ...blogRoutes]
}
