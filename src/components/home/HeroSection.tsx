import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/layout/Container'
import { SectionGlow } from '@/components/layout/Background'
import { HeroGraphic } from '@/components/home/HeroGraphic'

const EASE = [0.16, 1, 0.3, 1] as const
const capabilities = ['Business websites', 'E-commerce', 'Web applications', 'AI integrations']

export function HeroSection() {
  const reduce = useReducedMotion()
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: EASE },
  })

  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 lg:pt-44 lg:pb-32" aria-labelledby="hero-title">
      <SectionGlow tone="electric" className="-top-48 -left-32" size={720} />
      <SectionGlow tone="magenta" className="top-24 right-[-10%]" size={520} />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Copy */}
          <div className="lg:col-span-6 xl:col-span-6">
            <motion.div {...rise(0)}>
              <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-[12px] font-bold uppercase tracking-[0.2em] text-gf-lavender">
                <span className="status-dot animate-pulse-soft" />
                Independent digital studio
              </span>
            </motion.div>

            <motion.h1
              id="hero-title"
              {...rise(0.08)}
              className="mt-7 font-display text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.035em] text-gf-white min-[400px]:text-5xl sm:text-6xl xl:text-[4.6rem]"
            >
              We build digital experiences that{' '}
              <span className="text-gradient-animated">move businesses forward.</span>
            </motion.h1>

            <motion.p {...rise(0.16)} className="mt-7 max-w-xl text-lg leading-relaxed text-gf-muted sm:text-xl">
              GrowForge is a three-engineer studio designing and building business websites, e-commerce
              platforms and custom web applications — with direct access to the people writing your code.
            </motion.p>

            <motion.div {...rise(0.24)} className="mt-10 flex flex-col gap-3 min-[460px]:flex-row min-[460px]:items-center">
              <Link to="/contact" className="btn btn-primary btn-lg group">
                Start a Project
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link to="/work" className="btn btn-glass btn-lg group">
                Explore Our Work
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.ul {...rise(0.32)} className="mt-12 flex flex-wrap gap-2" aria-label="What we build">
              {capabilities.map((c) => (
                <li key={c} className="chip chip--muted">{c}</li>
              ))}
            </motion.ul>
          </div>

          {/* Visual */}
          <motion.div
            className="lg:col-span-6 xl:col-span-6"
            initial={reduce ? false : { opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
          >
            <HeroGraphic />
          </motion.div>
        </div>
      </Container>

      <div className="divider-glow absolute inset-x-0 bottom-0" aria-hidden="true" />
    </section>
  )
}
