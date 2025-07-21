export default defineNuxtConfig({
  app: {
    head: {
      title: 'Open Preview',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
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
