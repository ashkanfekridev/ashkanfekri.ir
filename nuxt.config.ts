// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  app: {
      head: {
          bodyAttrs: {
              class: 'bg-gray-100 dark:bg-gray-900'
          },
      }
  },

  devtools: {enabled: false},
  css: ['~/assets/css/main.css'],

  postcss: {
      plugins: {
          tailwindcss: {},
          autoprefixer: {}
      }
  },

  modules: ['@nuxt/content'],
    content:{
        highlight: {
            // Theme used in all color schemes.
            theme: 'github-light',
            langs: [
                'php'
            ]
        }
    }
})