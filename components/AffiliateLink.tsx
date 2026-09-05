'use client'

import { trackAffiliateClick } from '@/lib/analytics'

interface Props {
  href: string
  merchant: string
  productId: string
  placement: string
  className?: string
  ariaLabel?: string
  children: React.ReactNode
}

export default function AffiliateLink({
  href,
  merchant,
  productId,
  placement,
  className,
  ariaLabel,
  children,
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={() => trackAffiliateClick(merchant, productId, placement)}
    >
      {children}
    </a>
  )
}
