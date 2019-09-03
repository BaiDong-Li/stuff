import axios from 'axios'
import router from '../permission'
import { Message } from 'element-ui'
axios.interceptors.request.use(
  function (config) {
    let token = window.localStorage.getItem('user-token')
    config.headers['Authorization'] = `Bearer ${token}`
    return config
  }, function (err) { console.log(err) }
)
axios.interceptors.response.use(
  function (response) {
    return response.data ? response.data : {}// 为了不要报错 如果没有 返回空对象
  }, function (error) {
    let status = error.response.status
    let message = ''
    switch (status) {
      case 400:
        message = '请求参数错误'
        break
      case 403:
        message = '用户非实名认证用户，无权限登录'
        break
      case 507:
        message = '服务器或数据库异常'
        break
      case 404:
        message = '手机号不正确'
        break
      case 401:
        window.localStorage.clear() // 因为token有可能过期 清除垃圾token
        router.push('/login')
        break
      default:
        message = '未知错误'
        break
    }
    Message({ type: 'warning', message })
    return new Promise(function () {})
  }
)
export default axios
