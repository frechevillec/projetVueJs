import Vue from 'vue' 
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import app from './app.vue' 
import router from './routes.js'
import {movies_store} from './store.js'

Vue.use(Vuex)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  store: movies_store,
  router,
  render: h => h(app)
})
