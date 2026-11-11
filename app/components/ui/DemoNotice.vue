<script setup lang="ts">
import { profile } from '~/data/profile'
const open = ref(true)
</script>

<template>
  <div v-if="profile.showDemoNotice && open" class="dn" role="note">
    <div class="site-container in">
      <span class="demo" style="margin: 0">this is demo</span>
      <span>Values marked like this are placeholders and will be replaced with real details.</span>
      <button type="button" aria-label="Dismiss notice" @click="open = false"><Icon name="close" :size="15" /></button>
    </div>
  </div>
</template>

<style scoped>
.dn { background: var(--warn-soft); border-bottom: 1px solid var(--line); font-size: 0.84rem; color: var(--text-2); }
.in { display: flex; align-items: center; gap: 12px; min-height: 40px; padding-block: 6px; }
.in span:nth-child(2) { flex: 1; }
button { color: var(--text-3); display: grid; place-items: center; width: 28px; height: 28px; border-radius: 8px; }
button:hover { color: var(--text); background: var(--surface-2); }
</style>
