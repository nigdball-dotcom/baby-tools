/**
 * M1 + M2 analytics abstraction tests.
 * Run: node --experimental-strip-types --test tests/analytics.test.ts
 *
 * Covers:
 *   AN-01  correct event name + parameters for each function
 *   AN-02  no-op when window.gtag is absent
 *   AN-03  no extra parameters beyond frozen schema
 *   AN-M2  M2 article instrumentation — representative values and cta_type coverage
 */

import { test, describe, beforeEach, afterEach } from 'node:test'
import assert from 'node:assert/strict'

import {
  trackArticleView,
  trackArticleCtaClick,
  trackToolOpen,
  trackToolComplete,
  trackAffiliateClick,
} from '../lib/analytics.ts'

// ── gtag stub ────────────────────────────────────────────────────────────────

type GtagCall = { command: string; eventName: string; params: Record<string, string> }
const calls: GtagCall[] = []

function installGtag(): void {
  // @ts-expect-error — intentionally setting window in a Node test environment
  globalThis.window = {
    gtag(command: string, eventName: string, params: Record<string, string>) {
      calls.push({ command, eventName, params })
    },
  }
}

function removeGtag(): void {
  // @ts-expect-error
  delete globalThis.window
}

// ── AN-01 + AN-03: correct event name, correct parameters, no extras ─────────

describe('AN-01/03: event names and parameter shapes', () => {
  beforeEach(() => { calls.length = 0; installGtag() })
  afterEach(() => removeGtag())

  test('trackArticleView sends article_view with article_slug and topic only', () => {
    trackArticleView('baby-nap-schedule', 'sleep')
    assert.equal(calls.length, 1)
    const { command, eventName, params } = calls[0]!
    assert.equal(command, 'event')
    assert.equal(eventName, 'article_view')
    assert.deepEqual(params, { article_slug: 'baby-nap-schedule', topic: 'sleep' })
    assert.equal(Object.keys(params).length, 2, 'no extra parameters')
  })

  test('trackArticleCtaClick sends article_cta_click with correct shape', () => {
    trackArticleCtaClick('baby-nap-schedule', 'sleep', '/tools/diaper-cost', 'diaper_calculator')
    assert.equal(calls.length, 1)
    const { eventName, params } = calls[0]!
    assert.equal(eventName, 'article_cta_click')
    assert.deepEqual(params, {
      article_slug: 'baby-nap-schedule',
      topic: 'sleep',
      destination: '/tools/diaper-cost',
      cta_type: 'diaper_calculator',
    })
    assert.equal(Object.keys(params).length, 4, 'no extra parameters')
  })

  test('trackToolOpen sends tool_open with tool_name only', () => {
    trackToolOpen('diaper_cost')
    assert.equal(calls.length, 1)
    const { eventName, params } = calls[0]!
    assert.equal(eventName, 'tool_open')
    assert.deepEqual(params, { tool_name: 'diaper_cost' })
    assert.equal(Object.keys(params).length, 1, 'no extra parameters')
  })

  test('trackToolComplete sends tool_complete with tool_name only', () => {
    trackToolComplete('diaper_cost')
    assert.equal(calls.length, 1)
    const { eventName, params } = calls[0]!
    assert.equal(eventName, 'tool_complete')
    assert.deepEqual(params, { tool_name: 'diaper_cost' })
    assert.equal(Object.keys(params).length, 1, 'no extra parameters')
  })

  test('trackAffiliateClick sends affiliate_click with merchant, product_id, placement only', () => {
    trackAffiliateClick('MamyPoko', 'mamypoko-pants-m', 'tool_page')
    assert.equal(calls.length, 1)
    const { eventName, params } = calls[0]!
    assert.equal(eventName, 'affiliate_click')
    assert.deepEqual(params, {
      merchant: 'MamyPoko',
      product_id: 'mamypoko-pants-m',
      placement: 'tool_page',
    })
    assert.equal(Object.keys(params).length, 3, 'no extra parameters')
    assert.ok(!('destination' in params), 'affiliate destination URL must not be sent')
  })
})

// ── AN-02: no-op when gtag is unavailable ────────────────────────────────────

describe('AN-02: no-op when gtag unavailable', () => {
  beforeEach(() => { calls.length = 0; removeGtag() })

  test('trackArticleView does not throw when window is absent', () => {
    assert.doesNotThrow(() => trackArticleView('baby-nap-schedule', 'sleep'))
    assert.equal(calls.length, 0)
  })

  test('trackArticleCtaClick does not throw when window is absent', () => {
    assert.doesNotThrow(() =>
      trackArticleCtaClick('baby-nap-schedule', 'sleep', '/tools/diaper-cost', 'diaper_calculator'),
    )
    assert.equal(calls.length, 0)
  })

  test('trackToolOpen does not throw when window is absent', () => {
    assert.doesNotThrow(() => trackToolOpen('diaper_cost'))
    assert.equal(calls.length, 0)
  })

  test('trackToolComplete does not throw when window is absent', () => {
    assert.doesNotThrow(() => trackToolComplete('diaper_cost'))
    assert.equal(calls.length, 0)
  })

  test('trackAffiliateClick does not throw when window is absent', () => {
    assert.doesNotThrow(() => trackAffiliateClick('MamyPoko', 'mamypoko-pants-m', 'tool_page'))
    assert.equal(calls.length, 0)
  })

  test('trackArticleView does not throw when window.gtag is absent but window exists', () => {
    // @ts-expect-error
    globalThis.window = {}   // window present but no gtag property
    assert.doesNotThrow(() => trackArticleView('baby-nap-schedule', 'sleep'))
    assert.equal(calls.length, 0)
    // @ts-expect-error
    delete globalThis.window
  })
})

// ── AN-M2: M2 article instrumentation — representative values ─────────────────
//
// These tests verify the analytics layer behaves correctly for the exact
// slugs/topics/destinations used by M2 article instrumentation in BlogLayout.
// Component-level mount tests (ArticleViewTracker, ArticleCtaLink) require a
// DOM environment and are out of scope for the current Node-only test runner.

describe('AN-M2: article instrumentation representative values', () => {
  beforeEach(() => { calls.length = 0; installGtag() })
  afterEach(() => removeGtag())

  test('article_view for baby-nap-schedule with topic sleep', () => {
    trackArticleView('baby-nap-schedule', 'sleep')
    const { eventName, params } = calls[0]!
    assert.equal(eventName, 'article_view')
    assert.equal(params.article_slug, 'baby-nap-schedule')
    assert.equal(params.topic, 'sleep')
    assert.equal(Object.keys(params).length, 2)
  })

  test('article_cta_click with cta_type=tool emits correct shape', () => {
    trackArticleCtaClick('monthly-diaper-cost', 'finance', '/tools/diaper-cost', 'tool')
    const { eventName, params } = calls[0]!
    assert.equal(eventName, 'article_cta_click')
    assert.equal(params.article_slug, 'monthly-diaper-cost')
    assert.equal(params.topic, 'finance')
    assert.equal(params.destination, '/tools/diaper-cost')
    assert.equal(params.cta_type, 'tool')
    assert.equal(Object.keys(params).length, 4)
  })

  test('article_cta_click with cta_type=topic emits correct shape', () => {
    trackArticleCtaClick('baby-nap-schedule', 'sleep', '/blog/topic/sleep', 'topic')
    const { eventName, params } = calls[0]!
    assert.equal(eventName, 'article_cta_click')
    assert.equal(params.article_slug, 'baby-nap-schedule')
    assert.equal(params.topic, 'sleep')
    assert.equal(params.destination, '/blog/topic/sleep')
    assert.equal(params.cta_type, 'topic')
    assert.equal(Object.keys(params).length, 4)
  })

  test('article_cta_click does not include title, date, readingTime, or other metadata', () => {
    trackArticleCtaClick('baby-nap-schedule', 'sleep', '/blog/topic/sleep', 'topic')
    const { params } = calls[0]!
    assert.ok(!('title' in params), 'title must not be sent')
    assert.ok(!('date' in params), 'date must not be sent')
    assert.ok(!('readingTime' in params), 'readingTime must not be sent')
    assert.ok(!('category' in params), 'raw category must not be sent')
  })

  test('article_view does not include title, date, readingTime, or category', () => {
    trackArticleView('baby-nap-schedule', 'sleep')
    const { params } = calls[0]!
    assert.ok(!('title' in params))
    assert.ok(!('date' in params))
    assert.ok(!('readingTime' in params))
    assert.ok(!('category' in params))
  })
})

// ── AN-M3: tool instrumentation — diaper cost calculator ──────────────────────
//
// Component-level mount tests require a DOM environment.
// These tests verify the analytics layer contract and the source-level
// implementation contract for DiaperCalculator (AN-M3-04, AN-M3-05).

import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

describe('AN-M3: tool instrumentation representative values', () => {
  beforeEach(() => { calls.length = 0; installGtag() })
  afterEach(() => removeGtag())

  // AN-M3-01
  test('trackToolOpen emits tool_open with tool_name=diaper_cost only', () => {
    trackToolOpen('diaper_cost')
    assert.equal(calls.length, 1)
    const { command, eventName, params } = calls[0]!
    assert.equal(command, 'event')
    assert.equal(eventName, 'tool_open')
    assert.deepEqual(params, { tool_name: 'diaper_cost' })
    assert.equal(Object.keys(params).length, 1, 'no extra parameters')
  })

  // AN-M3-02
  test('trackToolComplete emits tool_complete with tool_name=diaper_cost only', () => {
    trackToolComplete('diaper_cost')
    assert.equal(calls.length, 1)
    const { command, eventName, params } = calls[0]!
    assert.equal(command, 'event')
    assert.equal(eventName, 'tool_complete')
    assert.deepEqual(params, { tool_name: 'diaper_cost' })
    assert.equal(Object.keys(params).length, 1, 'no extra parameters')
  })

  // AN-M3-03
  test('tool events do not include calculator inputs or results', () => {
    trackToolOpen('diaper_cost')
    trackToolComplete('diaper_cost')
    for (const call of calls) {
      const { params } = call
      assert.ok(!('diapersPerDay'   in params), 'diapersPerDay must not be sent')
      assert.ok(!('diapersPerPack'  in params), 'diapersPerPack must not be sent')
      assert.ok(!('packPrice'       in params), 'packPrice must not be sent')
      assert.ok(!('dailyCost'       in params), 'dailyCost must not be sent')
      assert.ok(!('monthlyCost'     in params), 'monthlyCost must not be sent')
      assert.ok(!('yearlyCost'      in params), 'yearlyCost must not be sent')
      assert.ok(!('costPerDiaper'   in params), 'costPerDiaper must not be sent')
      assert.ok(!('preset'          in params), 'preset must not be sent')
    }
  })
})

describe('AN-M3-04/05: DiaperCalculator source contract', () => {
  const src = readFileSync(
    resolve(process.cwd(), 'components', 'DiaperCalculator.tsx'),
    'utf-8',
  )

  // AN-M3-04 — one-shot guard present in source
  test('DiaperCalculator source contains a useRef guard for tool_complete', () => {
    assert.ok(src.includes('completedRef'), 'completedRef guard must be present')
    assert.ok(src.includes('completedRef.current'), 'guard must be read before firing')
    assert.ok(
      src.includes('completedRef.current = true'),
      'guard must be set to true after first completion',
    )
  })

  // AN-M3-05 — no direct gtag call
  test('DiaperCalculator source contains no direct window.gtag or gtag( calls', () => {
    assert.ok(!src.includes('window.gtag'), 'window.gtag must not appear in DiaperCalculator')
    assert.ok(
      !(/\bgtag\s*\(/.test(src)),
      'bare gtag( call must not appear in DiaperCalculator',
    )
  })
})

// ── AN-M4: affiliate click instrumentation ────────────────────────────────────

describe('AN-M4: affiliate click representative values', () => {
  beforeEach(() => { calls.length = 0; installGtag() })
  afterEach(() => removeGtag())

  // AN-M4-01
  test('trackAffiliateClick emits affiliate_click with merchant, product_id, placement only', () => {
    trackAffiliateClick('MamyPoko', 'mamypoko-pants-m', 'tool_page')
    assert.equal(calls.length, 1)
    const { command, eventName, params } = calls[0]!
    assert.equal(command, 'event')
    assert.equal(eventName, 'affiliate_click')
    assert.deepEqual(params, {
      merchant: 'MamyPoko',
      product_id: 'mamypoko-pants-m',
      placement: 'tool_page',
    })
    assert.equal(Object.keys(params).length, 3, 'no extra parameters')
  })

  // AN-M4-02
  test('affiliate_click does not include destination URL or affiliate URL', () => {
    trackAffiliateClick('BabyLove', 'babylove-pants-m', 'article_page')
    const { params } = calls[0]!
    assert.ok(!('destination'   in params), 'destination must not be sent')
    assert.ok(!('affiliateUrl'  in params), 'affiliateUrl must not be sent')
    assert.ok(!('href'          in params), 'href must not be sent')
    assert.ok(!('url'           in params), 'url must not be sent')
  })

  // AN-M4-03: placement values — one test per frozen value
  test('tool_page is a valid placement value', () => {
    trackAffiliateClick('MamyPoko', 'mamypoko-pants-m', 'tool_page')
    assert.equal(calls[0]!.params.placement, 'tool_page')
  })

  test('article_page is a valid placement value', () => {
    trackAffiliateClick('Huggies', 'huggies-air-soft-m', 'article_page')
    assert.equal(calls[0]!.params.placement, 'article_page')
  })
})

describe('AN-M4-04/05/06/07: AffiliateLink source contract', () => {
  const affiliateLinkSrc = readFileSync(
    resolve(process.cwd(), 'components', 'AffiliateLink.tsx'),
    'utf-8',
  )
  const recommendedProductsSrc = readFileSync(
    resolve(process.cwd(), 'components', 'RecommendedProducts.tsx'),
    'utf-8',
  )
  const blogLayoutSrc = readFileSync(
    resolve(process.cwd(), 'components', 'BlogLayout.tsx'),
    'utf-8',
  )

  // AN-M4-04 — href preserved: AffiliateLink passes href through to <a>
  test('AffiliateLink renders href prop on the anchor element', () => {
    assert.ok(affiliateLinkSrc.includes('href={href}'), 'href must be forwarded to <a>')
  })

  // AN-M4-05 — target="_blank" preserved
  test('AffiliateLink preserves target="_blank"', () => {
    assert.ok(
      affiliateLinkSrc.includes('target="_blank"'),
      'AffiliateLink must render target="_blank"',
    )
  })

  // AN-M4-06 — rel preserved
  test('AffiliateLink preserves rel="sponsored noopener noreferrer"', () => {
    assert.ok(
      affiliateLinkSrc.includes('rel="sponsored noopener noreferrer"'),
      'AffiliateLink must render the full rel attribute',
    )
  })

  // AN-M4-07 — no direct gtag calls in AffiliateLink, RecommendedProducts, or BlogLayout
  test('AffiliateLink contains no direct window.gtag or gtag( calls', () => {
    assert.ok(!affiliateLinkSrc.includes('window.gtag'))
    assert.ok(!(/\bgtag\s*\(/.test(affiliateLinkSrc)))
  })

  test('RecommendedProducts contains no direct window.gtag or gtag( calls', () => {
    assert.ok(!recommendedProductsSrc.includes('window.gtag'))
    assert.ok(!(/\bgtag\s*\(/.test(recommendedProductsSrc)))
  })

  test('BlogLayout contains no direct window.gtag or gtag( calls', () => {
    assert.ok(!blogLayoutSrc.includes('window.gtag'))
    assert.ok(!(/\bgtag\s*\(/.test(blogLayoutSrc)))
  })
})
