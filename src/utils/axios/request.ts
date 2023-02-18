import axios from 'axios'
import { Message } from '@arco-design/web-vue'

const instance = axios.create({
    baseURL: '',
    timeout: 5000
})

instance.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    response => {
        if ((response.status != 200) || response.data.code) {
            const defaultMessage = '内部未知错误'
            Message.error({
                content: response.data.message || defaultMessage,
                duration: 5 * 1000,
            })

            return Promise.reject(new Error(response.data.message || defaultMessage))
        }

        return response
    },
    error => {
        console.log('错误信息:' + error)   // for debug

        let errMsg = error.message
        if (error.response.data.message) {
            errMsg = '业务错误- ' + error.response.data.message
        }

        Message.error({
            content: errMsg,
            duration: 5 * 1000,
        })

        return Promise.reject(error)
    }
)

export default instance
