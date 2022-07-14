import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/1'
  },
  {
    path: '/:id',
    name: 'form',
    component: Main,
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  }
]

const router = new VueRouter({
  routes
})

export default router
