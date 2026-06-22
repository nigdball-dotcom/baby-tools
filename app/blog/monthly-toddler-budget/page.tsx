import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import FAQ from '@/components/FAQ'
import { articleSchema, faqSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem, TOCItem } from '@/types'

const SLUG = 'monthly-toddler-budget'
const TITLE = 'งบเลี้ยงลูกวัยหัดเดิน 1–2 ปี ต่อเดือนต้องใช้เงินเท่าไร?'
const DESCRIPTION =
  'แบ่งงบประมาณเลี้ยงลูกวัยหัดเดิน (1–2 ปี) รายเดือนอย่างละเอียด ค่าอาหาร นม ผ้าอ้อม เนอสเซอรี่ ค่าแพทย์ เสื้อผ้า พร้อมงบที่แนะนำสำหรับ 3 ระดับรายได้'
const DATE = '2026-06-22'
const URL = `/blog/${SLUG}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'งบเลี้ยงลูกวัยหัดเดิน',
    'ค่าใช้จ่ายเด็ก 1 ขวบต่อเดือน',
    'งบประมาณลูก 1-2 ปี',
    'เลี้ยงลูกวัยหัดเดินเดือนละเท่าไร',
    'งบครอบครัวมีลูกเล็ก',
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
  { id: 'overview', label: 'ภาพรวมงบรายเดือน 3 ระดับ' },
  { id: 'food-milk', label: 'ค่าอาหารและนม' },
  { id: 'diaper', label: 'ค่าผ้าอ้อมและของใช้ประจำวัน' },
  { id: 'nursery', label: 'ค่าเนอสเซอรี่' },
  { id: 'health', label: 'ค่าสุขภาพและวัคซีน' },
  { id: 'clothing', label: 'ค่าเสื้อผ้าและของเล่น' },
  { id: 'tips', label: 'เคล็ดลับวางแผนงบให้พอ' },
  { id: 'faq', label: 'คำถามที่พบบ่อย' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'เลี้ยงลูกวัย 1–2 ปีเดือนละเท่าไรถึงพอ?',
    answer:
      'ขึ้นอยู่กับว่าส่งเนอสเซอรี่หรือไม่ ถ้าไม่ส่งเนอสเซอรี่ ค่าใช้จ่ายขั้นต่ำประมาณ 5,000–8,000 บาท/เดือน ถ้าส่งเนอสเซอรี่เพิ่มอีก 5,000–25,000 บาท ทำให้รวมกันอยู่ที่ 10,000–35,000 บาท/เดือน',
  },
  {
    question: 'งบวัยหัดเดินต่างจากงบเด็กแรกเกิดอย่างไร?',
    answer:
      'ค่านมลดลงมากเพราะเปลี่ยนเป็นนมวัวหรืออาหารจริง ค่าผ้าอ้อมลดลง แต่ค่าเนอสเซอรี่และค่าอาหารเพิ่มขึ้นอย่างมาก โดยรวมงบวัยหัดเดินมักสูงกว่าวัยทารกหากส่งเนอสเซอรี่',
  },
  {
    question: 'เด็ก 1–2 ปียังต้องกินนมผงไหม?',
    answer:
      'หลังอายุ 12 เดือน ไม่จำเป็นต้องกินนมผงสูตรพิเศษแล้ว นมวัวพาสเจอร์ไรส์หรือ UHT เต็มไขมัน (whole milk) เพียงพอ ราคาถูกกว่านมผงมาก ประมาณ 30–60 บาท/กล่อง หรือ 600–1,200 บาท/เดือน',
  },
  {
    question: 'ค่าผ้าอ้อมวัย 1–2 ปีเท่าไร?',
    answer:
      'เด็กวัยนี้ใช้ผ้าอ้อมน้อยลงเหลือ 4–6 ชิ้น/วัน ค่าใช้จ่ายประมาณ 600–1,500 บาท/เดือน ขึ้นอยู่กับยี่ห้อที่เลือก วัยนี้มักเปลี่ยนเป็นแบบกางเกง (Pull-up) ที่สะดวกกว่า',
  },
  {
    question: 'วิธีประหยัดค่าใช้จ่ายในวัยหัดเดินที่ได้ผลที่สุด?',
    answer:
      'วิธีที่ประหยัดได้มากที่สุด: 1) เปลี่ยนนมผงเป็นนมวัว ประหยัด 2,000–4,000 บาท/เดือน 2) ซื้อเสื้อผ้ามือสองสภาพดี ประหยัด 50–80% 3) เลือกเนอสเซอรี่รัฐ/ชุมชนหากคุณภาพพอใจ',
  },
  {
    question: 'ค่าของเล่นเด็ก 1–2 ปีควรจัดงบเท่าไร?',
    answer:
      'เด็กวัยนี้ไม่ต้องการของเล่นแพงๆ ของเล่นที่ดีคือ บล็อกไม้ หนังสือภาพ ลูกบอล และของใช้ในบ้านที่ปลอดภัย งบ 200–500 บาท/เดือนเพียงพอมาก หลีกเลี่ยงการซื้อของที่ลูกโตเกินแล้วใน 2–3 เดือน',
  },
]

export default function MonthlyToddlerBudgetPage() {
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
        { label: 'งบเลี้ยงลูกวัยหัดเดิน 1–2 ปี' },
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
        <strong>บทความนี้เน้นงบรายเดือนสำหรับลูกวัย 1–2 ปี (วัยหัดเดิน)</strong> — สำหรับงบเดือนแรกๆ (เด็กแรกเกิด–12 เดือน) อ่านได้ที่{' '}
        <Link href="/blog/monthly-baby-budget" className="font-semibold underline">
          งบประมาณเลี้ยงลูกต่อเดือน (เด็กแรกเกิด)
        </Link>
      </div>

      <p>
        เมื่อลูกเดิน พูด และสำรวจโลกได้มากขึ้น ค่าใช้จ่ายก็เปลี่ยนแปลงตามอย่างมีนัยสำคัญ
        บางรายการลดลง บางรายการเพิ่มขึ้น และมีค่าใช้จ่ายใหม่ที่ไม่เคยมีมาก่อน
        บทความนี้แจกแจงทุกบาทสำหรับวัย 1–2 ปีโดยเฉพาะ
      </p>

      <h2 id="overview">ภาพรวมงบรายเดือน 3 ระดับ</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">รายการ</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ประหยัด</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">กลาง</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">พรีเมียม</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['อาหารและนม', '1,200 บ.', '2,500 บ.', '4,500 บ.'],
              ['ผ้าอ้อม', '500 บ.', '900 บ.', '1,500 บ.'],
              ['เนอสเซอรี่', '0 บ.', '8,000 บ.', '25,000 บ.'],
              ['ค่าแพทย์/วัคซีน', '300 บ.', '1,000 บ.', '3,000 บ.'],
              ['เสื้อผ้า/รองเท้า', '300 บ.', '800 บ.', '3,000 บ.'],
              ['ของเล่น/หนังสือ', '100 บ.', '500 บ.', '2,000 บ.'],
              ['ค่าอื่นๆ (ฉุกเฉิน/ท่องเที่ยว)', '300 บ.', '1,000 บ.', '5,000 บ.'],
              ['รวมต่อเดือน', '2,700 บ.', '14,700 บ.', '44,000 บ.'],
            ].map(([item, low, mid, high]) => (
              <tr key={item} className={`hover:bg-gray-50 ${item.startsWith('รวม') ? 'bg-blue-50 font-bold text-blue-900' : ''}`}>
                <td className="px-4 py-3 font-medium text-gray-800">{item}</td>
                <td className="px-4 py-3 text-gray-600">{low}</td>
                <td className="px-4 py-3 font-bold text-blue-600">{mid}</td>
                <td className="px-4 py-3 text-gray-600">{high}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-500">
        ระดับ "ประหยัด" = ดูแลลูกเอง ไม่ส่งเนอสเซอรี่ | "กลาง" = ส่งเนอสเซอรี่เอกชนขนาดกลาง |
        "พรีเมียม" = เนอสเซอรี่พรีเมียม
      </p>

      <h2 id="food-milk">ค่าอาหารและนมในวัย 1–2 ปี</h2>
      <p>การเปลี่ยนแปลงที่ใหญ่ที่สุดในวัยนี้คือด้านนม:</p>
      <ul>
        <li>
          <strong>เปลี่ยนนมผงเป็นนมวัว</strong> — หลัง 12 เดือน ไม่จำเป็นต้องกินนมผงสูตร 1 แล้ว
          นมวัวพาสเจอร์ไรส์ (whole milk, ไขมัน 3.5%+) เพียงพอและถูกกว่ามาก
          ราคาต่างกัน: นมผงสูตร 2 ≈ 3,000–5,000 บาท/เดือน vs นมวัว ≈ 600–1,200 บาท/เดือน
        </li>
        <li>
          <strong>ปริมาณนมที่ต้องการ</strong> — 400–500 มล./วัน (ประมาณ 2 กล่องนม UHT 200 มล.)
        </li>
        <li>
          <strong>ค่าอาหาร</strong> — เด็กวัยนี้กินอาหารครอบครัวได้แล้ว ค่าอาหารเพิ่มขึ้นประมาณ
          500–1,500 บาท/เดือน ขึ้นอยู่กับอาหารที่ครอบครัวกิน
        </li>
      </ul>

      <h2 id="diaper">ค่าผ้าอ้อมและของใช้ประจำวัน</h2>
      <ul>
        <li>
          <strong>จำนวนผ้าอ้อม</strong> — ลดจาก 8–12 ชิ้น/วัน เหลือ 4–6 ชิ้น/วัน
          รวมประมาณ 120–180 ชิ้น/เดือน
        </li>
        <li>
          <strong>ประเภทผ้าอ้อม</strong> — มักเปลี่ยนเป็นแบบกางเกง (Pull-up)
          เพราะเด็กเริ่มเดินและเคลื่อนไหวมาก ดูข้อมูลเพิ่มเติมที่{' '}
          <Link href="/blog/pull-up-vs-tape-diaper">ผ้าอ้อมแบบใส่ vs แบบเทป</Link>
        </li>
        <li>
          <strong>ค่าใช้จ่าย</strong> — 500–1,500 บาท/เดือน ขึ้นอยู่กับยี่ห้อที่เลือก
        </li>
        <li>
          <strong>ของใช้อื่น</strong> — ทิชชู่เปียก แชมพู สบู่ ครีม ประมาณ 300–600 บาท/เดือน
        </li>
      </ul>

      <div className="not-prose my-6 rounded-2xl bg-blue-600 p-6 text-center text-white">
        <p className="font-bold text-lg">คำนวณค่าผ้าอ้อมรายเดือน</p>
        <p className="mt-2 text-blue-100 text-sm">กรอกจำนวนผ้าอ้อมและราคา ดูค่าใช้จ่ายรายเดือนทันที</p>
        <Link
          href="/tools/diaper-cost"
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
        >
          เปิดเครื่องคำนวณผ้าอ้อม →
        </Link>
      </div>

      <h2 id="nursery">ค่าเนอสเซอรี่</h2>
      <p>
        นี่คือตัวแปรที่ใหญ่ที่สุดในงบประมาณวัยหัดเดิน:
      </p>
      <ul>
        <li>ไม่ส่งเนอสเซอรี่ (ดูแลเอง/ปู่ย่าช่วย) — 0 บาท</li>
        <li>ศูนย์พัฒนาเด็กเล็กรัฐ — 1,500–3,000 บาท/เดือน</li>
        <li>เนอสเซอรี่เอกชนขนาดกลาง — 5,000–15,000 บาท/เดือน</li>
        <li>เนอสเซอรี่พรีเมียม/นานาชาติ — 20,000–50,000 บาท/เดือน</li>
      </ul>
      <p>
        ดูรายละเอียดการเปรียบเทียบเนอสเซอรี่ได้ที่{' '}
        <Link href="/blog/nursery-cost-thailand">ค่าเรียนเนอสเซอรี่ในไทย</Link>
      </p>

      <h2 id="health">ค่าสุขภาพและวัคซีน</h2>
      <p>วัย 1–2 ปี ยังมีวัคซีนสำคัญหลายตัวและการพบแพทย์สม่ำเสมอ:</p>
      <ul>
        <li><strong>วัคซีน EPI</strong> — ฟรีที่โรงพยาบาลรัฐ</li>
        <li><strong>วัคซีนเสริม</strong> — ประมาณ 2,000–5,000 บาทต่อการนัดวัคซีน (อ่านเพิ่มเติมที่ <Link href="/blog/baby-vaccine-cost">ค่าวัคซีนเด็ก</Link>)</li>
        <li><strong>ค่าพบแพทย์ทั่วไป</strong> — เด็กวัยนี้ป่วยบ่อยขึ้นเมื่อเริ่มเข้าสังคม
        เตรียมงบฉุกเฉิน 0–3,000 บาท/เดือน</li>
      </ul>

      <h2 id="clothing">ค่าเสื้อผ้าและของเล่น</h2>
      <p>เด็กวัย 1–2 ปีโตเร็วมาก เสื้อผ้าใส่ได้แค่ 2–3 เดือน:</p>
      <ul>
        <li><strong>เสื้อผ้าใหม่</strong> — 300–1,500 บาท/เดือน</li>
        <li><strong>เสื้อผ้ามือสอง</strong> — ประหยัดได้ 50–80% ที่ตลาดนัด กลุ่มเฟสบุ๊ค Shopee</li>
        <li><strong>รองเท้า</strong> — เปลี่ยนทุก 3–4 เดือน รองเท้าเด็กราคา 200–1,000 บาท/คู่</li>
        <li><strong>ของเล่น</strong> — ลูกวัยนี้สนุกกับกล่องกระดาษและช้อนมากกว่าของเล่นแพง
        งบ 100–500 บาท/เดือนเพียงพอ</li>
      </ul>

      <h2 id="tips">เคล็ดลับวางแผนงบให้พอ</h2>
      <ol>
        <li>
          <strong>เปลี่ยนนมผงเป็นนมวัว</strong> — ขั้นตอนเดียวที่ประหยัดได้มากที่สุด
          ปรึกษากุมารแพทย์ก่อนเปลี่ยน
        </li>
        <li>
          <strong>สร้างกองทุนสุขภาพฉุกเฉิน</strong> — ออมไว้ 3,000–5,000 บาท/เดือน
          เพื่อรับมือค่าพบแพทย์ที่ไม่คาดคิด
        </li>
        <li>
          <strong>ซื้อเสื้อผ้าล่วงหน้า 1 ไซส์</strong> — ซื้อไซส์ที่ใหญ่กว่าปัจจุบัน 1 ขนาด
          เพราะลูกโตเร็วมาก
        </li>
        <li>
          <strong>ใช้สิทธิประกันสุขภาพ</strong> — ตรวจสอบว่าแผนประกันของคุณครอบคลุมค่ารักษาพยาบาลเด็กไหม
        </li>
        <li>
          <strong>แบ่งงบสำรอง 10%</strong> — ค่าใช้จ่ายมักเกินงบในวัยนี้ เตรียมไว้ล่วงหน้า
        </li>
      </ol>

      <h2 id="faq">คำถามที่พบบ่อย</h2>
      <FAQ items={FAQ_ITEMS} />
    </BlogLayout>
  )
}
