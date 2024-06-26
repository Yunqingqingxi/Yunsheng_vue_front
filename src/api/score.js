import request from '@/util/request'

/**
 * 获取评价为A的学生
 * @return {Promise<axios.AxiosResponse<any>>}
 */
export const getStuAList = () => {
    return request({
        method: 'get',
        url: '/listA',
    })
}
/**
 * 获取评价为B的学生
 * @return {*}
 */
export const getStuBList = () => {
    return request({
        method: 'get',
        url: '/listB',
    })
}

/**
 * 添加数据
 * @param data
 * @return {*}
 */
export const toAdd = (data) => {
    return request({
        method: 'PUT',
        url: '/addA',
        data
    })
}

/**
 * 删除数据
 * @return {Promise<axios.AxiosResponse<any>>}
 * @param data
 */
export const toDelete = (data) => {
    return request({
        method: 'DELETE',
        url: '/delA/' + data
    })
}
/**
 * 登出
 * @return {Promise<axios.AxiosResponse<any>>}
 */
export const loginOut = () => {
    return request({
        method: 'DELETE',
        url: '/loginoutA',
    })
}