import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import FAQ from '@/components/FAQ'
import { articleSchema, faqSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem, TOCItem } from '@/types'

const SLUG = 'nursery-cost-thailand'
const TITLE = 'ค่าเนอสเซอรี่ในไทย 2026 เท่าไร? รัฐ 500 บ. – นานาชาติ 50,000 บ./เดือน'
const DESCRIPTION =
  'ค่าเนอสเซอรี่ในกรุงเทพและทั่วไทย ปี 2026: รัฐ 500–3,000 บ., เอกชน 5,000–15,000 บ., นานาชาติ 25,000–50,000 บ./เดือน พร้อมค่าแรกเข้า ค่าใช้จ่ายแฝง และวิธีเลือกเนอสเซอรี่ที่เหมาะกับงบ'
const DATE = '2026-06-22'
const URL = `/blog/${SLUG}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'ค่าเนอสเซอรี่ไทย',
    'ค่าเรียนเนอสเซอรี่เท่าไร',
    'เนอสเซอรี่กรุงเทพราคา',
    'nursery ราคา',
    'ค่าฝากเลี้ยงเด็ก',
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
  { id: 'types', label: 'ประเภทเนอสเซอรี่และช่วงราคา' },
  { id: 'bangkok', label: 'ราคาเนอสเซอรี่กรุงเทพ vs ต่างจังหวัด' },
  { id: 'hidden', label: 'ค่าใช้จ่ายแฝงที่ต้องรู้' },
  { id: 'how-to-choose', label: 'วิธีเลือกเนอสเซอรี่ที่เหมาะสม' },
  { id: 'alternatives', label: 'ทางเลือกอื่นนอกจากเนอสเซอรี่' },
  { id: 'budget-tips', label: 'เคล็ดลับประหยัดค่าเนอสเซอรี่' },
  { id: 'faq', label: 'คำถามที่พบบ่อย' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'เนอสเซอรี่รัฐในไทยมีราคาเท่าไร?',
    answer:
      'เนอสเซอรี่รัฐ (ศูนย์พัฒนาเด็กเล็ก) มีค่าใช้จ่ายประมาณ 500–3,000 บาท/เดือน ส่วนใหญ่รับเด็กอายุ 2–5 ปี บางแห่งรับตั้งแต่ 3 เดือน ค่าอาหารกลางวันมักรวมอยู่แล้ว',
  },
  {
    question: 'เนอสเซอรี่เอกชนในกรุงเทพราคาเฉลี่ยเท่าไร?',
    answer:
      'เนอสเซอรี่เอกชนในกรุงเทพราคา 5,000–25,000 บาท/เดือน ขึ้นอยู่กับทำเล สิ่งอำนวยความสะดวก และหลักสูตร เนอสเซอรี่นานาชาติราคา 15,000–50,000 บาท/เดือน',
  },
  {
    question: 'เนอสเซอรี่รับเด็กอายุน้อยที่สุดเท่าไร?',
    answer:
      'เนอสเซอรี่ส่วนใหญ่รับเด็กตั้งแต่อายุ 3 เดือน บางแห่งรับตั้งแต่ 6 สัปดาห์ ควรสอบถามแต่ละแห่งโดยตรง เพราะข้อกำหนดต่างกัน',
  },
  {
    question: 'ค่าเนอสเซอรี่รวมค่าอาหารด้วยไหม?',
    answer:
      'แตกต่างกันมาก บางแห่งรวมอาหาร 3 มื้อ บางแห่งรวมแค่อาหารกลางวัน บางแห่งไม่รวมและต้องจ่ายเพิ่ม ควรถามให้ชัดเจนก่อนสมัคร ค่าอาหารอาจเพิ่มขึ้น 1,000–3,000 บาท/เดือน',
  },
  {
    question: 'เนอสเซอรี่ควรดูอะไรบ้างก่อนตัดสินใจ?',
    answer:
      'สิ่งที่ควรตรวจสอบ: ใบอนุญาตและการรับรองจากกรมสวัสดิการสังคม อัตราส่วนครู:เด็ก (ควรไม่เกิน 1:4 สำหรับทารก), ความปลอดภัยของสิ่งแวดล้อม, นโยบายสุขภาพและวัคซีน, ชั่วโมงเปิด-ปิด',
  },
  {
    question: 'คนเลี้ยงเด็กที่บ้าน (พี่เลี้ยง) vs เนอสเซอรี่ อันไหนถูกกว่า?',
    answer:
      'ขึ้นอยู่กับราคาในพื้นที่ พี่เลี้ยงเด็กในกรุงเทพราคา 10,000–20,000 บาท/เดือน เนอสเซอรี่เอกชนราคา 8,000–15,000 บาท/เดือน ถ้ามีลูกมากกว่า 1 คน พี่เลี้ยงอาจคุ้มค่ากว่า แต่เนอสเซอรี่ดีกว่าสำหรับพัฒนาการสังคม',
  },
  {
    question: 'เนอสเซอรี่ในกรุงเทพราคาเฉลี่ยเท่าไร ปี 2026?',
    answer:
      'เนอสเซอรี่เอกชนในกรุงเทพราคาเฉลี่ย 8,000–15,000 บาท/เดือน สำหรับทำเลชานเมือง และ 15,000–25,000 บาท/เดือน สำหรับใจกลางเมือง เนอสเซอรี่นานาชาติราคา 25,000–50,000 บาท/เดือนขึ้นไป ศูนย์พัฒนาเด็กเล็กของรัฐในกรุงเทพราคาใกล้เคียงต่างจังหวัดที่ 500–3,000 บาท/เดือน',
  },
]

export default function NurseryCostThailandPage() {
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
        { label: 'ค่าเนอสเซอรี่ในไทย' },
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
        ข้อมูลในบทความนี้อ้างอิงจากการสำรวจราคาในตลาด และ{' '}
        <strong>กรมสวัสดิการและคุ้มครองแรงงาน</strong> ราคาเป็นการประมาณที่อาจแตกต่างตามพื้นที่
      </div>

      <p>
        หากคุณกำลังสงสัยว่า &ldquo;ค่าเนอสเซอรี่ในไทยปี 2026 เท่าไร&rdquo;
        คำตอบคือประมาณ <strong>500–50,000 บาทต่อเดือน</strong> ขึ้นอยู่กับประเภทและพื้นที่:
        ศูนย์พัฒนาเด็กเล็กของรัฐ 500–3,000 บาท, เนอสเซอรี่เอกชน 5,000–25,000 บาท
        และเนอสเซอรี่นานาชาติ 25,000–50,000 บาทขึ้นไป
        กรุงเทพมีราคาสูงกว่าต่างจังหวัดโดยเฉลี่ย 2–3 เท่า
      </p>

      <p>
        ค่าเนอสเซอรี่มักเป็นค่าใช้จ่ายที่ใหญ่ที่สุดสำหรับครอบครัวที่ทั้งพ่อแม่ทำงาน
        และยังเป็นสิ่งที่วางแผนล่วงหน้าได้ยากที่สุด เพราะราคาและคุณภาพต่างกันมาก
        บทความนี้รวบรวมข้อมูลทั้งหมดเพื่อให้ตัดสินใจได้อย่างมีข้อมูล
      </p>

      <h2 id="types">ประเภทเนอสเซอรี่และช่วงราคา</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ประเภท</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ราคาต่อเดือน</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">อัตราครู:เด็ก</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ข้อดีหลัก</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['ศูนย์พัฒนาเด็กเล็ก (รัฐ)', '500–3,000 บ.', '1:10–1:15', 'ราคาถูก มาตรฐานรัฐ'],
              ['เนอสเซอรี่เอกชนขนาดเล็ก', '3,000–8,000 บ.', '1:5–1:8', 'ยืดหยุ่น ราคาพอรับได้'],
              ['เนอสเซอรี่เอกชนขนาดกลาง', '8,000–15,000 บ.', '1:3–1:5', 'สมดุลคุณภาพ-ราคา'],
              ['เนอสเซอรี่พรีเมียม', '15,000–30,000 บ.', '1:2–1:4', 'สิ่งแวดล้อมดีเยี่ยม'],
              ['เนอสเซอรี่นานาชาติ', '25,000–50,000+ บ.', '1:2–1:3', 'ภาษาที่สอง หลักสูตรสากล'],
            ].map(([type, price, ratio, pros]) => (
              <tr key={type} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{type}</td>
                <td className="px-4 py-3 font-bold text-blue-600">{price}</td>
                <td className="px-4 py-3 text-gray-600">{ratio}</td>
                <td className="px-4 py-3 text-gray-600">{pros}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="bangkok">ราคาเนอสเซอรี่กรุงเทพ vs ต่างจังหวัด</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">พื้นที่</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ราคาต่ำสุด</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ราคาเฉลี่ย</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ราคาสูงสุด</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['กรุงเทพ (ใจกลางเมือง)', '5,000 บ.', '15,000 บ.', '50,000+ บ.'],
              ['กรุงเทพ (ชานเมือง)', '3,000 บ.', '8,000 บ.', '25,000 บ.'],
              ['เมืองใหญ่ (เชียงใหม่ ขอนแก่น)', '2,000 บ.', '6,000 บ.', '20,000 บ.'],
              ['ต่างจังหวัด (ระดับอำเภอ)', '1,000 บ.', '3,000 บ.', '10,000 บ.'],
            ].map(([area, low, avg, high]) => (
              <tr key={area} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{area}</td>
                <td className="px-4 py-3 text-gray-600">{low}</td>
                <td className="px-4 py-3 font-bold text-blue-600">{avg}</td>
                <td className="px-4 py-3 text-gray-600">{high}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="hidden">ค่าใช้จ่ายแฝงที่หลายคนไม่รู้</h2>
      <p>
        นอกจากค่าเทอมรายเดือน ยังมีค่าใช้จ่ายอื่นที่ต้องคำนวณ:
      </p>
      <ul>
        <li><strong>ค่าแรกเข้า / ค่าลงทะเบียน</strong> — 2,000–30,000 บาท จ่ายครั้งเดียว</li>
        <li><strong>ค่าอุปกรณ์และเครื่องแบบ</strong> — 500–5,000 บาท/ปี</li>
        <li><strong>ค่าอาหาร</strong> — ถ้าไม่รวมในค่าเทอม เพิ่มขึ้น 1,000–3,000 บาท/เดือน</li>
        <li><strong>ค่ากิจกรรมพิเศษ</strong> — งานทัศนศึกษา วันพิเศษ 500–3,000 บาท/ปี</li>
        <li><strong>ค่าผ้าอ้อม</strong> — บางแห่งต้องนำผ้าอ้อมมาเอง</li>
        <li><strong>ค่า daycare ในวันหยุดนักขัตฤกษ์</strong> — บางแห่งไม่รับในวันหยุด</li>
      </ul>

      <h2 id="how-to-choose">วิธีเลือกเนอสเซอรี่ที่เหมาะสม</h2>
      <p>เกณฑ์การเลือกเนอสเซอรี่ที่ดี:</p>
      <ol>
        <li>
          <strong>ใบอนุญาตและการรับรอง</strong> — ต้องมีใบอนุญาตจากกรมสวัสดิการสังคม
          หรือกรมพัฒนาสังคมและสวัสดิการ
        </li>
        <li>
          <strong>อัตราส่วนครู:เด็ก</strong> — ทารก (0–1 ปี) ควร 1:3 หรือดีกว่า,
          เด็กเล็ก (1–2 ปี) ควร 1:4 หรือดีกว่า
        </li>
        <li>
          <strong>ความปลอดภัย</strong> — ประตูกั้น กล้องวงจรปิด อุปกรณ์ไฟฟ้าปลอดภัย
        </li>
        <li>
          <strong>ความสะอาดและสุขาภิบาล</strong> — ห้องเปลี่ยนผ้าอ้อม ห้องนอน ห้องครัว
        </li>
        <li>
          <strong>ประสบการณ์ครู</strong> — ครูมีวุฒิการศึกษาหรือการฝึกอบรมด้านพัฒนาการเด็กหรือไม่
        </li>
        <li>
          <strong>นโยบายการสื่อสาร</strong> — มีการอัปเดตรูปภาพ/วิดีโอให้ผู้ปกครองไหม
        </li>
      </ol>

      <h2 id="alternatives">ทางเลือกอื่นนอกจากเนอสเซอรี่</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ทางเลือก</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ราคาประมาณ</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ข้อดี</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ข้อเสีย</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['พ่อแม่ดูแลเอง', '0 บ.', 'ไม่มีค่าใช้จ่าย ผูกพันสูง', 'พ่อแม่ต้องหยุดงาน'],
              ['ปู่ย่าตายายดูแล', '0–3,000 บ.', 'ไว้ใจได้ คุ้นเคย', 'อาจมีความเห็นต่างในการเลี้ยง'],
              ['พี่เลี้ยงที่บ้าน', '10,000–20,000 บ./เดือน', 'ดูแลเฉพาะลูก', 'ราคาสูง ต้องสัมภาษณ์เอง'],
              ['นำลูกไปฝากที่ทำงาน', 'แตกต่างกัน', 'สะดวก ใกล้', 'มีน้อยมากในไทย'],
            ].map(([alt, price, pros, cons]) => (
              <tr key={alt} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{alt}</td>
                <td className="px-4 py-3 font-bold text-blue-600">{price}</td>
                <td className="px-4 py-3 text-green-600">{pros}</td>
                <td className="px-4 py-3 text-red-600">{cons}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="budget-tips">เคล็ดลับประหยัดค่าเนอสเซอรี่</h2>
      <ul>
        <li><strong>ลงทะเบียนล่วงหน้า</strong> — เนอสเซอรี่ดีๆ มักเต็มเร็ว ลงทะเบียนล่วงหน้า 6–12 เดือน</li>
        <li><strong>เลือกทำเลที่ใกล้บ้านหรือที่ทำงาน</strong> — ลดเวลาเดินทางและค่าน้ำมัน</li>
        <li><strong>ถามเรื่องส่วนลดพี่น้อง</strong> — หลายแห่งให้ส่วนลดถ้าส่งลูกมากกว่า 1 คน</li>
        <li><strong>ลองเนอสเซอรี่ชุมชน</strong> — คุณภาพอาจดีกว่าที่คิด ในราคาที่ถูกกว่ามาก</li>
        <li><strong>ใช้สิทธิลดหย่อนภาษี</strong> — ค่าเนอสเซอรี่สามารถนำไปลดหย่อนภาษีได้ (ตรวจสอบกับกรมสรรพากร)</li>
      </ul>

      <p>
        ดูค่าใช้จ่ายรายเดือนรวมทั้งหมดสำหรับลูกวัย 1–2 ปีได้ที่{' '}
        <Link href="/blog/monthly-toddler-budget">งบเลี้ยงลูกวัยหัดเดิน (1–2 ปี)</Link>
      </p>
      <p>
        ดูค่าใช้จ่ายทั้งหมดวัย 1–2 ปีได้ที่{' '}
        <Link href="/blog/baby-expenses-1-2-years">ค่าใช้จ่ายลูก 1–2 ปี</Link>
      </p>
      <p>
        สำหรับพ่อแม่ที่วางแผนก่อนมีลูก ดูภาพรวมทั้งหมดได้ที่{' '}
        <Link href="/blog/baby-first-year-expenses">ค่าใช้จ่ายมีลูกปีแรก เตรียมเงินเท่าไร?</Link>{' '}
        และ{' '}
        <Link href="/blog/monthly-baby-budget">งบประมาณเลี้ยงลูกต่อเดือน</Link>
      </p>

      <h2 id="faq">คำถามที่พบบ่อย</h2>
      <FAQ items={FAQ_ITEMS} />
    </BlogLayout>
  )
}
