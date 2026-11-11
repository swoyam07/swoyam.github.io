<script setup lang="ts">
import { profile } from '~/data/profile'

const nav = [
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'credentials', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

const route = useRoute()
const open = ref(false)
const scrolled = ref(false)
const active = ref('')

watch(() => route.fullPath, () => (open.value = false))

onMounted(() => {
  const onScroll = () => (scrolled.value = window.scrollY > 8)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  // Scroll spy: highlight the section currently in view
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && (active.value = e.target.id)),
    { rootMargin: '-45% 0px -50% 0px' },
  )
  const observe = () => nav.forEach((n) => { const el = document.getElementById(n.id); if (el) io.observe(el) })
  observe()
  watch(() => route.path, () => { active.value = ''; nextTick(observe) })
  onBeforeUnmount(() => { window.removeEventListener('scroll', onScroll); io.disconnect() })
})
</script>

<template>
  <header class="hd" :class="{ scrolled, open }">
    <div class="site-container bar">
      <NuxtLink to="/" class="brand" aria-label="Home">
        <span class="mark mono">{{ profile.initials }}</span>
        <span class="who">
          <span class="nm"><DText :text="profile.name" /></span>
          <span class="rl mono">{{ profile.role }}</span>
        </span>
      </NuxtLink>

      <nav class="links" aria-label="Main">
        <NuxtLink v-for="n in nav" :key="n.id" :to="{ path: '/', hash: '#' + n.id }"
          :class="{ on: route.path === '/' && active === n.id }">{{ n.label }}</NuxtLink>
      </nav>

      <div class="actions">
        <ThemeToggle />
        <CvButton small class="cv" />
        <button class="burger" type="button" :aria-expanded="open" aria-controls="mnav" aria-label="Menu" @click="open = !open">
          <Icon :name="open ? 'close' : 'menu'" :size="20" />
        </button>
      </div>
    </div>

    <Transition name="drop">
      <nav v-if="open" id="mnav" class="mnav" aria-label="Mobile">
        <NuxtLink v-for="n in nav" :key="n.id" :to="{ path: '/', hash: '#' + n.id }" @click="open = false">
          <span>{{ n.label }}</span><Icon name="arrow" :size="16" />
        </NuxtLink>
        <CvButton />
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.hd { position: sticky; top: 0; z-index: 50; transition: background-color 0.3s, border-color 0.3s, backdrop-filter 0.3s; border-bottom: 1px solid transparent; }
.hd.scrolled, .hd.open { background: color-mix(in srgb, var(--bg) 80%, transparent); backdrop-filter: blur(14px) saturate(1.4); border-bottom-color: var(--line); }
.bar { height: var(--header-h); display: flex; align-items: center; gap: 20px; }
.brand { display: flex; align-items: center; gap: 11px; min-width: 0; }
.mark { width: 36px; height: 36px; display: grid; place-items: center; border-radius: 10px; font-size: 0.82rem; font-weight: 700;
  background: linear-gradient(135deg, var(--accent), var(--accent-2)); color: var(--accent-ink); flex: none; }
.who { display: flex; flex-direction: column; line-height: 1.2; min-width: 0; }
.nm { font-weight: 620; font-size: 0.93rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.rl { font-size: 0.7rem; color: var(--text-3); }
.links { display: flex; gap: 2px; margin-left: auto; }
.links a { padding: 7px 11px; border-radius: 8px; font-size: 0.9rem; color: var(--text-2); transition: 0.2s; }
.links a:hover { color: var(--text); background: var(--surface-2); }
.links a.on { color: var(--text); background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); }
.actions { display: flex; align-items: center; gap: 8px; }
.burger { display: none; width: 40px; height: 40px; place-items: center; border-radius: 10px; border: 1px solid var(--line); }
.mnav { display: none; }

@media (max-width: 1060px) {
  .links { display: none; }
  .actions { margin-left: auto; }
  .burger { display: grid; }
  .cv { display: none; }
  .mnav { display: flex; flex-direction: column; gap: 4px; padding: 8px var(--gutter) 20px; border-top: 1px solid var(--line); }
  .mnav a:not(.btn) { display: flex; justify-content: space-between; align-items: center; padding: 14px 6px; font-size: 1.05rem; border-bottom: 1px solid var(--line); color: var(--text-2); }
  .mnav .btn { margin-top: 14px; }
}
@media (max-width: 420px) { .rl { display: none; } }
.drop-enter-active, .drop-leave-active { transition: opacity 0.2s, transform 0.25s var(--ease); }
.drop-enter-from, .drop-leave-to { opacity: 0; transform: translateY(-6px); }
</style>
