import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import FAQ from '@/components/FAQ'
import { articleSchema, faqSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem, TOCItem } from '@/types'

const SLUG = 'baby-sleep-6-months'
const TITLE = 'ตารางนอนเด็ก 6 เดือน นอนกี่ชั่วโมงและงีบกี่รอบ?'
const DESCRIPTION =
  'เด็กอายุ 6 เดือนนอนเฉลี่ย 12–15 ชั่วโมงต่อวัน งีบ 2–3 รอบ บทความนี้รวมตารางนอน วิธีสร้างกิจวัตร การเริ่มอาหารเสริมกับผลต่อการนอน และการเริ่ม sleep training ในวัย 6 เดือน'
const DATE = '2026-06-22'
const URL = `/blog/${SLUG}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'ตารางนอนเด็ก 6 เดือน',
    'เด็ก 6 เดือนนอนกี่ชั่วโมง',
    'กิจวัตรเด็ก 6 เดือน',
    'sleep training 6 เดือน',
    'เด็ก 6 เดือนงีบกี่รอบ',
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
  { id: 'sleep-hours', label: 'เด็ก 6 เดือนนอนกี่ชั่วโมง?' },
  { id: 'schedule', label: 'ตัวอย่างตารางกิจวัตรประจำวัน' },
  { id: 'nap', label: 'รูปแบบการงีบ 2–3 รอบ' },
  { id: 'solid-food', label: 'อาหารเสริมกับผลต่อการนอน' },
  { id: 'sleep-training', label: 'เริ่ม Sleep Training ได้แล้ว' },
  { id: 'separation-anxiety', label: 'Separation Anxiety และการนอน' },
  { id: 'faq', label: 'คำถามที่พบบ่อย' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'เด็ก 6 เดือนนอนกี่ชั่วโมงถือว่าปกติ?',
    answer:
      'เด็กอายุ 6 เดือนนอนเฉลี่ย 12–15 ชั่วโมงต่อวัน แบ่งเป็นกลางคืน 10–12 ชั่วโมง และงีบกลางวัน 2–3 ชั่วโมง (งีบ 2–3 รอบ) ถ้าลูกนอนน้อยกว่า 12 หรือมากกว่า 15 ชั่วโมงแต่ดูสดชื่นและพัฒนาการดี ถือว่าปกติ',
  },
  {
    question: 'เด็ก 6 เดือนงีบกี่รอบต่อวัน?',
    answer:
      'ทารก 6 เดือนส่วนใหญ่งีบ 2–3 รอบต่อวัน รอบละ 1–2 ชั่วโมง ผู้เชี่ยวชาญแนะนำให้ยึดตาราง 3 รอบไปก่อน แล้วค่อยๆ เปลี่ยนเป็น 2 รอบเมื่ออายุ 7–9 เดือน',
  },
  {
    question: 'ควรเริ่ม sleep training ตอน 6 เดือนไหม?',
    answer:
      'อายุ 6 เดือนเป็นช่วงที่ผู้เชี่ยวชาญหลายคนแนะนำสำหรับ sleep training เพราะลูกพัฒนาพร้อมแล้ว มีหลายวิธีให้เลือก ตั้งแต่ gentle methods (Fading, Pick-up-put-down) จนถึง CIO (Cry It Out) ซึ่งทุกวิธีมีประสิทธิภาพหากทำอย่างสม่ำเสมอ',
  },
  {
    question: 'การเริ่มอาหารเสริมทำให้ลูกนอนหลับดีขึ้นไหม?',
    answer:
      'ไม่จำเป็น แม้หลายคนเชื่อว่าการกินอาหารแข็งช่วยให้หลับยาวขึ้น แต่งานวิจัยไม่สนับสนุนความเชื่อนี้ การกินอาหารเสริมในวัย 6 เดือนมีประโยชน์ด้านโภชนาการ แต่ไม่ใช่วิธีแก้ปัญหาการนอน',
  },
  {
    question: 'ลูก 6 เดือนตื่นกลางคืนบ่อย ต้องทำไง?',
    answer:
      'ถ้าลูกตื่นมากกว่า 2 ครั้งต่อคืนในวัย 6 เดือน อาจเป็นเพราะยังพึ่ง sleep associations (ต้องการความช่วยเหลือในการหลับใหม่) การฝึก sleep training ช่วยได้มาก โดยเน้นให้ลูกเรียนรู้การหลับเองโดยไม่ต้องพึ่งพาสิ่งช่วยเหลือภายนอก',
  },
  {
    question: 'เด็ก 6 เดือนตื่นเช้าเกินไป ทำอย่างไร?',
    answer:
      'ถ้าลูกตื่น 05:00–06:00 เป็นประจำ ลองปิดผ้าม่านให้มืดขึ้น ตรวจสอบว่านอนดึกเกินไปหรือเปล่า (นอนดึกมักทำให้ตื่นเช้า ไม่ใช่ตื่นสาย) และตรวจว่างีบกลางวันเพียงพอไหม งีบไม่พอมักทำให้ตื่นเช้า',
  },
]

export default function BabySleep6MonthsPage() {
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
        { label: 'ตารางนอนเด็ก 6 เดือน' },
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
        <strong>American Academy of Sleep Medicine</strong> และ{' '}
        <strong>องค์การอนามัยโลก (WHO)</strong>
      </div>

      <p>
        อายุ 6 เดือนเป็นจุดเปลี่ยนสำคัญสำหรับการนอน ลูกเริ่มมีตารางที่คาดเดาได้มากขึ้น
        นอนกลางคืนยาวขึ้น และเริ่มพร้อมสำหรับ sleep training อย่างจริงจัง
        นอกจากนี้ยังเป็นช่วงเริ่มอาหารเสริมที่ส่งผลต่อตารางกิจวัตรทั้งหมด
      </p>
      <p>
        บทความนี้รวบรวมข้อมูลการนอนของเด็ก 6 เดือนอย่างครบถ้วน
        ตั้งแต่จำนวนชั่วโมงที่ควรนอน รูปแบบการงีบ ไปจนถึงวิธีเริ่ม sleep training อย่างปลอดภัย
      </p>

      <div className="not-prose mb-6 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-800">
        <strong>ดูตารางนอนทุกช่วงอายุ</strong> ได้ที่{' '}
        <Link href="/blog/newborn-sleep-hours" className="font-semibold underline">
          เด็กแรกเกิดนอนกี่ชั่วโมง? ตารางนอน 0–12 เดือน
        </Link>
      </div>

      <h2 id="sleep-hours">เด็ก 6 เดือนนอนกี่ชั่วโมงต่อวัน?</h2>
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
              ['นอนรวมต่อวัน', '12–15 ชั่วโมง'],
              ['กลางคืน', '10–12 ชั่วโมง'],
              ['งีบกลางวัน', '2–4 ชั่วโมง แบ่ง 2–3 รอบ'],
              ['ช่วงตื่นระหว่างงีบ', '2–2.5 ชั่วโมง'],
              ['นอนตอนกลางคืน', 'หลายคนนอนได้ 6–8 ชั่วโมงต่อเนื่อง'],
            ].map(([k, v]) => (
              <tr key={k} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{k}</td>
                <td className="px-4 py-3 text-gray-700">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="schedule">ตัวอย่างตารางกิจวัตรสำหรับเด็ก 6 เดือน (3 รอบงีบ)</h2>
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
              ['07:00', 'ตื่นนอน — ให้นม เล่น กิจกรรมกระตุ้น (2 ชม.)'],
              ['09:00', 'งีบรอบที่ 1 (1–1.5 ชั่วโมง)'],
              ['10:30', 'ให้นม เวลาเล่น อาหารเสริมมื้อแรก'],
              ['12:30', 'งีบรอบที่ 2 (1–1.5 ชั่วโมง)'],
              ['14:00', 'ให้นม เวลาเล่นกลางแจ้ง'],
              ['16:00', 'งีบรอบที่ 3 (30–45 นาที)'],
              ['17:00', 'ให้นม อาหารเสริมมื้อเย็น (ถ้ากิน 2 มื้อแล้ว)'],
              ['18:30', 'กิจวัตรก่อนนอน — อาบน้ำ นวด ให้นม'],
              ['19:00–19:30', 'นอนกลางคืน'],
            ].map(([time, activity]) => (
              <tr key={time} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold text-blue-700 whitespace-nowrap">{time}</td>
                <td className="px-4 py-3 text-gray-600">{activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="nap">รูปแบบการงีบ 2–3 รอบในวัย 6 เดือน</h2>
      <p>วัย 6 เดือนเป็นช่วงเปลี่ยนผ่านจาก 3 รอบไปเป็น 2 รอบ:</p>
      <ul>
        <li>
          <strong>งีบเช้า (09:00–10:30)</strong> — สำคัญมาก ถ้าพลาดงีบนี้จะส่งผลต่องีบกลางวัน
        </li>
        <li>
          <strong>งีบกลางวัน (12:30–14:00)</strong> — งีบที่ยาวที่สุด ช่วยรีเซ็ต energy
        </li>
        <li>
          <strong>งีบบ่าย (16:00)</strong> — สั้นลงเรื่อยๆ บางคนเริ่มไม่ต้องการแล้วในวัย 6–7 เดือน
        </li>
      </ul>
      <p>
        <strong>เมื่อไหรควรเปลี่ยนจาก 3 รอบเป็น 2 รอบ?</strong> เมื่อลูกต่อสู้กับงีบรอบที่ 3 อย่างชัดเจน
        หรือเมื่องีบบ่ายทำให้นอนกลางคืนช้าลงมากกว่า 20:00
      </p>

      <h2 id="solid-food">อาหารเสริมกับผลต่อการนอน</h2>
      <p>
        วัย 6 เดือนเป็นช่วงเริ่มอาหารเสริม ซึ่งส่งผลต่อตารางกิจวัตรแต่ไม่ได้ช่วยให้นอนหลับดีขึ้นโดยตรง:
      </p>
      <ul>
        <li>
          <strong>ความเชื่อผิดๆ</strong> — "ให้กินอาหารแข็งก่อนนอนแล้วจะหลับยาวขึ้น"
          งานวิจัยไม่สนับสนุนความเชื่อนี้ กระเพาะอาหารเต็มไม่ได้เท่ากับนอนหลับยาวขึ้น
        </li>
        <li>
          <strong>เวลาอาหารเสริมที่เหมาะสม</strong> — ควรให้หลังนมแม่หรือนมผง ไม่ใช่แทนที่
          และให้ในช่วงกลางวัน ไม่ควรให้ใกล้เวลานอนมากเกินไป
        </li>
        <li>
          <strong>ผลข้างเคียงที่อาจรบกวนการนอน</strong> — อาหารใหม่อาจทำให้ท้องไส้ไม่สบาย
          ปวดท้อง หรือแพ้ ซึ่งรบกวนการนอนได้ในช่วงแรก
        </li>
      </ul>
      <p>
        อ่านข้อมูลการให้นมที่เหมาะสมสำหรับวัย 6 เดือนได้ที่{' '}
        <Link href="/blog/baby-feeding-6-months">เด็ก 6 เดือนกินนมกี่ออนซ์?</Link>
      </p>

      <h2 id="sleep-training">เริ่ม Sleep Training ได้แล้วในวัย 6 เดือน</h2>
      <p>
        วัย 6 เดือนเป็นช่วงที่นิยมเริ่ม sleep training เพราะ:
      </p>
      <ul>
        <li>ลูกพัฒนาพร้อมแล้วทั้งด้านระบบประสาทและโภชนาการ</li>
        <li>ไม่ต้องการกินนมกลางคืนทุก 2–3 ชั่วโมงแล้ว</li>
        <li>สามารถเรียนรู้ที่จะหลับเองได้</li>
      </ul>
      <p>วิธี sleep training ที่นิยม:</p>
      <ul>
        <li><strong>Ferber Method (Graduated Extinction)</strong> — รอนานขึ้นทีละน้อยก่อนเข้าไปปลอบ</li>
        <li><strong>Chair Method (Sleep Lady Shuffle)</strong> — นั่งใกล้เปลแล้วค่อยๆ ห่างขึ้น</li>
        <li><strong>Pick-up-put-down</strong> — อุ้มขึ้นเมื่อร้อง แต่วางลงก่อนหลับสนิท</li>
        <li><strong>Fading Method</strong> — ค่อยๆ ลดการช่วยเหลือในการหลับลงทีละน้อย</li>
      </ul>
      <p>ปรึกษากุมารแพทย์ก่อนเริ่มทุกวิธีเพื่อให้เหมาะกับลูกของคุณโดยเฉพาะ</p>

      <h2 id="separation-anxiety">Separation Anxiety และผลต่อการนอน</h2>
      <p>
        วัย 6–9 เดือน ลูกเริ่มเข้าใจว่าพ่อแม่ยังมีอยู่แม้ไม่เห็น (object permanence)
        ซึ่งทำให้เกิด separation anxiety ที่ส่งผลต่อการนอน:
      </p>
      <ul>
        <li>ลูกร้องเมื่อวางลงบนที่นอน ทั้งๆ ที่ก่อนหน้านี้ไม่ร้อง</li>
        <li>ตื่นกลางคืนและร้องตามพ่อแม่มากขึ้น</li>
        <li>ติดพ่อหรือแม่คนใดคนหนึ่งมากเป็นพิเศษ</li>
      </ul>
      <p>
        วิธีรับมือ: ให้ความมั่นใจด้วยการ "peek-a-boo" ระหว่างวัน เพื่อสอนให้ลูกรู้ว่าพ่อแม่จากไปแล้วกลับมา
        และกิจวัตรก่อนนอนที่สม่ำเสมอช่วยให้ลูกรู้สึกปลอดภัยมากขึ้น
      </p>

      <p>
        อ่านเพิ่มเติมเรื่องตารางนอนในวัย 1 ขวบได้ที่{' '}
        <Link href="/blog/baby-sleep-1-year">ตารางนอนเด็ก 1 ขวบ</Link>
      </p>

      <h2 id="faq">คำถามที่พบบ่อย</h2>
      <FAQ items={FAQ_ITEMS} />
    </BlogLayout>
  )
}
