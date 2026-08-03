import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Technology } from '@/components/technology'
import { PurposeSection } from '@/components/purpose-section'
import { GovStackAlignment } from '@/components/govstack-alignment'
import { Agencies } from '@/components/agencies'
import { Collaboration } from '@/components/collaboration'
import { PrivacySecurity } from '@/components/privacy-security'
import { Recognition } from '@/components/recognition'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <Features />
      <Technology />
      <PurposeSection />
      <GovStackAlignment />
      <Agencies />
      <Collaboration />
      <PrivacySecurity />
      <Recognition />
      <Footer />
    </main>
  )
}
