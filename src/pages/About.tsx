import { useEffect } from 'react'
import { Target, Lightbulb, Wrench, Repeat, Check } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { PageHero } from '@/components/layout/PageHero'
import { SectionGlow } from '@/components/layout/Background'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactCTA } from '@/components/home/ContactCTA'
import { TeamCard } from '@/components/about/TeamCard'
import { teamMembers } from '@/data/team'
import { siteConfig } from '@/data/site'

const philosophies = [
  {
    icon: Target,
    title: 'Purpose over feature bloat',
    tag: 'Focused engineering',
    description:
      'We do not add features because they look impressive on a checklist. We uncover what your business and users genuinely need, and build the cleanest, most direct path to that outcome.',
  },
  {
    icon: Lightbulb,
    title: 'Clarity in complexity',
    tag: 'System design',
    description:
      'Good engineering simplifies. We turn multifaceted business logic, dense data models and complex workflows into straightforward APIs, intuitive interfaces and transparent architecture.',
  },
  {
    icon: Wrench,
    title: 'Built to be maintained',
    tag: 'Code longevity',
    description:
      'A product you cannot comfortably update or scale is a business liability. We write modular TypeScript and clean Python with future developers in mind: well-organised, typed and structured.',
  },
  {
    icon: Repeat,
    title: 'Iterate with intention',
    tag: 'Feedback loops',
    description:
      'The first blueprint is rarely perfect. We ship working software early to preview environments and incorporate real user and client feedback rather than waiting until the end.',
  },
]

const stats = [
  { val: '3', label: 'Engineers', sub: 'A focused, specialised team' },
  { val: '100%', label: 'Direct access', sub: 'No middlemen' },
  { val: 'Bespoke', label: 'Architecture', sub: 'No template bloat' },
  { val: 'Open', label: 'Availability', sub: 'Accepting new projects' },
]

const model = [
  'Direct engineer-to-client collaboration without management layers',
  'Complete ownership across UI design, frontend and backend',
  'Production quality built for longevity',
]

export function About() {
  useEffect(() => {
    document.title = `About the Studio — ${siteConfig.name}`
  }, [])

  return (
    <main>
      <PageHero
        eyebrow="About the studio"
        title="A small team. A bold vision."
        highlight="Thoughtful engineering."
        description="GrowForge is a three-member software engineering studio. We partner directly with entrepreneurs, founders and businesses to plan, design and engineer digital products that solve concrete operational challenges."
        aside={
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="glass glass-card flex flex-col justify-between rounded-[22px] p-5 sm:p-6">
                <span className="font-display text-3xl font-semibold text-gradient sm:text-4xl">{s.val}</span>
                <span className="mt-4 block">
                  <span className="block text-[15px] font-bold text-white">{s.label}</span>
                  <span className="mt-0.5 block text-[13px] text-gf-muted">{s.sub}</span>
                </span>
              </div>
            ))}
          </div>
        }
      >
        <ul className="glass-soft max-w-xl space-y-3 rounded-2xl p-5">
          {model.map((m) => (
            <li key={m} className="flex items-start gap-3 text-[15px] text-gf-white/90">
              <Check size={17} className="mt-0.5 shrink-0 text-gf-magenta" aria-hidden="true" />
              {m}
            </li>
          ))}
        </ul>
      </PageHero>

      {/* Mission & collaboration */}
      <section className="relative overflow-hidden py-16 md:py-24" aria-label="Mission and collaboration">
        <SectionGlow tone="violet" className="top-0 left-1/3" size={560} />
        <Container className="relative">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            <ScrollReveal className="h-full">
              <article className="glass glass-card border-gradient h-full rounded-[28px] p-8 sm:p-10">
                <p className="eyebrow">Our mission</p>
                <h2 className="mt-5 font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
                  Software engineered to genuinely move businesses forward.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-gf-muted">
                  Too many digital agencies build products that look fine at launch but quickly become technical debt.
                  Our mission is to build robust, maintainable and responsive digital systems that serve as reliable
                  foundations for years of business growth.
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-gf-muted">
                  That means pragmatic stack selection, performance-first architecture, and honesty about technical
                  trade-offs from day one.
                </p>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={0.08} className="h-full">
              <article className="glass glass-card h-full rounded-[28px] p-8 sm:p-10">
                <p className="eyebrow">How we collaborate</p>
                <h2 className="mt-5 font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
                  Transparent, communicative and milestone-driven.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-gf-muted">
                  You work directly with the GrowForge team throughout your project. Requirements are discussed with the
                  people writing the code, preventing the misunderstandings common in large agency structures.
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-gf-muted">
                  Progress is shared regularly via preview deployments. Feedback is welcome early, when changes are easy
                  to make — keeping timelines honest and surprises to a minimum.
                </p>
              </article>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="relative overflow-hidden py-16 md:py-24" aria-labelledby="team-title">
        <SectionGlow tone="magenta" className="top-10 -right-40" size={480} />
        <Container className="relative">
          <ScrollReveal>
            <SectionHeading
              id="team-title"
              eyebrow="The team"
              title="The engineers behind"
              highlight="GrowForge."
              description="Three full-stack engineers who own every project end to end — from interface design to databases and deployment."
            />
          </ScrollReveal>
          <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, i) => (
              <StaggerItem key={member.id} className="h-full">
                <TeamCard member={member} index={i} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="relative overflow-hidden py-16 md:py-24" aria-labelledby="philosophy-title">
        <SectionGlow tone="electric" className="bottom-0 -left-40" size={560} />
        <Container className="relative">
          <ScrollReveal>
            <SectionHeading
              id="philosophy-title"
              eyebrow="Philosophy & standards"
              title="How we think about building"
              highlight="digital products."
            />
          </ScrollReveal>
          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2">
            {philosophies.map((item, i) => {
              const Icon = item.icon
              return (
                <StaggerItem key={item.title} className="h-full">
                  <article className="glass glass-card group flex h-full flex-col p-7 sm:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <span className="icon-tile"><Icon size={21} aria-hidden="true" /></span>
                      <span className="font-mono text-xs font-semibold text-gf-lavender/70">0{i + 1}</span>
                    </div>
                    <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-gf-magenta">{item.tag}</p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-gf-muted">{item.description}</p>
                  </article>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </Container>
      </section>

      <ContactCTA />
    </main>
  )
}
