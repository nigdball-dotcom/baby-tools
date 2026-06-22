import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import FAQ from '@/components/FAQ'
import { articleSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem, TOCItem } from '@/types'

const SLUG = 'newborn-essentials-checklist'
const TITLE = 'ของใช้เด็กแรกเกิดต้องมีอะไรบ้าง? เช็กลิสต์ฉบับสมบูรณ์ปี 2026'
const DESCRIPTION =
  'รายการของใช้เด็กแรกเกิดที่จำเป็นทั้งหมด แบ่งหมวดหมู่ชัดเจน พร้อมงบประมาณแนะนำ รู้ว่าอะไรต้องซื้อ อะไรรอได้ และอะไรที่ไม่จำเป็นต้องซื้อเลย'
const DATE = '2026-06-22'
const URL = `/blog/${SLUG}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'ของใช้เด็กแรกเกิด',
    'เช็กลิสต์ของใช้เด็ก',
    'ของใช้ทารกแรกเกิด',
    'ต้องซื้ออะไรก่อนลูกคลอด',
    'ของเตรียมก่อนคลอด',
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
  { id: 'bedroom', label: 'ของใช้ในห้องนอน' },
  { id: 'feeding', label: 'ของใช้สำหรับให้นม' },
  { id: 'diaper', label: 'ของใช้สำหรับเปลี่ยนผ้าอ้อม' },
  { id: 'bath', label: 'ของใช้สำหรับอาบน้ำ' },
  { id: 'clothing', label: 'เสื้อผ้าและของใช้ส่วนตัว' },
  { id: 'outing', label: 'ของใช้สำหรับออกนอกบ้าน' },
  { id: 'not-needed', label: 'สิ่งที่ไม่จำเป็นต้องซื้อ' },
  { id: 'budget', label: 'งบประมาณแนะนำ' },
  { id: 'faq', label: 'คำถามที่พบบ่อย' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'ต้องซื้อของใช้เด็กทั้งหมดก่อนลูกคลอดไหม?',
    answer:
      'ไม่จำเป็น ควรซื้อของจำเป็นพื้นฐานก่อน เช่น ที่นอน ผ้าอ้อม เสื้อผ้า และอุปกรณ์ให้นม สิ่งอื่นๆ รอให้ลูกคลอดและรู้ว่าต้องการอะไรก่อนค่อยซื้อ จะประหยัดกว่ามาก',
  },
  {
    question: 'ของใช้เด็กมือสองซื้อได้ไหม?',
    answer:
      'ซื้อได้สำหรับของชิ้นใหญ่อย่างรถเข็นและเปลเปลือก แต่ไม่แนะนำสำหรับที่นอนเด็ก (เพราะสุขอนามัยและความเสี่ยง SIDS) และที่นั่งรถยนต์ (เพราะอาจเคยผ่านอุบัติเหตุ)',
  },
  {
    question: 'ควรซื้อผ้าอ้อมไซส์ NB ไว้มากแค่ไหน?',
    answer:
      'ไม่แนะนำให้ซื้อมากกว่า 1–2 แพ็ก เพราะลูกส่วนใหญ่ใช้ไซส์ NB เพียง 1–3 สัปดาห์ โดยเฉพาะถ้าลูกมีน้ำหนักแรกเกิดมากกว่า 3.5 กก. อาจข้ามไปไซส์ S เลย',
  },
  {
    question: 'กระเป๋าคลอดต้องเตรียมอะไรบ้าง?',
    answer:
      'ของสำคัญในกระเป๋าคลอด: เอกสารประจำตัว, บัตรประกัน, เสื้อผ้าแม่และลูก 2–3 ชุด, ผ้าอ้อม 1 แพ็ก, ผ้าห่ม, ชุดกลับบ้านของลูก, ครีมทาหัวนม, และของใช้ส่วนตัวของแม่',
  },
  {
    question: 'เปลเด็กแบบไหนดีที่สุด?',
    answer:
      'เปลที่ดีควรมีรั้วกั้น 4 ด้านสูงพอ ที่นอนแน่น ไม่นุ่มเกินไป ไม่มีช่องว่างระหว่างที่นอนกับขอบเปล และปรับความสูงได้ ยี่ห้อยอดนิยมในไทย เช่น Combi, Aprica และ IKEA เปล SNIGLAR',
  },
]

function ChecklistItem({ items, essential = true }: { items: string[]; essential?: boolean }) {
  return (
    <ul className="space-y-1">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className={`mt-0.5 text-sm font-bold ${essential ? 'text-blue-500' : 'text-gray-400'}`}>
            {essential ? '✓' : '○'}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function NewbornEssentialsChecklistPage() {
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
      category="คำแนะนำสำหรับพ่อแม่"
      breadcrumbs={[
        { label: 'หน้าแรก', href: '/' },
        { label: 'บล็อก', href: '/blog' },
        { label: 'ของใช้เด็กแรกเกิด' },
      ]}
      toc={TOC}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <p>
        การเตรียมของสำหรับลูกน้อยก่อนคลอดเป็นหนึ่งในขั้นตอนที่สนุกที่สุด แต่ก็อาจล้นหลามได้ง่าย
        เพราะตลาดสินค้าเด็กมีของให้เลือกมากมายจนไม่รู้จะเริ่มต้นจากตรงไหน
      </p>
      <p>
        บทความนี้รวบรวม<strong>เช็กลิสต์ของใช้เด็กแรกเกิด</strong>ที่จำเป็นจริงๆ แบ่งหมวดหมู่ชัดเจน
        บอกว่าอะไรต้องซื้อก่อนคลอด อะไรรอได้ และอะไรที่ไม่จำเป็นต้องซื้อเลย
      </p>

      <h2 id="bedroom">ของใช้ในห้องนอน (จำเป็นมาก)</h2>
      <p>สิ่งแรกที่ต้องมีคือที่นอนปลอดภัยสำหรับลูก:</p>
      <ChecklistItem items={[
        'เปลหรือที่นอนเด็กพร้อมรั้วกั้น — แนะนำเปลแบบมาตรฐานที่มีความสูงพอ',
        'ที่นอนแข็งพอดีกับเปล — ไม่นุ่มเกินไป ป้องกันหัวกด',
        'ผ้าปูที่นอนฝ้าย 2–3 ผืน — ยิ่งนุ่มยิ่งดี เปลี่ยนง่ายเมื่อเลอะ',
        'ผ้าห่มบางเบา 1–2 ผืน — ห้องแอร์ไทยเย็น ลูกอาจต้องการ',
        'เครื่องเปลเด็ก/สายลม (ไม่จำเป็น แต่ช่วยได้มาก)',
        'เสียงขาว (White noise machine) หรือแอปเสียงขาว — ช่วยให้หลับง่ายขึ้น',
      ]} />
      <p className="mt-2 text-sm text-gray-500">
        <strong>หมายเหตุ:</strong> ไม่แนะนำให้ใช้หมอนข้าง ผ้าคลุมหนัก หรือของเล่นในเปลก่อนอายุ 12 เดือน
        เพราะเพิ่มความเสี่ยง SIDS
      </p>

      <h2 id="feeding">ของใช้สำหรับให้นม</h2>
      <p><strong>สำหรับแม่ที่ให้นมแม่:</strong></p>
      <ChecklistItem items={[
        'เครื่องปั๊มนม — แบบไฟฟ้าคู่ประหยัดเวลา',
        'ถุงเก็บนม / ขวดเก็บนม',
        'ครีมทาหัวนม (lanolin cream)',
        'แผ่นซับน้ำนม',
        'หมอนรองให้นม (nursing pillow)',
      ]} />
      <p className="mt-3"><strong>สำหรับนมผง:</strong></p>
      <ChecklistItem items={[
        'ขวดนม 4–6 ขวด (ขนาด 150 มล. สำหรับแรกเกิด)',
        'จุกนม ไซส์ S (เปลี่ยนตามอายุ)',
        'แปรงล้างขวดนม',
        'เครื่องนึ่งฆ่าเชื้อขวดนม',
        'ที่อุ่นนม (optional แต่ช่วยได้มากกลางคืน)',
      ]} />

      <h2 id="diaper">ของใช้สำหรับเปลี่ยนผ้าอ้อม</h2>
      <ChecklistItem items={[
        'ผ้าอ้อมไซส์ NB 1–2 แพ็ก (อย่าซื้อมากเกินไป)',
        'ผ้าอ้อมไซส์ S 2–3 แพ็ก (ใช้นานกว่า)',
        'ผ้าเปียกไม่มีแอลกอฮอล์ไม่มีน้ำหอม',
        'ครีมกันผื่นผ้าอ้อม (Sudocrem, Bepanthen)',
        'แผ่นรองเปลี่ยนผ้าอ้อม + ถาดเปลี่ยนผ้าอ้อม',
        'ถุงทิ้งผ้าอ้อม (diaper bag)',
      ]} />
      <p>
        สำหรับข้อมูลการเลือกผ้าอ้อมที่เหมาะกับลูก อ่านได้ที่{' '}
        <Link href="/blog/diaper-brand-comparison">ผ้าอ้อมยี่ห้อไหนดีที่สุด</Link>{' '}
        และ{' '}
        <Link href="/blog/diaper-size-guide">คู่มือไซส์ผ้าอ้อมทุกยี่ห้อ</Link>
      </p>

      <h2 id="bath">ของใช้สำหรับอาบน้ำ</h2>
      <ChecklistItem items={[
        'อ่างอาบน้ำเด็ก — แบบมีที่รองหลังสะดวกกว่าสำหรับแรกเกิด',
        'สบู่อาบน้ำเด็ก สูตรอ่อนโยน ไม่มีน้ำหอม',
        'แชมพูเด็ก (แบบไม่แสบตา)',
        'ผ้าเช็ดตัวเด็ก (หัวจิงโจ้) 2–3 ผืน',
        'สำลีก้านขนาดเล็กสำหรับเช็ดหู',
        'กรรไกรตัดเล็บเด็กหรือที่ตะไบเล็บ',
        'เครื่องดูดน้ำมูก (bulb syringe)',
        'ปรอทวัดอุณหภูมิแบบทวารหนัก (แม่นยำที่สุดสำหรับทารก)',
      ]} />

      <h2 id="clothing">เสื้อผ้าและของใช้ส่วนตัว</h2>
      <p>ซื้อเสื้อผ้าให้น้อยลง เพราะลูกโตเร็วมาก:</p>
      <ChecklistItem items={[
        'ชุดนอน/บอดี้สูท ไซส์ NB: 4–5 ชุด',
        'ชุดนอน/บอดี้สูท ไซส์ 0–3 เดือน: 5–6 ชุด',
        'ถุงมือ ถุงเท้า ไว้คลุมทารก',
        'หมวกสำหรับโรงพยาบาล 2–3 ใบ',
        'ผ้ากันเปื้อน 3–4 ผืน',
        'ผ้ามัสลิน 4–6 ผืน (ใช้ได้หลายอย่างมาก)',
      ]} />

      <h2 id="outing">ของใช้สำหรับออกนอกบ้าน</h2>
      <ChecklistItem items={[
        'รถเข็นเด็ก — เลือกแบบที่นอนราบได้สำหรับแรกเกิด',
        'ที่นั่งรถยนต์เด็ก (Infant car seat) — จำเป็นมากสำหรับเดินทาง',
        'กระเป๋าสัมภาระเด็ก (diaper bag) ขนาดพอดี',
        'ผ้าคลุมสำหรับให้นมหรือกำบังแดด',
      ]} />

      <h2 id="not-needed">สิ่งที่ไม่จำเป็นต้องซื้อ (ประหยัดเงินได้เยอะ)</h2>
      <ChecklistItem essential={false} items={[
        'เครื่องเขย่าหรือแกว่งอัตโนมัติ — ราคาแพง และลูกอาจไม่ชอบก็ได้',
        'ที่อาบน้ำแบบฝักบัว — อ่างธรรมดาใช้ได้ดีกว่า',
        'กล้อง baby monitor แบบวิดีโอในห้องเดียวกัน — ไม่จำเป็นถ้าห้องเล็ก',
        'เสื้อผ้าเด็กแบบแฟชั่น จำนวนมาก — ลูกโตเร็ว ใส่ได้ไม่กี่ครั้ง',
        'ของเล่นจำนวนมากสำหรับแรกเกิด — ลูกยังมองไม่ชัดในช่วงแรก',
        'เปลสนามราคาแพง — ใช้ผ้ามัสลินหรือผ้าห่มรองบนพื้นแทนได้',
      ]} />

      <h2 id="budget">งบประมาณแนะนำ</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">หมวดหมู่</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">งบประหยัด</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">งบปานกลาง</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['ห้องนอน (เปล + ที่นอน)', '3,000–5,000', '8,000–15,000'],
              ['ให้นม + ขวดนม', '2,000–5,000', '5,000–12,000'],
              ['ผ้าอ้อม (2 เดือนแรก)', '1,500–3,000', '3,000–5,000'],
              ['อาบน้ำ + ดูแล', '1,000–2,000', '2,000–4,000'],
              ['เสื้อผ้า', '1,000–3,000', '3,000–8,000'],
              ['รถเข็น + car seat', '3,000–6,000', '10,000–25,000'],
              ['รวม', '11,500–24,000', '31,000–69,000'],
            ].map(([cat, low, mid]) => (
              <tr key={cat} className={`hover:bg-gray-50 ${cat === 'รวม' ? 'font-bold bg-gray-50' : ''}`}>
                <td className="px-4 py-3 text-gray-800">{cat}</td>
                <td className="px-4 py-3 text-green-600">{low} ฿</td>
                <td className="px-4 py-3 text-blue-600">{mid} ฿</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        สำหรับค่าใช้จ่ายรายเดือนหลังจากลูกคลอด รวมถึงค่าผ้าอ้อม ค่านม และอื่นๆ
        อ่านได้ที่{' '}
        <Link href="/blog/baby-first-year-expenses">ค่าใช้จ่ายมีลูกปีแรก</Link>
      </p>

      <div className="not-prose my-6 rounded-2xl bg-blue-600 p-6 text-center text-white">
        <p className="font-bold text-lg">คำนวณค่าผ้าอ้อมตลอดปีแรก</p>
        <p className="mt-2 text-blue-100 text-sm">วางแผนงบประมาณผ้าอ้อมให้แม่นยำด้วยเครื่องคำนวณฟรี</p>
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
