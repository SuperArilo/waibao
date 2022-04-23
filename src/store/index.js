import { createStore } from 'vuex'

export default createStore({
    state: {
        routerList:[
            {
                path:'',
                title: '系统概况'
            }
        ]
    },
    getters:{
        getRouter:state => state.routerList
    },
    mutations: {
        addRouter(state, value){
            state.routerList.push(value)
        }
    },
    actions: {
    },
    modules: {
    }
})
