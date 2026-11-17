import { useEffect } from 'react'
import { HeroSection } from '@/components/home/HeroSection'
import { CapabilitiesMarquee } from '@/components/home/CapabilitiesMarquee'
import { ServicesSection } from '@/components/home/ServicesSection'
import { FeaturedProjectsShowcase } from '@/components/home/FeaturedProjectsShowcase'
import { WhyUsSection } from '@/components/home/WhyUsSection'
import { ProcessTimeline } from '@/components/home/ProcessTimeline'
import { ContactCTA } from '@/components/home/ContactCTA'
import { siteConfig } from '@/data/site'

export function Home() {
  useEffect(() => {
    document.title = `${siteConfig.name} — ${siteConfig.tagline}`
  }, [])

  return (
    <main>
      <HeroSection />
      <CapabilitiesMarquee />
      <ServicesSection />
      <FeaturedProjectsShowcase />
      <WhyUsSection />
      <ProcessTimeline />
      <ContactCTA />
    </main>
  )
}
