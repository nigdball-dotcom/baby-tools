export type SortKey = 'featured' | 'budget' | 'premium' | 'highestRated' | 'default'

export type RecommendationContext =
  | 'budget'
  | 'premium'
  | 'newborn'
  | 'sensitiveSkin'
  | 'overnight'
  | 'daily'

export interface AffiliateProduct {
  id: string
  brand: string
  productName: string
  image?: string
  color: string
  priceRange: string
  badge?: string
  rating: number
  reviewCountLabel: string
  bestFor: string
  highlights: string[]
  pros: string[]
  cons: string[]
  tags: RecommendationContext[]
  affiliateUrl: string
  updatedAt: string  // 'YYYY-MM' format
}

export const AFFILIATE_PRODUCTS: Record<string, AffiliateProduct> = {
  mamypoko: {
    id: 'mamypoko-pants-m',
    brand: 'MamyPoko',
    productName: 'MamyPoko Pants Standard M (62 ชิ้น)',
    color: 'bg-orange-50 border-orange-200',
    priceRange: '350–420 บาท',
    badge: 'ขายดีอันดับ 1',
    rating: 4.7,
    reviewCountLabel: '15k+ รีวิว',
    bestFor: 'เด็กใช้ทุกวัน',
    highlights: ['ซึมซับเร็ว', 'เหมาะกับเด็กนอนดิ้น', 'ใส่กลางคืนได้'],
    pros: ['ราคาคุ้มค่า', 'หาซื้อง่าย', 'ซึมซับได้ดี'],
    cons: ['ผิวบอบบางอาจระคายเคือง'],
    tags: ['daily', 'newborn'],
    affiliateUrl: 'https://s.shopee.co.th/8V7AoYzmYC',
    updatedAt: '2026-07',
  },
  babylove: {
    id: 'babylove-pants-m',
    brand: 'BabyLove',
    productName: 'BabyLove Speed+ Pants M (50 ชิ้น)',
    color: 'bg-green-50 border-green-200',
    priceRange: '200–250 บาท',
    badge: 'คุ้มค่าที่สุด',
    rating: 4.5,
    reviewCountLabel: '9k+ รีวิว',
    bestFor: 'ประหยัดงบประมาณ',
    highlights: ['คุ้มราคา', 'ซึมซับดี', 'เหมาะใช้ทุกวัน'],
    pros: ['ราคาถูกที่สุด', 'คุณภาพดีในราคานี้'],
    cons: ['ซึมซับน้อยกว่ายี่ห้ออื่น', 'ไม่เหมาะเด็กปัสสาวะมาก'],
    tags: ['budget', 'daily'],
    affiliateUrl: 'https://s.shopee.co.th/80AuDMqofg',
    updatedAt: '2026-07',
  },
  huggies: {
    id: 'huggies-air-soft-m',
    brand: 'Huggies',
    productName: 'Huggies Air Soft Pants M (56 ชิ้น)',
    color: 'bg-blue-50 border-blue-200',
    priceRange: '430–500 บาท',
    badge: 'พรีเมียม',
    rating: 4.8,
    reviewCountLabel: '11k+ รีวิว',
    bestFor: 'ผิวบอบบางแพ้ง่าย',
    highlights: ['นุ่มมาก', 'ระบายอากาศดี', 'เหมาะกับกลางคืน'],
    pros: ['นุ่มที่สุด', 'ระบายอากาศดีเยี่ยม', 'เหมาะผิวแพ้ง่าย'],
    cons: ['ราคาสูงกว่า'],
    tags: ['premium', 'sensitiveSkin', 'overnight', 'daily'],
    affiliateUrl: 'https://s.shopee.co.th/2g9Nrrecyr',
    updatedAt: '2026-07',
  },
}

export function sortProducts(
  products: AffiliateProduct[],
  sortKey: SortKey,
): AffiliateProduct[] {
  if (sortKey === 'budget') {
    return [...products].sort(
      (a, b) => parseInt(a.priceRange) - parseInt(b.priceRange),
    )
  }
  if (sortKey === 'premium') {
    return [...products].sort(
      (a, b) => parseInt(b.priceRange) - parseInt(a.priceRange),
    )
  }
  if (sortKey === 'highestRated') {
    return [...products].sort((a, b) => b.rating - a.rating)
  }
  // 'featured' and 'default' preserve AFFILIATE_PRODUCTS insertion order
  return products
}

export function getRecommendedProducts(
  context: RecommendationContext,
): AffiliateProduct[] {
  const all = Object.values(AFFILIATE_PRODUCTS)
  const filtered = all.filter((p) => p.tags.includes(context))
  return filtered.length > 0 ? filtered : all
}
