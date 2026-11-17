import { ShoppingBag, Flame, Star, Check } from 'lucide-react'

export function EvolonMockup() {
  return (
    <div className="relative w-full h-full bg-[#08031A] text-[#F8F5FF] flex flex-col justify-between overflow-hidden p-4 sm:p-5 select-none font-sans">
      {/* Background radial gradient & brand watermark */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at 75% 20%, #C5A3FF 0%, transparent 60%)',
        }}
      />
      <div className="absolute right-4 bottom-2 text-7xl font-extrabold font-display text-white/[0.03] tracking-tighter pointer-events-none">
        EVOLON
      </div>

      {/* Top Storefront Navigation Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-[#C5A3FF] flex items-center justify-center text-[#08031A] font-black text-xs">
            E
          </div>
          <span className="font-display font-black tracking-widest text-xs uppercase text-white">
            EVOLON <span className="text-[#C5A3FF]">WEAR</span>
          </span>
          <span className="ml-2 px-1.5 py-0.5 rounded text-[9px] font-mono bg-white/[0.06] text-[#AAA1BC] border border-white/[0.06]">
            STOREFRONT
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 text-xs">
          <span className="text-[#AAA1BC] text-[11px] hidden sm:inline">DROP // 04</span>
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#160A2C] border border-white/[0.08] text-[#C5A3FF] text-[11px] font-mono">
            <ShoppingBag size={11} />
            <span>Bag (2)</span>
          </div>
        </div>
      </div>

      {/* Hero Showcase Center Body */}
      <div className="relative z-10 my-3 grid grid-cols-12 gap-3 items-center">
        {/* Left apparel preview card */}
        <div className="col-span-7 sm:col-span-8 flex flex-col justify-center">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#C5A3FF]/10 border border-[#C5A3FF]/20 text-[#C5A3FF] text-[10px] font-semibold w-fit mb-2">
            <Flame size={11} />
            <span>LIMITED RUN HOODIE</span>
          </div>
          <h4 className="text-sm sm:text-base font-bold font-display leading-tight text-white mb-1">
            CYBER METROPOLIS OVERSIZED
          </h4>
          <p className="text-[#AAA1BC] text-[11px] line-clamp-1 mb-2">
            Heavyweight 480 GSM French Terry Cotton. Custom acid wash finish.
          </p>

          <div className="flex items-center gap-2">
            <span className="text-[#C5A3FF] font-bold text-sm font-mono">$118.00</span>
            <span className="text-[#AAA1BC] line-through text-[11px] font-mono">$145.00</span>
            <div className="flex items-center text-fuchsia-300 text-[10px] ml-1">
              <Star size={10} fill="currentColor" />
              <span className="ml-1 text-[#AAA1BC] font-mono">4.9 (128)</span>
            </div>
          </div>
        </div>

        {/* Right Fashion Mockup Visual */}
        <div className="col-span-5 sm:col-span-4 relative">
          <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-[#160A2C] to-[#10051F] border border-white/[0.1] p-2.5 flex flex-col justify-between shadow-xl overflow-hidden relative group">
            {/* Abstract Hoodie graphic representation */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg viewBox="0 0 100 120" className="w-24 h-28 opacity-85" fill="none">
                <path
                  d="M30 25 L50 15 L70 25 L85 45 L75 52 L70 42 L72 105 L28 105 L30 42 L25 52 L15 45 Z"
                  fill="#1A0B33"
                  stroke="#C5A3FF"
                  strokeWidth="1.5"
                />
                <path d="M40 20 C45 35 55 35 60 20" stroke="#A020F0" strokeWidth="1.2" />
                <path d="M42 45 L58 45 L50 60 Z" fill="#C5A3FF" opacity="0.4" />
                <text x="50" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontFamily="sans-serif" fontWeight="900" letterSpacing="1">EVOLON</text>
              </svg>
            </div>

            {/* Quick stock badge */}
            <div className="flex justify-between items-start z-10">
              <span className="text-[9px] font-mono bg-red-500/20 text-red-300 border border-red-500/30 px-1.5 py-0.5 rounded">
                Low Stock
              </span>
              <span className="text-[9px] font-mono bg-black/50 text-[#C5A3FF] px-1 rounded">
                XL
              </span>
            </div>

            <div className="z-10 bg-[#08031A]/80 backdrop-blur-sm p-1.5 rounded-lg border border-white/[0.08] flex items-center justify-between">
              <span className="text-[9px] text-[#AAA1BC] font-mono">Shopify Sync</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A3FF]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Features Strip */}
      <div className="relative z-10 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#AAA1BC]">
        <div className="flex items-center gap-1.5 text-[#C5A3FF]">
          <Check size={11} />
          <span>Shopify Checkout Active</span>
        </div>
        <div className="flex items-center gap-1 text-white">
          <span>Global Fast Shipping</span>
        </div>
      </div>
    </div>
  )
}
