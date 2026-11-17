import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: React.ReactNode
  /** Optional trailing phrase rendered with the brand gradient. */
  highlight?: string
  description?: React.ReactNode
  align?: 'left' | 'center'
  as?: 'h1' | 'h2'
  className?: string
  titleClassName?: string
  id?: string
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'left',
  as: Tag = 'h2',
  className,
  titleClassName,
  id,
}: SectionHeadingProps) {
  const center = align === 'center'
  return (
    <div className={cn('max-w-3xl', center && 'mx-auto text-center', className)}>
      {eyebrow && (
        <p className={cn('eyebrow mb-5', center && 'eyebrow--center')}>{eyebrow}</p>
      )}
      <Tag
        id={id}
        className={cn(
          'font-display font-semibold text-gf-white',
          Tag === 'h1'
            ? 'text-[2.5rem] leading-[1.08] sm:text-5xl lg:text-[4rem]'
            : 'text-[2rem] leading-[1.12] sm:text-[2.5rem] lg:text-5xl',
          titleClassName
        )}
      >
        {title}
        {highlight && (
          <>
            {' '}
            <span className="text-gradient">{highlight}</span>
          </>
        )}
      </Tag>
      {description && (
        <p className={cn('mt-5 text-base sm:text-lg leading-relaxed text-gf-muted', center ? 'mx-auto max-w-2xl' : 'max-w-2xl')}>
          {description}
        </p>
      )}
    </div>
  )
}
