import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import DiaperCalculator from '@/components/DiaperCalculator'
import FAQ from '@/components/FAQ'
import RecommendedProducts from '@/components/RecommendedProducts'
import Breadcrumb from '@/components/Breadcrumb'
import { webApplicationSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem } from '@/types'

export const metadata: Metadata = {
  title: 'คำนวณค่าใช้จ่ายผ้าอ้อมเด็กต่อเดือน ฟรี 2026',
  description:
    'คำนวณค่าใช้จ่ายผ้าอ้อมเด็กต่อเดือนและต่อปีอัตโนมัติ พร้อมวางแผนงบประมาณสำหรับลูกน้อย ใช้ฟรี ไม่ต้องสมัครสมาชิก',
  keywords: [
    'คำนวณค่าใช้จ่ายผ้าอ้อม',
    'ผ้าอ้อมเดือนละเท่าไร',
    'ค่าผ้าอ้อมต่อเดือน',
    'เครื่องคิดค่าผ้าอ้อม',
    'วางแผนงบผ้าอ้อม',
  ],
  alternates: {
    canonical: `${SITE_URL}/tools/diaper-cost`,
  },
  openGraph: {
    title: 'คำนวณค่าใช้จ่ายผ้าอ้อมเด็กต่อเดือน ฟรี 2026',
    description:
      'คำนวณค่าใช้จ่ายผ้าอ้อมต่อเดือนและต่อปีอัตโนมัติ พร้อมวางแผนงบประมาณสำหรับลูกน้อย',
    url: `${SITE_URL}/tools/diaper-cost`,
    type: 'website',
    locale: 'th_TH',
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'คำนวณค่าใช้จ่ายผ้าอ้อมเด็กต่อเดือน ฟรี 2026',
    description:
      'คำนวณค่าใช้จ่ายผ้าอ้อมต่อเดือนและต่อปีอัตโนมัติ พร้อมวางแผนงบประมาณสำหรับลูกน้อย',
  },
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'เด็กแรกเกิดใช้ผ้าอ้อมกี่ชิ้นต่อวัน?',
    answer:
      'เด็กแรกเกิดโดยทั่วไปใช้ผ้าอ้อม 8–12 ชิ้นต่อวัน หรือประมาณทุก 2–3 ชั่วโมง ในช่วงสัปดาห์แรกอาจใช้มากกว่านี้เนื่องจากลำไส้ยังปรับตัวอยู่ เมื่อลูกอายุมากขึ้น จำนวนผ้าอ้อมที่ใช้ต่อวันจะลดลงเรื่อยๆ',
  },
  {
    question: 'ผ้าอ้อมเด็กเดือนละกี่บาท?',
    answer:
      'ขึ้นอยู่กับยี่ห้อและจำนวนที่ใช้ต่อวัน โดยเฉลี่ยสำหรับผ้าอ้อมยี่ห้อกลาง เช่น MamyPoko หรือ BabyLove ค่าใช้จ่ายอยู่ที่ประมาณ 600–1,500 บาทต่อเดือน ลองใช้เครื่องคำนวณด้านบนเพื่อดูตัวเลขที่แม่นยำสำหรับผ้าอ้อมที่คุณใช้อยู่',
  },
  {
    question: 'ผ้าอ้อมไซส์ S ใช้ถึงกี่เดือน?',
    answer:
      'ผ้าอ้อมไซส์ S (น้ำหนัก 4–8 กก.) มักใช้ได้ตั้งแต่แรกเกิดถึงประมาณ 3–4 เดือน ขึ้นอยู่กับพัฒนาการและน้ำหนักของลูก บางทารกที่ตัวใหญ่ตั้งแต่เกิดอาจข้ามไซส์ S ไปเลยและเริ่มที่ไซส์ M ได้ทันที',
  },
  {
    question: 'ควรซื้อผ้าอ้อมยกลังหรือไม่?',
    answer:
      'ถ้าลูกอยู่ในไซส์นั้นมาระยะหนึ่งแล้วและไม่มีแนวโน้มจะเปลี่ยนไซส์เร็วๆ นี้ การซื้อยกลังช่วยประหยัดได้ 10–20% อย่างไรก็ตาม ควรหลีกเลี่ยงการซื้อมากเกินไปในไซส์ที่เล็ก เพราะลูกโตเร็วมาก โดยเฉพาะในช่วง 6 เดือนแรก',
  },
]

export default function DiaperCostPage() {
  const appSchema = webApplicationSchema()

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/60 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />

      <Navbar activeHref="/tools/diaper-cost" />

      <main id="main-content" className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'หน้าแรก', href: '/' },
            { label: 'คำนวณค่าใช้จ่ายผ้าอ้อมเด็ก' },
          ]}
        />

        {/* Page header */}
        <div className="mt-6 text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl" aria-hidden="true">
            👶
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            คำนวณค่าใช้จ่ายผ้าอ้อมเด็กต่อเดือน
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500">
            กรอกข้อมูล 3 ช่อง ดูค่าใช้จ่ายรายเดือนและรายปีทันที ฟรี ไม่ต้องสมัครสมาชิก
          </p>
        </div>

        {/* Calculator — 2-column on desktop */}
        <div className="mt-10">
          <DiaperCalculator />
        </div>

        {/* Recommended Products */}
        <div className="mt-14 border-t border-gray-100 pt-10">
          <RecommendedProducts />
        </div>

        {/* Tips */}
        <div className="mt-8 rounded-2xl border border-amber-100 bg-amber-50 p-6">
          <h2 className="text-lg font-bold text-amber-900">💡 เคล็ดลับประหยัดค่าผ้าอ้อม</h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-amber-800">
            <li>• <strong>ซื้อยกลัง</strong> — ราคาต่อชิ้นลดลงอย่างมากเมื่อซื้อในปริมาณมาก</li>
            <li>• <strong>เปรียบเทียบราคาต่อชิ้น</strong> ไม่ใช่ราคาต่อแพ็ก เพื่อเลือกที่คุ้มค่าที่สุด</li>
            <li>• <strong>ใช้โปรโมชั่นออนไลน์</strong> — Shopee และ Lazada มักมีส่วนลดสำหรับสินค้าแม่และเด็ก</li>
            <li>• <strong>ลองยี่ห้อที่ประหยัดกว่า</strong> — คุณภาพดีขึ้นมาก ราคาถูกกว่าประมาณ 20–30%</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="mt-10">
          <FAQ items={FAQ_ITEMS} />
        </div>

        {/* Blog links */}
        <div className="mt-10 rounded-2xl border border-gray-100 bg-white p-6">
          <h2 className="text-lg font-bold text-gray-900">อ่านเพิ่มเติม</h2>
          <ul className="mt-4 space-y-3">
            {[
              { href: '/blog/newborn-diapers-per-day', label: 'เด็กแรกเกิดใช้ผ้าอ้อมกี่ชิ้นต่อวัน?' },
              { href: '/blog/monthly-diaper-cost', label: 'ผ้าอ้อมเด็กเดือนละกี่บาท? ตารางเปรียบเทียบ' },
              { href: '/blog/mamypoko-vs-babylove', label: 'MamyPoko vs BabyLove เปรียบเทียบผ้าอ้อมยอดนิยม' },
            ].map((link) => (
              <li key={link.href}>
                <a href={link.href} className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors">
                  <span aria-hidden="true">→</span>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  )
}
