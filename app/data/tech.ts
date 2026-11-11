// Tech logos in public/images/tech/. `stack` is the "Tech I use" row (main stack first).
// `techIcon()` lets skills.ts names pick up a logo automatically.
export interface Tech { name: string; icon: string }

const T = (name: string, file: string): Tech => ({ name, icon: `/images/tech/${file}.png` })

export const stack: Tech[] = [
  T('Django', 'django'),
  T('Django REST Framework', 'drf'),
  T('Python', 'python'),
  T('Nuxt', 'nuxt'),
  T('PostgreSQL', 'postgresql'),
  T('Docker', 'docker'),
  T('Git', 'git'),
  T('Postman', 'postman'),
  T('LangChain', 'langchain'),
  T('JavaScript', 'javascript'),
  T('Claude Code', 'claude'),
  T('Arch Linux', 'arch-linux'),
  T('PHP', 'php'),
  T('Laravel', 'laravel'),
]

// skill name (as written in skills.ts) -> logo
const bySkill: Record<string, string> = {
  'Python': 'python',
  'Django': 'django',
  'Django REST Framework': 'drf',
  'Nuxt 4': 'nuxt',
  'JavaScript': 'javascript',
  'PostgreSQL': 'postgresql',
  'Docker & Compose': 'docker',
  'Git': 'git',
  'Linux': 'arch-linux',
  'Claude Code': 'claude',
  'Postman': 'postman',
  'LangChain': 'langchain',
  'PHP': 'php',
  'Laravel': 'laravel',
}
export const techIcon = (skill: string) => (bySkill[skill] ? `/images/tech/${bySkill[skill]}.png` : null)
