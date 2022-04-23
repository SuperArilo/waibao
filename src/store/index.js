import { createStore } from 'vuex'

export default createStore({
    state: {
        routerList:[
            {
                path:'',
                title: '系统概况'
            }
        ],
        saveState:''
    },
    getters:{
        getRouter:state => state.routerList,
        getSaveState:state => state.saveState
    },
    mutations: {
        addRouter(state, value){
            state.routerList.push(value)
        },
        setSaveState(state, value){
            state.saveState = value
        },
        setRouter(state, value){
            state.routerList = value
        },
    },
    actions: {
    },
    modules: {
    }
})
