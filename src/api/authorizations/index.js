import axios from 'axios'
import qs from 'qs'
import {
  backstageAuthorizations,
  backstageAuthorizationsCurrent,
  backstagedminsMenu,
  backstageAdminChangePassword
} from './menu'

// 登陆 post
export const loginInHttp = (data) => {
  return axios.post(backstageAuthorizations, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res)
    })
}
// 登出 delete
export const logoutHttp = (data) => {
  return axios.delete(backstageAuthorizationsCurrent, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res)
    })
}
// 菜单 get
export const backstagedminsMenuHttp = (data) => {
  return axios.get(backstagedminsMenu, {params: data})
    .then((res) => {
      return Promise.resolve(res)
    })
}
// 修改admin密码  patch
export const backstageAdminChangePasswordHttp = (data) => {
  return axios.patch(backstageAdminChangePassword, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res)
    })
}




// 反向代理的地址在 config文件的index里头

// 这是个例子 get方法  这是针对单个请求进行配置 如果要配置全局的请移步axios的index文件
export const getExample = (data) => {
  return axios.get('url', {
    params: data, // 还有其他配置可以  参考 http://www.axios-js.com/zh-cn/docs/#%E8%AF%B7%E6%B1%82%E9%85%8D%E7%BD%AE
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then((res) => {
      return Promise.resolve(res)
    })
}
// 这是个例子 post 方法 一些安全的方法需要用qs包装数据  这是针对单个请求进行配置 如果要配置全局的请移步axios的index文件
export const postExample = (data) => {
  return axios.post('url', qs.stringify(data), {
    headers: {'device': 2} // 还有其他配置可以  参考 http://www.axios-js.com/zh-cn/docs/#%E8%AF%B7%E6%B1%82%E9%85%8D%E7%BD%AE
  })
    .then((res) => {
      return Promise.resolve(res);
    });
}
// 一般情况下只有get 和 post 会进行一些特殊配置   其他方法delete patch 等等一般不会去配置
