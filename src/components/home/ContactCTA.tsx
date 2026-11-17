import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { siteConfig } from '@/data/site'

/** Closing call-to-action panel used at the end of most pages. */
export function ContactCTA() {
  return (
    <section className="relative py-20 md:py-28" aria-labelledby="cta-title">
      <Container>
        <ScrollReveal>
          <div className="glass border-gradient relative overflow-hidden rounded-[32px] px-6 py-14 text-center sm:px-12 md:py-20">
            <div className="grid-faint absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]" aria-hidden="true" />
            <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[80%] -translate-x-1/2 rounded-full bg-gf-electric/35 blur-[100px]" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-40 right-0 h-72 w-1/2 rounded-full bg-gf-magenta/15 blur-[100px]" aria-hidden="true" />

            <div className="relative">
              <p className="eyebrow eyebrow--center">Have something in mind?</p>
              <h2 id="cta-title" className="mx-auto mt-6 max-w-3xl font-display text-[2.1rem] font-semibold leading-[1.1] text-white sm:text-5xl lg:text-[3.5rem]">
                Let&rsquo;s build what <span className="text-gradient">matters to you.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gf-muted">
                Tell us what you&rsquo;re trying to build. We&rsquo;ll help you find a clear, practical way forward — and reply within one business day.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link to="/contact" className="btn btn-primary btn-lg group w-full sm:w-auto">
                  Start a Project
                  <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <a href={`mailto:${siteConfig.email}`} className="btn btn-glass btn-lg w-full sm:w-auto">
                  <Mail size={18} /> {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
