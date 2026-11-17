export interface ContactPhone {
  /** How the number is shown on the site */
  display: string
  /** Digits only, with country code — used for tel: and WhatsApp links */
  number: string
}

export const siteConfig = {
  name: 'GrowForge',
  tagline: 'Digital Engineering Studio',
  description:
    'GrowForge is a software engineering freelancing team that builds business websites, e-commerce platforms, and custom web applications.',
  domain: 'growforge.dev', // Update with your actual domain
  email: 'growforge1@gmail.com',
  /** All numbers accept calls and WhatsApp messages */
  phones: [
    { display: '+91 82967 28241', number: '918296728241' },
    { display: '+91 87924 51944', number: '918792451944' },
    { display: '+91 80737 30390', number: '918073730390' },
  ] as ContactPhone[],
  /** Primary WhatsApp number (used by the single WhatsApp buttons) */
  whatsapp: '918296728241',
  github: 'https://github.com/rakeshits',
  social: {
    github: 'https://github.com/rakeshits',
    instagram: '', // Paste your Instagram profile URL, e.g. 'https://www.instagram.com/growforge'
    linkedin: '',
    twitter: '',
  },
}

export type SiteConfig = typeof siteConfig
