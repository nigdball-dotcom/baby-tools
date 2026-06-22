import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import FAQ from '@/components/FAQ'
import { articleSchema, faqSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem, TOCItem } from '@/types'

const SLUG = 'monthly-baby-budget'
const TITLE = 'งบประมาณเลี้ยงลูกต่อเดือน ต้องใช้เงินเท่าไร? แบ่งรายการชัดเจน'
const DESCRIPTION =
  'แบ่งงบประมาณเลี้ยงลูกรายเดือนอย่างละเอียด ตั้งแต่ค่าผ้าอ้อม ค่านม ของใช้ประจำวัน ค่าแพทย์ และค่าใช้จ่ายซ่อนเร้น พร้อมวิธีวางแผนงบให้ประหยัดที่สุด'
const DATE = '2026-06-22'
const URL = `/blog/${SLUG}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'งบประมาณเลี้ยงลูกต่อเดือน',
    'ค่าใช้จ่ายลูกต่อเดือน',
    'วางแผนการเงินเลี้ยงลูก',
    'เลี้ยงลูกเดือนละเท่าไร',
    'ค่าใช้จ่ายทารก',
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
  { id: 'overview', label: 'ภาพรวมค่าใช้จ่ายต่อเดือน' },
  { id: 'diapers', label: 'ค่าผ้าอ้อมต่อเดือน' },
  { id: 'milk', label: 'ค่านมต่อเดือน' },
  { id: 'supplies', label: 'ค่าของใช้ประจำวัน' },
  { id: 'medical', label: 'ค่าพบแพทย์และวัคซีน' },
  { id: 'hidden', label: 'ค่าใช้จ่ายซ่อนเร้นที่มักลืมนับ' },
  { id: 'plan', label: 'วิธีวางแผนงบให้ได้ผล' },
  { id: 'faq', label: 'คำถามที่พบบ่อย' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'เลี้ยงลูกด้วยงบน้อยสุดต้องเตรียมเท่าไรต่อเดือน?',
    answer:
      'หากให้นมแม่และใช้ผ้าอ้อมยี่ห้อประหยัด ค่าใช้จ่ายรายเดือนขั้นต่ำสำหรับลูกอยู่ที่ประมาณ 1,500–2,500 บาท (ไม่รวมค่าแพทย์) แต่ถ้าใช้นมผงด้วย จะเพิ่มเป็น 4,000–5,500 บาท',
  },
  {
    question: 'ค่าวัคซีนเด็กต้องเตรียมเท่าไร?',
    answer:
      'วัคซีนพื้นฐานในโปรแกรมสร้างเสริมภูมิคุ้มกันแห่งชาติ (EPI) ฟรีในโรงพยาบาลรัฐ วัคซีนทางเลือก เช่น วัคซีนไข้หวัดใหญ่, ไวรัสโรต้า, หรือเมนิงไจติส อาจต้องเสียค่าใช้จ่าย 500–3,000 บาทต่อเข็ม',
  },
  {
    question: 'ค่าใช้จ่ายเปลี่ยนแปลงมากไหมเมื่อลูกโตขึ้น?',
    answer:
      'ค่าผ้าอ้อมจะลดลงตามอายุ เพราะใช้น้อยชิ้นลง แต่ค่าอาหารเสริมจะเพิ่มขึ้นเมื่อเริ่มทานอาหารแข็งตอน 6 เดือน และค่าของเล่นและกิจกรรมจะเพิ่มขึ้นเรื่อยๆ ตามพัฒนาการ',
  },
  {
    question: 'งบเลี้ยงลูกควรแบ่งสัดส่วนกี่เปอร์เซ็นต์ของรายได้?',
    answer:
      'ผู้เชี่ยวชาญด้านการเงินแนะนำว่าค่าใช้จ่ายสำหรับเด็กไม่ควรเกิน 15–20% ของรายได้สุทธิของครอบครัว เพื่อให้ยังมีเงินออมและฉุกเฉินเพียงพอ',
  },
  {
    question: 'ควรทำประกันสุขภาพเด็กหรือไม่?',
    answer:
      'แนะนำมาก โดยเฉพาะถ้าไม่มีสิทธิ์บัตรทองหรือประกันสังคม ค่าเบี้ยประกันเด็กเริ่มต้นประมาณ 500–2,000 บาทต่อเดือน แต่คุ้มครองค่ารักษาพยาบาลได้มาก',
  },
]

export default function MonthlyBabyBudgetPage() {
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
      readingTime="8 นาที"
      category="การวางแผนการเงิน"
      breadcrumbs={[
        { label: 'หน้าแรก', href: '/' },
        { label: 'บล็อก', href: '/blog' },
        { label: 'งบประมาณเลี้ยงลูกต่อเดือน' },
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

      <div className="not-prose mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
        <strong>บทความนี้เน้นที่ค่าใช้จ่ายรายเดือนจริงๆ</strong> แยกตามช่วงอายุลูก
        หากต้องการภาพรวมค่าใช้จ่าย<strong>ทั้งปีแรก รวมค่าคลอด</strong> อ่านได้ที่{' '}
        <a href="/blog/baby-first-year-expenses" className="underline">ค่าใช้จ่ายมีลูกปีแรก</a>
      </div>
      <p>
        หนึ่งในความกังวลใหญ่ที่สุดของพ่อแม่คือ "เราจะมีเงินพอเลี้ยงลูกไหม?"
        คำตอบขึ้นอยู่กับการวางแผนที่ดี การรู้ล่วงหน้าว่าจะต้องใช้เงินเท่าไรในแต่ละเดือน
        ช่วยให้ตั้งงบประมาณได้แม่นยำและลดความเครียดทางการเงินได้มาก
      </p>

      <h2 id="overview">ภาพรวมค่าใช้จ่ายต่อเดือนในปีแรก</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">รายการ</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">เดือน 1–3</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">เดือน 4–6</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">เดือน 7–12</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['ผ้าอ้อม', '1,500–2,500 ฿', '1,200–2,000 ฿', '800–1,500 ฿'],
              ['นมผง (ถ้าไม่มีนมแม่)', '3,000–5,000 ฿', '3,000–5,000 ฿', '2,500–4,500 ฿'],
              ['ของใช้ประจำวัน', '400–700 ฿', '400–700 ฿', '400–700 ฿'],
              ['เสื้อผ้า', '500–1,500 ฿', '300–800 ฿', '300–800 ฿'],
              ['ค่าพบแพทย์/วัคซีน', '500–2,000 ฿', '500–1,500 ฿', '300–1,000 ฿'],
              ['อาหารเสริม', '–', '–', '500–1,500 ฿'],
            ].map(([item, m1, m2, m3]) => (
              <tr key={item} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{item}</td>
                <td className="px-4 py-3 text-gray-600">{m1}</td>
                <td className="px-4 py-3 text-gray-600">{m2}</td>
                <td className="px-4 py-3 text-gray-600">{m3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="diapers">ค่าผ้าอ้อมต่อเดือน — คำนวณได้แม่นยำ</h2>
      <p>
        ค่าผ้าอ้อมขึ้นอยู่กับยี่ห้อ ราคาต่อชิ้น และจำนวนที่ลูกใช้ต่อวัน:
      </p>
      <ul>
        <li>เดือน 1–2: ใช้ 8–12 ชิ้น/วัน × 30 วัน = 240–360 ชิ้น/เดือน</li>
        <li>เดือน 3–6: ใช้ 6–8 ชิ้น/วัน × 30 วัน = 180–240 ชิ้น/เดือน</li>
        <li>เดือน 7–12: ใช้ 4–6 ชิ้น/วัน × 30 วัน = 120–180 ชิ้น/เดือน</li>
      </ul>
      <p>ตัวอย่างค่าใช้จ่ายต่อเดือนตามยี่ห้อ (ช่วงเดือนที่ 1–2):</p>
      <ul>
        <li>BabyLove (2.50 ฿/ชิ้น): 240–360 ชิ้น × 2.50 = <strong>600–900 ฿/เดือน</strong></li>
        <li>MamyPoko (3.50 ฿/ชิ้น): 240–360 ชิ้น × 3.50 = <strong>840–1,260 ฿/เดือน</strong></li>
        <li>Merries (5.50 ฿/ชิ้น): 240–360 ชิ้น × 5.50 = <strong>1,320–1,980 ฿/เดือน</strong></li>
      </ul>

      <div className="not-prose my-6 rounded-2xl bg-blue-600 p-6 text-center text-white">
        <p className="font-bold text-lg">คำนวณค่าผ้าอ้อมรายเดือนของลูกคุณ</p>
        <p className="mt-2 text-blue-100 text-sm">ใส่ราคาและจำนวนที่ใช้จริง เครื่องคำนวณจะบอกตัวเลขที่แม่นยำ</p>
        <Link
          href="/tools/diaper-cost"
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
        >
          เปิดเครื่องคำนวณผ้าอ้อมฟรี →
        </Link>
      </div>

      <h2 id="milk">ค่านมต่อเดือน</h2>
      <p>นมเป็นรายการค่าใช้จ่ายที่ใหญ่ที่สุดถ้าไม่ได้ให้นมแม่:</p>
      <ul>
        <li><strong>นมแม่</strong> — ไม่มีค่าใช้จ่ายหลัก แต่อาจมีค่าเครื่องปั๊มนม อาหารเสริมสำหรับแม่</li>
        <li><strong>Dumex / SMA (สูตรมาตรฐาน)</strong> — 2,000–2,800 ฿/เดือน</li>
        <li><strong>Enfa A+ / Similac (กลาง–สูง)</strong> — 3,500–5,000 ฿/เดือน</li>
        <li><strong>Aptamil / Bellamy's (พรีเมียม)</strong> — 5,000–7,000 ฿/เดือน</li>
        <li><strong>นมสูตรพิเศษ (แพ้นมวัว)</strong> — 6,000–10,000 ฿/เดือน</li>
      </ul>
      <p>
        อ่านข้อมูลเพิ่มเติมเรื่องนมเด็กที่{' '}
        <Link href="/blog/breastmilk-vs-formula">นมแม่ vs นมผง เปรียบเทียบอย่างละเอียด</Link>
      </p>

      <h2 id="supplies">ค่าของใช้ประจำวัน</h2>
      <ul>
        <li>ผ้าเปียก: 200–400 ฿/เดือน</li>
        <li>สบู่ + แชมพูเด็ก: 100–250 ฿/เดือน (ใช้น้อย)</li>
        <li>ครีมกันผื่น: 100–200 ฿/เดือน</li>
        <li>ผ้ามัสลิน/ผ้าซับน้ำลาย: 50–100 ฿/เดือน (ซักใช้ซ้ำ)</li>
      </ul>

      <h2 id="medical">ค่าพบแพทย์และวัคซีน</h2>
      <p>ในปีแรก ลูกจะต้องตรวจพัฒนาการและฉีดวัคซีนหลายครั้ง:</p>
      <ul>
        <li>ตรวจพัฒนาการ (Well-child visit) ควรทำทุก 1–2 เดือน</li>
        <li>วัคซีนพื้นฐาน EPI — ฟรีในโรงพยาบาลรัฐ</li>
        <li>วัคซีนทางเลือก (ไข้หวัดใหญ่, โรต้าไวรัส) — 500–3,000 บาท/เข็ม</li>
        <li>ค่าพบแพทย์เมื่อป่วย — เฉลี่ย 500–2,000 บาท/ครั้ง</li>
      </ul>

      <h2 id="hidden">ค่าใช้จ่ายซ่อนเร้นที่มักลืมนับ</h2>
      <p>สิ่งเหล่านี้มักไม่ได้อยู่ในแผนงบ แต่สร้างค่าใช้จ่ายได้มาก:</p>
      <ul>
        <li><strong>ค่าไฟที่เพิ่มขึ้น</strong> — จากเครื่องซักผ้าที่ใช้บ่อยขึ้น แอร์ที่เปิดมากขึ้น เครื่องอุ่นนม</li>
        <li><strong>ค่าผลิตภัณฑ์ซักผ้าเด็ก</strong> — ต้องใช้สูตรพิเศษสำหรับเด็ก</li>
        <li><strong>ค่าเดินทางพบแพทย์</strong> — บ่อยกว่าที่คิดในช่วงแรก</li>
        <li><strong>ค่าของเล่นและสื่อพัฒนาการ</strong> — เพิ่มขึ้นเรื่อยๆ ตามอายุ</li>
        <li><strong>ค่าจ้างคนช่วยดูแล</strong> — ถ้าไม่มีญาติช่วย</li>
      </ul>

      <h2 id="plan">วิธีวางแผนงบประมาณให้ได้ผล</h2>
      <ol>
        <li>
          <strong>แบ่งบัญชีเงินสำหรับลูกแยกต่างหาก</strong>{' '}
          ช่วยให้ติดตามรายจ่ายได้ง่าย และไม่ปะปนกับค่าใช้จ่ายส่วนตัว
        </li>
        <li>
          <strong>คำนวณค่าผ้าอ้อมล่วงหน้า</strong>{' '}
          ใช้{' '}
          <Link href="/tools/diaper-cost">เครื่องคำนวณค่าผ้าอ้อม</Link>{' '}
          เพื่อดูค่าใช้จ่ายรายเดือนตามยี่ห้อที่เลือก
        </li>
        <li>
          <strong>สำรองเงินฉุกเฉินสำหรับลูก</strong>{' '}
          อย่างน้อย 3 เดือนของค่าใช้จ่ายรายเดือน เผื่อลูกป่วยหรือเหตุฉุกเฉิน
        </li>
        <li>
          <strong>ทบทวนและปรับงบทุก 3 เดือน</strong>{' '}
          เพราะความต้องการของลูกเปลี่ยนตามอายุ
        </li>
      </ol>

      <p>
        ดูภาพรวมค่าใช้จ่ายในปีแรกทั้งหมดเพิ่มเติมได้ที่{' '}
        <Link href="/blog/baby-first-year-expenses">ค่าใช้จ่ายมีลูกปีแรก</Link>
      </p>

      <h2 id="faq">คำถามที่พบบ่อย</h2>
      <FAQ items={FAQ_ITEMS} />
    </BlogLayout>
  )
}
