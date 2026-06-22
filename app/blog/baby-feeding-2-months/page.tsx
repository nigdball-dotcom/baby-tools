import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import FAQ from '@/components/FAQ'
import { articleSchema, faqSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem, TOCItem } from '@/types'

const SLUG = 'baby-feeding-2-months'
const TITLE = 'เด็ก 2 เดือนกินนมกี่ออนซ์? ตารางและสัญญาณหิว'
const DESCRIPTION =
  'เด็กอายุ 2 เดือนที่กินนมผงกินเฉลี่ย 3–4 ออนซ์ต่อมื้อ วันละ 6–8 มื้อ บทความนี้อธิบายปริมาณนมที่เหมาะสม ตารางให้นม สัญญาณหิวและอิ่ม และวิธีรับมือกับ growth spurt'
const DATE = '2026-06-22'
const URL = `/blog/${SLUG}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'เด็ก 2 เดือนกินนมกี่ออนซ์',
    'ทารก 2 เดือนกินนม',
    'ตารางให้นมเด็ก 2 เดือน',
    'นมผง 2 เดือน',
    'เด็ก 2 เดือนกินนมบ่อยแค่ไหน',
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
  { id: 'formula-amount', label: 'เด็ก 2 เดือนกินนมผงกี่ออนซ์?' },
  { id: 'breastfed', label: 'เด็กที่กินนมแม่' },
  { id: 'schedule', label: 'ตัวอย่างตารางให้นม' },
  { id: 'growth-spurt', label: 'Growth Spurt คืออะไร?' },
  { id: 'hunger-signs', label: 'สัญญาณหิวและอิ่ม' },
  { id: 'tips', label: 'เคล็ดลับการให้นมเด็ก 2 เดือน' },
  { id: 'faq', label: 'คำถามที่พบบ่อย' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'เด็ก 2 เดือนกินนมผงกี่ออนซ์ต่อมื้อ?',
    answer:
      'เด็กอายุ 2 เดือนที่กินนมผงกินเฉลี่ย 3–4 ออนซ์ (90–120 มล.) ต่อมื้อ วันละ 6–8 มื้อ รวมประมาณ 24–32 ออนซ์ต่อวัน แต่อาจแตกต่างกันในแต่ละคน ให้สังเกตสัญญาณอิ่มของลูกเป็นหลัก',
  },
  {
    question: 'เด็ก 2 เดือนกินนมบ่อยขึ้นทันใดเลย ทำไม?',
    answer:
      'อาจเป็น growth spurt ซึ่งมักเกิดในช่วงอายุ 6 สัปดาห์และ 3 เดือน ลูกจะหิวบ่อยขึ้น นอนมากขึ้น และงอแงมากขึ้นเป็นเวลา 2–3 วัน หลังจากนั้นกลับสู่ปกติ',
  },
  {
    question: 'เด็ก 2 เดือนต้องการนมกลางดึกไหม?',
    answer:
      'ใช่ เด็ก 2 เดือนส่วนใหญ่ยังต้องกินนมกลางคืน 1–2 ครั้ง กระเพาะอาหารยังเล็กอยู่ บางคนเริ่มนอนได้ 4–5 ชั่วโมงต่อช่วงโดยไม่ตื่นกินนม แต่ไม่ใช่ทุกคน',
  },
  {
    question: 'น้ำหนักเด็ก 2 เดือนควรเป็นเท่าไร?',
    answer:
      'เด็กอายุ 2 เดือนควรหนักประมาณ 4.5–6 กก. (เด็กชาย) และ 4–5.5 กก. (เด็กหญิง) อ้างอิงจาก WHO growth chart การเพิ่มน้ำหนักประมาณ 150–200 กรัมต่อสัปดาห์ถือว่าดี',
  },
  {
    question: 'ถ้าลูก 2 เดือนกินนมผงแต่น้ำหนักไม่ขึ้น ควรทำอย่างไร?',
    answer:
      'ควรปรึกษากุมารแพทย์ทันที เพราะอาจมีหลายสาเหตุ เช่น ปริมาณนมน้อยเกินไป การดูดนมไม่ถูกต้อง หรือปัญหาสุขภาพอื่น แพทย์จะช่วยประเมินและปรับแผนการให้นมให้เหมาะสม',
  },
  {
    question: 'เด็ก 2 เดือนสามารถให้น้ำดื่มเสริมได้ไหม?',
    answer:
      'ไม่แนะนำสำหรับเด็กที่อายุน้อยกว่า 6 เดือน ทั้ง WHO และ AAP แนะนำให้นมแม่หรือนมผงเพียงอย่างเดียวในช่วงนี้ การให้น้ำเสริมอาจทำให้ลูกกินนมน้อยลงและขาดสารอาหาร',
  },
]

export default function BabyFeeding2MonthsPage() {
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
      readingTime="5 นาที"
      category="การให้นมลูก"
      breadcrumbs={[
        { label: 'หน้าแรก', href: '/' },
        { label: 'บล็อก', href: '/blog' },
        { label: 'เด็ก 2 เดือนกินนมกี่ออนซ์?' },
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

      <div className="not-prose mb-6 rounded-xl border border-green-100 bg-green-50 p-4 text-sm text-green-800">
        ข้อมูลในบทความนี้อ้างอิงจาก <strong>American Academy of Pediatrics (AAP)</strong>,{' '}
        <strong>WHO Growth Chart</strong> และ <strong>กรมอนามัย กระทรวงสาธารณสุข</strong>
      </div>

      <p>
        เมื่อลูกอายุ 2 เดือน กระเพาะอาหารโตขึ้นเล็กน้อย ลูกกินได้มากขึ้นในแต่ละมื้อ
        และช่วงเวลาระหว่างมื้ออาจยาวขึ้นเป็น 3–4 ชั่วโมง
        นอกจากนี้ยังอาจเจอ growth spurt ที่ทำให้ลูกหิวบ่อยผิดปกติชั่วคราว
      </p>
      <p>
        บทความนี้ให้ข้อมูลปริมาณนมที่เหมาะสำหรับเด็ก 2 เดือน พร้อมตาราง
        และวิธีรับมือกับ growth spurt
      </p>

      <div className="not-prose mb-6 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-800">
        เปรียบเทียบกับเดือนก่อนได้ที่{' '}
        <Link href="/blog/baby-feeding-1-month" className="font-semibold underline">
          เด็ก 1 เดือนกินนมกี่ออนซ์
        </Link>{' '}
        หรือดูตารางให้นมครบทุกช่วงอายุที่{' '}
        <Link href="/blog/newborn-feeding-schedule" className="font-semibold underline">
          ตารางให้นมเด็กแรกเกิด
        </Link>
      </div>

      <h2 id="formula-amount">เด็ก 2 เดือนกินนมผงกี่ออนซ์ต่อมื้อ?</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">อายุ</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ปริมาณต่อมื้อ</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">มื้อ/วัน</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">รวม/วัน</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['1 เดือน', '60–90 มล.', '8–10 มื้อ', '480–720 มล.'],
              ['2 เดือน', '90–120 มล.', '6–8 มื้อ', '540–720 มล.'],
              ['3 เดือน', '120–150 มล.', '5–6 มื้อ', '600–750 มล.'],
            ].map(([age, amount, meals, total]) => (
              <tr key={age} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{age}</td>
                <td className="px-4 py-3 font-bold text-blue-600">{amount}</td>
                <td className="px-4 py-3 text-gray-600">{meals}</td>
                <td className="px-4 py-3 text-gray-600">{total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        <strong>หมายเหตุ:</strong> ตัวเลขปริมาณรวมต่อวันในช่วง 1–3 เดือนใกล้เคียงกัน
        สิ่งที่เปลี่ยนคือลูกกินได้มากขึ้นต่อมื้อแต่กินบ่อยลง
      </p>

      <h2 id="breastfed">เด็กที่กินนมแม่ในวัย 2 เดือน</h2>
      <p>
        สำหรับเด็กที่กินนมแม่ ในวัย 2 เดือน:
      </p>
      <ul>
        <li><strong>ความถี่</strong> — 6–8 ครั้งต่อวัน (ลดลงจาก 8–12 ครั้งในเดือนแรก)</li>
        <li><strong>ระยะเวลาต่อมื้อ</strong> — 10–20 นาทีต่อข้าง ลูกดูดได้เร็วขึ้นแล้ว</li>
        <li><strong>น้ำนมแม่ควรมีเพียงพอแล้ว</strong> — supply ควรมั่นคงขึ้นหลัง 6–8 สัปดาห์แรก</li>
        <li><strong>รู้ได้อย่างไรว่าพอ</strong> — ผ้าอ้อมเปียก 6+ ผืน/วัน, น้ำหนักขึ้นดี, ลูกดูสดชื่น</li>
      </ul>

      <h2 id="schedule">ตัวอย่างตารางให้นมเด็ก 2 เดือน</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">เวลา</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">มื้อ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['07:00', 'มื้อเช้า (90–120 มล.)'],
              ['10:00', 'มื้อสาย (90–120 มล.)'],
              ['13:00', 'มื้อกลางวัน (90–120 มล.)'],
              ['16:00', 'มื้อบ่าย (90–120 มล.)'],
              ['19:00', 'มื้อเย็น (90–120 มล.)'],
              ['22:00', 'มื้อก่อนนอน (90–120 มล.)'],
              ['03:00', 'มื้อกลางดึก (90 มล.) — ถ้าจำเป็น'],
            ].map(([time, meal]) => (
              <tr key={time} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold text-blue-700 whitespace-nowrap">{time}</td>
                <td className="px-4 py-3 text-gray-600">{meal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="growth-spurt">Growth Spurt คืออะไร และรับมืออย่างไร?</h2>
      <p>
        Growth spurt คือช่วงที่ลูกเติบโตอย่างรวดเร็ว ต้องการพลังงานมากขึ้น
        ทำให้หิวบ่อยกว่าปกติ มักเกิดขึ้นในช่วง:
      </p>
      <ul>
        <li>อายุ 7–10 วัน</li>
        <li>อายุ 3–6 สัปดาห์</li>
        <li><strong>อายุ 6 สัปดาห์ (ช่วงที่เด็ก 2 เดือนมักเจอ)</strong></li>
        <li>อายุ 3 เดือน</li>
        <li>อายุ 6 เดือน</li>
      </ul>
      <p>สัญญาณของ growth spurt:</p>
      <ul>
        <li>ลูกหิวบ่อยขึ้นทันใด อาจทุก 1–1.5 ชั่วโมง</li>
        <li>นอนมากขึ้น (สมองและร่างกายต้องการพักเพื่อเติบโต)</li>
        <li>งอแงและกวนมากขึ้น</li>
        <li>กินนมได้มากขึ้นกว่าปกติในแต่ละมื้อ</li>
      </ul>
      <p>
        <strong>วิธีรับมือ:</strong> ให้นมตามที่ลูกต้องการในช่วงนี้ (cluster feeding)
        growth spurt มักผ่านไปใน 2–3 วัน ไม่ต้องกังวลว่าน้ำนมจะไม่พอ
        การให้นมบ่อยขึ้นจะกระตุ้น supply ให้เพิ่มขึ้นเองในระยะยาว
      </p>

      <h2 id="hunger-signs">สัญญาณหิวและอิ่มในวัย 2 เดือน</h2>
      <p><strong>สัญญาณหิว:</strong></p>
      <ul>
        <li>หันหัวและเปิดปาก (rooting)</li>
        <li>ดูดมือ นิ้วมือ หรือเสื้อผ้า</li>
        <li>แสดงอาการกระสับกระส่ายหรืองอแง</li>
        <li>ร้อง (สัญญาณสุดท้าย ถ้าทำได้ให้นมก่อนถึงขั้นนี้)</li>
      </ul>
      <p><strong>สัญญาณอิ่ม:</strong></p>
      <ul>
        <li>หยุดดูด หันหน้าหนี หรือผลักขวด/เต้าออก</li>
        <li>ลิ้นออกมาดัน</li>
        <li>มือที่กำเริ่มคลายออก</li>
        <li>ดูผ่อนคลายและพอใจ</li>
      </ul>

      <h2 id="tips">เคล็ดลับการให้นมเด็ก 2 เดือน</h2>
      <ol>
        <li>
          <strong>อย่าบังคับให้กินจนหมดขวด</strong> — ถ้าลูกแสดงสัญญาณอิ่มแล้ว หยุดได้เลย
          แม้ยังเหลือนมในขวด การบังคับกินจนหมดทำให้ลูกไม่รู้จักสัญญาณอิ่มตัวเองในระยะยาว
        </li>
        <li>
          <strong>ติดตามน้ำหนักอย่างสม่ำเสมอ</strong> — ชั่งน้ำหนักที่คลินิกทุกเดือน
          น้ำหนักเป็นตัวชี้วัดที่ดีที่สุดว่ากินพอหรือไม่
        </li>
        <li>
          <strong>สอบถามแพทย์เรื่องวิตามิน D</strong> — AAP แนะนำให้เสริมวิตามิน D 400 IU/วัน
          สำหรับเด็กที่กินนมแม่ทุกคน เพราะนมแม่มีวิตามิน D น้อย
        </li>
      </ol>

      <p>
        ดูข้อมูลการนอนของเด็ก 2 เดือนได้ที่{' '}
        <Link href="/blog/baby-sleep-2-months">เด็ก 2 เดือนนอนกี่ชั่วโมง</Link>
      </p>

      <h2 id="faq">คำถามที่พบบ่อย</h2>
      <FAQ items={FAQ_ITEMS} />
    </BlogLayout>
  )
}
