import Link from 'next/link'

const FOOTER_NAV = [
  {
    label: 'เครื่องมือ',
    ariaLabel: 'ลิงก์เครื่องมือ',
    links: [
      { label: 'คำนวณผ้าอ้อม', href: '/tools/diaper-cost' },
    ],
  },
  {
    label: 'บทความ',
    ariaLabel: 'ลิงก์บทความ',
    links: [
      { label: 'บทความทั้งหมด', href: '/blog' },
    ],
  },
  {
    label: 'เกี่ยวกับเรา',
    ariaLabel: 'ลิงก์เกี่ยวกับเรา',
    links: [
      { label: 'เกี่ยวกับ BabyTools', href: '/#about' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 rounded font-bold text-gray-900 text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <span aria-hidden="true">🍼</span>
              <span>BabyTools</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              เครื่องมือฟรีสำหรับพ่อแม่ยุคใหม่ ช่วยวางแผนค่าใช้จ่ายและดูแลลูกน้อย
            </p>
          </div>

          {/* Nav columns */}
          {FOOTER_NAV.map((section) => (
            <div key={section.label}>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                {section.label}
              </h3>
              <nav aria-label={section.ariaLabel} className="mt-4 flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="rounded text-sm text-gray-600 transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} BabyTools · สร้างด้วยความรักสำหรับพ่อแม่ทุกคน
          </p>
        </div>
      </div>
    </footer>
  )
}
