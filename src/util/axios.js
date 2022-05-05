import axios from 'axios'
axios.defaults.withCredentials = false
const service = axios.create({
    baseURL: 'http://121.41.98.209:18989/',
    timeout: 15000
})
service.interceptors.request.use(config => {
    if(sessionStorage.getItem('token') === null){
        return config
    }
    if(sessionStorage.getItem('token')){
        config.headers.token = sessionStorage.getItem('token')
        return config
    }
}, error => {
    return Promise.reject(error.response.data)
})
service.interceptors.response.use( response => {
        if(response.data.code === 401 || response.data.code === 403){
            sessionStorage.removeItem('token')
        }
        return Promise.resolve(response.data)
    }, error => {
        if(error.response){
            return Promise.reject(error.response.data)
        } else {
            error.message = '网络错误!'
            return Promise.reject(error)
        }
    }
)
export default service