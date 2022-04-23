<template>
    <div class="main-content">
        <router-view/>
    </div>
</template>
<script>
import 'animate.css'
export default {
    created(){
        if(sessionStorage.getItem('routerTitle') !== null){
            this.$store.commit('setRouter', JSON.parse(sessionStorage.getItem('routerTitle')))
        }
        window.addEventListener('beforeunload', () => {
            sessionStorage.setItem('routerTitle', JSON.stringify(this.$store.getters.getRouter))
        })
    }
}
</script>
<style lang="scss">
*
{
    box-sizing: border-box;
}
ul , li
{
    margin: 0;
    padding: 0;
    list-style: none;
}
body , html
{
    margin: 0;
    padding: 0;
    min-width: 1400px;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
}
a
{
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -moz-user-focus: none;
}
input
{
    outline: none;
}
img
{
    max-width: 100%;
}
span , p
{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
#app
{
    width: 100%;
    height: 100%;
    .main-content
    {
        width: 100%;
        height: 100%;
    }
}
</style>
