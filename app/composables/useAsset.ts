// Prefix a /public file path with the GitHub Pages base URL.
// useAsset('/documents/cv.pdf') -> '/my-repo/documents/cv.pdf'
export const useAsset = () => {
  const base = useRuntimeConfig().app.baseURL || '/'
  return (path?: string | null) => (path ? base.replace(/\/$/, '') + '/' + path.replace(/^\//, '') : '')
}

export const DEMO = '(this is demo)'
export const isDemo = (v?: string | null) => !!v && v.includes(DEMO)
export const stripDemo = (v?: string | null) => (v ?? '').replace(DEMO, '').trim()
