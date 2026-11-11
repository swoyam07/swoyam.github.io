import type { Milestone } from '~/types/portfolio'

// The career "roadmap" timeline. Oldest first.
// status: 'done' = completed · 'current' = happening now · 'next' = a goal
export const journey: Milestone[] = [
  {
    date: '2023',
    title: 'First Python course, then BSc in Computing',
    text: 'Took a basic Python course at IT Training Nepal (June – July 2023), finished Class XII, and started a BSc (Hons) in Computing at Herald College Kathmandu in September.',
    status: 'done',
    tag: 'Foundations',
  },
  {
    date: 'Jul 2024',
    title: 'PHP internship at Outlines R&D',
    text: 'First real projects. PHP, CodeIgniter and the MVC pattern, then Laravel. Switched to Linux for all development work.',
    status: 'done',
    tag: 'Internship',
    companyId: 'outlines',
  },
  {
    date: 'Oct – Dec 2024',
    title: 'Trainee PHP developer',
    text: 'Stayed on as a trainee. Built CRUD modules, REST APIs and admin dashboards for APF Nepal, an event app and a school site.',
    status: 'done',
    tag: 'Traineeship',
    companyId: 'outlines',
  },
  {
    date: 'Jan 2025 (this is demo)',
    title: 'Joined Pathway Technologies, moved to Django',
    text: 'Switched from PHP to Python. Started working with Django, Django REST Framework and PostgreSQL.',
    status: 'done',
    tag: 'Django',
    companyId: 'pathway',
  },
  {
    date: '2025',
    title: 'Built a Django + Nuxt project end to end',
    text: 'Kavya School: DRF backend, Nuxt 4 frontend, JWT auth, roles, Celery jobs and a Docker Compose setup.',
    status: 'done',
    tag: 'Django + Nuxt',
  },
  {
    date: '2025',
    title: 'Chronova: AI features on Django',
    text: 'Side project: an office assistant on DRF that answers questions about documents using RAG, pgvector and a local LLM.',
    status: 'done',
    tag: 'Side project',
  },
  {
    date: 'Aug – Oct 2026',
    title: 'Django course and certifications',
    text: 'Completed the Python with Django course at Code IT, plus Databricks Fundamentals, Google’s Vertex AI prompt design badge, and Sololearn Python, SQL and prompt engineering certificates.',
    status: 'done',
    tag: 'Learning',
  },
  {
    date: 'Now',
    title: 'Working on GeoKrishi',
    text: 'Adding report APIs and order and stock features to a large Django codebase, plus the Vue dashboard for them.',
    status: 'current',
    tag: 'Current',
    companyId: 'pathway',
  },
  {
    date: 'Next',
    title: 'Go deeper with Django, DRF and Nuxt',
    text: 'Make Django REST Framework and Nuxt my main stack: cleaner API design, better query performance and stronger permissions.',
    status: 'next',
    tag: 'Goal',
  },
  {
    date: 'Later (this is demo)',
    title: 'Testing, CI/CD and deployment',
    text: 'Write automated tests with pytest, run them with GitHub Actions, and deploy a Django app to a server with Nginx and HTTPS. (this is demo)',
    status: 'next',
    tag: 'Goal',
  },
]
