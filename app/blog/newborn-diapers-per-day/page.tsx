import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import FAQ from '@/components/FAQ'
import { articleSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem, TOCItem } from '@/types'

const SLUG = 'newborn-diapers-per-day'
const TITLE = 'เด็กแรกเกิดใช้ผ้าอ้อมกี่ชิ้นต่อวัน? คู่มือฉบับสมบูรณ์ปี 2026'
const DESCRIPTION =
  'เด็กแรกเกิดใช้ผ้าอ้อมเฉลี่ย 8–12 ชิ้นต่อวัน คู่มือนี้อธิบายจำนวนผ้าอ้อมตามช่วงอายุ วิธีรู้ว่าต้องเปลี่ยน และเคล็ดลับประหยัดค่าใช้จ่าย'
const DATE = '2026-06-01'
const URL = `/blog/${SLUG}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'เด็กแรกเกิดใช้ผ้าอ้อมกี่ชิ้น',
    'ผ้าอ้อมเด็กแรกเกิดต่อวัน',
    'จำนวนผ้าอ้อมต่อวัน',
    'ผ้าอ้อมทารก',
  ],
  alternates: { canonical: `${SITE_URL}${URL}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}${URL}`,
    type: 'article',
    publishedTime: DATE,
    modifiedTime: '2026-06-22',
    locale: 'th_TH',
    siteName: SITE_NAME,
  },
}

const TOC: TOCItem[] = [
  { id: 'answer', label: 'คำตอบสั้นๆ: กี่ชิ้นต่อวัน?' },
  { id: 'by-age', label: 'จำนวนผ้าอ้อมตามช่วงอายุ' },
  { id: 'why-so-many', label: 'ทำไมทารกแรกเกิดถึงใช้เยอะ?' },
  { id: 'when-to-change', label: 'วิธีรู้ว่าถึงเวลาเปลี่ยนผ้าอ้อม' },
  { id: 'save-money', label: 'วิธีประหยัดค่าผ้าอ้อม' },
  { id: 'faq', label: 'คำถามที่พบบ่อย' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'เด็กแรกเกิดต้องเปลี่ยนผ้าอ้อมบ่อยแค่ไหน?',
    answer:
      'ควรเปลี่ยนผ้าอ้อมทุก 2–3 ชั่วโมง หรือทันทีเมื่อมีอุจจาระ เพื่อป้องกันผื่นผ้าอ้อมและการติดเชื้อ อย่าปล่อยให้ผ้าอ้อมเปียกนาน โดยเฉพาะในช่วงแรกเกิด',
  },
  {
    question: 'รู้ได้อย่างไรว่าผ้าอ้อมเต็มแล้ว?',
    answer:
      'ผ้าอ้อมสมัยใหม่หลายยี่ห้อมีแถบแสดงความชื้น (wetness indicator) ที่จะเปลี่ยนสีเมื่อผ้าอ้อมเปียก นอกจากนี้ สามารถรู้สึกได้จากน้ำหนักที่เพิ่มขึ้นหรือผ้าอ้อมที่ดูบวมมากขึ้น',
  },
  {
    question: 'ผ้าอ้อมแบบผ้าหรือแบบสำเร็จรูปดีกว่ากัน?',
    answer:
      'ผ้าอ้อมแบบผ้าช่วยประหยัดเงินในระยะยาวและเป็นมิตรกับสิ่งแวดล้อม แต่ต้องซักรีด ส่วนผ้าอ้อมสำเร็จรูปสะดวกกว่า ซับดีกว่า และเหมาะสำหรับการใช้งานประจำวันหรือเดินทาง พ่อแม่หลายคนเลือกใช้ทั้งสองแบบขึ้นอยู่กับสถานการณ์',
  },
  {
    question: 'ควรซื้อผ้าอ้อมไซส์แรกเกิดสำรองไว้มากแค่ไหน?',
    answer:
      'ไม่แนะนำให้ซื้อไซส์ Newborn (NB) ไว้มากเกินไป เพราะลูกจะใช้ไซส์นี้เพียง 1–4 สัปดาห์เท่านั้น แนะนำซื้อสำรอง 1–2 แพ็กก่อน แล้วค่อยซื้อเพิ่มหลังลูกคลอดถ้ายังต้องการ',
  },
]

export default function NewbornDiapersPerDayPage() {
  const schema = articleSchema({
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    datePublished: DATE,
    dateModified: '2026-06-22',
  })

  return (
    <BlogLayout
      slug={SLUG}
      title={TITLE}
      description={DESCRIPTION}
      date={DATE}
      readingTime="5 นาที"
      category="คำแนะนำสำหรับพ่อแม่"
      breadcrumbs={[
        { label: 'หน้าแรก', href: '/' },
        { label: 'บล็อก', href: '/blog' },
        { label: 'เด็กแรกเกิดใช้ผ้าอ้อมกี่ชิ้นต่อวัน?' },
      ]}
      toc={TOC}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <p>
        สำหรับพ่อแม่มือใหม่ คำถามยอดฮิตที่มักเกิดขึ้นก่อนลูกคลอดคือ <strong>"ลูกจะใช้ผ้าอ้อมกี่ชิ้นต่อวัน?"</strong>{' '}
        เพราะการวางแผนซื้อผ้าอ้อมให้เพียงพอโดยไม่สิ้นเปลืองเป็นเรื่องสำคัญสำหรับงบประมาณครอบครัว
      </p>

      <h2 id="answer">คำตอบสั้นๆ: กี่ชิ้นต่อวัน?</h2>
      <p>
        <strong>เด็กแรกเกิดใช้ผ้าอ้อมเฉลี่ย 8–12 ชิ้นต่อวัน</strong> ในสัปดาห์แรกอาจสูงถึง 12–15 ชิ้น
        เนื่องจากลำไส้ยังปรับตัวและระบบย่อยอาหารทำงานบ่อย แต่ตัวเลขนี้จะลดลงเรื่อยๆ ตามอายุ
      </p>

      <h2 id="by-age">จำนวนผ้าอ้อมตามช่วงอายุ</h2>
      <p>ตารางด้านล่างแสดงจำนวนผ้าอ้อมโดยประมาณตามช่วงอายุของลูกน้อย:</p>

      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ช่วงอายุ</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ชิ้น/วัน</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ชิ้น/เดือน (โดยประมาณ)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['แรกเกิด – 1 เดือน', '8–12', '240–365'],
              ['1–3 เดือน', '6–10', '180–305'],
              ['3–6 เดือน', '5–8', '150–245'],
              ['6–12 เดือน', '4–6', '120–183'],
              ['1–2 ปี', '3–5', '90–152'],
              ['2–3 ปี', '2–4', '60–122'],
            ].map(([age, per_day, per_month]) => (
              <tr key={age} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-800">{age}</td>
                <td className="px-4 py-3 text-gray-600">{per_day}</td>
                <td className="px-4 py-3 text-gray-600">{per_month}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        ใช้ตารางนี้เพื่อประมาณจำนวนผ้าอ้อมที่ต้องซื้อ แต่จำไว้ว่าเด็กแต่ละคนแตกต่างกัน
        บางคนอาจใช้มากหรือน้อยกว่านี้
      </p>
      <p>
        หากต้องการทราบว่าค่าใช้จ่ายในแต่ละช่วงอายุอยู่ที่เท่าไร อ่านต่อที่{' '}
        <Link href="/blog/monthly-diaper-cost">ผ้าอ้อมเด็กเดือนละกี่บาท?</Link>
      </p>

      <h2 id="why-so-many">ทำไมทารกแรกเกิดถึงใช้ผ้าอ้อมเยอะมาก?</h2>
      <p>มีเหตุผลหลักๆ สองประการ:</p>
      <ul>
        <li>
          <strong>กระเพาะปัสสาวะเล็กมาก</strong> — ทารกแรกเกิดมีกระเพาะปัสสาวะขนาดเพียงประมาณ 30 มล.
          ทำให้ฉี่บ่อยมาก
        </li>
        <li>
          <strong>ลำไส้ยังปรับตัว</strong> — ในช่วงแรก ลูกจะถ่ายบ่อยมาก โดยเฉพาะถ้าเลี้ยงด้วยนมแม่
          อาจถ่ายทุกครั้งหลังกินนม
        </li>
      </ul>

      <h2 id="when-to-change">วิธีรู้ว่าถึงเวลาเปลี่ยนผ้าอ้อม</h2>
      <p>สัญญาณที่บอกว่าต้องเปลี่ยนผ้าอ้อม:</p>
      <ul>
        <li>แถบแสดงความชื้น (wetness indicator) เปลี่ยนสีจากเหลืองเป็นน้ำเงิน</li>
        <li>รู้สึกว่าผ้าอ้อมหนักและบวมขึ้น</li>
        <li>ลูกร้องโดยไม่มีสาเหตุอื่น</li>
        <li>ได้กลิ่นหรือเห็นอุจจาระ</li>
      </ul>
      <p>
        <strong>เคล็ดลับ:</strong> เปลี่ยนผ้าอ้อมทุกครั้งก่อนหรือหลังให้นม เพื่อสร้างเป็นกิจวัตรที่สม่ำเสมอ
      </p>

      <h2 id="save-money">วิธีประหยัดค่าผ้าอ้อม</h2>
      <ul>
        <li><strong>ซื้อในปริมาณมาก (ยกลัง)</strong> เมื่อลูกอยู่ในไซส์นั้นอย่างน้อย 1–2 เดือนแล้ว</li>
        <li><strong>เปรียบเทียบราคาต่อชิ้น</strong> ไม่ใช่ราคาต่อแพ็ก เพราะแพ็กใหญ่มักคุ้มกว่าเสมอ</li>
        <li><strong>ลองยี่ห้อที่ประหยัดกว่า</strong> เช่น BabyLove หรือสโตร์แบรนด์ คุณภาพดีขึ้นมากในปัจจุบัน</li>
        <li>
          <strong>คำนวณด้วยเครื่องมือของเรา</strong> —{' '}
          <Link href="/tools/diaper-cost">เครื่องคำนวณค่าผ้าอ้อม</Link>{' '}
          ช่วยให้คุณเปรียบเทียบยี่ห้อต่างๆ ได้ทันที
        </li>
      </ul>

      <h2 id="faq">คำถามที่พบบ่อย</h2>
      <FAQ items={FAQ_ITEMS} />
    </BlogLayout>
  )
}
