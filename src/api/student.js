import request from '@/util/request'

/**
 * 获取学生列表
 * @return {Promise<axios.AxiosResponse<any>>}
 */
export const getList = () => {
    return request({
        method: 'get',
        url: '/list',
    })
}
/**
 * 获取学生成绩列表
 * @return {Promise<axios.AxiosResponse<any>>}
 */
export const getListScore = () => {
    return request({
        method: 'get',
        url: '/listscores',
    })
}
/**
 * 添加
 * @return {Promise<axios.AxiosResponse<any>>}
 * @param data
 */
export const toAdd = (data) => {
    return request({
        method: 'PUT',
        url: '/add',
        data
    })
}
/**
 * 删除
 * @return {Promise<axios.AxiosResponse<any>>}
 * @param data
 */
export const toDelete = (data) => {
    return request({
        method: 'DELETE',
        url: '/delete/' + data
    })
}
/**
 * 登出
 * @return {Promise<axios.AxiosResponse<any>>}
 */
export const loginOut = () => {
    return request({
        method: 'DELETE',
        url: '/loginout',
    })
}