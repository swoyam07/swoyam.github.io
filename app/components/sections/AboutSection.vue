<script setup lang="ts">
import { profile } from '~/data/profile'
const facts = computed(() => [
  { k: 'Role', v: profile.role },
  { k: 'Main stack', v: 'Django · DRF · PostgreSQL · Nuxt' },
  { k: 'Studying', v: 'BSc (Hons) Computing, Herald College' },
  { k: 'Based in', v: profile.location },
  { k: 'Languages', v: profile.languages.join(' · ') },
  { k: 'Status', v: profile.availability },
])
</script>

<template>
  <section id="about" class="section">
    <div class="site-container">
      <SectionHeader index="01" route="/about" title="About me" />
      <div class="grid gap-8 lg:grid-cols-[1.4fr_1fr] xl:gap-16 items-start">
        <div class="text">
          <p v-for="(p, i) in profile.about" :key="i" v-reveal="i * 80">{{ p }}</p>
        </div>
        <aside class="facts card" v-reveal="120">
          <div class="eyebrow">Quick facts</div>
          <dl>
            <div v-for="f in facts" :key="f.k" class="row">
              <dt>{{ f.k }}</dt>
              <dd><DText :text="f.v" /></dd>
            </div>
          </dl>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text { display: grid; gap: 20px; font-size: var(--step-1); color: var(--text-2); line-height: 1.7; max-width: 760px; }
.text p:first-child { color: var(--text); }
.facts { padding: 24px; position: sticky; top: calc(var(--header-h) + 24px); }
dl { margin: 14px 0 0; }
.row { display: grid; grid-template-columns: 96px 1fr; gap: 12px; padding: 13px 0; border-top: 1px solid var(--line); font-size: 0.92rem; }
dt { color: var(--text-3); }
dd { margin: 0; }
@media (max-width: 1023px) { .facts { position: static; } }
</style>
