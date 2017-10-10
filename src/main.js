import Vue from 'vue'
import VueResource from 'vue-resource'
import Vuetify from 'vuetify'
import Multiselect from 'vue-multiselect'

import '../node_modules/vuetify/dist/vuetify.min.css'

import App from './App'
import store from './Store'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(Vuetify)

store.dispatch('fetchTags')

Vue.component('multiselect', Multiselect)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
