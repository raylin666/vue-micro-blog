import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Message } from '@arco-design/web-vue'
import debug from '@/utils/env'
import { HttpResponse } from '@/types/global'

// 请求拦截器 (在请求之前进行的配置)
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // let each request carry token
    // this example using the JWT token
    // Authorization is a custom headers key
    // please modify it according to the actual situation
    return config
  },
  error => {
    // do something
    return Promise.reject(error)
  }
)

// 响应拦截器 (在响应之后对数据进行处理)
axios.interceptors.response.use(
  (response: AxiosResponse<HttpResponse>) => {
    // 调试模式打印请求响应数据
    if (debug) {
      console.log(response)
    }

    return response
  },
  error => {
    // 调试模式打印请求响应数据
    if (debug) {
      console.log(error.response)
    }

    // error.response.data 为错误响应信息
    const response = error.response.data

    Message.error({
      content: response.message || '接口请求错误',
      duration: 5 * 1000
    })

    return Promise.reject(error)
  }
)
