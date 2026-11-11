import type { Profile, Stat } from '~/types/portfolio'

// ─────────────────────────────────────────────────────────────
// PROFILE — your identity. Anything with "(this is demo)" is a
// placeholder: replace it with real data or delete the field.
// ─────────────────────────────────────────────────────────────
export const profile: Profile = {
  name: 'Swoyam Suwal',
  initials: 'SS',
  role: 'Django Developer',
  headline: 'I build REST APIs with Django and DRF, and the Nuxt frontends that use them.',
  intro:
    'Junior Django developer at Pathway Technologies. I build REST APIs, authentication and admin features with Django REST Framework and PostgreSQL, and connect them to Nuxt frontends.',
  about: [
    'I am a Django developer focused on Django REST Framework on the backend and Nuxt on the frontend. At Pathway Technologies I build API endpoints, database changes, reports and admin dashboards for client projects.',
    'I started with PHP. My internship and traineeship at Outlines Research & Development were in Laravel, where I learned MVC, CRUD, REST APIs and authentication on real client websites. Since then I have moved to Python, and Django and Nuxt are the stack I want to grow in.',
    'Alongside work I study for a BSc (Hons) in Computing at Herald College Kathmandu (University of Wolverhampton), take short courses (most recently Python with Django at Code IT), and build side projects. The biggest one, Chronova, is an AI office assistant on Django and DRF that answers questions about uploaded documents (RAG).',
    'I am still early in my career. I focus on clear, working code, learning from code reviews, and understanding how the database, the API, authentication and deployment fit together.',
  ],
  location: 'Kathmandu, Nepal',
  availability: 'Open to Django / backend roles',
  email: 'swoyamsuwal@proton.me',
  phone: undefined, // e.g. '+977 98XXXXXXXX'
  avatar: null, // put a photo at public/images/avatar.jpg and set '/images/avatar.jpg'
  cv: '/documents/swoyam-suwal-cv.pdf', // file lives in public/documents/
  socials: [
    { label: 'GitHub', href: 'https://github.com/swoyamsuwal', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/swoyam-suwal/', icon: 'linkedin' },
  ],
  languages: ['Nepali (this is demo)', 'English (this is demo)'],
  showDemoNotice: true, // set to false once all demo data is replaced
  siteUrl: 'https://swoyamsuwal.github.io',
}

export const stats: Stat[] = [
  { value: '7', label: 'report APIs built in DRF' },
  { value: '1', label: 'Django + Nuxt app built end to end' },
  { value: '9', label: 'client projects contributed to' },
  { value: '16', label: 'certificates, badges & courses' },
]
