import Vue from 'vue'
import Router from 'vue-router'
import GroupList from '@/components/Groups/GroupList'
import Home from '@/components/Home/Index'
import Login from '@/components/Login/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/GroupList',
      name: 'GroupList',
      component: GroupList
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
