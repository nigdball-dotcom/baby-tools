import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import FAQ from '@/components/FAQ'
import { articleSchema, faqSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem, TOCItem } from '@/types'

const SLUG = 'best-overnight-diaper'
const TITLE = 'ผ้าอ้อมกลางคืนยี่ห้อไหนดี? เปรียบเทียบ 5 ยี่ห้อ'
const DESCRIPTION =
  'เปรียบเทียบผ้าอ้อมสำหรับกลางคืน 5 ยี่ห้อยอดนิยมในไทย วิธีเลือกผ้าอ้อมที่ทำให้ลูกนอนหลับได้ทั้งคืนโดยไม่รั่ว และสัญญาณที่บอกว่าผ้าอ้อมที่ใช้อยู่ไม่เพียงพอสำหรับกลางคืน'
const DATE = '2026-06-22'
const URL = `/blog/${SLUG}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'ผ้าอ้อมกลางคืน',
    'ผ้าอ้อมกลางคืนยี่ห้อไหนดี',
    'overnight diaper ไทย',
    'ผ้าอ้อมซึมซับสูง',
    'ผ้าอ้อมนอนหลับได้ทั้งคืน',
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
  { id: 'why-different', label: 'ทำไมผ้าอ้อมกลางคืนต้องพิเศษ?' },
  { id: 'criteria', label: 'เกณฑ์การเลือกผ้าอ้อมกลางคืน' },
  { id: 'compare', label: 'เปรียบเทียบ 5 ยี่ห้อสำหรับกลางคืน' },
  { id: 'tips', label: 'เคล็ดลับให้ลูกนอนหลับทั้งคืน' },
  { id: 'signs', label: 'สัญญาณว่าผ้าอ้อมไม่เพียงพอ' },
  { id: 'faq', label: 'คำถามที่พบบ่อย' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'ผ้าอ้อมกลางคืนต่างจากผ้าอ้อมกลางวันอย่างไร?',
    answer:
      'ผ้าอ้อมกลางคืนออกแบบให้ซึมซับได้มากกว่า (มักเพิ่มขึ้น 20–40%) และกักเก็บได้นานกว่า 8–12 ชั่วโมงโดยไม่รั่ว บางรุ่นมีชั้นป้องกันพิเศษที่ด้านหลังเพื่อป้องกันการรั่วเวลานอนหงาย',
  },
  {
    question: 'ควรใส่ผ้าอ้อมกี่ชั่วโมงในตอนกลางคืน?',
    answer:
      'ผ้าอ้อมกลางคืนที่ดีควรอยู่ได้ 8–12 ชั่วโมงโดยไม่รั่ว สำหรับเด็กแรกเกิด อาจต้องเปลี่ยนทุก 3–4 ชั่วโมง เพราะปัสสาวะและอุจจาระบ่อยกว่า ใส่นานเกิน 12 ชั่วโมงไม่ควร เพราะความชื้นสะสมเพิ่มความเสี่ยงผื่น',
  },
  {
    question: 'Huggies Overnight หรือ MamyPoko Pants Extra Dry ดีกว่ากัน?',
    answer:
      'Huggies Overnight ซึมซับได้ดีกว่าสำหรับเด็กที่ปัสสาวะมาก MamyPoko Extra Dry บางกว่าและระบายอากาศดีกว่า เหมาะกับเด็กที่ผิวบอบบางหรืออากาศร้อน แนะนำให้ลองทั้งคู่ก่อนตัดสินใจ',
  },
  {
    question: 'ต้องใช้ผ้าอ้อมกลางคืนแยกต่างหาก หรือใช้ไซส์ใหญ่ขึ้นแทนได้ไหม?',
    answer:
      'บางคนใช้ผ้าอ้อมไซส์ใหญ่กว่าปกติ 1 ไซส์สำหรับกลางคืน ซึ่งทำให้ซึมซับได้มากกว่าเพราะมีวัสดุมากกว่า แต่อาจหลวมและรั่วตามรอยขาได้ วิธีที่ดีกว่าคือใช้ผ้าอ้อมที่ออกแบบมาสำหรับกลางคืนโดยเฉพาะ',
  },
  {
    question: 'ผ้าอ้อมรั่วกลางคืนบ่อยๆ ต้องทำอย่างไร?',
    answer:
      'ตรวจสอบ: 1) ไซส์ถูกต้องไหม (น้ำหนักตัวอยู่ในช่วงที่ระบุ) 2) ใส่ถูกต้องไหม (กางเกงรั้งขึ้น ขอบขาไม่พับ) 3) รุ่นที่ใช้เหมาะกับกลางคืนไหม ถ้ายังรั่ว ลองเปลี่ยนรุ่นหรือยี่ห้อ',
  },
  {
    question: 'เด็กทารกควรเปลี่ยนผ้าอ้อมกลางคืนไหม?',
    answer:
      'เด็กแรกเกิด–3 เดือน แนะนำเปลี่ยนทุกครั้งที่ตื่นนมกลางคืน และทุกครั้งที่อุจจาระ เด็ก 3 เดือนขึ้นไป ถ้าไม่อุจจาระกลางคืน อาจรอจนเช้าโดยใช้ผ้าอ้อมกลางคืนที่ซึมซับสูง',
  },
]

export default function BestOvernightDiaperPage() {
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
      category="ผ้าอ้อมและของใช้เด็ก"
      breadcrumbs={[
        { label: 'หน้าแรก', href: '/' },
        { label: 'บล็อก', href: '/blog' },
        { label: 'ผ้าอ้อมกลางคืนยี่ห้อไหนดี' },
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
        <strong>คำแนะนำจากกุมารแพทย์:</strong> ผ้าอ้อมที่เหมาะสมช่วยให้ทั้งลูกและพ่อแม่นอนหลับได้
        การเลือกผ้าอ้อมกลางคืนที่ดีเป็นส่วนสำคัญของการฝึกนอนที่ดี
      </div>

      <p>
        ผ้าอ้อมรั่วกลางดึกเป็นหนึ่งในปัญหาที่พ่อแม่รายงานบ่อยที่สุด และส่งผลโดยตรงต่อคุณภาพการนอนของทั้งครอบครัว
        บทความนี้ตอบชัดๆ ว่าผ้าอ้อมกลางคืนยี่ห้อไหนดีที่สุด และทำไม
      </p>

      <h2 id="why-different">ทำไมผ้าอ้อมกลางคืนต้องพิเศษ?</h2>
      <p>
        กลางคืน เด็กนอน 8–12 ชั่วโมงโดยไม่ได้รับการเปลี่ยนผ้าอ้อม ในช่วงนี้:
      </p>
      <ul>
        <li>เด็กอาจปัสสาวะ 3–5 ครั้งโดยไม่ตื่น</li>
        <li>ท่านอนหงายทำให้ความดันสะสมที่หลังผ้าอ้อม — จุดที่รั่วบ่อยที่สุด</li>
        <li>ความชื้นสะสมนาน → เพิ่มความเสี่ยงผื่นผ้าอ้อม</li>
        <li>ผ้าอ้อมปกติออกแบบมาสำหรับ 3–4 ชั่วโมง ไม่ใช่ 10–12 ชั่วโมง</li>
      </ul>

      <h2 id="criteria">เกณฑ์การเลือกผ้าอ้อมกลางคืน</h2>
      <ol>
        <li><strong>ความจุซึมซับ</strong> — ต้องรองรับได้อย่างน้อย 3–5 เท่าของการปัสสาวะปกติ</li>
        <li><strong>ชั้น Stay-Dry</strong> — ชั้นที่ดึงความชื้นออกจากผิว ลดความเสี่ยงผื่น</li>
        <li><strong>ขอบขาและรอยเอว</strong> — ต้องพอดีและไม่รั่วในท่านอนหงาย</li>
        <li><strong>ความนุ่ม</strong> — ลูกต้องสบายตลอดคืน ไม่ตื่นเพราะไม่สบาย</li>
        <li><strong>ขนาดพอดี</strong> — ผ้าอ้อมหลวมหรือแน่นเกินไปรั่วได้ง่ายกว่า</li>
      </ol>

      <h2 id="compare">เปรียบเทียบ 5 ยี่ห้อสำหรับกลางคืน</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ยี่ห้อ / รุ่น</th>
              <th className="px-4 py-3 text-center font-semibold text-gray-700">ซึมซับ</th>
              <th className="px-4 py-3 text-center font-semibold text-gray-700">ความนุ่ม</th>
              <th className="px-4 py-3 text-center font-semibold text-gray-700">ป้องกันรั่ว</th>
              <th className="px-4 py-3 text-center font-semibold text-gray-700">ราคา/ชิ้น</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">เหมาะกับ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['Huggies Platinum', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐⭐', '5–7 บ.', 'เด็กปัสสาวะมาก งบพอรับได้'],
              ['MamyPoko Extra Dry', '⭐⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐', '3–5 บ.', 'เด็กผิวบาง อากาศร้อน'],
              ['Merries (เมอร์รี่ส์)', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐⭐', '6–9 บ.', 'เด็กผิวแพ้ง่าย ต้องการพรีเมียม'],
              ['Moony (มูนนี่)', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐', '7–10 บ.', 'นำเข้าจากญี่ปุ่น ผิวแพ้ง่าย'],
              ['BabyLove Gold+', '⭐⭐⭐', '⭐⭐⭐', '⭐⭐⭐', '2.5–3.5 บ.', 'งบจำกัด ใช้กลางวัน'],
            ].map(([brand, absorb, soft, leak, price, best]) => (
              <tr key={brand} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{brand}</td>
                <td className="px-4 py-3 text-center">{absorb}</td>
                <td className="px-4 py-3 text-center">{soft}</td>
                <td className="px-4 py-3 text-center">{leak}</td>
                <td className="px-4 py-3 text-center font-bold text-blue-600">{price}</td>
                <td className="px-4 py-3 text-gray-600 text-xs">{best}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3>คำแนะนำตามงบประมาณ</h3>
      <ul>
        <li><strong>งบประหยัด:</strong> ใช้ MamyPoko Extra Dry ซึมซับได้ดีพอสำหรับคืนส่วนใหญ่ในราคาไม่แพง</li>
        <li><strong>งบปานกลาง:</strong> Huggies Platinum ให้ทั้งการซึมซับและการป้องกันรั่วที่ดีที่สุดในกลุ่มนี้</li>
        <li><strong>ผิวแพ้ง่าย/พรีเมียม:</strong> Merries หรือ Moony ผลิตในญี่ปุ่น วัสดุอ่อนโยนที่สุด</li>
      </ul>

      <h2 id="tips">เคล็ดลับให้ลูกนอนหลับทั้งคืน</h2>
      <ul>
        <li><strong>ใส่ไซส์ถูกต้อง</strong> — ผ้าอ้อมหลวมรั่วตามขา ผ้าอ้อมแน่นรั่วตามเอว</li>
        <li><strong>ตรวจขอบขา</strong> — ก่อนวางลูกนอน ตรวจว่าขอบขาไม่พับเข้าด้านใน</li>
        <li><strong>เปลี่ยนก่อนนอน</strong> — เปลี่ยนผ้าอ้อมใหม่ทันทีก่อนป้อนนมมื้อกลางคืนสุดท้าย</li>
        <li><strong>ใช้ขนาดทดลองก่อน</strong> — อย่าซื้อแพ็กใหญ่ก่อนทดสอบว่าผ้าอ้อมนั้นไม่รั่วสำหรับลูก</li>
        <li><strong>พิจารณา Diaper Booster</strong> — แผ่นซับเพิ่มเติม (Diaper Booster) สามารถวางในผ้าอ้อมปกติเพื่อเพิ่มความจุ</li>
      </ul>

      <h2 id="signs">สัญญาณว่าผ้าอ้อมไม่เพียงพอสำหรับกลางคืน</h2>
      <ul>
        <li>ผ้าอ้อมชื้นโชกทุกเช้า แม้จะใส่ขนาดถูกต้อง</li>
        <li>ผ้าปูที่นอน/ชุดนอนเปียกบ่อย</li>
        <li>ลูกตื่นกลางดึกบ่อยผิดปกติ (อาจเพราะรู้สึกเปียกชื้น)</li>
        <li>ผื่นผ้าอ้อมรุนแรงขึ้นในบริเวณที่ผ้าอ้อมสัมผัสนาน</li>
      </ul>

      <div className="not-prose my-6 rounded-2xl bg-blue-600 p-6 text-center text-white">
        <p className="font-bold text-lg">คำนวณค่าผ้าอ้อมกลางคืนรายเดือน</p>
        <p className="mt-2 text-blue-100 text-sm">เปรียบเทียบค่าใช้จ่ายถ้าใช้ผ้าอ้อมกลางวันและกลางคืนต่างกัน</p>
        <Link
          href="/tools/diaper-cost"
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
        >
          เปิดเครื่องคำนวณผ้าอ้อม →
        </Link>
      </div>

      <p>
        อ่านเปรียบเทียบ Huggies vs MamyPoko ได้ที่{' '}
        <Link href="/blog/huggies-vs-mamypoko">Huggies vs MamyPoko</Link>
      </p>
      <p>
        อ่านเปรียบเทียบ BabyLove vs Huggies ได้ที่{' '}
        <Link href="/blog/babylove-vs-huggies">BabyLove vs Huggies</Link>
      </p>
      <p>
        สำหรับผ้าอ้อมแบบกางเกงเทียบกับแบบเทป ดูที่{' '}
        <Link href="/blog/pull-up-vs-tape-diaper">ผ้าอ้อมแบบใส่ vs แบบเทป</Link>
      </p>

      <h2 id="faq">คำถามที่พบบ่อย</h2>
      <FAQ items={FAQ_ITEMS} />
    </BlogLayout>
  )
}
