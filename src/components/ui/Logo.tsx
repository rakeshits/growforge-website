import { cn } from '@/lib/utils'

/**
 * Official GrowForge logo.
 *
 * Source asset: /public/brand/growforge-neon-horizontal.png (supplied, untouched).
 * Display derivatives in /public/brand are pixel-for-pixel crops of that file:
 *  - header : GF emblem + wordmark (tagline row omitted so the mark stays legible at nav size)
 *  - full   : emblem + wordmark + "BUILD WHAT MATTERS" tagline
 *  - icon   : GF emblem only (small screens / favicon)
 *
 * The supplied file has a black canvas. The derivatives convert that black to
 * transparency (pixel colour / brightness → alpha), so composited over black they
 * reproduce the original exactly, and over our dark purple surfaces the glow blends
 * naturally — no colours are changed. Only place the logo on dark backgrounds.
 */

type LogoVariant = 'header' | 'full' | 'icon'

const assets: Record<LogoVariant, { webp: string; png: string; width: number; height: number; alt: string }> = {
  header: {
    webp: '/brand/growforge-logo-header.webp',
    png: '/brand/growforge-logo-header.png',
    width: 900,
    height: 192,
    alt: 'GrowForge',
  },
  full: {
    webp: '/brand/growforge-logo-full.webp',
    png: '/brand/growforge-logo-full.png',
    width: 1000,
    height: 216,
    alt: 'GrowForge — Build what matters',
  },
  icon: {
    webp: '/brand/growforge-icon.webp',
    png: '/brand/growforge-icon.png',
    width: 256,
    height: 256,
    alt: 'GrowForge',
  },
}

interface GrowForgeLogoProps {
  variant?: LogoVariant
  /** Width/height are controlled with classes, e.g. `w-[200px]` (height follows the aspect ratio). */
  className?: string
  /** Eager-load above the fold (navbar). */
  priority?: boolean
  /** Set when a parent link already provides the accessible name. */
  decorative?: boolean
}

export function GrowForgeLogo({ variant = 'header', className, priority = false, decorative = false }: GrowForgeLogoProps) {
  const asset = assets[variant]
  return (
    <picture className="contents">
      <source srcSet={asset.webp} type="image/webp" />
      <img
        src={asset.png}
        width={asset.width}
        height={asset.height}
        alt={decorative ? '' : asset.alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        draggable={false}
        className={cn('logo-blend select-none', className)}
      />
    </picture>
  )
}
