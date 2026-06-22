import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import FAQ from '@/components/FAQ'
import { articleSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem, TOCItem } from '@/types'

const SLUG = 'breastmilk-vs-formula'
const TITLE = 'นมแม่ vs นมผง ต่างกันอย่างไร? ข้อดีข้อเสียที่พ่อแม่ควรรู้'
const DESCRIPTION =
  'เปรียบเทียบนมแม่และนมผงอย่างละเอียด ด้านโภชนาการ ภูมิคุ้มกัน ความสะดวก และค่าใช้จ่าย เพื่อช่วยให้พ่อแม่ตัดสินใจได้ตามบริบทของครอบครัว โดยไม่มีตัวเลือกที่ผิดหรือถูก'
const DATE = '2026-06-22'
const URL = `/blog/${SLUG}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'นมแม่ vs นมผง',
    'นมแม่ดีกว่านมผงไหม',
    'เลี้ยงลูกด้วยนมผง',
    'ข้อดีนมแม่',
    'นมผงสูตรไหนดี',
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
  { id: 'breastmilk-pros', label: 'ข้อดีของนมแม่' },
  { id: 'breastmilk-cons', label: 'ข้อจำกัดของนมแม่' },
  { id: 'formula-pros', label: 'ข้อดีของนมผง' },
  { id: 'formula-cons', label: 'ข้อจำกัดของนมผง' },
  { id: 'nutrition', label: 'เปรียบเทียบด้านโภชนาการ' },
  { id: 'cost', label: 'เปรียบเทียบด้านค่าใช้จ่าย' },
  { id: 'when-formula', label: 'เมื่อไหรควรเสริมนมผง' },
  { id: 'faq', label: 'คำถามที่พบบ่อย' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'ให้นมผงแทนนมแม่ตั้งแต่แรกได้ไหม?',
    answer:
      'ได้ นมผงสมัยใหม่ถูกออกแบบมาให้มีคุณค่าทางโภชนาการใกล้เคียงนมแม่มากที่สุด แต่ยังไม่มีภูมิคุ้มกันและสารกระตุ้นการเจริญเติบโตที่มีเฉพาะในนมแม่ ทั้งนี้ขึ้นอยู่กับความสามารถและความต้องการของแต่ละครอบครัว',
  },
  {
    question: 'นมแม่ให้นานแค่ไหนถึงจะดีที่สุด?',
    answer:
      'WHO แนะนำให้นมแม่อย่างเดียวอย่างน้อย 6 เดือน และต่อเนื่องพร้อมอาหารเสริมไปจนถึง 2 ปีขึ้นไปหากเป็นไปได้ แต่แม้ให้นมแม่ได้แค่ 3–6 เดือน ก็ยังมีประโยชน์ต่อลูกมาก',
  },
  {
    question: 'ควรผสมนมแม่กับนมผงได้ไหม?',
    answer:
      'ได้ ไม่มีผลเสียใดๆ แม่หลายคนเลือกให้นมแม่เป็นหลักและเสริมนมผงเมื่อจำเป็น เช่น ตอนแม่ออกไปทำงาน หรือตอนที่น้ำนมน้อยลงชั่วคราว',
  },
  {
    question: 'นมผงสูตรไหนดีที่สุดถ้าต้องใช้?',
    answer:
      'ไม่มีสูตรเดียวที่ดีที่สุดสำหรับทุกคน แต่สูตรที่ใช้นมวัวเป็นฐานและได้รับการรับรองมาตรฐานสากลนั้นปลอดภัยและมีคุณค่าทางโภชนาการเพียงพอ ควรปรึกษากุมารแพทย์หากลูกมีอาการแพ้หรือย่อยยาก',
  },
  {
    question: 'ค่าใช้จ่ายนมผงต่อเดือนเท่าไร?',
    answer:
      'สำหรับทารกแรกเกิดที่กินนมผงอย่างเดียว ค่าใช้จ่ายอยู่ที่ประมาณ 2,500–5,000 บาทต่อเดือนสำหรับนมสูตรมาตรฐาน และ 4,000–8,000 บาทสำหรับนมสูตรพรีเมียม',
  },
]

export default function BreastmilkVsFormulaPage() {
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
      category="การให้นมลูก"
      breadcrumbs={[
        { label: 'หน้าแรก', href: '/' },
        { label: 'บล็อก', href: '/blog' },
        { label: 'นมแม่ vs นมผง' },
      ]}
      toc={TOC}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <p>
        "นมแม่กับนมผง อันไหนดีกว่า?" เป็นหนึ่งในคำถามที่ถกเถียงกันมากที่สุดในโลกของการเลี้ยงลูก
        คำตอบที่ถูกต้องคือ: ขึ้นอยู่กับแต่ละครอบครัว และไม่มีตัวเลือกที่ "ผิด"
      </p>
      <p>
        บทความนี้นำเสนอข้อเท็จจริงทั้งสองด้านอย่างครบถ้วน เพื่อให้คุณตัดสินใจได้
        โดยอิงจากข้อมูลทางวิทยาศาสตร์ ไม่ใช่ความกดดันจากสังคม
      </p>

      <h2 id="breastmilk-pros">ข้อดีของนมแม่</h2>
      <ul>
        <li>
          <strong>ภูมิคุ้มกันที่ไม่มีในนมผง</strong> — นมแม่มี antibody, lactoferrin และ white blood cell
          ที่ช่วยปกป้องลูกจากการติดเชื้อโดยเฉพาะในช่วง 6 เดือนแรกที่ภูมิคุ้มกันของลูกยังพัฒนาไม่สมบูรณ์
        </li>
        <li>
          <strong>โภชนาการที่ปรับตามลูก</strong> — ส่วนประกอบของนมแม่เปลี่ยนแปลงตามอายุและความต้องการของลูก
          แม้แต่ในมื้อเดียวกัน น้ำนมช่วงต้น (foremilk) จะเป็นน้ำเป็นหลัก น้ำนมช่วงหลัง (hindmilk) จะมีไขมันสูง
        </li>
        <li>
          <strong>ลดความเสี่ยงโรคในอนาคต</strong> — งานวิจัยพบว่าเด็กที่กินนมแม่มีความเสี่ยงต่ำกว่า
          ในโรคหอบหืด, อ้วน, เบาหวานชนิดที่ 1, และมะเร็งบางชนิด
        </li>
        <li>
          <strong>ประหยัดที่สุด</strong> — ไม่มีค่าใช้จ่ายด้านนม แม้จะมีค่าเครื่องปั๊มนมและอุปกรณ์บ้าง
        </li>
        <li>
          <strong>ดีต่อแม่ด้วย</strong> — ลดความเสี่ยงมะเร็งเต้านมและรังไข่ ช่วยให้มดลูกเข้าอู่เร็วขึ้น
          และช่วยลดน้ำหนักหลังคลอด
        </li>
      </ul>

      <h2 id="breastmilk-cons">ข้อจำกัดของนมแม่</h2>
      <ul>
        <li><strong>วัดปริมาณไม่ได้</strong> — ไม่รู้ว่าลูกได้รับนมเพียงพอไหม ต้องใช้น้ำหนักและจำนวนผ้าอ้อมเปียกเป็นตัวชี้วัด</li>
        <li><strong>ผูกกับแม่</strong> — ในช่วงแรก ลูกจะกินนมบ่อยมาก บางครั้งทุก 1–2 ชั่วโมง ทำให้แม่พักผ่อนได้น้อย</li>
        <li><strong>เจ็บหัวนม</strong> — โดยเฉพาะในช่วงแรก กว่าจะดูดถูกท่า มักเจ็บปวดมาก</li>
        <li><strong>น้ำนมน้อยหรือไม่มี</strong> — บางครั้งเกิดจากปัญหาสุขภาพหรือความเครียด</li>
        <li><strong>ข้อจำกัดด้านอาหารและยา</strong> — สารบางชนิดที่แม่กินเข้าไปสามารถผ่านนมสู่ลูกได้</li>
      </ul>

      <h2 id="formula-pros">ข้อดีของนมผง</h2>
      <ul>
        <li><strong>วัดปริมาณได้แน่นอน</strong> — รู้ชัดว่าลูกได้รับนมเท่าไรในแต่ละมื้อ</li>
        <li><strong>ยืดหยุ่นกว่า</strong> — คนอื่นช่วยให้นมได้ พ่อก็ให้นมได้เหมือนกัน</li>
        <li><strong>แม่พักผ่อนได้มากขึ้น</strong> — สลับกับคนอื่นให้นมกลางคืนได้</li>
        <li><strong>ไม่มีข้อจำกัดด้านอาหารของแม่</strong> — แม่กินอะไรก็ได้โดยไม่ต้องกังวล</li>
        <li><strong>เหมาะสำหรับแม่ที่ทำงาน</strong> — ไม่ต้องพึ่งเครื่องปั๊มนมตลอดเวลา</li>
      </ul>

      <h2 id="formula-cons">ข้อจำกัดของนมผง</h2>
      <ul>
        <li><strong>ค่าใช้จ่ายสูง</strong> — 2,500–5,000 บาทต่อเดือนหรือมากกว่า ตลอด 1–2 ปี</li>
        <li><strong>ไม่มีภูมิคุ้มกัน</strong> — นมผงไม่สามารถสร้าง antibody แบบเดียวกับนมแม่ได้</li>
        <li><strong>ต้องเตรียมล่วงหน้า</strong> — ต้องผสม ต้องอุ่น ยุ่งยากกลางดึก</li>
        <li><strong>เสี่ยงแพ้นมวัว</strong> — ลูกประมาณ 2–3% แพ้โปรตีนในนมวัว</li>
      </ul>

      <h2 id="nutrition">เปรียบเทียบด้านโภชนาการ</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ด้าน</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">นมแม่</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">นมผง</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['โปรตีน', 'ปรับตามวัยอัตโนมัติ', 'คงที่ตามสูตร'],
              ['ภูมิคุ้มกัน (Antibody)', '✓ มี', '✗ ไม่มี'],
              ['DHA / ARA', '✓ มีตามธรรมชาติ', '✓ เติมเพิ่ม'],
              ['Probiotics', '✓ มี', 'บางสูตรเติมเพิ่ม'],
              ['วิตามิน D', '✗ ต่ำกว่าเกณฑ์ (ต้องเสริม)', '✓ เติมเพียงพอ'],
              ['ธาตุเหล็ก', '✗ ต่ำ (ลูกใช้ reserve แรกเกิด)', '✓ เติมในปริมาณพอ'],
            ].map(([aspect, breast, formula]) => (
              <tr key={aspect} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{aspect}</td>
                <td className="px-4 py-3 text-gray-600">{breast}</td>
                <td className="px-4 py-3 text-gray-600">{formula}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="cost">เปรียบเทียบด้านค่าใช้จ่าย</h2>
      <ul>
        <li><strong>นมแม่</strong> — ไม่มีค่านม แต่อาจมีค่าเครื่องปั๊มนม 3,000–8,000 บาท, ถุงเก็บนม, และอาหารเสริมสำหรับแม่ รวมประมาณ 5,000–15,000 บาทตลอดการให้นม</li>
        <li><strong>นมผง ระดับกลาง</strong> — ประมาณ 2,500–3,500 บาท/เดือน × 12 เดือน = 30,000–42,000 บาท</li>
        <li><strong>นมผง พรีเมียม</strong> — ประมาณ 4,000–6,000 บาท/เดือน × 12 เดือน = 48,000–72,000 บาท</li>
      </ul>
      <p>
        ค่านมผงเป็นค่าใช้จ่ายก้อนใหญ่มากในปีแรก อ่านการวางแผนค่าใช้จ่ายทั้งหมดได้ที่{' '}
        <Link href="/blog/monthly-baby-budget">งบประมาณเลี้ยงลูกต่อเดือน</Link>
      </p>

      <h2 id="when-formula">เมื่อไหรควรเสริมหรือเปลี่ยนเป็นนมผง</h2>
      <ul>
        <li>น้ำนมแม่ไม่พอ หลังจากพยายามปั๊มและให้นมบ่อยแล้ว</li>
        <li>แม่มีสุขภาพที่ไม่อนุญาตให้ให้นมแม่ เช่น รับยาบางชนิด</li>
        <li>ลูกน้ำหนักไม่ขึ้นตามเกณฑ์ หลังปรึกษาแพทย์แล้ว</li>
        <li>แม่ต้องกลับไปทำงานและไม่สามารถปั๊มนมได้เพียงพอ</li>
        <li>ครอบครัวตัดสินใจเลือกนมผงตั้งแต่แรก — ซึ่งเป็นสิทธิ์ที่ถูกต้องสมบูรณ์</li>
      </ul>

      <div className="not-prose my-6 rounded-2xl bg-blue-600 p-6 text-center text-white">
        <p className="font-bold text-lg">คำนวณค่าผ้าอ้อมควบคู่กับการวางแผนค่านม</p>
        <p className="mt-2 text-blue-100 text-sm">เครื่องคำนวณของเราช่วยให้วางแผนค่าใช้จ่ายรายเดือนได้แม่นยำขึ้น</p>
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
