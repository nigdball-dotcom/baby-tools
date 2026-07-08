import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import FAQ from '@/components/FAQ'
import { articleSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem, TOCItem } from '@/types'

const SLUG = 'mamypoko-vs-babylove'
const TITLE = 'MamyPoko vs BabyLove 2026 ยี่ห้อไหนดีกว่า?'
const DESCRIPTION =
  'เปรียบเทียบ MamyPoko และ BabyLove ด้านราคา คุณภาพ การซับซึม และความเหมาะสมกับลูกน้อย เพื่อช่วยให้คุณตัดสินใจได้ง่ายขึ้น'
const DATE = '2026-06-15'
const URL = `/blog/${SLUG}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'MamyPoko vs BabyLove',
    'เปรียบเทียบผ้าอ้อม',
    'MamyPoko ดีไหม',
    'BabyLove ดีไหม',
    'ผ้าอ้อมยี่ห้อไหนดี',
    'MamyPoko หรือ BabyLove',
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
  { id: 'overview', label: 'ภาพรวม MamyPoko และ BabyLove' },
  { id: 'price', label: 'เปรียบเทียบราคา' },
  { id: 'quality', label: 'เปรียบเทียบคุณภาพ' },
  { id: 'absorption', label: 'ประสิทธิภาพการซับซึม' },
  { id: 'skin', label: 'ความอ่อนโยนต่อผิว' },
  { id: 'verdict', label: 'สรุป: ควรเลือกยี่ห้อไหน?' },
  { id: 'faq', label: 'คำถามที่พบบ่อย' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'MamyPoko กับ BabyLove ยี่ห้อไหนซับดีกว่า?',
    answer:
      'MamyPoko มีประสิทธิภาพการซับซึมที่ดีกว่าโดยรวม โดยเฉพาะรุ่น Extra Dry ที่ดูดซับได้รวดเร็วและป้องกันการรั่วซึมได้ดี อย่างไรก็ตาม BabyLove Speed+ ก็ซับได้ดีมากสำหรับราคาที่ถูกกว่า',
  },
  {
    question: 'BabyLove ราคาถูกกว่า MamyPoko มากไหม?',
    answer:
      'BabyLove มีราคาถูกกว่า MamyPoko ประมาณ 15–25% ต่อชิ้น ความแตกต่างนี้อาจดูเล็กน้อยต่อชิ้น แต่เมื่อคำนวณต่อปีแล้วประหยัดได้หลายร้อยถึงหลักพันบาท',
  },
  {
    question: 'ผ้าอ้อมยี่ห้อไหนเหมาะกับเด็กผิวแพ้ง่าย?',
    answer:
      'ทั้ง MamyPoko และ BabyLove ผ่านการทดสอบจากผิวแพทย์ (dermatologist tested) แต่ถ้าลูกมีผิวแพ้ง่ายมาก ควรทดลองใช้ก่อนซื้อในปริมาณมาก บางครั้งยี่ห้อพรีเมียมอย่าง Huggies Gold ที่มีผิวสัมผัสนุ่มเป็นพิเศษอาจเหมาะกว่า',
  },
  {
    question: 'ควรเปลี่ยนยี่ห้อบ่อยๆ ไหม?',
    answer:
      'ไม่แนะนำให้เปลี่ยนยี่ห้อบ่อยมาก เพราะผิวลูกต้องปรับตัวกับส่วนผสมใหม่ ถ้ายี่ห้อที่ใช้อยู่ไม่มีปัญหา ก็ควรใช้ต่อไป เว้นแต่ต้องการลดค่าใช้จ่ายหรือลูกเริ่มมีอาการแพ้',
  },
]

export default function MamypokoVsBabylove() {
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
      showProducts
      date={DATE}
      readingTime="7 นาที"
      category="รีวิวสินค้า"
      breadcrumbs={[
        { label: 'หน้าแรก', href: '/' },
        { label: 'บล็อก', href: '/blog' },
        { label: 'MamyPoko vs BabyLove' },
      ]}
      toc={TOC}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <p>
        <strong>MamyPoko</strong> และ <strong>BabyLove</strong> เป็นสองยี่ห้อผ้าอ้อมที่ได้รับความนิยมสูงสุดในไทย
        พ่อแม่หลายคนสับสนว่าควรเลือกยี่ห้อไหน บทความนี้เปรียบเทียบทั้งสองอย่างละเอียดเพื่อช่วยให้คุณตัดสินใจได้ง่ายขึ้น
      </p>

      <h2 id="overview">ภาพรวม MamyPoko และ BabyLove</h2>

      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">หัวข้อ</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">MamyPoko</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">BabyLove</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['ประเทศต้นกำเนิด', 'ญี่ปุ่น (Unicharm)', 'ไทย'],
              ['ระดับราคา', 'กลาง–สูง', 'ประหยัด–กลาง'],
              ['รุ่นยอดนิยม', 'Standard, Extra Dry, Air Fit', 'Speed+, Speed Magic'],
              ['จุดเด่น', 'ซับดี ดีไซน์น่ารัก', 'คุ้มค่า ราคาเข้าถึงง่าย'],
              ['Dermatologist tested', '✓', '✓'],
            ].map(([topic, mamypoko, babylove]) => (
              <tr key={topic} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-700">{topic}</td>
                <td className="px-4 py-3 text-gray-600">{mamypoko}</td>
                <td className="px-4 py-3 text-gray-600">{babylove}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="price">เปรียบเทียบราคา</h2>
      <p>ราคาโดยประมาณสำหรับไซส์ M (ข้อมูลอาจแตกต่างตามร้านค้าและโปรโมชั่น):</p>
      <ul>
        <li>
          <strong>BabyLove Speed+ M (50 ชิ้น)</strong> — ประมาณ 200–250 บาท (~4–5 บาท/ชิ้น)
        </li>
        <li>
          <strong>MamyPoko Standard M (60 ชิ้น)</strong> — ประมาณ 340–420 บาท (~5.7–7 บาท/ชิ้น)
        </li>
      </ul>
      <p>
        ความแตกต่างของราคาต่อชิ้นอยู่ที่ประมาณ <strong>1–2 บาท</strong> ฟังดูน้อย
        แต่ถ้าลูกใช้ 8 ชิ้น/วัน ประหยัดได้ประมาณ <strong>240–480 บาท/เดือน</strong> หรือ{' '}
        <strong>2,900–5,700 บาท/ปี</strong>
      </p>

      <blockquote>
        <p>
          💡 ต้องการเปรียบเทียบค่าใช้จ่ายระหว่างสองยี่ห้อแบบละเอียด?{' '}
          <Link href="/tools/diaper-cost">ลองใช้เครื่องคำนวณค่าผ้าอ้อมของเรา</Link>{' '}
          — กรอกราคาของแต่ละยี่ห้อแล้วดูผลลัพธ์ทันที
        </p>
      </blockquote>
      <p>
        อ่านตารางเปรียบเทียบค่าใช้จ่ายรายเดือนแยกยี่ห้อได้ที่{' '}
        <Link href="/blog/monthly-diaper-cost">ผ้าอ้อมเด็กเดือนละกี่บาท? ตารางเปรียบเทียบ 2026</Link>
      </p>

      <h2 id="quality">เปรียบเทียบคุณภาพ</h2>
      <p>นอกจากราคา ยังมีปัจจัยคุณภาพอื่นที่ควรพิจารณา:</p>
      <ul>
        <li>
          <strong>ความกระชับและรูปทรง</strong> — MamyPoko ออกแบบมาให้กระชับกว่า
          เหมาะกับเด็กที่เคลื่อนไหวเยอะ BabyLove มีรูปทรงปกติมากกว่า
        </li>
        <li>
          <strong>เนื้อผ้า</strong> — ทั้งสองยี่ห้อใช้วัสดุที่นุ่มและปลอดภัย
          MamyPoko บางรุ่นมีผิวสัมผัสนุ่มกว่าเล็กน้อย
        </li>
        <li>
          <strong>แถบยางขอบขา</strong> — MamyPoko มักมีแถบยางที่ยืดหยุ่นดีกว่า ลดการรั่วซึมออกด้านข้าง
        </li>
        <li>
          <strong>Wetness indicator</strong> — ทั้งสองมีแถบแสดงความชื้น ช่วยให้รู้ว่าต้องเปลี่ยนเมื่อไร
        </li>
      </ul>

      <h2 id="absorption">ประสิทธิภาพการซับซึม</h2>
      <p>
        การซับซึมเป็นปัจจัยสำคัญที่สุดสำหรับพ่อแม่หลายคน โดยเฉพาะสำหรับเด็กที่นอนนาน:
      </p>
      <ul>
        <li>
          <strong>MamyPoko Extra Dry</strong> — ซับได้เร็วและแห้งดีมาก เหมาะสำหรับกลางคืน
          ผ่านการทดสอบการซับซึมสูงสุดในไทย
        </li>
        <li>
          <strong>BabyLove Speed+ Magic</strong> — ซับเร็วดี เหมาะสำหรับการใช้งานทั่วไปในเวลากลางวัน
          บางครั้งอาจรั่วซึมถ้าลูกฉี่ปริมาณมากในคราวเดียว
        </li>
      </ul>

      <h2 id="skin">ความอ่อนโยนต่อผิว</h2>
      <p>
        ทั้ง MamyPoko และ BabyLove ผ่านการทดสอบจากผิวแพทย์และปราศจากสารระคายเคืองหลัก
        อย่างไรก็ตาม เด็กแต่ละคนมีผิวที่แตกต่างกัน:
      </p>
      <ul>
        <li>ถ้าลูกผิวธรรมดา: ทั้งสองยี่ห้อใช้ได้ดีเท่าๆ กัน</li>
        <li>ถ้าลูกผิวแพ้ง่าย: ลองทั้งสองก่อนตัดสินใจซื้อจำนวนมาก</li>
        <li>ถ้ามีผื่นผ้าอ้อมบ่อย: อาจต้องพิจารณายี่ห้อพรีเมียมอย่าง Huggies Gold</li>
      </ul>

      <h2 id="verdict">สรุป: ควรเลือกยี่ห้อไหน?</h2>

      <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-5">
          <h3 className="font-bold text-green-800 mb-2">✅ เลือก BabyLove ถ้า...</h3>
          <ul className="space-y-1 text-sm text-green-700">
            <li>• ต้องการประหยัดค่าใช้จ่าย</li>
            <li>• ลูกไม่มีปัญหาผิวแพ้</li>
            <li>• ใช้สำหรับกลางวันที่เปลี่ยนบ่อย</li>
            <li>• งบประมาณครอบครัวค่อนข้างจำกัด</li>
          </ul>
        </div>
        <div className="rounded-2xl border-2 border-orange-200 bg-orange-50 p-5">
          <h3 className="font-bold text-orange-800 mb-2">✅ เลือก MamyPoko ถ้า...</h3>
          <ul className="space-y-1 text-sm text-orange-700">
            <li>• ต้องการการซับซึมสูงกว่า</li>
            <li>• ลูกนอนนานหรือใส่กลางคืน</li>
            <li>• ลูกเคลื่อนไหวเยอะ ต้องการรูปทรงกระชับ</li>
            <li>• งบประมาณยืดหยุ่นได้</li>
          </ul>
        </div>
      </div>

      <p>
        สุดท้ายแล้ว ไม่มียี่ห้อไหนดีที่สุดสำหรับทุกคน ทดลองใช้ทั้งสองก่อน
        แล้วดูว่าลูกน้อยของคุณชอบแบบไหน และใช้{' '}
        <Link href="/tools/diaper-cost">เครื่องคำนวณค่าผ้าอ้อมของเรา</Link>{' '}
        เพื่อเปรียบเทียบค่าใช้จ่ายรายเดือนระหว่างสองยี่ห้อ
      </p>

      <h2 id="faq">คำถามที่พบบ่อย</h2>
      <FAQ items={FAQ_ITEMS} />
    </BlogLayout>
  )
}
