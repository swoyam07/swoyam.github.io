// Shared content types. Every content file in app/data uses these.
import type { CompanyId } from '~/data/companies'

// Convention: any value containing "(this is demo)" is placeholder data — replace or delete it.

export interface Link { label: string; href: string; icon?: IconName }

export type IconName =
  | 'github' | 'gitlab' | 'linkedin' | 'mail' | 'map' | 'download' | 'arrow' | 'external'
  | 'file' | 'award' | 'cap' | 'code' | 'server' | 'db' | 'box' | 'terminal' | 'git'
  | 'bot' | 'shield' | 'layers' | 'clock' | 'check' | 'sun' | 'moon' | 'menu' | 'close' | 'phone'

export interface Profile {
  name: string
  initials: string
  role: string
  headline: string
  intro: string
  about: string[]
  location: string
  availability: string
  email: string
  phone?: string
  avatar?: string | null // e.g. '/images/avatar.jpg' placed in /public/images
  cv?: string | null // e.g. '/documents/cv.pdf' placed in /public/documents
  socials: Link[]
  languages: string[]
  showDemoNotice: boolean
  siteUrl: string
}

export interface Stat { value: string; label: string }

export interface Experience {
  id: string
  companyId: CompanyId
  company: string
  companyUrl?: string
  role: string
  type: string // Internship / Full-time / Contract
  start: string
  end: string
  location: string
  summary: string
  highlights: string[]
  tech: string[]
  projects: string[] // project slugs
}

export type MilestoneStatus = 'done' | 'current' | 'next'
export interface Milestone {
  date: string
  title: string
  text: string
  status: MilestoneStatus
  tag: string
  companyId?: CompanyId
}

export type SkillLevel = 'work' | 'familiar' | 'learning'
export interface Skill { name: string; level: SkillLevel; note?: string }
export interface SkillStage { step: string; title: string; icon: IconName; skills: Skill[] }

export interface FeatureGroup { title: string; items: string[] }
export interface Project {
  slug: string
  title: string
  kind: 'work' | 'personal'
  company?: string
  companyId?: CompanyId
  role: string
  period: string
  summary: string
  overview: string
  layer: string // e.g. "Backend", "Full-stack", "Frontend"
  featured?: boolean
  groups: FeatureGroup[]
  tech: string[]
  links: Link[]
  note?: string
  accent: number // 0-5, picks the cover gradient
}

export interface Education {
  degree: string
  school: string
  start: string
  end: string
  location: string
  details: string[]
}

export interface Certificate {
  title: string
  issuer: string
  date?: string
  description: string
  file?: string | null // '/documents/xxx.pdf' in /public/documents
  credentialUrl?: string | null // public link to view / verify
  credentialId?: string | null
  kind: 'certificate' | 'letter' | 'badge' | 'module'
  featured?: boolean // featured = big card; others go in the compact "Courses & badges" list
}

export interface Achievement { title: string; date: string; text: string }

export interface Practice { title: string; icon: IconName; text: string; points: string[] }
