import Vue from 'vue'
import Router from 'vue-router'

import login from './shared/components/login.vue'
import home from './shared/components/homeII.vue'
import about from './website/aboutIII.vue'
import product from './website/productIII.vue'
import faqs from './website/faqs.vue'
import contactUs from './website/contact-usII.vue'
import calculator from './calculator/calculator.vue'
import utilities from './website/utilitiesII.vue'
import articles from './website/articles'
import myBlip from './onboarding/my-blip.vue'
import privacyPolicy from './website/privacy-policy.vue'
import coming from './onboarding/comingSoon.vue'
import news from './website/news.vue'

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

    {
      path: '/product',
      alias: ['/blipOne'],
      name: 'product',
      component: product
    },

    {
      path: '/faqs',
      name: 'faqs',
      component: faqs
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
    // {
    //   path: '/utilities',
    //   name: 'utilities',
    //   component: utilities
    // },
    {
      path: '/my-blip',
      name: 'my-blip',
      component: myBlip
    },
    {
      path: '/coming-soon',
      name: 'coming-soon',
      component: coming
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: privacyPolicy
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/news/:post',
      name: 'post',
      props: true,
      component: news
    }

  ]
})
