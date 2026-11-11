import type { Practice } from '~/types/portfolio'

// "How I work" — day-to-day habits and tools.
export const practices: Practice[] = [
  {
    title: 'Git workflow',
    icon: 'git',
    text: 'I work on feature branches and keep commits small and clear.',
    points: ['Branch, commit, pull and rebase', 'Resolving merge conflicts', 'GitLab and GitHub'],
  },
  {
    title: 'Docker for local setup',
    icon: 'box',
    text: 'I use Docker Compose so the whole stack starts with one command.',
    points: ['Backend, frontend, PostgreSQL', 'Redis and Celery workers', 'pgAdmin for the database'],
  },
  {
    title: 'Testing APIs',
    icon: 'server',
    text: 'I check every endpoint in Postman before the frontend uses it.',
    points: ['Request and response checks', 'Validation and error cases', 'Role-based access checks'],
  },
  {
    title: 'AI-assisted coding',
    icon: 'bot',
    text: 'I use Claude Code as a coding assistant, and I read and test what it writes before I commit.',
    points: ['Exploring unfamiliar code', 'Writing boilerplate faster', 'Reviewing my own changes'],
  },
  {
    title: 'Linux every day',
    icon: 'terminal',
    text: 'I switched to Linux during my internship and use it for all development.',
    points: ['Terminal-first workflow', 'Package and service setup', 'Shell basics'],
  },
  {
    title: 'Docs & teamwork',
    icon: 'layers',
    text: 'I write short notes on what I built and work closely with designers and project managers.',
    points: ['Feature notes and handover docs', 'Taking code review feedback', 'Clarifying requirements early'],
  },
]
