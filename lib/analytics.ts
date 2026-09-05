/**
 * GA4 Measurement v1 — centralized analytics abstraction.
 *
 * All GA4 event calls must go through this module.
 * SSR-safe: guards against missing `window` and unloaded gtag.
 * No React dependency. No PII collected.
 *
 * Frozen schema (Measurement v1):
 *   article_view         { article_slug, topic }
 *   article_cta_click    { article_slug, topic, destination, cta_type }
 *   tool_open            { tool_name }
 *   tool_complete        { tool_name }
 *   affiliate_click      { merchant, product_id, placement }
 */

function send(
  eventName: string,
  params: Record<string, string>,
): void {
  if (typeof window === 'undefined') return
  if (typeof window.gtag !== 'function') return
  window.gtag('event', eventName, params)
}

export function trackArticleView(slug: string, topic: string): void {
  send('article_view', { article_slug: slug, topic })
}

export function trackArticleCtaClick(
  slug: string,
  topic: string,
  destination: string,
  ctaType: string,
): void {
  send('article_cta_click', {
    article_slug: slug,
    topic,
    destination,
    cta_type: ctaType,
  })
}

export function trackToolOpen(toolName: string): void {
  send('tool_open', { tool_name: toolName })
}

export function trackToolComplete(toolName: string): void {
  send('tool_complete', { tool_name: toolName })
}

export function trackAffiliateClick(
  merchant: string,
  productId: string,
  placement: string,
): void {
  send('affiliate_click', {
    merchant,
    product_id: productId,
    placement,
  })
}
