import { Code, Cpu, Database, Globe, Layers, Sparkles, Terminal, Zap } from 'lucide-react'

const items = [
  { label: 'React & TypeScript', icon: Code },
  { label: 'Next.js', icon: Globe },
  { label: 'Django & Python', icon: Terminal },
  { label: 'Shopify storefronts', icon: Sparkles },
  { label: 'REST & GraphQL APIs', icon: Zap },
  { label: 'PostgreSQL & MySQL', icon: Database },
  { label: 'UI/UX systems', icon: Layers },
  { label: 'AI integrations', icon: Cpu },
]

/** Technology ribbon between hero and services. */
export function CapabilitiesMarquee() {
  const loop = [...items, ...items]
  return (
    <section aria-label="Technologies we work with" className="relative border-y border-gf-line bg-gf-deep/40 py-5">
      <div className="marquee-mask overflow-hidden">
        <ul className="marquee-track gap-12 pr-12">
          {loop.map((item, i) => {
            const Icon = item.icon
            return (
              <li
                key={`${item.label}-${i}`}
                aria-hidden={i >= items.length ? true : undefined}
                className="flex shrink-0 items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-gf-muted"
              >
                <Icon size={16} className="text-gf-lavender" aria-hidden="true" />
                {item.label}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
