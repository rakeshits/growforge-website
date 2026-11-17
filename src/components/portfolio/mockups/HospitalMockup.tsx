import { Stethoscope, Shield, Users, Bed, Calendar, HeartPulse } from 'lucide-react'

export function HospitalMockup() {
  return (
    <div className="relative w-full h-full bg-[#08031A] text-[#F8F5FF] flex flex-col justify-between overflow-hidden p-4 sm:p-5 select-none font-sans">
      {/* Background ambient radial glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at 65% 20%, #E040FB 0%, transparent 60%)',
        }}
      />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-[#E040FB] flex items-center justify-center text-[#08031A] font-black text-xs">
            <HeartPulse size={12} />
          </div>
          <span className="font-display font-bold tracking-tight text-xs uppercase text-white">
            CAREFLOW <span className="text-[#E040FB]">HOSPITAL</span>
          </span>
          <span className="ml-1 px-1.5 py-0.5 rounded text-[9px] font-mono bg-[#E040FB]/15 text-[#E040FB] border border-[#E040FB]/30">
            OPERATIONS
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-[#AAA1BC] text-[10px] font-mono">HIPAA SECURE</span>
          <Shield size={13} className="text-[#E040FB]" />
        </div>
      </div>

      {/* Middle Operations Matrix */}
      <div className="relative z-10 my-3 flex flex-col gap-2.5">
        {/* Metric Badges */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2 rounded-xl bg-[#160A2C]/80 border border-white/[0.06]">
            <div className="flex items-center gap-1 text-[10px] font-mono text-[#AAA1BC]">
              <Bed size={10} className="text-[#E040FB]" />
              <span>BED OCCUPANCY</span>
            </div>
            <div className="text-sm font-bold font-display text-white mt-0.5">84% (142/170)</div>
          </div>

          <div className="p-2 rounded-xl bg-[#160A2C]/80 border border-white/[0.06]">
            <div className="flex items-center gap-1 text-[10px] font-mono text-[#AAA1BC]">
              <Calendar size={10} className="text-[#C5A3FF]" />
              <span>APPOINTMENTS</span>
            </div>
            <div className="text-sm font-bold font-display text-white mt-0.5">38 Today</div>
          </div>

          <div className="p-2 rounded-xl bg-[#160A2C]/80 border border-white/[0.06]">
            <div className="flex items-center gap-1 text-[10px] font-mono text-[#AAA1BC]">
              <Stethoscope size={10} className="text-[#A020F0]" />
              <span>DOCTORS ON DUTY</span>
            </div>
            <div className="text-sm font-bold font-display text-white mt-0.5">14 Active</div>
          </div>
        </div>

        {/* Live Patient Triage Feed */}
        <div className="p-2.5 rounded-xl bg-[#160A2C]/60 border border-white/[0.06]">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#AAA1BC] mb-2">
            <span>TRIAGE QUEUE</span>
            <span className="text-fuchsia-300">● 4 WAITING</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px] p-1.5 rounded-lg bg-white/[0.03]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span className="font-mono text-white">#PAT-9804</span>
                <span className="text-[#AAA1BC]">Cardiology Consultation</span>
              </div>
              <span className="text-[10px] font-mono text-[#C5A3FF]">Room 302</span>
            </div>
            <div className="flex items-center justify-between text-[11px] p-1.5 rounded-lg bg-white/[0.03]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-fuchsia-300" />
                <span className="font-mono text-white">#PAT-9805</span>
                <span className="text-[#AAA1BC]">Orthopedic Follow-up</span>
              </div>
              <span className="text-[10px] font-mono text-[#AAA1BC]">Waiting (8m)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Info */}
      <div className="relative z-10 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#AAA1BC]">
        <div className="flex items-center gap-1.5">
          <Users size={11} className="text-[#E040FB]" />
          <span>Role-Based Access Control • Staff & Admin Portal</span>
        </div>
        <span className="text-white/60">Django • MySQL</span>
      </div>
    </div>
  )
}
