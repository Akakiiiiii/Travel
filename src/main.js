import Vue from 'vue'
import App from './App.vue'
import store from './store/store'

// import SlideVerify from 'vue-monoplasty-slide-verify'

// Vue.use(SlideVerify)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
