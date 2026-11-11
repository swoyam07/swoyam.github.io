<script setup lang="ts">
const { theme, toggle } = useTheme()
</script>

<template>
  <button class="tt" type="button" :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'" @click="toggle">
    <Icon :name="theme === 'dark' ? 'sun' : 'moon'" :size="17" />
  </button>
</template>

<style scoped>
.tt { width: 38px; height: 38px; display: grid; place-items: center; border-radius: 10px; color: var(--text-2); border: 1px solid var(--line); transition: 0.2s; }
.tt:hover { color: var(--text); border-color: var(--line-2); background: var(--surface-2); }
</style>
