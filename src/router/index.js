import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/login',
        name: '登陆',
        component: () => import('@/views/login.vue')
    },
    {
        path: '/',
        name: '主页',
        component: () => import('@/views/index.vue'),
        beforeEnter(to, from, next){
            if(localStorage.getItem('token') === null && sessionStorage.getItem('token') === null){
                next('/login')
            } else {
                next()
            }
        },
        children:[
            //系统首页
            {
                path: '',
                component: () => import('@/views/index/main.vue')
            },
            //堆场容量优化
            {
                path: 'optimization',
                component: () => import('@/views/index/optimization.vue')
            },
            //安全帽违规查询
            {
                path: 'hardhatcheck',
                component: () => import('@/views/violationCheck/hardHatCheck.vue')
            },
            //着装检测
            {
                path: 'clothes',
                component: () => import('@/views/violationCheck/clothes.vue')
            },
            //区域检测违规异常
            {
                path: 'location',
                component: () => import('@/views/violationCheck/location.vue')
            },
            //盘点异常查询
            {
                path: 'saycheck',
                component: () => import('@/views/violationCheck/sayCheck.vue')
            },
            //异常上下架查询
            {
                path: 'shelves',
                component: () => import('@/views/violationCheck/shelves.vue')
            },
            //违规识别
            {
                path: 'violationidentification',
                component: () => import('@/views/normative/violationIdentification.vue')
            },
            //区域检测违规识别
            {
                path: 'areaidentification',
                component: () => import('@/views/normative/areaIdentification.vue')
            },
            //物料盘点
            {
                path: 'materialInventory',
                component: () => import('@/views/normative/materialInventory.vue')
            },
            //匹配违规路由
            {
                path: '/:pathMatch(.*)',
                redirect: '/'
            }
        ]
    }
]

const router = createRouter({history: createWebHistory(process.env.BASE_URL), routes})

export default router
