/*
axios请求封装
使用需求：
1.安装axios
  npm install axios –S
2.安装antd的message组件
  可改用其他消息通知组件
 */

import axios from 'axios'
import {getCookie} from './Cookie'

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API,//域名或IP
  timeout: 15000 // 请求超时时间
})
axios.defaults.withCredentials = true

// request拦截器
service.interceptors.request.use(config => {
  // 设置请求头
  
  config.headers['X-caping-uid'] = getCookie('uid')
  config.headers['X-caping-device-id'] = getCookie('did')

  return config
}, error => {
  console.error(error) 
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if(res.code){
        if (res.code !== 0) {
          // 错误提示
            console.log(res)
        }
    }
    return response.data
  },
  error => {
    // 错误提示
    console.log(error)
  }
)

export default service
