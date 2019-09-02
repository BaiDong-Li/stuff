// 所有自定义组件的插件
import layoutAside from './homec/layout-aside.vue'
import layoutHeader from './homec/layout-header.vue'
export default {
  install (Vue) {
    Vue.component('layout-aside', layoutAside)
    Vue.component('layout-header', layoutHeader)
  }
}
