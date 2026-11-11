<script setup lang="ts">
import { education } from '~/data/education'
import { certificates } from '~/data/certificates'
import { achievements } from '~/data/achievements'
import type { Certificate } from '~/types/portfolio'

const asset = useAsset()
const featured = certificates.filter((c) => c.featured)
const rest = certificates.filter((c) => !c.featured)
const kindLabel: Record<Certificate['kind'], string> = { certificate: 'Certificate', letter: 'Letter', badge: 'Skill badge', module: 'Learning module' }
const issuerMark = (issuer: string) => issuer.replace(/[^A-Za-z ]/g, '').split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase()

const issuers = ['All', ...new Set(rest.map((c) => c.issuer))]
const pick = ref('All')
const shown = computed(() => (pick.value === 'All' ? rest : rest.filter((c) => c.issuer === pick.value)))
</script>

<template>
  <section id="credentials" class="section">
    <div class="site-container">
      <SectionHeader index="07" route="/credentials" title="Education & certifications"
        :lead="`My degree, plus ${certificates.length} certificates, badges and learning modules. Links open the original credential.`" />

      <div class="cols grid items-start gap-8 lg:grid-cols-2 xl:gap-12">
        <div class="col">
          <h3 class="ttl" v-reveal><Icon name="cap" :size="18" /> Education</h3>
          <article v-for="(e, i) in education" :key="e.degree" class="ed card" v-reveal="i * 70">
            <div class="dt mono"><template v-if="e.start"><DText :text="e.start" /> — </template><DText :text="e.end" /></div>
            <h4><DText :text="e.degree" /></h4>
            <div class="sc"><DText :text="e.school" /> <span class="faint">·</span> <span class="faint"><DText :text="e.location" /></span></div>
            <ul v-if="e.details.length"><li v-for="d in e.details" :key="d"><DText :text="d" /></li></ul>
          </article>

          <template v-if="achievements.length">
            <h3 class="ttl mt" v-reveal><Icon name="award" :size="18" /> Achievements</h3>
            <article v-for="(a, i) in achievements" :key="a.title" class="ac card" v-reveal="i * 70">
              <div class="dt mono"><DText :text="a.date" /></div>
              <h4><DText :text="a.title" /></h4>
              <p><DText :text="a.text" /></p>
            </article>
          </template>
        </div>

        <div class="col">
          <h3 class="ttl" v-reveal><Icon name="file" :size="18" /> Certificates & documents</h3>
          <article v-for="(c, i) in featured" :key="c.title" class="ce card" v-reveal="i * 70">
            <div class="doc" aria-hidden="true"><Icon :name="c.kind === 'letter' ? 'file' : 'award'" :size="22" /></div>
            <div class="info">
              <div class="row"><span class="chip chip-mono">{{ kindLabel[c.kind] }}</span><span v-if="c.date" class="dt mono"><DText :text="c.date" /></span></div>
              <h4><DText :text="c.title" /></h4>
              <div class="sc"><DText :text="c.issuer" /></div>
              <p><DText :text="c.description" /></p>
              <div class="act">
                <a v-if="c.file" :href="asset(c.file)" target="_blank" rel="noopener" class="btn btn-sm"><Icon name="external" :size="14" /> View</a>
                <a v-if="c.file" :href="asset(c.file)" download class="btn btn-sm btn-ghost"><Icon name="download" :size="14" /> Download</a>
                <a v-if="c.credentialUrl" :href="c.credentialUrl" target="_blank" rel="noopener" class="btn btn-sm">View credential <Icon name="external" :size="14" /></a>
                <span v-if="c.credentialId" class="cid mono">ID {{ c.credentialId }}</span>
                <span v-if="!c.file && !c.credentialUrl && !c.credentialId" class="pending mono">Link coming soon</span>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div class="more">
        <div class="mh" v-reveal>
          <h3 class="ttl"><Icon name="layers" :size="18" /> Courses & learning badges <span class="cnt mono">{{ rest.length }}</span></h3>
          <div class="fl" role="group" aria-label="Filter by issuer">
            <button v-for="x in issuers" :key="x" type="button" :class="{ on: pick === x }" :aria-pressed="pick === x" @click="pick = x">{{ x }}</button>
          </div>
        </div>
        <TransitionGroup name="list" tag="ul" class="mini grid gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          <li v-for="c in shown" :key="c.title" class="mc card">
            <span class="mark mono" aria-hidden="true">{{ issuerMark(c.issuer) }}</span>
            <div class="mi">
              <div class="mt2">{{ c.title }}</div>
              <div class="ms mono">{{ c.issuer }}<template v-if="c.date"> · {{ c.date }}</template> · {{ kindLabel[c.kind] }}</div>
              <p class="md">{{ c.description }}</p>
              <div class="mf">
                <a v-if="c.credentialUrl" :href="c.credentialUrl" target="_blank" rel="noopener" class="lnk">View <Icon name="external" :size="13" /></a>
                <span v-if="c.credentialId" class="cid mono">ID {{ c.credentialId }}</span>
              </div>
            </div>
          </li>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<style scoped>
.col { display: grid; gap: 14px; }
.ttl { display: flex; align-items: center; gap: 10px; font-size: 1rem; color: var(--text-2); font-weight: 560; margin-bottom: 2px; }
.ttl :deep(svg) { color: var(--accent); }
.mt { margin-top: 22px; }
.ed, .ac { padding: 20px 22px; }
.dt { font-size: 0.74rem; color: var(--text-3); }
h4 { font-size: 1.02rem; margin-top: 6px; letter-spacing: -0.015em; }
.sc { font-size: 0.9rem; color: var(--text-2); margin-top: 4px; }
ul:not(.mini) { margin-top: 12px; display: grid; gap: 6px; font-size: 0.88rem; color: var(--text-2); }
.ed li::before { content: '— '; color: var(--text-3); }
p { margin-top: 8px; font-size: 0.9rem; color: var(--text-2); }
.ce { padding: 20px; display: grid; grid-template-columns: 52px 1fr; gap: 16px; }
.doc { width: 52px; height: 64px; border-radius: 8px; display: grid; place-items: center; color: var(--accent); background: var(--accent-soft);
  border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent); position: relative; }
.doc::after { content: ''; position: absolute; top: -1px; right: -1px; width: 14px; height: 14px; background: var(--bg); border-left: 1px solid color-mix(in srgb, var(--accent) 25%, transparent); border-bottom: 1px solid color-mix(in srgb, var(--accent) 25%, transparent); border-bottom-left-radius: 5px; }
.row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.act { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; margin-top: 14px; }
.cid { font-size: 0.72rem; color: var(--text-3); }
.pending { font-size: 0.74rem; color: var(--text-3); border: 1px dashed var(--line-2); padding: 5px 10px; border-radius: 8px; }

.more { margin-top: clamp(40px, 6vw, 64px); }
.mh { display: flex; align-items: center; justify-content: space-between; gap: 14px; flex-wrap: wrap; margin-bottom: 18px; }
.cnt { font-size: 0.72rem; color: var(--text-3); border: 1px solid var(--line); border-radius: 99px; padding: 1px 8px; }
.fl { display: flex; flex-wrap: wrap; gap: 6px; }
.fl button { height: 32px; padding: 0 12px; border-radius: 99px; border: 1px solid var(--line); font-size: 0.82rem; color: var(--text-2); transition: 0.2s; }
.fl button:hover { border-color: var(--line-2); color: var(--text); }
.fl button.on { background: var(--text); color: var(--bg); border-color: var(--text); }
.mini { position: relative; }
.mc { padding: 16px; display: flex; gap: 14px; }
.mark { width: 38px; height: 38px; flex: none; display: grid; place-items: center; border-radius: 10px; font-size: 0.72rem; font-weight: 700; color: var(--accent-2); background: var(--accent-2-soft); }
.mi { min-width: 0; display: flex; flex-direction: column; flex: 1; }
.mt2 { font-weight: 600; font-size: 0.93rem; line-height: 1.35; }
.ms { font-size: 0.7rem; color: var(--text-3); margin-top: 4px; }
.md { font-size: 0.84rem; margin-top: 8px; }
.mf { display: flex; align-items: center; gap: 12px; margin-top: auto; padding-top: 10px; }
.lnk { display: inline-flex; align-items: center; gap: 5px; font-size: 0.82rem; font-weight: 560; color: var(--accent); }
.lnk:hover { text-decoration: underline; }
.list-enter-active, .list-leave-active { transition: opacity 0.25s, transform 0.25s var(--ease); }
.list-enter-from, .list-leave-to { opacity: 0; transform: scale(0.98); }
.list-leave-active { position: absolute; visibility: hidden; }

</style>
