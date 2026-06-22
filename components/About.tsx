import Link from 'next/link'

const features = [
  {
    icon: '⚡',
    title: 'ผลลัพธ์ทันที',
    description: 'คำนวณในเบราว์เซอร์ของคุณ ไม่ต้องรอโหลด',
  },
  {
    icon: '🔒',
    title: 'ข้อมูลปลอดภัย',
    description: 'ข้อมูลไม่ถูกส่งออกจากอุปกรณ์ของคุณ ไม่มีการเก็บข้อมูล',
  },
  {
    icon: '📱',
    title: 'รองรับมือถือ',
    description: 'ออกแบบสำหรับการใช้งานด้วยมือเดียว ขณะอุ้มลูก',
  },
  {
    icon: '💸',
    title: 'ฟรีตลอดไป',
    description: 'ทุกเครื่องมือบน BabyTools ใช้ได้ฟรี ไม่มีค่าสมาชิก',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            สร้างมาเพื่อพ่อแม่ยุคใหม่
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            เราเข้าใจว่าเวลาของคุณมีค่า BabyTools ช่วยให้คุณได้ตัวเลขที่แม่นยำในไม่กี่วินาที
            เพื่อที่คุณจะได้ใช้เวลากับลูกน้อยมากขึ้น
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                {f.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-blue-600 px-8 py-10 text-center text-white">
          <h3 className="text-2xl font-bold">เครื่องมือใหม่กำลังมา</h3>
          <p className="mt-3 text-blue-100">
            ตารางการให้นม ตารางนอน เครื่องคิดวัคซีน และอีกมากมาย
          </p>
          <p className="mt-6 text-sm text-blue-200">
            มีไอเดียเครื่องมือที่อยากได้? อ่านเพิ่มเติมได้ที่{' '}
            <Link href="/blog" className="font-medium text-white underline underline-offset-2">
              บล็อกของเรา
            </Link>
            {' '}หรือลอง{' '}
            <Link href="/tools/diaper-cost" className="font-medium text-white underline underline-offset-2">
              เครื่องคำนวณผ้าอ้อม
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
