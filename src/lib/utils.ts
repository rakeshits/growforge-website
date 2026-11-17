import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatWhatsAppUrl(phone: string, message: string): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${phone}?text=${encoded}`
}

export function formatMailtoUrl(email: string, subject: string, body?: string): string {
  const params = new URLSearchParams()
  params.set('subject', subject)
  if (body) params.set('body', body)
  return `mailto:${email}?${params.toString()}`
}
