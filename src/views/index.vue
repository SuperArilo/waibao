<template>
    <div class="index-system">
        <nav class="top-nav">
            <div class="left-logo-and-span">
                <img :src="logo"/>
                <span>仓库智慧监控</span>
            </div>
            <div class="right-user-function">
                <img class="show-icon" :src="userIcon"/>
                <span class="user-name">管理员</span>
            </div>
        </nav>
        <div class="system-box">
            <div class="left-system-menu">
                <div class="sub-first-menu" v-for="item in systemMenuList" :key="item.id" :class="item.id !== systemMenuIndex ? '' : systemMenuList[systemMenuIndex].subMenu === null ? 'sub-first-menu-active-no-sub-menu' : 'sub-first-menu-active-have-sub-menu'">
                    <div class="top-show-item" @click="systemMenuFunc(item.id, item.path, item.title)">
                        <div class="first-show-content">
                            <img src=""/>
                            <span>{{item.title}}</span>
                        </div>
                        <span class="first-show-content"></span>
                        <span class="menu-arrow" v-if="item.subMenu !== null"></span>
                    </div>
                     <el-collapse-transition>
                         <div class="bottom-second-menu" v-if="item.id !== systemMenuIndex ? false : item.subMenu === null ? false : true">
                            <div class="second-menu-show-item" v-for="itemSub in item.subMenu" :key="itemSub.id" :class="itemSub.id === systemSubMenuIndex ? 'second-menu-show-item-active':''" @click="secondSubMemuFunc(itemSub.id, itemSub.path, itemSub.title)">
                                <img src=""/>
                                <span>{{itemSub.title}}</span>
                            </div>
                        </div>
                     </el-collapse-transition>
                </div>
            </div>
            <div class="right-system-router" ref="systemRouter">
                <div class="right-router-title" ref="routerTitle">
                    <div class="sub-router-title-item" v-for="item in this.$store.getters.getRouter" :key="item" :class="this.$route.path === '/' + item.path ? 'sub-router-title-item-active':''">
                        <span @click="routerTitleFunc(item.path)">{{item.title}}</span>
                        <div class="right-close-tips" v-if="item.title === '系统概况' ? false : true" @click="closeRouter(item.path)"></div>
                    </div>
                </div>
                <div class="right-router-content" ref="routerContent">
                    <router-view v-slot="{ Component }" style="position: absolute;">
                        <transition enter-active-class="animate__animated router_animate-enter-active" leave-active-class="animate__animated router_animate-leave-active">
                            <component :is="Component" />
                        </transition>
                    </router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    data(){
        return {
            logo: require('@/views/image/logo.png'),
            userIcon: require('@/views/image/icon/user.png'),
            systemMenuList:[
                {
                    id: 0,
                    title: '系统概况',
                    subMenu: null,
                    path: ''
                },
                {
                    id: 1,
                    title: '违规查询',
                    subMenu: [
                        {
                            id: 0,
                            title: '安全帽违规查询',
                            path: 'hardhatcheck'
                        },
                        {
                            id: 1,
                            title: '着装违规查询',
                            path: 'clothes'
                        },
                        {
                            id: 2,
                            title: '区域检测违规查询',
                            path: 'location'
                        },
                        {
                            id: 3,
                            title: '异常上下架查询',
                            path: 'shelves'
                        },
                        {
                            id: 4,
                            title: '盘点异常查询',
                            path: 'saycheck'
                        }
                    ],
                    path: null,
                },
                {
                    id: 2,
                    title: '规范性识别',
                    path: null,
                    subMenu:[
                        {
                            id: 0,
                            title: '违规识别',
                            path: 'violationidentification'
                        },
                        {
                            id: 1,
                            title: '区域检测违规识别',
                            path: 'areaidentification'
                        }
                    ]
                },
                {
                    id: 3,
                    title: '堆场容量优化',
                    subMenu: null,
                    path: 'optimization',
                }
            ],
            systemMenuIndex: 0,
            systemSubMenuIndex: '',
        }
    },
    created(){
        let systemMenuIndex = sessionStorage.getItem('systemMenuIndex')
        let systemSubMenuIndex = sessionStorage.getItem('systemSubMenuIndex')
        if(systemMenuIndex !== null){
            this.systemMenuIndex = parseInt(systemMenuIndex)
        }
        if(systemSubMenuIndex !== null){
            this.systemSubMenuIndex = parseInt(systemSubMenuIndex)
        }
        window.addEventListener('resize', this.resetHeight)
    },
    mounted(){
        $(this.$refs.routerContent).height($(this.$refs.systemRouter).height() - $(this.$refs.routerTitle).height() - 30)
    },
    methods:{
        systemMenuFunc(id, path, title){
            if(id === this.systemMenuIndex){
                this.systemMenuIndex = ''
            } else {
                this.systemMenuIndex = id
            }
            this.systemSubMenuIndex = ''
            if(path !== null){
                this.$router.push('/' + path)
                if(this.$store.getters.getRouter.findIndex(item => item.path === path) === -1){
                    this.$store.commit('addRouter', {path: path, title: title})
                }
                
            }
            sessionStorage.setItem('systemMenuIndex', this.systemMenuIndex)
            sessionStorage.setItem('systemSubMenuIndex', this.systemSubMenuIndex)
        },
        secondSubMemuFunc(id, path, title){
            this.$router.push('/' + path)
            if(this.$store.getters.getRouter.findIndex(item => item.path === path) === -1){
                this.$store.commit('addRouter', {path: path, title: title})
            }
            this.systemSubMenuIndex = id
            sessionStorage.setItem('systemSubMenuIndex', this.systemSubMenuIndex)
        },
        routerTitleFunc(path){
            this.$router.push('/' + path)
        },
        closeRouter(path){
            let routeIndex = this.$store.getters.getRouter.findIndex(item => item.path === path)
            if(routeIndex === -1) return
            this.$store.getters.getRouter.splice(routeIndex, 1)
            let routerlist = this.$store.getters.getRouter
            if(routerlist[routeIndex] !== undefined){
                this.$router.push('/' + routerlist[routeIndex].path)
            } else if(routerlist[routeIndex -1] !== undefined){
                this.$router.push('/' + routerlist[routeIndex - 1].path)
            }
        },
        resetHeight(){
            $(this.$refs.routerContent).height($(this.$refs.systemRouter).height() - $(this.$refs.routerTitle).height() - 30)
        }
    },
    unmounted(){
        window.removeEventListener('resize', this.resetHeight)
    }
}
</script>
<style lang="scss" scoped>
.index-system
{
    width: 100%;
    height: 100%;
    position: relative;
    .top-nav
    {
        width: 100%;
        height: 65px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        background: linear-gradient(rgb(0, 167, 185), rgb(5, 111, 132));
        .left-logo-and-span
        {
            height: inherit;
            display: flex;
            align-items: center;
            img
            {
                height: inherit;
                max-height: 100%;
            }
            span
            {
                height: inherit;
                font-size: 28px;
                display: flex;
                align-items: center;
                color: #ffffff;
                letter-spacing: 2px;
            }
        }
        .right-user-function
        {
            height: inherit;
            display: flex;
            align-items: center;
            margin-right: 18px;
            .show-icon
            {
                width: 18px;
                height: 18px;
                margin: 0 18px;
            }
            .user-name
            {
                height: inherit;
                display: flex;
                align-items: center;
                font-size: 12px;
                color: #ffffff;
                font-weight: 400;
                color: rgb(199,230,234);
            }
        }
    }
    .system-box
    {
        width: 100%;
        height: 100%;
        padding-top: 65px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .left-system-menu
        {
            width: 200px;
            position: fixed;
            min-width: 200px;
            height: 100%;
            left: 0;
            top: 65px;
            z-index: 8;
            background-color: #ffffff;
            .sub-first-menu
            {
                width: 100%;
                cursor: pointer;
                border-bottom: solid 1px rgb(240, 245, 240);
                .top-show-item
                {
                    width: 100%;
                    height: 40px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 12px 0 20px;
                    .first-show-content
                    {
                        height: inherit;
                        display: flex;
                        align-items: center;
                        img
                        {
                            width: 16px;
                            height: 16px;
                            margin-right: 8px;
                        }
                        span
                        {
                            font-size: 14px;
                        }
                    }
                    .menu-arrow
                    {
                        border-bottom: 8px solid rgb(57, 57, 57);
                        border-left: 5.5px solid transparent;
                        border-right: 5.5px solid transparent;
                        transition: all 0.3s;
                    }
                }
                .top-show-item:hover
                {
                    background-color: rgba(0, 169, 187, 1);
                    color: #ffffff;
                }
                .bottom-second-menu
                {
                    width: 100%;
                    overflow: hidden;
                    .second-menu-show-item
                    {
                        width: 100%;
                        height: 40px;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        padding-left: 40px;
                        img
                        {
                            width: 16px;
                            height: 16px;
                        }
                        span
                        {
                            font-size: 14px;
                        }
                    }
                    .second-menu-show-item:hover
                    {
                        background-color: rgba(0, 169, 187, 1);
                        span
                        {
                            color: #ffffff;
                        }
                    }
                    .second-menu-show-item-active
                    {
                        background-color: rgba(0, 169, 187, 1);
                        span
                        {
                            color: #ffffff;
                        }
                    }
                }
            }
            .sub-first-menu-active-no-sub-menu
            {
                background-color: rgba(0, 169, 187, 1);
                color: #ffffff;
            }
            .sub-first-menu-active-have-sub-menu
            {
                .top-show-item
                {
                    background-color: rgba(0, 169, 187, 1);
                    color: #ffffff;
                }
                .menu-arrow
                {
                    transform: rotate(180deg);
                }
            }
        }
        .right-system-router
        {
            width: 100%;
            min-height: 100%;
            margin-left: 200px;
            background-color: rgb(240, 240, 240);
            padding: 0 10px;
            .right-router-title
            {
                width: 100%;
                display: flex;
                justify-content: flex-start;
                flex-wrap: wrap;
                background-color: #ffffff;
                margin: 10px 0;
                .sub-router-title-item
                {
                    min-width: 120px;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0 12px;
                    cursor: pointer;
                    span
                    {
                        height: 100%;
                        display: flex;
                        align-items: center;
                        font-size: 12px;
                    }
                    .right-close-tips
                    {
                        width: 12px;
                        min-width: 12px;
                        height: inherit;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-left: 12px;
                    }
                    .right-close-tips::before
                    {
                        content: "×";
                        display: block;
                        font-size: 22px;
                    }
                }
                .sub-router-title-item-active
                {
                    border-bottom: solid 2px rgba(0, 169, 187, 1);
                    span
                    {
                        color: rgba(0, 169, 187, 1);
                        margin-top: 2px;
                    }
                    .right-close-tips
                    {
                        margin-top: 2px;
                    }
                }
            }
            .right-router-content
            {
                width: 100%;
                background-color: #ffffff;
                margin-bottom: 10px;
                position: relative;
                .router_animate-enter-active
                {
                    animation: slideInLeft 0.6s;
                }
                .router_animate-leave-active
                {
                    animation: slideOutRight 0.6s;
                }
            }
        }
    }
}
</style>