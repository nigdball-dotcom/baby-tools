import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import FAQ from '@/components/FAQ'
import { articleSchema, faqSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem, TOCItem } from '@/types'

const SLUG = 'baby-nap-schedule'
const TITLE = 'ลูกงีบนานไปไหม? ควรปลุกลูกจากงีบไหม พร้อมตารางงีบตามช่วงวัย 2026'
const DESCRIPTION =
  'งีบนานแค่ไหนถือว่าปกติ ควรปลุกลูกไหม ทารก 4–12 เดือนงีบ 2–3 ครั้ง รวม 3–4 ชั่วโมงต่อวัน พร้อมตารางงีบตามช่วงวัยและสัญญาณที่บอกว่าควรปรับ'
const DATE = '2026-07-09'
const URL = `/blog/${SLUG}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'ลูกงีบนานไปไหม',
    'เด็กงีบกลางวันนานเกินไป',
    'ตารางงีบกลางวันตามวัย',
    'งีบกลางวันกระทบกลางคืน',
    'วิธีปรับงีบกลางวันเด็ก',
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
        url: `${SITE_URL}/images/blog/WebHeroS005.png`,
        width: 1200,
        height: 630,
        alt: 'ลูกงีบกลางวัน — ตารางงีบตามช่วงวัยและวิธีรู้ว่างีบนานเกินไปหรือยัง',
      },
    ],
  },
}

const TOC: TOCItem[] = [
  { id: 'importance', label: 'การงีบกลางวันสำคัญกว่าที่คิด' },
  { id: 'schedule', label: 'ตารางงีบตามช่วงวัย' },
  { id: 'nighttime', label: 'เมื่อไรงีบยาวอาจกระทบกลางคืน' },
  { id: 'signs', label: 'สัญญาณที่ควรพิจารณาปรับงีบ' },
  { id: 'misconceptions', label: 'ความเข้าใจที่อาจคลาดเคลื่อน' },
  { id: 'doctor', label: 'เมื่อไรควรปรึกษากุมารแพทย์' },
  { id: 'faq', label: 'คำถามที่พบบ่อย' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'ควรปลุกลูกจากงีบไหม?',
    answer:
      'ไม่จำเป็นเสมอไป ถ้ากลางคืนลูกนอนได้ปกติ ก็ไม่ต้องปลุก แต่ถ้าสังเกตว่างีบยาวหรือสายเกินไปจนกลางคืนหลับยาก อาจลองจำกัดความยาวงีบเล็กน้อย หรือขยับเวลาเริ่มงีบให้เร็วขึ้น',
  },
  {
    question: 'ลูกงีบนานแค่ไหนถือว่าปกติ?',
    answer:
      'ขึ้นอยู่กับช่วงวัย ทารก 4–12 เดือนมักงีบ 2–3 ครั้งต่อวัน รวมราว 3–4 ชั่วโมง เด็ก 1–2 ปีงีบ 1 ครั้ง ราว 1–2 ชั่วโมง เด็ก 3–5 ปีบางคนอาจเริ่มเลิกงีบแล้ว ตัวเลขเหล่านี้เป็นช่วงอ้างอิง ไม่ใช่กฎตายตัว',
  },
  {
    question: 'งีบนานเกินไปส่งผลต่อการนอนกลางคืนจริงไหม?',
    answer:
      'มีหลักฐานว่างีบที่ยาวหรือสายเกินไปสัมพันธ์กับการนอนกลางคืนที่สั้นลงและเข้านอนช้าลง โดยเฉพาะในเด็กอายุ 1–2 ปี แต่ความสัมพันธ์นี้ไม่เกิดกับทุกคน ถ้ากลางคืนลูกยังนอนได้ดี งีบที่ยาวหน่อยก็มักไม่ใช่ปัญหา',
  },
  {
    question: 'การตัดงีบกลางวันช่วยให้กลางคืนนอนดีขึ้นไหม?',
    answer:
      'ไม่เสมอไป การตัดงีบเร็วเกินไปอาจทำให้ลูก Overtired ร่างกายผลิตฮอร์โมนกระตุ้นตื่นตัว ทำให้หลับยากขึ้นในตอนกลางคืน วิธีที่ดีกว่าคือปรับเวลาและความยาวงีบทีละนิด ไม่ใช่ตัดทั้งหมดในทันที',
  },
  {
    question: 'เมื่อไรลูกถึงจะเลิกงีบกลางวัน?',
    answer:
      'เด็กส่วนใหญ่เริ่มเลิกงีบในช่วงอายุ 3–5 ปี บางคนอาจงีบได้ถึง 5–6 ปี การเลิกงีบเป็นไปตามพัฒนาการของแต่ละคน ไม่มีอายุตายตัว',
  },
  {
    question: 'เมื่อไรควรพาลูกไปพบกุมารแพทย์เรื่องการงีบ?',
    answer:
      'ควรพบแพทย์เมื่อลูกงีบมากผิดปกติร่วมกับอาการเซื่องซึมหรือพัฒนาการเปลี่ยนไป ปลุกไม่ตื่นผิดปกติ หายใจผิดปกติขณะนอน หรือมีอาการไม่สบายอื่นร่วมด้วย บทความนี้เป็นข้อมูลทั่วไป ไม่ใช่คำแนะนำทางการแพทย์เฉพาะบุคคล',
  },
]

export default function BabyNapSchedulePage() {
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
        { label: 'ลูกงีบนานไปไหม?' },
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
          src="/images/blog/WebHeroS005.png"
          alt="ลูกงีบกลางวัน — ตารางงีบตามช่วงวัยและวิธีรู้ว่างีบนานเกินไปหรือยัง"
          width={1200}
          height={630}
          priority
          className="w-full object-cover"
        />
      </div>

      {/* Source attribution */}
      <div className="not-prose mb-6 rounded-xl border border-green-100 bg-green-50 p-4 text-sm text-green-800">
        ข้อมูลในบทความนี้อ้างอิงจาก{' '}
        <strong>NHS (National Health Service)</strong>,{' '}
        <strong>KidsHealth (Nemours)</strong> และ{' '}
        <strong>Mayo Clinic</strong>
      </div>

      <p>
        ลูกงีบมาสามชั่วโมงแล้วยังไม่ตื่น ปลุกดีไหม หรือปล่อยไว้ก่อน
      </p>
      <p>
        <strong>คำตอบสั้น:</strong> ส่วนใหญ่ไม่จำเป็นต้องปลุก ถ้ากลางคืนลูกยังนอนได้ดีอยู่
        ทารก 4–12 เดือนงีบได้ <strong>2–3 ครั้ง</strong> รวม <strong>3–4 ชั่วโมง</strong>ต่อวัน
        ถ้างีบยาวหรือสายเกินไปจนกลางคืนหลับยาก ให้ขยับเวลางีบหรือจำกัดความยาวงีบ
        ไม่จำเป็นต้องตัดงีบทั้งหมด
      </p>
      <p>
        คำถามนี้วนเวียนในหัวผู้ปกครองหลายคนเกือบทุกวัน โดยเฉพาะช่วงที่ลูกงีบยาวแล้วกังวลว่าจะส่งผลต่อการนอนตอนกลางคืน
        สิ่งแรกที่ควรรู้คือ การงีบกลางวันไม่ใช่ปัญหา มันคือส่วนจำเป็นของการพัฒนาในเด็กเล็ก
      </p>

      <h2 id="importance">การงีบกลางวันสำคัญกว่าที่คิด</h2>
      <p>
        ในขวบปีแรกและวัยเตาะแตะ การงีบกลางวันเป็นส่วนสำคัญของการนอน ไม่ใช่แค่การพักผ่อนเพิ่ม
      </p>
      <p>
        งานวิจัยด้านพัฒนาการพบว่าการงีบมีส่วนช่วยในการรวบรวมความจำ (memory consolidation) และการเรียนรู้ในทารก
        สมองของทารกที่กำลังงีบอยู่ไม่ได้หยุดทำงาน แต่กำลังประมวลผลสิ่งที่เรียนรู้มาในช่วงตื่น
      </p>
      <p>
        การตัดงีบกลางวันเร็วเกินไปก็ไม่ใช่ทางออก เมื่อลูกเหนื่อยมากเกินไป (Overtired)
        ร่างกายจะผลิตฮอร์โมนกระตุ้นตื่นตัว ทำให้หลับยากและหลับไม่ลึก ส่งผลต่อการนอนกลางคืนได้เช่นกัน
      </p>
      <p>
        ดูชั่วโมงการนอนรวมทั้งกลางวันและกลางคืนตามช่วงวัยได้ที่{' '}
        <Link href="/blog/baby-sleep-hours-by-age">ลูกควรนอนวันละกี่ชั่วโมง? ตารางตามช่วงวัย</Link>
      </p>

      <h2 id="schedule">ตารางงีบตามช่วงวัย</h2>
      <p>
        จำนวนและความยาวของงีบเปลี่ยนไปตามอายุ และค่อยๆ ลดลงเองตามธรรมชาติ
        ตัวเลขด้านล่างอ้างอิงจาก NHS, KidsHealth และ Mayo Clinic:
      </p>

      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ช่วงวัย</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">จำนวนงีบต่อวัน</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">รวมชั่วโมงงีบ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['4–12 เดือน', '2–3 ครั้ง', '~3–4 ชั่วโมง'],
              ['12–18 เดือน', '1–2 ครั้ง', '~2–3 ชั่วโมง'],
              ['2–3 ปี', '1 ครั้ง', '~1–2 ชั่วโมง'],
              ['3–5 ปี', '0–1 ครั้ง', 'น้อยลงหรือเลิกงีบ'],
            ].map(([age, naps, hours]) => (
              <tr key={age} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold text-gray-800">{age}</td>
                <td className="px-4 py-3 text-gray-700">{naps}</td>
                <td className="px-4 py-3 text-gray-700">{hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-500">
        เด็กแต่ละคนแตกต่างกันมาก ตัวเลขเหล่านี้เป็นช่วงอ้างอิง ไม่ใช่กฎตายตัว
      </p>

      <p>
        ช่วงเปลี่ยนผ่านสำคัญคือ 12–18 เดือน เมื่อเด็กเริ่มลดจาก 2 งีบเป็น 1 งีบต่อวัน
        ดูรายละเอียดการงีบและตารางนอนในช่วงนี้ได้ที่{' '}
        <Link href="/blog/baby-sleep-1-year">ตารางนอนเด็ก 1 ขวบ</Link>
      </p>

      <h2 id="nighttime">เมื่อไรงีบยาวอาจกระทบกลางคืน</h2>
      <p>
        งีบกลางวันกับการนอนกลางคืนมีความสัมพันธ์กัน และนี่คือแก่นของคำถาม "งีบนานไปไหม"
      </p>
      <p>
        งานวิจัยที่วัดการนอนด้วยอุปกรณ์ actigraphy ในเด็กอายุราว 1–2 ปี พบว่า
        งีบที่ยาวกว่าปกติสัมพันธ์กับการนอนกลางคืนที่สั้นลงและเข้านอนช้าลง
        งีบในช่วงบ่ายแก่ก็สัมพันธ์กับการนอนกลางคืนที่สั้นลงเช่นกัน
      </p>
      <p>
        แต่ความสัมพันธ์นี้ไม่ได้พิสูจน์เหตุและผลอย่างตายตัว และไม่ได้เกิดกับทุกคน
        วิธีที่ดีที่สุดคือสังเกตลูกของตัวเอง ถ้ากลางคืนยังนอนได้ดีอยู่
        งีบกลางวันที่ยาวหน่อยก็มักไม่ใช่ปัญหา
      </p>
      <p>
        สำหรับเด็กวัย 6 เดือน ดูรายละเอียดจำนวนงีบและตารางนอนได้ที่{' '}
        <Link href="/blog/baby-sleep-6-months">ตารางนอนเด็ก 6 เดือน</Link>
      </p>

      <h2 id="signs">สัญญาณที่ควรพิจารณาปรับงีบ</h2>
      <p>
        ถ้าสังเกตเห็นสัญญาณเหล่านี้ อาจลองปรับความยาวหรือเวลาของงีบ:
      </p>
      <ul>
        <li>ลูกงีบกลางวันแล้วกลางคืนหลับยากขึ้นชัดเจน</li>
        <li>เวลาเข้านอนช้าลงมากผิดปกติ</li>
        <li>ลูกนอนกลางคืนสั้นลงและตื่นบ่อยกว่าเดิม</li>
      </ul>
      <p>
        NHS แนะนำว่าเด็กอายุเกิน 9 เดือนควรหลีกเลี่ยงการงีบหลังบ่ายสาม เพราะอาจทำให้เข้านอนช้าลง
        แต่นี่เป็นแนวทางเชิงปฏิบัติ ไม่ใช่กฎที่ใช้ได้กับทุกคน
      </p>
      <p>
        ถ้าต้องการปรับ การค่อยๆ ขยับเวลางีบให้เร็วขึ้นทีละนิด หรือจำกัดความยาวงีบเล็กน้อย
        มักทำได้ดีกว่าการตัดงีบทั้งหมดในทันที
      </p>

      <div className="not-prose my-4 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-800">
        <strong>วิธีประเมินง่ายๆ:</strong> ถ้ากลางคืนลูกยังนอนได้ดี — ไม่ต้องปรับอะไร
        แต่ถ้าลูกหลับยาก เข้านอนช้า หรือตื่นบ่อยกว่าปกติ ลองบันทึกการนอนของลูกสัก 3–5 วัน
        เพื่อดูว่างีบกลางวันกับการนอนกลางคืนสัมพันธ์กันอย่างไรในกรณีของลูกโดยเฉพาะ
      </div>

      <h2 id="misconceptions">ความเข้าใจที่อาจคลาดเคลื่อน</h2>
      <p>จุดที่หลายบ้านอาจสับสน</p>

      <p><strong>"งีบยิ่งนานยิ่งดีเสมอ"</strong></p>
      <p>
        งีบที่ยาวมากหรือสายเกินไปอาจกระทบการนอนกลางคืน โดยเฉพาะในเด็กที่เริ่มลดจำนวนงีบลงแล้ว
        ความยาวและเวลางีบมีผลพอๆ กัน
      </p>

      <p><strong>"ต้องตัดงีบกลางวันเพื่อให้กลางคืนนอนดี"</strong></p>
      <p>
        การตัดงีบทันทีมักให้ผลตรงกันข้าม เด็กที่ Overtired จะหลับยากขึ้น ไม่ใช่ง่ายขึ้น
        ลองขยับเวลางีบให้เร็วขึ้นหรือจำกัดความยาวงีบทีละนิดแทน
      </p>

      <p><strong>"ถ้าลูกยังต้องการงีบ แสดงว่ามีปัญหา"</strong></p>
      <p>
        การงีบกลางวันเป็นเรื่องปกติตามพัฒนาการ และหลายคนงีบได้จนถึงอายุ 5 ปีโดยไม่มีปัญหา
        ไม่มีอายุตายตัวว่าควรเลิกงีบเมื่อไร
      </p>

      <p><strong>"มีตัวเลขงีบที่ตายตัวสำหรับเด็กทุกคน"</strong></p>
      <p>
        ไม่มีฉันทามติตัวเลขเดียวว่างีบนานแค่ไหนถือว่ามากเกินไป
        สัญญาณพฤติกรรมในตอนกลางวันและกลางคืนบอกเรื่องนี้ได้ดีกว่าตัวเลขในตาราง
      </p>

      <h2 id="doctor">เมื่อไรควรปรึกษากุมารแพทย์</h2>
      <p>สิ่งที่ควรนำไปพูดคุยกับกุมารแพทย์:</p>
      <ul>
        <li>ลูกงีบมากผิดปกติอย่างเห็นได้ชัด แม้กลางคืนก็นอนได้มาก และดูเซื่องซึมผิดปกติ</li>
        <li>ปลุกลูกจากงีบแล้วลูกตื่นยากผิดปกติ</li>
        <li>มีอาการอื่นร่วมด้วย เช่น ไม่สบาย หายใจผิดปกติขณะนอน หรือพัฒนาการเปลี่ยนไป</li>
      </ul>

      <div className="not-prose mt-2 rounded-lg border border-amber-100 bg-amber-50 p-3 text-sm text-amber-800">
        บทความนี้เป็นข้อมูลเชิงให้ความรู้ทั่วไป ไม่ใช่คำแนะนำทางการแพทย์เฉพาะบุคคล
      </div>

      <h2>สรุป</h2>
      <p>
        งีบกลางวันเป็นส่วนจำเป็นของการนอนในเด็กเล็ก ไม่ใช่สิ่งที่ต้องรีบกำจัด
      </p>
      <p>
        สัญญาณที่ควรดูคือพฤติกรรมกลางคืน ถ้ายังนอนได้ปกติ ไม่มีอะไรต้องปรับ
        แต่ถ้าเริ่มมีผลต่อการนอนกลางคืน ให้ลองขยับเวลางีบก่อน ไม่ต้องตัดทั้งหมด
      </p>
      <p>
        เด็กแต่ละคนต่างกัน สิ่งที่ดีที่สุดคือสังเกตรูปแบบการนอนของลูกเองเป็นตัวตั้ง
        แล้วใช้ตัวเลขอ้างอิงเป็นเพียงแนวทาง ไม่ใช่กฎตายตัว
      </p>

      <div className="not-prose my-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
        <p className="font-semibold text-blue-900">ดูตารางนอนและงีบตามช่วงอายุของลูก</p>
        <p className="mt-1 text-sm text-blue-700">
          เลือกช่วงอายุเพื่อดูจำนวนงีบ ชั่วโมงนอนรวม และคำแนะนำเฉพาะวัย
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
          <Link
            href="/blog/baby-sleep-hours-by-age"
            className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
          >
            ตารางรวมทุกวัย
          </Link>
        </div>
      </div>

      <h2 id="faq">คำถามที่พบบ่อย</h2>
      <FAQ items={FAQ_ITEMS} />
    </BlogLayout>
  )
}
