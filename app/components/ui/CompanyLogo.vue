<script setup lang="ts">
import { companies, type CompanyId } from '~/data/companies'
// Company wordmark on a white tile, so it reads well in both light and dark themes.
// link: wrap in a link to the company website (don't use inside another link or button)
const props = withDefaults(defineProps<{ id: CompanyId; size?: 'xs' | 'sm' | 'md' | 'lg'; link?: boolean }>(), { size: 'md', link: false })
const c = computed(() => companies[props.id])
const asset = useAsset()
</script>

<template>
  <a v-if="link && c.url" :href="c.url" target="_blank" rel="noopener" class="cl lk" :class="size" :title="`${c.name} — visit website`">
    <img :src="asset(c.logo)" :alt="`${c.name} website`" loading="lazy" decoding="async">
  </a>
  <span v-else class="cl" :class="size">
    <img :src="asset(c.logo)" :alt="`${c.name} logo`" loading="lazy" decoding="async">
  </span>
</template>

<style scoped>
.cl { display: inline-flex; align-items: center; justify-content: center; flex: none; background: #fff; border-radius: 8px;
  box-shadow: 0 0 0 1px var(--line); overflow: hidden; }
.lk { transition: box-shadow 0.2s, transform 0.2s var(--ease); }
.lk:hover { box-shadow: 0 0 0 2px var(--accent); transform: translateY(-1px); }
img { width: 100%; height: 100%; object-fit: contain; display: block; }
.xs { width: 64px; height: 22px; padding: 3px 6px; border-radius: 6px; }
.sm { width: 84px; height: 30px; padding: 4px 8px; }
.md { width: 112px; height: 40px; padding: 6px 10px; border-radius: 10px; }
.lg { width: 156px; height: 56px; padding: 8px 14px; border-radius: 12px; }
</style>
