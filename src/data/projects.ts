export type ProjectCategory = 'E-commerce' | 'Web Applications' | 'Business Websites' | 'UI/UX'
export type ProjectStatus = 'live' | 'in-progress' | 'conceptual' | 'completed'

export interface Project {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  category: ProjectCategory
  status: ProjectStatus
  technologies: string[]
  features: string[]
  liveUrl?: string
  githubUrl?: string
  storeUrl?: string
  coverColor: string
  accentColor: string
  year: string
}

export const projects: Project[] = [
  {
    id: 'evolon-wear',
    slug: 'evolon-wear',
    title: 'Evolon Wear',
    subtitle: 'Streetwear E-commerce & Marketing Experience',
    description:
      'A full streetwear brand experience combining a high-impact marketing site with a Shopify-powered online store.',
    longDescription:
      'Evolon Wear is a streetwear brand that needed a compelling digital presence to match its bold aesthetic. We built a marketing website with immersive visuals and brand storytelling, integrated with a Shopify store for seamless shopping. The project focused on creating a cohesive brand experience from first impression through to checkout.',
    category: 'E-commerce',
    status: 'live',
    technologies: ['React', 'Shopify', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    features: [
      'Immersive marketing and brand experience',
      'Shopify storefront integration',
      'Mobile-first responsive design',
      'Product catalog and collections',
      'Animated hero and product showcases',
      'Performance-optimized image delivery',
    ],
    liveUrl: 'https://evolon-wear.lovable.app/',
    storeUrl: 'https://evolonwear.myshopify.com/',
    coverColor: '#10051F',
    accentColor: '#E040FB',
    year: '2024',
  },
  {
    id: 'pulse-dashflow',
    slug: 'pulse-dashflow',
    title: 'Pulse Dashflow',
    subtitle: 'SaaS Analytics Dashboard',
    description:
      'A modern SaaS analytics dashboard with real-time data visualization, KPI tracking, and team management features.',
    longDescription:
      'Pulse Dashflow is a SaaS analytics platform designed to give teams clear visibility into their key metrics. The dashboard features interactive charts, customizable KPI cards, data tables with advanced filtering, and a clean interface optimized for daily use. Built with performance and usability as core priorities.',
    category: 'Web Applications',
    status: 'completed',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Vite'],
    features: [
      'Interactive data visualization',
      'KPI cards and summary views',
      'Filterable and sortable data tables',
      'Date range selection',
      'Responsive dashboard layout',
      'Dark mode interface',
    ],
    githubUrl: 'https://github.com/rakeshits/pulse-dashflow',
    coverColor: '#10051F',
    accentColor: '#A020F0',
    year: '2024',
  },
  {
    id: 'farmer-friend',
    slug: 'farmer-friend',
    title: 'Farmer Friend',
    subtitle: 'Agricultural Marketplace Platform',
    description:
      'A Django-powered agricultural marketplace connecting farmers directly with buyers, built with a focus on accessibility and practical usability.',
    longDescription:
      'Farmer Friend is a marketplace platform developed to bridge the gap between agricultural producers and buyers. Built with Django and MySQL, it provides tools for farmers to list produce, manage inquiries, and connect with customers. The platform focuses on accessibility and simplicity to serve users with varying levels of technical experience.',
    category: 'Web Applications',
    status: 'completed',
    technologies: ['Django', 'Python', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
    features: [
      'Farmer and buyer registration',
      'Product listing and management',
      'Search and category filtering',
      'Inquiry and messaging system',
      'Admin management panel',
      'Mobile-responsive interface',
    ],
    coverColor: '#10051F',
    accentColor: '#C5A3FF',
    year: '2024',
  },
  {
    id: 'hospital-management',
    slug: 'hospital-management',
    title: 'Hospital Management System',
    subtitle: 'Healthcare Operations Application',
    description:
      'A management application for healthcare facilities to organize patient records, appointments, and departmental workflows.',
    longDescription:
      'A hospital management system designed to streamline operations across patient registration, appointment scheduling, and record management. The application provides staff with structured workflows and consolidated patient information to reduce administrative overhead and improve coordination between departments.',
    category: 'Web Applications',
    status: 'completed',
    technologies: ['Django', 'Python', 'MySQL', 'JavaScript', 'Bootstrap'],
    features: [
      'Patient registration and records',
      'Appointment scheduling',
      'Department management',
      'Staff role management',
      'Reporting and summaries',
      'Secure data handling',
    ],
    coverColor: '#10051F',
    accentColor: '#7800FF',
    year: '2024',
  },
]

export const projectCategories = [
  'All',
  'E-commerce',
  'Web Applications',
  'Business Websites',
  'UI/UX',
] as const

export type ProjectCategoryFilter = typeof projectCategories[number]
