import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import FAQ from '@/components/FAQ'
import { articleSchema, faqSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem, TOCItem } from '@/types'

const SLUG = 'baby-sleep-3-months'
const TITLE = 'เด็ก 3 เดือนนอนกี่ชั่วโมง? ตารางนอนและ Sleep Regression ที่ควรรู้'
const DESCRIPTION =
  'เด็กอายุ 3 เดือนนอนเฉลี่ย 13–15 ชั่วโมงต่อวัน เริ่มมีตารางนอนชัดเจนขึ้น แต่หลายคนเจอ 4-month sleep regression ก่อน บทความนี้อธิบายตารางนอน วิธีรับมือ sleep regression และเคล็ดลับสร้างกิจวัตรที่ดี'
const DATE = '2026-06-22'
const URL = `/blog/${SLUG}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'เด็ก 3 เดือนนอนกี่ชั่วโมง',
    'ทารก 3 เดือนนอน',
    'sleep regression 3 เดือน',
    'ตารางนอนเด็ก 3 เดือน',
    '4 month sleep regression',
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
  { id: 'sleep-hours', label: 'เด็ก 3 เดือนนอนกี่ชั่วโมง?' },
  { id: 'schedule', label: 'ตัวอย่างตารางกิจวัตรประจำวัน' },
  { id: 'nap-pattern', label: 'รูปแบบงีบกลางวันที่เริ่มชัดขึ้น' },
  { id: 'regression', label: 'Sleep Regression ในวัย 3–4 เดือน คืออะไร?' },
  { id: 'regression-tips', label: 'วิธีรับมือ Sleep Regression' },
  { id: 'sleep-training', label: 'เริ่ม Sleep Training ได้ไหม?' },
  { id: 'faq', label: 'คำถามที่พบบ่อย' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'เด็ก 3 เดือนนอนกี่ชั่วโมงถือว่าปกติ?',
    answer:
      'เด็กอายุ 3 เดือนนอนเฉลี่ย 13–15 ชั่วโมงต่อวัน แบ่งเป็นกลางคืน 10–11 ชั่วโมง และงีบกลางวัน 3–4 ชั่วโมง บางคนนอนน้อยกว่าหรือมากกว่านี้ก็ยังปกติหากลูกดูสดชื่นและกินนมดี',
  },
  {
    question: 'Sleep regression 4 เดือนเกิดขึ้นตอนไหน?',
    answer:
      'Sleep regression ในวัยนี้มักเกิดขึ้นระหว่างอายุ 3–5 เดือน (ไม่ใช่แค่ตอน 4 เดือนพอดี) เกิดจากการที่สมองทารกกำลังเปลี่ยน sleep architecture จากแบบทารกเป็นแบบผู้ใหญ่มากขึ้น ทำให้ตื่นบ่อยและนอนยากขึ้นชั่วคราว',
  },
  {
    question: 'ลูก 3 เดือนเริ่มนอนทั้งคืนได้ไหม?',
    answer:
      'บางคนเริ่มได้ แต่ไม่ใช่ทุกคน เด็กประมาณ 50% เริ่มนอนได้ 5–6 ชั่วโมงต่อช่วงกลางคืนในวัย 3 เดือน แต่ "นอนทั้งคืน" อย่างต่อเนื่องมักจะเกิดขึ้นได้ดีหลังอายุ 6 เดือนขึ้นไป',
  },
  {
    question: 'ควรเริ่ม sleep training ตอนอายุ 3 เดือนได้ไหม?',
    answer:
      'ส่วนใหญ่ผู้เชี่ยวชาญแนะนำให้รอจนถึงอายุ 4–6 เดือนก่อนเริ่ม sleep training อย่างจริงจัง เนื่องจากทารกต่ำกว่า 4 เดือนยังต้องการกินนมกลางคืนและระบบประสาทยังพัฒนาไม่พร้อม',
  },
  {
    question: 'เด็ก 3 เดือนงีบกลางวันกี่รอบ?',
    answer:
      'ทารก 3 เดือนมักงีบ 3–4 รอบต่อวัน เริ่มเห็นรูปแบบงีบที่ชัดขึ้น ช่วงตื่นระหว่างงีบยาวขึ้นเป็น 1–1.5 ชั่วโมง เริ่มสามารถวางแผนวันได้บ้าง',
  },
  {
    question: 'ทำไมลูก 3 เดือนถึงนอนยากขึ้นทั้งๆ ที่เมื่อก่อนนอนง่ายกว่า?',
    answer:
      'นี่คือสัญญาณของ sleep regression ในวัย 3–4 เดือน เป็นเรื่องปกติมาก เกิดจากการเปลี่ยนแปลง sleep cycles ของสมอง ลูกเริ่มมีช่วงหลับตื้นที่ยาวขึ้นและตื่นง่ายขึ้น ส่วนใหญ่จะผ่านไปใน 2–6 สัปดาห์',
  },
]

export default function BabySleep3MonthsPage() {
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
        { label: 'เด็ก 3 เดือนนอนกี่ชั่วโมง?' },
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
        <strong>National Sleep Foundation</strong> และงานวิจัยด้าน infant sleep science
      </div>

      <p>
        อายุ 3 เดือนเป็นช่วงน่าตื่นเต้นสำหรับพ่อแม่ — ลูกตอบสนองมากขึ้น หัวเราะได้แล้ว
        และการนอนเริ่มมีรูปแบบที่เห็นได้ชัด แต่ก็เป็นช่วงที่พ่อแม่หลายคนเริ่มได้ยินคำว่า
        "4-month sleep regression" และเกิดความกังวล
      </p>
      <p>
        บทความนี้อธิบายการนอนของเด็ก 3 เดือนอย่างครบถ้วน รวมถึง sleep regression
        ที่อาจเกิดขึ้นในช่วงนี้และวิธีรับมืออย่างมีประสิทธิภาพ
      </p>

      <div className="not-prose mb-6 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-800">
        <strong>ดูตารางนอนทุกช่วงอายุ</strong> ได้ที่{' '}
        <Link href="/blog/newborn-sleep-hours" className="font-semibold underline">
          เด็กแรกเกิดนอนกี่ชั่วโมง? ตารางนอน 0–12 เดือน
        </Link>
      </div>

      <h2 id="sleep-hours">เด็ก 3 เดือนนอนกี่ชั่วโมงต่อวัน?</h2>
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
              ['นอนรวมต่อวัน', '13–15 ชั่วโมง'],
              ['กลางคืน', '10–11 ชั่วโมง (อาจตื่น 1–2 ครั้งเพื่อกินนม)'],
              ['งีบกลางวัน', '3–4 ชั่วโมง แบ่ง 3–4 รอบ'],
              ['ช่วงตื่นระหว่างงีบ', '1–1.5 ชั่วโมง'],
              ['บางคนนอนกลางคืนได้', '5–6 ชั่วโมงต่อช่วง'],
            ].map(([k, v]) => (
              <tr key={k} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{k}</td>
                <td className="px-4 py-3 text-gray-700">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="schedule">ตัวอย่างตารางกิจวัตรสำหรับเด็ก 3 เดือน</h2>
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
              ['07:00', 'ตื่นนอน — ให้นม เล่น กิจกรรมกระตุ้นพัฒนาการ (1–1.5 ชม.)'],
              ['08:30', 'งีบรอบที่ 1 (1–1.5 ชั่วโมง)'],
              ['10:00', 'ให้นม เวลาเล่นกลางแจ้ง'],
              ['11:30', 'งีบรอบที่ 2 (1–1.5 ชั่วโมง)'],
              ['13:00', 'ให้นม อาบน้ำ เวลาเล่น'],
              ['14:30', 'งีบรอบที่ 3 (45–60 นาที)'],
              ['16:00', 'ให้นม เวลาเล่นกับครอบครัว'],
              ['17:30', 'งีบสั้น (30 นาที ถ้าจำเป็น)'],
              ['19:00', 'กิจวัตรก่อนนอน — อาบน้ำ นวด ให้นม กล่อมนอน'],
              ['19:30', 'นอนกลางคืน'],
              ['03:00–05:00', 'อาจตื่นกินนม 1 ครั้ง'],
            ].map(([time, activity]) => (
              <tr key={time} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold text-blue-700 whitespace-nowrap">{time}</td>
                <td className="px-4 py-3 text-gray-600">{activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="nap-pattern">รูปแบบงีบกลางวันที่เริ่มชัดขึ้น</h2>
      <p>
        อายุ 3 เดือน ลูกเริ่มมีรูปแบบงีบที่คาดเดาได้มากขึ้น แม้ยังไม่สมบูรณ์:
      </p>
      <ul>
        <li>
          <strong>งีบเช้า</strong> — มักเป็นงีบที่ยาวที่สุด เกิดขึ้นประมาณ 1.5 ชั่วโมงหลังตื่น
        </li>
        <li>
          <strong>งีบกลางวัน</strong> — งีบรอบที่สอง สำคัญมาก ถ้าลูกพลาดงีบนี้มักจะงอแงมากตอนเย็น
        </li>
        <li>
          <strong>งีบบ่าย</strong> — สั้นลง บางคนเรียกว่า "catnap" ช่วยป้องกันไม่ให้ลูกง่วงเกินก่อนนอนกลางคืน
        </li>
        <li>
          <strong>งีบเย็น</strong> — บางคนยังต้องการ บางคนไม่ต้อง ขึ้นอยู่กับว่าตื่นนอนเวลาไหน
        </li>
      </ul>

      <h2 id="regression">Sleep Regression ในวัย 3–4 เดือน คืออะไร?</h2>
      <p>
        "4-month sleep regression" คือการเปลี่ยนแปลงถาวรใน sleep architecture ของทารก
        ไม่ใช่แค่ช่วงเวลาแย่ๆ ที่จะผ่านไปแล้วกลับเป็นเหมือนเดิม:
      </p>
      <ul>
        <li>
          <strong>ก่อนหน้านี้</strong> — ทารกหลับเข้า deep sleep (NREM) เกือบทันที และ sleep cycle สั้น
        </li>
        <li>
          <strong>หลัง regression</strong> — sleep cycles ยาวขึ้นและซับซ้อนขึ้น คล้ายผู้ใหญ่มากขึ้น
          มีช่วงหลับตื้น (light sleep) ที่ยาวขึ้น ทำให้ตื่นง่ายขึ้นระหว่างวงจร
        </li>
      </ul>
      <p>สัญญาณที่บอกว่ากำลังเจอ sleep regression:</p>
      <ul>
        <li>ลูกที่เคยนอนดีกลับตื่นบ่อยขึ้นมาก</li>
        <li>งีบกลางวันสั้นลงกะทันหัน</li>
        <li>หลับยากขึ้น ต้องการการช่วยเหลือในการหลับมากขึ้น</li>
        <li>งอแงมากขึ้นโดยเฉพาะตอนเย็น</li>
      </ul>

      <h2 id="regression-tips">วิธีรับมือ Sleep Regression</h2>
      <ol>
        <li>
          <strong>อย่าเพิ่ม sleep associations ใหม่</strong> — ถ้าเริ่มโยกหรืออุ้มลูกจนหลับทุกครั้ง
          ลูกจะต้องการสิ่งนี้ทุกครั้งที่ตื่นระหว่างวงจรนอน
        </li>
        <li>
          <strong>รักษา bedtime routine</strong> — กิจวัตรก่อนนอนที่สม่ำเสมอช่วยให้ลูกผ่อนคลาย
          แม้ในช่วงที่การนอนแย่
        </li>
        <li>
          <strong>เน้นการฝึกให้ลูกหลับเอง (เล็กน้อย)</strong> — ลองวางลูกลงที่นอนตอนยังตื่นอยู่บ้าง
          แม้ในช่วงนี้จะยากขึ้น แต่สำคัญมากสำหรับการนอนในระยะยาว
        </li>
        <li>
          <strong>ยืดหยุ่นและอดทน</strong> — sleep regression มักผ่านไปใน 2–6 สัปดาห์
          ไม่มีวิธีลัด แต่สามารถทำให้เบาลงได้ด้วยกิจวัตรที่ดี
        </li>
      </ol>

      <h2 id="sleep-training">เริ่ม Sleep Training ได้ไหมในวัย 3 เดือน?</h2>
      <p>
        ผู้เชี่ยวชาญส่วนใหญ่แนะนำให้รอจนถึงอายุ 4–6 เดือนก่อนเริ่ม sleep training อย่างจริงจัง
        เนื่องจาก:
      </p>
      <ul>
        <li>ทารกต่ำกว่า 4 เดือนยังต้องการกินนมกลางคืนจริงๆ</li>
        <li>ระบบประสาทยังพัฒนาไม่พร้อมสำหรับการ "เรียนรู้" การนอนเอง</li>
        <li>อาจส่งผลต่อความผูกพันและความไว้วางใจของลูก</li>
      </ul>
      <p>
        แต่สามารถเริ่ม "gentle" approach ได้ เช่น:
      </p>
      <ul>
        <li>วางลูกลงตอนง่วงแต่ยังไม่หลับ (drowsy but awake)</li>
        <li>ลองรอ 1–2 นาทีก่อนเข้าไปปลอบ เพื่อดูว่าลูกสงบเองได้ไหม</li>
        <li>ลด sleep associations ที่เป็นปัญหา (เช่น ดูดนมจนหลับ)</li>
      </ul>

      <p>
        เมื่อลูกครบ 6 เดือน การนอนจะเริ่มมีรูปแบบที่ชัดเจนมากขึ้น อ่านต่อได้ที่{' '}
        <Link href="/blog/baby-sleep-6-months">ตารางนอนเด็ก 6 เดือน</Link>
      </p>
      <p>
        ดูข้อมูลการกินนมที่เหมาะสมสำหรับวัยนี้ได้ที่{' '}
        <Link href="/blog/baby-feeding-3-months">เด็ก 3 เดือนกินนมกี่ออนซ์</Link>
      </p>

      <h2 id="faq">คำถามที่พบบ่อย</h2>
      <FAQ items={FAQ_ITEMS} />
    </BlogLayout>
  )
}
