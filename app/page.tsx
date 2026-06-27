import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PopularTools from '@/components/sections/PopularTools'
import BrowseByTopic from '@/components/sections/BrowseByTopic'
import PopularArticles from '@/components/sections/PopularArticles'
import LatestArticles from '@/components/sections/LatestArticles'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/config'

export const metadata: Metadata = {
  title: 'คำนวณค่าผ้าอ้อมเด็กฟรี 2026',
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `คำนวณค่าผ้าอ้อมเด็กฟรี 2026 | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
}

export default function HomePage() {
  return (
    <>
      <Navbar activeHref="/" />
      <main id="main-content">
        <Hero />
        <PopularTools />
        <BrowseByTopic />
        <PopularArticles />
        <About />
        <LatestArticles />
      </main>
      <Footer />
    </>
  )
}
