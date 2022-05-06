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
//登录操作
export const login = (query) => {
    return request({
        url: '/getToken',
        method: 'post',
        data: query,
    })
}
//今日行为规范
export const statisticalToday = () => {
    return request({
        url: 'SystemOverviewStatistical',
        method: 'get',
    })
}
//今日物料盘点差错
export const materialToday = () => {
    return request({
        url: 'SystemOverviewMaterial',
        method: 'get',
    })
}
//七日违规
export const weekStatistical = () => {
    return request({
        url: 'SystemOverviewWeekInconsistency',
        method: 'get',
    })
}
//总违规清单
export const totalList = () => {
    return request({
        url: 'SystemOverviewTotal',
        method: 'get',
    })
}
//安全帽违规查询
export const helmetViolation = (params) => {
    return request({
        url: 'helmetViolation',
        method: 'get',
        params: params,
        paramsSerializer: params => {
            return Qs.stringify(params, {arrayFormat: 'repeat'})
        }
    })
}