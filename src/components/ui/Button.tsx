import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

interface ButtonProps extends ButtonBaseProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  children: React.ReactNode
  'aria-label'?: string
}

interface LinkButtonProps extends ButtonBaseProps {
  to: string
  children: React.ReactNode
}

interface AnchorButtonProps extends ButtonBaseProps {
  href: string
  target?: string
  rel?: string
  children: React.ReactNode
  'aria-label'?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-glass',
  outline: 'btn-glass',
  ghost: 'btn-ghost',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'btn-sm',
  md: '',
  lg: 'btn-lg',
}

export function buttonClasses(variant: ButtonVariant = 'primary', size: ButtonSize = 'md', className?: string) {
  return cn('btn', variantStyles[variant], sizeStyles[size], className)
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, type = 'button', ...props }, ref) => (
    <button ref={ref} type={type} className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </button>
  )
)
Button.displayName = 'Button'

export function LinkButton({ variant = 'primary', size = 'md', className, children, to }: LinkButtonProps) {
  return (
    <Link to={to} className={buttonClasses(variant, size, className)}>
      {children}
    </Link>
  )
}

export function AnchorButton({ variant = 'primary', size = 'md', className, children, href, ...props }: AnchorButtonProps) {
  return (
    <a href={href} className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </a>
  )
}
