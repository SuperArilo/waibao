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
                        <input type="text" placeholder="请输入账号"/>
                    </label>
                    <label class="sub-input">
                        <input type="password" placeholder="请输入密码" maxlength="16" autocomplete/>
                    </label>
                </form>
                <div class="find-password">
                    <a href="">忘记密码?</a>
                </div>
                <span class="login-button" @click="loginFunction">登陆</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            logo: require('@/views/image/logo.png')
        }
    },
    methods:{
        loginFunction(){
            sessionStorage.setItem('token', 'test')
            this.$router.push('/')
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
                font-size: 18px;
                color: #ffffff;
                background-color: rgba(2, 138, 158, 1);
                cursor: pointer;
                margin: 20px 0;
                border-radius: 4px;
                letter-spacing: 5px;
            }
        }
    }
}
</style>