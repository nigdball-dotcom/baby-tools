import { faqSchema } from '@/lib/schema'
import type { FAQItem } from '@/types'

export default function FAQ({ items }: { items: FAQItem[] }) {
  const schema = faqSchema(items)

  return (
    <section aria-labelledby="faq-heading" className="py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <h2
        id="faq-heading"
        className="text-2xl font-bold text-gray-900 sm:text-3xl"
      >
        คำถามที่พบบ่อย (FAQ)
      </h2>
      <p className="mt-2 text-gray-500">คำตอบสำหรับคำถามยอดฮิตจากพ่อแม่</p>

      <div className="mt-6 divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-white">
        {items.map((item, i) => (
          <details key={i} className="group px-6 py-1">
            <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 text-base font-semibold text-gray-900 marker:hidden">
              <span>{item.question}</span>
              <span className="shrink-0 text-blue-600 transition-transform group-open:rotate-180" aria-hidden>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </span>
            </summary>
            <div className="pb-4 text-gray-600 leading-relaxed text-sm">{item.answer}</div>
          </details>
        ))}
      </div>
    </section>
  )
}
