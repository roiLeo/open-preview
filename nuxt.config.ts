export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },

  app: {
    head: {
      title: 'OpenPreview',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      bodyAttrs: { class: 'bg-white dark:bg-neutral-900' }
    }
  },

  modules: ['@nuxtjs/i18n', '@nuxt/ui'],

  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'dark',
    classSuffix: ''
  },

  compatibilityDate: '2024-09-02'
})
