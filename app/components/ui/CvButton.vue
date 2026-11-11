<script setup lang="ts">
import { profile } from '~/data/profile'
defineProps<{ small?: boolean; primary?: boolean }>()
const asset = useAsset()
</script>

<template>
  <a v-if="profile.cv" :href="asset(profile.cv)" class="btn" :class="{ 'btn-sm': small, 'btn-primary': primary }" download="Swoyam-Suwal-CV.pdf">
    <Icon name="download" :size="16" /> Download CV
  </a>
  <span v-else class="btn" :class="{ 'btn-sm': small }" aria-disabled="true" title="Add your CV to public/documents and set profile.cv">
    <Icon name="file" :size="16" /> CV coming soon
  </span>
</template>
