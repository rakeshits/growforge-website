import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { SectionGlow } from '@/components/layout/Background'
import { cn } from '@/lib/utils'

interface PageHeroProps {
  eyebrow: string
  title: React.ReactNode
  highlight?: string
  description?: React.ReactNode
  children?: React.ReactNode
  aside?: React.ReactNode
  align?: 'left' | 'center'
}

/** Shared hero for inner pages (Services, Work, About, Contact). */
export function PageHero({ eyebrow, title, highlight, description, children, aside, align = 'left' }: PageHeroProps) {
  const reduce = useReducedMotion()
  const center = align === 'center'

  return (
    <section className="relative overflow-hidden pt-36 pb-16 sm:pt-40 md:pb-24">
      <SectionGlow tone="electric" className="-top-40 left-[8%]" size={620} />
      <SectionGlow tone="magenta" className="top-10 -right-40" size={420} />

      <Container className="relative">
        <div className={cn('grid gap-12 lg:gap-16', aside && 'lg:grid-cols-12 lg:items-center')}>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={cn(aside ? 'lg:col-span-7' : 'max-w-3xl', center && !aside && 'mx-auto text-center')}
          >
            <p className={cn('eyebrow mb-6', center && 'eyebrow--center')}>{eyebrow}</p>
            <h1 className="font-display text-[2.5rem] font-semibold leading-[1.06] text-gf-white sm:text-5xl lg:text-[4.25rem]">
              {title}
              {highlight && (
                <>
                  {' '}
                  <span className="text-gradient">{highlight}</span>
                </>
              )}
            </h1>
            {description && (
              <p className={cn('mt-6 text-lg leading-relaxed text-gf-muted sm:text-xl', center ? 'mx-auto max-w-2xl' : 'max-w-2xl')}>
                {description}
              </p>
            )}
            {children && <div className={cn('mt-9', center && 'flex justify-center')}>{children}</div>}
          </motion.div>

          {aside && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              {aside}
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  )
}
