import axios from "axios";
import {ElMessage} from "element-plus";
import {useCounterStore} from "@/stores/counter.js";

import router from "@/router";

const instance = axios.create({baseURL: '/api'});


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
            ElMessage.error("请先登录")
            // Have problems here
            router.push('/login')
        } else {
            ElMessage.error('检查后端是否开启，redis是否连接')
        }
        return Promise.reject(error)
    }
)

export default instance