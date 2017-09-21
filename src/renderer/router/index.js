import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage')
    },
    {
      path: '/system-information',
      name: 'system-information',
      component: require('@/components/LandingPage/SystemInformation')
    },
    {
      path: '/clipboard-history',
      name: 'clipboard-history',
      component: require('@/components/ClipboardHistory/ClipboardHistory')
    },
    {
      path: '/notes',
      name: 'notes',
      component: require('@/components/Notes/Notes')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
