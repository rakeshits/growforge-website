import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { PageHero } from '@/components/layout/PageHero'
import { ContactCTA } from '@/components/home/ContactCTA'
import { ProjectCard } from '@/components/portfolio/ProjectCard'
import { projects, projectCategories } from '@/data/projects'
import type { ProjectCategoryFilter } from '@/data/projects'
import { siteConfig } from '@/data/site'

export function Work() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategoryFilter>('All')
  const reduce = useReducedMotion()

  useEffect(() => {
    document.title = `Work & Case Studies — ${siteConfig.name}`
  }, [])

  const filtered = activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <main>
      <PageHero
        eyebrow="Selected case studies"
        title="Engineered for performance."
        highlight="Built to scale."
        description="A portfolio of digital products we have designed and built — spanning streetwear e-commerce, analytics dashboards and operational web platforms."
      />

      <section className="relative pb-8" aria-label="Projects">
        <Container>
          <div className="no-scrollbar -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap" role="group" aria-label="Filter projects by category">
              {projectCategories.map((cat) => {
                const count = cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    aria-pressed={activeCategory === cat}
                    className="filter-pill shrink-0"
                  >
                    {cat}
                    <span className="rounded-full bg-white/[0.08] px-2 py-0.5 text-[11px] font-bold">{count}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-8"
            >
              {filtered.length > 0 ? (
                filtered.map((project, i) => <ProjectCard key={project.id} project={project} index={i} featured />)
              ) : (
                <div className="glass col-span-full rounded-[26px] px-6 py-20 text-center">
                  <p className="font-display text-xl font-semibold text-white">Nothing here yet</p>
                  <p className="mt-2 text-gf-muted">We don&rsquo;t have a published project in this category right now.</p>
                  <button type="button" onClick={() => setActiveCategory('All')} className="btn btn-glass btn-sm mt-6">
                    Show all projects
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="glass-soft mt-12 flex items-center gap-3 rounded-2xl px-5 py-4 text-sm text-gf-muted">
            <ShieldCheck size={18} className="shrink-0 text-gf-lavender" aria-hidden="true" />
            <span>Every project shown here was designed and built by the GrowForge team.</span>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </main>
  )
}
