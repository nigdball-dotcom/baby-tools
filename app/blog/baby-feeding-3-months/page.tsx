import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import FAQ from '@/components/FAQ'
import { articleSchema, faqSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem, TOCItem } from '@/types'

const SLUG = 'baby-feeding-3-months'
const TITLE = 'เด็ก 3 เดือนกินนมกี่ออนซ์? ตารางและเคล็ดลับการให้นม'
const DESCRIPTION =
  'เด็กอายุ 3 เดือนที่กินนมผงกินเฉลี่ย 4–5 ออนซ์ต่อมื้อ วันละ 5–6 มื้อ บทความนี้รวมปริมาณนม ตารางให้นม growth spurt 3 เดือน และเคล็ดลับสำหรับแม่ที่กลับไปทำงาน'
const DATE = '2026-06-22'
const URL = `/blog/${SLUG}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'เด็ก 3 เดือนกินนมกี่ออนซ์',
    'ทารก 3 เดือนกินนม',
    'ตารางให้นมเด็ก 3 เดือน',
    'นมผง 3 เดือน',
    'growth spurt 3 เดือน',
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
  { id: 'formula-amount', label: 'เด็ก 3 เดือนกินนมผงกี่ออนซ์?' },
  { id: 'breastfed', label: 'เด็กที่กินนมแม่' },
  { id: 'schedule', label: 'ตัวอย่างตารางให้นม' },
  { id: 'growth-spurt', label: 'Growth Spurt 3 เดือน' },
  { id: 'working-moms', label: 'แม่กลับไปทำงาน: วางแผนนมปั๊ม' },
  { id: 'weight', label: 'น้ำหนักเกณฑ์เด็ก 3 เดือน' },
  { id: 'faq', label: 'คำถามที่พบบ่อย' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'เด็ก 3 เดือนกินนมผงกี่ออนซ์ต่อมื้อ?',
    answer:
      'เด็กอายุ 3 เดือนที่กินนมผงกินเฉลี่ย 4–5 ออนซ์ (120–150 มล.) ต่อมื้อ วันละ 5–6 มื้อ รวมประมาณ 600–750 มล.ต่อวัน ปริมาณอาจแตกต่างตามน้ำหนักและความต้องการของแต่ละคน',
  },
  {
    question: 'เด็ก 3 เดือนยังต้องกินนมกลางคืนไหม?',
    answer:
      'หลายคนยังต้องกิน แต่บางคนเริ่มนอนได้ 5–6 ชั่วโมงต่อช่วงโดยไม่ตื่นกินนม ถ้าลูกน้ำหนักขึ้นดีและหมอไม่ได้แนะนำเป็นพิเศษ ไม่จำเป็นต้องปลุกให้กินนมกลางคืน',
  },
  {
    question: 'Growth spurt 3 เดือนทำให้ลูกหิวบ่อยขึ้นนานแค่ไหน?',
    answer:
      'Growth spurt ในวัย 3 เดือนมักกินเวลา 2–7 วัน ลูกจะหิวบ่อยขึ้น นอนมากขึ้น และงอแงมากขึ้น หลังจากนั้นกลับสู่ปกติ และมักกินได้มากขึ้นในแต่ละมื้อ',
  },
  {
    question: 'แม่จะกลับไปทำงานตอนลูก 3 เดือน ควรปั๊มนมสะสมอย่างไร?',
    answer:
      'ควรเริ่มปั๊มนมสะสมล่วงหน้า 2–4 สัปดาห์ก่อนกลับไปทำงาน ปั๊มหลังให้นมลูกทุกมื้อ และปั๊มครั้งเพิ่มเติมในตอนเช้าเมื่อ supply มักสูงสุด นมแม่เก็บในตู้เย็นได้ 4 วัน และแช่แข็งได้ 6 เดือน',
  },
  {
    question: 'เด็ก 3 เดือนน้ำหนักควรเป็นเท่าไร?',
    answer:
      'เด็กชายอายุ 3 เดือนควรหนักประมาณ 6–7 กก. เด็กหญิงประมาณ 5.5–6.5 กก. (อ้างอิง WHO growth chart) แต่สำคัญที่สุดคือน้ำหนักขึ้นอย่างสม่ำเสมอตาม percentile ของลูก',
  },
  {
    question: 'ลูก 3 เดือนกินนมแม่แต่น้ำนมน้อย ทำอย่างไร?',
    answer:
      'วิธีเพิ่ม supply: ให้นมบ่อยขึ้น (ทุก 2 ชั่วโมงหรือบ่อยกว่า) ตรวจสอบท่าดูดนมให้ถูกต้อง ดื่มน้ำมากๆ นอนหลับพักผ่อนให้เพียงพอ ปรึกษา lactation consultant หากปัญหายังคงอยู่',
  },
]

export default function BabyFeeding3MonthsPage() {
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
        { label: 'เด็ก 3 เดือนกินนมกี่ออนซ์?' },
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
        <strong>WHO Growth Chart 2006</strong> และ <strong>กรมอนามัย</strong>
      </div>

      <p>
        อายุ 3 เดือนเป็นช่วงที่น่าตื่นเต้น ลูกเริ่มตอบสนองและโต้ตอบมากขึ้น
        กินนมได้มากขึ้นในแต่ละมื้อและน้อยมื้อลง ทำให้ตารางวันสม่ำเสมอขึ้น
        แต่ก็เป็นช่วงที่อาจเจอ growth spurt ครั้งใหญ่และเป็นช่วงที่หลายครอบครัวเริ่มวางแผนกลับไปทำงาน
      </p>
      <p>
        บทความนี้ให้ข้อมูลปริมาณนมที่เหมาะสำหรับเด็ก 3 เดือน
        พร้อมเคล็ดลับสำหรับแม่ที่กำลังจะกลับไปทำงานและต้องการสะสมนม
      </p>

      <h2 id="formula-amount">เด็ก 3 เดือนกินนมผงกี่ออนซ์ต่อมื้อ?</h2>
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
              ['2 เดือน', '90–120 มล.', '6–8 มื้อ', '540–720 มล.'],
              ['3 เดือน', '120–150 มล.', '5–6 มื้อ', '600–750 มล.'],
              ['4 เดือน', '150–180 มล.', '5 มื้อ', '700–800 มล.'],
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

      <h2 id="breastfed">เด็กที่กินนมแม่ในวัย 3 เดือน</h2>
      <ul>
        <li><strong>ความถี่</strong> — 5–7 ครั้งต่อวัน เริ่มสม่ำเสมอขึ้น</li>
        <li><strong>ประสิทธิภาพการดูด</strong> — ลูก 3 เดือนดูดนมได้เร็วและมีประสิทธิภาพมากขึ้น
        มื้อหนึ่งอาจใช้เวลาแค่ 5–10 นาที แทนที่จะ 20–30 นาที</li>
        <li><strong>Comfort nursing</strong> — บางทีลูกดูดนมเพื่อความสบายใจ ไม่ใช่เพราะหิว ซึ่งเป็นเรื่องปกติ</li>
        <li><strong>Nursing strike</strong> — บางคนปฏิเสธเต้าชั่วคราว มักเกิดจากสิ่งรบกวนหรือน้ำนมเปลี่ยนรส</li>
      </ul>

      <h2 id="schedule">ตัวอย่างตารางให้นมเด็ก 3 เดือน</h2>
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
              ['07:00', 'ตื่นนอน — ให้นม (120–150 มล.)'],
              ['10:00', 'หลังงีบเช้า — ให้นม'],
              ['13:00', 'หลังงีบกลางวัน — ให้นม'],
              ['16:00', 'ช่วงบ่าย — ให้นม'],
              ['19:00', 'ก่อนนอน — ให้นม'],
              ['22:00', 'ให้นมก่อนพ่อแม่นอน (ถ้าลูกยังตื่น)'],
              ['03:00–05:00', 'กินนมกลางดึก (ถ้าลูกตื่น)'],
            ].map(([time, activity]) => (
              <tr key={time} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold text-blue-700 whitespace-nowrap">{time}</td>
                <td className="px-4 py-3 text-gray-600">{activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="growth-spurt">Growth Spurt 3 เดือน</h2>
      <p>
        Growth spurt ในช่วงอายุ 3 เดือน (บางคนเกิดเร็วกว่าหรือช้ากว่าสักสัปดาห์) เป็นช่วงใหญ่ที่สุดช่วงหนึ่ง:
      </p>
      <ul>
        <li>ลูกหิวบ่อยขึ้นอย่างกะทันหัน อาจทุก 1–2 ชั่วโมง</li>
        <li>กินได้มากขึ้นต่อมื้อ</li>
        <li>นอนมากขึ้น เพราะร่างกายกำลังเติบโต</li>
        <li>งอแงมากขึ้น โดยเฉพาะตอนเย็น</li>
      </ul>
      <p>
        สำหรับแม่ที่ให้นมแม่ นี่เป็นช่วง "cluster feeding" ที่ลูกจะดูดบ่อยมากในช่วง 2–3 ชั่วโมง
        เพื่อกระตุ้น supply ให้เพิ่มขึ้น ให้ยึดมั่นและไม่เติมนมผงเพิ่มโดยไม่จำเป็น
        เพราะ supply จะปรับตามความต้องการของลูกเองในอีกไม่กี่วัน
      </p>

      <h2 id="working-moms">แม่กลับไปทำงาน: วางแผนนมปั๊ม</h2>
      <p>
        หลายครอบครัวในไทยเริ่มให้แม่กลับไปทำงานเมื่อลูกอายุ 3 เดือน
        ต่อไปนี้คือแนวทางการสะสมนมปั๊ม:
      </p>
      <ul>
        <li>
          <strong>เริ่มสะสมล่วงหน้า 2–4 สัปดาห์</strong> — ปั๊มหลังให้นมลูกในมื้อเช้าแรก
          ซึ่งมักเป็นช่วงที่ supply สูงสุด ได้นมปั๊มมากที่สุด
        </li>
        <li>
          <strong>ระยะเวลาปั๊มที่ออฟฟิศ</strong> — ปั๊มทุก 3–4 ชั่วโมง เพื่อรักษา supply
          และลดความเสี่ยงเต้านมคัดและท่อนมอุดตัน
        </li>
        <li>
          <strong>การเก็บนม</strong> — ตู้เย็น 4 วัน, ช่องแช่แข็งในตู้เย็นเดียวกัน 2 สัปดาห์,
          ช่องแช่แข็งแยก 6 เดือน
        </li>
      </ul>

      <h2 id="weight">น้ำหนักเกณฑ์เด็ก 3 เดือน</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">เพศ</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">น้ำหนักน้อย (3rd)</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ค่าเฉลี่ย (50th)</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">น้ำหนักมาก (97th)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['เด็กชาย', '5.0 กก.', '6.4 กก.', '7.9 กก.'],
              ['เด็กหญิง', '4.6 กก.', '5.8 กก.', '7.2 กก.'],
            ].map(([sex, low, avg, high]) => (
              <tr key={sex} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{sex}</td>
                <td className="px-4 py-3 text-gray-600">{low}</td>
                <td className="px-4 py-3 font-bold text-blue-600">{avg}</td>
                <td className="px-4 py-3 text-gray-600">{high}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-500">
        อ้างอิงจาก WHO Child Growth Standards 2006 — percentile ที่สม่ำเสมอสำคัญกว่าตัวเลขสูงต่ำ
      </p>

      <p>
        ดูข้อมูลการกินนมของเดือนถัดไปได้ที่{' '}
        <Link href="/blog/baby-feeding-6-months">เด็ก 6 เดือนกินนมกี่ออนซ์?</Link>
      </p>
      <p>
        ดูข้อมูลการนอนที่เหมาะสมสำหรับวัยนี้ได้ที่{' '}
        <Link href="/blog/baby-sleep-3-months">เด็ก 3 เดือนนอนกี่ชั่วโมง?</Link>
      </p>

      <h2 id="faq">คำถามที่พบบ่อย</h2>
      <FAQ items={FAQ_ITEMS} />
    </BlogLayout>
  )
}
