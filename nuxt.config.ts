// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  ssr:false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module'
  ],
  // css: [
  //   '@/assets/css/tailwind.css'
  // ],
  primevue: {
    options: {
        theme: {
            preset: Aura
        }
    }
  },
})
