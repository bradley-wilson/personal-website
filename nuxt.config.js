require('dotenv').config()
import axios from 'axios'
const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#32a47b' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/sass/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    '@nuxtjs/style-resources'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
  },

  markdownit: {
    injected: true,
    breaks: true
  },

  styleResources: {
    scss: [
      './assets/sass/main.scss'
    ]
  },

  /*
  ** Environment variables
  */
  env: {
    baseUrl: process.env.BASE_URL || 'http://www.bradwilsonphd.com/cockpit',
    url: process.env.URL || 'http://bradwilsonphd.com',
    eventsUrl: process.env.EVENTS_URL || 'http://www.bradwilsonphd.com/cockpit/api/collections/get/event?token=4458f0a2d0d2793a50fe20d0e9c519',
    quotesUrl: process.env.QUOTES_URL || 'http://www.bradwilsonphd.com/cockpit/api/collections/get/quote?token=4458f0a2d0d2793a50fe20d0e9c519',
    publicationsUrl: process.env.PUBLICATIONS_URL || 'http://www.bradwilsonphd.com/cockpit/api/collections/get/article?token=4458f0a2d0d2793a50fe20d0e9c519',
    contactsUrl: process.env.CONTACTS_URL || 'http://www.bradwilsonphd.com/cockpit/api/collections/get/contact?token=4458f0a2d0d2793a50fe20d0e9c519',
    statsUrl: process.env.STATS_URL || 'http://www.bradwilsonphd.com/cockpit/api/collections/get/stats?token=4458f0a2d0d2793a50fe20d0e9c519',
    awardsUrl: process.env.AWARDS_URL || 'http://www.bradwilsonphd.com/cockpit/api/collections/get/award?token=4458f0a2d0d2793a50fe20d0e9c519',
    biosUrl: process.env.BIOS_URL || 'http://www.bradwilsonphd.com/cockpit/api/collections/get/bios?token=4458f0a2d0d2793a50fe20d0e9c519',
    postsUrl: process.env.POSTS_URL || 'http://www.bradwilsonphd.com/cockpit/api/collections/get/post?token=4458f0a2d0d2793a50fe20d0e9c519'
  },

  generate: {
    routes: async () => {
      let { data } = await axios.post(process.env.POSTS_URL)
      return data.entries.map((post) => {
        return {
          route: '/blog/' + post.slug,
          payload: post
        }
      })
    }
  },

  serverMiddleware: [
  '@/api/contact'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
