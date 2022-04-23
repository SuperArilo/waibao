<template>
    <div class="main-content">
        <router-view/>
    </div>
</template>
<style lang="scss">
*
{
    box-sizing: border-box;
}
body , html
{
    margin: 0;
    padding: 0;
    min-width: 1400px;
    width: 100%;
    height: 100%;
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
