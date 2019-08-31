import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'

// 缺一条引入样式

Vue.config.productionTip = false
Vue.use(Element)// 全局注册 任职位置都可以使用

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
