import request from "@/util/request.js";

/**
 * 修改分类
 * @returns response{code,data.msg}
 * @param data{
 * {
 * id:integer,
 * name:string,
 * sort:integer,
 * type:integer}}
 */
export const category = (data) => {
    return request({
        method: "PUT",
        url: "admin/category",
        data
    })
}

/**
 * 分类分页查询
 * @param data{
 * {name:string,require:false},
 * {page:integer,require:true},
 * {pageSize:integer,require:true},
 * {type:integer,require:false}}
 * @returns
 */
export const page = (data) => {
    return request({
        method: "GET",
        url: "admin/category/page",
        data
    })
}
/**
 * 启用，禁用分类
 * @param status
 * @return {*}
 */
export const status = (status) => {
    return request({
        method: "POST",
        url: "admin/category/status/" + status
    })
}
/**
 * 新增分类
 */
export const categoryList = (data) => {
    return request({
        method: "POST",
        url: "admin/category",
        data
    })
}

/**
 * 根据id删除分类
 * @param data{{id}}
 */
export const categoryDetail = (data) => {
    return request({
        method: "DELETE",
        url: "admin/category",
        data
    })

}
/**
 * 根据类型查询分支
 * @param data{{type}}
 */
export const categoryDetailList = (data) => {
    return request({
        method: "GET",
        url: "admin/category/list",
        data
    })
}
