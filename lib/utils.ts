const THAI_MONTHS = [
  'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.',
  'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.',
]

export function formatThaiDate(iso: string): string {
  const d = new Date(iso)
  return `${d.getDate()} ${THAI_MONTHS[d.getMonth()]} ${d.getFullYear() + 543}`
}

// Formats 'YYYY-MM' → 'ก.ค. 2026'
export function formatUpdatedAt(updatedAt: string): string {
  const [year, month] = updatedAt.split('-')
  return `${THAI_MONTHS[parseInt(month, 10) - 1]} ${year}`
}

export const CATEGORY_SLUG_MAP: Record<string, string> = {
  'คู่มือการเลือกผ้าอ้อม': 'diapers',
  'รีวิวและเปรียบเทียบ': 'diapers',
  'รีวิวสินค้า': 'diapers',
  'ผ้าอ้อมและของใช้เด็ก': 'diapers',
  'การนอนของลูกน้อย': 'sleep',
  'การให้นมลูก': 'feeding',
  'การวางแผนการเงิน': 'finance',
  'งบประมาณครอบครัว': 'finance',
  'สุขภาพและการดูแล': 'health',
  'คำแนะนำสำหรับพ่อแม่': 'parenting',
}

export function getCategorySlug(category: string): string | null {
  return CATEGORY_SLUG_MAP[category] ?? null
}
