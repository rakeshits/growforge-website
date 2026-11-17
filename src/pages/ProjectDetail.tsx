import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, GitBranch, Check, ShoppingBag } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ContactCTA } from '@/components/home/ContactCTA'
import { projects } from '@/data/projects'
import { siteConfig } from '@/data/site'
import { ProjectMockupPreview } from '@/components/portfolio/ProjectMockupPreview'
import { statusConfig } from '@/components/portfolio/ProjectCard'
import { cn } from '@/lib/utils'

const EASE = [0.16, 1, 0.3, 1] as const

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const reduce = useReducedMotion()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = index >= 0 ? projects[index] : undefined

  useEffect(() => {
    if (project) document.title = `${project.title} — Case Study — ${siteConfig.name}`
  }, [project])

  if (!project) return <Navigate to="/work" replace />

  const status = statusConfig[project.status]
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 md:pb-24">
        <div
          className="section-glow -top-40 right-[5%]"
          style={{ width: 640, height: 640, background: `${project.accentColor}33` }}
          aria-hidden="true"
        />
        <Container className="relative">
          <Link to="/work" className="btn btn-ghost btn-sm group -ml-1 mb-10">
            <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
            All work
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="min-w-0 lg:col-span-6"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className={cn('chip', status.className)}>
                  {project.status === 'live' && <span className="status-dot !h-1.5 !w-1.5" aria-hidden="true" />}
                  {status.label}
                </span>
                <span className="chip chip--muted">{project.category}</span>
                <span className="chip chip--muted">{project.year}</span>
              </div>

              <h1 className="mt-6 font-display text-[2.5rem] font-semibold leading-[1.06] text-white sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="mt-3 text-lg font-semibold text-gf-lavender">{project.subtitle}</p>
              <p className="mt-6 text-lg leading-relaxed text-gf-muted">{project.longDescription}</p>

              {(project.liveUrl || project.storeUrl || project.githubUrl) && (
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      <ExternalLink size={17} /> View live site
                    </a>
                  )}
                  {project.storeUrl && (
                    <a href={project.storeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-glass">
                      <ShoppingBag size={17} /> Visit Shopify store
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-glass">
                      <GitBranch size={17} /> View repository
                    </a>
                  )}
                </div>
              )}
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
              className="lg:col-span-6"
            >
              <div className="glass border-gradient rounded-[28px] p-3">
                <div className="mockup-frame aspect-[16/11] overflow-hidden rounded-[20px] border border-gf-line">
                  <ProjectMockupPreview project={project} />
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Details */}
      <section className="relative py-16 md:py-20" aria-label="Project details">
        <Container>
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
            <ScrollReveal className="min-w-0 lg:col-span-7">
              <div className="glass glass-card h-full p-7 sm:p-9">
                <p className="eyebrow">What we built</p>
                <h2 className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">Key features</h2>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {project.features.map((feat) => (
                    <li key={feat} className="glass-soft flex items-start gap-3 rounded-2xl p-4">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-gf-electric to-gf-neon text-white">
                        <Check size={14} aria-hidden="true" />
                      </span>
                      <span className="text-[15px] font-semibold leading-snug text-gf-white">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08} className="min-w-0 lg:col-span-5">
              <div className="glass glass-card flex h-full flex-col p-7 sm:p-9">
                <p className="eyebrow">Project facts</p>
                <dl className="mt-6 divide-y divide-gf-line">
                  {[
                    ['Category', project.category],
                    ['Year', project.year],
                    ['Status', status.label],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between py-3.5">
                      <dt className="text-sm text-gf-muted">{k}</dt>
                      <dd className="text-[15px] font-semibold text-white">{v}</dd>
                    </div>
                  ))}
                </dl>

                <h2 className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-gf-lavender">Technology stack</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="chip">{tech}</li>
                  ))}
                </ul>

                <div className="mt-auto pt-9">
                  <Link to="/contact" className="btn btn-primary w-full group">
                    Start a similar project
                    <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Project navigation */}
          {projects.length > 1 && (
            <nav aria-label="More projects" className="mt-6 grid gap-4 sm:grid-cols-2 lg:mt-8">
              <Link to={`/work/${prev.slug}`} className="glass glass-card group flex min-w-0 items-center gap-4 p-5 sm:p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gf-line-strong text-gf-lavender transition-transform duration-300 group-hover:-translate-x-1">
                  <ArrowLeft size={18} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-[0.18em] text-gf-muted">Previous project</span>
                  <span className="mt-1 block truncate font-display text-lg font-semibold text-white">{prev.title}</span>
                </span>
              </Link>
              <Link to={`/work/${next.slug}`} className="glass glass-card group flex min-w-0 items-center justify-end gap-4 p-5 text-right sm:p-6">
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-[0.18em] text-gf-muted">Next project</span>
                  <span className="mt-1 block truncate font-display text-lg font-semibold text-white">{next.title}</span>
                </span>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gf-line-strong text-gf-lavender transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={18} aria-hidden="true" />
                </span>
              </Link>
            </nav>
          )}
        </Container>
      </section>

      <ContactCTA />
    </main>
  )
}
