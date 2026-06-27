import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-rose-50 py-8 sm:py-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-100 opacity-40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-rose-100 opacity-40 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
          <span aria-hidden="true">🍼</span>
          <span>เครื่องมือฟรีสำหรับพ่อแม่</span>
        </span>

        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          คำนวณค่าผ้าอ้อมเด็ก{' '}
          <span className="text-blue-600">ฟรี ง่าย ทันที</span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500 sm:text-xl">
          BabyTools รวมเครื่องมือคำนวณฟรีสำหรับพ่อแม่ยุคใหม่ ช่วยวางแผนงบประมาณ คำนวณค่าผ้าอ้อม และดูแลลูกน้อยได้อย่างมั่นใจ
        </p>

        <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/tools/diaper-cost"
            className="w-full rounded-xl bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-blue-700 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:w-auto"
          >
            คำนวณค่าผ้าอ้อม →
          </Link>
          <Link
            href="#tools"
            className="w-full rounded-xl border border-gray-200 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:w-auto"
          >
            ดูเครื่องมือทั้งหมด
          </Link>
        </div>

        <p className="mt-5 text-sm text-gray-500">
          ใช้ฟรีทุกเครื่องมือ · ไม่ต้องสมัครสมาชิก · ผลลัพธ์แม่นยำทันที
        </p>
      </div>
    </section>
  )
}
