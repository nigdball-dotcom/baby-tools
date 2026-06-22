import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import FAQ from '@/components/FAQ'
import { articleSchema, faqSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem, TOCItem } from '@/types'

const SLUG = 'baby-sleep-2-months'
const TITLE = 'เด็ก 2 เดือนนอนกี่ชั่วโมง? ตารางนอนและวิธีจัดกิจวัตร'
const DESCRIPTION =
  'เด็กอายุ 2 เดือนนอนเฉลี่ย 14–16 ชั่วโมงต่อวัน เริ่มพัฒนานาฬิกาชีวิต นอนกลางคืนยาวขึ้นเล็กน้อย บทความนี้รวมตารางนอน วิธีสร้างกิจวัตร และเคล็ดลับช่วยให้ลูก 2 เดือนนอนหลับได้ดีขึ้น'
const DATE = '2026-06-22'
const URL = `/blog/${SLUG}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'เด็ก 2 เดือนนอนกี่ชั่วโมง',
    'ทารก 2 เดือนนอน',
    'กิจวัตรเด็ก 2 เดือน',
    'ตารางนอนเด็ก 2 เดือน',
    'เด็กอายุ 2 เดือนนอน',
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
  { id: 'sleep-hours', label: 'เด็ก 2 เดือนนอนกี่ชั่วโมง?' },
  { id: 'changes', label: 'การเปลี่ยนแปลงการนอนจากเดือนที่ 1' },
  { id: 'schedule', label: 'ตัวอย่างตารางกิจวัตรประจำวัน' },
  { id: 'nap', label: 'การงีบกลางวันของเด็ก 2 เดือน' },
  { id: 'tips', label: 'เคล็ดลับช่วยให้นอนหลับได้ดีขึ้น' },
  { id: 'problems', label: 'ปัญหาการนอนที่พบบ่อยในวัย 2 เดือน' },
  { id: 'faq', label: 'คำถามที่พบบ่อย' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'เด็ก 2 เดือนนอนกี่ชั่วโมงถือว่าปกติ?',
    answer:
      'เด็กอายุ 2 เดือนนอนเฉลี่ย 14–16 ชั่วโมงต่อวัน บางคนนอน 12 ชั่วโมง บางคนนอน 17 ชั่วโมง ทั้งหมดยังอยู่ในช่วงปกติ ขอให้ดูที่ความสดชื่นเมื่อตื่น การกินนม และน้ำหนักเป็นหลัก',
  },
  {
    question: 'เด็ก 2 เดือนเริ่มนอนกลางคืนยาวขึ้นได้ไหม?',
    answer:
      'ได้ เด็กบางคนเริ่มนอนกลางคืนได้ยาวขึ้น 3–5 ชั่วโมงต่อช่วงในวัย 2 เดือน แต่ไม่ใช่ทุกคน ถ้าลูกยังตื่นทุก 2–3 ชั่วโมงก็ยังเป็นเรื่องปกติอย่างสมบูรณ์',
  },
  {
    question: 'เด็ก 2 เดือนควรงีบกลางวันกี่รอบ?',
    answer:
      'ทารก 2 เดือนมักงีบ 3–5 รอบต่อวัน แต่ละรอบ 30 นาทีถึง 2 ชั่วโมง ยังเป็นช่วงที่ไม่สามารถจัดตารางงีบที่แน่นอนได้ ให้ดูสัญญาณง่วงของลูกเป็นหลัก',
  },
  {
    question: 'ทำไมเด็ก 2 เดือนร้องก่อนนอนมาก?',
    answer:
      'เด็กช่วงนี้มักมี "purple crying" หรือการร้องไห้มากตามธรรมชาติ ซึ่งพีคประมาณอายุ 6–8 สัปดาห์และจะค่อยๆ ลดลง การร้องไห้ก่อนนอนอาจเป็นเพราะง่วงเกิน ลองใช้เสียงสีขาวและห่อตัวเพื่อช่วย',
  },
  {
    question: 'ควรให้เด็ก 2 เดือนนอนคนเดียวหรือนอนกับพ่อแม่?',
    answer:
      'AAP แนะนำให้ทารกนอนในเปลของตัวเองในห้องเดียวกับพ่อแม่ (room-sharing) ตลอด 6 เดือนแรก แต่ไม่ควรนอนร่วมเตียงกับพ่อแม่ (bed-sharing) เนื่องจากความเสี่ยง SIDS',
  },
  {
    question: 'เด็ก 2 เดือนยิ้มแล้ว การนอนเปลี่ยนไปไหม?',
    answer:
      'ช่วงอายุ 6–8 สัปดาห์ลูกเริ่มยิ้มสังคม (social smile) และตอบสนองต่อใบหน้าพ่อแม่มากขึ้น ทำให้ช่วงตื่นยาวขึ้นเล็กน้อยเป็น 60–90 นาที เพราะลูกสนุกกับการปฏิสัมพันธ์มากขึ้น แต่ยังต้องการนอนเยอะเหมือนเดิม',
  },
]

export default function BabySleep2MonthsPage() {
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
      category="การนอนของลูกน้อย"
      breadcrumbs={[
        { label: 'หน้าแรก', href: '/' },
        { label: 'บล็อก', href: '/blog' },
        { label: 'เด็ก 2 เดือนนอนกี่ชั่วโมง?' },
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
        <strong>National Sleep Foundation</strong>
      </div>

      <p>
        เมื่อลูกอายุครบ 2 เดือน พ่อแม่หลายคนเริ่มเห็นแสงสว่างที่ปลายอุโมงค์
        การนอนยังไม่ได้ "ดีขึ้นมาก" แต่เริ่มมีรูปแบบให้เห็นบ้าง
        ลูกอาจนอนกลางคืนได้ยาวขึ้นเป็น 3–5 ชั่วโมงต่อช่วง และเริ่มตอบสนองต่อสิ่งรอบข้างมากขึ้น
      </p>
      <p>
        บทความนี้เน้นข้อมูลการนอนของเด็กอายุ 2 เดือนโดยเฉพาะ
        พร้อมตารางอ้างอิงและวิธีเริ่มสร้างกิจวัตรที่เหมาะสมกับวัยนี้
      </p>

      <div className="not-prose mb-6 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-800">
        <strong>ดูตารางนอนทุกช่วงอายุ (0–12 เดือน)</strong> ได้ที่{' '}
        <Link href="/blog/newborn-sleep-hours" className="font-semibold underline">
          เด็กแรกเกิดนอนกี่ชั่วโมง? ตารางนอน 0–12 เดือน
        </Link>
      </div>

      <h2 id="sleep-hours">เด็ก 2 เดือนนอนกี่ชั่วโมงต่อวัน?</h2>

      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ด้าน</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">เด็ก 1 เดือน</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">เด็ก 2 เดือน</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['นอนรวม/วัน', '14–17 ชม.', '14–16 ชม.'],
              ['กลางคืนต่อช่วง', '2–3 ชม.', '3–5 ชม.'],
              ['งีบกลางวัน', '4–6 รอบ', '3–5 รอบ'],
              ['ช่วงตื่นสูงสุด', '45–60 นาที', '60–90 นาที'],
              ['นาฬิกาชีวิต', 'ยังไม่พัฒนา', 'เริ่มพัฒนาเล็กน้อย'],
            ].map(([aspect, m1, m2]) => (
              <tr key={aspect} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{aspect}</td>
                <td className="px-4 py-3 text-gray-600">{m1}</td>
                <td className="px-4 py-3 font-bold text-blue-600">{m2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="changes">การเปลี่ยนแปลงการนอนจากเดือนที่ 1 สู่เดือนที่ 2</h2>
      <p>อายุ 2 เดือนเป็นช่วงเปลี่ยนผ่านสำคัญหลายอย่าง:</p>
      <ul>
        <li>
          <strong>Circadian Rhythm เริ่มพัฒนา</strong> — ระดับ Melatonin เริ่มสูงขึ้นในตอนกลางคืน
          ช่วยให้ลูกเริ่มแยกแยะกลางวัน-กลางคืนได้ดีขึ้น
        </li>
        <li>
          <strong>Social Smile ปรากฏ</strong> — ลูกเริ่มยิ้มตอบสนองต่อใบหน้าพ่อแม่ (ประมาณ 6–8 สัปดาห์)
          ทำให้ช่วงตื่นสนุกขึ้นและยาวขึ้นเล็กน้อย
        </li>
        <li>
          <strong>Purple Crying พีค</strong> — การร้องไห้ที่ไม่มีสาเหตุชัดเจนมักพีคในช่วงอายุ 6–8 สัปดาห์
          แล้วจะค่อยๆ ลดลงจนถึงอายุประมาณ 3–4 เดือน
        </li>
        <li>
          <strong>Moro Reflex ยังแรง</strong> — อาการสะดุ้งตื่นยังมีอยู่มาก การห่อตัวยังช่วยได้มาก
        </li>
      </ul>

      <h2 id="schedule">ตัวอย่างตารางกิจวัตรสำหรับเด็ก 2 เดือน</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">เวลาโดยประมาณ</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">กิจกรรม</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['07:00', 'ตื่นนอน — ให้นม เปลี่ยนผ้าอ้อม เวลาเล่นและปฏิสัมพันธ์ (60–90 นาที)'],
              ['08:30', 'งีบรอบที่ 1 (1–1.5 ชั่วโมง)'],
              ['10:00', 'ให้นม เวลาเล่น ทำกิจกรรมกระตุ้นพัฒนาการ'],
              ['11:30', 'งีบรอบที่ 2 (1–1.5 ชั่วโมง)'],
              ['13:00', 'ให้นม เวลาเล่น อาบน้ำ'],
              ['14:30', 'งีบรอบที่ 3 (1 ชั่วโมง)'],
              ['16:00', 'ให้นม เวลาเล่นออกอากาศ'],
              ['17:30', 'งีบสั้น (30–45 นาที)'],
              ['19:00', 'กิจวัตรก่อนนอน — ให้นม อาบน้ำ นวด ร้องเพลง'],
              ['19:30–20:00', 'นอนกลางคืน'],
              ['01:00–03:00', 'ตื่นมากินนม 1–2 ครั้ง'],
            ].map(([time, activity]) => (
              <tr key={time} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold text-blue-700 whitespace-nowrap">{time}</td>
                <td className="px-4 py-3 text-gray-600">{activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="nap">การงีบกลางวันของเด็ก 2 เดือน</h2>
      <p>
        ทารก 2 เดือนมักงีบ 3–5 รอบต่อวัน รวมเวลางีบประมาณ 5–6 ชั่วโมง
        ความยาวของแต่ละรอบยังไม่แน่นอน ตั้งแต่ 30 นาทีถึง 2 ชั่วโมง:
      </p>
      <ul>
        <li><strong>งีบสั้น (30–45 นาที)</strong> — เกิดเมื่อลูกตื่นระหว่าง sleep cycle และหลับต่อไม่ได้ เป็นเรื่องปกติ</li>
        <li><strong>งีบยาว (1.5–2 ชั่วโมง)</strong> — ดีสำหรับพ่อแม่ที่อยากพักด้วย แต่อย่ารู้สึกผิดถ้าลูกงีบสั้น</li>
        <li><strong>ไม่ต้องบังคับงีบ</strong> — ถ้าลูกตื่นแล้วดูสดชื่น ไม่ร้อง ไม่จำเป็นต้องบังคับให้กลับไปนอน</li>
      </ul>
      <p>
        เทียบกับเดือนที่ 1 ซึ่งงีบ 4–6 รอบ เดือนที่ 2 เริ่มเห็นรูปแบบชัดขึ้นเล็กน้อย
        แต่ยังไม่มีตารางที่แน่นอน อ่านเพิ่มเติมจาก{' '}
        <Link href="/blog/baby-sleep-1-month">เด็ก 1 เดือนนอนกี่ชั่วโมง</Link>{' '}
        เพื่อเปรียบเทียบพัฒนาการการนอน
      </p>

      <h2 id="tips">เคล็ดลับช่วยให้เด็ก 2 เดือนนอนหลับได้ดีขึ้น</h2>
      <ol>
        <li>
          <strong>เริ่มกิจวัตรก่อนนอนที่สม่ำเสมอ</strong> — อายุ 2 เดือนเป็นช่วงที่ดีที่สุดสำหรับการเริ่ม
          กิจวัตรก่อนนอนกลางคืน เพราะสมองเริ่มตอบสนองต่อ pattern
        </li>
        <li>
          <strong>ยังคงห่อตัวต่อ</strong> — Moro reflex ยังแรงมากในวัยนี้ การห่อตัวช่วยลดการสะดุ้งตื่น
        </li>
        <li>
          <strong>ให้นมก่อนนอนเต็มๆ</strong> — "Full feeding" ก่อนนอนช่วยให้ลูกอิ่มและนอนได้นานขึ้น
          หลีกเลี่ยงให้ลูกหลับบนอกโดยไม่ได้กินนมเสร็จ
        </li>
        <li>
          <strong>ลดสิ่งเร้าก่อนนอน</strong> — หลีกเลี่ยงการเล่นสนุกหรือกระตุ้นมากเกินไปในช่วง 30–60 นาทีก่อนนอน
        </li>
        <li>
          <strong>ให้ลูกเรียนรู้การนอนเอง (บาง)</strong> — เริ่มฝึกวางลูกลงที่นอนตอนยังง่วงแต่ตื่นอยู่
          เพื่อสร้างนิสัยการนอนที่ดีในอนาคต
        </li>
      </ol>

      <h2 id="problems">ปัญหาการนอนที่พบบ่อยในวัย 2 เดือน</h2>
      <ul>
        <li>
          <strong>ลูกงีบสั้นมาก (30 นาทีหรือน้อยกว่า)</strong> — ปกติในวัยนี้ เกิดจากการตื่นระหว่าง sleep cycle
          ลองปลอบ 5 นาทีก่อนเอาลูกขึ้น บางทีลูกหลับต่อได้เอง
        </li>
        <li>
          <strong>ลูกสับสนกลางวัน-กลางคืน</strong> — เปิดแสงและทำกิจกรรมตอนกลางวัน ลดเสียงและแสงตอนกลางคืน
          ใช้เวลา 2–4 สัปดาห์ให้เห็นผล
        </li>
        <li>
          <strong>ลูกหลับได้แค่บนอกหรือบนมือ</strong> — เป็นเรื่องปกติ แต่ถ้าต้องการเปลี่ยน
          ลองวางลูกลงที่นอนหลังหลับ 10–15 นาที (หลับลึกแล้ว)
        </li>
        <li>
          <strong>ลูกร้องมากก่อนนอน</strong> — Purple crying ยังพีคในวัยนี้
          ลองห่อตัว เดินโยก หรือใช้เสียงสีขาวช่วย
        </li>
      </ul>

      <p>
        เมื่อลูกโตขึ้นถึง 3 เดือน การนอนจะเริ่มมีรูปแบบที่ชัดเจนขึ้น อ่านเพิ่มเติมได้ที่{' '}
        <Link href="/blog/baby-sleep-3-months">เด็ก 3 เดือนนอนกี่ชั่วโมง?</Link>
      </p>

      <h2 id="faq">คำถามที่พบบ่อย</h2>
      <FAQ items={FAQ_ITEMS} />
    </BlogLayout>
  )
}
