<template>
    <div class="login-box">
        <nav class="top-nav">
            <img :src="logo"/>
            <span>仓库智慧监控</span>
        </nav>
        <div class="center-function">
            <div class="left-center-image"></div>
            <div class="right-login-box">
                <span class="title">账号登陆</span>
                <form class="input-box">
                    <label class="sub-input">
                        <input type="text" v-model="userName" placeholder="请输入账号"/>
                    </label>
                    <label class="sub-input">
                        <input type="password" v-model="userPwd" placeholder="请输入密码" maxlength="16" autocomplete/>
                    </label>
                </form>
                <div class="find-password">
                    <a href="">忘记密码?</a>
                </div>
                <div class="login-button" @click="loginFunction">
                    <span v-if="!isLoginWorkNow">登录</span>
                    <i v-else class="fas fa-circle-notch fa-spin"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { login } from '@/util/api.js'
import { ElMessage } from 'element-plus'
export default {
    data(){
        return{
            logo: require('@/views/image/logo.png'),
            userName: '',
            userPwd: '',
            isLoginWorkNow: false
        }
    },
    created(){
    },
    methods:{
        loginFunction(){
            if(this.isLoginWorkNow) return
            this.isLoginWorkNow = true
            if(this.userName === ''){
                ElMessage.warning('账号不能为空！')
                this.isLoginWorkNow = false
                return
            } else if(this.userPwd === ''){
                ElMessage.warning('密码不能为空！')
                this.isLoginWorkNow = false
                return
            }
            let data = new FormData()
            data.append('usrName', this.userName)
            data.append('passWord', this.userPwd)
            login(data).then(resq => {
                if(resq.code === 200){
                    if(resq.data.token !== undefined){
                        sessionStorage.setItem('token', resq.data.token)
                        this.$router.push('/')
                    } else {
                        ElMessage.error('token 获取失败，请联系管理员！')
                    }
                    this.userName = ''
                    this.userPwd = ''
                } else {
                    ElMessage.warning(resq.message)
                }
                this.isLoginWorkNow = false
                
            }).catch(err => {
                ElMessage.error(err)
                this.isLoginWorkNow = false
            })
            
        }
    }
}
</script>
<style lang="scss" scoped>
.login-box
{
    width: 100%;
    height: 100%;
    position: relative;
    background-image: url('./image/logoBG.png');
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .top-nav
    {
        width: 100%;
        height: 65px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(rgb(0, 167, 185), rgb(5, 111, 132));
        .left-logo
        {
            height: 100%;
            max-height: 100%;
        }
        span
        {
            height: 100%;
            font-size: 28px;
            display: flex;
            align-items: center;
            color: #ffffff;
            letter-spacing: 2px;
        }
    }
    .center-function
    {
        width: 100%;
        display: flex;
        justify-content: space-around;
        .left-center-image
        {
            width: 100px;
        }
        .right-login-box
        {
            width: 440px;
            background-color: #ffffff;
            border-radius: 8px;
            padding: 24px;
            .title
            {
                width: 100%;
                height: 60px;
                font-size: 20px;
                font-weight: 600;
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
            .input-box
            {
                width: 100%;
                height: 120px;
                display: flex;
                align-content: space-between;
                flex-wrap: wrap;
                margin: 24px 0;
                .sub-input
                {
                    width: 100%;
                    height: 50px;
                    input
                    {
                        width: 100%;
                        height: inherit;
                        background-color: rgb(240, 240, 240);
                        border-radius: 4px;
                        border: none;
                        padding-left: 16px;
                        font-size: 16px;
                    }
                    input::-webkit-input-placeholder
                    {
                        font-size: 16px;
                    }
                }
            }
            .find-password
            {
                width: 100%;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                a
                {
                    display: flex;
                    align-items: center;
                    font-size: 18px;
                    color: #409EFF;
                }
            }
            .login-button
            {
                width: 100%;
                height: 60px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: rgba(2, 138, 158, 1);
                cursor: pointer;
                margin: 20px 0;
                border-radius: 4px;
                span
                {
                    font-size: 18px;
                    color: #ffffff;
                    letter-spacing: 5px;
                }
                i
                {
                    display: block;
                    font-size: 24px;
                    color: #ffffff;
                }
            }
            
        }
    }
}
</style>