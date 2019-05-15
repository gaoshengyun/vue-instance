import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Tab from './views/Tab'
import Qqfriends from './views/Qqfriends'
import Chuansuokuang from './views/Chuansuokuang'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tab',
      name: 'tab',
      component: Tab
    },
    {
      path:'/qqfriends',
      name:'qqfriends',
      component:Qqfriends
    },
    {
      path:'/chuansuokuang',
      name:'chuansuokuang',
      component:Chuansuokuang
    }
  ]
})
