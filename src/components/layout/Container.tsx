import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

const sizeClasses = {
  sm: 'max-w-4xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-full',
}

export function Container({ children, className, size = 'xl' }: ContainerProps) {
  return (
    <div className={cn('w-full mx-auto px-4 sm:px-6 lg:px-8', sizeClasses[size], className)}>
      {children}
    </div>
  )
}

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  noPadding?: boolean
}

export function SectionWrapper({ children, className, id, noPadding = false }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(!noPadding && 'py-20 md:py-28', className)}
    >
      {children}
    </section>
  )
}
