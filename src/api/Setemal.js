import request from "@/util/request.js";

export const page = (data) => {
    return request({
        method: 'Get',
        url: `/admin/setmeal/page?page=1&pageSize=10`,

    })
}