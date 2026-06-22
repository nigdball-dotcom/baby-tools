import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import FAQ from '@/components/FAQ'
import { articleSchema, faqSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem, TOCItem } from '@/types'

const SLUG = 'baby-sleep-1-year'
const TITLE = 'ตารางนอนเด็ก 1 ขวบ นอนกี่ชั่วโมงและงีบกี่รอบ?'
const DESCRIPTION =
  'เด็กอายุ 1 ขวบนอนเฉลี่ย 11–14 ชั่วโมงต่อวัน กำลังเปลี่ยนจาก 2 รอบเป็น 1 รอบงีบ บทความนี้รวมตารางนอน วิธีรับมือ 12-month sleep regression และเคล็ดลับการเปลี่ยนไปงีบ 1 รอบ'
const DATE = '2026-06-22'
const URL = `/blog/${SLUG}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'ตารางนอนเด็ก 1 ขวบ',
    'เด็ก 1 ขวบนอนกี่ชั่วโมง',
    'เด็ก 12 เดือนนอน',
    'งีบ 1 รอบเด็ก 1 ขวบ',
    '12 month sleep regression',
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
  { id: 'sleep-hours', label: 'เด็ก 1 ขวบนอนกี่ชั่วโมง?' },
  { id: 'schedule', label: 'ตัวอย่างตารางกิจวัตร 2 แบบ' },
  { id: 'nap-transition', label: 'การเปลี่ยนจาก 2 รอบเป็น 1 รอบงีบ' },
  { id: 'regression', label: '12-Month Sleep Regression' },
  { id: 'tips', label: 'เคล็ดลับการนอนสำหรับเด็ก 1 ขวบ' },
  { id: 'night-waking', label: 'การตื่นกลางคืนในวัย 1 ขวบ' },
  { id: 'faq', label: 'คำถามที่พบบ่อย' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'เด็ก 1 ขวบนอนกี่ชั่วโมงถือว่าปกติ?',
    answer:
      'เด็กอายุ 12 เดือนนอนเฉลี่ย 11–14 ชั่วโมงต่อวัน แบ่งเป็นกลางคืน 10–12 ชั่วโมง และงีบกลางวัน 1–3 ชั่วโมง (1–2 รอบ) ตราบเท่าที่ลูกดูสดชื่น กินอาหารดี และพัฒนาการเป็นไปตามเกณฑ์ ถือว่าปกติ',
  },
  {
    question: 'เด็ก 1 ขวบควรงีบ 1 หรือ 2 รอบ?',
    answer:
      'ส่วนใหญ่ยังงีบ 2 รอบอยู่จนถึงอายุ 13–15 เดือน บางคนเปลี่ยนเป็น 1 รอบตั้งแต่ 12 เดือน การเปลี่ยนเร็วหรือช้าไม่ได้บอกว่าพัฒนาการเร็วหรือช้า ขึ้นอยู่กับแต่ละคน',
  },
  {
    question: '12-month sleep regression คืออะไร?',
    answer:
      'การถดถอยการนอนในวัย 12 เดือนเกิดจากหลายปัจจัย ได้แก่ การเรียนรู้เดิน (เด็กบางคนเดินแรกๆ ในวัยนี้) separation anxiety ที่พีค และ growth spurt ส่วนใหญ่ผ่านไปใน 2–4 สัปดาห์',
  },
  {
    question: 'เด็ก 1 ขวบต้องการกินนมกลางคืนอีกไหม?',
    answer:
      'ทางโภชนาการ เด็ก 12 เดือนที่กินอาหารเสริมครบและน้ำหนักดี ไม่จำเป็นต้องกินนมกลางคืนอีกแล้ว ถ้าลูกยังตื่นกินนมกลางดึก อาจเป็นเพราะ habit มากกว่าความหิวจริงๆ',
  },
  {
    question: 'เมื่อไหรควรย้ายลูกออกจากเปลไปนอนเตียง?',
    answer:
      'ไม่มีอายุที่กำหนดตายตัว แต่ส่วนใหญ่แนะนำให้อยู่ในเปลจนกว่าลูกจะปีนออกเปลได้หรืออายุ 2–3 ปี การย้ายเร็วเกินไปอาจส่งผลให้ลูกลุกจากที่นอนเองได้และนอนยากขึ้น',
  },
  {
    question: 'ลูก 1 ขวบกลัวมืดมาก ทำไง?',
    answer:
      'กลัวมืดเริ่มพัฒนาในวัย 2–3 ปี ไม่ใช่ 1 ขวบ ถ้าลูกต้องการแสงเล็กน้อยก็ไม่มีปัญหา ไฟกลางคืนแสงนวลช่วยได้ แต่หลีกเลี่ยงแสงสีน้ำเงิน (หน้าจอ) เพราะรบกวน melatonin',
  },
]

export default function BabySleep1YearPage() {
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
      category="การนอนของลูกน้อย"
      breadcrumbs={[
        { label: 'หน้าแรก', href: '/' },
        { label: 'บล็อก', href: '/blog' },
        { label: 'ตารางนอนเด็ก 1 ขวบ' },
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
        ข้อมูลในบทความนี้อ้างอิงจาก <strong>American Academy of Pediatrics (AAP)</strong>{' '}
        และ <strong>American Academy of Sleep Medicine</strong>
      </div>

      <p>
        ลูกอายุ 1 ขวบแล้ว! นี่เป็นช่วงที่น่าตื่นเต้นและท้าทายในเวลาเดียวกัน
        ลูกเริ่มเดิน พูด และสำรวจโลกอย่างกระตือรือร้น แต่ก็ยังต้องการการนอนที่เพียงพอ
        เพื่อรองรับการพัฒนาที่รวดเร็วนี้
      </p>
      <p>
        วัย 12 เดือนเป็นช่วงเปลี่ยนผ่านการงีบจาก 2 รอบเป็น 1 รอบ
        และหลายคนเจอ 12-month sleep regression ที่ทำให้การนอนกลับแย่ลงชั่วคราว
        บทความนี้อธิบายทุกอย่างที่ต้องรู้
      </p>

      <div className="not-prose mb-6 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-800">
        <strong>ดูตารางนอนทุกช่วงอายุ</strong> ได้ที่{' '}
        <Link href="/blog/newborn-sleep-hours" className="font-semibold underline">
          เด็กแรกเกิดนอนกี่ชั่วโมง? ตารางนอน 0–12 เดือน
        </Link>
      </div>

      <h2 id="sleep-hours">เด็ก 1 ขวบนอนกี่ชั่วโมงต่อวัน?</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ด้าน</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ข้อมูล</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['นอนรวมต่อวัน', '11–14 ชั่วโมง'],
              ['กลางคืน', '10–12 ชั่วโมง'],
              ['งีบกลางวัน', '1–3 ชั่วโมง (1–2 รอบ)'],
              ['ช่วงตื่นระหว่างงีบ', '3–4 ชั่วโมง'],
              ['เวลานอน', '19:00–20:00'],
            ].map(([k, v]) => (
              <tr key={k} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{k}</td>
                <td className="px-4 py-3 text-gray-700">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="schedule">ตัวอย่างตารางกิจวัตร 2 แบบ</h2>
      <p><strong>แบบที่ 1: ยังงีบ 2 รอบ (สำหรับลูกที่ยังต้องการ)</strong></p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">เวลา</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">กิจกรรม</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['07:00', 'ตื่นนอน — นมหรืออาหารเช้า เล่น'],
              ['09:30', 'งีบรอบที่ 1 (45–60 นาที)'],
              ['10:30', 'กิจกรรม อาหารกลางวัน'],
              ['13:00', 'งีบรอบที่ 2 (1–1.5 ชั่วโมง)'],
              ['14:30', 'เล่น กิจกรรมนอกบ้าน'],
              ['17:30', 'อาหารเย็น อาบน้ำ'],
              ['19:00', 'กิจวัตรก่อนนอน — นม ร้องเพลง'],
              ['19:30', 'นอนกลางคืน'],
            ].map(([time, activity]) => (
              <tr key={time} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold text-blue-700 whitespace-nowrap">{time}</td>
                <td className="px-4 py-3 text-gray-600">{activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p><strong>แบบที่ 2: เปลี่ยนเป็น 1 รอบงีบแล้ว</strong></p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">เวลา</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">กิจกรรม</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['07:00', 'ตื่นนอน — อาหารเช้า เล่น'],
              ['10:00', 'กิจกรรมกลางแจ้ง'],
              ['12:00', 'อาหารกลางวัน'],
              ['12:30', 'งีบ 1 รอบยาว (1.5–2.5 ชั่วโมง)'],
              ['15:00', 'ว่างๆ เล่น ขนม'],
              ['18:00', 'อาหารเย็น อาบน้ำ'],
              ['19:00', 'กิจวัตรก่อนนอน'],
              ['19:30–20:00', 'นอนกลางคืน'],
            ].map(([time, activity]) => (
              <tr key={time} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold text-blue-700 whitespace-nowrap">{time}</td>
                <td className="px-4 py-3 text-gray-600">{activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="nap-transition">การเปลี่ยนจาก 2 รอบเป็น 1 รอบงีบ</h2>
      <p>สัญญาณที่บอกว่าลูกพร้อมจะเปลี่ยน:</p>
      <ul>
        <li>ต่อสู้กับงีบรอบใดรอบหนึ่งอย่างสม่ำเสมอ (นอนไม่หลับ หรือหลับแค่ 10–15 นาที)</li>
        <li>งีบ 2 รอบแล้วนอนกลางคืนช้าเกินไป (หลัง 20:30)</li>
        <li>ตื่นเช้าผิดปกติ (ก่อน 06:00) เป็นสัญญาณว่านอนมากเกินไประหว่างวัน</li>
      </ul>
      <p>วิธีเปลี่ยนอย่างค่อยเป็นค่อยไป:</p>
      <ol>
        <li>เลื่อนงีบเช้าให้ช้าขึ้นทีละ 15 นาที จนถึง 12:00–12:30</li>
        <li>ในช่วงเปลี่ยนผ่าน (2–4 สัปดาห์) อาจนอนกลางคืนเร็วขึ้น (18:30–19:00) เพื่อชดเชย</li>
        <li>ยอมรับว่าช่วงเปลี่ยนผ่านอาจงอแงและนอนไม่ดีชั่วคราว</li>
      </ol>

      <h2 id="regression">12-Month Sleep Regression</h2>
      <p>
        Sleep regression ในวัย 12 เดือนเป็นเรื่องพบได้บ่อยมาก เกิดจากหลายปัจจัยพร้อมกัน:
      </p>
      <ul>
        <li><strong>Developmental leap</strong> — สมองพัฒนาก้าวกระโดด ประมวลผลข้อมูลใหม่มากมาย</li>
        <li><strong>Learning to walk</strong> — ลูกที่กำลังหัดเดินมักฝึกในหัวแม้ตอนนอน ทำให้ตื่นง่ายขึ้น</li>
        <li><strong>Separation anxiety พีค</strong> — ช่วงนี้ต้องการพ่อแม่มากเป็นพิเศษ</li>
        <li><strong>Nap transition</strong> — ความสับสนระหว่างเปลี่ยนจาก 2 เป็น 1 รอบ</li>
      </ul>
      <p>ส่วนใหญ่ผ่านไปใน 2–6 สัปดาห์ วิธีรับมือ: รักษา routine ให้สม่ำเสมอ ให้ความมั่นใจเพิ่มขึ้น
      แต่หลีกเลี่ยงการสร้าง habits ใหม่ที่ยากจะเปลี่ยน</p>

      <h2 id="tips">เคล็ดลับการนอนสำหรับเด็ก 1 ขวบ</h2>
      <ul>
        <li><strong>ห้องมืด</strong> — ผ้าม่านกันแสงช่วยมากในวัยนี้ โดยเฉพาะช่วงงีบกลางวัน</li>
        <li><strong>White noise</strong> — ยังช่วยได้มาก เพราะเด็กวัยนี้ตื่นง่ายขึ้นจากเสียง</li>
        <li><strong>ลดการกินนมกลางคืน</strong> — ถ้าลูกยังตื่นกินนม ลองเสนอน้ำเปล่าแทน
        เพื่อ break the habit</li>
        <li><strong>Transitional object</strong> — ผ้าห่มหรือตุ๊กตานุ่มที่ลูกผูกพัน ช่วยให้นอนคนเดียวได้ง่ายขึ้น</li>
      </ul>

      <h2 id="night-waking">การตื่นกลางคืนในวัย 1 ขวบ</h2>
      <p>
        ถ้าลูก 1 ขวบยังตื่นกลางคืนบ่อย ให้ตรวจสอบ:
      </p>
      <ul>
        <li>ลูกพึ่ง sleep associations อะไรอยู่? (ต้องการนม ต้องการอุ้ม ต้องการโยก)</li>
        <li>งีบกลางวันพอดีไหม? (น้อยเกินไปหรือมากเกินไปทั้งทำให้ตื่นกลางคืน)</li>
        <li>เวลานอนเหมาะสมไหม? (นอนดึกเกินไปมักทำให้ตื่นบ่อย)</li>
      </ul>
      <p>
        ดูข้อมูลค่าใช้จ่ายสำหรับลูกวัย 1 ขวบขึ้นไปได้ที่{' '}
        <Link href="/blog/baby-expenses-1-2-years">ค่าใช้จ่ายลูก 1–2 ปี</Link>
      </p>

      <h2 id="faq">คำถามที่พบบ่อย</h2>
      <FAQ items={FAQ_ITEMS} />
    </BlogLayout>
  )
}
