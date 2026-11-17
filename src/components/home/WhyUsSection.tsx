import { Zap, Users, Layers, ArrowRight, Terminal } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/layout/Container'
import { SectionGlow } from '@/components/layout/Background'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

const pillars = [
  {
    icon: Users,
    title: 'Direct access, no account managers',
    tag: 'Communication',
    description:
      'You collaborate directly with the three engineers architecting and writing your software. No lost requirements, no game of telephone, and no unnecessary billing overhead.',
  },
  {
    icon: Zap,
    title: 'Engineered for performance',
    tag: 'Production quality',
    description:
      'Every interface is built with Core Web Vitals, a lean bundle and smooth, purposeful motion in mind. Code that looks great and holds up technically.',
  },
  {
    icon: Terminal,
    title: 'Maintainable, strongly-typed code',
    tag: 'Longevity',
    description:
      'We write modular TypeScript, clean Python and idiomatic component systems designed for long-term health — a codebase your team or future hires can build on.',
  },
  {
    icon: Layers,
    title: 'Business-driven decisions',
    tag: 'Pragmatism',
    description:
      'We do not chase vanity complexity. Every technical choice — from database schema to UI micro-interaction — is made to solve a concrete operational or conversion challenge.',
  },
]

const advantages = [
  { label: 'Intermediary layers', value: 'None — you talk to the engineers' },
  { label: 'Code', value: 'Tailored to your project' },
  { label: 'Response time', value: 'Within one business day' },
  { label: 'Core stack', value: 'React · TypeScript · Django' },
]

export function WhyUsSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32" aria-labelledby="why-title">
      <SectionGlow tone="electric" className="top-1/4 -left-40" size={560} />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <ScrollReveal className="lg:col-span-5">
            <SectionHeading
              id="why-title"
              eyebrow="Why GrowForge"
              title="Three engineers."
              highlight="One focused studio."
              description="Traditional agencies add account coordinators, markups and template shortcuts. GrowForge is a small, high-craft engineering team that builds tailored digital products."
            />

            <dl className="glass mt-10 overflow-hidden rounded-[22px]">
              {advantages.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 ${i > 0 ? 'border-t border-gf-line' : ''}`}
                >
                  <dt className="text-sm text-gf-muted">{row.label}</dt>
                  <dd className="text-[15px] font-semibold text-white sm:text-right">{row.value}</dd>
                </div>
              ))}
            </dl>

            <Link to="/about" className="btn btn-ghost mt-6 group">
              Read our engineering philosophy
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>

          <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {pillars.map((p) => {
              const Icon = p.icon
              return (
                <StaggerItem key={p.title} className="h-full">
                  <article className="glass glass-card group flex h-full flex-col p-7">
                    <div className="flex items-center justify-between gap-4">
                      <span className="icon-tile"><Icon size={21} aria-hidden="true" /></span>
                      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-gf-lavender/80">{p.tag}</span>
                    </div>
                    <h3 className="mt-6 font-display text-lg font-semibold leading-snug text-white">{p.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-gf-muted">{p.description}</p>
                  </article>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  )
}
