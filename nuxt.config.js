export default {
  head: {
    title: 'Stuff Food',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      { 'http-equiv':'Content-Type', },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', }]
  },
  css: [
    '~/assets/common/fonts/fontawesome-5.15.2-web/all.css',
    '~/assets/css/common.css',
    '~/assets/css/common.ui.css',
  ],
  modules: [
    '@nuxtjs/vuetify',
  ],
}
