import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import FAQ from '@/components/FAQ'
import { articleSchema, faqSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem, TOCItem } from '@/types'

const SLUG = 'newborn-feeding-schedule'
const TITLE = 'ตารางให้นมเด็กแรกเกิด ให้นมทุกกี่ชั่วโมงและกี่ออนซ์?'
const DESCRIPTION =
  'ตารางให้นมเด็กแรกเกิดอย่างละเอียด ตั้งแต่แรกเกิดถึง 3 เดือน ทั้งนมแม่และนมผง พร้อมปริมาณ ความถี่ สัญญาณหิวอิ่ม และวิธีสร้างตารางที่เหมาะกับลูก'
const DATE = '2026-06-22'
const URL = `/blog/${SLUG}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'ตารางให้นมเด็กแรกเกิด',
    'ให้นมทารกทุกกี่ชั่วโมง',
    'เด็กแรกเกิดกินนมกี่ออนซ์',
    'ตารางนมทารก',
    'วิธีให้นมเด็กแรกเกิด',
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
  { id: 'how-often', label: 'ให้นมบ่อยแค่ไหนในแต่ละช่วงอายุ?' },
  { id: 'amount-table', label: 'ตารางปริมาณนม 0–3 เดือน' },
  { id: 'breastfed-schedule', label: 'ตารางสำหรับเด็กที่กินนมแม่' },
  { id: 'formula-schedule', label: 'ตารางสำหรับเด็กที่กินนมผง' },
  { id: 'night-feeds', label: 'การให้นมกลางคืน' },
  { id: 'hunger-signs', label: 'สัญญาณหิวที่ควรรู้' },
  { id: 'faq', label: 'คำถามที่พบบ่อย' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'เด็กแรกเกิดควรให้นมทุกกี่ชั่วโมง?',
    answer:
      'เด็กแรกเกิดควรได้รับนมทุก 2–3 ชั่วโมง หรือวันละ 8–12 มื้อ ในสัปดาห์แรก ไม่ควรปล่อยให้เว้นนานกว่า 3 ชั่วโมงในกลางวัน หรือ 4 ชั่วโมงในกลางคืน สำหรับเด็กที่น้ำหนักขึ้นดีแล้ว',
  },
  {
    question: 'เด็กแรกเกิดกินนมผงกี่ออนซ์ต่อมื้อ?',
    answer:
      'แรกเกิด: 1–2 ออนซ์ (30–60 มล.) ต่อมื้อ, อายุ 2 สัปดาห์: 2–3 ออนซ์, อายุ 1 เดือน: 3–4 ออนซ์, อายุ 2 เดือน: 4–5 ออนซ์ ปริมาณจะค่อยๆ เพิ่มขึ้นตามน้ำหนักและความต้องการของลูก',
  },
  {
    question: 'ควรให้นมตามเวลาหรือตามความต้องการลูก?',
    answer:
      'สำหรับเด็กแรกเกิด แนะนำให้นม "ตามความต้องการ" (on-demand) หรือทุก 2–3 ชั่วโมง ไม่ต้องรอให้ร้องมาก เมื่อลูกโตขึ้น (หลัง 3–4 เดือน) ตารางจะค่อยๆ ชัดเจนขึ้นเอง',
  },
  {
    question: 'ถ้าลูกแรกเกิดหลับนาน ควรปลุกให้กินนมไหม?',
    answer:
      'ใช่ สำหรับเด็กที่อายุน้อยกว่า 2 สัปดาห์หรือน้ำหนักยังไม่ขึ้นตามเกณฑ์ ควรปลุกทุก 3 ชั่วโมงเพื่อกินนม หลังจากที่น้ำหนักขึ้นดีแล้ว ไม่จำเป็นต้องปลุก',
  },
  {
    question: 'เด็กกินนมแม่รู้ได้อย่างไรว่ากินพอ?',
    answer:
      'สัญญาณว่ากินพอ: ผ้าอ้อมเปียก 6–8 ผืนต่อวัน, ขับถ่ายอย่างน้อยวันละ 1 ครั้ง, น้ำหนักขึ้น 150–200 กรัมต่อสัปดาห์, ดูพอใจและสงบหลังกินนม',
  },
  {
    question: 'ทำไมเด็กแรกเกิดต้องกินนมบ่อยมาก?',
    answer:
      'กระเพาะอาหารของทารกแรกเกิดมีขนาดเท่าลูกแก้วตา จุได้แค่ 5–7 มล. นมแม่ย่อยได้เร็วมาก (1–1.5 ชั่วโมง) ทำให้หิวบ่อย เป็นเรื่องปกติของธรรมชาติ ไม่ใช่ปัญหา',
  },
]

export default function NewbornFeedingSchedulePage() {
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
        { label: 'ตารางให้นมเด็กแรกเกิด' },
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
        <strong>องค์การอนามัยโลก (WHO)</strong> และ{' '}
        <strong>กรมอนามัย กระทรวงสาธารณสุข</strong>
      </div>

      <p>
        "ต้องให้นมทุกกี่ชั่วโมง? กี่ออนซ์?" เป็นคำถามแรกๆ ที่พ่อแม่มือใหม่ถาม
        ตารางการให้นมที่ถูกต้องในช่วงแรกมีผลโดยตรงต่อน้ำหนักและพัฒนาการของลูก
      </p>
      <p>
        บทความนี้เป็น "ศูนย์กลาง" ข้อมูลตารางให้นมตั้งแต่แรกเกิดถึง 3 เดือน
        ทั้งสำหรับผู้ที่ให้นมแม่และนมผง
      </p>

      <h2 id="how-often">ให้นมบ่อยแค่ไหนในแต่ละช่วงอายุ?</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">อายุ</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ความถี่</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">จำนวนมื้อ/วัน</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ห้ามเว้นนาน</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['แรกเกิด – 1 สัปดาห์', 'ทุก 1.5–3 ชม.', '8–12 มื้อ', '3 ชม. (กลางวัน)'],
              ['1–2 สัปดาห์', 'ทุก 2–3 ชม.', '8–10 มื้อ', '3 ชม. (กลางวัน)'],
              ['1 เดือน', 'ทุก 2–3 ชม.', '7–8 มื้อ', '4 ชม. (กลางคืน)'],
              ['2 เดือน', 'ทุก 3–4 ชม.', '6–7 มื้อ', '5 ชม. (กลางคืน)'],
              ['3 เดือน', 'ทุก 3–4 ชม.', '5–6 มื้อ', '6 ชม. (กลางคืน)'],
            ].map(([age, freq, meals, max]) => (
              <tr key={age} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{age}</td>
                <td className="px-4 py-3 font-bold text-blue-600">{freq}</td>
                <td className="px-4 py-3 text-gray-600">{meals}</td>
                <td className="px-4 py-3 text-gray-600">{max}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="amount-table">ตารางปริมาณนมผง 0–3 เดือน</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">อายุ</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ปริมาณต่อมื้อ</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">รวม/วัน</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['แรกเกิด (วันที่ 1–3)', '5–15 มล.', '100–200 มล.'],
              ['วันที่ 3–7', '30–60 มล.', '300–500 มล.'],
              ['1–2 สัปดาห์', '45–90 มล.', '400–600 มล.'],
              ['1 เดือน', '60–120 มล.', '480–720 มล.'],
              ['2 เดือน', '90–150 มล.', '540–750 มล.'],
              ['3 เดือน', '120–180 มล.', '600–800 มล.'],
            ].map(([age, amount, total]) => (
              <tr key={age} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{age}</td>
                <td className="px-4 py-3 font-bold text-blue-600">{amount}</td>
                <td className="px-4 py-3 text-gray-600">{total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-500">
        ตัวเลขเหล่านี้เป็นค่าเฉลี่ย ลูกบางคนต้องการมากหรือน้อยกว่านี้ ให้ดูสัญญาณอิ่มของลูกเสมอ
      </p>

      <h2 id="breastfed-schedule">ตารางสำหรับเด็กที่กินนมแม่</h2>
      <p>
        สำหรับเด็กที่กินนมแม่ หลักการสำคัญคือ <strong>ให้นม "on-demand"</strong> — เมื่อลูกหิว
        ไม่ใช่ตามตารางเวลา แต่ในทางปฏิบัติ ควรให้นมอย่างน้อยทุก 2–3 ชั่วโมงในเดือนแรก:
      </p>
      <ul>
        <li>
          <strong>ข้างละกี่นาที?</strong> — ให้ลูกดูดจนเสร็จข้างหนึ่ง แล้วสลับอีกข้าง
          อย่ากำหนดเวลาตายตัว เพราะ hindmilk (นมท้ายมื้อที่มีไขมันสูง) ต้องใช้เวลาหน่อยกว่าจะออกมา
        </li>
        <li>
          <strong>วิธีจำว่าให้เต้าไหนครั้งที่แล้ว</strong> — ใส่ยางวงในข้อมือข้างที่ให้เต้าสุดท้าย
          หรือใช้แอพบันทึกการกินนม
        </li>
        <li>
          <strong>สัญญาณน้ำนมมาพอ</strong> — เต้าแน่นก่อนให้นม นุ่มหลังให้นม ลูกกลืนให้ได้ยินเสียง
        </li>
      </ul>

      <h2 id="formula-schedule">ตารางตัวอย่างสำหรับเด็กที่กินนมผง</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">เวลา</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ปริมาณ (1 เดือน)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['06:00–07:00', '90 มล.'],
              ['09:00–10:00', '90 มล.'],
              ['12:00–13:00', '90 มล.'],
              ['15:00–16:00', '90 มล.'],
              ['18:00–19:00', '90 มล.'],
              ['21:00–22:00', '90 มล.'],
              ['00:00–01:00', '90 มล.'],
              ['03:00–04:00', '90 มล.'],
            ].map(([time, amount]) => (
              <tr key={time} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold text-blue-700">{time}</td>
                <td className="px-4 py-3 font-bold text-gray-800">{amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>รวม: 8 มื้อ × 90 มล. = 720 มล./วัน — เหมาะสำหรับเด็กน้ำหนัก 4–4.5 กก.</p>

      <h2 id="night-feeds">การให้นมกลางคืน</h2>
      <p>
        การให้นมกลางคืนเป็นเรื่องปกติและจำเป็นสำหรับเด็กแรกเกิด:
      </p>
      <ul>
        <li><strong>แรกเกิด – 1 เดือน</strong> — ตื่นกินนม 2–3 ครั้งต่อคืน เป็นเรื่องปกติสมบูรณ์</li>
        <li><strong>2 เดือน</strong> — อาจลดเหลือ 1–2 ครั้ง บางคนเริ่มนอนช่วง 4–5 ชั่วโมงต่อเนื่อง</li>
        <li><strong>3 เดือน</strong> — บางคนเริ่มนอนยาวขึ้น แต่ยังต้องการกินกลางดึก 1 ครั้ง</li>
      </ul>
      <p>
        <strong>เคล็ดลับกลางคืน:</strong> ลดแสงและเสียงให้น้อยที่สุด เปลี่ยนผ้าอ้อมก่อนให้นม
        (เพื่อให้ลูกตื่นมากินนมได้เต็มที่ แล้วหลับใหม่ได้เร็ว) และหลีกเลี่ยงการโต้ตอบหรือเล่นกลางดึก
      </p>

      <h2 id="hunger-signs">สัญญาณหิวที่ควรรู้</h2>
      <p>ให้นมก่อนที่ลูกจะร้อง ร้องเป็นสัญญาณสุดท้ายที่ควรหลีกเลี่ยง:</p>
      <ul>
        <li><strong>ระยะเริ่มต้น</strong> — ตื่นขึ้น, ขยับตัว, เปิดตา</li>
        <li><strong>ระยะกลาง</strong> — หันหัวมองหาเต้า/ขวด (rooting), ดูดมือ, เปิดปากจ้วบจ้วบ</li>
        <li><strong>ระยะสุดท้าย</strong> — ร้องไห้ (ยากที่จะปลอบและให้นมในสภาวะนี้)</li>
      </ul>

      <p>
        ดูข้อมูลปริมาณนมที่เฉพาะเจาะจงสำหรับแต่ละเดือนได้ที่:
      </p>
      <ul>
        <li>
          <Link href="/blog/baby-feeding-1-month">เด็ก 1 เดือนกินนมกี่ออนซ์</Link>
        </li>
        <li>
          <Link href="/blog/baby-feeding-2-months">เด็ก 2 เดือนกินนมกี่ออนซ์</Link>
        </li>
        <li>
          <Link href="/blog/baby-feeding-3-months">เด็ก 3 เดือนกินนมกี่ออนซ์</Link>
        </li>
      </ul>
      <p>
        อ่านเพิ่มเติมเรื่องนมแม่กับนมผงได้ที่{' '}
        <Link href="/blog/breastmilk-vs-formula">นมแม่ vs นมผง ต่างกันอย่างไร?</Link>
      </p>

      <h2 id="faq">คำถามที่พบบ่อย</h2>
      <FAQ items={FAQ_ITEMS} />
    </BlogLayout>
  )
}
