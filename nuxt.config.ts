
// https://nuxt.com/docs/api/configuration/nuxt-config

// import postcss from './postcss.config.js'

const cssFunctions = {
  units: multiplier => `${multiplier / 2}rem`,
}

export default defineNuxtConfig({
  app: {
    head: {
      title: 'rqen.com - Christian Røen portfolio-ish'
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  nitro: {
    preset: 'github_pages',
  },
  css: ['~/assets/css/main.css'],
  // postcss,
  postcss: {
    plugins: {
      'postcss-nested': {},
      'postcss-custom-media': {},
      'postcss-functions': {cssFunctions}
    }
  },
  build: {
    transpile: ['gsap'],
  },
})
