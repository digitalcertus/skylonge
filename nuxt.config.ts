// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preload', as: 'font', type: 'font/ttf', href: '/fonts/BlackOpsOne-Regular.ttf', crossorigin: '' },
        { rel: 'preload', as: 'font', type: 'font/ttf', href: '/fonts/Quantico-Regular.ttf', crossorigin: '' },
        { rel: 'preload', as: 'font', type: 'font/ttf', href: '/fonts/Quantico-Bold.ttf', crossorigin: '' }
      ]
    }
  }
})