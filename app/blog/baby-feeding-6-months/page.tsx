import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import FAQ from '@/components/FAQ'
import { articleSchema, faqSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem, TOCItem } from '@/types'

const SLUG = 'baby-feeding-6-months'
const TITLE = 'เด็ก 6 เดือนกินนมกี่ออนซ์? เริ่มอาหารเสริมได้แล้ว'
const DESCRIPTION =
  'เด็กอายุ 6 เดือนที่กินนมผงกินเฉลี่ย 6–8 ออนซ์ต่อมื้อ วันละ 4–5 มื้อ พร้อมเริ่มอาหารเสริม บทความนี้อธิบายปริมาณนม วิธีเริ่มอาหารเสริม อาหารแรกที่เหมาะสม และตารางกิจวัตรใหม่'
const DATE = '2026-06-22'
const URL = `/blog/${SLUG}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'เด็ก 6 เดือนกินนมกี่ออนซ์',
    'ทารก 6 เดือนกินนม',
    'เริ่มอาหารเสริม 6 เดือน',
    'อาหารแรกของทารก',
    'เด็ก 6 เดือนกินอะไรได้บ้าง',
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
  { id: 'formula-amount', label: 'เด็ก 6 เดือนกินนมผงกี่ออนซ์?' },
  { id: 'solid-food', label: 'เริ่มอาหารเสริมเมื่อไหร่และอย่างไร?' },
  { id: 'first-foods', label: 'อาหารแรกที่เหมาะสม' },
  { id: 'schedule', label: 'ตัวอย่างตารางกิจวัตรใหม่' },
  { id: 'milk-first', label: 'นมยังสำคัญมากในวัยนี้' },
  { id: 'allergy', label: 'การแนะนำอาหารที่อาจแพ้' },
  { id: 'faq', label: 'คำถามที่พบบ่อย' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'เด็ก 6 เดือนกินนมผงกี่ออนซ์ต่อมื้อ?',
    answer:
      'เด็กอายุ 6 เดือนที่กินนมผงกินเฉลี่ย 6–8 ออนซ์ (180–240 มล.) ต่อมื้อ วันละ 4–5 มื้อ รวมประมาณ 720–900 มล.ต่อวัน เมื่อเริ่มอาหารเสริมแล้ว ปริมาณนมอาจลดลงเล็กน้อย แต่นมยังควรเป็นแหล่งโภชนาการหลัก',
  },
  {
    question: 'เริ่มอาหารเสริมเมื่ออายุ 4 หรือ 6 เดือนดีกว่ากัน?',
    answer:
      'WHO และ AAP แนะนำให้เริ่มอาหารเสริมเมื่ออายุครบ 6 เดือน เนื่องจากระบบย่อยอาหารและภูมิคุ้มกันพัฒนาพร้อมกว่า แต่ในบางกรณีแพทย์อาจแนะนำให้เริ่มที่ 4 เดือนหากลูกพร้อม ควรปรึกษากุมารแพทย์ก่อนเสมอ',
  },
  {
    question: 'อาหารชิ้นแรกที่เหมาะสำหรับเด็ก 6 เดือนคืออะไร?',
    answer:
      'อาหารแรกที่นิยมคือข้าวต้มบด ฟักทองนึ่งบด มันหวานบด กล้วยบด หรือผักใบเขียวบด ไม่จำเป็นต้องเป็นอาหารสำเร็จรูปสำหรับเด็กเท่านั้น อาหารบ้านที่บดละเอียดพอก็เหมาะสม',
  },
  {
    question: 'ควรให้อาหารเสริมก่อนหรือหลังนม?',
    answer:
      'ในช่วง 6–8 เดือน ให้นมก่อนแล้วค่อยให้อาหารเสริม เพราะนมยังเป็นแหล่งโภชนาการหลัก หลัง 8–9 เดือน ค่อยเปลี่ยนเป็นให้อาหารเสริมก่อนแล้วค่อยให้นม',
  },
  {
    question: 'เด็ก 6 เดือนกินอาหารเสริมได้วันละกี่มื้อ?',
    answer:
      'เริ่มจาก 1 มื้อต่อวัน ปริมาณน้อยๆ (1–2 ช้อนโต๊ะ) แล้วค่อยๆ เพิ่มทั้งปริมาณและจำนวนมื้อตามที่ลูกรับได้ ไม่ต้องรีบ กินได้ครั้งละน้อยเป็นเรื่องปกติ',
  },
  {
    question: 'สัญญาณที่บอกว่าลูก 6 เดือนพร้อมกินอาหารเสริม?',
    answer:
      'สัญญาณที่ชัดเจน: นั่งตัวตรงได้โดยมีพิง คอแข็งแล้ว สนใจอาหารที่เห็นผู้ใหญ่กิน แลบลิ้นออกน้อยลง (tongue thrust reflex ลดลง) และสามารถเคลื่อนอาหารจากหน้าไปหลังปากได้',
  },
]

export default function BabyFeeding6MonthsPage() {
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
      category="การให้นมลูก"
      breadcrumbs={[
        { label: 'หน้าแรก', href: '/' },
        { label: 'บล็อก', href: '/blog' },
        { label: 'เด็ก 6 เดือนกินนมกี่ออนซ์?' },
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
        ข้อมูลในบทความนี้อ้างอิงจาก <strong>องค์การอนามัยโลก (WHO)</strong>,{' '}
        <strong>American Academy of Pediatrics (AAP)</strong> และ{' '}
        <strong>กรมอนามัย กระทรวงสาธารณสุข</strong>
      </div>

      <p>
        อายุ 6 เดือนเป็นก้าวสำคัญมาก — ลูกพร้อมเริ่มอาหารเสริมแล้ว!
        แต่นมยังคงเป็นแหล่งโภชนาการหลักจนถึงอายุ 1 ปี อาหารเสริมในช่วงนี้เป็นการ "เรียนรู้"
        ไม่ใช่การ "ทดแทน" นม
      </p>
      <p>
        บทความนี้อธิบายปริมาณนมที่ยังต้องการในวัย 6 เดือน
        วิธีเริ่มอาหารเสริมอย่างปลอดภัย และตารางกิจวัตรใหม่ที่รวมทั้งนมและอาหาร
      </p>

      <h2 id="formula-amount">เด็ก 6 เดือนกินนมผงกี่ออนซ์ต่อมื้อ?</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">อายุ</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ปริมาณต่อมื้อ</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">มื้อนม/วัน</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">อาหารเสริม</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['4–5 เดือน', '150–180 มล.', '5 มื้อ', 'ยังไม่เริ่ม'],
              ['6 เดือน', '180–240 มล.', '4–5 มื้อ', '1–2 มื้อ/วัน'],
              ['7–8 เดือน', '180–240 มล.', '4 มื้อ', '2–3 มื้อ/วัน'],
            ].map(([age, amount, milkMeals, solid]) => (
              <tr key={age} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{age}</td>
                <td className="px-4 py-3 font-bold text-blue-600">{amount}</td>
                <td className="px-4 py-3 text-gray-600">{milkMeals}</td>
                <td className="px-4 py-3 text-gray-600">{solid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="solid-food">เริ่มอาหารเสริมเมื่อไหร่และอย่างไร?</h2>
      <p>
        WHO และ AAP แนะนำให้เริ่มอาหารเสริมเมื่ออายุ 6 เดือนพอดี
        หลักการสำคัญของการเริ่มอาหารเสริม:
      </p>
      <ul>
        <li>
          <strong>เริ่มทีละอย่าง</strong> — แนะนำอาหารใหม่ทีละชนิด รอ 3–5 วัน
          ก่อนเพิ่มอาหารชนิดถัดไป เพื่อสังเกตอาการแพ้
        </li>
        <li>
          <strong>เริ่มปริมาณน้อย</strong> — เริ่มจาก 1–2 ช้อนชา แล้วค่อยๆ เพิ่มตามที่ลูกรับได้
        </li>
        <li>
          <strong>เนื้อสัมผัสที่เหมาะสม</strong> — เริ่มจากอาหารบดละเอียด แล้วค่อยๆ ปรับให้หยาบขึ้น
          ตามพัฒนาการการเคี้ยวของลูก
        </li>
        <li>
          <strong>ไม่บังคับ</strong> — ถ้าลูกปฏิเสธ ให้หยุดแล้วลองใหม่อีกวัน
          ต้องใช้เวลา 10–20 ครั้งกว่าลูกจะยอมรับอาหารใหม่
        </li>
      </ul>

      <h2 id="first-foods">อาหารแรกที่เหมาะสำหรับเด็ก 6 เดือน</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">หมวดอาหาร</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ตัวอย่าง</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">วิธีเตรียม</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['ธัญพืช', 'ข้าว, ข้าวโอ๊ต', 'ต้มให้นุ่มมาก บดละเอียด'],
              ['ผัก', 'ฟักทอง, มันหวาน, แครอท, บรอกโคลี', 'นึ่งแล้วบด'],
              ['ผลไม้', 'กล้วย, มะละกอ, แอปเปิ้ล', 'บดหรือขูด'],
              ['โปรตีน', 'เนื้อไก่, ปลา, ไข่แดง, เต้าหู้', 'ต้มบดละเอียด'],
              ['พืชตระกูลถั่ว', 'ถั่วเลนทิล, ถั่วดำ', 'ต้มบดให้เนียน'],
            ].map(([cat, eg, method]) => (
              <tr key={cat} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{cat}</td>
                <td className="px-4 py-3 text-gray-600">{eg}</td>
                <td className="px-4 py-3 text-gray-600">{method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        <strong>อาหารที่ควรหลีกเลี่ยงก่อนอายุ 1 ปี:</strong> น้ำผึ้ง, นมวัวล้วนๆ,
        อาหารรสเค็มหรือหวานจัด, อาหารแข็งที่อาจสำลัก
      </p>

      <h2 id="schedule">ตัวอย่างตารางกิจวัตรใหม่สำหรับเด็ก 6 เดือน</h2>
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
              ['07:00', 'ตื่นนอน — นม (180–240 มล.) เป็นหลัก'],
              ['08:30', 'อาหารเสริมมื้อแรก (2–4 ช้อนโต๊ะ)'],
              ['09:00', 'งีบรอบที่ 1'],
              ['11:00', 'นม'],
              ['12:30', 'งีบรอบที่ 2'],
              ['14:30', 'อาหารเสริมมื้อที่สอง (ถ้าเริ่ม 2 มื้อแล้ว)'],
              ['15:30', 'นม'],
              ['16:00', 'งีบรอบที่ 3 (สั้น)'],
              ['18:00', 'อาบน้ำ นม'],
              ['19:00', 'นอนกลางคืน'],
            ].map(([time, activity]) => (
              <tr key={time} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold text-blue-700 whitespace-nowrap">{time}</td>
                <td className="px-4 py-3 text-gray-600">{activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="milk-first">นมยังสำคัญมากในวัยนี้</h2>
      <p>
        แม้จะเริ่มอาหารเสริม แต่นมยังต้องเป็นแหล่งโภชนาการหลักจนถึงอายุ 12 เดือน:
      </p>
      <ul>
        <li>นมแม่หรือนมผงต้องให้ไม่น้อยกว่า 600 มล./วัน</li>
        <li>อาหารเสริมในช่วงนี้เป็นการเรียนรู้รสชาติและเนื้อสัมผัส ไม่ใช่การแทนที่นม</li>
        <li>ห้ามให้นมวัวล้วนๆ ก่อน 12 เดือน</li>
      </ul>

      <h2 id="allergy">การแนะนำอาหารที่อาจแพ้</h2>
      <p>
        งานวิจัยล่าสุดพบว่าการแนะนำอาหารที่อาจก่อให้เกิดการแพ้ (เช่น ถั่วลิสง, ไข่, ปลา)
        ตั้งแต่อายุ 6 เดือน <strong>ลด</strong>ความเสี่ยงการแพ้ในระยะยาว ไม่ใช่เพิ่ม:
      </p>
      <ul>
        <li>เริ่มทีละอย่าง รอ 3–5 วันก่อนเพิ่มอาหารใหม่</li>
        <li>ให้ลองครั้งแรกตอนกลางวัน เพื่อสังเกตอาการในช่วงที่ตื่นอยู่</li>
        <li>หากครอบครัวมีประวัติแพ้อาหาร ปรึกษาแพทย์ก่อนเสมอ</li>
      </ul>

      <p>
        ดูข้อมูลการนอนที่เหมาะสมสำหรับวัยนี้ได้ที่{' '}
        <Link href="/blog/baby-sleep-6-months">ตารางนอนเด็ก 6 เดือน</Link>
      </p>
      <p>
        ดูค่าใช้จ่ายรายเดือนสำหรับเด็กวัยนี้ได้ที่{' '}
        <Link href="/blog/monthly-baby-budget">งบประมาณเลี้ยงลูกต่อเดือน</Link>
      </p>

      <h2 id="faq">คำถามที่พบบ่อย</h2>
      <FAQ items={FAQ_ITEMS} />
    </BlogLayout>
  )
}
