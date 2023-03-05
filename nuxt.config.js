export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'My dva aj ty(ý)',
    htmlAttrs: {
      lang: 'cs'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/android-chrome-512x512.png', size: '512x512' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/android-chrome-192x192.png', size: '192x192' },
      { rel: 'manifest', href: '/favicon/manifest.json' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true},
      { rel: 'preload', as:'style', href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400&family=Fira+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;1,200;1,300;1,400;1,500;1,600&display=swap'},
      { rel: 'stylesheet', as:'style', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400&family=Fira+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;1,200;1,300;1,400;1,500;1,600&display=swap'},
    ],
    script: [
      { src: '/js/lazysizes.min.js', body: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/less/main'
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
