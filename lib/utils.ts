export function formatThaiDate(iso: string): string {
  const months = [
    'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.',
    'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.',
  ]
  const d = new Date(iso)
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear() + 543}`
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
