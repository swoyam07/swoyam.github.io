// Companies you have worked for. Logos live in public/images/logos/.
// Reference a company from experience.ts, projects.ts or journey.ts with `companyId`.
export interface Company {
  name: string
  short: string
  logo: string
  url?: string
}

export const companies = {
  pathway: {
    name: 'Pathway Technologies and Services',
    short: 'Pathway Technologies',
    logo: '/images/logos/pathway-technologies.png',
    url: 'https://pathway.com.np/',
  },
  outlines: {
    name: 'Outlines Research & Development Pvt. Ltd.',
    short: 'Outlines R&D',
    logo: '/images/logos/outlines-research-development.jpg',
    url: 'https://outlines-rnd.com/',
  },
} satisfies Record<string, Company>

export type CompanyId = keyof typeof companies
