import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
// GitHub Pages: the deploy workflow sets NUXT_APP_BASE_URL automatically.
//  - repo named <user>.github.io  -> base "/"
//  - any other repo name          -> base "/<repo>/"
const baseURL = process.env.NUXT_APP_BASE_URL || '/'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  // Static output only: no server runtime on GitHub Pages.
  ssr: true,
  nitro: {
    preset: 'github_pages',
    prerender: { crawlLinks: true, routes: ['/', '/projects'], failOnError: true },
  },

  vite: { plugins: [tailwindcss()] },

  components: [{ path: '~/components', pathPrefix: false }],

  css: [
    '@fontsource-variable/inter',
    '@fontsource-variable/jetbrains-mono',
    '~/assets/css/tailwind.css',
  ],

  app: {
    baseURL,
    buildAssetsDir: '/_assets/', // "_nuxt" is fine too; this avoids Jekyll-style underscore issues
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#f6f7f9' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: `${baseURL}favicon.svg` }],
      script: [
        {
          // Set theme + "js" class before paint (prevents flash of wrong theme)
          innerHTML:
            "(function(){try{var t=localStorage.getItem('theme');if(t!=='dark')t='light';document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='light'}document.documentElement.classList.add('js')})()",
          tagPosition: 'head',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})
