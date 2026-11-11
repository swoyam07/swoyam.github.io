<script setup lang="ts">
// Home page: one long, section-by-section portfolio.
// To hide a section, remove its line below. To reorder, move it.
useSeoMeta({ title: '' })
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection />
    <JourneySection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <PracticesSection />
    <CredentialsSection />
    <ContactSection />
  </div>
</template>
