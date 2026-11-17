import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { Check, Code2, Layers, Rocket, Compass } from 'lucide-react'

const pipeline = [
  { label: 'Discover', icon: Compass },
  { label: 'Design', icon: Layers },
  { label: 'Develop', icon: Code2 },
  { label: 'Launch', icon: Rocket },
]

const codeLines: { indent: number; tokens: { t: string; c: string }[] }[] = [
  { indent: 0, tokens: [{ t: '<', c: 'text-gf-muted' }, { t: 'Project', c: 'text-gf-lavender' }] },
  { indent: 1, tokens: [{ t: 'client', c: 'text-[#F3C7FF]' }, { t: '=', c: 'text-gf-muted' }, { t: '"your-business"', c: 'text-white' }] },
  { indent: 1, tokens: [{ t: 'goal', c: 'text-[#F3C7FF]' }, { t: '=', c: 'text-gf-muted' }, { t: '"move forward"', c: 'text-white' }] },
  { indent: 1, tokens: [{ t: 'stack', c: 'text-[#F3C7FF]' }, { t: '={[', c: 'text-gf-muted' }, { t: "'React', 'TS'", c: 'text-white' }, { t: ']}', c: 'text-gf-muted' }] },
  { indent: 1, tokens: [{ t: 'responsive', c: 'text-[#F3C7FF]' }] },
  { indent: 0, tokens: [{ t: '/>', c: 'text-gf-muted' }] },
]

/**
 * Hero visual — a glass "studio console" showing an idea moving through the
 * GrowForge pipeline, from code to live preview. Subtle pointer tilt on desktop.
 */
export function HeroGraphic() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 70, damping: 18 })
  const sy = useSpring(my, { stiffness: 70, damping: 18 })
  const rotateY = useTransform(sx, [-0.5, 0.5], [-7, 7])
  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6])

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  function onLeave() {
    mx.set(0)
    my.set(0)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative mx-auto w-full max-w-[600px] select-none"
      style={{ perspective: '1400px' }}
      role="img"
      aria-label="Illustration: a GrowForge project moving from code to a live website preview through the discover, design, develop and launch stages"
    >
      {/* Ambient light behind the console */}
      <div className="pointer-events-none absolute inset-[-12%] rounded-full bg-[radial-gradient(closest-side,rgba(120,0,255,0.42),rgba(224,64,251,0.10)_55%,transparent)] blur-2xl" aria-hidden="true" />

      <motion.div style={reduce ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }} className="relative">
        {/* Main console window */}
        <div className="glass border-gradient relative overflow-hidden rounded-[26px]">
          {/* Window chrome */}
          <div className="flex items-center gap-3 border-b border-gf-line px-4 py-3 sm:px-5">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-gf-magenta/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-gf-neon/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-gf-lavender/40" />
            </div>
            <div className="glass-soft flex min-w-0 flex-1 items-center gap-2 rounded-lg px-3 py-1.5">
              <span className="status-dot shrink-0 animate-pulse-soft" />
              <span className="truncate font-mono text-[11px] text-gf-muted">growforge.dev / build</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[1.05fr_1fr]">
            {/* Code pane */}
            <div className="relative border-b border-gf-line p-4 font-mono text-[11.5px] leading-6 sm:border-r sm:border-b-0 sm:p-5 sm:text-[12.5px]">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={reduce ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
                  className="flex gap-3 whitespace-nowrap"
                >
                  <span className="w-4 shrink-0 text-right text-gf-subtle/60" aria-hidden="true">{i + 1}</span>
                  <span style={{ paddingLeft: line.indent * 14 }}>
                    {line.tokens.map((tok, j) => (
                      <span key={j} className={tok.c}>{tok.t}</span>
                    ))}
                  </span>
                </motion.div>
              ))}
              <div className="mt-1 flex gap-3" aria-hidden="true">
                <span className="w-4 shrink-0 text-right text-gf-subtle/60">7</span>
                <span className="h-5 w-2 bg-gf-lavender/80 animate-pulse-soft" />
              </div>
            </div>

            {/* Live preview pane */}
            <div className="relative overflow-hidden p-4 sm:p-5">
              <div className="grid-faint absolute inset-0 opacity-60" aria-hidden="true" />
              <div className="relative space-y-3">
                <div className="flex items-center justify-between">
                  <span className="h-2 w-14 rounded-full bg-white/70" />
                  <div className="flex gap-1.5">
                    <span className="h-1.5 w-6 rounded-full bg-white/20" />
                    <span className="h-1.5 w-6 rounded-full bg-white/20" />
                    <span className="h-1.5 w-8 rounded-full bg-gf-neon/70" />
                  </div>
                </div>
                <div className="rounded-xl border border-gf-line bg-gradient-to-br from-gf-electric/35 via-gf-neon/15 to-transparent p-3">
                  <span className="block h-2.5 w-3/4 rounded-full bg-white/85" />
                  <span className="mt-2 block h-2.5 w-1/2 rounded-full bg-gradient-to-r from-gf-lavender to-gf-magenta" />
                  <span className="mt-3 block h-1.5 w-5/6 rounded-full bg-white/20" />
                  <span className="mt-1.5 block h-1.5 w-2/3 rounded-full bg-white/20" />
                  <span className="mt-3 inline-block h-5 w-16 rounded-md bg-gradient-to-r from-gf-electric to-gf-neon" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[0, 1, 2].map((k) => (
                    <div key={k} className="glass-soft rounded-lg p-2">
                      <span className="block h-5 w-5 rounded-md bg-gf-neon/40" />
                      <span className="mt-2 block h-1.5 w-full rounded-full bg-white/25" />
                      <span className="mt-1 block h-1.5 w-2/3 rounded-full bg-white/15" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent animate-scan" aria-hidden="true" />
            </div>
          </div>

          {/* Pipeline */}
          <div className="border-t border-gf-line px-4 py-4 sm:px-5">
            <div className="flex items-center justify-between gap-2">
              {pipeline.map((step, i) => {
                const Icon = step.icon
                return (
                  <div key={step.label} className="flex min-w-0 flex-1 items-center gap-2">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-gf-line-strong bg-gradient-to-br from-gf-electric/40 to-gf-neon/10 text-gf-lavender">
                      <Icon size={14} />
                    </span>
                    <span className="hidden truncate text-[12px] font-semibold text-gf-muted min-[420px]:inline">{step.label}</span>
                    {i < pipeline.length - 1 && <span className="hidden h-px flex-1 bg-gradient-to-r from-gf-neon/60 to-transparent sm:block" aria-hidden="true" />}
                  </div>
                )
              })}
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-gf-electric via-gf-neon to-gf-magenta shadow-[0_0_12px_rgba(224,64,251,0.7)]"
                initial={reduce ? { width: '78%' } : { width: '8%' }}
                animate={{ width: '78%' }}
                transition={{ duration: 2.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
        </div>

        {/* Floating: GF emblem */}
        <div
          className="glass absolute -left-3 -top-6 hidden h-20 w-20 items-center justify-center rounded-2xl sm:-left-8 sm:flex animate-float"
          style={{ transform: 'translateZ(40px)' }}
          aria-hidden="true"
        >
          <picture className="contents">
            <source srcSet="/brand/growforge-icon.webp" type="image/webp" />
            <img src="/brand/growforge-icon.png" alt="" width={64} height={64} className="logo-blend h-16 w-16" />
          </picture>
        </div>

        {/* Floating: preview status */}
        <div
          className="glass absolute -bottom-6 right-3 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-right-6 animate-float-delayed"
          style={{ transform: 'translateZ(60px)' }}
          aria-hidden="true"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-gf-electric to-gf-magenta text-white shadow-[0_0_18px_rgba(224,64,251,0.6)]">
            <Check size={16} />
          </span>
          <span className="leading-tight">
            <span className="block text-[13px] font-bold text-white">Preview deployed</span>
            <span className="block text-[11.5px] text-gf-muted">Ready for your review</span>
          </span>
        </div>
      </motion.div>
    </div>
  )
}
