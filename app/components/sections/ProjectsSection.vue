<script setup lang="ts">
import { projects } from '~/data/projects'
const featured = projects.filter((p) => p.featured)
</script>

<template>
  <section id="projects" class="section">
    <div class="site-container">
      <div class="head">
        <SectionHeader index="04" route="/projects?featured=true" title="Featured work"
          lead="Django and Nuxt work from my job, plus my biggest side project. Client code is private, so each case study lists exactly what I built." />
        <NuxtLink to="/projects" class="btn all" v-reveal>All {{ projects.length }} projects <Icon name="arrow" :size="16" /></NuxtLink>
      </div>
      <div class="grid gap-5 md:grid-cols-2 2xl:grid-cols-4">
        <div v-for="(p, i) in featured" :key="p.slug" v-reveal="(i % 2) * 80">
          <ProjectCard :project="p" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.head { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; flex-wrap: wrap; }
.all { margin-bottom: clamp(36px, 5vw, 56px); }
</style>
