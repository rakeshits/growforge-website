import { Link } from 'react-router-dom'
import { ArrowUpRight, GitBranch, ExternalLink } from 'lucide-react'
import type { Project } from '@/data/projects'
import { ProjectMockupPreview } from './ProjectMockupPreview'
import { cn } from '@/lib/utils'

export const statusConfig: Record<Project['status'], { label: string; className: string }> = {
  live: { label: 'Live', className: 'chip--live' },
  completed: { label: 'Completed', className: '' },
  'in-progress': { label: 'In progress', className: '' },
  conceptual: { label: 'Concept', className: 'chip--muted' },
}

interface ProjectCardProps {
  project: Project
  index?: number
  /** Larger heading for featured layouts. */
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const status = statusConfig[project.status]

  return (
    <article className="glass glass-card glass-card--lift group relative flex h-full flex-col overflow-hidden !rounded-[26px]">
      {/* Preview */}
      <div className="p-3 pb-0">
        <div className="mockup-frame relative aspect-[16/10] overflow-hidden rounded-[18px] border border-gf-line">
          <div className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]">
            <ProjectMockupPreview project={project} />
          </div>
          <span className="pointer-events-none absolute right-3 top-3 z-10 flex h-10 w-10 translate-y-1 items-center justify-center rounded-full bg-gradient-to-br from-gf-electric to-gf-neon text-white opacity-0 shadow-[0_0_24px_rgba(160,32,240,0.7)] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" aria-hidden="true">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-2">
          <span className={cn('chip', status.className)}>
            {project.status === 'live' && <span className="status-dot !h-1.5 !w-1.5" aria-hidden="true" />}
            {status.label}
          </span>
          <span className="chip chip--muted">{project.category}</span>
          <span className="ml-auto font-mono text-xs text-gf-muted">{project.year}</span>
        </div>

        <h3 className={cn('mt-5 font-display font-semibold text-white', featured ? 'text-2xl sm:text-[1.75rem]' : 'text-xl sm:text-2xl')}>
          {/* Stretched link: the whole card opens the case study */}
          <Link to={`/work/${project.slug}`} className="after:absolute after:inset-0 after:z-0 after:rounded-[26px] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-gf-lavender">
            {project.title}
          </Link>
        </h3>
        <p className="mt-1.5 text-sm font-semibold text-gf-lavender">{project.subtitle}</p>
        <p className="mt-4 line-clamp-3 text-[15px] leading-relaxed text-gf-muted">{project.description}</p>

        <ul className="mt-5 mb-6 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.technologies.slice(0, 4).map((tech) => (
            <li key={tech} className="chip chip--muted !py-1 !text-[11.5px]">{tech}</li>
          ))}
          {project.technologies.length > 4 && (
            <li className="chip chip--muted !py-1 !text-[11.5px]">+{project.technologies.length - 4}</li>
          )}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-gf-line pt-5">
          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-white">
            View case study
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
          <div className="relative z-10 flex items-center gap-1">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1.5 rounded-lg px-3 text-xs font-bold text-gf-lavender transition-colors hover:bg-white/[0.05] hover:text-white"
                aria-label={`${project.title} live site (opens in a new tab)`}
              >
                <ExternalLink size={13} /> Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1.5 rounded-lg px-3 text-xs font-bold text-gf-muted transition-colors hover:bg-white/[0.05] hover:text-white"
                aria-label={`${project.title} source code on GitHub (opens in a new tab)`}
              >
                <GitBranch size={13} /> Code
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
