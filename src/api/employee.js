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
export const getEmplist = (data) => {
    return request({
        method: 'Get',
        url: `/admin/employee/page?page=1&pageSize=10`,

    })
}

export const addEmprequset = (data) => {
    return request({
        method: 'POST',
        url: '/admin/employee',
        data
    })
}

export const deleteEmp = (row) => {
    if(row.status === 1) {
        row.status = 0;  // 如果状态是 1，将其设置为 0
    } else if(row.status === 0) {
        row.status = 1;  // 如果状态是 0，将其设置为 1
    }

    return request.post(`/admin/employee/status/${row.id}?status=${row.status}`)
}

export const editEmpinfo = (data) => {
    return request.put('/admin/employee', data)

}


