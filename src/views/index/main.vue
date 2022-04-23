<template>
    <div class="info-box">
        <div class="left-box">
            <div class="top-time-box"></div>
            <div class="show-today-standard"></div>
            <div class="show-material"></div>
            <div class="show-seven-day"></div>
            <div class="show-list"></div>
        </div>
        <div class="right-box">
            <div class="top-video"></div>
            <div class="center-menu"></div>
            <div class="bottom-list"></div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.info-box
{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .show-today-standard , .show-material , .show-seven-day , .show-list , .top-video , .center-menu , .bottom-list
    {
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
        width: 100%;
    }
    .left-box
    {
        width: 45%;
        height: 100%;
        display: flex;
        align-content: space-between;
        flex-wrap: wrap;
        
        .show-today-standard
        {
            height: 25%;
        }
        .show-material
        {
            height: 16%;
        }
        .show-seven-day
        {
            height: 25%;
        }
        .show-list
        {
            height: 30%;
        }
    }
    .right-box
    {
        width: 54%;
        height: 100%;
        display: flex;
        align-content: space-between;
        flex-wrap: wrap;
        .top-video
        {
            height: 41.5%;
        }
        .center-menu
        {
            height: 14%;
        }
        .bottom-list
        {
            height: 41.5%;
        }
    }
}
</style>