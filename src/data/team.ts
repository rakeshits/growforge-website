export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  skills: string[]
  github?: string
  linkedin?: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 'rakesh',
    name: 'Rakesh Ashok Balati',
    role: 'Full-Stack Engineer',
    bio: 'Focused on building scalable web applications and leading technical architecture decisions across GrowForge projects.',
    skills: ['React', 'TypeScript', 'Node.js', 'Python', 'System Design'],
    github: 'https://github.com/rakeshits',
  },
  {
    id: 'sagar',
    name: 'Sagar Ramappa Thakkannavar',
    role: 'Full-Stack Engineer',
    bio: 'Passionate about creating seamless user experiences and developing robust backend systems that power reliable applications.',
    skills: ['Django', 'MySQL', 'JavaScript', 'REST APIs', 'Database Design'],
  },
  {
    id: 'abjal',
    name: 'Abjal Muneer Zhare',
    role: 'Full-Stack Engineer',
    bio: 'Dedicated to crafting polished interfaces and building end-to-end features that deliver real business value.',
    skills: ['React', 'UI/UX', 'Frontend Architecture', 'Performance', 'CSS'],
  },
]
