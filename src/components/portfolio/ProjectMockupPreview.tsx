import { EvolonMockup } from './mockups/EvolonMockup'
import { PulseMockup } from './mockups/PulseMockup'
import { FarmerFriendMockup } from './mockups/FarmerFriendMockup'
import { HospitalMockup } from './mockups/HospitalMockup'
import type { Project } from '@/data/projects'

export function ProjectMockupPreview({ project }: { project: Project }) {
  switch (project.id) {
    case 'evolon-wear':
      return <EvolonMockup />
    case 'pulse-dashflow':
      return <PulseMockup />
    case 'farmer-friend':
      return <FarmerFriendMockup />
    case 'hospital-management':
      return <HospitalMockup />
    default:
      return <PulseMockup />
  }
}
