import Vue from 'vue'
import App from './App.vue'
import router from './permission'
import Element from 'element-ui'// 框架组件
import Component from './components'// 自定义组件
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './style/index.less' // 引入初始化样式
import axios from './utils/axios.config.js'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 赋值基础地址
Vue.prototype.$axios = axios // 使用axios 为vue对象的原型使用axios

Vue.config.productionTip = false
Vue.use(Element)// 全局注册 任职位置都可以使用
Vue.use(Component)// 全局注册了自定义组件

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
