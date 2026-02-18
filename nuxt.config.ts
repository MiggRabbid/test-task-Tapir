const appDir = new URL('./app', import.meta.url).pathname;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'app/',
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  alias: {
    '@app': appDir,
  },
  modules: ['@nuxt/eslint'],
  css: ['~/assets/scss/main.scss'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
});
