import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { PageHero } from '@/components/layout/PageHero'
import { ContactCTA } from '@/components/home/ContactCTA'
import { getServiceIcon } from '@/components/services/ServiceCard'
import { services, serviceCategories } from '@/data/services'
import type { ServiceCategory } from '@/data/services'
import { siteConfig } from '@/data/site'

export function Services() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const reduce = useReducedMotion()

  useEffect(() => {
    document.title = `Services & Capabilities — ${siteConfig.name}`
  }, [])

  const filtered =
    activeCategory === 'all'
      ? services
      : services.filter((s) => s.category === (activeCategory as ServiceCategory))

  return (
    <main>
      <PageHero
        eyebrow="Services & capabilities"
        title="Technical capabilities built for"
        highlight="real business needs."
        description="From e-commerce storefronts and custom business applications to AI integrations and analytics dashboards — every project is engineered around your specific requirements."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/contact" className="btn btn-primary btn-lg group">
            Discuss your project
            <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <Link to="/work" className="btn btn-glass btn-lg">See our work</Link>
        </div>
      </PageHero>

      <section className="relative pb-8" aria-label="Services">
        <Container>
          {/* Category filter */}
          <div className="no-scrollbar -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap" role="group" aria-label="Filter services by category">
              {serviceCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  aria-pressed={activeCategory === cat.id}
                  className="filter-pill shrink-0"
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout={!reduce} className="mt-10 grid gap-6 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filtered.map((service, idx) => {
                const Icon = getServiceIcon(service.icon)
                const number = services.indexOf(service) + 1
                return (
                  <motion.article
                    key={service.id}
                    layout={!reduce}
                    initial={reduce ? false : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.45, delay: reduce ? 0 : idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                    className="glass glass-card group flex flex-col p-6 sm:p-8"
                    aria-labelledby={`service-${service.id}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="icon-tile !h-14 !w-14 !rounded-2xl"><Icon size={24} aria-hidden="true" /></span>
                      <span className="chip chip--muted font-mono">{String(number).padStart(2, '0')}</span>
                    </div>

                    <h2 id={`service-${service.id}`} className="mt-6 font-display text-2xl font-semibold leading-snug text-white">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-gf-muted">{service.shortDescription}</p>

                    <div className="glass-soft mt-6 grid gap-5 rounded-2xl p-5 sm:grid-cols-2">
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-gf-magenta">The challenge</h3>
                        <p className="mt-2 text-sm leading-relaxed text-gf-muted">{service.problem}</p>
                      </div>
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-gf-lavender">Our approach</h3>
                        <p className="mt-2 text-sm leading-relaxed text-gf-muted">{service.solution}</p>
                      </div>
                    </div>

                    <h3 className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-white/80">Key deliverables</h3>
                    <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                      {service.deliverables.slice(0, 4).map((d) => (
                        <li key={d} className="flex items-start gap-2.5 text-sm text-gf-white/90">
                          <Check size={16} className="mt-0.5 shrink-0 text-gf-magenta" aria-hidden="true" />
                          {d}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-6 mb-7 flex flex-wrap gap-1.5" aria-label="Technologies">
                      {service.technologies.map((t) => (
                        <li key={t} className="chip chip--muted !py-1 !text-xs">{t}</li>
                      ))}
                    </ul>

                    <div className="mt-auto border-t border-gf-line pt-5">
                      <Link to="/contact" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-gf-lavender transition-colors hover:text-white">
                        {service.cta}
                        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </motion.article>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      <ContactCTA />
    </main>
  )
}
