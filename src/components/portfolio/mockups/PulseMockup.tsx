import { Activity, TrendingUp, Users, Database, Zap } from 'lucide-react'

export function PulseMockup() {
  return (
    <div className="relative w-full h-full bg-[#08031A] text-[#F8F5FF] flex flex-col justify-between overflow-hidden p-4 sm:p-5 select-none font-sans">
      {/* Background ambient radial glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at 30% 20%, #A020F0 0%, transparent 60%)',
        }}
      />

      {/* Top SaaS Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-[#A020F0] flex items-center justify-center text-[#08031A] font-black text-xs">
            <Activity size={12} />
          </div>
          <span className="font-display font-bold tracking-tight text-xs uppercase text-white">
            PULSE <span className="text-[#A020F0]">DASHFLOW</span>
          </span>
          <span className="ml-1 px-1.5 py-0.5 rounded text-[9px] font-mono bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/20">
            v2.4 LIVE
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-[#AAA1BC] text-[10px] font-mono">LATENCY: 18ms</span>
          <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-300 animate-pulse" />
        </div>
      </div>

      {/* Middle Dashboard Content */}
      <div className="relative z-10 my-3 flex flex-col gap-3">
        {/* KPI Row */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-xl bg-[#160A2C]/80 border border-white/[0.06]">
            <div className="flex items-center justify-between text-[#AAA1BC] text-[10px] mb-1 font-mono">
              <span>MRR</span>
              <TrendingUp size={11} className="text-fuchsia-300" />
            </div>
            <div className="text-sm font-bold font-display text-white">$48,250</div>
            <div className="text-[9px] font-mono text-fuchsia-300 mt-0.5">+18.4% vs last mo</div>
          </div>

          <div className="p-2.5 rounded-xl bg-[#160A2C]/80 border border-white/[0.06]">
            <div className="flex items-center justify-between text-[#AAA1BC] text-[10px] mb-1 font-mono">
              <span>ACTIVE USERS</span>
              <Users size={11} className="text-[#A020F0]" />
            </div>
            <div className="text-sm font-bold font-display text-white">14,820</div>
            <div className="text-[9px] font-mono text-[#A020F0] mt-0.5">99.8% retention</div>
          </div>

          <div className="p-2.5 rounded-xl bg-[#160A2C]/80 border border-white/[0.06]">
            <div className="flex items-center justify-between text-[#AAA1BC] text-[10px] mb-1 font-mono">
              <span>CONV RATE</span>
              <Zap size={11} className="text-[#C5A3FF]" />
            </div>
            <div className="text-sm font-bold font-display text-white">5.42%</div>
            <div className="text-[9px] font-mono text-[#C5A3FF] mt-0.5">+0.9% target</div>
          </div>
        </div>

        {/* Chart Visual Mockup */}
        <div className="p-3 rounded-xl bg-[#160A2C]/60 border border-white/[0.06] flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono text-[#AAA1BC] uppercase tracking-wider">
              Realtime Throughput
            </span>
            <div className="flex items-center gap-1.5 text-[9px] font-mono text-[#AAA1BC]">
              <span className="w-2 h-2 rounded-full bg-[#A020F0]" /> Events
              <span className="w-2 h-2 rounded-full bg-[#C5A3FF] ml-1" /> API Calls
            </div>
          </div>

          {/* SVG Sparkline & Bar Matrix */}
          <div className="h-16 w-full flex items-end gap-1.5 pt-2">
            {[42, 60, 48, 75, 55, 90, 70, 85, 95, 68, 88, 100].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end h-full">
                <div
                  className="w-full rounded-t-sm transition-all duration-300"
                  style={{
                    height: `${val}%`,
                    background:
                      i >= 10
                        ? 'linear-gradient(to top, #C5A3FF, #A020F0)'
                        : i % 2 === 0
                        ? 'rgba(160, 32, 240, 0.5)'
                        : 'rgba(255, 255, 255, 0.08)',
                    boxShadow: i >= 10 ? '0 0 10px rgba(197, 163, 255, 0.55)' : 'none',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer Info */}
      <div className="relative z-10 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#AAA1BC]">
        <div className="flex items-center gap-1.5">
          <Database size={11} className="text-[#A020F0]" />
          <span>React • TypeScript • Recharts</span>
        </div>
        <span className="text-white hover:text-[#A020F0] transition-colors">GitHub Verified</span>
      </div>
    </div>
  )
}
