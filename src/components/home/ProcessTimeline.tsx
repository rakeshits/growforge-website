import { useRef } from 'react'
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'
import { Compass, FileCode2, Palette, Terminal, Rocket, Check } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { SectionGlow } from '@/components/layout/Background'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

const stages = [
  {
    step: '01', name: 'Discover', icon: Compass,
    tagline: 'Requirements & commercial context',
    description: 'We begin with a structured look at your business objectives, target audience, competitive landscape and functional constraints to define clear success criteria.',
    deliverables: ['Problem discovery brief', 'User personas & pain points', 'Technical constraint audit'],
  },
  {
    step: '02', name: 'Plan', icon: FileCode2,
    tagline: 'Architecture spec & delivery roadmap',
    description: 'We architect the system, choose the right stack, define data models and set transparent milestone timelines with fixed deliverables.',
    deliverables: ['System architecture diagram', 'Scope of work & milestones', 'Data schema & API spec'],
  },
  {
    step: '03', name: 'Design', icon: Palette,
    tagline: 'High-fidelity UI & motion',
    description: 'We craft tailored visual experiences with precise typography, responsive layouts, micro-interactions and design tokens aligned with your brand identity.',
    deliverables: ['Interactive component prototypes', 'Responsive breakpoint specs', 'Motion & interaction design'],
  },
  {
    step: '04', name: 'Develop', icon: Terminal,
    tagline: 'Production code & testing',
    description: 'We build your application with clean TypeScript, robust backends and responsive CSS. Progress is deployed to preview environments so you always see where things stand.',
    deliverables: ['Type-safe frontend & backend', 'Automated testing & linting', 'Staging preview environments'],
  },
  {
    step: '05', name: 'Launch', icon: Rocket,
    tagline: 'Deployment, monitoring & iteration',
    description: 'Zero-downtime production deployment, DNS, SSL, analytics configuration and dedicated post-launch support.',
    deliverables: ['Production deployment & DNS', 'Core Web Vitals validation', 'Handoff & sprint support'],
  },
]

export function ProcessTimeline() {
  const listRef = useRef<HTMLOListElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 75%', 'end 60%'] })
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 })

  return (
    <section className="relative overflow-hidden py-24 md:py-32" aria-labelledby="process-title">
      <SectionGlow tone="violet" className="top-1/2 -right-52" size={600} />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <ScrollReveal className="lg:sticky lg:top-32">
              <SectionHeading
                id="process-title"
                eyebrow="How we work"
                title="A clear process."
                highlight="No surprises."
                description="Five transparent stages, regular previews and direct communication from first call to launch — and beyond."
              />
            </ScrollReveal>
          </div>

          <ol ref={listRef} className="relative lg:col-span-8">
            {/* Connector rail */}
            <span className="absolute left-[23px] top-3 bottom-3 w-px bg-gf-line sm:left-[27px]" aria-hidden="true" />
            <motion.span
              className="absolute left-[23px] top-3 bottom-3 w-px origin-top bg-gradient-to-b from-gf-magenta via-gf-neon to-gf-electric shadow-[0_0_10px_rgba(224,64,251,0.6)] sm:left-[27px]"
              style={reduce ? { scaleY: 1 } : { scaleY: fill }}
              aria-hidden="true"
            />

            {stages.map((stage, i) => {
              const Icon = stage.icon
              return (
                <li key={stage.step} className="relative pl-16 sm:pl-20 [&:not(:last-child)]:pb-8">
                  <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-2xl border border-gf-line-strong bg-gf-deep text-gf-lavender shadow-[0_0_24px_-4px_rgba(120,0,255,0.7)] sm:h-14 sm:w-14">
                    <Icon size={20} aria-hidden="true" />
                  </span>

                  <ScrollReveal delay={i * 0.04}>
                    <article className="glass glass-card p-6 sm:p-8">
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <span className="font-mono text-sm font-semibold text-gf-magenta">{stage.step}</span>
                        <h3 className="font-display text-2xl font-semibold text-white">{stage.name}</h3>
                        <span className="text-sm font-semibold text-gf-lavender">{stage.tagline}</span>
                      </div>
                      <p className="mt-4 text-[15px] leading-relaxed text-gf-muted sm:text-base">{stage.description}</p>
                      <ul className="mt-5 grid gap-2 sm:grid-cols-3">
                        {stage.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-gf-white/90">
                            <Check size={15} className="mt-0.5 shrink-0 text-gf-magenta" aria-hidden="true" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </ScrollReveal>
                </li>
              )
            })}
          </ol>
        </div>
      </Container>
    </section>
  )
}
