<script setup lang="ts">
import { profile } from '~/data/profile'
const emailIsDemo = profile.email.endsWith('example.com')
const copied = ref(false)
const copy = async () => {
  try { await navigator.clipboard.writeText(profile.email); copied.value = true; setTimeout(() => (copied.value = false), 1800) } catch {}
}
</script>

<template>
  <section id="contact" class="section">
    <div class="site-container">
      <div class="box card grid-bg" v-reveal>
        <div class="route mono"><span class="m">POST</span> /contact</div>
        <h2>Let’s work together</h2>
        <p class="lead">I’m looking for opportunities to grow as a Django developer. If you have a role, a project or a question, send me a message.</p>

        <div class="mail">
          <a :href="`mailto:${profile.email}`" class="btn btn-primary big"><Icon name="mail" :size="18" /> {{ profile.email }}<span v-if="emailIsDemo" class="demo">this is demo</span></a>
          <button type="button" class="btn" @click="copy">{{ copied ? 'Copied!' : 'Copy email' }}</button>
        </div>

        <ul class="ch">
          <li v-for="s in profile.socials" :key="s.href">
            <a :href="s.href" target="_blank" rel="noopener"><Icon :name="s.icon ?? 'external'" :size="17" /> <DText :text="s.label" /></a>
          </li>
          <li v-if="profile.phone"><a :href="`tel:${profile.phone}`"><Icon name="phone" :size="17" /> {{ profile.phone }}</a></li>
          <li><span><Icon name="map" :size="17" /> <DText :text="profile.location" /></span></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.box { padding: clamp(28px, 6vw, 72px); text-align: center; border-radius: var(--r-lg); overflow: hidden;
  background-color: var(--surface); }
.route { display: inline-flex; gap: 8px; font-size: 0.78rem; color: var(--text-2); }
.m { color: var(--accent-2); background: var(--accent-2-soft); padding: 2px 7px; border-radius: 6px; font-weight: 600; }
h2 { font-size: var(--step-4); margin-top: 18px; letter-spacing: -0.04em; }
.lead { color: var(--text-2); font-size: var(--step-1); max-width: 680px; margin: 16px auto 0; }
.mail { display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; margin-top: 32px; }
.big { height: 52px; padding: 0 22px; font-size: 1rem; max-width: 100%; overflow: hidden; text-overflow: ellipsis; }
.big .demo { color: var(--accent-ink); background: rgb(0 0 0 / 0.12); border-color: currentColor; }
.ch { display: flex; justify-content: center; flex-wrap: wrap; gap: 10px 26px; margin-top: 30px; font-size: 0.92rem; color: var(--text-2); }
.ch a, .ch span { display: inline-flex; align-items: center; gap: 8px; }
.ch a:hover { color: var(--text); }
@media (max-width: 520px) { .big { font-size: 0.86rem; } .mail .btn { width: 100%; } }
</style>
