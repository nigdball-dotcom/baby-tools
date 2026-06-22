import type { Metadata } from 'next'
import { Sarabun } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { websiteSchema } from '@/lib/schema'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/config'
import { Analytics } from '@vercel/analytics/react'

const sarabun = Sarabun({
  subsets: ['latin', 'thai'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sarabun',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `เครื่องคำนวณสำหรับพ่อแม่ | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'คำนวณค่าใช้จ่ายผ้าอ้อม',
    'ผ้าอ้อมเด็ก',
    'เครื่องมือพ่อแม่',
    'คำนวณงบผ้าอ้อม',
    'ผ้าอ้อมเดือนละเท่าไร',
    'baby tools',
    'diaper cost calculator thailand',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    siteName: SITE_NAME,
    title: `เครื่องคำนวณสำหรับพ่อแม่ | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `เครื่องคำนวณสำหรับพ่อแม่ | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: 'wLMUALfA_-YeaCBdC7LcjgZAn70B3njGWg9S0i4txBg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = websiteSchema()
  return (
    <html lang="th" className={sarabun.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased font-sans">
        {children}
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EMDETQFZB6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-EMDETQFZB6');`}
        </Script>
      </body>
    </html>
  )
}
