import Vue from 'vue'
import Router from 'vue-router'

import login from './shared/components/login.vue'
import home from './shared/components/home.vue'
import about from './website/about.vue'
import product from './website/product.vue'
import contactUs from './website/contact-us.vue'
import calculator from './calculator/calculator.vue'
import utilities from './website/utilities.vue'
import articles from './website/articles'
import myBlip from './onboarding/my-blip.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/utilities',
      name: 'utilities',
      component: utilities
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    // {
    //   path: '/testing',
    //   name: 'testing',
    //   component: testing
    // },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    
    {
      path: '/calculator',
      name: 'calculator',
      component: calculator
    },
    {
      path: '/',
      alias: ['/home'],
      name: 'home',
      component: home
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: contactUs
    },
    {
      path: '/articles',
      name: 'articles',
      component: articles
    },
    {
      path: '/utilities',
      name: 'utilities',
      component: utilities
    },
    {
      path: '/my-blip',
      name: 'my-blip',
      component: myBlip
    },
  ]
})
