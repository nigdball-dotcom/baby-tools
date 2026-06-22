import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, BLOG_POSTS } from './config'

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: 'th',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function webApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'คำนวณค่าใช้จ่ายผ้าอ้อมเด็ก',
    url: `${SITE_URL}/tools/diaper-cost`,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'All',
    inLanguage: 'th',
    description:
      'คำนวณค่าใช้จ่ายผ้าอ้อมเด็กต่อเดือนและต่อปีอัตโนมัติ ฟรี ไม่ต้องสมัครสมาชิก',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'THB',
    },
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  }
}

export function articleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${SITE_URL}${url}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: 'th',
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${url}`,
    },
  }
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }
}

export function breadcrumbSchema(
  items: { name: string; href?: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  }
}

export function itemListSchema(
  items: { name: string; url: string; description?: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: `${SITE_URL}${item.url}`,
      ...(item.description ? { description: item.description } : {}),
    })),
  }
}

export function blogIndexSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${SITE_NAME} บล็อก`,
    description:
      'บทความและคำแนะนำสำหรับพ่อแม่ไทย เรื่องค่าใช้จ่ายผ้าอ้อม การเลี้ยงดูทารก และการวางแผนงบประมาณครอบครัว',
    url: `${SITE_URL}/blog`,
    inLanguage: 'th',
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    blogPost: BLOG_POSTS.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.date,
      inLanguage: 'th',
    })),
  }
}

