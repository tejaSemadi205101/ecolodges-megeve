// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  components: [
    { path: '~/components/sections', pathPrefix: false },
    '~/components'
  ],

  runtimeConfig:{
    strapiApiToken: process.env.NUXT_STRAPI_API_TOKEN,
    strapiBaseUrl: process.env.NUXT_STRAPI_URL,
    public: {
      strapiBaseUrl: process.env.NUXT_STRAPI_URL,
    }
  },

  css: ['~/assets/css/tailwind.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['shadcn-nuxt', '@nuxt/image'],
})