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
/**
 * 获取员工列表
 * @param data
 * @return {Promise<axios.AxiosResponse<any>>}
 */
export const getEmplist = (data) => {
    return request({
        method: 'Get',
        url: '/admin/employee/page?page=1&pageSize=10',

    })
}
/**
 * 修改员工信息
 * @param data
 * @return {Promise<axios.AxiosResponse<any>>}
 */
export const addEmprequset = (data) => {
    return request({
        method: 'POST',
        url: '/admin/employee',
        data
    })
}
/**
 * 修改员工信息
 * @param id
 * @return {Promise<axios.AxiosResponse<any>>}
 */
export const deleteEmp = ({name}) => {
    return request({
        method: 'DELETE',
        url: `/admin/employee/${name}`,
    })
}




