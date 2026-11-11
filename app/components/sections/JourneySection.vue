<script setup lang="ts">
import { journey } from '~/data/journey'
const label = { done: 'Completed', current: 'In progress', next: 'Planned' } as const
const doneCount = journey.filter((m) => m.status !== 'next').length
const progress = Math.round(((doneCount - 0.5) / journey.length) * 100)
</script>

<template>
  <section id="journey" class="section">
    <div class="site-container">
      <SectionHeader index="02" route="/journey" title="My roadmap so far"
        lead="From a PHP internship to Django APIs: each step, in order, with what I learned and what comes next." />

      <ol class="road" :style="{ '--p': progress + '%' }">
        <li v-for="(m, i) in journey" :key="m.title" class="ms" :class="m.status" v-reveal="(i % 3) * 60">
          <div class="node" aria-hidden="true">
            <Icon v-if="m.status === 'done'" name="check" :size="13" />
            <span v-else-if="m.status === 'current'" class="pulse" />
          </div>
          <article class="card body">
            <div class="top">
              <span class="date mono"><DText :text="m.date" /></span>
              <span class="st" :class="m.status">{{ label[m.status] }}</span>
            </div>
            <h3>{{ m.title }}</h3>
            <p><DText :text="m.text" /></p>
            <div class="foot">
              <span class="chip chip-mono">{{ m.tag }}</span>
              <CompanyLogo v-if="m.companyId" :id="m.companyId" size="xs" link />
            </div>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.road { position: relative; display: grid; gap: 18px; --x: 50%; }
/* The line: solid for the done part, dashed for planned steps */
.road::before { content: ''; position: absolute; left: var(--x); top: 6px; bottom: 6px; width: 2px; transform: translateX(-1px);
  background: linear-gradient(var(--accent), var(--accent-2)) top / 2px var(--p) no-repeat,
    repeating-linear-gradient(var(--line-2) 0 6px, transparent 6px 12px); }
.ms { position: relative; display: grid; grid-template-columns: 1fr 1fr; }
.body { padding: 20px 22px; width: calc(100% - 40px); }
.ms:nth-child(odd) .body { grid-column: 1; justify-self: end; }
.ms:nth-child(even) .body { grid-column: 2; justify-self: start; }
.node { position: absolute; left: var(--x); top: 22px; width: 24px; height: 24px; transform: translateX(-50%); border-radius: 50%;
  display: grid; place-items: center; background: var(--bg); border: 2px solid var(--line-2); color: var(--accent-ink); z-index: 1; }
.done .node { background: var(--accent); border-color: var(--accent); }
.current .node { border-color: var(--ok); box-shadow: 0 0 0 6px color-mix(in srgb, var(--ok) 14%, transparent); }
.pulse { width: 8px; height: 8px; border-radius: 50%; background: var(--ok); }
.next .body { background: transparent; border-style: dashed; box-shadow: none; }
.current .body { border-color: color-mix(in srgb, var(--ok) 40%, var(--line)); }
.top { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 10px; flex-wrap: wrap; }
.date { font-size: 0.78rem; color: var(--text-3); }
.st { font-size: 0.72rem; font-weight: 600; padding: 2px 8px; border-radius: 6px; color: var(--accent); background: var(--accent-soft); }
.st.current { color: var(--ok); background: color-mix(in srgb, var(--ok) 12%, transparent); }
.st.next { color: var(--text-3); background: var(--surface-2); }
h3 { font-size: var(--step-1); }
p { margin-top: 8px; color: var(--text-2); font-size: 0.94rem; }
.foot { margin-top: 14px; display: flex; align-items: center; justify-content: space-between; gap: 10px; }
@media (max-width: 760px) {
  .road { --x: 11px; }
  .ms { grid-template-columns: 1fr; }
  .ms .body, .ms:nth-child(odd) .body, .ms:nth-child(even) .body { grid-column: 1; justify-self: stretch; width: auto; margin-left: 38px; }
}
</style>
