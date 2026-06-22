import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import FAQ from '@/components/FAQ'
import { articleSchema, faqSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem, TOCItem } from '@/types'

const SLUG = 'diaper-rash-prevention'
const TITLE = 'ผื่นผ้าอ้อม สาเหตุ วิธีป้องกัน และการรักษาที่ถูกต้อง'
const DESCRIPTION =
  'ทำความเข้าใจผื่นผ้าอ้อมอย่างครบถ้วน ตั้งแต่สาเหตุ อาการ วิธีป้องกัน วิธีรักษาที่บ้าน และเมื่อไหรควรพาลูกพบแพทย์ พร้อมแนะนำครีมทาผื่นที่ดีที่สุดในไทย'
const DATE = '2026-06-22'
const URL = `/blog/${SLUG}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'ผื่นผ้าอ้อม',
    'ผื่นก้นเด็ก',
    'วิธีป้องกันผื่นผ้าอ้อม',
    'ครีมทาผื่นผ้าอ้อม',
    'รักษาผื่นก้น',
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
  { id: 'what', label: 'ผื่นผ้าอ้อมคืออะไร?' },
  { id: 'causes', label: 'สาเหตุของผื่นผ้าอ้อม' },
  { id: 'symptoms', label: 'อาการและระดับความรุนแรง' },
  { id: 'prevention', label: 'วิธีป้องกัน' },
  { id: 'treatment', label: 'วิธีรักษาที่บ้าน' },
  { id: 'cream', label: 'ครีมทาผื่นที่แนะนำ' },
  { id: 'doctor', label: 'เมื่อไหรควรพบแพทย์' },
  { id: 'faq', label: 'คำถามที่พบบ่อย' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'ผื่นผ้าอ้อมหายเองได้ไหมถ้าไม่ทา?',
    answer:
      'ผื่นเล็กน้อยที่เกิดจากความชื้นอาจหายได้เองถ้าเปลี่ยนผ้าอ้อมบ่อยขึ้นและปล่อยให้ผิวแห้ง แต่โดยทั่วไปการใช้ครีมกันผื่นช่วยให้หายเร็วขึ้นและป้องกันไม่ให้ลุกลาม',
  },
  {
    question: 'Sudocrem กับ Bepanthen ต่างกันอย่างไร?',
    answer:
      'Sudocrem มีส่วนผสม zinc oxide เป็นหลัก เหมาะสำหรับผื่นที่เกิดจากความชื้นและใช้เป็นยาป้องกันประจำวัน Bepanthen มี panthenol (pro-vitamin B5) ที่ช่วยซ่อมแซมผิว เหมาะสำหรับผิวที่ระคายเคืองและต้องการการฟื้นฟู',
  },
  {
    question: 'ผื่นผ้าอ้อมกับผื่นเชื้อราต่างกันอย่างไร?',
    answer:
      'ผื่นผ้าอ้อมทั่วไปมักเป็นสีแดงสม่ำเสมอในบริเวณที่สัมผัสผ้าอ้อม ผื่นเชื้อรา Candida มักมีขอบชัด มีจุดหรือตุ่มเล็กๆ รอบๆ และมักเกิดในรอยพับ ผื่นเชื้อราต้องรักษาด้วยยาต้านเชื้อรา ไม่ใช่แค่ครีมกันผื่นทั่วไป',
  },
  {
    question: 'ควรปล่อยให้ก้นลูกโล่งอากาศบ้างไหม?',
    answer:
      'ได้และดีมาก ควรให้ลูกไม่ใส่ผ้าอ้อม 15–30 นาทีหลังเปลี่ยน เพื่อให้ผิวแห้งและระบายอากาศ แต่ต้องทำในพื้นที่ที่รองรับการเลอะได้ เช่น บนแผ่นรองกันน้ำ',
  },
  {
    question: 'ผ้าอ้อมยี่ห้อไหนที่ทำให้ผื่นน้อยที่สุด?',
    answer:
      'Merries และ Moony ได้รับการยืนยันว่าระคายเคืองผิวน้อยที่สุด เพราะไม่มีสารเพิ่มกลิ่น และมีการระบายอากาศดี อ่านเพิ่มเติมที่บทความผ้าอ้อมยี่ห้อไหนดีที่สุด',
  },
]

export default function DiaperRashPreventionPage() {
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
      category="สุขภาพและการดูแล"
      breadcrumbs={[
        { label: 'หน้าแรก', href: '/' },
        { label: 'บล็อก', href: '/blog' },
        { label: 'ผื่นผ้าอ้อม' },
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
        ข้อมูลในบทความนี้อ้างอิงจาก <strong>สมาคมกุมารแพทย์แห่งประเทศไทย</strong> และ{' '}
        <strong>American Academy of Pediatrics</strong> — ควรปรึกษากุมารแพทย์หากผื่นรุนแรงหรือไม่ดีขึ้นใน 5–7 วัน
      </div>
      <p>
        ผื่นผ้าอ้อมเป็นปัญหาที่พ่อแม่เกือบทุกคนต้องเจอ สถิติพบว่าเด็กทารกมากกว่า 35%
        เคยมีผื่นผ้าอ้อมในช่วง 1–2 ปีแรก แม้จะดูเหมือนปัญหาเล็กน้อย
        แต่ผื่นที่ลุกลามอาจทำให้ลูกเจ็บปวดและร้องมากได้
      </p>
      <p>
        ข่าวดีคือผื่นผ้าอ้อมส่วนใหญ่ป้องกันได้และรักษาได้เองที่บ้าน
        ถ้าคุณรู้จักสาเหตุและวิธีจัดการที่ถูกต้อง
      </p>

      <h2 id="what">ผื่นผ้าอ้อมคืออะไร?</h2>
      <p>
        ผื่นผ้าอ้อม (Diaper rash หรือ Nappy rash) คือการอักเสบของผิวหนังบริเวณที่ผ้าอ้อมปิดทับ
        ได้แก่ ก้น ขา และบริเวณอวัยวะเพศ ผิวจะมีสีแดง อาจบวมเล็กน้อย
        ในกรณีรุนแรงอาจมีตุ่มน้ำหรือแผลเปิด
      </p>

      <h2 id="causes">สาเหตุของผื่นผ้าอ้อม</h2>
      <ul>
        <li>
          <strong>ความชื้น</strong> — สาเหตุหลักที่พบบ่อยที่สุด ปัสสาวะและอุจจาระทำให้ผิวอ่อนแอและระคายเคืองง่าย
          โดยเฉพาะถ้าผ้าอ้อมเปียกนานเกินไป
        </li>
        <li>
          <strong>ผ้าอ้อมรัดแน่นเกินไป</strong> — เสียดสีกับผิวและลดการระบายอากาศ
        </li>
        <li>
          <strong>การเปลี่ยนอาหาร</strong> — เมื่อเริ่มอาหารเสริม อุจจาระของลูกจะเปลี่ยนองค์ประกอบ
          อาจระคายเคืองผิวมากขึ้น
        </li>
        <li>
          <strong>ยาปฏิชีวนะ</strong> — ทำลายแบคทีเรียดี ทำให้เชื้อราเจริญเติบโตได้ง่ายขึ้น
        </li>
        <li>
          <strong>ผลิตภัณฑ์ที่มีน้ำหอมหรือสารเคมี</strong> — ผ้าเปียก สบู่ หรือผ้าอ้อมที่มีน้ำหอม
          อาจระคายเคืองผิวที่บอบบาง
        </li>
        <li>
          <strong>เชื้อรา Candida</strong> — เชื้อราที่อาศัยในลำไส้ อาจเจริญเติบโตในบริเวณผ้าอ้อม
          โดยเฉพาะเมื่อมีความชื้นสูงและหลังการใช้ยาปฏิชีวนะ
        </li>
      </ul>

      <h2 id="symptoms">อาการและระดับความรุนแรง</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ระดับ</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">อาการ</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">การรักษา</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['เล็กน้อย', 'แดงเล็กน้อย ผิวดูแห้ง', 'เปลี่ยนผ้าอ้อมบ่อยขึ้น + ครีมกันผื่น'],
              ['ปานกลาง', 'แดงชัด มีตุ่มเล็กๆ ลูกร้องตอนเปลี่ยนผ้าอ้อม', 'ครีม zinc oxide + ปล่อยโล่งอากาศ'],
              ['รุนแรง', 'แดงมาก บวม ตุ่มน้ำ มีแผลเปิด', 'พบแพทย์ทันที'],
              ['เชื้อรา', 'แดงขอบชัด มีจุดรอบๆ ไม่ตอบสนองต่อครีมทั่วไป', 'ยาต้านเชื้อรา (ต้องพบแพทย์)'],
            ].map(([level, symptom, treatment]) => (
              <tr key={level} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold text-gray-800">{level}</td>
                <td className="px-4 py-3 text-gray-600">{symptom}</td>
                <td className="px-4 py-3 text-gray-600">{treatment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="prevention">วิธีป้องกันผื่นผ้าอ้อม</h2>
      <p>การป้องกันดีกว่าการรักษาเสมอ ทำตามนิสัยเหล่านี้ตั้งแต่แรก:</p>
      <ol>
        <li><strong>เปลี่ยนผ้าอ้อมบ่อยๆ</strong> — ทุก 2–3 ชั่วโมง หรือทันทีหลังถ่าย ไม่ปล่อยให้เปียกนาน</li>
        <li><strong>เช็ดให้สะอาดและแห้งสนิท</strong> — เช็ดจากหน้าไปหลัง และซับให้แห้งก่อนใส่ผ้าอ้อม</li>
        <li><strong>ทาครีมกันผื่นทุกครั้ง</strong> — ใช้ครีมที่มี zinc oxide เป็น barrier ป้องกันความชื้น</li>
        <li><strong>ปล่อยโล่งอากาศ</strong> — ให้ก้นลูกโล่งอย่างน้อย 15 นาทีต่อวัน</li>
        <li><strong>เลือกผ้าอ้อมที่ระบายอากาศดี</strong> — และเหมาะกับผิวลูก อ่านเพิ่มเติมที่ <Link href="/blog/diaper-brand-comparison">ผ้าอ้อมยี่ห้อไหนดี</Link></li>
        <li><strong>ใช้ผ้าเปียกที่ไม่มีน้ำหอม</strong> — หรือสำลีชุบน้ำอุ่นสำหรับเด็กแรกเกิด</li>
      </ol>

      <h2 id="treatment">วิธีรักษาที่บ้านเมื่อเกิดผื่น</h2>
      <ul>
        <li>เพิ่มความถี่ในการเปลี่ยนผ้าอ้อมทันที</li>
        <li>ล้างบริเวณที่มีผื่นด้วยน้ำอุ่น (ไม่ใช้สบู่) และซับให้แห้ง</li>
        <li>ทาครีม zinc oxide หนาๆ ทุกครั้งที่เปลี่ยน</li>
        <li>ปล่อยให้ก้นลูกโล่งนานขึ้น 2–3 เท่า</li>
        <li>หยุดใช้ผ้าเปียกชั่วคราว เปลี่ยนเป็นน้ำอุ่นล้างแทน</li>
        <li>ถ้าใช้นมผง ลองเปลี่ยนสูตรชั่วคราวเพื่อดูว่าอุจจาระเปลี่ยนไม่ (ปรึกษาแพทย์ก่อน)</li>
      </ul>
      <p>ผื่นเล็กน้อยควรดีขึ้นภายใน 3–5 วัน ถ้าไม่ดีขึ้นหรือแย่ลง ให้พบแพทย์</p>

      <h2 id="cream">ครีมทาผื่นที่แนะนำในไทย</h2>
      <ul>
        <li>
          <strong>Sudocrem</strong> — zinc oxide + lanolin, ราคาประหยัด, หาซื้อง่ายตามร้านขายยา
          เหมาะสำหรับใช้ประจำวันป้องกันผื่น
        </li>
        <li>
          <strong>Bepanthen</strong> — panthenol, เหมาะสำหรับผิวที่ระคายเคืองหรือมีแผล
          ช่วยฟื้นฟูผิวได้ดี
        </li>
        <li>
          <strong>Desitin</strong> — zinc oxide เข้มข้นสูง 40%, เหมาะสำหรับผื่นที่รุนแรงขึ้น
        </li>
        <li>
          <strong>Mustela Diaper Rash Cream</strong> — สูตรอ่อนโยนพิเศษ เหมาะกับผิวบอบบางมาก
          แต่ราคาสูงกว่า
        </li>
      </ul>

      <h2 id="doctor">เมื่อไหรควรพาลูกพบแพทย์?</h2>
      <ul>
        <li>ผื่นไม่ดีขึ้นหลังดูแลที่บ้าน 5–7 วัน</li>
        <li>มีตุ่มหนองหรือแผลเปิดที่ดูเหมือนมีการติดเชื้อ</li>
        <li>ผื่นลุกลามออกไปนอกบริเวณผ้าอ้อม</li>
        <li>ลูกมีไข้ร่วมด้วย</li>
        <li>ผื่นดูผิดปกติ เช่น มีจุดเลือด หรือสีผิดปกติ</li>
      </ul>

      <div className="not-prose my-6 rounded-2xl bg-blue-600 p-6 text-center text-white">
        <p className="font-bold text-lg">เปรียบเทียบผ้าอ้อมที่ดีต่อผิวลูก</p>
        <p className="mt-2 text-blue-100 text-sm">รู้ว่าจะใช้ผ้าอ้อมยี่ห้อไหน และคิดค่าใช้จ่ายล่วงหน้า</p>
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
