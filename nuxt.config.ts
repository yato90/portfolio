// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  pages: true,
  devtools: { enabled: true },
  css: [
    '~/assets/css/style.css',
  ],
  plugins: [
    '~/plugins/paralax.ts'
  ],
})
