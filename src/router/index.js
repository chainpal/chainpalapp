import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import logon from '@/pages/logon'
import account from '@/pages/account'
import commodity from '@/pages/commodity'
import message from '@/pages/message'
import set from '@/pages/set'
import transfer from '@/pages/transfer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'logon',
      component: logon
    },
    {
      path: '/account',
      name: 'account',
      component: account
    },
    {
      path: '/commodity',
      name: 'commodity',
      component: commodity
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/set',
      name: 'set',
      component: set
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: transfer
    },
  ]
})
