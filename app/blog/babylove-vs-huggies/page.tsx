import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import FAQ from '@/components/FAQ'
import { articleSchema, faqSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem, TOCItem } from '@/types'

const SLUG = 'babylove-vs-huggies'
const TITLE = 'BabyLove vs Huggies อันไหนดีกว่า? เปรียบเทียบตรงๆ'
const DESCRIPTION =
  'เปรียบเทียบ BabyLove vs Huggies อย่างตรงไปตรงมา ราคา คุณภาพ การซึมซับ ความเหมาะสมกับสภาพอากาศไทย และคำตอบว่าสำหรับงบประหยัดควรเลือกอะไร'
const DATE = '2026-06-22'
const URL = `/blog/${SLUG}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'BabyLove vs Huggies',
    'เบบี้เลิฟ vs ฮักกี้',
    'ผ้าอ้อม BabyLove ดีไหม',
    'เปรียบเทียบ BabyLove Huggies',
    'ผ้าอ้อมราคาประหยัด',
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
  { id: 'compare', label: 'เปรียบเทียบหัวข้อสำคัญ' },
  { id: 'price', label: 'เปรียบเทียบราคาต่อชิ้น' },
  { id: 'absorption', label: 'การซึมซับและความแห้ง' },
  { id: 'material', label: 'วัสดุและความปลอดภัย' },
  { id: 'verdict', label: 'สรุป: เลือกอะไรดี?' },
  { id: 'faq', label: 'คำถามที่พบบ่อย' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'BabyLove ผลิตที่ไหน?',
    answer:
      'BabyLove ผลิตในประเทศไทยโดยบริษัท DSG International Thailand ซึ่งเป็นข้อได้เปรียบด้านราคา เพราะไม่มีต้นทุนนำเข้า ทำให้ราคาถูกกว่า Huggies ที่นำเข้าหรือผลิตในต่างประเทศ',
  },
  {
    question: 'BabyLove ใช้กลางคืนได้ไหม?',
    answer:
      'BabyLove มีรุ่น Gold+ ที่ออกแบบสำหรับการซึมซับสูง ใช้กลางคืนได้ แต่อาจไม่เทียบเท่า Huggies Platinum สำหรับเด็กที่ปัสสาวะมากมากๆ ถ้าเด็กลุกบ่อยหรือเปลี่ยนผ้าอ้อมกลางคืนอยู่แล้ว BabyLove เพียงพอ',
  },
  {
    question: 'BabyLove กับ Huggies อันไหนนุ่มกว่า?',
    answer:
      'Huggies Platinum นุ่มกว่า BabyLove ในระดับสัมผัสที่รับรู้ได้ชัด BabyLove ใช้วัสดุมาตรฐานที่ปลอดภัยแต่ไม่ได้ออกแบบเน้นความพรีเมียมด้านสัมผัส',
  },
  {
    question: 'BabyLove ราคาถูกกว่า Huggies เท่าไร?',
    answer:
      'โดยเฉลี่ย BabyLove ถูกกว่า Huggies ประมาณ 30–50% ต่อชิ้น BabyLove Gold M ราคาประมาณ 2.5–3.5 บาท/ชิ้น ขณะที่ Huggies Platinum M ราคาประมาณ 5.5–7 บาท/ชิ้น',
  },
  {
    question: 'BabyLove Pants หรือ MamyPoko Pants อันไหนดีกว่า?',
    answer:
      'MamyPoko Pants บางกว่าและระบายอากาศได้ดีกว่า BabyLove Pants ราคาถูกกว่าและคุ้มค่ากว่า ขึ้นอยู่กับลำดับความสำคัญ ถ้างบน้อย: BabyLove, ถ้าอากาศร้อนหรือผิวบาง: MamyPoko',
  },
  {
    question: 'ควรเปลี่ยนจาก Huggies เป็น BabyLove ไหมถ้าต้องประหยัด?',
    answer:
      'ได้เลย ถ้าลูกไม่ได้มีปัญหาผื่นแพ้และการซึมซับปกติเพียงพอ BabyLove เป็นตัวเลือกที่ประหยัดค่าใช้จ่ายได้ 30–50% โดยไม่กระทบคุณภาพการดูแลลูกมากนัก ค่อยๆ ลองเปลี่ยนดูก่อน 1 แพ็ก',
  },
]

export default function BabyLoveVsHuggiesPage() {
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
        { label: 'BabyLove vs Huggies' },
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
        บทความนี้เปรียบเทียบ <strong>BabyLove vs Huggies</strong> เจาะลึก — สำหรับภาพรวมผ้าอ้อมทุกยี่ห้อในตลาดไทย
        อ่านได้ที่{' '}
        <Link href="/blog/diaper-brand-comparison" className="font-semibold underline">
          เปรียบเทียบผ้าอ้อมทุกยี่ห้อ
        </Link>
      </div>

      <p>
        BabyLove เป็นผ้าอ้อมสัญชาติไทยที่ครองส่วนแบ่งตลาดได้มากด้วยราคาที่เข้าถึงได้
        ขณะที่ Huggies คือแบรนด์พรีเมียมจากอเมริกา บทความนี้ตอบตรงๆ ว่าความแตกต่างด้านราคานั้น
        "คุ้ม" จริงหรือเปล่า
      </p>

      <h2 id="overview">ภาพรวมทั้งสองยี่ห้อ</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">รายการ</th>
              <th className="px-4 py-3 text-center font-semibold text-green-700">BabyLove</th>
              <th className="px-4 py-3 text-center font-semibold text-blue-700">Huggies</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['ประเทศต้นกำเนิด', 'ไทย (DSG International)', 'อเมริกา (Kimberly-Clark)'],
              ['จุดขายหลัก', 'ราคาประหยัด คุ้มค่า', 'พรีเมียม ซึมซับสูง'],
              ['ระดับราคา', 'ประหยัด–กลาง', 'กลาง–พรีเมียม'],
              ['รุ่นยอดนิยม', 'BabyLove Gold+', 'Huggies Platinum'],
              ['เหมาะกับ', 'งบจำกัด ใช้กลางวัน', 'งบพอรับได้ ต้องการคุณภาพสูง'],
            ].map(([item, babylove, huggies]) => (
              <tr key={item} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-700">{item}</td>
                <td className="px-4 py-3 text-center text-gray-600">{babylove}</td>
                <td className="px-4 py-3 text-center text-gray-600">{huggies}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="compare">เปรียบเทียบหัวข้อสำคัญ</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">หัวข้อ</th>
              <th className="px-4 py-3 text-center font-semibold text-green-700">BabyLove</th>
              <th className="px-4 py-3 text-center font-semibold text-blue-700">Huggies</th>
              <th className="px-4 py-3 text-center font-semibold text-gray-700">ผู้ชนะ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['ราคา (ถูก = ดี)', '⭐⭐⭐⭐⭐', '⭐⭐⭐', 'BabyLove'],
              ['การซึมซับ', '⭐⭐⭐', '⭐⭐⭐⭐⭐', 'Huggies'],
              ['ความนุ่ม', '⭐⭐⭐', '⭐⭐⭐⭐⭐', 'Huggies'],
              ['การระบายอากาศ', '⭐⭐⭐⭐', '⭐⭐⭐⭐', 'เท่ากัน'],
              ['ป้องกันการรั่ว', '⭐⭐⭐', '⭐⭐⭐⭐⭐', 'Huggies'],
              ['ความหลากหลาย', '⭐⭐⭐⭐', '⭐⭐⭐⭐', 'เท่ากัน'],
              ['คุ้มค่า (ราคา/คุณภาพ)', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐', 'BabyLove'],
            ].map(([topic, babylove, huggies, winner]) => (
              <tr key={topic} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-700">{topic}</td>
                <td className="px-4 py-3 text-center">{babylove}</td>
                <td className="px-4 py-3 text-center">{huggies}</td>
                <td className={`px-4 py-3 text-center font-bold ${
                  winner === 'BabyLove' ? 'text-green-600' :
                  winner === 'Huggies' ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  {winner}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="price">เปรียบเทียบราคาต่อชิ้น</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">รุ่น</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ไซส์</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ราคาต่อชิ้น</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ค่าใช้จ่าย/เดือน*</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['BabyLove Gold+ M', 'M', '~2.8 บ.', '~560 บ.'],
              ['BabyLove Gold+ L', 'L', '~3.2 บ.', '~640 บ.'],
              ['BabyLove Gold+ XL', 'XL', '~3.5 บ.', '~700 บ.'],
              ['Huggies Platinum M', 'M', '~6.5 บ.', '~1,300 บ.'],
              ['Huggies Platinum L', 'L', '~7.0 บ.', '~1,400 บ.'],
              ['Huggies Platinum XL', 'XL', '~7.5 บ.', '~1,500 บ.'],
            ].map(([model, size, price, monthly]) => (
              <tr key={model} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{model}</td>
                <td className="px-4 py-3 text-gray-600">{size}</td>
                <td className="px-4 py-3 font-bold text-blue-600">{price}</td>
                <td className="px-4 py-3 text-gray-600">{monthly}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-500">*คำนวณจาก 200 ชิ้น/เดือน (เด็กอายุ 1 ปีขึ้นไป)</p>

      <h2 id="absorption">การซึมซับและความแห้ง</h2>
      <p>
        <strong>Huggies Platinum</strong> ชนะชัดเจนในด้านนี้ ชั้น DryTouch ที่ Huggies ใช้ดูดซับความชื้น
        ออกจากผิวได้เร็วและกักเก็บได้นานกว่า เหมาะมากสำหรับกลางคืนที่ต้องรองรับปัสสาวะหลายครั้ง
      </p>
      <p>
        <strong>BabyLove Gold+</strong> ซึมซับได้ดีพอใช้งานปกติทั่วไป แต่ถ้าเด็กปัสสาวะมากหรือไม่ได้เปลี่ยนผ้าอ้อมทุก 2–3 ชั่วโมง
        อาจรู้สึกชื้นได้เร็วกว่า
      </p>

      <h2 id="material">วัสดุและความปลอดภัย</h2>
      <p>
        ทั้งสองยี่ห้อผ่านมาตรฐานความปลอดภัย ไม่มีสาร Latex และปราศจากสารก่อภูมิแพ้ที่พบบ่อย
        BabyLove ผ่าน มอก. ไทย Huggies ผ่านมาตรฐานสากล FDA
      </p>
      <p>
        หากลูกมีผิวบอบบาง หรือเคยแพ้ผ้าอ้อมมาก่อน ควรลองทั้งสองยี่ห้อแบบเล็กก่อน
        ก่อนซื้อแบบแพ็กใหญ่
      </p>

      <h2 id="verdict">สรุป: เลือกอะไรดี?</h2>
      <ul>
        <li>
          <strong>เลือก BabyLove ถ้า:</strong> งบจำกัด ต้องการประหยัด 30–50% ต่อเดือน
          เด็กไม่มีปัญหาผิวพิเศษ หรือใช้กลางวันที่เปลี่ยนบ่อยอยู่แล้ว
        </li>
        <li>
          <strong>เลือก Huggies ถ้า:</strong> ต้องการคุณภาพสูง ใช้กลางคืน เด็กปัสสาวะมาก
          หรืองบพอรับได้
        </li>
      </ul>

      <div className="not-prose my-6 rounded-2xl bg-blue-600 p-6 text-center text-white">
        <p className="font-bold text-lg">คำนวณประหยัดได้เท่าไรเมื่อเปลี่ยนยี่ห้อ</p>
        <p className="mt-2 text-blue-100 text-sm">กรอกราคาและจำนวน เปรียบเทียบค่าใช้จ่ายรายเดือนทันที</p>
        <Link
          href="/tools/diaper-cost"
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
        >
          เปิดเครื่องคำนวณผ้าอ้อม →
        </Link>
      </div>

      <p>
        เปรียบเทียบกับ MamyPoko ได้ที่{' '}
        <Link href="/blog/huggies-vs-mamypoko">Huggies vs MamyPoko</Link>
      </p>
      <p>
        สำหรับผ้าอ้อมกลางคืนโดยเฉพาะ ดูที่{' '}
        <Link href="/blog/best-overnight-diaper">ผ้าอ้อมกลางคืนยี่ห้อไหนดี</Link>
      </p>

      <h2 id="faq">คำถามที่พบบ่อย</h2>
      <FAQ items={FAQ_ITEMS} />
    </BlogLayout>
  )
}
