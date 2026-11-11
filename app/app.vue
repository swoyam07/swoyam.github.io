<script setup lang="ts">
import { profile } from '~/data/profile'
const name = stripDemo(profile.name)
useSeoMeta({
  titleTemplate: (t) => (t ? `${t} · ${name}` : `${name} — ${profile.role}`),
  description: profile.intro,
  ogType: 'website',
  ogTitle: `${name} — ${profile.role}`,
  ogDescription: profile.intro,
  twitterCard: 'summary',
})
</script>

<template>
  <a href="#main" class="skip-link btn btn-primary">Skip to content</a>
  <DemoNotice />
  <SiteHeader />
  <main id="main">
    <NuxtPage />
  </main>
  <SiteFooter />
</template>
