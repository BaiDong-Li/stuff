import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Login from './views/login'
import Main from './views/home/main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{
        path: '', // 默认的二级路由  的地址 path为空串 第三天
        component: Main
      }, {
        path: 'comment', // 二级路由名字 第四天
        component: () => import('./views/comment')// 按需加载 挂载路由 第四天

      }, {
        path: 'material', // 二级路由名字 第四天
        component: () => import('./views/material')// 按需加载 挂载路由 第四天

      }, {
        path: 'articles', // 二级路由名字 第四天
        component: () => import('./views/articles')// 按需加载 挂载路由 第四天
      }, {
        path: 'publish', // 二级路由名字 第四天
        component: () => import('./views/publish')// 按需加载 挂载路由 第四天
      }

      ]
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      component: Login
    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // } 这是按需加载
  ]
})
