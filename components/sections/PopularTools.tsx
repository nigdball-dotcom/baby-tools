import ToolCard from '@/components/ToolCard'
import ToolPlaceholderCard from '@/components/cards/ToolPlaceholderCard'
import type { ToolMeta } from '@/types'

const TOOLS: ToolMeta[] = [
  {
    title: 'คำนวณค่าใช้จ่ายผ้าอ้อมเด็ก',
    description:
      'คำนวณค่าใช้จ่ายผ้าอ้อมต่อเดือนและต่อปีอัตโนมัติ เปรียบเทียบยี่ห้อเพื่อหาตัวเลือกที่คุ้มค่าที่สุด',
    href: '/tools/diaper-cost',
    icon: '👶',
    badge: 'ใหม่',
    color: 'bg-blue-100',
  },
]

const TOOL_PLACEHOLDERS = [
  {
    title: 'ตารางการนอนลูกน้อย',
    description: 'ติดตามรูปแบบการนอนของลูก คำนวณชั่วโมงนอนตามช่วงอายุ',
    icon: '😴',
    color: 'bg-purple-100',
  },
  {
    title: 'ตารางการให้นม',
    description: 'บันทึกและวางแผนตารางการให้นมสำหรับทารก',
    icon: '🍼',
    color: 'bg-rose-100',
  },
]

export default function PopularTools() {
  return (
    <section id="tools" className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            เครื่องมือสำหรับพ่อแม่
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            ทุกเครื่องมือฟรี รวดเร็ว และทำงานในเบราว์เซอร์ของคุณ
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((tool) => (
            <ToolCard key={tool.href} {...tool} />
          ))}
          {TOOL_PLACEHOLDERS.map((p) => (
            <ToolPlaceholderCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
