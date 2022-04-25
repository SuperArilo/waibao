import request from '@/util/axios.js'
import Qs from "query-string"
//主页预警结果
export const systemOverviewWarning = (params) => {
    return request({
        url: 'SystemOverviewWarning2',
        method: 'get',
        params: params,
        paramsSerializer: params => {
            return Qs.stringify(params, {arrayFormat: 'repeat'})
        }
    })
}
//根据当前动态id评论
// export const dynamicCommentSet = (query , dynamicId) => {
//     return request({
//         url: '/dynamic/comments/comment/' + dynamicId,
//         method: 'post',
//         data: query,
//     })
// }