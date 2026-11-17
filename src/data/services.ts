export type ServiceCategory =
  | 'web'
  | 'ecommerce'
  | 'apps'
  | 'design'
  | 'ai'
  | 'maintenance'

export interface Service {
  id: string
  slug: string
  icon: string
  title: string
  shortDescription: string
  problem: string
  solution: string
  deliverables: string[]
  features: string[]
  technologies: string[]
  category: ServiceCategory
  cta: string
}

export const services: Service[] = [
  {
    id: 'business-websites',
    slug: 'business-websites',
    icon: 'Globe',
    title: 'Business Websites & Landing Pages',
    shortDescription:
      'High-converting websites that establish your brand and drive real business results.',
    problem:
      'Businesses lose credibility and leads when their online presence is outdated, slow, or unclear about what they offer.',
    solution:
      'We design and develop professional websites that clearly communicate your value proposition, build trust, and convert visitors into customers.',
    deliverables: [
      'Fully responsive multi-page website',
      'Custom design aligned to your brand',
      'SEO-optimized page structure',
      'Contact forms and lead capture',
      'Google Analytics integration',
      'Deployment and domain configuration',
    ],
    features: [
      'Mobile-first responsive design',
      'Performance-optimized (Core Web Vitals)',
      'SEO foundation',
      'CMS integration (optional)',
      'Custom animations and interactions',
      'Accessibility compliant',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
    category: 'web',
    cta: 'Get a Website Quote',
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    icon: 'ShoppingCart',
    title: 'E-commerce Development',
    shortDescription:
      'Online stores engineered to sell — from product listings to checkout and fulfillment.',
    problem:
      'Generic e-commerce templates limit your brand and restrict how your store can scale as your catalog and customer base grows.',
    solution:
      'We build custom or Shopify-based online stores with polished product experiences, smooth checkout flows, and integrations your business needs.',
    deliverables: [
      'Full storefront design and development',
      'Product catalog and inventory management',
      'Cart, checkout, and payment integration',
      'Order management and notifications',
      'Search, filtering, and collections',
      'Mobile-optimized shopping experience',
    ],
    features: [
      'Custom storefront or Shopify theme',
      'Payment gateway integration',
      'Inventory and order management',
      'Abandoned cart recovery',
      'Product search and filtering',
      'Performance-optimized images',
    ],
    technologies: ['Shopify', 'React', 'Next.js', 'Stripe', 'Tailwind CSS'],
    category: 'ecommerce',
    cta: 'Start Your Store',
  },
  {
    id: 'web-applications',
    slug: 'web-applications',
    icon: 'Code2',
    title: 'Custom Web Applications',
    shortDescription:
      'Purpose-built web apps that solve specific business problems and grow with your operation.',
    problem:
      'Off-the-shelf software often forces businesses to adapt their workflows to rigid tools that were not designed for their context.',
    solution:
      'We architect and build custom web applications tailored to your workflows — from internal tools to customer-facing platforms.',
    deliverables: [
      'Full-stack web application',
      'User authentication and authorization',
      'Database design and API development',
      'Admin panel and management tools',
      'Testing and quality assurance',
      'Deployment and DevOps configuration',
    ],
    features: [
      'Role-based access control',
      'RESTful API or GraphQL backend',
      'Real-time features where needed',
      'Responsive and accessible UI',
      'Scalable architecture',
      'Comprehensive documentation',
    ],
    technologies: ['React', 'TypeScript', 'Django', 'Python', 'PostgreSQL', 'Node.js'],
    category: 'apps',
    cta: 'Discuss Your Application',
  },
  {
    id: 'dashboards',
    slug: 'dashboards',
    icon: 'BarChart3',
    title: 'Admin Dashboards & Analytics',
    shortDescription:
      'Data visualization and management interfaces that make complex operations easy to run.',
    problem:
      'Teams waste time pulling data from multiple sources or operating with little visibility into what is actually happening in their business.',
    solution:
      'We build custom dashboards and analytics interfaces that consolidate your data, surface insights, and streamline management tasks.',
    deliverables: [
      'Custom dashboard UI and components',
      'Data visualization with charts and tables',
      'Real-time or scheduled data updates',
      'Role-based views and permissions',
      'Export and reporting features',
      'Mobile-responsive admin interface',
    ],
    features: [
      'Interactive charts and graphs',
      'Filterable data tables',
      'KPI cards and summary views',
      'Date range filtering',
      'Export to CSV/PDF',
      'Dark and light mode support',
    ],
    technologies: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS', 'REST APIs'],
    category: 'apps',
    cta: 'Build Your Dashboard',
  },
  {
    id: 'booking-systems',
    slug: 'booking-systems',
    icon: 'Calendar',
    title: 'Booking & Management Systems',
    shortDescription:
      'Scheduling and operational platforms that keep your business running without constant manual effort.',
    problem:
      'Service businesses often handle bookings manually — by phone, email, or spreadsheet — creating errors, double-bookings, and poor customer experience.',
    solution:
      'We build booking and management systems that automate scheduling, send confirmations, and give your team a clear operational view.',
    deliverables: [
      'Online booking interface',
      'Calendar and availability management',
      'Automated confirmation and reminders',
      'Customer management records',
      'Staff scheduling and management',
      'Payment collection at booking',
    ],
    features: [
      'Real-time availability management',
      'Automated email/SMS notifications',
      'Customer and staff portals',
      'Cancellation and rescheduling',
      'Reporting and analytics',
      'Third-party calendar sync',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'SendGrid'],
    category: 'apps',
    cta: 'Automate Your Bookings',
  },
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    icon: 'Layers',
    title: 'UI/UX Design & Website Redesign',
    shortDescription:
      'Design that looks exceptional, communicates clearly, and converts users into customers.',
    problem:
      'Outdated or inconsistent interfaces frustrate users and make your product look less credible than it actually is.',
    solution:
      'We redesign digital products and create design systems that improve usability, refresh the visual identity, and align the experience with your brand.',
    deliverables: [
      'UX audit of existing product',
      'Wireframes and information architecture',
      'High-fidelity UI designs',
      'Interactive prototype',
      'Design system and component library',
      'Development handoff documentation',
    ],
    features: [
      'User research and analysis',
      'Responsive layout design',
      'Accessibility considerations',
      'Design system creation',
      'Component library',
      'Figma design files',
    ],
    technologies: ['Figma', 'Tailwind CSS', 'React', 'Storybook'],
    category: 'design',
    cta: 'Refresh Your Design',
  },
  {
    id: 'ai-integrations',
    slug: 'ai-integrations',
    icon: 'Cpu',
    title: 'AI Integrations & Workflow Automation',
    shortDescription:
      'Bring AI capabilities into your product and automate repetitive processes that drain your team.',
    problem:
      'Businesses are aware that AI can add value but are unsure how to integrate it practically into their existing products and workflows.',
    solution:
      'We identify high-value automation opportunities and integrate AI features — from conversational interfaces to document processing — using appropriate tools and APIs.',
    deliverables: [
      'AI feature discovery and scoping',
      'API integration development',
      'Custom prompt engineering',
      'Workflow automation setup',
      'Testing and monitoring',
      'Documentation and handoff',
    ],
    features: [
      'LLM integration (OpenAI, Anthropic, etc.)',
      'Conversational AI features',
      'Document and data processing',
      'Automated workflow triggers',
      'Cost monitoring and controls',
      'Fallback and error handling',
    ],
    technologies: ['OpenAI API', 'Python', 'LangChain', 'Node.js', 'Webhooks'],
    category: 'ai',
    cta: 'Explore AI Features',
  },
  {
    id: 'maintenance',
    slug: 'maintenance',
    icon: 'Wrench',
    title: 'Website Maintenance & Technical Improvements',
    shortDescription:
      'Keep your website fast, secure, and improving — without the overhead of a full-time developer.',
    problem:
      'Websites degrade over time: dependencies become outdated, performance slips, content needs updating, and small issues accumulate into larger problems.',
    solution:
      'We offer ongoing maintenance plans and technical improvement sprints that keep your website performing well and evolving as your business does.',
    deliverables: [
      'Regular dependency and security updates',
      'Performance monitoring and optimization',
      'Content and copy updates',
      'Bug fixes and issue resolution',
      'Feature additions and improvements',
      'Monthly status and activity reports',
    ],
    features: [
      'Uptime monitoring',
      'Security patches and updates',
      'Performance audits',
      'Core Web Vitals optimization',
      'Backup management',
      'Priority support response',
    ],
    technologies: ['Varies by project stack'],
    category: 'maintenance',
    cta: 'Get a Maintenance Plan',
  },
]

export const serviceCategories = [
  { id: 'all', label: 'All Services' },
  { id: 'web', label: 'Web' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'apps', label: 'Applications' },
  { id: 'design', label: 'Design' },
  { id: 'ai', label: 'AI & Automation' },
  { id: 'maintenance', label: 'Maintenance' },
] as const
