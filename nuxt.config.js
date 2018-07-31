const webpack = require('webpack')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'mnc-oms',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [

    ],
  },
  css: [
    '~/assets/plugins/switchery/switchery.min.css',
    '~/assets/css/animate.css',
    '~/assets/css/bootstrap.min.css',
    '~/assets/plugins/select2/select2.min.css',
    '~/assets/css/style.css',
    '~/assets/css/vue-flash.css'
  ],
  plugins: [
    {src : '~/plugins/core-component', ssr: false},
    {src : '~/plugins/vee-validate.js', ssr: true}

//    '@/plugins/template.js',
  ],
  router: {
    middleware: ['check-auth']
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: [
      '~/assets/js/jquery.min.js',
//      '~/assets/js/tether.min.js',
//      '~/assets/js/bootstrap.min.js',
      '~/assets/js/detect.js',
      '~/assets/js/fastclick.js',
      '~/assets/js/jquery.blockUI.js',
      '~/assets/js/waves.js',
      '~/assets/js/jquery.nicescroll.js',
      '~/assets/js/jquery.scrollTo.min.js',
      '~/assets/js/jquery.slimscroll.js',
      '~/assets/plugins/switchery/switchery.min.js',
      '~/assets/plugins/select2/select2.js',
    ],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.resolve.alias['vue'] = 'vue/dist/vue.common'
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

