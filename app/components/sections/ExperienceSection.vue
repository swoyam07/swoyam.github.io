<script setup lang="ts">
import { experience } from '~/data/experience'
import { projectBySlug } from '~/data/projects'
import { companies } from '~/data/companies'
const sel = ref(experience[0]!.id)
const cur = computed(() => experience.find((e) => e.id === sel.value)!)
const site = computed(() => companies[cur.value.companyId].url)
const linked = computed(() => cur.value.projects.map(projectBySlug).filter(Boolean))
</script>

<template>
  <section id="experience" class="section">
    <div class="site-container">
      <SectionHeader index="05" route="/experience" title="Work experience" />
      <div class="wrap grid items-start gap-5 lg:grid-cols-[300px_1fr] 2xl:grid-cols-[360px_1fr]" v-reveal>
        <div class="tabs" role="tablist" aria-label="Positions">
          <button v-for="e in experience" :key="e.id" role="tab" type="button" :aria-selected="sel === e.id" :class="{ on: sel === e.id }" @click="sel = e.id">
            <CompanyLogo :id="e.companyId" size="sm" class="tl" />
            <span class="co">{{ e.company.replace(' Pvt. Ltd.', '') }}</span>
            <span class="rl"><DText :text="e.role" /></span>
            <span class="dt mono"><DText :text="e.start" /> — <DText :text="e.end" /></span>
          </button>
        </div>

        <Transition name="fade" mode="out-in">
          <article :key="cur.id" class="panel card" role="tabpanel">
            <div class="ph">
              <CompanyLogo :id="cur.companyId" size="lg" class="plogo" link />
              <div class="phm">
                <h3><DText :text="cur.role" /></h3>
                <a v-if="site" :href="site" target="_blank" rel="noopener" class="co2">{{ cur.company }} <Icon name="external" :size="14" /></a>
                <div v-else class="co2">{{ cur.company }}</div>
              </div>
              <span v-if="cur.end === 'Present'" class="chip chip-accent"><span class="dot dot-live" /> Current</span>
            </div>
            <ul class="facts mono">
              <li><Icon name="clock" :size="14" /> <DText :text="cur.start" /> — <DText :text="cur.end" /></li>
              <li><Icon name="file" :size="14" /> <DText :text="cur.type" /></li>
              <li><Icon name="map" :size="14" /> <DText :text="cur.location" /></li>
            </ul>
            <p class="sum">{{ cur.summary }}</p>
            <ul class="hl">
              <li v-for="h in cur.highlights" :key="h"><span class="b" />{{ h }}</li>
            </ul>
            <div class="tags"><span v-for="t in cur.tech" :key="t" class="chip chip-mono">{{ t }}</span></div>
            <div v-if="linked.length" class="proj">
              <span class="eyebrow">Projects</span>
              <div class="pl">
                <NuxtLink v-for="p in linked" :key="p!.slug" :to="`/projects/${p!.slug}`"><DText :text="p!.title" /> <Icon name="arrow" :size="13" /></NuxtLink>
              </div>
            </div>
          </article>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tabs { display: flex; flex-direction: column; gap: 6px; }
.tl { margin-bottom: 8px; }
.phm { flex: 1; min-width: 0; }
.tabs button { text-align: left; padding: 14px 16px; border-radius: 12px; border: 1px solid transparent; display: grid; gap: 3px; transition: 0.2s; position: relative; }
.tabs button:hover { background: var(--surface); }
.tabs button.on { background: var(--surface); border-color: var(--line); }
.tabs button.on::before { content: ''; position: absolute; left: -1px; top: 14px; bottom: 14px; width: 3px; border-radius: 3px; background: var(--accent); }
.co { font-weight: 600; font-size: 0.95rem; }
.rl { font-size: 0.86rem; color: var(--text-2); }
.dt { font-size: 0.72rem; color: var(--text-3); }
.panel { padding: clamp(20px, 3vw, 32px); }
.ph { display: flex; gap: 18px; align-items: center; flex-wrap: wrap; }
@media (max-width: 520px) { .plogo { order: -1; } }
h3 { font-size: var(--step-2); }
.co2 { color: var(--accent); margin-top: 4px; font-weight: 520; display: inline-flex; align-items: center; gap: 6px; }
a.co2:hover { text-decoration: underline; }
.facts { display: flex; flex-wrap: wrap; gap: 8px 20px; margin-top: 16px; font-size: 0.78rem; color: var(--text-3); }
.facts li { display: inline-flex; align-items: center; gap: 6px; }
.sum { margin-top: 18px; color: var(--text-2); }
.hl { display: grid; gap: 10px; margin: 18px 0 22px; }
.hl li { display: flex; gap: 12px; font-size: 0.95rem; }
.b { width: 6px; height: 6px; border-radius: 2px; background: var(--accent); margin-top: 0.62em; flex: none; }
.proj { margin-top: 22px; padding-top: 18px; border-top: 1px solid var(--line); display: grid; gap: 10px; }
.pl { display: flex; flex-wrap: wrap; gap: 8px; }
.pl a { display: inline-flex; align-items: center; gap: 6px; font-size: 0.86rem; padding: 6px 12px; border-radius: 9px; border: 1px solid var(--line); color: var(--text-2); transition: 0.2s; }
.pl a:hover { color: var(--text); border-color: var(--accent); }
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s, transform 0.25s var(--ease); }
.fade-enter-from { opacity: 0; transform: translateY(6px); } .fade-leave-to { opacity: 0; }
@media (max-width: 1023px) {
  .tabs { flex-direction: row; overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 4px; }
  .tabs button { min-width: 230px; scroll-snap-align: start; border-color: var(--line); }
  .tabs button.on::before { left: 14px; right: 14px; top: auto; bottom: -1px; width: auto; height: 3px; }
}
</style>
