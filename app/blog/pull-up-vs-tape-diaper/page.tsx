import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import FAQ from '@/components/FAQ'
import { articleSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem, TOCItem } from '@/types'

const SLUG = 'pull-up-vs-tape-diaper'
const TITLE = 'ผ้าอ้อมแบบใส่ (Pull-up) vs แบบเทป ต่างกันอย่างไร? เลือกแบบไหนดี'
const DESCRIPTION =
  'เปรียบเทียบผ้าอ้อมแบบเทปและแบบกางเกง (pull-up) ด้านการใช้งาน ความสะดวก ราคา และช่วงอายุที่เหมาะสม เพื่อให้คุณเลือกได้ถูกต้องตามวัยและพฤติกรรมของลูก'
const DATE = '2026-06-22'
const URL = `/blog/${SLUG}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'ผ้าอ้อมแบบใส่ vs แบบเทป',
    'ผ้าอ้อมกางเกง vs เทป',
    'pull up diaper',
    'ผ้าอ้อมแบบกางเกง',
    'ผ้าอ้อมแบบเทป',
    'เลือกผ้าอ้อม',
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
  { id: 'tape', label: 'ผ้าอ้อมแบบเทปคืออะไร?' },
  { id: 'pullup', label: 'ผ้าอ้อมแบบใส่คืออะไร?' },
  { id: 'compare', label: 'เปรียบเทียบข้อดีข้อเสีย' },
  { id: 'age', label: 'เหมาะสำหรับช่วงอายุไหน?' },
  { id: 'price', label: 'ราคาต่างกันมากไหม?' },
  { id: 'tips', label: 'เคล็ดลับการเลือกและใช้งาน' },
  { id: 'faq', label: 'คำถามที่พบบ่อย' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'เปลี่ยนจากแบบเทปเป็นแบบใส่ตอนอายุเท่าไรดี?',
    answer:
      'โดยทั่วไปเมื่อลูกเริ่มพลิกตัว คืบ หรือยืนได้ ประมาณ 6–9 เดือน ผ้าอ้อมแบบใส่จะสะดวกกว่ามาก เพราะดึงขึ้นลงได้เหมือนกางเกง ไม่ต้องล้มลูกนอนทุกครั้ง',
  },
  {
    question: 'ผ้าอ้อมแบบใส่รั่วง่ายกว่าแบบเทปไหม?',
    answer:
      'แบบใส่รุ่นใหม่ๆ ออกแบบมาป้องกันการรั่วได้ดี แต่โดยทั่วไปแบบเทปมักแน่นกว่าสำหรับเด็กเล็กที่นอนนิ่ง เพราะปรับความพอดีได้ละเอียดกว่าผ่านเทปยึด',
  },
  {
    question: 'ผ้าอ้อมแบบใส่เปลี่ยนตอนที่ลูกถ่ายอุจจาระสะดวกไหม?',
    answer:
      'สะดวกน้อยกว่าแบบเทปเล็กน้อย เพราะต้องดึงลงและเช็ดก้น แต่ผ้าอ้อมแบบใส่บางรุ่นมีด้านข้างที่ฉีกออกได้ (tearable sides) ทำให้ถอดง่ายขึ้นมากเมื่อมีอุจจาระ',
  },
  {
    question: 'ผ้าอ้อมแบบใส่ช่วยฝึกเข้าห้องน้ำได้ไหม?',
    answer:
      'ได้ ผ้าอ้อมแบบใส่ช่วยให้ลูกเริ่มเรียนรู้ว่าต้องดึงกางเกงลง ซึ่งเป็นทักษะแรกในการฝึกเข้าห้องน้ำ (toilet training) เหมาะสำหรับเด็กอายุ 18 เดือนขึ้นไปที่เริ่มพร้อม',
  },
  {
    question: 'ราคาต่อชิ้นแบบใส่แพงกว่าแบบเทปมากไหม?',
    answer:
      'ในยี่ห้อเดียวกัน แบบใส่มักมีราคาต่อชิ้นสูงกว่า 10–20% และบรรจุน้อยชิ้นต่อแพ็กกว่า แต่ความสะดวกในการใช้งานคุ้มค่าสำหรับเด็กที่เคลื่อนไหวตลอดเวลา',
  },
  {
    question: 'ควรใช้แบบใส่ตอนกลางคืนได้ไหม?',
    answer:
      'ได้ แต่แบบเทปมักซับได้นานกว่าสำหรับกลางคืน เนื่องจากปรับให้แน่นสนิทกว่า บางครอบครัวใช้แบบเทปสำหรับกลางคืนและแบบใส่สำหรับกลางวัน',
  },
]

export default function PullUpVsTapeDiaperPage() {
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
      category="คู่มือการเลือกผ้าอ้อม"
      breadcrumbs={[
        { label: 'หน้าแรก', href: '/' },
        { label: 'บล็อก', href: '/blog' },
        { label: 'ผ้าอ้อมแบบใส่ vs แบบเทป' },
      ]}
      toc={TOC}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <p>
        เมื่อลูกเริ่มโตขึ้น หลายคนสงสัยว่าควรเปลี่ยนจากผ้าอ้อมแบบเทปไปใช้แบบกางเกง (pull-up)
        เมื่อไหร่ และแต่ละแบบเหมาะกับสถานการณ์ไหน
      </p>
      <p>
        บทความนี้เปรียบเทียบทั้งสองแบบอย่างละเอียด เพื่อให้คุณตัดสินใจได้ว่าแบบไหนเหมาะกับลูกและไลฟ์สไตล์ของครอบครัวมากกว่า
      </p>

      <h2 id="tape">ผ้าอ้อมแบบเทปคืออะไร?</h2>
      <p>
        ผ้าอ้อมแบบเทป (Tape diaper / Open diaper) เป็นแบบดั้งเดิมที่ใช้แถบกาวหรือเทปยึดสองข้างด้านหน้า
        สามารถปรับความพอดีได้ตามรูปร่างลูกในแต่ละครั้ง ยืดออกและติดซ้ำได้หากต้องการปรับ
      </p>
      <p><strong>ใช้งานอย่างไร:</strong> วางลูกนอนหงาย สอดผ้าอ้อมใต้ก้น ดึงด้านหน้าขึ้น และติดเทปทั้งสองข้าง</p>

      <h2 id="pullup">ผ้าอ้อมแบบใส่คืออะไร?</h2>
      <p>
        ผ้าอ้อมแบบใส่ (Pull-up / Pants diaper) มีลักษณะเหมือนกางเกงชั้นใน สวมใส่โดยการดึงขึ้นผ่านขา
        ไม่มีเทปยึดที่ปรับได้ แต่ผ้ายางรอบเอวยืดหยุ่นพอที่จะใส่สะดวก
      </p>
      <p><strong>ใช้งานอย่างไร:</strong> ดึงขึ้นเหมือนกางเกง ถอดโดยดึงลงหรือฉีกด้านข้างออก</p>

      <h2 id="compare">เปรียบเทียบข้อดีข้อเสีย</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ด้าน</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">แบบเทป</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">แบบใส่ (Pull-up)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['ความพอดี', 'ปรับได้ละเอียด', 'ขึ้นอยู่กับขนาดเอว'],
              ['ความสะดวกตอนเปลี่ยน', 'ต้องให้ลูกนอน', 'ยืนหรือนั่งได้'],
              ['เปลี่ยนตอนมีอุจจาระ', 'ง่ายกว่า', 'ยากกว่าเล็กน้อย'],
              ['การซึมรั่ว', 'ดีกว่าสำหรับเด็กเล็ก', 'ดีพอสำหรับเด็กโต'],
              ['เหมาะช่วงกลางคืน', 'ดีกว่า', 'พอใช้ได้'],
              ['ช่วยฝึก toilet training', 'ไม่ช่วย', 'ช่วยได้'],
              ['ราคาต่อชิ้น', 'ถูกกว่า 10–20%', 'แพงกว่าเล็กน้อย'],
            ].map(([aspect, tape, pullup]) => (
              <tr key={aspect} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{aspect}</td>
                <td className="px-4 py-3 text-gray-600">{tape}</td>
                <td className="px-4 py-3 text-gray-600">{pullup}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="age">เหมาะสำหรับช่วงอายุไหน?</h2>
      <ul>
        <li>
          <strong>แบบเทป</strong> — เหมาะที่สุดสำหรับ<strong>แรกเกิดถึง 6–8 เดือน</strong>
          เพราะลูกยังนอนนิ่ง การปรับเทปทำให้แน่นพอดี ลดการรั่ว
          และเปลี่ยนง่ายสำหรับพ่อแม่มือใหม่
        </li>
        <li>
          <strong>แบบใส่</strong> — เหมาะที่สุดสำหรับ<strong>6 เดือนขึ้นไป</strong>
          โดยเฉพาะเมื่อลูกเริ่มพลิกตัว คืบ ยืน และวิ่ง
          เพราะไม่ต้องล้มลูกนอนทุกครั้งที่เปลี่ยน
        </li>
      </ul>
      <p>
        หลายครอบครัวเลือกใช้<strong>แบบเทปตอนกลางคืน</strong> (ซับดีกว่า) และ
        <strong>แบบใส่ตอนกลางวัน</strong> (เปลี่ยนสะดวกกว่า)
      </p>

      <h2 id="price">ราคาต่างกันมากไหม?</h2>
      <p>ตัวอย่างเปรียบเทียบราคา MamyPoko ขนาด L:</p>
      <ul>
        <li>แบบเทป ไซส์ L: ประมาณ 3.00–3.80 บาท/ชิ้น</li>
        <li>แบบใส่ ไซส์ L: ประมาณ 3.50–4.50 บาท/ชิ้น</li>
      </ul>
      <p>
        ผลต่างราคาต่อเดือน (ใช้วันละ 6 ชิ้น × 30 วัน = 180 ชิ้น):
        ประมาณ 90–130 บาท/เดือน ซึ่งไม่มากนักเมื่อเทียบกับความสะดวกที่ได้รับ
      </p>
      <p>
        ใช้{' '}
        <Link href="/tools/diaper-cost">เครื่องคำนวณค่าผ้าอ้อม</Link>{' '}
        เพื่อเปรียบเทียบต้นทุนรายเดือนและรายปีระหว่างทั้งสองแบบได้ทันที
      </p>

      <h2 id="tips">เคล็ดลับการเลือกและใช้งาน</h2>
      <ul>
        <li>
          <strong>เริ่มทดลองแบบใส่ที่ไซส์ M</strong> — ส่วนใหญ่ผ้าอ้อมแบบใส่จะดีที่สุดเมื่อลูกโตพอ
          ประมาณน้ำหนัก 6–8 กก. ขึ้นไป
        </li>
        <li>
          <strong>ซื้อทดลองแพ็กเล็กก่อน</strong> — เพราะรูปทรงของลูกแต่ละคนต่างกัน
          บางคนขาใหญ่ขาอ้วน อาจต้องลองหลายยี่ห้อ
        </li>
        <li>
          <strong>เลือกรุ่นที่มีด้านข้างฉีกออกได้</strong> — สำหรับแบบใส่ที่ใช้เวลาลูกมีอุจจาระ
          จะถอดออกได้ง่ายกว่ามาก
        </li>
        <li>
          <strong>อย่าลืมตรวจแถบยางที่ขา</strong> — ทั้งแบบเทปและแบบใส่ ต้องตรวจว่าแถบยางออกข้างนอกหมด
          ไม่พับเข้าข้างใน
        </li>
      </ul>

      <p>
        สำหรับข้อมูลยี่ห้อผ้าอ้อมทั้งแบบเทปและแบบใส่ อ่านเพิ่มเติมที่{' '}
        <Link href="/blog/diaper-brand-comparison">ผ้าอ้อมยี่ห้อไหนดีที่สุด</Link>{' '}
        และ{' '}
        <Link href="/blog/diaper-size-guide">คู่มือไซส์ผ้าอ้อมทุกยี่ห้อ</Link>
      </p>

      <div className="not-prose my-6 rounded-2xl bg-blue-600 p-6 text-center text-white">
        <p className="font-bold text-lg">เปรียบเทียบค่าใช้จ่ายแบบเทป vs แบบใส่</p>
        <p className="mt-2 text-blue-100 text-sm">ใส่ราคาต่อชิ้นของทั้งสองแบบ แล้วดูว่าต่างกันเดือนละเท่าไร</p>
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
