<script setup lang="ts">
import { profile } from '~/data/profile'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="ft">
    <div class="site-container in">
      <div class="mono faint small">
        <span class="dot dot-live" /> 200 OK · built with Nuxt, hosted on GitHub Pages
      </div>
      <div class="small faint">© {{ year }} <DText :text="profile.name" /></div>
      <div class="soc">
        <a v-for="s in profile.socials" :key="s.href" :href="s.href" target="_blank" rel="noopener" :aria-label="stripDemo(s.label)">
          <Icon :name="s.icon ?? 'external'" :size="17" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.ft { border-top: 1px solid var(--line); padding-block: 28px; }
.in { display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
.small { font-size: 0.82rem; display: inline-flex; align-items: center; gap: 10px; }
.soc { display: flex; gap: 6px; }
.soc a { width: 36px; height: 36px; display: grid; place-items: center; border-radius: 9px; color: var(--text-2); border: 1px solid var(--line); transition: 0.2s; }
.soc a:hover { color: var(--text); border-color: var(--line-2); }
</style>
