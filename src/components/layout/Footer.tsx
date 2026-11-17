import { Link } from 'react-router-dom'
import { GitBranch, Mail, MessageCircle, ArrowUpRight } from 'lucide-react'
import { GrowForgeLogo } from '@/components/ui/Logo'
import { siteConfig } from '@/data/site'
import { formatWhatsAppUrl } from '@/lib/utils'
import { PhoneIcon, InstagramIcon } from '@/components/ui/ContactIcons'
import { projects } from '@/data/projects'
import { services } from '@/data/services'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-gf-lavender">{children}</h2>
}

const linkClass = 'inline-flex min-h-10 items-center text-[15px] text-gf-muted transition-colors duration-200 hover:text-white'

export function Footer() {
  const year = new Date().getFullYear()
  const whatsappUrl = siteConfig.whatsapp
    ? formatWhatsAppUrl(siteConfig.whatsapp, "Hi GrowForge, I'd like to discuss a project.")
    : null

  return (
    <footer className="relative mt-8 overflow-hidden border-t border-gf-line bg-gradient-to-b from-gf-ink/40 via-gf-deep/60 to-gf-ink">
      <div className="divider-glow absolute inset-x-0 top-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[min(900px,100%)] -translate-x-1/2 rounded-full bg-gf-electric/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-20">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link to="/" aria-label="GrowForge — home" className="inline-block rounded-lg">
              <GrowForgeLogo variant="full" decorative className="w-[260px] sm:w-[300px]" />
            </Link>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-gf-muted">
              An independent digital engineering studio. We design and build websites, e-commerce platforms
              and custom web applications for businesses, founders and growing companies.
            </p>

            <div className="mt-7 flex items-center gap-3">
              {siteConfig.social.github && (
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-glass btn-sm h-11 w-11 !px-0"
                  aria-label="GrowForge on GitHub"
                >
                  <GitBranch size={17} />
                </a>
              )}
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-glass btn-sm h-11 w-11 !px-0"
                  aria-label="GrowForge on Instagram"
                >
                  <InstagramIcon size={17} />
                </a>
              )}
              <a href={`mailto:${siteConfig.email}`} className="btn btn-glass btn-sm h-11 w-11 !px-0" aria-label="Email GrowForge">
                <Mail size={17} />
              </a>
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-glass btn-sm h-11 w-11 !px-0"
                  aria-label="Message GrowForge on WhatsApp"
                >
                  <MessageCircle size={17} />
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer" className="lg:col-span-2">
            <FooterHeading>Navigate</FooterHeading>
            <ul className="space-y-0.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div className="lg:col-span-3">
            <FooterHeading>Services</FooterHeading>
            <ul className="space-y-0.5">
              {services.map((srv) => (
                <li key={srv.id}>
                  <Link to="/services" className={linkClass}>
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Work + contact */}
          <div className="lg:col-span-3">
            <FooterHeading>Work</FooterHeading>
            <ul className="space-y-0.5">
              {projects.map((proj) => (
                <li key={proj.id}>
                  <Link to={`/work/${proj.slug}`} className={linkClass}>
                    {proj.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="glass-soft mt-8 rounded-2xl p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gf-lavender">Contact</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-1 flex min-h-10 items-center break-all text-[15px] font-semibold text-white transition-colors hover:text-gf-lavender"
              >
                {siteConfig.email}
              </a>
              <ul className="mt-2 space-y-0.5" aria-label="Phone and WhatsApp numbers">
                {siteConfig.phones.map((phone) => (
                  <li key={phone.number} className="flex items-center justify-between gap-2">
                    <a
                      href={`tel:+${phone.number}`}
                      className="inline-flex min-h-10 items-center gap-2 whitespace-nowrap text-sm text-gf-muted transition-colors hover:text-white"
                      aria-label={`Call ${phone.display}`}
                    >
                      <PhoneIcon size={13} /> {phone.display}
                    </a>
                    <a
                      href={formatWhatsAppUrl(phone.number, "Hi GrowForge, I'd like to discuss a project.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-gf-lavender transition-colors hover:bg-white/[0.06] hover:text-white"
                      aria-label={`WhatsApp ${phone.display} (opens in a new tab)`}
                    >
                      <MessageCircle size={15} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="divider-glow" aria-hidden="true" />

        <div className="flex flex-col items-center justify-between gap-4 py-7 text-sm text-gf-muted sm:flex-row">
          <p>© {year} GrowForge Digital Engineering Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-gf-lavender">Build what matters</span>
            <Link to="/contact" className="inline-flex min-h-10 items-center gap-1 font-semibold text-white hover:text-gf-lavender">
              Start a Project <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
