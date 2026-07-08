import { AFFILIATE_PRODUCTS } from '@/lib/affiliate'

const PRODUCT_UI_CONFIG = [
  { key: 'mamypoko', id: 'mamypoko-pants-m', color: 'bg-orange-50 border-orange-200' },
  { key: 'babylove', id: 'babylove-pants-m', color: 'bg-green-50 border-green-200' },
  { key: 'huggies',  id: 'huggies-gold-m',   color: 'bg-blue-50 border-blue-200' },
] as const

const PRODUCTS = PRODUCT_UI_CONFIG.map(({ key, id, color }) => {
  const aff = AFFILIATE_PRODUCTS[key]
  return {
    id,
    brand: aff.brand,
    title: aff.productName,
    description: aff.highlights.join(' · '),
    priceRange: aff.priceRange,
    affiliateUrl: aff.affiliateUrl,
    badge: aff.badge,
    color,
  }
})

type ProductEntry = (typeof PRODUCTS)[number]

function ProductCard({ product }: { product: ProductEntry }) {
  return (
    <div className={`rounded-2xl border p-5 ${product.color}`}>
      <div className="mb-3 flex items-center justify-between">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm text-lg font-bold text-gray-700">
          {product.brand.charAt(0)}
        </span>
        {product.badge && (
          <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-700 shadow-sm">
            {product.badge}
          </span>
        )}
      </div>

      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
        {product.brand}
      </p>
      <h3 className="mt-1 text-base font-bold text-gray-900 leading-snug">{product.title}</h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{product.description}</p>

      <div className="mt-4 flex items-center justify-between gap-3">
        <span className="text-sm font-semibold text-gray-900">{product.priceRange}</span>
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="sponsored noopener noreferrer"
          aria-label={`ดูสินค้า ${product.title}`}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95"
        >
          ดูสินค้า
        </a>
      </div>
    </div>
  )
}

export default function RecommendedProducts() {
  return (
    <section aria-labelledby="products-heading" className="py-10">
      <div className="mb-6">
        <h2
          id="products-heading"
          className="text-2xl font-bold text-gray-900 sm:text-3xl"
        >
          สินค้าแนะนำสำหรับคุณ
        </h2>
        <p className="mt-2 text-gray-500">
          ผ้าอ้อมยอดนิยมที่พ่อแม่ไทยเลือกใช้ คัดมาให้แล้ว
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <p className="mt-4 text-xs text-gray-400">
        * ราคาเป็นราคาโดยประมาณ อาจมีการเปลี่ยนแปลงตามร้านค้า
      </p>
    </section>
  )
}
