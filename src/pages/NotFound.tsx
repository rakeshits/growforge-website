import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { SectionGlow } from '@/components/layout/Background'
import { GrowForgeLogo } from '@/components/ui/Logo'
import { siteConfig } from '@/data/site'

export function NotFound() {
  const reduce = useReducedMotion()

  useEffect(() => {
    document.title = `Page not found — ${siteConfig.name}`
  }, [])

  return (
    <main className="relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-20">
      <SectionGlow tone="electric" className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size={640} />
      <Container size="sm" className="relative">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass border-gradient rounded-[32px] px-6 py-14 text-center sm:px-14"
        >
          <GrowForgeLogo variant="icon" className="mx-auto h-20 w-20" />
          <p className="mt-6 font-display text-7xl font-semibold leading-none text-gradient sm:text-8xl">404</p>
          <h1 className="mt-6 font-display text-2xl font-semibold text-white sm:text-3xl">This page doesn&rsquo;t exist</h1>
          <p className="mx-auto mt-3 max-w-md text-gf-muted">
            The page you&rsquo;re looking for may have moved or never existed. Let&rsquo;s get you back on track.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/" className="btn btn-primary">
              <Home size={17} aria-hidden="true" /> Back to home
            </Link>
            <button type="button" onClick={() => window.history.back()} className="btn btn-glass">
              <ArrowLeft size={17} aria-hidden="true" /> Go back
            </button>
          </div>
        </motion.div>
      </Container>
    </main>
  )
}
