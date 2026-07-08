export interface AffiliateProduct {
  brand: string
  productName: string
  priceRange: string
  badge?: string
  highlights: string[]
  affiliateUrl: string
}

export const AFFILIATE_PRODUCTS: Record<string, AffiliateProduct> = {
  mamypoko: {
    brand: 'MamyPoko',
    productName: 'MamyPoko Pants Standard M (62 ชิ้น)',
    priceRange: '350–420 บาท',
    badge: 'ขายดีอันดับ 1',
    highlights: ['ซึมซับเร็ว', 'เหมาะกับเด็กนอนดิ้น', 'ใส่กลางคืนได้'],
    affiliateUrl: 'https://s.shopee.co.th/8V7AoYzmYC',
  },
  babylove: {
    brand: 'BabyLove',
    productName: 'BabyLove Speed+ Pants M (50 ชิ้น)',
    priceRange: '200–250 บาท',
    badge: 'คุ้มค่าที่สุด',
    highlights: ['คุ้มราคา', 'ซึมซับดี', 'เหมาะใช้ทุกวัน'],
    affiliateUrl: 'https://s.shopee.co.th/80AuDMqofg',
  },
  huggies: {
    brand: 'Huggies',
    productName: 'Huggies Air Soft Pants M (56 ชิ้น)',
    priceRange: '430–500 บาท',
    badge: 'พรีเมียม',
    highlights: ['นุ่มมาก', 'ระบายอากาศดี', 'เหมาะกับกลางคืน'],
    affiliateUrl: 'https://s.shopee.co.th/2g9Nrrecyr',
  },
}
