import type { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import FAQ from '@/components/FAQ'
import { articleSchema, faqSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME } from '@/lib/config'
import type { FAQItem, TOCItem } from '@/types'

const SLUG = 'baby-vaccine-cost'
const TITLE = 'ค่าวัคซีนเด็กในไทย แบบรัฐและเอกชน ต้องเตรียมเงินเท่าไร?'
const DESCRIPTION =
  'สรุปค่าใช้จ่ายวัคซีนเด็กในไทยทั้งแบบรัฐ (EPI) และเอกชน พร้อมตารางวัคซีนตามอายุ วัคซีนไหนฟรี วัคซีนไหนต้องจ่ายเอง และงบที่ต้องเตรียมตลอดช่วง 0–12 ปี'
const DATE = '2026-06-22'
const URL = `/blog/${SLUG}`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'ค่าวัคซีนเด็กไทย',
    'วัคซีนเด็กฟรี',
    'วัคซีนเด็กเอกชน',
    'ค่าวัคซีนแพงไหม',
    'ตารางวัคซีนเด็ก',
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
  { id: 'epi', label: 'วัคซีนในโปรแกรมรัฐ (EPI) ฟรีทั้งหมด' },
  { id: 'extra', label: 'วัคซีนเสริมที่ต้องจ่ายเอง' },
  { id: 'schedule', label: 'ตารางวัคซีนและค่าใช้จ่ายตามอายุ' },
  { id: 'total', label: 'งบวัคซีนรวมที่ต้องเตรียม' },
  { id: 'tips', label: 'เคล็ดลับประหยัดค่าวัคซีน' },
  { id: 'faq', label: 'คำถามที่พบบ่อย' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'วัคซีนเด็กในไทยฉีดฟรีที่ไหนได้บ้าง?',
    answer:
      'วัคซีนในโปรแกรม EPI ฉีดฟรีที่สถานีอนามัย โรงพยาบาลรัฐ คลินิกชุมชน และสถานพยาบาลที่เข้าร่วมโครงการ สิทธิบัตรทองครอบคลุมวัคซีน EPI ทุกตัว ไม่มีค่าใช้จ่าย',
  },
  {
    question: 'ค่าวัคซีนเสริมสำคัญที่สุดคืออะไร?',
    answer:
      'วัคซีนเสริมที่แนะนำมากที่สุดคือ อีสุกอีใส (Varicella), ตับอักเสบ A, ไข้หวัดใหญ่ (ทุกปี), และ Rotavirus (สำหรับทารก) งบรวมประมาณ 5,000–15,000 บาทตลอดช่วงเด็ก',
  },
  {
    question: 'วัคซีน 5 in 1 หรือ 6 in 1 ดีกว่ากัน?',
    answer:
      'วัคซีน 5 in 1 (รัฐ) ครอบคลุม คอตีบ บาดทะยัก ไอกรน ตับอักเสบ B และ Hib วัคซีน 6 in 1 (เอกชน) เพิ่ม IPV (โปลิโอชนิดฉีด) ซึ่งมีประสิทธิภาพสูงกว่าการกินน้ำโปลิโอ ค่าใช้จ่าย 6 in 1 ประมาณ 1,800–2,500 บาทต่อเข็ม',
  },
  {
    question: 'วัคซีน Rotavirus จำเป็นไหม?',
    answer:
      'แนะนำมาก Rotavirus เป็นสาเหตุหลักของท้องเสียรุนแรงในทารก ที่ต้องเข้ารพ. วัคซีน Rotavirus ฉีด/กิน 2–3 ครั้งในช่วง 2–6 เดือนแรก ราคารวมประมาณ 3,000–6,000 บาท',
  },
  {
    question: 'วัคซีนไข้หวัดใหญ่ต้องฉีดทุกปีไหม?',
    answer:
      'ใช่ เพราะไวรัสไข้หวัดใหญ่เปลี่ยนสายพันธุ์ทุกปี WHO แนะนำให้เด็กทุกคนอายุ 6 เดือนขึ้นไปฉีดทุกปี ราคาประมาณ 350–600 บาท/เข็ม บางโรงพยาบาลรัฐให้ฟรีในกลุ่มเสี่ยง',
  },
  {
    question: 'ถ้างบจำกัด วัคซีนเสริมไหนที่ควรฉีดก่อน?',
    answer:
      'ลำดับความสำคัญ: 1) Rotavirus (ป้องกันท้องเสียรุนแรง), 2) อีสุกอีใส (ป้องกันโรคที่แพร่ง่ายมาก), 3) ไข้หวัดใหญ่ (ทุกปี, ถูกที่สุด), 4) ตับอักเสบ A, 5) Pneumococcal (ปอดอักเสบ)',
  },
]

export default function BabyVaccineCostPage() {
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
        { label: 'ค่าวัคซีนเด็กในไทย' },
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
        ข้อมูลในบทความนี้อ้างอิงจาก <strong>กรมควบคุมโรค กระทรวงสาธารณสุข</strong>,{' '}
        <strong>กุมารแพทยสมาคมแห่งประเทศไทย</strong> และ{' '}
        <strong>องค์การอนามัยโลก (WHO)</strong> ราคาเป็นการประมาณและอาจเปลี่ยนแปลงได้
      </div>

      <p>
        วัคซีนเป็นการลงทุนด้านสุขภาพที่คุ้มค่าที่สุด แต่พ่อแม่หลายคนไม่รู้ว่าวัคซีนอะไรฟรีบ้าง
        และอะไรที่ต้องจ่ายเพิ่ม บทความนี้รวบรวมข้อมูลทั้งหมดไว้ในที่เดียว
        เพื่อให้วางแผนงบประมาณได้อย่างแม่นยำ
      </p>

      <h2 id="epi">วัคซีนในโปรแกรมรัฐ (EPI) — ฟรีทุกตัว</h2>
      <p>
        ประเทศไทยมีโปรแกรมวัคซีนแห่งชาติ (Expanded Program on Immunization — EPI)
        ที่ให้วัคซีนฟรีสำหรับเด็กทุกคน ผ่านโรงพยาบาลรัฐและสถานีอนามัย:
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-green-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">วัคซีน</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">อายุที่ฉีด</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ค่าใช้จ่าย</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['วัณโรค (BCG)', 'แรกเกิด', 'ฟรี'],
              ['ตับอักเสบ B (เข็มที่ 1)', 'แรกเกิด', 'ฟรี'],
              ['5 in 1 (คอตีบ-บาดทะยัก-ไอกรน-ตับอักเสบ B-Hib)', '2, 4, 6 เดือน', 'ฟรี'],
              ['โปลิโอ (OPV)', '2, 4, 6 เดือน', 'ฟรี'],
              ['MMR (หัด-คางทูม-หัดเยอรมัน)', '9–12 เดือน, 2.5 ปี', 'ฟรี'],
              ['ไข้สมองอักเสบ JE', '1 ปี 2 เดือน, 2 ปี 6 เดือน', 'ฟรี'],
              ['5 in 1 บูสเตอร์', '1 ปี 6 เดือน', 'ฟรี'],
              ['อีสุกอีใส (Varicella)', '18 เดือน', 'ฟรี (บางพื้นที่)'],
            ].map(([vac, age, cost]) => (
              <tr key={vac} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{vac}</td>
                <td className="px-4 py-3 text-gray-600">{age}</td>
                <td className="px-4 py-3 font-bold text-green-600">{cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="extra">วัคซีนเสริมที่ต้องจ่ายเอง</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">วัคซีน</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">อายุ</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ราคาโดยประมาณ</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">จำนวนเข็ม</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['Rotavirus', '2, 4, (6) เดือน', '1,500–2,500 บ./เข็ม', '2–3 เข็ม'],
              ['Pneumococcal (PCV13)', '2, 4, 6, 12 เดือน', '2,000–3,500 บ./เข็ม', '4 เข็ม'],
              ['6 in 1 (แทน 5 in 1)', '2, 4, 6 เดือน', '1,800–2,500 บ./เข็ม', '3 เข็ม'],
              ['ตับอักเสบ A', '1, 1.5 ปี', '800–1,500 บ./เข็ม', '2 เข็ม'],
              ['อีสุกอีใส (ถ้าไม่ฟรีในพื้นที่)', '1 ปี', '1,200–1,800 บ.', '1 เข็ม'],
              ['ไข้หวัดใหญ่', 'ทุกปี ตั้งแต่ 6 เดือน', '300–600 บ./ครั้ง', 'ทุกปี'],
              ['HPV (มะเร็งปากมดลูก)', '9–14 ปี (เด็กหญิง)', '2,500–4,000 บ./เข็ม', '2–3 เข็ม'],
            ].map(([vac, age, price, doses]) => (
              <tr key={vac} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{vac}</td>
                <td className="px-4 py-3 text-gray-600">{age}</td>
                <td className="px-4 py-3 font-bold text-blue-600">{price}</td>
                <td className="px-4 py-3 text-gray-600">{doses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="schedule">ตารางค่าใช้จ่ายวัคซีนตามอายุ</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">อายุ</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">วัคซีน EPI (ฟรี)</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">วัคซีนเสริม (ต้องจ่าย)</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">งบเสริม (โดยประมาณ)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['แรกเกิด', 'BCG, Hep B', '—', '0 บ.'],
              ['2 เดือน', '5 in 1, OPV', 'Rotavirus, PCV13, 6in1', '5,000–8,000 บ.'],
              ['4 เดือน', '5 in 1, OPV', 'Rotavirus, PCV13, 6in1', '5,000–8,000 บ.'],
              ['6 เดือน', '5 in 1, OPV', 'Rotavirus (เข็ม 3), ไข้หวัดใหญ่', '2,000–4,500 บ.'],
              ['1 ปี', 'MMR', 'ตับอักเสบ A, PCV13 (บูสเตอร์)', '2,800–5,000 บ.'],
              ['1 ปี 6 เดือน', '5 in 1 (บูสเตอร์), อีสุกอีใส', 'ตับอักเสบ A (เข็ม 2)', '800–1,500 บ.'],
              ['2–3 ปี', 'MMR (เข็ม 2), OPV', 'ไข้หวัดใหญ่ (ทุกปี)', '300–600 บ./ปี'],
            ].map(([age, epi, extra, cost]) => (
              <tr key={age} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{age}</td>
                <td className="px-4 py-3 text-green-600">{epi}</td>
                <td className="px-4 py-3 text-gray-600">{extra}</td>
                <td className="px-4 py-3 font-bold text-blue-600">{cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="total">งบวัคซีนรวมที่ต้องเตรียม</h2>
      <ul>
        <li>
          <strong>วัคซีน EPI เท่านั้น</strong> — 0 บาท (ฟรีทั้งหมด)
        </li>
        <li>
          <strong>วัคซีนเสริมพื้นฐาน (Rotavirus + อีสุกอีใส + ตับอักเสบ A)</strong> —
          ประมาณ 8,000–15,000 บาท ตลอดช่วง 0–2 ปี
        </li>
        <li>
          <strong>วัคซีนเสริมครบชุด (รวม PCV13 + 6in1 + ไข้หวัดใหญ่ทุกปี)</strong> —
          ประมาณ 25,000–45,000 บาท ตลอดช่วง 0–5 ปี
        </li>
      </ul>

      <h2 id="tips">เคล็ดลับประหยัดค่าวัคซีน</h2>
      <ul>
        <li>
          <strong>ใช้สิทธิ EPI ให้เต็มที่</strong> — ตรวจสอบกับโรงพยาบาลว่ามีวัคซีนใดบ้างที่ครอบคลุมในพื้นที่คุณ
        </li>
        <li>
          <strong>เปรียบเทียบราคาโรงพยาบาลเอกชน</strong> — ราคาวัคซีนอาจต่างกันมากระหว่าง รพ.
          บางแห่งมีแพ็คเกจวัคซีนที่ประหยัดกว่าฉีดทีละเข็ม
        </li>
        <li>
          <strong>แพ็คเกจวัคซีนเด็กแรกเกิด</strong> — หลาย รพ. เอกชนมีแพ็คเกจวัคซีนครบชุด
          ราคา 15,000–30,000 บาท ที่ถูกกว่าซื้อทีละตัว
        </li>
      </ul>

      <p>
        ดูข้อมูลค่าใช้จ่ายรวมสำหรับลูกวัย 1–2 ปีได้ที่{' '}
        <Link href="/blog/baby-expenses-1-2-years">ค่าใช้จ่ายลูก 1–2 ปี</Link>
      </p>
      <p>
        ดูการวางแผนค่าใช้จ่ายปีแรกได้ที่{' '}
        <Link href="/blog/baby-first-year-expenses">ค่าใช้จ่ายมีลูกปีแรก</Link>
      </p>

      <h2 id="faq">คำถามที่พบบ่อย</h2>
      <FAQ items={FAQ_ITEMS} />
    </BlogLayout>
  )
}
