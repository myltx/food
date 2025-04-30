// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/food/",
  },
  devtools: { enabled: true },
  modules: ["@unocss/nuxt"],
});
