import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { Service } from '@/data/services'

export function getServiceIcon(name: string): LucideIcon {
  return (Icons[name as keyof typeof Icons] as LucideIcon) ?? Icons.Globe
}

interface ServiceCardProps {
  service: Service
  index?: number
}

/** Compact glass service card (home page grid). Equal heights via flex column. */
export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = getServiceIcon(service.icon)

  return (
    <article className="glass glass-card glass-card--lift group flex h-full flex-col p-6 sm:p-7">
      <div className="flex items-start justify-between">
        <span className="icon-tile">
          <Icon size={22} aria-hidden="true" />
        </span>
        <span className="font-mono text-xs font-semibold text-gf-lavender/70">{String(index + 1).padStart(2, '0')}</span>
      </div>

      <h3 className="mt-6 font-display text-[1.2rem] font-semibold leading-snug text-white">{service.title}</h3>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-gf-muted">{service.shortDescription}</p>

      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
        {service.technologies.slice(0, 3).map((t) => (
          <li key={t} className="chip chip--muted !py-1 !text-[11.5px]">{t}</li>
        ))}
      </ul>

      <Link
        to="/services"
        className="mt-4 inline-flex min-h-11 items-center gap-1.5 self-start text-sm font-bold text-gf-lavender transition-colors hover:text-white"
        aria-label={`Learn more about ${service.title}`}
      >
        Learn more
        <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </article>
  )
}
