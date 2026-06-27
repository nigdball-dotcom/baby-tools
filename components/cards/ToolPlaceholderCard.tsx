interface ToolPlaceholderCardProps {
  title: string
  description: string
  icon: string
  color: string
}

export default function ToolPlaceholderCard({
  title,
  description,
  icon,
  color,
}: ToolPlaceholderCardProps) {
  return (
    <div
      className="flex cursor-default flex-col rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-6"
      aria-label={`${title} — เร็วๆ นี้`}
    >
      <div
        className={`mb-4 flex h-16 w-16 items-center justify-center rounded-xl text-3xl opacity-50 ${color}`}
        aria-hidden="true"
      >
        {icon}
      </div>

      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-bold text-gray-700">{title}</h3>
        <span className="shrink-0 rounded-full bg-gray-200 px-2.5 py-0.5 text-xs font-medium text-gray-600">
          เร็วๆ นี้
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-gray-600">{description}</p>

      <div className="mt-auto border-t border-gray-200 pt-4 text-sm font-medium text-gray-400">
        กำลังมา...
      </div>
    </div>
  )
}
