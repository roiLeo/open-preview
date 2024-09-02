export default defineNuxtConfig({
  app: {
    head: {
      title: 'OpenPreview',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      bodyAttrs: { class: 'bg-white dark:bg-gray-900' }
    }
  },

  modules: ['@nuxtjs/i18n', '@nuxt/ui'],
  ui: { global: true },

  colorMode: {
    preference: 'dark',
    classSuffix: ''
  },

  compatibilityDate: '2024-09-02'
})