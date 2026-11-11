import type { Experience } from '~/types/portfolio'

// Newest first.
export const experience: Experience[] = [
  {
    id: 'pathway',
    companyId: 'pathway',
    company: 'Pathway Technologies and Services',
    role: 'Django Developer (this is demo)',
    type: 'Full-time (this is demo)',
    start: 'Jan 2025 (this is demo)',
    end: 'Present',
    location: 'Kathmandu, Nepal (this is demo)',
    summary:
      'Building Django REST Framework backends for client projects, and the Nuxt and Vue dashboards that use those APIs.',
    highlights: [
      'Built the Kavya School website and admin CMS end to end: Django REST Framework backend and Nuxt 4 frontend.',
      'Added seven report API endpoints in DRF to the GeoKrishi Input Collection module, limited to admin and manager roles.',
      'Moved stock deduction from order completion to dispatch and put the repeated logic into one shared function.',
      'Added JWT auth, a role editor with per-action permissions, and Celery + Redis background jobs for emails and PDFs.',
      'Set up Docker Compose for local development (Nuxt, Django, PostgreSQL, Redis, Celery, pgAdmin).',
    ],
    tech: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Celery', 'Redis', 'Docker', 'Nuxt 4', 'Vue 3', 'TypeScript'],
    projects: ['kavya-school', 'geokrishi-backend', 'input-collection-dashboard', 'input-collection-ecommerce'],
  },
  {
    id: 'outlines-trainee',
    companyId: 'outlines',
    company: 'Outlines Research & Development Pvt. Ltd.',
    role: 'Trainee – PHP Developer',
    type: 'Part-time · Traineeship',
    start: 'Oct 2024',
    end: 'Dec 2024',
    location: 'Lalitpur, Nepal · On-site',
    summary: 'Continued after the internship as a trainee, working on Laravel client projects.',
    highlights: [
      'Built CRUD modules and REST APIs in Laravel for the frontend to use.',
      'Worked on session handling and password reset by email.',
      'Built admin dashboard pages showing users, sales and event participation.',
      'Built reporting views for the admin panel.',
      'Worked on the APF Nepal, Event Management and Saathi projects.',
    ],
    tech: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'GitLab'],
    projects: ['apf-nepal', 'event-management', 'saathi-school'],
  },
  {
    id: 'outlines-intern',
    companyId: 'outlines',
    company: 'Outlines Research & Development Pvt. Ltd.',
    role: 'Intern – PHP Developer',
    type: 'Full-time · Internship (90 days)',
    start: 'Jul 14, 2024',
    end: 'Oct 16, 2024',
    location: 'Lalitpur, Nepal · On-site',
    summary:
      'My first backend role. Learned PHP and the MVC pattern in CodeIgniter, then Laravel, on real client projects.',
    highlights: [
      'Built CRUD features with validation, filters, file uploads, rich text (CKEditor) and embedded YouTube links.',
      'Wrote migrations and seeders, and worked with MySQL and PostgreSQL in phpMyAdmin and pgAdmin.',
      'Created APIs and tested them in Postman, including error and edge cases.',
      'Added email notifications, Excel export, QR codes for payment confirmation and ticket generation.',
      'Used GitLab every day: branches, commits, pull, rebase and merge conflicts. Switched to Linux for development.',
    ],
    tech: ['PHP', 'CodeIgniter', 'Laravel', 'MySQL', 'PostgreSQL', 'Postman', 'GitLab', 'Linux'],
    projects: ['siddhartha-cable-car', 'apf-nepal', 'nra-nepal'],
  },
]
