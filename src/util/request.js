import axios from "axios";
import {ElMessage} from "element-plus";
import {useCounterStore} from "@/stores/counter.js";

import router from "@/router";

const instance = axios.create(
    {
        baseURL: '/api',
        timeout: 15000,
        headers: {
            'Content-Type': 'application/json'
        }
    }
);
/**
 *  请求拦截器
 */
instance.interceptors.request.use(
    config => {

        const store = useCounterStore();

        if (store.token) {
            config.headers.Authorization = store.token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

/**
 *  响应拦截器
 */

instance.interceptors.response.use(
    result => {
        if (result.data.code === 0) {
            return result.data
        }
        ElMessage.error(result.data.msg ? result.data.msg : '服务异常1')
        return Promise.reject(result.data)

    },
    error => {
        if (error.response.status === 401) {
            ElMessage.error("未知错误")
            // Have problems here
            router.push('/login')
        }
        if (error.code === 'ECONNABORTED' && error.message.includes('timeout')) {
            ElMessage.error('请求超时，请稍后再试');
        } else {
            ElMessage.error("无法连接到服务器")
        }
        return Promise.reject(error)
    }
)

export default instance