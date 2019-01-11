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

    // SASS resources loader
    ['nuxt-sass-resources-loader', [
      '@/assets/sass/main.scss',
    ]]
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    proxy: true
    // baseURL: 'http://www.bradwilsonphd.com'
  },

  /*
  ** Proxy configuration
  */
  proxy: {
    '/cockpit': {
      target: 'http://www.bradwilsonphd.com/cockpit/api/collections/get',
      pathRewrite: { '^/cockpit': '' }
    }
  },

  markdownit: {
    injected: true,
    breaks: true
  },

  /*
  ** Environment variables
  */
  env: {
    token: '4458f0a2d0d2793a50fe20d0e9c519'
  },

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
