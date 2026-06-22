import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import FAQ from '@/components/FAQ'
import { articleSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem, TOCItem } from '@/types'

const SLUG = 'baby-first-year-expenses'
const TITLE = 'ค่าใช้จ่ายมีลูกปีแรก ต้องเตรียมเงินเท่าไร? คู่มือฉบับสมบูรณ์ปี 2026'
const DESCRIPTION =
  'สรุปค่าใช้จ่ายทั้งหมดในปีแรกของลูก ตั้งแต่ค่าคลอด ค่าผ้าอ้อม ค่านม ของใช้เด็ก พร้อมวิธีวางแผนงบประมาณและประหยัดค่าใช้จ่ายอย่างชาญฉลาด'
const DATE = '2026-06-22'
const URL = `/blog/${SLUG}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'ค่าใช้จ่ายมีลูกปีแรก',
    'ค่าใช้จ่ายเลี้ยงลูก',
    'งบประมาณมีลูก',
    'เงินเตรียมก่อนมีลูก',
    'ค่าใช้จ่ายทารกแรกเกิด',
    'วางแผนการเงินก่อนมีลูก',
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
  { id: 'summary', label: 'ภาพรวมค่าใช้จ่ายปีแรก' },
  { id: 'prenatal', label: 'ค่าใช้จ่ายก่อนคลอด' },
  { id: 'birth', label: 'ค่าคลอดและค่าโรงพยาบาล' },
  { id: 'monthly', label: 'ค่าใช้จ่ายประจำเดือน' },
  { id: 'diapers', label: 'ค่าผ้าอ้อมในปีแรก' },
  { id: 'milk', label: 'ค่านมในปีแรก' },
  { id: 'save', label: 'วิธีประหยัดค่าใช้จ่าย' },
  { id: 'faq', label: 'คำถามที่พบบ่อย' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'ต้องเตรียมเงินเท่าไรก่อนมีลูก?',
    answer:
      'โดยทั่วไปควรมีเงินสำรองอย่างน้อย 200,000–300,000 บาท ครอบคลุมค่าคลอด ของใช้เด็ก และค่าใช้จ่าย 3–6 เดือนแรก อย่างไรก็ตาม ตัวเลขนี้แตกต่างกันมากตามสไตล์ชีวิตและโรงพยาบาลที่เลือก',
  },
  {
    question: 'ค่าคลอดในโรงพยาบาลรัฐ vs เอกชน ต่างกันมากไหม?',
    answer:
      'ต่างกันมากมาก ค่าคลอดปกติในโรงพยาบาลรัฐอยู่ที่ 5,000–15,000 บาท ในขณะที่โรงพยาบาลเอกชนอาจสูงถึง 50,000–150,000 บาท สำหรับการคลอดธรรมชาติ และ 100,000–200,000 บาท สำหรับผ่าคลอด',
  },
  {
    question: 'ค่าผ้าอ้อมปีแรกเท่าไร?',
    answer:
      'สำหรับผ้าอ้อมระดับกลาง ค่าใช้จ่ายด้านผ้าอ้อมในปีแรกอยู่ที่ประมาณ 12,000–20,000 บาท ขึ้นอยู่กับยี่ห้อและปริมาณที่ใช้ต่อวัน ใช้เครื่องคำนวณของเราเพื่อดูตัวเลขที่แม่นยำกว่า',
  },
  {
    question: 'เลี้ยงลูกด้วยนมแม่ช่วยประหยัดค่าใช้จ่ายได้มากแค่ไหน?',
    answer:
      'ค่านมผงสำหรับทารกแรกเกิดอยู่ที่ประมาณ 2,500–5,000 บาทต่อเดือน การเลี้ยงด้วยนมแม่ช่วยประหยัดค่าใช้จ่ายส่วนนี้ได้ทั้งหมด ซึ่งรวมแล้วกว่า 30,000–60,000 บาทใน 6–12 เดือนแรก',
  },
  {
    question: 'ค่าของใช้เด็กแรกเกิดควรใช้งบเท่าไร?',
    answer:
      'งบสำหรับของใช้เด็กแรกเกิดเริ่มต้นตั้งแต่ 15,000 บาทสำหรับของจำเป็นพื้นฐาน ไปจนถึง 60,000+ บาทหากซื้อสินค้าแบรนด์เนม อ่านเพิ่มเติมที่บทความของใช้เด็กแรกเกิดต้องมีอะไรบ้าง',
  },
]

export default function BabyFirstYearExpensesPage() {
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
      readingTime="9 นาที"
      category="การวางแผนการเงิน"
      breadcrumbs={[
        { label: 'หน้าแรก', href: '/' },
        { label: 'บล็อก', href: '/blog' },
        { label: 'ค่าใช้จ่ายมีลูกปีแรก' },
      ]}
      toc={TOC}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <p>
        "มีลูกต้องใช้เงินเท่าไร?" เป็นคำถามที่คู่รักทุกคู่ถามก่อนตัดสินใจมีลูก
        คำตอบขึ้นอยู่กับหลายปัจจัย แต่หากไม่มีการวางแผน ค่าใช้จ่ายในปีแรกอาจสูงกว่าที่คาดไว้มาก
      </p>
      <p>
        บทความนี้รวบรวมค่าใช้จ่ายทุกหมวดหมู่ในปีแรกของลูก พร้อมตัวเลขจริงที่ช่วยให้คุณ
        <strong>วางแผนการเงินได้อย่างแม่นยำ</strong> ก่อนลูกคลอด
      </p>

      <h2 id="summary">ภาพรวมค่าใช้จ่ายปีแรก</h2>
      <p>ค่าใช้จ่ายในปีแรกของลูกสามารถแบ่งเป็น 2 กลุ่มใหญ่:</p>
      <ul>
        <li><strong>ค่าใช้จ่ายครั้งเดียว (One-time)</strong> — ค่าคลอด ของใช้เด็กชิ้นใหญ่ เฟอร์นิเจอร์</li>
        <li><strong>ค่าใช้จ่ายรายเดือน (Recurring)</strong> — ผ้าอ้อม นมผง อาหาร เสื้อผ้า</li>
      </ul>

      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">หมวดหมู่</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ประหยัด</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ปานกลาง</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">พรีเมียม</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['ค่าคลอด', '15,000', '60,000', '150,000'],
              ['ของใช้เด็ก (ครั้งเดียว)', '15,000', '35,000', '80,000'],
              ['ผ้าอ้อม (ปีแรก)', '8,000', '15,000', '25,000'],
              ['นมผง (ปีแรก)', '0*', '30,000', '50,000'],
              ['เสื้อผ้าและอุปกรณ์', '5,000', '15,000', '40,000'],
              ['ค่าหมอ / วัคซีน', '3,000', '10,000', '30,000'],
              ['รวมโดยประมาณ', '46,000', '165,000', '375,000'],
            ].map(([cat, low, mid, high]) => (
              <tr key={cat} className={`hover:bg-gray-50 ${cat.startsWith('รวม') ? 'font-bold bg-gray-50' : ''}`}>
                <td className="px-4 py-3 text-gray-800">{cat}</td>
                <td className="px-4 py-3 text-green-600">{low}</td>
                <td className="px-4 py-3 text-blue-600">{mid}</td>
                <td className="px-4 py-3 text-purple-600">{high}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-500">* นมแม่ไม่มีค่าใช้จ่ายด้านนมผง แต่อาจมีค่าเครื่องปั๊มนมและอุปกรณ์เสริม</p>

      <h2 id="prenatal">ค่าใช้จ่ายก่อนคลอด</h2>
      <p>ค่าใช้จ่ายก่อนคลอดมักถูกลืมในการวางแผน แต่สามารถสูงได้เกิน 30,000–50,000 บาท:</p>
      <ul>
        <li><strong>ค่าฝากครรภ์และตรวจครรภ์</strong> — 3,000–15,000 บาท (ขึ้นอยู่กับโรงพยาบาล) ทั้งนี้บัตรทองครอบคลุมการฝากครรภ์พื้นฐาน</li>
        <li><strong>ค่าตรวจพิเศษ</strong> — อัลตราซาวด์ 3D/4D, การตรวจ NIPT, การตรวจดาวน์ซินโดรม รวมกัน 5,000–20,000 บาท</li>
        <li><strong>วิตามินและอาหารเสริม</strong> — โฟลิก, ธาตุเหล็ก, แคลเซียม DHA ประมาณ 2,000–5,000 บาทตลอดครรภ์</li>
        <li><strong>คลาสเตรียมคลอด</strong> — 2,000–8,000 บาท (ไม่บังคับ แต่มีประโยชน์มาก)</li>
        <li><strong>ของใช้สำหรับแม่ตั้งครรภ์</strong> — เสื้อผ้าคนท้อง หมอนรองครรภ์ ครีมป้องกันท้องลาย ประมาณ 3,000–10,000 บาท</li>
      </ul>

      <h2 id="birth">ค่าคลอดและค่าโรงพยาบาล</h2>
      <p>ค่าคลอดเป็นค่าใช้จ่ายครั้งใหญ่ที่สุดในระยะสั้น ควรวางแผนล่วงหน้า:</p>
      <ul>
        <li><strong>โรงพยาบาลรัฐ (บัตรทอง/ประกันสังคม)</strong> — คลอดธรรมชาติ 0–5,000 บาท, ผ่าคลอด 10,000–20,000 บาท</li>
        <li><strong>โรงพยาบาลรัฐ (ชำระเอง)</strong> — คลอดธรรมชาติ 10,000–30,000 บาท</li>
        <li><strong>โรงพยาบาลเอกชนระดับกลาง</strong> — คลอดธรรมชาติ 40,000–80,000 บาท, ผ่าคลอด 80,000–120,000 บาท</li>
        <li><strong>โรงพยาบาลเอกชนระดับสูง</strong> — คลอดธรรมชาติ 80,000–150,000 บาท, ผ่าคลอด 120,000–200,000+ บาท</li>
      </ul>
      <p>
        <strong>เคล็ดลับ:</strong> ตรวจสอบสิทธิ์ประกันสุขภาพของคุณล่วงหน้า บางแผนครอบคลุมค่าคลอดบางส่วนหรือทั้งหมด
        และอย่าลืมนำเอกสารประกันสังคมไปด้วยทุกครั้งที่ฝากครรภ์
      </p>

      <h2 id="monthly">ค่าใช้จ่ายประจำเดือนในปีแรก</h2>
      <p>หลังจากคลอดแล้ว ค่าใช้จ่ายรายเดือนสำหรับลูกน้อยโดยเฉลี่ยอยู่ที่:</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">รายการ</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ประหยัด (฿/เดือน)</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ปานกลาง (฿/เดือน)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['ผ้าอ้อม', '700–1,000', '1,200–1,800'],
              ['นมผง (ถ้าไม่ให้นมแม่)', '2,000–3,000', '3,500–5,000'],
              ['เสื้อผ้า', '200–500', '500–1,500'],
              ['ของใช้ (สบู่ แชมพู ผ้าอ้อมเปียก)', '300–500', '500–1,000'],
              ['วัคซีนและค่าหมอ', '0–500', '500–2,000'],
              ['รวมต่อเดือน (มีนมผง)', '3,200–5,500', '6,200–11,300'],
              ['รวมต่อเดือน (นมแม่)', '1,200–2,500', '2,700–6,300'],
            ].map(([item, low, mid]) => (
              <tr key={item} className={`hover:bg-gray-50 ${item.startsWith('รวม') ? 'font-bold bg-gray-50' : ''}`}>
                <td className="px-4 py-3 text-gray-800">{item}</td>
                <td className="px-4 py-3 text-gray-600">{low}</td>
                <td className="px-4 py-3 text-gray-600">{mid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="diapers">ค่าผ้าอ้อมในปีแรก — ค่าใช้จ่ายที่สูงกว่าที่คิด</h2>
      <p>
        ผ้าอ้อมเป็นหนึ่งในค่าใช้จ่ายที่สม่ำเสมอที่สุด เด็กแรกเกิดใช้ผ้าอ้อม 8–12 ชิ้นต่อวัน
        ทำให้ค่าผ้าอ้อมในช่วงแรกสูงกว่าที่หลายคนคาดไว้
      </p>
      <ul>
        <li>เดือนที่ 1–3: ใช้วันละ 8–12 ชิ้น = 240–360 ชิ้น/เดือน</li>
        <li>เดือนที่ 4–6: ใช้วันละ 6–8 ชิ้น = 180–240 ชิ้น/เดือน</li>
        <li>เดือนที่ 7–12: ใช้วันละ 4–6 ชิ้น = 120–180 ชิ้น/เดือน</li>
      </ul>
      <p>
        ที่ราคาเฉลี่ย 3 บาท/ชิ้น (MamyPoko ระดับกลาง) ค่าผ้าอ้อมตลอดปีแรกอยู่ที่ประมาณ{' '}
        <strong>10,000–15,000 บาท</strong> ต้องการตัวเลขที่แม่นยำกว่านี้?
      </p>

      <div className="not-prose my-6 rounded-2xl bg-blue-600 p-6 text-center text-white">
        <p className="font-bold text-lg">คำนวณค่าผ้าอ้อมของลูกคุณ</p>
        <p className="mt-2 text-blue-100 text-sm">ใส่ราคาและยี่ห้อที่ใช้ เครื่องคำนวณจะบอกค่าใช้จ่ายต่อเดือนและต่อปีทันที</p>
        <Link
          href="/tools/diaper-cost"
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
        >
          เปิดเครื่องคำนวณผ้าอ้อม →
        </Link>
      </div>

      <h2 id="milk">ค่านมในปีแรก</h2>
      <p>
        ค่านมเป็นรายการใหญ่ที่สุดในค่าใช้จ่ายรายเดือน หากไม่ได้ให้นมแม่:
      </p>
      <ul>
        <li><strong>นมสูตรพื้นฐาน</strong> — 2,000–3,000 บาท/เดือน (เช่น Dumex, Enfa A+)</li>
        <li><strong>นมสูตรพรีเมียม</strong> — 4,000–6,000 บาท/เดือน (เช่น Similac, Aptamil)</li>
        <li><strong>นมสูตรพิเศษ (แพ้นมวัว)</strong> — 6,000–10,000 บาท/เดือน</li>
      </ul>
      <p>
        ค่านมผงตลอดปีแรกรวมกันอยู่ที่ประมาณ <strong>24,000–72,000 บาท</strong> ขึ้นอยู่กับยี่ห้อ
        การให้นมแม่จึงช่วยประหยัดค่าใช้จ่ายได้มากที่สุด อ่านเพิ่มเติมที่{' '}
        <Link href="/blog/breastmilk-vs-formula">นมแม่ vs นมผง เปรียบเทียบข้อดีข้อเสีย</Link>
      </p>

      <h2 id="save">วิธีประหยัดค่าใช้จ่ายในปีแรกโดยไม่กระทบคุณภาพ</h2>
      <ul>
        <li>
          <strong>รับของมือสองจากญาติหรือเพื่อน</strong>{' '}
          ของชิ้นใหญ่อย่างรถเข็น เปล ที่นั่งรถ รับมือสองได้ (ยกเว้นหมอนและที่นอน ควรซื้อใหม่)
        </li>
        <li>
          <strong>อย่าซื้อของเล็กๆ น้อยๆ ล่วงหน้ามากเกินไป</strong>{' '}
          รอให้รู้ว่าลูกต้องการอะไรจริงๆ ก่อน เพราะบางอย่างอาจไม่ได้ใช้เลย
        </li>
        <li>
          <strong>เลือกผ้าอ้อมตามช่วงอายุ</strong>{' '}
          ช่วงกลางวันใช้ยี่ห้อประหยัด กลางคืนใช้ยี่ห้อที่ซับดีกว่า
        </li>
        <li>
          <strong>ติดตามโปรโมชั่นล่วงหน้า</strong>{' '}
          สั่งสต็อกผ้าอ้อมและนมผงในช่วงเซลล์ประจำเดือนของแพลตฟอร์มออนไลน์
        </li>
        <li>
          <strong>วางแผนงบก่อนซื้อ</strong>{' '}
          ใช้{' '}
          <Link href="/tools/diaper-cost">เครื่องคำนวณค่าผ้าอ้อม</Link>{' '}
          เพื่อดูว่าค่าผ้าอ้อมของลูกจะอยู่ที่เท่าไรในแต่ละเดือน
        </li>
      </ul>

      <p>
        สำหรับรายละเอียดงบประมาณเลี้ยงลูกแบบแบ่งรายเดือน อ่านเพิ่มเติมที่{' '}
        <Link href="/blog/monthly-baby-budget">งบประมาณเลี้ยงลูกต่อเดือน</Link>
      </p>

      <p>
        และสำหรับรายการของใช้เด็กที่จำเป็นทั้งหมด อ่านได้ที่{' '}
        <Link href="/blog/newborn-essentials-checklist">ของใช้เด็กแรกเกิดต้องมีอะไรบ้าง</Link>
      </p>

      <h2 id="faq">คำถามที่พบบ่อย</h2>
      <FAQ items={FAQ_ITEMS} />
    </BlogLayout>
  )
}
