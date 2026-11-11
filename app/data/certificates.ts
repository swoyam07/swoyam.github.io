import type { Certificate } from '~/types/portfolio'

// featured: true  -> large card in "Certificates & documents"
// featured: false -> compact row in "Courses & learning badges"
// file: a PDF/image in public/documents ('/documents/name.pdf'); credentialUrl: a public link.
export const certificates: Certificate[] = [
  // ── Featured ─────────────────────────────────────────────
  {
    title: 'Python with Django Course',
    issuer: 'Code IT',
    date: 'Sep 2026',
    description:
      'Python fundamentals and the Django framework: routing, views, templates, models, authentication, REST API integration and a real-world project.',
    credentialId: 'CION-24240',
    credentialUrl: null,
    kind: 'certificate',
    featured: true,
  },
  {
    title: 'Internship Certificate',
    issuer: 'Outlines Research & Development Pvt. Ltd.',
    date: 'Oct 2024',
    description: 'PHP developer internship, July 14 – October 16, 2024 (90 days).',
    credentialUrl:
      'https://github.com/swoyamsuwal/professional-documents/blob/main/outlines-research-and-development-internship-certificate.pdf',
    kind: 'certificate',
    featured: true,
  },
  {
    title: 'Prompt Design in Vertex AI — Skill Badge',
    issuer: 'Google',
    date: 'Aug 2026',
    description: 'Prompt design and working with generative AI models on Google Cloud’s Vertex AI platform.',
    credentialUrl: null,
    kind: 'badge',
    featured: true,
  },
  {
    title: 'Databricks Fundamentals Accreditation',
    issuer: 'Databricks',
    date: 'Aug 2026',
    description: 'Fundamentals of the Databricks platform and its products for data analysis.',
    credentialUrl: null,
    kind: 'certificate',
    featured: true,
  },

  // ── Courses ──────────────────────────────────────────────
  { title: 'Python Developer', issuer: 'Sololearn', date: 'Oct 2026', description: 'Python developer certification.', credentialId: 'CC-SS4LH63K', kind: 'certificate' },
  { title: 'Introduction to SQL', issuer: 'Sololearn', date: 'Oct 2026', description: 'Database querying with SQL.', credentialId: 'CC-COMUW1FS', kind: 'certificate' },
  { title: 'Prompt Engineering', issuer: 'Sololearn', date: 'Oct 2026', description: 'Prompt design and AI workflows.', credentialId: 'CC-1A044WXC', kind: 'certificate' },
  { title: 'Meet Claude', issuer: 'Sololearn', date: 'Oct 2026', description: 'Working with Claude for productivity and prompting.', credentialId: 'CC-PQA4RKSM', kind: 'certificate' },
  {
    title: 'Python (Basic)',
    issuer: 'IT Training Nepal Pvt. Ltd.',
    date: 'Jun – Jul 2023',
    description: 'Python basics course, June 6 – July 20, 2023.',
    credentialId: '1011/2024',
    kind: 'certificate',
  },
  {
    title: 'Foundations in Generative AI',
    issuer: 'IBM SkillsBuild',
    description: 'Generative AI basics, LLMs, real-world uses, responsible AI and prompt refinement.',
    kind: 'module',
  },

  // ── Microsoft Learn modules ──────────────────────────────
  {
    title: 'Introduction to AI concepts',
    issuer: 'Microsoft Learn',
    description: 'Generative AI, natural language, speech, computer vision, information extraction and responsible AI.',
    credentialUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/SwoyamSuwal-9459/XPSJGF8Y?sharingId=A07F3954C82545BC',
    kind: 'module',
  },
  {
    title: 'Introduction to machine learning concepts',
    issuer: 'Microsoft Learn',
    description: 'Regression, classification, clustering, model training and evaluation, and deep learning.',
    credentialUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/SwoyamSuwal-9459/VSUHWP7M?sharingId=A07F3954C82545BC',
    kind: 'module',
  },
  {
    title: 'Introduction to generative AI and agents',
    issuer: 'Microsoft Learn',
    description: 'LLMs, effective prompting and AI agents.',
    credentialUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/SwoyamSuwal-9459/K9FWQTYB?sharingId=A07F3954C82545BC',
    kind: 'module',
  },
  {
    title: 'Get started with generative AI and agents in Azure',
    issuer: 'Microsoft Learn',
    description: 'Choosing and deploying models, and building and testing agents with Microsoft Foundry.',
    credentialUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/SwoyamSuwal-9459/VSUCZ4UM?sharingId=A07F3954C82545BC',
    kind: 'module',
  },
  {
    title: 'Develop AI agents with Microsoft Foundry and VS Code',
    issuer: 'Microsoft Learn',
    description: 'Building, testing and deploying AI agents with Microsoft Foundry Agent Service.',
    credentialUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/SwoyamSuwal-9459/D3YX5B9J?sharingId=A07F3954C82545BC',
    kind: 'module',
  },
  {
    title: 'Analyze text with Azure Language in Foundry Tools',
    issuer: 'Microsoft Learn',
    description: 'Detecting language, recognising named entities and extracting personal data (PII) from text.',
    credentialUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/SwoyamSuwal-9459/WMDTGUDN?sharingId=A07F3954C82545BC',
    kind: 'module',
  },
]
