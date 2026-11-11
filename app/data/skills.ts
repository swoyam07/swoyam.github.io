import type { SkillStage } from '~/types/portfolio'

// A backend roadmap, stage by stage. Main stack first: Django + DRF + Nuxt.
// level: 'work' = used in real projects · 'familiar' = used a little · 'learning' = learning now / next
export const skillStages: SkillStage[] = [
  {
    step: '01',
    title: 'Main stack: Django',
    icon: 'server',
    skills: [
      { name: 'Python', level: 'work' },
      { name: 'Django', level: 'work' },
      { name: 'Django REST Framework', level: 'work' },
      { name: 'Django ORM', level: 'work' },
      { name: 'Celery', level: 'work', note: 'Background jobs' },
      { name: 'FastAPI', level: 'familiar' },
    ],
  },
  {
    step: '02',
    title: 'Main stack: Nuxt',
    icon: 'layers',
    skills: [
      { name: 'Nuxt 4', level: 'work' },
      { name: 'Vue 3', level: 'work' },
      { name: 'TypeScript', level: 'work' },
      { name: 'JavaScript', level: 'work' },
      { name: 'Tailwind CSS', level: 'work' },
      { name: 'Pinia', level: 'familiar' },
      { name: 'Next.js', level: 'familiar', note: 'Chronova frontend' },
    ],
  },
  {
    step: '03',
    title: 'Databases & storage',
    icon: 'db',
    skills: [
      { name: 'PostgreSQL', level: 'work' },
      { name: 'MySQL', level: 'work' },
      { name: 'Migrations & seeders', level: 'work' },
      { name: 'Redis', level: 'familiar', note: 'Celery broker' },
      { name: 'pgvector', level: 'familiar' },
      { name: 'MinIO (S3)', level: 'familiar' },
    ],
  },
  {
    step: '04',
    title: 'APIs & security',
    icon: 'shield',
    skills: [
      { name: 'REST API design', level: 'work' },
      { name: 'JWT / SimpleJWT', level: 'work' },
      { name: 'Roles & permissions (RBAC)', level: 'work' },
      { name: 'Session auth & OTP', level: 'familiar' },
      { name: 'OAuth2 (Google)', level: 'familiar' },
      { name: 'Postman', level: 'work' },
    ],
  },
  {
    step: '05',
    title: 'DevOps & tools',
    icon: 'box',
    skills: [
      { name: 'Git', level: 'work' },
      { name: 'GitLab / GitHub', level: 'work' },
      { name: 'Docker & Compose', level: 'work' },
      { name: 'Linux', level: 'work', note: 'Daily OS' },
      { name: 'Java', level: 'familiar', note: 'University' },
      { name: 'Claude Code', level: 'work', note: 'AI coding assistant' },
      { name: 'CI/CD (GitHub Actions)', level: 'learning' },
    ],
  },
  {
    step: '06',
    title: 'AI in backends',
    icon: 'bot',
    skills: [
      { name: 'RAG pipelines', level: 'familiar' },
      { name: 'LangChain', level: 'familiar' },
      { name: 'Embeddings & semantic search', level: 'familiar' },
      { name: 'Ollama (local LLMs)', level: 'familiar' },
      { name: 'Prompt engineering', level: 'familiar', note: 'Google & Sololearn certs' },
      { name: 'Azure AI / Microsoft Foundry', level: 'learning', note: 'Microsoft Learn' },
    ],
  },
  {
    step: '07',
    title: 'Background work',
    icon: 'clock',
    skills: [
      { name: 'Email sending & automation', level: 'work' },
      { name: 'PDF generation (ReportLab)', level: 'work' },
      { name: 'Excel export', level: 'work' },
      { name: 'Google Calendar API', level: 'familiar' },
    ],
  },
  {
    step: '08',
    title: 'Earlier stack (2024)',
    icon: 'code',
    skills: [
      { name: 'PHP', level: 'work', note: 'Internship & traineeship' },
      { name: 'Laravel', level: 'work', note: 'Internship & traineeship' },
      { name: 'CodeIgniter', level: 'familiar' },
      { name: 'MVC pattern', level: 'work' },
    ],
  },
  {
    step: '09',
    title: 'Next on the roadmap',
    icon: 'arrow',
    skills: [
      { name: 'Advanced DRF (viewsets, filtering, throttling)', level: 'learning' },
      { name: 'Query optimisation (select_related, indexes)', level: 'learning' },
      { name: 'Testing with pytest (this is demo)', level: 'learning' },
      { name: 'Nginx & deployment (this is demo)', level: 'learning' },
    ],
  },
]
