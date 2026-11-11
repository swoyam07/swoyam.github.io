<script setup lang="ts">
import { practices } from '~/data/practices'
</script>

<template>
  <section id="workflow" class="section">
    <div class="site-container">
      <SectionHeader index="06" route="/workflow" title="How I work"
        lead="The everyday tools and habits behind the projects." />
      <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <article v-for="(p, i) in practices" :key="p.title" class="pr card card-hover" v-reveal="(i % 3) * 70">
          <span class="ic"><Icon :name="p.icon" :size="20" /></span>
          <h3>{{ p.title }}</h3>
          <p>{{ p.text }}</p>
          <ul><li v-for="x in p.points" :key="x" class="mono">{{ x }}</li></ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pr { padding: 24px; }
.ic { width: 42px; height: 42px; display: grid; place-items: center; border-radius: 12px; color: var(--accent-2); background: var(--accent-2-soft); margin-bottom: 18px; }
h3 { font-size: 1.05rem; }
p { color: var(--text-2); font-size: 0.93rem; margin-top: 8px; }
ul { margin-top: 16px; display: grid; gap: 6px; }
li { font-size: 0.76rem; color: var(--text-3); }
li::before { content: '→ '; color: var(--accent); }
</style>
