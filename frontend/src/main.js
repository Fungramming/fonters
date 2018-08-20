// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFacebookPixel from 'vue-analytics-facebook-pixel'

Vue.config.productionTip = false
Vue.use(VueFacebookPixel)
Vue.analytics.fbq.init('508716799569349', {
  em: 'jae.woo@blackrubystudio.com'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
