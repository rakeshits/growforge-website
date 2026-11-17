import { GitBranch } from 'lucide-react'
import type { TeamMember } from '@/data/team'

interface TeamCardProps {
  member: TeamMember
  index?: number
}

function getInitials(name: string): string {
  return name.split(' ').slice(0, 2).map((n) => n[0]).join('').toUpperCase()
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="glass glass-card glass-card--lift group flex h-full flex-col p-7">
      <div className="flex items-center gap-4">
        <div
          className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-gf-line-strong bg-gradient-to-br from-gf-electric/45 via-gf-neon/25 to-gf-magenta/20 shadow-[0_10px_30px_-10px_rgba(120,0,255,0.9)]"
          aria-hidden="true"
        >
          <span className="font-display text-xl font-bold text-white">{getInitials(member.name)}</span>
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-lg font-semibold leading-snug text-white">{member.name}</h3>
          <p className="mt-1 text-sm font-semibold text-gf-lavender">{member.role}</p>
        </div>
      </div>

      <p className="mt-6 flex-1 text-[15px] leading-relaxed text-gf-muted">{member.bio}</p>

      <ul className="mt-6 flex flex-wrap gap-1.5" aria-label={`${member.name}'s skills`}>
        {member.skills.map((skill) => (
          <li key={skill} className="chip chip--muted !py-1 !text-xs">{skill}</li>
        ))}
      </ul>

      {(member.github || member.linkedin) && (
        <div className="mt-6 flex gap-2 border-t border-gf-line pt-5">
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-glass btn-sm"
              aria-label={`${member.name} on GitHub (opens in a new tab)`}
            >
              <GitBranch size={15} /> GitHub
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-glass btn-sm"
              aria-label={`${member.name} on LinkedIn (opens in a new tab)`}
            >
              LinkedIn
            </a>
          )}
        </div>
      )}
    </article>
  )
}
