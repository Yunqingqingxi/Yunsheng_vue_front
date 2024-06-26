import request from '@/util/request'


/**
 * 登录方法
 * @param data
 * @return {Promise<axios.AxiosResponse<any>>}
 */
export const toLogin = (data) => {
    return request({
        method: 'POST',
        url: '/admin/employee/login',
        data
    })
}
/**
 * 注册方法
 * @param data
 * @return {Promise<axios.AxiosResponse<any>>}
 */
export const toRegister = (data) => {
    return request({
        method: 'POST',
        url: '/admin/employee/register',
        data
    })
}

