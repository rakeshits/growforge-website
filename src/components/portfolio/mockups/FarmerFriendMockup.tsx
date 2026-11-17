import { Sprout, MessageSquare, CheckCircle, ShieldCheck } from 'lucide-react'

export function FarmerFriendMockup() {
  return (
    <div className="relative w-full h-full bg-[#08031A] text-[#F8F5FF] flex flex-col justify-between overflow-hidden p-4 sm:p-5 select-none font-sans">
      {/* Background ambient radial glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at 70% 30%, #C5A3FF 0%, transparent 60%)',
        }}
      />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-fuchsia-500 flex items-center justify-center text-[#08031A] font-black text-xs">
            <Sprout size={12} />
          </div>
          <span className="font-display font-bold tracking-tight text-xs uppercase text-white">
            FARMER <span className="text-fuchsia-300">FRIEND</span>
          </span>
          <span className="ml-1 px-1.5 py-0.5 rounded text-[9px] font-mono bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/20">
            MARKETPLACE
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-[#AAA1BC] text-[10px] font-mono">DJANGO // MYSQL</span>
          <ShieldCheck size={13} className="text-fuchsia-300" />
        </div>
      </div>

      {/* Marketplace Listings Body */}
      <div className="relative z-10 my-3 flex flex-col gap-2.5">
        <div className="flex items-center justify-between text-[10px] font-mono text-[#AAA1BC]">
          <span>LIVE MANDI COMMODITIES</span>
          <span className="text-fuchsia-300">DIRECT FROM GROWERS</span>
        </div>

        {/* Listing Cards */}
        <div className="space-y-2">
          {/* Item 1 */}
          <div className="p-2.5 rounded-xl bg-[#160A2C]/80 border border-white/[0.06] flex items-center justify-between hover:border-fuchsia-500/30 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-300 font-bold text-xs">
                🌾
              </div>
              <div>
                <div className="text-xs font-bold text-white leading-tight">Organic Sharbati Wheat</div>
                <div className="text-[10px] text-[#AAA1BC] font-mono">Lot #A-402 • 120 Quintals available</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs font-mono font-bold text-fuchsia-300">₹2,850 / Qtl</div>
              <span className="text-[9px] font-mono text-white/50">Verified Seller</span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="p-2.5 rounded-xl bg-[#160A2C]/80 border border-white/[0.06] flex items-center justify-between hover:border-fuchsia-500/30 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-300 font-bold text-xs">
                🍚
              </div>
              <div>
                <div className="text-xs font-bold text-white leading-tight">Traditional Basmati Paddy</div>
                <div className="text-[10px] text-[#AAA1BC] font-mono">Lot #B-119 • 85 Quintals available</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs font-mono font-bold text-fuchsia-300">₹3,420 / Qtl</div>
              <span className="text-[9px] font-mono text-fuchsia-300/80">In High Demand</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Info */}
      <div className="relative z-10 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#AAA1BC]">
        <div className="flex items-center gap-1.5">
          <MessageSquare size={11} className="text-fuchsia-300" />
          <span>Direct Buyer-Farmer Messaging</span>
        </div>
        <div className="flex items-center gap-1 text-fuchsia-300">
          <CheckCircle size={10} />
          <span>Completed Project</span>
        </div>
      </div>
    </div>
  )
}
