import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import FAQ from '@/components/FAQ'
import { articleSchema, faqSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem, TOCItem } from '@/types'

const SLUG = 'huggies-vs-mamypoko'
const TITLE = 'Huggies vs MamyPoko อันไหนดีกว่า? เปรียบเทียบ 7 มิติ'
const DESCRIPTION =
  'เปรียบเทียบ Huggies vs MamyPoko อย่างละเอียดใน 7 มิติ: การซึมซับ การฟิตผิว ราคา ความนุ่ม กลิ่น และแนะนำว่าแต่ละแบบเหมาะกับใคร'
const DATE = '2026-06-22'
const URL = `/blog/${SLUG}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'Huggies vs MamyPoko',
    'ฮักกี้ vs มามี่โปโก',
    'เปรียบเทียบผ้าอ้อม Huggies MamyPoko',
    'ผ้าอ้อม Huggies ดีไหม',
    'ผ้าอ้อม MamyPoko ดีไหม',
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
  { id: 'overview', label: 'ภาพรวมทั้งสองยี่ห้อ' },
  { id: 'compare', label: 'เปรียบเทียบ 7 มิติ' },
  { id: 'absorption', label: 'การซึมซับและความแห้ง' },
  { id: 'fit', label: 'การฟิตและความนุ่ม' },
  { id: 'price', label: 'เปรียบเทียบราคา' },
  { id: 'verdict', label: 'สรุป: อันไหนเหมาะกับลูกคุณ?' },
  { id: 'faq', label: 'คำถามที่พบบ่อย' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Huggies กับ MamyPoko อันไหนซึมซับได้ดีกว่า?',
    answer:
      'Huggies มีชั้น DryTouch ที่ซึมซับเร็วและดูดความชื้นออกจากผิวได้ดี MamyPoko มีชั้น AirFit ที่บางแต่ยังคงประสิทธิภาพ โดยรวม Huggies ซึมซับได้ดีกว่าเล็กน้อยในกรณีที่เด็กปัสสาวะมาก',
  },
  {
    question: 'MamyPoko ราคาถูกกว่า Huggies ไหม?',
    answer:
      'ใช่ MamyPoko มักราคาถูกกว่า Huggies ประมาณ 10–25% ขึ้นอยู่กับไซส์และรุ่น MamyPoko Extra Dry ราคา 3–4 บาท/ชิ้น ขณะที่ Huggies Platinum ราคา 5–7 บาท/ชิ้น',
  },
  {
    question: 'เด็กแรกเกิดควรใช้ Huggies หรือ MamyPoko?',
    answer:
      'ทั้งคู่มีรุ่นสำหรับ Newborn ที่มีช่องตัดสะดือ (U-cut) Huggies Platinum Newborn มีชั้นป้องกันพิเศษ ส่วน MamyPoko Newborn เบาและบางกว่า แนะนำให้ลองทั้งคู่เพราะแต่ละตัวปฏิกิริยากับผิวเด็กต่างกัน',
  },
  {
    question: 'Huggies หรือ MamyPoko ทำให้ผื่นแพ้ง่ายกว่า?',
    answer:
      'ทั้งคู่ผ่านการทดสอบว่าปลอดภัยต่อผิวเด็ก อย่างไรก็ตาม เด็กบางคนอาจแพ้วัสดุเฉพาะในแต่ละแบบ ผื่นผ้าอ้อมมักเกิดจากการเปลี่ยนผ้าอ้อมไม่บ่อยพอ ไม่ใช่จากยี่ห้อ',
  },
  {
    question: 'Huggies แบบกางเกง (Pull-up) ดีไหม?',
    answer:
      'Huggies มี Pull-up ในรุ่น Pant สำหรับเด็กที่เริ่มเดิน ข้อดีคือใส่ถอดง่าย แนบสนิท แต่ราคาสูงกว่าแบบเทป MamyPoko มีรุ่น Pants ที่ราคาถูกกว่าและเป็นที่นิยมมากกว่าในตลาดไทย',
  },
  {
    question: 'ควรเปลี่ยนยี่ห้อผ้าอ้อมบ่อยไหม?',
    answer:
      'ไม่จำเป็น หากลูกไม่มีอาการระคายเคืองและการซึมซับเป็นที่พอใจ ก็ไม่ต้องเปลี่ยน การเปลี่ยนบ่อยอาจทำให้ผิวเด็กไม่คุ้นชิน ควรเปลี่ยนเมื่อลูกโตขึ้นไซส์หรือเมื่อมีปัญหาเกิดขึ้น',
  },
]

export default function HuggiesVsMamyPokoPage() {
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
      showProducts
      date={DATE}
      readingTime="6 นาที"
      category="ผ้าอ้อมและของใช้เด็ก"
      breadcrumbs={[
        { label: 'หน้าแรก', href: '/' },
        { label: 'บล็อก', href: '/blog' },
        { label: 'Huggies vs MamyPoko' },
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

      <div className="not-prose mb-6 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-800">
        บทความนี้เปรียบเทียบ <strong>Huggies vs MamyPoko</strong> เจาะลึก — สำหรับภาพรวมผ้าอ้อมทุกยี่ห้อในตลาดไทย
        อ่านได้ที่{' '}
        <Link href="/blog/diaper-brand-comparison" className="font-semibold underline">
          เปรียบเทียบผ้าอ้อมทุกยี่ห้อ
        </Link>
      </div>

      <p>
        Huggies และ MamyPoko เป็นสองยี่ห้อที่ขายดีที่สุดในไทย และพ่อแม่มือใหม่มักสับสนว่าจะเลือกอันไหน
        บทความนี้เปรียบเทียบอย่างละเอียดและตรงไปตรงมา เพื่อให้ตัดสินใจได้ตามความต้องการจริง
      </p>

      <h2 id="overview">ภาพรวมทั้งสองยี่ห้อ</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">รายการ</th>
              <th className="px-4 py-3 text-center font-semibold text-blue-700">Huggies</th>
              <th className="px-4 py-3 text-center font-semibold text-pink-700">MamyPoko</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['แบรนด์ต้นกำเนิด', 'อเมริกา (Kimberly-Clark)', 'ญี่ปุ่น (Unicharm)'],
              ['จุดแข็งหลัก', 'ซึมซับดี ป้องกันการรั่ว', 'บาง เบา ระบายอากาศดี'],
              ['รุ่นยอดนิยมในไทย', 'Huggies Platinum', 'MamyPoko Extra Dry'],
              ['ราคาต่อชิ้น (โดยประมาณ)', '4–7 บาท', '3–5 บาท'],
              ['เหมาะกับ', 'เด็กที่ปัสสาวะมาก กลางคืน', 'เด็กผิวบาง อากาศร้อน'],
            ].map(([item, huggies, mamy]) => (
              <tr key={item} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-700">{item}</td>
                <td className="px-4 py-3 text-center text-gray-600">{huggies}</td>
                <td className="px-4 py-3 text-center text-gray-600">{mamy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="compare">เปรียบเทียบ 7 มิติ</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">มิติ</th>
              <th className="px-4 py-3 text-center font-semibold text-blue-700">Huggies</th>
              <th className="px-4 py-3 text-center font-semibold text-pink-700">MamyPoko</th>
              <th className="px-4 py-3 text-center font-semibold text-gray-700">ผู้ชนะ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['การซึมซับ', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐', 'Huggies'],
              ['ความบางเบา', '⭐⭐⭐', '⭐⭐⭐⭐⭐', 'MamyPoko'],
              ['การระบายอากาศ', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐', 'MamyPoko'],
              ['ความนุ่ม', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐', 'Huggies'],
              ['ป้องกันการรั่ว', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐', 'Huggies'],
              ['ราคา (ถูก = ดี)', '⭐⭐⭐', '⭐⭐⭐⭐⭐', 'MamyPoko'],
              ['ความหลากหลายรุ่น', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐', 'MamyPoko'],
            ].map(([dim, huggies, mamy, winner]) => (
              <tr key={dim} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-700">{dim}</td>
                <td className="px-4 py-3 text-center">{huggies}</td>
                <td className="px-4 py-3 text-center">{mamy}</td>
                <td className={`px-4 py-3 text-center font-bold ${winner === 'Huggies' ? 'text-blue-600' : 'text-pink-600'}`}>
                  {winner}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="absorption">การซึมซับและความแห้ง</h2>
      <p>
        <strong>Huggies Platinum</strong> ใช้เทคโนโลยี DryTouch ที่ดูดซับความชื้นออกจากผิวทารกได้อย่างรวดเร็ว
        เหมาะสำหรับเด็กที่ปัสสาวะมาก หรือใช้กลางคืนที่ต้องรองรับปัสสาวะหลายครั้งก่อนเปลี่ยน
      </p>
      <p>
        <strong>MamyPoko Extra Dry</strong> มีชั้น AirFit ที่บางกว่า ซึมซับได้ดีสำหรับการใช้งานปกติ
        แต่อาจไม่เพียงพอสำหรับเด็กที่ปัสสาวะมากมากๆ ข้อดีคือระบายอากาศได้ดีกว่า
        ทำให้ผิวไม่อับชื้นในสภาพอากาศร้อนของไทย
      </p>

      <h2 id="fit">การฟิตและความนุ่ม</h2>
      <p>
        <strong>Huggies</strong> มีความยืดหยุ่นที่ดี ขอบขาเป็นรูปคลื่นและมีกาวแถบแบบยืด
        เหมาะกับเด็กอ้วนและเคลื่อนไหวเยอะ ลดการรั่วตามขา
      </p>
      <p>
        <strong>MamyPoko</strong> เบาและบางกว่า ลูกอาจรู้สึกสบายกว่าในอากาศร้อน
        แต่การฟิตอาจหลวมกว่าสำหรับเด็กที่มีสะโพกแคบ
      </p>

      <h2 id="price">เปรียบเทียบราคา</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">รุ่น</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ไซส์</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">จำนวน/แพ็ก</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ราคาต่อชิ้น</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['Huggies Platinum Newborn', 'NB', '34 ชิ้น', '~5.9 บ.'],
              ['Huggies Platinum Size M', 'M', '62 ชิ้น', '~6.5 บ.'],
              ['Huggies Platinum Size L', 'L', '54 ชิ้น', '~7.0 บ.'],
              ['MamyPoko Extra Dry NB', 'NB', '36 ชิ้น', '~3.9 บ.'],
              ['MamyPoko Extra Dry M', 'M', '64 ชิ้น', '~4.2 บ.'],
              ['MamyPoko Extra Dry L', 'L', '54 ชิ้น', '~4.6 บ.'],
            ].map(([model, size, count, price]) => (
              <tr key={model} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{model}</td>
                <td className="px-4 py-3 text-gray-600">{size}</td>
                <td className="px-4 py-3 text-gray-600">{count}</td>
                <td className="px-4 py-3 font-bold text-blue-600">{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="not-prose my-6 rounded-2xl bg-blue-600 p-6 text-center text-white">
        <p className="font-bold text-lg">คำนวณค่าผ้าอ้อมรายเดือน</p>
        <p className="mt-2 text-blue-100 text-sm">เปรียบเทียบค่าใช้จ่าย Huggies vs MamyPoko ตามจำนวนที่ใช้จริง</p>
        <Link
          href="/tools/diaper-cost"
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
        >
          เปิดเครื่องคำนวณผ้าอ้อม →
        </Link>
      </div>

      <h2 id="verdict">สรุป: อันไหนเหมาะกับลูกคุณ?</h2>
      <ul>
        <li>
          <strong>เลือก Huggies ถ้า:</strong> ลูกปัสสาวะเยอะ ต้องการผ้าอ้อมกลางคืน มีงบพอ
          หรือผิวลูกทนได้กับวัสดุหนาขึ้น
        </li>
        <li>
          <strong>เลือก MamyPoko ถ้า:</strong> อากาศร้อน ลูกมีผิวบาง ต้องการผ้าอ้อมเบาสบาย
          หรืองบจำกัด
        </li>
      </ul>
      <p>
        สำหรับผ้าอ้อมกลางคืนโดยเฉพาะ ดูรายละเอียดที่{' '}
        <Link href="/blog/best-overnight-diaper">ผ้าอ้อมกลางคืนยี่ห้อไหนดี</Link>
      </p>
      <p>
        เปรียบเทียบกับ BabyLove ได้ที่{' '}
        <Link href="/blog/babylove-vs-huggies">BabyLove vs Huggies</Link>
      </p>

      <h2 id="faq">คำถามที่พบบ่อย</h2>
      <FAQ items={FAQ_ITEMS} />
    </BlogLayout>
  )
}
