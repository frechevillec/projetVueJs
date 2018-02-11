import VueRouter from 'vue-router'
import Home from './components/home.vue'
import Details from './components/details.vue'
import Add from './components/add.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/movie/details', component: Details },
  { path: '/movie/add', component: Add }
]

export default new VueRouter({
  routes
})
