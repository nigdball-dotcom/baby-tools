import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import FAQ from '@/components/FAQ'
import { articleSchema, faqSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem, TOCItem } from '@/types'

const SLUG = 'baby-sleep-hours-by-age'
const TITLE = 'ลูกควรนอนวันละกี่ชั่วโมง? ตารางแรกเกิดถึง 5 ขวบ และวิธีรู้ว่านอนพอ 2026'
const DESCRIPTION =
  'ตารางชั่วโมงนอนจาก AASM: ทารก 4–12 เดือน ควรนอน 12–16 ชั่วโมง เด็กเล็ก 1–2 ปี นอน 11–14 ชั่วโมง รวมงีบกลางวัน พร้อมวิธีรู้ว่าลูกนอนพอหรือเปล่า'
const DATE = '2026-07-09'
const URL = `/blog/${SLUG}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'ลูกควรนอนกี่ชั่วโมง',
    'เด็กนอนกี่ชั่วโมงต่อวัน',
    'ตารางนอนเด็กตามช่วงวัย',
    'ทารกนอนพอหรือเปล่า',
    'AASM ชั่วโมงนอนเด็ก',
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
    images: [
      {
        url: `${SITE_URL}/images/blog/WebHeroS004.png`,
        width: 1200,
        height: 630,
        alt: 'ลูกนอนพอหรือยัง — ตัวเลขอ้างอิงการนอนตามช่วงวัยที่มีหลักฐานรองรับ',
      },
    ],
  },
}

const TOC: TOCItem[] = [
  { id: 'reference', label: 'ทำความเข้าใจตัวเลข' },
  { id: 'newborn', label: 'ทารกอายุต่ำกว่า 4 เดือน' },
  { id: 'naps', label: 'งีบกลางวันนับรวมด้วยหรือเปล่า?' },
  { id: 'signs', label: 'วิธีรู้ว่าลูกนอนพอหรือยัง' },
  { id: 'misconceptions', label: 'ความเข้าใจที่อาจคลาดเคลื่อน' },
  { id: 'doctor', label: 'เมื่อไรควรปรึกษากุมารแพทย์' },
  { id: 'faq', label: 'คำถามที่พบบ่อย' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'ลูกควรนอนวันละกี่ชั่วโมง?',
    answer:
      'ขึ้นอยู่กับช่วงวัย ตาม AASM: ทารก 4–12 เดือนควรนอน 12–16 ชั่วโมง เด็กเล็ก 1–2 ปี นอน 11–14 ชั่วโมง เด็กก่อนวัยเรียน 3–5 ปี นอน 10–13 ชั่วโมง ตัวเลขเหล่านี้รวมทั้งการนอนกลางคืนและงีบกลางวัน',
  },
  {
    question: 'งีบกลางวันนับรวมในชั่วโมงการนอนไหม?',
    answer:
      'นับรวมเสมอในเด็กเล็ก ชั่วโมงในตารางแนะนำหมายถึงการนอนรวมทั้งหมดต่อ 24 ชั่วโมง ทั้งกลางคืนและงีบกลางวัน การนับเฉพาะกลางคืนแล้วเทียบกับตัวเลขในตารางจะทำให้ดูเหมือนลูกนอนน้อยกว่าความเป็นจริง',
  },
  {
    question: 'ทารกอายุต่ำกว่า 4 เดือนควรนอนกี่ชั่วโมง?',
    answer:
      'AASM ไม่ได้กำหนดตัวเลขแนะนำสำหรับวัยนี้ เพราะรูปแบบการนอนยังแปรผันสูงมาก ทารกส่วนใหญ่นอนราว 16–18 ชั่วโมงต่อวัน แต่ตัวเลขนี้ยังแปรผันตามเด็กแต่ละคนด้วย',
  },
  {
    question: 'ถ้าลูกนอนน้อยกว่าในตารางแนะนำ ต้องกังวลไหม?',
    answer:
      'ตัวเลขในตารางเป็นช่วงอ้างอิง ไม่ใช่เป้าหมายที่ต้องทำให้ได้เป๊ะ ถ้าลูกตื่นมาอารมณ์ดี พร้อมเล่น และไม่ดูเหนื่อยล้าผิดปกติ แม้จะนอนน้อยกว่าค่ากลางในตาราง ก็มักไม่ได้หมายความว่ามีปัญหา',
  },
  {
    question: 'วิธีรู้ว่าลูกนอนพอหรือยัง?',
    answer:
      'สังเกตพฤติกรรมกลางวัน ลูกที่นอนพอมักตื่นมาอารมณ์ดีพร้อมเล่น ตื่นเองได้โดยไม่ต้องถูกปลุก และไม่ดูเหนื่อยล้าหรือง่วงงุนผิดสังเกตในช่วงกลางวันที่ควรตื่น',
  },
  {
    question: 'เมื่อไรควรพาลูกไปพบกุมารแพทย์เรื่องการนอน?',
    answer:
      'ควรพบแพทย์เมื่อลูกนอนน้อยหรือมากผิดปกติอย่างเห็นได้ชัดและพฤติกรรมกลางวันเปลี่ยนไปด้วย มีปัญหาหายใจขณะนอน กรนเสียงดัง หรือปลุกไม่ตื่นผิดปกติ บทความนี้เป็นข้อมูลเชิงให้ความรู้ทั่วไป ไม่ใช่คำแนะนำทางการแพทย์เฉพาะบุคคล',
  },
]

export default function BabySleepHoursByAgePage() {
  const schema = articleSchema({
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    datePublished: DATE,
    dateModified: DATE,
  })
  const faq = faqSchema(FAQ_ITEMS)

  return (
    <BlogLayout
      slug={SLUG}
      title={TITLE}
      description={DESCRIPTION}
      date={DATE}
      readingTime="5 นาที"
      category="การนอนของลูกน้อย"
      breadcrumbs={[
        { label: 'หน้าแรก', href: '/' },
        { label: 'บล็อก', href: '/blog' },
        { label: 'ลูกควรนอนวันละกี่ชั่วโมง?' },
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

      {/* Hero image */}
      <div className="not-prose mb-6 overflow-hidden rounded-2xl">
        <Image
          src="/images/blog/WebHeroS004.png"
          alt="ลูกนอนพอหรือยัง — ตัวเลขอ้างอิงการนอนตามช่วงวัยที่มีหลักฐานรองรับ"
          width={1200}
          height={630}
          priority
          className="w-full object-cover"
        />
      </div>

      {/* Source attribution */}
      <div className="not-prose mb-6 rounded-xl border border-green-100 bg-green-50 p-4 text-sm text-green-800">
        ข้อมูลในบทความนี้อ้างอิงจาก{' '}
        <strong>American Academy of Sleep Medicine (AASM)</strong> และ{' '}
        <strong>National Sleep Foundation (NSF)</strong>{' '}
        ซึ่งได้รับการรับรองโดย American Academy of Pediatrics (AAP)
      </div>

      <p>
        ถ้าเคยเปิดอินเทอร์เน็ตแล้วเจอตารางชั่วโมงการนอนของเด็กหลายเวอร์ชัน แล้วรู้สึกว่าตัวเลขไม่ตรงกันสักที คุณไม่ได้เป็นคนเดียว
      </p>
      <p>
        <strong>คำตอบสั้น:</strong> ตาม AASM ทารก 4–12 เดือนควรนอน <strong>12–16 ชั่วโมง</strong>ต่อวัน เด็กเล็ก 1–2 ปี ควรนอน <strong>11–14 ชั่วโมง</strong> และ 3–5 ปี ควรนอน <strong>10–13 ชั่วโมง</strong> ตัวเลขเหล่านี้นับรวมงีบกลางวัน
      </p>
      <p>
        บางแหล่งบอกว่าลูกอายุ 8 เดือนควรนอน 12–15 ชั่วโมง อีกแหล่งบอก 12–16 ชั่วโมง หรือบางทีได้ยินตัวเลขอื่นจากหมอหรือจากพี่เลี้ยง แล้วก็เริ่มสงสัยว่าของลูกตัวเองอยู่ที่ไหนในนั้น
      </p>
      <p>
        ความสับสนนี้เกิดจากการที่แต่ละองค์กรใช้วิธีแบ่งกลุ่มอายุที่ต่างกันเล็กน้อย แต่สิ่งที่ทุกแหล่งที่น่าเชื่อถือเห็นตรงกันคือ ตัวเลขเหล่านี้ไม่ใช่เป้าหมายตายตัว มันคือช่วงอ้างอิง
      </p>

      <h2 id="reference">ทำความเข้าใจตัวเลขก่อน</h2>
      <p>
        American Academy of Sleep Medicine (AASM) เผยแพร่ฉันทามติในปี 2016 หลังจากทบทวนงานวิจัยกว่า 864 ชิ้น
        ตัวเลขนี้ได้รับการรับรองจาก American Academy of Pediatrics (AAP)
        และแหล่งข้อมูลไทยทั้งจากกระทรวงสาธารณสุขและโรงพยาบาลรามาธิบดีก็อ้างอิงช่วงตัวเลขเดียวกันนี้
      </p>
      <p>ตัวเลขที่ AASM แนะนำต่อ 24 ชั่วโมง รวมทั้งกลางวันและกลางคืน:</p>

      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ช่วงวัย</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ชั่วโมงการนอนที่แนะนำ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['4–12 เดือน', '12–16 ชั่วโมง'],
              ['1–2 ปี', '11–14 ชั่วโมง'],
              ['3–5 ปี', '10–13 ชั่วโมง'],
            ].map(([age, hours]) => (
              <tr key={age} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold text-gray-800">{age}</td>
                <td className="px-4 py-3 text-gray-700">{hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-500">
        สำหรับทารกอายุต่ำกว่า 4 เดือน AASM ไม่ได้กำหนดตัวเลขแนะนำ เพราะรูปแบบการนอนยังแปรผันสูงมาก
      </p>

      <p>National Sleep Foundation (NSF) ใช้วิธีคล้ายกันและแยกกลุ่มทารกแรกเกิดออกมา:</p>

      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ช่วงวัย</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ชั่วโมงการนอนที่แนะนำ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['แรกเกิด 0–3 เดือน', '14–17 ชั่วโมง'],
              ['ทารก 4–11 เดือน', '12–15 ชั่วโมง'],
              ['เด็กเล็ก 1–2 ปี', '11–14 ชั่วโมง'],
              ['เด็กก่อนวัยเรียน 3–5 ปี', '10–13 ชั่วโมง'],
            ].map(([age, hours]) => (
              <tr key={age} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold text-gray-800">{age}</td>
                <td className="px-4 py-3 text-gray-700">{hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        ตัวเลขสองชุดนี้ใกล้เคียงกันมาก ความต่างเล็กน้อยที่เห็นมาจากวิธีแบ่งกลุ่มอายุที่ต่างกันเล็กน้อย ไม่ใช่เพราะข้อมูลขัดแย้งกัน
      </p>

      <div className="not-prose my-4 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-800">
        ดูตารางนอนแยกรายเดือนได้ที่{' '}
        <Link href="/blog/newborn-sleep-hours" className="font-semibold underline">
          เด็กแรกเกิดนอนกี่ชั่วโมง? ตารางนอน 0–12 เดือน
        </Link>
      </div>

      <h2 id="newborn">ทารกอายุต่ำกว่า 4 เดือน</h2>
      <p>
        มีเรื่องหนึ่งที่ AASM ระบุไว้อย่างชัดเจน คือองค์กรไม่ได้ให้ตัวเลขแนะนำสำหรับทารกอายุต่ำกว่า 4 เดือน
      </p>
      <p>
        เหตุผลคือในช่วงวัยนี้ รูปแบบการนอนของทารกแต่ละคนแปรผันสูงมาก การระบุตัวเลขอาจทำให้เกิดความกังวลโดยไม่จำเป็น มากกว่าจะเป็นประโยชน์
      </p>
      <p>
        ทารกแรกเกิดส่วนใหญ่นอนรวมราว 16–18 ชั่วโมงต่อวัน แต่แบ่งเป็นช่วงสั้นๆ หลายรอบทั้งกลางวันและกลางคืน
        และตัวเลขนี้ก็ยังแปรผันตามเด็กแต่ละคนด้วย
      </p>
      <p>
        ดูรายละเอียดการนอนในช่วงเดือนแรกได้ที่{' '}
        <Link href="/blog/baby-sleep-1-month">เด็ก 1 เดือนนอนกี่ชั่วโมง?</Link>
      </p>

      <h2 id="naps">งีบกลางวันนับรวมด้วยหรือเปล่า?</h2>
      <p><strong>นับรวมด้วยเสมอในเด็กเล็ก</strong></p>
      <p>
        ชั่วโมงการนอนในตารางข้างต้นหมายถึงการนอนรวมทั้งหมดต่อ 24 ชั่วโมง ทั้งกลางคืนและงีบกลางวัน
      </p>
      <p>
        ถ้าลูกอายุ 9 เดือนงีบกลางวัน 3 ชั่วโมงและนอนกลางคืน 10 ชั่วโมง รวมได้ 13 ชั่วโมง
        ซึ่งอยู่ในช่วงที่แนะนำ ไม่จำเป็นต้องกังวลว่าลูกนอนน้อยเกินไป
      </p>

      <h2 id="signs">วิธีรู้ว่าลูกนอนพอหรือยัง</h2>
      <p>
        ตัวเลขเป็นจุดอ้างอิงที่ดี แต่พฤติกรรมของลูกตอนกลางวันบอกได้มากพอๆ กัน
      </p>
      <p>ลูกที่นอนเพียงพอมักแสดงสัญญาณเหล่านี้:</p>
      <ul>
        <li>ตื่นนอนแล้วอารมณ์ดี พร้อมจะเล่นและโต้ตอบตามปกติ</li>
        <li>ตื่นเองได้โดยไม่ต้องถูกปลุกเป็นส่วนใหญ่</li>
        <li>ไม่ดูเหนื่อยล้าหรือง่วงงุนผิดสังเกตในช่วงกลางวันที่ควรจะตื่น</li>
      </ul>
      <p>
        ถ้าลูกแสดงสัญญาณเหล่านี้สม่ำเสมอ แม้ชั่วโมงการนอนจะอยู่ใกล้ขอบล่างของช่วงที่แนะนำ ก็มักไม่ได้หมายความว่ามีปัญหา
      </p>
      <p>
        ในทางกลับกัน ถ้าลูกดูเหนื่อย หงุดหงิด หรือง่วงมากผิดปกติตลอดวัน แม้ตัวเลขการนอนจะดูอยู่ในเกณฑ์
        สัญญาณนั้นก็ควรสังเกตและพูดคุยกับกุมารแพทย์
      </p>
      <p>
        สำหรับเด็กวัย 6 เดือน อ่านรายละเอียดได้ที่{' '}
        <Link href="/blog/baby-sleep-6-months">ตารางนอนเด็ก 6 เดือน</Link>
        {' '}และวัย 1 ขวบที่{' '}
        <Link href="/blog/baby-sleep-1-year">ตารางนอนเด็ก 1 ขวบ</Link>
      </p>

      <h2 id="misconceptions">ความเข้าใจที่อาจคลาดเคลื่อน</h2>
      <p>หลายบ้านอาจเข้าใจแบบนี้ และไม่ใช่เรื่องแปลกเลย</p>

      <p><strong>"ตัวเลขในตารางต้องทำให้ได้เป๊ะ"</strong></p>
      <p>
        ถ้าลูกนอนรวม 13 ชั่วโมงและอยู่ในช่วง 4–12 เดือน (แนะนำ 12–16 ชั่วโมง)
        ไม่จำเป็นต้องพยายามเพิ่มชั่วโมงให้ครบ 14 หรือ 15
        พฤติกรรมกลางวันบอกเรื่องการนอนได้ดีกว่าตัวเลข
      </p>

      <p><strong>"ต้องนับเฉพาะการนอนกลางคืน"</strong></p>
      <p>
        พ่อแม่หลายคนแยกนับกลางคืนกับงีบกลางวัน แล้วเอาตัวเลขกลางคืนเพียงอย่างเดียวไปเทียบกับตารางแนะนำ
        ทำให้ดูเหมือนลูกนอนไม่ถึงเกณฑ์ ทั้งที่ตัวเลขรวมอยู่ในช่วงปกติแล้ว
      </p>

      <p><strong>"การนอนตลอดคืนสำคัญกว่าปริมาณรวม"</strong></p>
      <p>
        ในทารก ปริมาณการนอนรวมต่อวันสำคัญกว่า ทารกที่ตื่นกลางคืนบ้างแต่ได้นอนรวมเพียงพอ ก็ถือว่านอนพอ
      </p>

      <p><strong>"มีตัวเลขเดียวสำหรับเด็กทุกคนทุกวัย"</strong></p>
      <p>
        ตัวเลขเปลี่ยนตามช่วงวัย และสำหรับทารกอายุต่ำกว่า 4 เดือน AASM ไม่ได้ให้ตัวเลขแนะนำเพราะความแปรผันสูงมาก
      </p>

      <h2 id="doctor">เมื่อไรควรปรึกษากุมารแพทย์</h2>
      <p>สิ่งที่ควรนำไปพูดคุยกับกุมารแพทย์:</p>
      <ul>
        <li>ลูกนอนน้อยหรือมากผิดปกติอย่างเห็นได้ชัด และพฤติกรรมกลางวันเปลี่ยนไปด้วย</li>
        <li>ลูกหลับแล้วปลุกไม่ตื่นผิดปกติ</li>
        <li>มีอาการอื่นร่วมด้วย เช่น หายใจผิดปกติขณะนอน กรนเสียงดัง หรืออาการไม่สบายอื่นๆ</li>
      </ul>

      <div className="not-prose mt-2 rounded-lg border border-amber-100 bg-amber-50 p-3 text-sm text-amber-800">
        บทความนี้เป็นข้อมูลเชิงให้ความรู้ทั่วไป ไม่ใช่คำแนะนำทางการแพทย์เฉพาะบุคคล
      </div>

      <h2>สรุป</h2>
      <p>
        ตัวเลขชั่วโมงการนอนในตารางเป็นช่วงอ้างอิงที่มีหลักฐานรองรับจากองค์กรชั้นนำ ไม่ใช่เป้าหมายที่ต้องทำให้ได้พอดี
      </p>
      <p>
        สิ่งที่สำคัญกว่าคือการนับรวมทั้งกลางวันและกลางคืน และสังเกตว่าลูกตื่นมาแล้วเป็นอย่างไร
        อารมณ์ดีไหม มีแรงเล่นไหม นั่นคือสัญญาณที่บอกเรื่องการนอนได้ชัดกว่าตัวเลขในตาราง
      </p>
      <p>
        เด็กแต่ละคนต้องการนอนไม่เท่ากัน ความต่างเล็กน้อยจากช่วงที่แนะนำ
        ในขณะที่ลูกดูดีและสบายดี ส่วนใหญ่ไม่ได้หมายความว่ามีอะไรผิดปกติ
      </p>

      <div className="not-prose my-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
        <p className="font-semibold text-blue-900">ไม่แน่ใจว่าลูกควรนอนกี่ชั่วโมง?</p>
        <p className="mt-1 text-sm text-blue-700">
          เลือกช่วงอายุของลูกเพื่อดูตารางนอนแบบละเอียด จำนวนงีบ และคำแนะนำเฉพาะวัย
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href="/blog/newborn-sleep-hours"
            className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
          >
            แรกเกิด–12 เดือน
          </Link>
          <Link
            href="/blog/baby-sleep-1-month"
            className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
          >
            1 เดือน
          </Link>
          <Link
            href="/blog/baby-sleep-2-months"
            className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
          >
            2 เดือน
          </Link>
          <Link
            href="/blog/baby-sleep-3-months"
            className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
          >
            3 เดือน
          </Link>
          <Link
            href="/blog/baby-sleep-6-months"
            className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
          >
            6 เดือน
          </Link>
          <Link
            href="/blog/baby-sleep-1-year"
            className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
          >
            1 ขวบ
          </Link>
        </div>
      </div>

      <h2 id="faq">คำถามที่พบบ่อย</h2>
      <FAQ items={FAQ_ITEMS} />
    </BlogLayout>
  )
}
