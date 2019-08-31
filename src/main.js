import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './style/index.less' // 引入初始化样式
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 赋值基础地址
Vue.prototype.$axios = axios // 使用axios 为vue对象的原型使用axios

Vue.config.productionTip = false
Vue.use(Element)// 全局注册 任职位置都可以使用

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
