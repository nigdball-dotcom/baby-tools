import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import FAQ from '@/components/FAQ'
import { articleSchema, faqSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem, TOCItem } from '@/types'

const SLUG = 'diaper-size-guide'
const TITLE = 'ไซส์ผ้าอ้อมเด็กทุกยี่ห้อ เลือกขนาดไหนให้พอดีกับลูก?'
const DESCRIPTION =
  'ตารางไซส์ผ้าอ้อมเด็กทุกยี่ห้อ ทั้ง MamyPoko, BabyLove, Merries, Huggies และ Moony พร้อมวิธีรู้ว่าผ้าอ้อมไซส์เหมาะสมหรือไม่ และเมื่อไหรควรเปลี่ยนไซส์'
const DATE = '2026-06-22'
const URL = `/blog/${SLUG}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'ไซส์ผ้าอ้อม',
    'ผ้าอ้อมไซส์ไหน',
    'ขนาดผ้าอ้อม',
    'MamyPoko ไซส์',
    'BabyLove ไซส์',
    'ผ้าอ้อมตารางไซส์',
  ],
  alternates: { canonical: `${SITE_URL}${URL}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}${URL}`,
    type: 'article',
    publishedTime: DATE,
    modifiedTime: DATE,
    locale: 'th_TH',
    siteName: SITE_NAME,
  },
}

const TOC: TOCItem[] = [
  { id: 'intro', label: 'ไซส์ผ้าอ้อมมีกี่แบบ?' },
  { id: 'mamypoko', label: 'ตารางไซส์ MamyPoko' },
  { id: 'babylove', label: 'ตารางไซส์ BabyLove' },
  { id: 'merries', label: 'ตารางไซส์ Merries' },
  { id: 'huggies', label: 'ตารางไซส์ Huggies' },
  { id: 'moony', label: 'ตารางไซส์ Moony' },
  { id: 'too-small', label: 'รู้ได้อย่างไรว่าผ้าอ้อมเล็กหรือใหญ่ไป' },
  { id: 'when-to-change', label: 'เมื่อไหรควรเปลี่ยนไซส์' },
  { id: 'faq', label: 'คำถามที่พบบ่อย' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'ผ้าอ้อมไซส์ NB กับ S ต่างกันอย่างไร?',
    answer:
      'ไซส์ NB (Newborn) ออกแบบสำหรับทารกน้ำหนัก 2–5 กก. มักมีรอยตัดสำหรับสายสะดือ ส่วนไซส์ S เหมาะสำหรับ 3–6 กก. ลูกส่วนใหญ่จะอยู่ในไซส์ NB เพียง 1–3 สัปดาห์เท่านั้น',
  },
  {
    question: 'น้ำหนักลูกอยู่ระหว่างสองไซส์ควรเลือกไซส์ไหน?',
    answer:
      'แนะนำให้ลองไซส์ที่ใหญ่กว่าก่อน เพราะผ้าอ้อมที่แน่นเกินไประคายเคืองผิวและทำให้เลือดไหลเวียนไม่สะดวก นอกจากนี้ลูกก็จะโตขึ้นเร็วมากในช่วงแรกอยู่แล้ว',
  },
  {
    question: 'ไซส์ผ้าอ้อมแต่ละยี่ห้อต่างกันไหม?',
    answer:
      'ต่างกันเล็กน้อย น้ำหนักที่แนะนำในตารางเป็นแนวทาง แต่รูปทรงตัวลูก (เช่น ขาใหญ่หรือเอวเล็ก) ส่งผลต่อความพอดีด้วย ควรทดลองก่อนซื้อแพ็กใหญ่',
  },
  {
    question: 'ผ้าอ้อมแบบเทปกับแบบกางเกงใช้ไซส์เดียวกันไหม?',
    answer:
      'ส่วนใหญ่ใช้ระบบไซส์เดียวกัน แต่ผ้าอ้อมแบบกางเกงเริ่มที่ไซส์ M เป็นต้นไป (ประมาณ 6 กก. ขึ้นไป) เพราะแบบเทปเหมาะกว่าสำหรับเด็กเล็กที่ยังนอนนิ่ง',
  },
  {
    question: 'ผ้าอ้อมรั่วบ่อยหมายความว่าอะไร?',
    answer:
      'มักหมายความว่าผ้าอ้อมเล็กเกินไป หรือแถบยางที่ขาพับเข้าข้างใน หรือใส่ผ้าอ้อมไม่ถูกวิธี ลองเปลี่ยนไซส์ใหญ่ขึ้นหนึ่งขนาด หรืออ่านวิธีใส่ผ้าอ้อมที่ถูกต้องได้ที่บทความวิธีเปลี่ยนผ้าอ้อม',
  },
]

function SizeTable({ brand, sizes }: { brand: string; sizes: [string, string, string][] }) {
  return (
    <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-blue-50">
            <th className="px-4 py-3 text-left font-semibold text-gray-700">ไซส์ {brand}</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-700">น้ำหนักเด็ก (กก.)</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-700">ชิ้นต่อแพ็ก (โดยประมาณ)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {sizes.map(([size, weight, count]) => (
            <tr key={size} className="hover:bg-gray-50">
              <td className="px-4 py-3 font-semibold text-gray-800">{size}</td>
              <td className="px-4 py-3 text-gray-600">{weight}</td>
              <td className="px-4 py-3 text-gray-600">{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function DiaperSizeGuidePage() {
  const faq = faqSchema(FAQ_ITEMS)
  const schema = articleSchema({
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    datePublished: DATE,
    dateModified: DATE,
  })

  return (
    <BlogLayout
      slug={SLUG}
      title={TITLE}
      description={DESCRIPTION}
      date={DATE}
      readingTime="6 นาที"
      category="คู่มือการเลือกผ้าอ้อม"
      breadcrumbs={[
        { label: 'หน้าแรก', href: '/' },
        { label: 'บล็อก', href: '/blog' },
        { label: 'ไซส์ผ้าอ้อมเด็ก' },
      ]}
      toc={TOC}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />

      <p>
        การเลือก<strong>ไซส์ผ้าอ้อม</strong>ที่ถูกต้องเป็นพื้นฐานที่สำคัญมาก
        ผ้าอ้อมที่เล็กเกินไปทำให้ระคายเคืองผิวและรั่วบ่อย ผ้าอ้อมที่ใหญ่เกินไปก็รั่วทางช่องว่างที่ขาและเอว
        บทความนี้รวบรวมตารางไซส์ผ้าอ้อมทุกยี่ห้อยอดนิยมในไทยไว้ในที่เดียว
      </p>

      <h2 id="intro">ไซส์ผ้าอ้อมมีกี่แบบ?</h2>
      <p>
        โดยทั่วไปผ้าอ้อมแบ่งตามน้ำหนักตัวเด็กดังนี้: <strong>NB → S → M → L → XL → XXL</strong>
        บางยี่ห้อมีไซส์ XXXL สำหรับเด็กโตที่ยังไม่ได้ฝึกเข้าห้องน้ำ
        แต่ละยี่ห้อใช้น้ำหนักอ้างอิงต่างกันเล็กน้อย จึงควรอ่านตารางของแต่ละยี่ห้อ
      </p>

      <h2 id="mamypoko">ตารางไซส์ MamyPoko</h2>
      <SizeTable
        brand="MamyPoko"
        sizes={[
          ['NB (Newborn)', '2–5 กก.', '90 ชิ้น'],
          ['S', '4–8 กก.', '78 ชิ้น'],
          ['M', '6–11 กก.', '64 ชิ้น'],
          ['L', '9–14 กก.', '52 ชิ้น'],
          ['XL', '12–17 กก.', '44 ชิ้น'],
          ['XXL', '15 กก.+', '38 ชิ้น'],
        ]}
      />

      <h2 id="babylove">ตารางไซส์ BabyLove</h2>
      <SizeTable
        brand="BabyLove"
        sizes={[
          ['NB (Newborn)', '2–4 กก.', '84 ชิ้น'],
          ['S', '3–7 กก.', '72 ชิ้น'],
          ['M', '6–10 กก.', '60 ชิ้น'],
          ['L', '9–14 กก.', '48 ชิ้น'],
          ['XL', '12–17 กก.', '40 ชิ้น'],
          ['XXL', '15 กก.+', '36 ชิ้น'],
        ]}
      />

      <h2 id="merries">ตารางไซส์ Merries</h2>
      <SizeTable
        brand="Merries"
        sizes={[
          ['NB', '5 กก.ลงมา', '90 ชิ้น'],
          ['S', '4–8 กก.', '82 ชิ้น'],
          ['M', '6–11 กก.', '58 ชิ้น'],
          ['L', '9–14 กก.', '44 ชิ้น'],
          ['XL', '12–22 กก.', '38 ชิ้น'],
          ['Big XL', '12 กก.+', '44 ชิ้น'],
        ]}
      />

      <h2 id="huggies">ตารางไซส์ Huggies</h2>
      <SizeTable
        brand="Huggies"
        sizes={[
          ['NB', '3–5 กก.', '84 ชิ้น'],
          ['S', '4–7 กก.', '72 ชิ้น'],
          ['M', '6–11 กก.', '60 ชิ้น'],
          ['L', '9–14 กก.', '48 ชิ้น'],
          ['XL', '12–17 กก.', '40 ชิ้น'],
          ['XXL', '15 กก.+', '36 ชิ้น'],
        ]}
      />

      <h2 id="moony">ตารางไซส์ Moony</h2>
      <SizeTable
        brand="Moony"
        sizes={[
          ['NB', '5 กก.ลงมา', '90 ชิ้น'],
          ['S', '4–8 กก.', '82 ชิ้น'],
          ['M', '6–11 กก.', '64 ชิ้น'],
          ['L', '9–14 กก.', '54 ชิ้น'],
          ['XL', '12–17 กก.', '44 ชิ้น'],
        ]}
      />

      <h2 id="too-small">รู้ได้อย่างไรว่าผ้าอ้อมเล็กหรือใหญ่ไป</h2>
      <p><strong>สัญญาณที่บอกว่าผ้าอ้อมเล็กเกินไป:</strong></p>
      <ul>
        <li>เทปยึดแน่นเกินไปหรือแทบไม่มีที่ว่างเลย</li>
        <li>มีรอยแดงหรือรอยกดรอบเอวและขาหลังถอดออก</li>
        <li>ผ้าอ้อมรั่วบ่อยแม้ไม่ได้อุ้มผิดท่า</li>
        <li>ลูกดูไม่สบายตัว ร้องบ่อยผิดปกติ</li>
      </ul>
      <p><strong>สัญญาณที่บอกว่าผ้าอ้อมใหญ่เกินไป:</strong></p>
      <ul>
        <li>มีช่องว่างระหว่างผ้าอ้อมกับขาและเอวชัดเจน</li>
        <li>ผ้าอ้อมรั่วทางขาแม้ยังไม่เต็ม</li>
        <li>เทปยึดต้องติดทับกันมากผิดปกติ</li>
      </ul>
      <p><strong>ทดสอบง่ายๆ:</strong> สอดนิ้ว 2 นิ้วที่เอว — ถ้าสอดได้พอดีคือไซส์เหมาะสม</p>

      <h2 id="when-to-change">เมื่อไหรควรเปลี่ยนไปใช้ไซส์ใหญ่ขึ้น</h2>
      <p>ควรเปลี่ยนไซส์เมื่อน้ำหนักลูกเข้าใกล้ขีดจำกัดบนของไซส์ปัจจุบัน หรือเมื่อเริ่มสังเกตว่า:</p>
      <ul>
        <li>ผ้าอ้อมรั่วบ่อยขึ้นโดยไม่มีสาเหตุอื่น</li>
        <li>มีรอยแดงรอบขาหลังถอดออก</li>
        <li>ลูกดูไม่สบายตัวขณะใส่ผ้าอ้อม</li>
      </ul>
      <p>
        อย่ารอจนผ้าอ้อมเล็กเกินไปมากแล้วค่อยเปลี่ยน เพราะจะทำให้ลูกเกิดผื่นผ้าอ้อมได้ง่าย
        อ่านเพิ่มเติมเรื่องการเลือกยี่ห้อผ้าอ้อมที่ดีได้ที่{' '}
        <Link href="/blog/diaper-brand-comparison">ผ้าอ้อมยี่ห้อไหนดีที่สุด</Link>
      </p>

      <div className="not-prose my-6 rounded-2xl bg-blue-600 p-6 text-center text-white">
        <p className="font-bold text-lg">คำนวณค่าผ้าอ้อมตามไซส์ที่ใช้</p>
        <p className="mt-2 text-blue-100 text-sm">ใส่ราคาต่อชิ้นและจำนวนที่ใช้ต่อวัน เครื่องคำนวณจะบอกค่าใช้จ่ายรายเดือน</p>
        <Link
          href="/tools/diaper-cost"
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
        >
          เปิดเครื่องคำนวณผ้าอ้อม →
        </Link>
      </div>

      <h2 id="faq">คำถามที่พบบ่อย</h2>
      <FAQ items={FAQ_ITEMS} />
    </BlogLayout>
  )
}
