<script setup lang="ts">
// Generated cover art (no image files needed). Looks like a small API diagram.
const props = defineProps<{ accent: number; layer: string; title: string }>()
const hues = [168, 228, 262, 196, 145, 290]
const h = computed(() => hues[props.accent % hues.length])
const initials = computed(() => props.title.replace(/\(this is demo\)/, '').split(/[\s—-]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase())
</script>

<template>
  <div class="cv" :style="{ '--h': h }" aria-hidden="true">
    <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern :id="`dots-${accent}`" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r="1.2" class="d" /></pattern>
      </defs>
      <rect width="400" height="200" :fill="`url(#dots-${accent})`" />
      <path d="M70 100 C140 100 140 50 210 50 M70 100 C140 100 140 150 210 150 M210 50 H300 M210 150 H300" class="ln" />
      <rect x="22" y="78" width="96" height="44" rx="10" class="bx" />
      <rect x="196" y="30" width="80" height="40" rx="10" class="bx" />
      <rect x="196" y="130" width="80" height="40" rx="10" class="bx" />
      <rect x="300" y="30" width="78" height="40" rx="10" class="bx alt" />
      <rect x="300" y="130" width="78" height="40" rx="10" class="bx alt" />
    </svg>
    <span class="ini mono">{{ initials }}</span>
    <span class="layer mono">{{ layer }}</span>
  </div>
</template>

<style scoped>
.cv { position: relative; aspect-ratio: 2 / 1; overflow: hidden; border-bottom: 1px solid var(--line);
  background: radial-gradient(120% 120% at 0% 0%, hsl(var(--h) 70% 50% / 0.18), transparent 60%), var(--surface-2); }
svg { position: absolute; inset: 0; width: 100%; height: 100%; }
.d { fill: var(--line-2); }
.ln { fill: none; stroke: hsl(var(--h) 70% 60% / 0.55); stroke-width: 1.5; stroke-dasharray: 4 5; }
.bx { fill: var(--surface); stroke: var(--line-2); }
.bx.alt { fill: hsl(var(--h) 70% 55% / 0.12); stroke: hsl(var(--h) 70% 60% / 0.45); }
.ini { position: absolute; left: 22px; top: 50%; transform: translateY(-50%); width: 96px; text-align: center; font-weight: 700; font-size: 0.95rem; color: hsl(var(--h) 75% 62%); }
.layer { position: absolute; right: 12px; bottom: 10px; font-size: 0.68rem; color: var(--text-3); background: var(--surface); border: 1px solid var(--line); padding: 2px 8px; border-radius: 6px; }
:root[data-theme='light'] .ini { color: hsl(var(--h) 70% 38%); }
</style>
