import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useSpring, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { GrowForgeLogo } from '@/components/ui/Logo'
import { siteConfig } from '@/data/site'
import { PhoneIcon } from '@/components/ui/ContactIcons'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const reduce = useReducedMotion()
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    if (!mobileOpen) return
    closeBtnRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [mobileOpen])

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />

      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={cn(
            'mx-auto w-full max-w-7xl px-3 sm:px-5 lg:px-6 transition-[padding] duration-500',
            scrolled ? 'pt-3' : 'pt-4 sm:pt-6'
          )}
        >
          <div
            className={cn(
              'flex items-center justify-between gap-4 rounded-2xl border px-3 py-2.5 sm:px-4 transition-all duration-500',
              scrolled
                ? 'glass-strong border-gf-line'
                : 'border-transparent bg-transparent shadow-none'
            )}
          >
            {/* Brand */}
            <Link
              to="/"
              className="relative flex min-h-11 shrink-0 items-center rounded-lg"
              aria-label="GrowForge — home"
            >
              <GrowForgeLogo
                variant="header"
                priority
                decorative
                className="w-[164px] sm:w-[196px] xl:w-[224px]"
              />
            </Link>

            {/* Desktop navigation */}
            <nav aria-label="Main" className="hidden lg:block">
              <ul className="flex items-center gap-1 rounded-full border border-gf-line bg-gf-ink/40 p-1">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        cn(
                          'relative block rounded-full px-4 py-2.5 text-[14.5px] font-semibold transition-colors duration-200',
                          isActive ? 'text-white' : 'text-gf-muted hover:text-gf-white'
                        )
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {isActive && (
                            <motion.span
                              layoutId="nav-active"
                              className="absolute inset-0 rounded-full border border-gf-line-strong bg-gradient-to-b from-gf-electric/30 to-gf-neon/10 shadow-[0_0_24px_-6px_rgba(160,32,240,0.7)]"
                              transition={reduce ? { duration: 0 } : { type: 'spring', bounce: 0.2, duration: 0.5 }}
                            />
                          )}
                          <span className="relative z-10">{link.label}</span>
                          {isActive && (
                            <span className="absolute -bottom-px left-1/2 z-10 h-px w-6 -translate-x-1/2 bg-gradient-to-r from-transparent via-gf-magenta to-transparent" />
                          )}
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Link to="/contact" className="btn btn-primary btn-sm group hidden sm:inline-flex">
                <span>Start a Project</span>
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="btn btn-glass btn-sm h-11 w-11 !px-0 lg:hidden"
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] bg-gf-ink/70 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              key="drawer"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={reduce ? { opacity: 0 } : { x: '100%' }}
              animate={reduce ? { opacity: 1 } : { x: 0 }}
              exit={reduce ? { opacity: 0 } : { x: '100%' }}
              transition={{ type: 'spring', damping: 32, stiffness: 300 }}
              className="glass-strong fixed inset-y-0 right-0 z-[70] flex w-[min(90vw,380px)] flex-col overflow-y-auto rounded-l-[28px] border-r-0 p-6 lg:hidden"
            >
              <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gf-electric/30 blur-[90px]" aria-hidden="true" />

              <div className="relative flex items-center justify-between">
                <GrowForgeLogo variant="header" className="w-[150px]" />
                <button
                  ref={closeBtnRef}
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="btn btn-glass btn-sm h-11 w-11 !px-0"
                  aria-label="Close navigation menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="divider-glow relative my-6" />

              <nav aria-label="Mobile" className="relative">
                <ul className="flex flex-col gap-1.5">
                  {navLinks.map((link, idx) => (
                    <motion.li
                      key={link.to}
                      initial={reduce ? false : { opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + idx * 0.05, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <NavLink
                        to={link.to}
                        end={link.to === '/'}
                        className={({ isActive }) =>
                          cn(
                            'flex min-h-[56px] items-center justify-between rounded-2xl border px-4 font-display text-xl font-semibold transition-colors',
                            isActive
                              ? 'border-gf-line-strong bg-gradient-to-r from-gf-electric/25 to-transparent text-white'
                              : 'border-transparent text-gf-muted hover:bg-white/[0.03] hover:text-white'
                          )
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <span className="flex items-center gap-4">
                              <span className="font-mono text-xs text-gf-lavender/70">0{idx + 1}</span>
                              {link.label}
                            </span>
                            {isActive ? <span className="status-dot" /> : <ArrowUpRight size={18} className="opacity-40" />}
                          </>
                        )}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="relative mt-auto flex flex-col gap-4 pt-8">
                <Link to="/contact" className="btn btn-primary btn-lg w-full">
                  Start a Project <ArrowUpRight size={18} />
                </Link>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-gf-muted hover:text-white"
                >
                  <Mail size={15} /> {siteConfig.email}
                </a>
                <a
                  href={`tel:+${siteConfig.phones[0].number}`}
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-gf-muted hover:text-white"
                >
                  <PhoneIcon size={15} /> {siteConfig.phones[0].display}
                </a>
                <p className="text-center text-[11px] font-bold uppercase tracking-[0.3em] text-gf-lavender/70">Build what matters</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
