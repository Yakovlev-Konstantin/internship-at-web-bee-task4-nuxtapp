export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-nuxt-project',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.15.2/css/all.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.css',
      },
    ],
    script: [
      // {
      //   src: 'https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.js'
      // }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap-css-only/css/bootstrap.min.css',
    // 'mdb-ui-kit/css/mdb.min.css',
    // 'mdbvue/build/css/mdb.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/mdb.js', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // [
    //   'nuxt-fontawesome',
    //   {
    //     imports: [
    //       {
    //         set: '@fortawesome/free-solid-svg-icons',
    //         icons: ['fas'],
    //       },
    //       {
    //         set: '@fortawesome/free-brands-svg-icons',
    //         icons: ['fab'],
    //       },
    //     ],
    //   },
    // ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // build: { extend(config, ctx) {}, transpile: ['mdbvue'] },
  build: {
    extend(config, ctx) {},
    // transpile: ['mdbvue'],
    hotMiddleware: {
      client: {
        // turn off client overlay when errors are present
        overlay: false,
      },
    },
  },
}
