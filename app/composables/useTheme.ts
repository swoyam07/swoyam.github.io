export const useTheme = () => {
  const theme = useState<'dark' | 'light'>('theme', () => 'light')
  onMounted(() => {
    theme.value = (document.documentElement.dataset.theme as 'dark' | 'light') || 'light'
  })
  const toggle = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = theme.value
    try { localStorage.setItem('theme', theme.value) } catch {}
  }
  return { theme, toggle }
}
