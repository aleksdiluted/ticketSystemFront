import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tickets from "@/views/Tickets";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tickets',
    name: 'Pöördumised',
    component: Tickets
  },
]

const router = new VueRouter({
  routes
})

export default router
