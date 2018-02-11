import VueRouter from 'vue-router'
import HomeMovie from './components/home.vue'
import DetailsMovie from './components/details.vue'
import AddMovie from './components/add.vue'


const routes = [
  { path: '/', component: HomeMovie },
  { path: '/movie/details', component: DetailsMovie },
  { path: '/movie/add', component: AddMovie }
]

export default new VueRouter({
  routes
})
