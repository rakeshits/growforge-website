import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { SectionGlow } from '@/components/layout/Background'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/portfolio/ProjectCard'
import { projects } from '@/data/projects'

export function FeaturedProjectsShowcase() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32" aria-labelledby="work-title">
      <SectionGlow tone="magenta" className="top-20 -right-48" size={560} />
      <SectionGlow tone="electric" className="bottom-0 left-1/4" size={520} />

      <Container className="relative">
        <ScrollReveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="work-title"
            eyebrow="Selected work"
            title="Real products,"
            highlight="built with intention."
            description="Digital products and experiences we have designed and engineered — from a streetwear storefront to operational web platforms."
          />
          <Link to="/work" className="btn btn-glass shrink-0 self-start md:self-auto group">
            View all work
            <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>

        <StaggerContainer className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
          {projects.slice(0, 4).map((project, i) => (
            <StaggerItem key={project.id} className="h-full">
              <ProjectCard project={project} index={i} featured />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  )
}
