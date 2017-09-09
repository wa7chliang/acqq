// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import Mint from 'mint-ui'
import '../static/css/normalize.css'
import 'mint-ui/lib/style.css'
import VueLazyload from 'vue-lazyload'


Vue.config.productionTip = false

Vue.use(VueLazyload, {
  loading: require('../static/loader.png')
})


Vue.use(Mint);

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0)
})

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
