export interface DiaperFormState {
  diapersPerDay: string
  diapersPerPack: string
  packPrice: string
}

export interface DiaperResults {
  costPerDiaper: number
  dailyCost: number
  monthlyCost: number
  yearlyCost: number
}

export interface ToolMeta {
  title: string
  description: string
  href: string
  icon: string
  badge?: string
  color: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface Product {
  id: string
  brand: string
  title: string
  description: string
  priceRange: string
  affiliateUrl: string
  badge?: string
  color: string
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readingTime: string
  category: string
}

export interface Topic {
  slug: string
  label: string
  icon: string
  count: number
  href: string
}

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface TOCItem {
  id: string
  label: string
}
