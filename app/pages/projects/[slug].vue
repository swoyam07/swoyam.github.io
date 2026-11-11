<script setup lang="ts">
import { projects, projectBySlug } from '~/data/projects'
import { companies } from '~/data/companies'

const route = useRoute()
const project = projectBySlug(String(route.params.slug))
if (!project) throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
const p = project!

const site = p.companyId ? companies[p.companyId].url : undefined
const i = projects.indexOf(p)
const next = projects[(i + 1) % projects.length]!
useSeoMeta({ title: stripDemo(p.title), description: stripDemo(p.summary) })
</script>

<template>
  <article class="section">
    <div class="site-container">
      <NuxtLink to="/projects" class="back mono"><Icon name="arrow" :size="14" style="transform: rotate(180deg)" /> All projects</NuxtLink>

      <header class="hd" v-reveal>
        <div class="route mono"><span class="m">GET</span> /projects/{{ p.slug }}</div>
        <h1><DText :text="p.title" /></h1>
        <p class="lead"><DText :text="p.summary" /></p>
      </header>

      <div class="layout grid items-start gap-8 lg:grid-cols-[1fr_340px] 2xl:grid-cols-[1fr_400px] xl:gap-12">
        <div class="main">
          <div class="cover card" v-reveal><ProjectCover :accent="p.accent" :layer="p.layer" :title="p.title" /></div>

          <section class="block" v-reveal>
            <h2 class="eyebrow">Overview</h2>
            <p class="ov"><DText :text="p.overview" /></p>
          </section>

          <section v-for="g in p.groups" :key="g.title" class="block" v-reveal>
            <h2 class="gt"><DText :text="g.title" /></h2>
            <ul class="items">
              <li v-for="it in g.items" :key="it"><Icon name="check" :size="15" /><span><DText :text="it" /></span></li>
            </ul>
          </section>
        </div>

        <aside class="side">
          <div class="card info" v-reveal>
            <dl>
              <div v-if="p.company"><dt>Company</dt><dd class="co"><CompanyLogo v-if="p.companyId" :id="p.companyId" size="sm" link /><a v-if="site" :href="site" target="_blank" rel="noopener" class="cl2">{{ p.company }} <Icon name="external" :size="13" /></a><template v-else>{{ p.company }}</template></dd></div>
              <div><dt>My role</dt><dd><DText :text="p.role" /></dd></div>
              <div><dt>Period</dt><dd><DText :text="p.period" /></dd></div>
              <div><dt>Type</dt><dd>{{ p.kind === 'work' ? 'Client / company work' : 'Personal project' }} · {{ p.layer }}</dd></div>
            </dl>
            <div class="eyebrow tl">Tech used</div>
            <div class="tags"><span v-for="t in p.tech" :key="t" class="chip chip-mono"><DText :text="t" /></span></div>
            <div v-if="p.links.length" class="links">
              <a v-for="l in p.links" :key="l.href" :href="l.href" target="_blank" rel="noopener" class="btn btn-sm">
                <Icon :name="l.icon ?? 'external'" :size="15" /> <DText :text="l.label" />
              </a>
            </div>
            <p v-if="p.note" class="note mono"><Icon name="shield" :size="14" /> {{ p.note }}</p>
          </div>
        </aside>
      </div>

      <NuxtLink :to="`/projects/${next.slug}`" class="next card card-hover">
        <span class="eyebrow">Next project</span>
        <span class="nt"><DText :text="next.title" /> <Icon name="arrow" :size="20" /></span>
      </NuxtLink>
    </div>
  </article>
</template>

<style scoped>
.back { display: inline-flex; align-items: center; gap: 8px; font-size: 0.8rem; color: var(--text-3); margin-bottom: 28px; }
.back:hover { color: var(--text); }
.hd { max-width: 960px; margin-bottom: 40px; }
.route { display: inline-flex; gap: 8px; font-size: 0.78rem; color: var(--text-2); margin-bottom: 18px; }
.m { color: var(--accent); background: var(--accent-soft); padding: 2px 7px; border-radius: 6px; font-weight: 600; }
h1 { font-size: var(--step-4); letter-spacing: -0.04em; }
.lead { margin-top: 16px; color: var(--text-2); font-size: var(--step-1); }
.cover { overflow: hidden; margin-bottom: 36px; }
.block + .block { margin-top: 34px; }
.ov { margin-top: 12px; font-size: var(--step-1); color: var(--text-2); line-height: 1.7; }
.gt { font-size: var(--step-1); margin-bottom: 14px; }
.items { display: grid; gap: 2px; }
.items li { display: flex; gap: 12px; padding: 11px 0; border-top: 1px solid var(--line); font-size: 0.96rem; }
.items li :deep(svg) { color: var(--accent); margin-top: 4px; }
.side { position: sticky; top: calc(var(--header-h) + 24px); }
.info { padding: 22px; }
dl { margin: 0; display: grid; }
dl div { padding: 11px 0; border-bottom: 1px solid var(--line); display: grid; gap: 2px; }
dl div:first-child { padding-top: 0; }
dt { font-size: 0.76rem; color: var(--text-3); }
dd { margin: 0; font-size: 0.93rem; }
.co { display: flex; align-items: center; gap: 10px; margin-top: 4px; }
.cl2 { display: inline-flex; align-items: center; gap: 5px; }
.cl2:hover { color: var(--accent); }
.tl { margin: 18px 0 10px; }
.links { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 18px; }
.note { display: flex; gap: 8px; align-items: center; margin-top: 18px; font-size: 0.74rem; color: var(--text-3); }
.next { display: flex; flex-direction: column; gap: 6px; margin-top: clamp(48px, 7vw, 80px); padding: 26px 28px; }
.nt { display: flex; align-items: center; justify-content: space-between; gap: 12px; font-size: var(--step-2); font-weight: 620; letter-spacing: -0.02em; }
@media (max-width: 1023px) { .side { position: static; } }
</style>
