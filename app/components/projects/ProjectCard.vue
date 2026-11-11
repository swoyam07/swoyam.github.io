<script setup lang="ts">
import type { Project } from '~/types/portfolio'
defineProps<{ project: Project }>()
</script>

<template>
  <NuxtLink :to="`/projects/${project.slug}`" class="pc card card-hover">
    <ProjectCover :accent="project.accent" :layer="project.layer" :title="project.title" />
    <div class="body">
      <div class="meta mono">
        <CompanyLogo v-if="project.companyId" :id="project.companyId" size="xs" />
        <span>{{ project.kind === 'personal' ? 'Personal project' : project.company }}</span>
        <span class="faint">·</span>
        <span class="faint"><DText :text="project.period" /></span>
      </div>
      <h3><DText :text="project.title" /></h3>
      <p><DText :text="project.summary" /></p>
      <div class="tags">
        <span v-for="t in project.tech.slice(0, 5)" :key="t" class="chip chip-mono"><DText :text="t" /></span>
        <span v-if="project.tech.length > 5" class="chip chip-mono">+{{ project.tech.length - 5 }}</span>
      </div>
      <span class="more">Read case study <Icon name="arrow" :size="15" /></span>
    </div>
  </NuxtLink>
</template>

<style scoped>
.pc { display: flex; flex-direction: column; overflow: hidden; height: 100%; }
.body { padding: 20px 22px 22px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
.meta { font-size: 0.74rem; color: var(--text-2); display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
h3 { font-size: 1.12rem; letter-spacing: -0.02em; }
p { color: var(--text-2); font-size: 0.93rem; }
.tags { margin-top: 4px; }
.more { margin-top: auto; padding-top: 10px; display: inline-flex; align-items: center; gap: 6px; font-size: 0.88rem; font-weight: 560; color: var(--accent); }
.more :deep(svg) { transition: transform 0.3s var(--ease); }
.pc:hover .more :deep(svg) { transform: translateX(4px); }
</style>
