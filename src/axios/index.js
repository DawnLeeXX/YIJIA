import axios from 'axios'
import { Toast } from 'mint-ui';
axios.defaults.headers = {
  'Content-Type': `application/x-www-form-urlencoded; charset=UTF-8`,
  'Accept': 'application/json, text/plain, */*',
  'X-Requested-With': 'XMLHttpRequest'
}
axios.defaults.timeout = 10000
axios.defaults.retry = 1
axios.defaults.retryDelay = 1000
// 添加请求拦截器    顾名思义 就是全局请求之前拦截去配置请求头或者其他信息
axios.interceptors.request.use(config => {
  // 在发送请求之前做某事
  // var token = storejs.get('access_token')
  // if (token && router.currentRoute.name !== 'Login') {
  //   config.headers.Authorization = 'Bearer ' + token
  // }
  return config
}, error => {
  // 请求错误时做些事
  // return Promise.reject(error)
})

// 添加响应拦截器    顾名思义 就是全局请求完之后去做某些事情，比如token过期回到首页或者书写全局报错的弹出的message
axios.interceptors.response.use(response => {
  // 对响应数据做些事
  return response.data
}, err => {
  if (err.code === 'ECONNABORTED' || err.message === 'Network Error') {
    Toast.fail('The request timeout', 3); // 消息提示
  }
  let message = err.response.data.message;
  if (message) {
    Toast({
      message: message,
      duration: 2000
    });
  }
  return Promise.reject(err);

})
