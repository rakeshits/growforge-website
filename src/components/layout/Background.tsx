import { cn } from '@/lib/utils'

/**
 * Global, fixed atmospheric background: midnight base, purple/magenta radial
 * light, a faint violet grid and a few slow-drifting blurred orbs.
 * Rendered once in <App />. Purely decorative.
 */
export function SiteBackground() {
  return (
    <div className="gf-backdrop" aria-hidden="true">
      <div className="gf-backdrop__grid" />
      <div className="gf-orb gf-orb--violet" />
      <div className="gf-orb gf-orb--magenta" />
      <div className="gf-orb gf-orb--deep" />
      <div className="gf-noise" />
    </div>
  )
}

type GlowTone = 'violet' | 'magenta' | 'electric'

const toneColor: Record<GlowTone, string> = {
  violet: 'rgba(160, 32, 240, 0.22)',
  magenta: 'rgba(224, 64, 251, 0.14)',
  electric: 'rgba(120, 0, 255, 0.24)',
}

interface SectionGlowProps {
  tone?: GlowTone
  className?: string
  size?: number
}

/** Local ambient light for a section. Parent must be `relative` (and usually `overflow-hidden`). */
export function SectionGlow({ tone = 'violet', className, size = 560 }: SectionGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={cn('section-glow', className)}
      style={{ width: size, height: size, background: toneColor[tone] }}
    />
  )
}
