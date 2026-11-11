<script setup lang="ts">
import type { NuxtError } from '#app'
const props = defineProps<{ error: NuxtError }>()
useSeoMeta({ title: `${props.error.statusCode}` })
</script>

<template>
  <div>
    <SiteHeader />
    <section class="section">
      <div class="site-container err">
        <div class="mono code">{{ error.statusCode }}</div>
        <h1>{{ error.statusCode === 404 ? 'This route does not exist' : 'Something went wrong' }}</h1>
        <p class="muted mono">GET {{ $route.path }} → {{ error.statusCode }} {{ error.statusMessage || 'Not Found' }}</p>
        <button class="btn btn-primary" type="button" @click="clearError({ redirect: '/' })">Back to home</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.err { text-align: center; display: grid; justify-items: center; gap: 18px; padding-block: 8vh; }
.code { font-size: clamp(4rem, 14vw, 8rem); font-weight: 700; line-height: 1; color: var(--accent); letter-spacing: -0.05em; }
h1 { font-size: var(--step-3); }
p { font-size: 0.86rem; }
</style>
