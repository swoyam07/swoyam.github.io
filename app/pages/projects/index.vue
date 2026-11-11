<script setup lang="ts">
import { projects } from '~/data/projects'
useSeoMeta({ title: 'Projects', description: 'All projects and case studies.' })

const filters = ['All', 'Backend', 'Full-stack', 'Frontend', 'Personal'] as const
const f = ref<(typeof filters)[number]>('All')
const list = computed(() =>
  projects.filter((p) => f.value === 'All' || (f.value === 'Personal' ? p.kind === 'personal' : p.layer === f.value && p.kind === 'work')),
)
const count = (x: (typeof filters)[number]) =>
  x === 'All' ? projects.length : projects.filter((p) => (x === 'Personal' ? p.kind === 'personal' : p.layer === x && p.kind === 'work')).length
</script>

<template>
  <section class="section">
    <div class="site-container">
      <NuxtLink to="/" class="back mono"><Icon name="arrow" :size="14" style="transform: rotate(180deg)" /> Home</NuxtLink>
      <SectionHeader index="—" route="/projects" title="All projects"
        lead="Django and Nuxt work from my current job, Laravel work from my internship, and personal projects. Open any card for the full list of what I built." />

      <div class="fl" role="group" aria-label="Filter projects">
        <button v-for="x in filters" :key="x" type="button" :class="{ on: f === x }" :aria-pressed="f === x" @click="f = x">
          {{ x }} <span class="mono">{{ count(x) }}</span>
        </button>
      </div>

      <TransitionGroup name="list" tag="div" class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <div v-for="p in list" :key="p.slug"><ProjectCard :project="p" /></div>
      </TransitionGroup>
    </div>
  </section>
</template>

<style scoped>
.back { display: inline-flex; align-items: center; gap: 8px; font-size: 0.8rem; color: var(--text-3); margin-bottom: 28px; }
.back:hover { color: var(--text); }
.fl { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 26px; }
.fl button { height: 36px; padding: 0 14px; border-radius: 99px; border: 1px solid var(--line); font-size: 0.88rem; color: var(--text-2); display: inline-flex; align-items: center; gap: 8px; transition: 0.2s; }
.fl button span { font-size: 0.72rem; color: var(--text-3); }
.fl button:hover { border-color: var(--line-2); color: var(--text); }
.fl button.on { background: var(--text); color: var(--bg); border-color: var(--text); }
.fl button.on span { color: inherit; opacity: 0.6; }
.grid { position: relative; }
.list-enter-active, .list-leave-active { transition: opacity 0.3s, transform 0.3s var(--ease); }
.list-enter-from, .list-leave-to { opacity: 0; transform: scale(0.98); }
.list-leave-active { position: absolute; visibility: hidden; }
</style>
