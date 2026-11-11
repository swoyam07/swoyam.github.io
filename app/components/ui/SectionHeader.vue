<script setup lang="ts">
// Every section is labelled like an API route, e.g.  GET /experience
defineProps<{ index: string; route: string; title: string; lead?: string; method?: string }>()
</script>

<template>
  <header class="sh" v-reveal>
    <div class="route mono">
      <span class="idx">{{ index }}</span>
      <span class="method">{{ method ?? 'GET' }}</span>
      <span class="path">{{ route }}</span>
    </div>
    <h2>{{ title }}</h2>
    <p v-if="lead" class="lead">{{ lead }}</p>
  </header>
</template>

<style scoped>
.sh { max-width: 720px; margin-bottom: clamp(36px, 5vw, 56px); }
.route { display: inline-flex; align-items: center; gap: 10px; font-size: 0.78rem; margin-bottom: 18px; }
.idx { color: var(--text-3); }
.method { color: var(--accent); background: var(--accent-soft); padding: 2px 7px; border-radius: 6px; font-weight: 600; }
.path { color: var(--text-2); }
h2 { font-size: var(--step-3); }
.lead { margin-top: 14px; color: var(--text-2); font-size: var(--step-1); line-height: 1.55; }
</style>
