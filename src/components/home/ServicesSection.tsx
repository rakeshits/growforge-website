import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { SectionGlow } from '@/components/layout/Background'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceCard } from '@/components/services/ServiceCard'
import { services } from '@/data/services'

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32" aria-labelledby="services-title">
      <SectionGlow tone="violet" className="top-1/3 -left-60" size={600} />

      <Container className="relative">
        <ScrollReveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="What we do"
            id="services-title"
            title="From first sketch to"
            highlight="finished product."
            description="A focused set of capabilities that takes a business idea from possibility to something people can use."
          />
          <Link to="/services" className="btn btn-glass shrink-0 self-start md:self-auto group">
            All services
            <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>

        <StaggerContainer className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, i) => (
            <StaggerItem key={service.id} className="h-full">
              <ServiceCard service={service} index={i} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  )
}
