<template>
    <div class="info-box">
        <div class="left-box">
            <div class="show-today-standard">
                <span class="public-title" style="height: 18%">今日人员行为规范</span>
                <div class="standard-content" style="height: 82%;">
                    <div class="standard-content-sub-item">
                        <div class="left-image"></div>
                        <div class="right-span-content">
                            <span>7次</span>
                            <span>总计</span>
                        </div>
                    </div>
                    <div class="standard-content-sub-item">
                        <div class="left-image"></div>
                        <div class="right-span-content">
                            <span>7次</span>
                            <span>进入危险区域</span>
                        </div>
                    </div>
                    <div class="standard-content-sub-item">
                        <div class="left-image"></div>
                        <div class="right-span-content">
                            <span>7次</span>
                            <span>安全帽违规</span>
                        </div>
                    </div>
                    <div class="standard-content-sub-item">
                        <div class="left-image"></div>
                        <div class="right-span-content">
                            <span>7次</span>
                            <span>着装违规</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="show-material">
                <span class="public-title" style="height: 28%">今日物料盘点差错</span>
                <div class="material-content" style="height: 72%">
                    <div class="material-sub-item">
                        <div class="left-image">
                            <img src=""/>
                        </div>
                        <div class="right-span-content">
                            <span>1次</span>
                            <span>总计</span>
                        </div>
                    </div>
                    <div class="material-sub-item">
                        <div class="left-image">
                            <img src=""/>
                        </div>
                        <div class="right-span-content">
                            <span>1次</span>
                            <span>盘点不一致</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="show-seven-day">
                <span class="public-title" style="height: 18%">最近七日违规趋势</span>
            </div>
            <div class="show-list">
                <span class="public-title" style="height: 14%">总违规清单</span>
                <div class="list-show-title">
                    <span style="width: 72px;" class="list-show-title-item">序号</span>
                    <span class="list-show-title-item">摄像头编号</span>
                    <span class="list-show-title-item">时间</span>
                    <span class="list-show-title-item">违规类型</span>
                    <span class="list-show-title-item">处理办法</span>
                    <span class="list-show-title-item">详情</span>
                </div>
                <ul class="list-data-content">
                    <li v-for="item in dataList" :key="item.id">
                        <span style="width: 72px;">{{item.id}}</span>
                        <span>{{item.camera}}</span>
                        <span>{{item.time}}</span>
                        <span>{{item.class}}</span>
                        <span>{{item.need}}</span>
                        <span>{{item.infor}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="right-box">
            <div class="top-video">
                <span class="public-title" style="height: 11%">实时监控</span>
                <div class="video-content" style="height: 89%"></div>
            </div>
            <div class="center-menu">
                <span class="public-title" style="height: 38%">监控列表</span>
                <div class="videos-list" style="height: 62%">
                    <span class="videos-list-item">人员安全帽监控</span>
                    <span class="videos-list-item">人员着装监控</span>
                    <span class="videos-list-item">人员规范行为监控</span>
                    <span class="videos-list-item">物料定位监控预警</span>
                    <span class="videos-list-item">物料盘点监控预警</span>
                    <span class="videos-list-item">物料仓位监控优化预警</span>
                </div>
            </div>
            <div class="show-list">
                <span class="public-title" style="height: 11%">预警结果</span>
                <div class="list-show-title">
                    <span style="width: 72px;" class="list-show-title-item">序号</span>
                    <span class="list-show-title-item">摄像头编号</span>
                    <span class="list-show-title-item">时间</span>
                    <span class="list-show-title-item">违规类型</span>
                    <span class="list-show-title-item">处理办法</span>
                    <span class="list-show-title-item">详情</span>
                </div>
                <ul class="list-data-content" style="height: 75%">
                    <li v-for="item in dataList" :key="item.id">
                        <span style="width: 72px;">{{item.id}}</span>
                        <span>{{item.camera}}</span>
                        <span>{{item.time}}</span>
                        <span>{{item.class}}</span>
                        <span>{{item.need}}</span>
                        <span>{{item.infor}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            dataList:[
                {
                    id: 0,
                    camera: 111,
                    time: 2022-4-23,
                    class: '不带安全帽',
                    need: '带上安全帽',
                    infor:'详情'
                },
                {
                    id: 0,
                    camera: 111,
                    time: 2022-4-23,
                    class: '不带安全帽',
                    need: '带上安全帽',
                    infor:'详情'
                },
                {
                    id: 0,
                    camera: 111,
                    time: 2022-4-23,
                    class: '不带安全帽',
                    need: '带上安全帽',
                    infor:'详情'
                },
                {
                    id: 0,
                    camera: 111,
                    time: 2022-4-23,
                    class: '不带安全帽',
                    need: '带上安全帽',
                    infor:'详情'
                },
                {
                    id: 0,
                    camera: 111,
                    time: 2022-4-23,
                    class: '不带安全帽',
                    need: '带上安全帽',
                    infor:'详情'
                },
                {
                    id: 0,
                    camera: 111,
                    time: 2022-4-23,
                    class: '不带安全帽',
                    need: '带上安全帽',
                    infor:'详情'
                },
                {
                    id: 0,
                    camera: 111,
                    time: 2022-4-23,
                    class: '不带安全帽',
                    need: '带上安全帽',
                    infor:'详情'
                },
                {
                    id: 0,
                    camera: 111,
                    time: 2022-4-23,
                    class: '不带安全帽',
                    need: '带上安全帽',
                    infor:'详情'
                },
                {
                    id: 0,
                    camera: 111,
                    time: 2022-4-23,
                    class: '不带安全帽',
                    need: '带上安全帽',
                    infor:'详情'
                },
                {
                    id: 0,
                    camera: 111,
                    time: 2022-4-23,
                    class: '不带安全帽',
                    need: '带上安全帽',
                    infor:'详情'
                },
                {
                    id: 0,
                    camera: 111,
                    time: 2022-4-23,
                    class: '不带安全帽',
                    need: '带上安全帽',
                    infor:'详情'
                },
                {
                    id: 0,
                    camera: 111,
                    time: 2022-4-23,
                    class: '不带安全帽',
                    need: '带上安全帽',
                    infor:'详情'
                },
                {
                    id: 0,
                    camera: 111,
                    time: 2022-4-23,
                    class: '不带安全帽',
                    need: '带上安全帽',
                    infor:'详情'
                },
                {
                    id: 0,
                    camera: 111,
                    time: 2022-4-23,
                    class: '不带安全帽',
                    need: '带上安全帽',
                    infor:'详情'
                }
            ]
        }
    }
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
    .public-title
    {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        font-size: 14px;
        align-items: center;
        padding: 0 12px;
    }
    .public-title::before
    {
        content: "";
        display: block;
        height: 14px;
        width: 3px;
        margin-right: 8px;
        background-color: blueviolet;
    }
    .left-box
    {
        width: 46.5%;
        height: 100%;
        display: flex;
        align-content: space-between;
        flex-wrap: wrap;
        .show-today-standard
        {
            height: 25%;
            .standard-content
            {
                width: 100%;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                .standard-content-sub-item
                {
                    width: calc(100% / 2);
                    height: calc(100% / 2);
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    .left-image
                    {
                        width: 48px;
                        height: 48px;
                        margin: 0 36px;
                        background-color: aquamarine;
                        img
                        {
                            width: 100%;
                            height: 100%;
                            max-height: 100%;
                        }
                    }
                    .right-span-content
                    {
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        span
                        {
                            font-size: 14px;
                        }
                    }
                }
            }
        }
        .show-material
        {
            height: 16%;
            .material-content
            {
                width: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                .material-sub-item
                {
                    width: calc(100% / 2);
                    height: 100%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    .left-image
                    {
                        width: 48px;
                        height: 48px;
                        margin: 0 36px;
                        background-color: aquamarine;
                        img
                        {
                            height: 100%;
                            max-height: 100%;
                        }
                    }
                    .right-span-content
                    {
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        span
                        {
                            font-size: 14px;
                        }
                    }
                }
            }
        }
        .show-seven-day
        {
            height: 25%;
        }
    }
    .left-box .show-list , .right-box .show-list
    {
        height: 30%;
        .list-show-title
        {
            width: 100%;
            height: 14%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: rgb(248, 248, 248);
            .list-show-title-item
            {
                width: calc(100% / 6);
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 13px;
                font-weight: 600;
            }
        }
        .list-data-content
        {
            width: 100%;
            height: 72%;
            display: flex;
            align-content: flex-start;
            flex-wrap: wrap;
            overflow-y: scroll;
            overflow-y: overlay;
            li
            {
                width: 100%;
                height: 32px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                span
                {
                    width: calc(100% / 6);
                    text-align: center;
                    text-overflow: ellipsis;
                    white-space: normal;
                    overflow: hidden;
                    font-size: 12px;
                }
            }
        }
    }
    .right-box
    {
        width: 52.5%;
        height: 100%;
        display: flex;
        align-content: space-between;
        flex-wrap: wrap;
        .top-video
        {
            height: 42.5%;
            .video-content
            {
                width: 100%;
            }
        }
        .center-menu
        {
            height: 14%;
            .videos-list
            {
                width: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                flex-wrap: wrap;
            }
            .videos-list-item
            {
                margin: 0 8px;
                padding: 6px 10px;
                border-radius: 4px;
                background-color: rgb(24,144,255);
                color: #ffffff;
                font-size: 12px;
                cursor: pointer;
                white-space: nowrap;
            }
        }
        .show-list
        {
            height: 40.5%;
        }
    }
}
</style>