// v-reveal: fades elements in when they scroll into view.
// Optional delay in ms:  v-reveal="120"
export default defineNuxtPlugin((nuxtApp) => {
  let io: IntersectionObserver | null = null
  const getIO = () => {
    if (!io && typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add('is-in')
              io!.unobserve(e.target)
            }
          }
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
      )
    }
    return io
  }

  nuxtApp.vueApp.directive<HTMLElement, number | undefined>('reveal', {
    getSSRProps: (binding) => ({ 'data-reveal': '', style: binding.value ? `--d:${binding.value}ms` : undefined }),
    mounted(el, binding) {
      el.setAttribute('data-reveal', '')
      if (binding.value) el.style.setProperty('--d', `${binding.value}ms`)
      const o = getIO()
      if (o) o.observe(el)
      else el.classList.add('is-in')
    },
    unmounted(el) {
      io?.unobserve(el)
    },
  })
})
