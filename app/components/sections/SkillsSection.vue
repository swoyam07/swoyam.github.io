<script setup lang="ts">
import { skillStages } from '~/data/skills'
import type { SkillLevel } from '~/types/portfolio'
import { techIcon } from '~/data/tech'
const asset = useAsset()
const legend: { k: SkillLevel; label: string }[] = [
  { k: 'work', label: 'Used in real projects' },
  { k: 'familiar', label: 'Used a little' },
  { k: 'learning', label: 'Learning / next' },
]
</script>

<template>
  <section id="skills" class="section">
    <div class="site-container">
      <SectionHeader index="03" route="/skills" title="Backend skills roadmap"
        lead="The tools I use, laid out like a backend learning path. Each skill is marked by how much I have actually used it." />

      <ul class="legend" v-reveal>
        <li v-for="l in legend" :key="l.k"><span class="lv" :class="l.k" />{{ l.label }}</li>
      </ul>

      <div class="stages grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <article v-for="(s, i) in skillStages" :key="s.step" class="stage card card-hover" v-reveal="(i % 3) * 70">
          <div class="top">
            <span class="ic"><Icon :name="s.icon" :size="18" /></span>
            <span class="step mono">STEP {{ s.step }}</span>
          </div>
          <h3><DText :text="s.title" /></h3>
          <ul class="skills">
            <li v-for="k in s.skills" :key="k.name" :title="k.note">
              <span class="lv" :class="k.level" />
              <img v-if="techIcon(k.name)" :src="asset(techIcon(k.name))" alt="" class="ti" width="22" height="22" loading="lazy">
              <span class="nm">{{ k.name }}</span>
              <span v-if="k.note" class="note">{{ k.note }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.legend { display: flex; flex-wrap: wrap; gap: 8px 22px; margin-bottom: 26px; font-size: 0.85rem; color: var(--text-2); }
.legend li { display: inline-flex; align-items: center; gap: 8px; }
.lv { width: 9px; height: 9px; border-radius: 3px; flex: none; }
.lv.work { background: var(--accent); }
.lv.familiar { background: var(--accent-2); }
.lv.learning { background: transparent; box-shadow: inset 0 0 0 1.5px var(--text-3); }
.stage { padding: 22px; }
.top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
.ic { width: 38px; height: 38px; display: grid; place-items: center; border-radius: 10px; background: var(--accent-soft); color: var(--accent); }
.step { font-size: 0.7rem; color: var(--text-3); letter-spacing: 0.08em; }
h3 { font-size: 1.05rem; margin-bottom: 14px; }
.skills { display: grid; gap: 2px; }
.skills li { display: flex; align-items: center; gap: 10px; padding: 7px 0; font-size: 0.92rem; border-top: 1px dashed var(--line); }
.nm { flex: 1; }
.ti { width: 22px; height: 22px; flex: none; margin-right: -2px; }
.note { font-size: 0.74rem; color: var(--text-3); text-align: right; }
@media (max-width: 639px) { .note { display: none; } }
</style>
