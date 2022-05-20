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
//获取主页的监控录像
export const mainPageVideos = (params) => {
    return request({
        url: 'SystemOverviewVideo',
        method: 'get',
        params: params,
        paramsSerializer: params => {
            return Qs.stringify(params, {arrayFormat: 'repeat'})
        }
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
//安全帽违规文件导出
export const helmetViolationFile = (params) => {
    return request({
        url: 'helmetViolationOut',
        method: 'get',
        params: params,
        paramsSerializer: params => {
            return Qs.stringify(params, {arrayFormat: 'repeat'})
        }
    })
}
//着装违规查询
export const dressViolation = (params) => {
    return request({
        url: 'dressViolation',
        method: 'get',
        params: params,
        paramsSerializer: params => {
            return Qs.stringify(params, {arrayFormat: 'repeat'})
        }
    })
}
//着装违规文件导出
export const dressViolationOut = (params) => {
    return request({
        url: 'dressViolationOut',
        method: 'get',
        params: params,
        paramsSerializer: params => {
            return Qs.stringify(params, {arrayFormat: 'repeat'})
        }
    })
}
//区域违规查询
export const areaViolation = (params) => {
    return request({
        url: 'areaViolation',
        method: 'get',
        params: params,
        paramsSerializer: params => {
            return Qs.stringify(params, {arrayFormat: 'repeat'})
        }
    })
}
//区域违规文件导出
export const areaViolationOut = (params) => {
    return request({
        url: 'areaViolationOut',
        method: 'get',
        params: params,
        paramsSerializer: params => {
            return Qs.stringify(params, {arrayFormat: 'repeat'})
        }
    })
}
//异常上下架查询
export const shelvesViolation = (params) => {
    return request({
        url: 'shelvesViolation',
        method: 'get',
        params: params,
        paramsSerializer: params => {
            return Qs.stringify(params, {arrayFormat: 'repeat'})
        }
    })
}
//异常上下架导出
export const shelvesViolationOut = (params) => {
    return request({
        url: 'shelvesViolationOut',
        method: 'get',
        params: params,
        paramsSerializer: params => {
            return Qs.stringify(params, {arrayFormat: 'repeat'})
        }
    })
}
//盘点异常查询
export const findViolation = (params) => {
    return request({
        url: 'findViolation',
        method: 'get',
        params: params,
        paramsSerializer: params => {
            return Qs.stringify(params, {arrayFormat: 'repeat'})
        }
    })
}
//盘点异常导出
export const findViolationOut = (params) => {
    return request({
        url: 'findViolationOut',
        method: 'get',
        params: params,
        paramsSerializer: params => {
            return Qs.stringify(params, {arrayFormat: 'repeat'})
        }
    })
}
//堆场容量优化顶部数据
export const storageYardCount = (params) => {
    return request({
        url: 'storageYardCount',
        method: 'get',
        params: params,
        paramsSerializer: params => {
            return Qs.stringify(params, {arrayFormat: 'repeat'})
        }
    })
}
//堆场容量优化数据列表
export const storageYardCapacity = (params) => {
    return request({
        url: 'storageYardCapacity',
        method: 'get',
        params: params,
        paramsSerializer: params => {
            return Qs.stringify(params, {arrayFormat: 'repeat'})
        }
    })
}
//违规识别
export const recognitionViolation = (query) => {
    return request({
        url: 'recognitionViolation',
        method: 'post',
        data: query,
    })
}
//违规区域绘制
export const areaRecognitionViolation = (query) => {
    return request({
        url: 'areaRecognitionViolation',
        method: 'post',
        data: query,
    })
}