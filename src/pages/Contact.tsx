import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, MessageCircle, Send, AlertCircle, Copy, Check, ExternalLink } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { PageHero } from '@/components/layout/PageHero'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { siteConfig } from '@/data/site'
import { PhoneIcon, InstagramIcon } from '@/components/ui/ContactIcons'
import { formatWhatsAppUrl, formatMailtoUrl } from '@/lib/utils'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget range'),
  timeline: z.string().min(1, 'Please select a timeline'),
  description: z.string().min(15, 'Please provide brief details (at least 15 characters)'),
})

type FormData = z.infer<typeof schema>

const serviceOptions = [
  'Business Website / Landing Page',
  'E-commerce Storefront (Shopify / Headless)',
  'Custom Web Application & SaaS Platform',
  'Admin Dashboard & Data Analytics',
  'Booking & Operations Management System',
  'UI/UX Design System & Website Redesign',
  'AI Integration & Automated Workflows',
  'Website Maintenance & Performance Retainer',
  'Technical Architecture Consultation',
]

const budgetOptions = [
  'Under $1,500',
  '$1,500 – $4,000',
  '$4,000 – $8,000',
  '$8,000 – $15,000',
  '$15,000+',
  'Flexible / To be determined',
]

const timelineOptions = [
  'Immediate (Within 2-3 weeks)',
  '1 – 2 months',
  '2 – 4 months',
  'Flexible timeline',
]

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedBrief, setCopiedBrief] = useState(false)

  useEffect(() => {
    document.title = `Start a Project — Contact — ${siteConfig.name}`
  }, [])

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      service: serviceOptions[2],
      budget: budgetOptions[1],
      timeline: timelineOptions[1],
    },
  })

  const formValues = watch()

  const generateBriefText = (data: FormData) => {
    return [
      `==============================`,
      `GROWFORGE PROJECT INQUIRY BRIEF`,
      `==============================`,
      `Client: ${data.name}${data.company ? ` (${data.company})` : ''}`,
      `Email: ${data.email}`,
      `Service: ${data.service}`,
      `Budget Range: ${data.budget}`,
      `Target Timeline: ${data.timeline}`,
      ``,
      `Project Scope & Details:`,
      data.description,
      ``,
      `Sent via GrowForge Studio Configurator`,
    ].join('\n')
  }

  const onSubmit = (data: FormData) => {
    const subject = `[Project Inquiry] ${data.name} — ${data.service}`
    const body = generateBriefText(data)
    const url = formatMailtoUrl(siteConfig.email, subject, body)
    window.location.href = url
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleCopyBrief = () => {
    const brief = generateBriefText({
      name: formValues.name || 'Anonymous',
      email: formValues.email || 'N/A',
      company: formValues.company || '',
      service: formValues.service || 'General Inquiry',
      budget: formValues.budget || 'Flexible',
      timeline: formValues.timeline || 'Flexible',
      description: formValues.description || 'Brief inquiry details.',
    })
    navigator.clipboard.writeText(brief)
    setCopiedBrief(true)
    setTimeout(() => setCopiedBrief(false), 2000)
  }

  return (
    <main>
      <PageHero
        eyebrow="Start a project"
        title="Have an idea"
        highlight="worth building?"
        description="Let’s turn your next idea into a digital experience designed for real people and real business needs. Tell us about it below — we reply within one business day."
      />

      <section className="relative pb-24" aria-label="Contact GrowForge">
        <Container>
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
            {/* Direct channels */}
            <ScrollReveal direction="right" className="min-w-0 lg:col-span-4">
              <aside className="glass glass-card flex h-full flex-col gap-5 rounded-[28px] p-6 sm:p-8" aria-labelledby="channels-title">
                <div>
                  <p className="eyebrow">Direct channels</p>
                  <h2 id="channels-title" className="mt-4 font-display text-2xl font-semibold text-white">Prefer to reach out directly?</h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-gf-muted">
                    Skip the form — email, call or WhatsApp the team directly. We reply within one business day.
                  </p>
                </div>

                {/* Email */}
                <div className="glass-soft flex items-center justify-between gap-3 rounded-2xl p-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="icon-tile !hidden !h-11 !w-11 !rounded-xl min-[400px]:!inline-flex"><Mail size={18} aria-hidden="true" /></span>
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-gf-muted">Email</p>
                      <a href={`mailto:${siteConfig.email}`} className="block break-all py-2.5 text-[15px] font-semibold leading-snug text-white transition-colors hover:text-gf-lavender">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="btn btn-glass btn-sm h-10 w-10 shrink-0 !px-0"
                    aria-label={copiedEmail ? 'Email address copied' : 'Copy email address'}
                  >
                    {copiedEmail ? <Check size={16} className="text-gf-magenta" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone + WhatsApp */}
                <div className="glass-soft rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <span className="icon-tile !h-11 !w-11 !rounded-xl"><PhoneIcon size={18} /></span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-gf-muted">Call or WhatsApp</p>
                      <p className="text-[13px] text-gf-muted">All numbers are on WhatsApp</p>
                    </div>
                  </div>
                  <ul className="mt-3 divide-y divide-gf-line">
                    {siteConfig.phones.map((phone) => (
                      <li key={phone.number} className="flex items-center justify-between gap-2 py-1.5">
                        <a
                          href={`tel:+${phone.number}`}
                          className="inline-flex min-h-11 items-center whitespace-nowrap text-[15px] font-semibold text-white transition-colors hover:text-gf-lavender"
                          aria-label={`Call ${phone.display}`}
                        >
                          {phone.display}
                        </a>
                        <a
                          href={formatWhatsAppUrl(phone.number, "Hi GrowForge, I'd like to discuss a project.")}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-glass btn-sm h-10 shrink-0 !min-h-10 !px-3"
                          aria-label={`WhatsApp ${phone.display} (opens in a new tab)`}
                        >
                          <MessageCircle size={15} aria-hidden="true" /> <span className="hidden min-[400px]:inline">WhatsApp</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Instagram */}
                {siteConfig.social.instagram && (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-soft group flex items-center justify-between gap-3 rounded-2xl p-4 transition-colors hover:border-gf-line-strong"
                  >
                    <span className="flex items-center gap-3">
                      <span className="icon-tile !h-11 !w-11 !rounded-xl"><InstagramIcon size={18} /></span>
                      <span>
                        <span className="block text-xs font-bold uppercase tracking-[0.16em] text-gf-muted">Instagram</span>
                        <span className="block text-[15px] font-semibold text-white group-hover:text-gf-lavender">Follow our work</span>
                      </span>
                    </span>
                    <ExternalLink size={16} className="text-gf-muted" aria-hidden="true" />
                  </a>
                )}

                {/* Privacy note */}
                <div className="mt-auto rounded-2xl border border-gf-line bg-gf-electric/[0.07] p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle size={17} className="mt-0.5 shrink-0 text-gf-lavender" aria-hidden="true" />
                    <p className="text-[13.5px] leading-relaxed text-gf-muted">
                      <strong className="text-white">Your privacy:</strong> this website has no backend database and sets no
                      cookies. Submitting the form prepares a structured brief in your own email app.
                    </p>
                  </div>
                </div>
              </aside>
            </ScrollReveal>

            {/* Project form */}
            <ScrollReveal direction="left" delay={0.08} className="min-w-0 lg:col-span-8">
              <div className="glass border-gradient relative overflow-hidden rounded-[28px] p-6 sm:p-10">
                <div className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full bg-gf-electric/25 blur-[90px]" aria-hidden="true" />

                <div className="relative mb-8 flex flex-col gap-2 border-b border-gf-line pb-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="eyebrow">Project brief</p>
                    <h2 className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">Tell us what you’re building</h2>
                  </div>
                  <p className="text-sm text-gf-muted"><span className="text-gf-magenta">*</span> Required</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="relative space-y-6" noValidate>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="cf-name" className="field-label">Your name <span className="req" aria-hidden="true">*</span></label>
                      <input
                        id="cf-name"
                        {...register('name')}
                        type="text"
                        autoComplete="name"
                        placeholder="e.g. Alex Chen"
                        className="field"
                        aria-invalid={errors.name ? 'true' : 'false'}
                        aria-describedby={errors.name ? 'cf-name-error' : undefined}
                        aria-required="true"
                      />
                      {errors.name && (
                        <p id="cf-name-error" role="alert" className="field-error"><AlertCircle size={14} aria-hidden="true" /> {errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="cf-email" className="field-label">Email address <span className="req" aria-hidden="true">*</span></label>
                      <input
                        id="cf-email"
                        {...register('email')}
                        type="email"
                        autoComplete="email"
                        inputMode="email"
                        placeholder="alex@company.com"
                        className="field"
                        aria-invalid={errors.email ? 'true' : 'false'}
                        aria-describedby={errors.email ? 'cf-email-error' : undefined}
                        aria-required="true"
                      />
                      {errors.email && (
                        <p id="cf-email-error" role="alert" className="field-error"><AlertCircle size={14} aria-hidden="true" /> {errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cf-company" className="field-label">Company or startup <span className="opt">(optional)</span></label>
                    <input id="cf-company" {...register('company')} type="text" autoComplete="organization" placeholder="Company name or URL" className="field" />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="cf-service" className="field-label">Primary service <span className="req" aria-hidden="true">*</span></label>
                      <select id="cf-service" {...register('service')} className="field" aria-invalid={errors.service ? 'true' : 'false'}>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      {errors.service && (
                        <p role="alert" className="field-error"><AlertCircle size={14} aria-hidden="true" /> {errors.service.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="cf-budget" className="field-label">Target budget <span className="req" aria-hidden="true">*</span></label>
                      <select id="cf-budget" {...register('budget')} className="field" aria-invalid={errors.budget ? 'true' : 'false'}>
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      {errors.budget && (
                        <p role="alert" className="field-error"><AlertCircle size={14} aria-hidden="true" /> {errors.budget.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cf-timeline" className="field-label">Target timeline <span className="req" aria-hidden="true">*</span></label>
                    <select id="cf-timeline" {...register('timeline')} className="field" aria-invalid={errors.timeline ? 'true' : 'false'}>
                      {timelineOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    {errors.timeline && (
                      <p role="alert" className="field-error"><AlertCircle size={14} aria-hidden="true" /> {errors.timeline.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="cf-description" className="field-label">Project overview & goals <span className="req" aria-hidden="true">*</span></label>
                    <textarea
                      id="cf-description"
                      {...register('description')}
                      rows={6}
                      placeholder="Describe the product, audience, key requirements or any existing links…"
                      className="field"
                      aria-invalid={errors.description ? 'true' : 'false'}
                      aria-describedby={errors.description ? 'cf-description-error' : undefined}
                      aria-required="true"
                    />
                    {errors.description && (
                      <p id="cf-description-error" role="alert" className="field-error"><AlertCircle size={14} aria-hidden="true" /> {errors.description.message}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                    <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-lg w-full sm:w-auto">
                      <Send size={18} aria-hidden="true" />
                      Send project brief
                    </button>
                    <button type="button" onClick={handleCopyBrief} className="btn btn-glass btn-lg w-full sm:w-auto" aria-live="polite">
                      {copiedBrief ? (
                        <><Check size={18} className="text-gf-magenta" aria-hidden="true" /> Brief copied</>
                      ) : (
                        <><Copy size={18} aria-hidden="true" /> Copy brief text</>
                      )}
                    </button>
                  </div>
                  <p className="text-[13px] text-gf-muted">
                    “Send project brief” opens your email app with everything filled in, addressed to {siteConfig.email}.
                  </p>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </main>
  )
}
