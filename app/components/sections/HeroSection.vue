<script setup lang="ts">
import { profile, stats } from '~/data/profile'
import { experience } from '~/data/experience'
import { companies } from '~/data/companies'
import { stack } from '~/data/tech'

const current = experience[0]!
const currentCo = companies[current.companyId]
// The JSON "response" shown in the hero card
const lines: [string, string | string[]][] = [
  ['name', profile.name],
  ['role', profile.role],
  ['company', current.company],
  ['stack', ['Django', 'DRF', 'PostgreSQL', 'Nuxt']],
  ['location', profile.location],
  ['open_to_work', 'true'],
]
const asset = useAsset()
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="site-container">
      <figure class="banner" v-reveal>
        <img :src="asset('/images/banner.webp')" alt="Swoyam Suwal — banner with Python, Django, Nuxt, PostgreSQL, Docker and other tools" width="1579" height="393" fetchpriority="high">
      </figure>
    </div>
    <div class="site-container in grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] xl:gap-16 2xl:gap-24">
      <div class="copy">
        <div class="status" v-reveal>
          <span class="dot dot-live" />
          <span>Currently at</span>
          <CompanyLogo :id="current.companyId" size="xs" link />
          <a v-if="currentCo.url" :href="currentCo.url" target="_blank" rel="noopener" class="co-name">{{ currentCo.short }}</a>
          <strong v-else class="co-name">{{ currentCo.short }}</strong>
        </div>

        <h1 id="hero-title" v-reveal="80">
          <span class="hi">Hi, I’m <DText :text="profile.name" /></span>
          <span class="role">{{ profile.headline }}</span>
        </h1>

        <p class="intro" v-reveal="160">{{ profile.intro }}</p>

        <div class="cta" v-reveal="240">
          <NuxtLink :to="{ path: '/', hash: '#projects' }" class="btn btn-primary">
            View my work <Icon name="arrow" :size="16" />
          </NuxtLink>
          <CvButton />
          <NuxtLink :to="{ path: '/', hash: '#contact' }" class="btn btn-ghost">Contact</NuxtLink>
        </div>

        <ul class="meta" v-reveal="300">
          <li><Icon name="map" :size="15" /> <DText :text="profile.location" /></li>
          <li><Icon name="check" :size="15" /> <DText :text="profile.availability" /></li>
        </ul>
      </div>

      <div class="term card" v-reveal="200" aria-label="Profile as an API response">
        <div class="tbar">
          <span class="lights"><i /><i /><i /></span>
          <span class="mono url"><b>GET</b> /api/v1/developer</span>
        </div>
        <div class="tbody mono">
          <div class="resp"><span class="ok">200 OK</span><span class="faint">application/json · 24ms</span></div>
          <pre><span class="p">{</span>
<template v-for="([k, v], i) in lines" :key="k">  <span class="k">"{{ k }}"</span><span class="p">: </span><template v-if="Array.isArray(v)"><span class="p">[</span><template v-for="(s, j) in v" :key="s"><span class="s">"{{ s }}"</span><span v-if="j < v.length - 1" class="p">, </span></template><span class="p">]</span></template><span v-else-if="v === 'true'" class="b">true</span><span v-else class="s">"<DText :text="v" />"</span><span v-if="i < lines.length - 1" class="p">,</span>
</template><span class="p">}</span><span class="caret" /></pre>
        </div>
        <img v-if="profile.avatar" :src="asset(profile.avatar)" :alt="stripDemo(profile.name)" class="avatar" width="72" height="72">
      </div>
    </div>

    <div class="site-container">
      <dl class="stats grid grid-cols-2 lg:grid-cols-4">
        <div v-for="(s, i) in stats" :key="s.label" class="stat" v-reveal="i * 70">
          <dt class="mono">{{ s.value }}</dt>
          <dd>{{ s.label }}</dd>
        </div>
      </dl>

      <div class="tech" v-reveal>
        <span class="eyebrow">Tech I use</span>
        <ul class="flex flex-wrap gap-2 sm:gap-3">
          <li v-for="t in stack" :key="t.name" class="ti-item" :title="t.name">
            <img :src="asset(t.icon)" :alt="t.name" width="40" height="40" loading="lazy">
            <span>{{ t.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero { padding-block: clamp(16px, 3vw, 32px) clamp(48px, 6vw, 80px); position: relative; isolation: isolate; }
/* grid texture behind the hero, fading out at the bottom */
.hero::before { content: ''; position: absolute; inset: 0; z-index: -1; pointer-events: none;
  background-image: linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px);
  background-size: 48px 48px; mask-image: linear-gradient(to bottom, #000 40%, transparent); }
.banner { margin: 0 0 clamp(36px, 6vw, 72px); border-radius: var(--r-lg); overflow: hidden; box-shadow: var(--shadow); border: 1px solid var(--line); background: #151515; }
.banner img { width: 100%; height: auto; aspect-ratio: 1579 / 393; object-fit: cover; }
.tech { margin-top: clamp(28px, 4vw, 44px); display: grid; gap: 14px; }
.ti-item { display: inline-flex; align-items: center; gap: 8px; padding: 5px 12px 5px 5px; border-radius: 12px; background: var(--surface); border: 1px solid var(--line);
  font-size: 0.86rem; color: var(--text-2); transition: border-color 0.2s, transform 0.25s var(--ease); }
.ti-item:hover { border-color: var(--line-2); transform: translateY(-2px); color: var(--text); }
.ti-item img { width: 34px; height: 34px; }
.status { display: inline-flex; align-items: center; gap: 10px; padding: 6px 14px 6px 12px; border-radius: 99px;
  background: var(--surface); border: 1px solid var(--line); font-size: 0.86rem; color: var(--text-2); margin-bottom: 26px; }
.status strong, .status a { color: var(--text); font-weight: 600; }
.status a:hover { color: var(--accent); }
@media (max-width: 420px) { .co-name { display: none; } }
h1 { display: flex; flex-direction: column; gap: 14px; }
.hi { font-size: var(--step-1); color: var(--text-2); font-weight: 500; letter-spacing: -0.01em; }
.role { font-size: var(--step-4); letter-spacing: -0.04em; line-height: 1.04; font-weight: 680;
  background: linear-gradient(180deg, var(--text) 30%, color-mix(in srgb, var(--text) 62%, var(--bg))); -webkit-background-clip: text; background-clip: text; color: transparent; }
.intro { margin-top: 22px; font-size: var(--step-1); color: var(--text-2); max-width: 640px; line-height: 1.6; }
.cta { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 32px; }
.meta { display: flex; flex-wrap: wrap; gap: 8px 22px; margin-top: 28px; color: var(--text-3); font-size: 0.88rem; }
.meta li { display: inline-flex; align-items: center; gap: 7px; }

.term { overflow: hidden; position: relative; border-radius: var(--r-lg); background: color-mix(in srgb, var(--surface) 92%, transparent); }
.term::before { content: ''; position: absolute; inset: -1px; border-radius: inherit; padding: 1px; pointer-events: none;
  background: linear-gradient(140deg, color-mix(in srgb, var(--accent) 55%, transparent), transparent 40%, transparent 65%, color-mix(in srgb, var(--accent-2) 45%, transparent));
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite: xor; mask-composite: exclude; }
.tbar { display: flex; align-items: center; gap: 14px; padding: 12px 16px; border-bottom: 1px solid var(--line); background: var(--surface-2); }
.lights { display: flex; gap: 6px; }
.lights i { width: 10px; height: 10px; border-radius: 50%; background: var(--line-2); }
.url { font-size: 0.78rem; color: var(--text-2); }
.url b { color: var(--accent); font-weight: 600; margin-right: 6px; }
.tbody { padding: 18px 20px 24px; font-size: clamp(0.76rem, 0.7rem + 0.25vw, 0.86rem); }
.resp { display: flex; gap: 12px; align-items: center; margin-bottom: 14px; font-size: 0.75rem; }
.ok { color: var(--ok); background: color-mix(in srgb, var(--ok) 12%, transparent); padding: 2px 8px; border-radius: 6px; font-weight: 600; }
pre { margin: 0; font-family: inherit; white-space: pre-wrap; word-break: break-word; line-height: 1.85; }
.k { color: var(--accent-2); } .s { color: var(--accent); } .b { color: var(--warn); } .p { color: var(--text-3); }
.caret { display: inline-block; width: 8px; height: 1.1em; background: var(--accent); margin-left: 4px; vertical-align: -0.2em; animation: blink 1.1s steps(1) infinite; }
@keyframes blink { 50% { opacity: 0; } }
.avatar { position: absolute; right: 16px; bottom: 16px; width: 72px; height: 72px; border-radius: 16px; object-fit: cover; border: 2px solid var(--line-2); }

.stats { margin: clamp(48px, 7vw, 88px) 0 0; border: 1px solid var(--line); border-radius: var(--r); background: var(--surface); overflow: hidden; }
.stat { padding: 22px 24px; }
.stat + .stat { border-left: 1px solid var(--line); }
dt { font-size: var(--step-3); font-weight: 600; letter-spacing: -0.03em; color: var(--text); }
dd { margin: 4px 0 0; color: var(--text-2); font-size: 0.88rem; }

@media (max-width: 1023px) { .stat:nth-child(3) { border-left: 0; } .stat:nth-child(n + 3) { border-top: 1px solid var(--line); } }
@media (max-width: 420px) { .cta .btn { flex: 1 1 100%; } }
</style>
