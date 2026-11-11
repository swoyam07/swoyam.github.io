<script setup lang="ts">
// Renders text and turns every "(this is demo)" into a visible amber badge.
const props = defineProps<{ text?: string | null }>()
const parts = computed(() => (props.text ?? '').split('(this is demo)'))
</script>

<template>
  <template v-for="(p, i) in parts" :key="i">{{ i === parts.length - 1 ? p : p.trimEnd() }}<span v-if="i < parts.length - 1" class="demo" title="Placeholder — replace with real data">this is demo</span></template>
</template>
