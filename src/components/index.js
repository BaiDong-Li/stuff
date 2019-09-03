// 所有自定义组件的插件
import layoutAside from './homec/layout-aside.vue'
import layoutHeader from './homec/layout-header.vue'
import breadCrumb from './common/bread-crumb.vue'
export default {
  install (Vue) {
    Vue.component('layout-aside', layoutAside)
    Vue.component('layout-header', layoutHeader)
    Vue.component('bread-crumb', breadCrumb)// 注册面包屑导航
  }
}
