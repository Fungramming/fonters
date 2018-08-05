import Vue from 'vue'
import Router from 'vue-router'
const routerOptions = [
  { path: '/', component: 'Home', name: 'home' },
  { path: '/tech', component: 'Tech', name: 'tech' },
  { path: '/service', component: 'Service', name: 'service' },
  { path: '/signup', component: 'Signup', name: 'signup' },
  { path: '/team', component: 'Team', name: 'team' },
  { path: '*', component: 'NotFound' }
]
const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/views/${route.component}.vue`)
  }
})
Vue.use(Router)
export default new Router({
  routes,
  mode: 'history'
})
