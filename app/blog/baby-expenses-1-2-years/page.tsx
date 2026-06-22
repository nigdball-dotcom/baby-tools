import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import FAQ from '@/components/FAQ'
import { articleSchema, faqSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem, TOCItem } from '@/types'

const SLUG = 'baby-expenses-1-2-years'
const TITLE = 'ค่าใช้จ่ายลูก 1–2 ปี ต้องเตรียมเงินเท่าไร? รายการครบถ้วน'
const DESCRIPTION =
  'สรุปค่าใช้จ่ายทั้งหมดสำหรับลูกวัย 1–2 ปี ได้แก่ ค่าอาหาร นมสูตรต่อเนื่อง ผ้าอ้อม ค่าเนอสเซอรี่ วัคซีน เสื้อผ้า และค่าใช้จ่ายอื่นๆ พร้อมงบประมาณรายเดือนแยกตามรายการ'
const DATE = '2026-06-22'
const URL = `/blog/${SLUG}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'ค่าใช้จ่ายลูก 1-2 ปี',
    'งบเลี้ยงลูกวัยหัดเดิน',
    'ค่าใช้จ่ายเด็ก 1 ขวบ',
    'ค่าเลี้ยงลูก 1 ปี',
    'งบประมาณลูกวัย 1 ขวบ',
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
  { id: 'overview', label: 'ภาพรวมค่าใช้จ่ายวัย 1–2 ปี' },
  { id: 'food', label: 'ค่าอาหารและนม' },
  { id: 'diaper', label: 'ค่าผ้าอ้อม' },
  { id: 'nursery', label: 'ค่าเนอสเซอรี่' },
  { id: 'vaccine', label: 'ค่าวัคซีน' },
  { id: 'other', label: 'ค่าใช้จ่ายอื่นๆ' },
  { id: 'vs-year1', label: 'เปรียบเทียบกับปีแรก' },
  { id: 'faq', label: 'คำถามที่พบบ่อย' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'ค่าใช้จ่ายเลี้ยงลูกวัย 1–2 ปีเดือนละเท่าไร?',
    answer:
      'ค่าใช้จ่ายรายเดือนสำหรับลูกวัย 1–2 ปีอยู่ที่ประมาณ 8,000–25,000 บาท ขึ้นอยู่กับว่าส่งเนอสเซอรี่หรือไม่ ค่าเนอสเซอรี่มักเป็นค่าใช้จ่ายก้อนใหญ่ที่สุดในช่วงนี้',
  },
  {
    question: 'ค่าใช้จ่ายวัย 1–2 ปี แตกต่างจากปีแรกอย่างไร?',
    answer:
      'ค่าใช้จ่ายบางอย่างลดลง เช่น ค่านมผงลดลงเมื่อเปลี่ยนเป็นนมกล่อง แต่มีค่าใช้จ่ายใหม่เพิ่มขึ้น เช่น ค่าเนอสเซอรี่ ค่าอาหารจริง และค่าของเล่นเพื่อพัฒนาการ',
  },
  {
    question: 'เด็ก 1–2 ปียังต้องใส่ผ้าอ้อมไหม?',
    answer:
      'ใช่ เด็กส่วนใหญ่ยังใส่ผ้าอ้อมจนอายุ 2–3 ปี ในวัยนี้มักเปลี่ยนจากผ้าอ้อมแบบเทปเป็นแบบกางเกง (Pull-up) ซึ่งสะดวกกว่าสำหรับเด็กที่เริ่มเดินและเคลื่อนไหวมากขึ้น',
  },
  {
    question: 'ควรส่งเนอสเซอรี่ตั้งแต่อายุเท่าไร?',
    answer:
      'ไม่มีอายุที่กำหนดตายตัว แต่เนอสเซอรี่หลายแห่งรับเด็กตั้งแต่อายุ 6 เดือน ประโยชน์ของเนอสเซอรี่ในวัย 1–2 ปีคือพัฒนาการทางสังคมและภาษา แต่ต้องชั่งน้ำหนักกับค่าใช้จ่ายที่สูงมาก',
  },
  {
    question: 'วัคซีนอะไรที่ต้องฉีดตอนอายุ 1–2 ปี?',
    answer:
      'วัคซีนสำคัญในช่วงอายุ 1–2 ปี ได้แก่ MMR (หัด คางทูม หัดเยอรมัน), อีสุกอีใส (Varicella), ตับอักเสบ A และบูสเตอร์วัคซีนอื่นๆ บางส่วนอยู่ในโปรแกรมรัฐ บางส่วนต้องจ่ายเอง',
  },
  {
    question: 'เด็กวัย 1–2 ปียังต้องกินนมผงไหม?',
    answer:
      'หลังอายุ 12 เดือน สามารถเปลี่ยนจากนมผงสูตร 1 เป็นนมผงสูตร 2 (Growing Up Milk) หรือนมวัวล้วนๆ ได้ นมวัวล้วนราคาถูกกว่าและมีคุณค่าทางโภชนาการเพียงพอสำหรับวัยนี้',
  },
]

export default function BabyExpenses12YearsPage() {
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
      readingTime="7 นาที"
      category="การวางแผนการเงิน"
      breadcrumbs={[
        { label: 'หน้าแรก', href: '/' },
        { label: 'บล็อก', href: '/blog' },
        { label: 'ค่าใช้จ่ายลูก 1–2 ปี' },
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

      <div className="not-prose mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
        <strong>บทความนี้เน้นวัย 1–2 ปี (วัยหัดเดิน)</strong> — หากต้องการข้อมูลปีแรก (0–12 เดือน) อ่านได้ที่{' '}
        <Link href="/blog/baby-first-year-expenses" className="font-semibold underline">
          ค่าใช้จ่ายมีลูกปีแรก
        </Link>
      </div>

      <p>
        เมื่อลูกครบ 1 ขวบ หลายคนคิดว่าค่าใช้จ่ายจะลดลง แต่ความจริงคือค่าใช้จ่ายบางส่วนลดลง
        ในขณะที่มีค่าใช้จ่ายใหม่เพิ่มขึ้น โดยเฉพาะค่าเนอสเซอรี่และค่าอาหาร
        ที่เริ่มมีความสำคัญมากขึ้นในวัยนี้
      </p>

      <h2 id="overview">ภาพรวมค่าใช้จ่ายวัย 1–2 ปีต่อเดือน</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">รายการ</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ขั้นต่ำ</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">เฉลี่ย</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">สูง</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['อาหารและนม', '1,500 บ.', '2,500 บ.', '4,000 บ.'],
              ['ผ้าอ้อม', '500 บ.', '900 บ.', '1,500 บ.'],
              ['เนอสเซอรี่', '0 บ. (ดูแลเอง)', '8,000 บ.', '25,000 บ.'],
              ['วัคซีน', '0 บ. (รัฐ)', '2,000 บ.', '5,000 บ.'],
              ['เสื้อผ้าและของใช้', '500 บ.', '1,000 บ.', '2,500 บ.'],
              ['ของเล่น/หนังสือ', '0 บ.', '500 บ.', '2,000 บ.'],
              ['ค่าแพทย์/ยา', '0 บ.', '500 บ.', '2,000 บ.'],
              ['รวมโดยประมาณ', '2,500 บ.', '15,400 บ.', '42,000 บ.'],
            ].map(([item, low, avg, high]) => (
              <tr key={item} className={`hover:bg-gray-50 ${item.startsWith('รวม') ? 'bg-blue-50 font-bold' : ''}`}>
                <td className="px-4 py-3 font-medium text-gray-800">{item}</td>
                <td className="px-4 py-3 text-gray-600">{low}</td>
                <td className="px-4 py-3 font-bold text-blue-600">{avg}</td>
                <td className="px-4 py-3 text-gray-600">{high}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="food">ค่าอาหารและนม</h2>
      <p>วัย 1 ขวบขึ้นไป ลูกเริ่มกินอาหารครอบครัวได้มากขึ้น ค่าใช้จ่ายด้านนมเปลี่ยนแปลงมาก:</p>
      <ul>
        <li>
          <strong>นมวัวพาสเจอร์ไรส์/UHT</strong> — หลังอายุ 12 เดือน สามารถเปลี่ยนจากนมผงสูตร 1
          เป็นนมวัวล้วน ราคาประมาณ 800–1,500 บาท/เดือน (ลดลงมากจากนมผง 3,000–5,000 บาท)
        </li>
        <li>
          <strong>นมผงสูตร 2 (Growing Up)</strong> — ไม่จำเป็น แต่บางครอบครัวเลือกใช้
          ราคาสูงกว่านมวัว 2–3 เท่า โภชนาการไม่ได้ดีกว่ามาก
        </li>
        <li>
          <strong>ค่าอาหาร</strong> — เด็ก 1–2 ปีกินอาหารครอบครัวได้แล้ว ค่าใช้จ่ายเพิ่มขึ้นประมาณ
          500–1,500 บาท/เดือน ขึ้นอยู่กับอาหารที่กิน
        </li>
      </ul>

      <h2 id="diaper">ค่าผ้าอ้อม</h2>
      <p>วัย 1–2 ปี เด็กใช้ผ้าอ้อมน้อยลงเพราะกินนมน้อยลง แต่ยังต้องใช้อยู่:</p>
      <ul>
        <li><strong>จำนวนต่อวัน</strong> — ลดจาก 8–12 ชิ้น/วัน เป็น 4–6 ชิ้น/วัน</li>
        <li><strong>ไซส์ที่ใช้</strong> — L หรือ XL ขึ้นอยู่กับน้ำหนัก</li>
        <li>
          <strong>แบบเทป vs แบบกางเกง</strong> — เด็กที่เริ่มเดิน มักเปลี่ยนเป็นแบบกางเกง Pull-up
          สะดวกกว่าในการใส่และถอด อ่านเพิ่มเติมได้ที่{' '}
          <Link href="/blog/pull-up-vs-tape-diaper">ผ้าอ้อมแบบใส่ vs แบบเทป</Link>
        </li>
      </ul>
      <p>ค่าใช้จ่ายผ้าอ้อมรายเดือนในวัยนี้ประมาณ 500–1,500 บาท</p>

      <h2 id="nursery">ค่าเนอสเซอรี่</h2>
      <p>
        สำหรับครอบครัวที่ทั้งพ่อและแม่ทำงาน ค่าเนอสเซอรี่คือค่าใช้จ่ายก้อนใหญ่ที่สุด:
      </p>
      <ul>
        <li><strong>เนอสเซอรี่รัฐ/ชุมชน</strong> — 1,500–5,000 บาท/เดือน</li>
        <li><strong>เนอสเซอรี่เอกชนระดับกลาง</strong> — 5,000–15,000 บาท/เดือน</li>
        <li><strong>เนอสเซอรี่นานาชาติ</strong> — 15,000–40,000 บาท/เดือน</li>
      </ul>
      <p>
        ดูข้อมูลเปรียบเทียบค่าเนอสเซอรี่อย่างละเอียดได้ที่{' '}
        <Link href="/blog/nursery-cost-thailand">ค่าเรียนเนอสเซอรี่ในไทย</Link>
      </p>

      <h2 id="vaccine">ค่าวัคซีน</h2>
      <p>วัย 1–2 ปี มีวัคซีนสำคัญหลายตัว:</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">วัคซีน</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">อายุ</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">รัฐ</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">เอกชน (ประมาณ)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['MMR (หัด คางทูม หัดเยอรมัน)', '1 ปี', 'ฟรี', '400–600 บ.'],
              ['อีสุกอีใส (Varicella)', '1 ปี', 'ฟรี (บางพื้นที่)', '1,200–1,800 บ.'],
              ['ตับอักเสบ A', '1–2 ปี', 'ไม่รวม', '1,000–1,500 บ.'],
              ['ไข้หวัดใหญ่', 'ทุกปี', 'บางโรงพยาบาล', '300–600 บ.'],
              ['ไข้สมองอักเสบ JE', '1 ปี 6 เดือน', 'ฟรี', '—'],
            ].map(([vac, age, gov, priv]) => (
              <tr key={vac} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{vac}</td>
                <td className="px-4 py-3 text-gray-600">{age}</td>
                <td className="px-4 py-3 text-green-600 font-medium">{gov}</td>
                <td className="px-4 py-3 text-gray-600">{priv}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        ดูข้อมูลค่าวัคซีนครบถ้วนได้ที่{' '}
        <Link href="/blog/baby-vaccine-cost">ค่าวัคซีนเด็กในไทย</Link>
      </p>

      <h2 id="other">ค่าใช้จ่ายอื่นๆ ที่มักลืมคำนวณ</h2>
      <ul>
        <li><strong>เสื้อผ้า</strong> — เด็ก 1–2 ปีโตเร็วมาก ต้องซื้อเสื้อผ้าบ่อย 500–2,000 บาท/เดือน</li>
        <li><strong>รองเท้า</strong> — เมื่อเริ่มเดิน ต้องมีรองเท้า เปลี่ยนทุก 3–4 เดือน 200–1,000 บาท/คู่</li>
        <li><strong>ของเล่นเพื่อพัฒนาการ</strong> — ไม่จำเป็นต้องซื้อมาก แต่สำคัญ 200–2,000 บาท/เดือน</li>
        <li><strong>หนังสือภาพ</strong> — วัยนี้เรียนรู้ผ่านภาพและเสียง หนังสือเป็นของเล่นที่คุ้มค่า</li>
        <li><strong>ค่าแพทย์</strong> — เด็กวัยนี้ป่วยบ่อยขึ้นเมื่อเริ่มเข้าสังคม 0–3,000 บาท/เดือน</li>
      </ul>

      <h2 id="vs-year1">เปรียบเทียบค่าใช้จ่ายปีแรก vs วัย 1–2 ปี</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">รายการ</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ปีแรก (0–12 เดือน)</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">วัย 1–2 ปี</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['นมผง', '2,500–5,000 บ./เดือน', '0–1,500 บ./เดือน (เปลี่ยนนมวัว)'],
              ['ผ้าอ้อม', '900–1,500 บ./เดือน', '500–1,000 บ./เดือน'],
              ['เนอสเซอรี่', 'น้อย/ไม่มี', '5,000–25,000 บ./เดือน'],
              ['อาหาร', 'น้อย', '500–1,500 บ./เดือน'],
              ['รวม (กลาง)', '~8,000 บ./เดือน', '~15,000 บ./เดือน'],
            ].map(([item, y1, y2]) => (
              <tr key={item} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{item}</td>
                <td className="px-4 py-3 text-gray-600">{y1}</td>
                <td className="px-4 py-3 text-gray-600">{y2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="not-prose my-6 rounded-2xl bg-blue-600 p-6 text-center text-white">
        <p className="font-bold text-lg">คำนวณค่าผ้าอ้อมสำหรับลูกวัย 1–2 ปี</p>
        <p className="mt-2 text-blue-100 text-sm">ใส่ขนาดและยี่ห้อ ดูค่าใช้จ่ายรายเดือนได้เลย</p>
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
