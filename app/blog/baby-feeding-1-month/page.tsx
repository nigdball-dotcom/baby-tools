import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import FAQ from '@/components/FAQ'
import { articleSchema, faqSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem, TOCItem } from '@/types'

const SLUG = 'baby-feeding-1-month'
const TITLE = 'เด็ก 1 เดือนกินนมกี่ออนซ์? ตารางการให้นมที่ถูกต้อง'
const DESCRIPTION =
  'เด็กอายุ 1 เดือนที่กินนมผงกินเฉลี่ย 2–3 ออนซ์ต่อมื้อ วันละ 8–12 มื้อ บทความนี้อธิบายปริมาณนมที่เหมาะสม ตารางให้นม สัญญาณหิวและอิ่ม สำหรับทั้งนมแม่และนมผง'
const DATE = '2026-06-22'
const URL = `/blog/${SLUG}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'เด็ก 1 เดือนกินนมกี่ออนซ์',
    'ทารก 1 เดือนกินนม',
    'ตารางให้นมเด็ก 1 เดือน',
    'นมผง 1 เดือน',
    'เด็ก 1 เดือนกินนมบ่อยแค่ไหน',
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
  { id: 'formula-amount', label: 'เด็ก 1 เดือนกินนมผงกี่ออนซ์?' },
  { id: 'breastfed', label: 'เด็กที่กินนมแม่ให้บ่อยแค่ไหน?' },
  { id: 'schedule', label: 'ตัวอย่างตารางให้นม' },
  { id: 'hunger-signs', label: 'สัญญาณหิวและอิ่ม' },
  { id: 'weight-gain', label: 'น้ำหนักและการกินนม' },
  { id: 'tips', label: 'เคล็ดลับการให้นมเด็ก 1 เดือน' },
  { id: 'faq', label: 'คำถามที่พบบ่อย' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'เด็ก 1 เดือนกินนมผงกี่ออนซ์ต่อมื้อ?',
    answer:
      'เด็กอายุ 1 เดือนที่กินนมผงกินเฉลี่ย 2–3 ออนซ์ (60–90 มล.) ต่อมื้อ วันละ 8–12 มื้อ รวมประมาณ 18–24 ออนซ์ต่อวัน แต่อาจแตกต่างกันในแต่ละคน ให้สังเกตสัญญาณอิ่มของลูกเป็นหลัก',
  },
  {
    question: 'เด็ก 1 เดือนที่กินนมแม่ให้นมบ่อยแค่ไหน?',
    answer:
      'เด็กที่กินนมแม่ควรให้นมทุก 2–3 ชั่วโมง หรือวันละ 8–12 ครั้ง ในช่วงแรก ไม่ควรรอนานกว่า 3 ชั่วโมงในกลางวัน และ 4 ชั่วโมงในกลางคืน (สำหรับเด็กที่น้ำหนักขึ้นดีแล้ว)',
  },
  {
    question: 'รู้ได้อย่างไรว่าลูก 1 เดือนกินนมพอ?',
    answer:
      'สัญญาณที่บอกว่าลูกกินนมพอ: ผ้าอ้อมเปียก 6–8 ผืนต่อวัน, ขับถ่ายวันละ 3–4 ครั้ง (เด็กกินนมแม่อาจถ่ายทุกมื้อ), น้ำหนักขึ้น 150–200 กรัมต่อสัปดาห์, ดูสดชื่นเมื่อตื่น',
  },
  {
    question: 'เด็ก 1 เดือนต้องกินนมกลางดึกไหม?',
    answer:
      'ใช่ เด็ก 1 เดือนต้องกินนมกลางคืนทุก 2–3 ชั่วโมง กระเพาะอาหารเล็กมาก จุได้แค่ 60–90 มล. จึงหิวเร็ว ไม่ควรพยายามให้ลูกนอนทั้งคืนโดยไม่กินนมในวัยนี้',
  },
  {
    question: 'เด็ก 1 เดือนควรดูดจุกนิ่มหรือเปล่า?',
    answer:
      'สำหรับเด็กที่กินนมแม่ ผู้เชี่ยวชาญแนะนำให้รอจน "การให้นม" มั่นคงดีก่อน (ประมาณ 3–4 สัปดาห์) แล้วค่อยเริ่มให้จุกนิ่ม เพื่อป้องกัน nipple confusion สำหรับเด็กที่กินนมผง สามารถให้จุกนิ่มได้ตั้งแต่แรก',
  },
  {
    question: 'นมผงสำหรับเด็ก 1 เดือนใช้ปริมาณน้ำผสมเท่าไร?',
    answer:
      'โดยทั่วไปใช้ผงนม 1 ช้อนตวง (scoop) ต่อน้ำ 30 มล. (1 ออนซ์) แต่ต้องตรวจสอบคำแนะนำบนกล่องนมผงแต่ละยี่ห้อ เพราะอัตราส่วนอาจแตกต่างกัน ห้ามเพิ่มหรือลดอัตราส่วนเอง',
  },
]

export default function BabyFeeding1MonthPage() {
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
        { label: 'เด็ก 1 เดือนกินนมกี่ออนซ์?' },
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
        "ลูกกินนมพอไหม?" เป็นคำถามที่พ่อแม่มือใหม่ถามมากที่สุดในเดือนแรก
        โดยเฉพาะเมื่อลูกร้องบ่อยหรือนอนไม่หลับ ความกังวลนี้เป็นเรื่องปกติและแสดงให้เห็นว่าคุณใส่ใจลูก
      </p>
      <p>
        บทความนี้ให้ข้อมูลปริมาณนมที่เหมาะสมสำหรับเด็กอายุ 1 เดือน
        ทั้งสำหรับผู้ที่ให้นมแม่และนมผง พร้อมสัญญาณที่บอกว่าลูกกินพอหรือไม่
      </p>

      <div className="not-prose mb-6 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-800">
        <strong>บทความนี้เน้นปริมาณการกินนมของเด็ก 1 เดือนโดยเฉพาะ</strong> — ดูตารางการให้นมเด็กแรกเกิดครบทุกช่วงอายุที่{' '}
        <Link href="/blog/newborn-feeding-schedule" className="font-semibold underline">
          ตารางให้นมเด็กแรกเกิด
        </Link>
      </div>

      <h2 id="formula-amount">เด็ก 1 เดือนกินนมผงกี่ออนซ์ต่อมื้อ?</h2>
      <p>
        ปริมาณนมผงสำหรับเด็กอายุ 1 เดือนควรอิงตามน้ำหนักตัวของลูก:
      </p>

      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">อายุ/น้ำหนัก</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ปริมาณต่อมื้อ</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">จำนวนมื้อ/วัน</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">รวม/วัน</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['แรกเกิด – 2 สัปดาห์', '30–60 มล. (1–2 ออนซ์)', '8–12 มื้อ', '240–480 มล.'],
              ['2–4 สัปดาห์', '60–90 มล. (2–3 ออนซ์)', '8–10 มื้อ', '480–720 มล.'],
              ['1 เดือน (3–4 กก.)', '90–120 มล. (3–4 ออนซ์)', '7–8 มื้อ', '540–720 มล.'],
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
        <strong>สูตรอ้างอิง:</strong> ปริมาณนมผงต่อวัน = น้ำหนักตัว (กก.) × 150–200 มล.
        เช่น ลูกน้ำหนัก 4 กก. = 600–800 มล./วัน แบ่งเป็น 7–8 มื้อ = มื้อละ 75–100 มล.
      </p>
      <p>
        <strong>สำคัญ:</strong> ตัวเลขเหล่านี้เป็นค่าเฉลี่ย ลูกบางคนกินน้อยกว่าหรือมากกว่า
        ให้ฟังสัญญาณอิ่มของลูก อย่าบังคับให้กินจนหมดขวด
      </p>

      <h2 id="breastfed">เด็กที่กินนมแม่ให้นมบ่อยแค่ไหน?</h2>
      <p>
        สำหรับเด็กที่กินนมแม่ ไม่สามารถวัดปริมาณได้แน่นอน แต่มีแนวทางดังนี้:
      </p>
      <ul>
        <li><strong>ความถี่</strong> — ให้นมทุก 2–3 ชั่วโมง หรือ 8–12 ครั้งต่อวัน</li>
        <li><strong>ระยะเวลาต่อมื้อ</strong> — 10–20 นาทีต่อข้าง หรือจนลูกหยุดดูดเอง</li>
        <li><strong>สลับเต้า</strong> — เริ่มจากเต้าที่ให้ครั้งล่าสุดค้างไว้ เพื่อให้ได้ hindmilk ที่มีไขมันสูง</li>
        <li><strong>ให้ตามสัญญาณหิว</strong> — ไม่ต้องรอครบ 3 ชั่วโมงถ้าลูกหิว</li>
      </ul>
      <p>
        อ่านเพิ่มเติมเรื่องข้อดีข้อเสียของนมแม่และนมผงได้ที่{' '}
        <Link href="/blog/breastmilk-vs-formula">นมแม่ vs นมผง ต่างกันอย่างไร?</Link>
      </p>

      <h2 id="schedule">ตัวอย่างตารางให้นมเด็ก 1 เดือน</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">เวลา</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">มื้อ</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ปริมาณ (นมผง)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['07:00', 'มื้อที่ 1', '60–90 มล.'],
              ['10:00', 'มื้อที่ 2', '60–90 มล.'],
              ['13:00', 'มื้อที่ 3', '60–90 มล.'],
              ['16:00', 'มื้อที่ 4', '60–90 มล.'],
              ['19:00', 'มื้อที่ 5', '60–90 มล.'],
              ['22:00', 'มื้อที่ 6 (ก่อนพ่อแม่นอน)', '60–90 มล.'],
              ['02:00', 'มื้อที่ 7 (กลางดึก)', '60–90 มล.'],
              ['05:00', 'มื้อที่ 8 (เช้ามืด)', '60–90 มล.'],
            ].map(([time, meal, amount]) => (
              <tr key={time} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold text-blue-700 whitespace-nowrap">{time}</td>
                <td className="px-4 py-3 text-gray-700">{meal}</td>
                <td className="px-4 py-3 font-bold text-gray-800">{amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="hunger-signs">สัญญาณหิวและสัญญาณอิ่ม</h2>
      <p><strong>สัญญาณหิว (ให้นมได้เลย อย่ารอให้ร้อง):</strong></p>
      <ul>
        <li>หันหัวมองซ้ายขวา (rooting reflex)</li>
        <li>เอามือเข้าปาก ดูดมือ</li>
        <li>ทำปากจ้วบจ้วบ</li>
        <li>กระสับกระส่าย</li>
        <li>ร้อง (สัญญาณหิวสุดท้าย — ให้นมก่อนถึงขั้นนี้)</li>
      </ul>
      <p><strong>สัญญาณอิ่ม (หยุดให้นมได้):</strong></p>
      <ul>
        <li>หยุดดูดเอง หรือดูดช้าลงมาก</li>
        <li>ผลักขวดหรือเต้าออก</li>
        <li>หลับขณะกินนม (ปกติในวัยนี้)</li>
        <li>มือที่กำอยู่เริ่มคลาย</li>
        <li>ดูผ่อนคลายและพอใจ</li>
      </ul>

      <h2 id="weight-gain">น้ำหนักและการกินนม</h2>
      <p>
        น้ำหนักเป็นตัวชี้วัดที่ดีที่สุดว่าลูกกินนมเพียงพอหรือไม่:
      </p>
      <ul>
        <li><strong>สัปดาห์ที่ 1</strong> — น้ำหนักลดลง 5–10% ของน้ำหนักแรกเกิด เป็นเรื่องปกติ</li>
        <li><strong>วันที่ 10–14</strong> — ควรกลับมาเท่าน้ำหนักแรกเกิด</li>
        <li><strong>อายุ 1 เดือน</strong> — ควรเพิ่มขึ้น 150–200 กรัมต่อสัปดาห์</li>
        <li><strong>เส้นกราฟ</strong> — สำคัญกว่าตัวเลข ควรอยู่ใน percentile เดิมอย่างสม่ำเสมอ</li>
      </ul>
      <p>
        พาลูกชั่งน้ำหนักที่คลินิกหรือรพ.ทุก 2 สัปดาห์ในเดือนแรก และทุกเดือนหลังจากนั้น
      </p>

      <h2 id="tips">เคล็ดลับการให้นมเด็ก 1 เดือน</h2>
      <ol>
        <li>
          <strong>Paced bottle feeding</strong> — สำหรับเด็กที่กินขวด ให้อุ้มลูกนั่งตัวตรงมากกว่าเอนหลัง
          และพักทุก 30–60 วินาที เพื่อให้ลูกรู้จักสัญญาณอิ่มของตัวเอง
        </li>
        <li>
          <strong>ไม่ต้องอุ่นนม</strong> — นมผงสามารถให้ในอุณหภูมิห้องได้ ไม่จำเป็นต้องอุ่น
          แต่ถ้าลูกชอบอุ่น ให้อุ่นด้วยน้ำอุ่น ไม่ใช่ไมโครเวฟ
        </li>
        <li>
          <strong>จดบันทึกในช่วงแรก</strong> — จดเวลาและปริมาณนม จำนวนผ้าอ้อมเปียก/อึ
          เพื่อติดตามว่าลูกกินพอไหม
        </li>
        <li>
          <strong>ผ้าอ้อมเปียกเป็นตัวชี้วัดที่ดี</strong> — เด็ก 1 เดือนควรเปียกผ้าอ้อม 6–8 ผืนต่อวัน
          ถ้าน้อยกว่า 5 ผืนต่อวันควรปรึกษาแพทย์
        </li>
      </ol>

      <p>
        ดูข้อมูลการนอนที่เหมาะสมสำหรับวัยนี้ได้ที่{' '}
        <Link href="/blog/baby-sleep-1-month">เด็ก 1 เดือนนอนกี่ชั่วโมง</Link>
      </p>

      <div className="not-prose my-6 rounded-2xl bg-blue-600 p-6 text-center text-white">
        <p className="font-bold text-lg">คำนวณค่าผ้าอ้อมรายเดือน</p>
        <p className="mt-2 text-blue-100 text-sm">
          เด็ก 1 เดือนใช้ผ้าอ้อม 8–12 ชิ้นต่อวัน คำนวณค่าใช้จ่ายได้เลย
        </p>
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
