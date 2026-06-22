import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import FAQ from '@/components/FAQ'
import { articleSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem, TOCItem } from '@/types'

const SLUG = 'monthly-diaper-cost'
const TITLE = 'ผ้าอ้อมเด็กเดือนละกี่บาท? ตารางเปรียบเทียบค่าใช้จ่ายปี 2026'
const DESCRIPTION =
  'สรุปค่าใช้จ่ายผ้าอ้อมต่อเดือนแยกตามยี่ห้อ พร้อมตารางเปรียบเทียบราคาต่อชิ้น และเคล็ดลับประหยัดงบประมาณสำหรับครอบครัว'
const DATE = '2026-06-10'
const URL = `/blog/${SLUG}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'ผ้าอ้อมเดือนละกี่บาท',
    'ค่าใช้จ่ายผ้าอ้อมต่อเดือน',
    'งบผ้าอ้อมเด็ก',
    'เปรียบเทียบราคาผ้าอ้อม',
    'MamyPoko ราคา',
    'BabyLove ราคา',
  ],
  alternates: { canonical: `${SITE_URL}${URL}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}${URL}`,
    type: 'article',
    publishedTime: DATE,
    modifiedTime: '2026-06-22',
    locale: 'th_TH',
    siteName: SITE_NAME,
  },
}

const TOC: TOCItem[] = [
  { id: 'average', label: 'ค่าใช้จ่ายเฉลี่ยต่อเดือน' },
  { id: 'by-brand', label: 'เปรียบเทียบค่าใช้จ่ายแยกตามยี่ห้อ' },
  { id: 'by-age', label: 'ค่าใช้จ่ายแยกตามช่วงอายุ' },
  { id: 'tips', label: 'วิธีลดค่าใช้จ่ายผ้าอ้อม' },
  { id: 'calculator', label: 'คำนวณค่าใช้จ่ายของคุณ' },
  { id: 'faq', label: 'คำถามที่พบบ่อย' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'ผ้าอ้อมเด็กเดือนละกี่บาทโดยเฉลี่ย?',
    answer:
      'โดยเฉลี่ยสำหรับเด็กทารกอายุ 0–6 เดือนที่ใช้ผ้าอ้อมยี่ห้อกลาง ค่าใช้จ่ายอยู่ที่ประมาณ 800–1,500 บาทต่อเดือน ขึ้นอยู่กับยี่ห้อและจำนวนที่ใช้ต่อวัน',
  },
  {
    question: 'ค่าผ้าอ้อมต่อปีเฉลี่ยเท่าไร?',
    answer:
      'หากใช้ผ้าอ้อมสำเร็จรูปตั้งแต่แรกเกิดจนอายุ 2.5–3 ปี ค่าใช้จ่ายรวมอยู่ที่ประมาณ 15,000–40,000 บาท ขึ้นอยู่กับยี่ห้อและพฤติกรรมการใช้',
  },
  {
    question: 'ซื้อผ้าอ้อมที่ไหนถูกที่สุด?',
    answer:
      'ร้านค้าออนไลน์อย่าง Lazada, Shopee มักมีราคาถูกกว่าร้านสะดวกซื้อ 20–30% โดยเฉพาะเมื่อซื้อยกลังหรือใช้โค้ดส่วนลด นอกจากนี้ห้างสรรพสินค้าอย่าง Makro หรือ Lotus (โลตัส) ก็มีราคาดีเมื่อซื้อจำนวนมาก',
  },
  {
    question: 'ผ้าอ้อมราคาถูกคุณภาพดีไหม?',
    answer:
      'ผ้าอ้อมสโตร์แบรนด์และยี่ห้อประหยัดในปัจจุบันมีคุณภาพดีขึ้นมากเมื่อเทียบกับ 5 ปีก่อน หลายยี่ห้อผ่านการทดสอบมาตรฐานเดียวกับยี่ห้อระดับพรีเมียม อย่างไรก็ตาม ถ้าลูกมีผิวแพ้ง่าย อาจต้องลองหลายยี่ห้อก่อนหาตัวที่เหมาะ',
  },
]

export default function MonthlyDiaperCostPage() {
  const schema = articleSchema({
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    datePublished: DATE,
    dateModified: '2026-06-22',
  })

  return (
    <BlogLayout
      slug={SLUG}
      title={TITLE}
      description={DESCRIPTION}
      date={DATE}
      readingTime="6 นาที"
      category="งบประมาณครอบครัว"
      breadcrumbs={[
        { label: 'หน้าแรก', href: '/' },
        { label: 'บล็อก', href: '/blog' },
        { label: 'ผ้าอ้อมเดือนละกี่บาท?' },
      ]}
      toc={TOC}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <p>
        <strong>ค่าผ้าอ้อม</strong>เป็นค่าใช้จ่ายหลักที่พ่อแม่มือใหม่มักประเมินต่ำกว่าความเป็นจริง
        บทความนี้รวบรวมตัวเลขจริงจากยี่ห้อยอดนิยมในไทย พร้อมวิธีวางแผนงบประมาณอย่างชาญฉลาด
      </p>

      <h2 id="average">ค่าใช้จ่ายเฉลี่ยต่อเดือน</h2>
      <p>
        สำหรับเด็กทารกที่ใช้ผ้าอ้อมเฉลี่ย <strong>8 ชิ้นต่อวัน</strong> ค่าใช้จ่ายโดยประมาณแยกตามระดับราคา:
      </p>
      <ul>
        <li><strong>ยี่ห้อประหยัด</strong> (3–4 บาท/ชิ้น): ~730–975 บาท/เดือน</li>
        <li><strong>ยี่ห้อกลาง</strong> (5–6 บาท/ชิ้น): ~1,220–1,465 บาท/เดือน</li>
        <li><strong>ยี่ห้อพรีเมียม</strong> (7–9 บาท/ชิ้น): ~1,705–2,195 บาท/เดือน</li>
      </ul>

      <h2 id="by-brand">เปรียบเทียบค่าใช้จ่ายแยกตามยี่ห้อ</h2>
      <p>ตารางเปรียบเทียบราคาผ้าอ้อมไซส์ M (ข้อมูลโดยประมาณ ราคาอาจเปลี่ยนแปลง):</p>

      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ยี่ห้อ</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ราคา/แพ็ก</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">จำนวน</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ราคา/ชิ้น</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ค่าใช้จ่าย/เดือน*</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['BabyLove Speed+', '~220 บาท', '44 ชิ้น', '~5.0 บาท', '~1,220 บาท'],
              ['MamyPoko Standard', '~350 บาท', '60 ชิ้น', '~5.8 บาท', '~1,415 บาท'],
              ['Huggies Gold', '~450 บาท', '56 ชิ้น', '~8.0 บาท', '~1,952 บาท'],
              ['Pampers Baby Dry', '~480 บาท', '58 ชิ้น', '~8.3 บาท', '~2,025 บาท'],
            ].map(([brand, pack, qty, per, monthly]) => (
              <tr key={brand} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">{brand}</td>
                <td className="px-4 py-3 text-gray-600">{pack}</td>
                <td className="px-4 py-3 text-gray-600">{qty}</td>
                <td className="px-4 py-3 text-gray-600">{per}</td>
                <td className="px-4 py-3 font-semibold text-blue-700">{monthly}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400">* คำนวณจาก 8 ชิ้น/วัน × 30.44 วัน/เดือน</p>

      <h2 id="by-age">ค่าใช้จ่ายแยกตามช่วงอายุ (ยี่ห้อกลาง)</h2>
      <p>
        เมื่อลูกโตขึ้น จำนวนผ้าอ้อมที่ใช้ต่อวันจะลดลง ทำให้ค่าใช้จ่ายโดยรวมลดลงด้วย
        หากยังไม่แน่ใจว่าลูกควรใช้กี่ชิ้นต่อวัน อ่านได้ที่{' '}
        <Link href="/blog/newborn-diapers-per-day">เด็กแรกเกิดใช้ผ้าอ้อมกี่ชิ้นต่อวัน?</Link>
      </p>
      <ul>
        <li><strong>0–3 เดือน</strong> (8–10 ชิ้น/วัน): ~1,200–1,500 บาท/เดือน</li>
        <li><strong>3–6 เดือน</strong> (6–8 ชิ้น/วัน): ~900–1,200 บาท/เดือน</li>
        <li><strong>6–12 เดือน</strong> (5–6 ชิ้น/วัน): ~750–900 บาท/เดือน</li>
        <li><strong>1–2 ปี</strong> (3–5 ชิ้น/วัน): ~450–750 บาท/เดือน</li>
      </ul>

      <h2 id="tips">วิธีลดค่าใช้จ่ายผ้าอ้อม</h2>
      <ol>
        <li>
          <strong>ซื้อยกลังหรือยกแพ็กใหญ่</strong> — ราคาต่อชิ้นถูกกว่าแพ็กเล็ก 10–20%
          แต่ต้องแน่ใจว่าลูกยังอยู่ในไซส์นั้น
        </li>
        <li>
          <strong>ใช้โปรโมชั่นและโค้ดส่วนลดออนไลน์</strong> — Shopee และ Lazada มักมีส่วนลดพิเศษสำหรับสินค้าแม่และเด็ก
        </li>
        <li>
          <strong>เปรียบเทียบราคาต่อชิ้นเสมอ</strong> — อย่าหลงกับแพ็กราคาถูกที่มีจำนวนน้อย
        </li>
        <li>
          <strong>ลองยี่ห้อที่ถูกกว่า</strong> — ผ้าอ้อมยี่ห้อประหยัดในปัจจุบันมีคุณภาพดีมาก
          เทียบเท่ายี่ห้อแพงในหลายๆ ด้าน
        </li>
      </ol>

      <h2 id="calculator">คำนวณค่าใช้จ่ายของคุณ</h2>
      <p>
        ตัวเลขในบทความนี้เป็นค่าเฉลี่ยเท่านั้น ค่าใช้จ่ายจริงของคุณขึ้นอยู่กับยี่ห้อที่ใช้
        จำนวนที่ใช้ต่อวัน และราคาที่ซื้อได้จริง ลองใช้{' '}
        <Link href="/tools/diaper-cost">เครื่องคำนวณค่าผ้าอ้อมของเรา</Link>{' '}
        เพื่อดูตัวเลขที่แม่นยำสำหรับสถานการณ์ของคุณโดยเฉพาะ
      </p>

      <h2 id="faq">คำถามที่พบบ่อย</h2>
      <FAQ items={FAQ_ITEMS} />
    </BlogLayout>
  )
}
