<template>
    <div class="info-box">
        <div class="left-box">
            <div class="show-today-standard">
                <span class="public-title" style="height: 18%">今日人员行为规范</span>
                <div class="standard-content" style="height: 82%;" v-loading="this.statisticalLiist === ''">
                    <div class="standard-content-sub-item">
                        <div class="left-image">
                            <img :src="totayToday"/>
                        </div>
                        <div class="right-span-content">
                            <span>{{this.statisticalLiist.total}}次</span>
                            <span>总计</span>
                        </div>
                    </div>
                    <div class="standard-content-sub-item">
                        <div class="left-image">
                            <img :src="dangerLocation"/>
                        </div>
                        <div class="right-span-content">
                            <span>{{this.statisticalLiist.dangerZone}}次</span>
                            <span>进入危险区域</span>
                        </div>
                    </div>
                    <div class="standard-content-sub-item">
                        <div class="left-image">
                            <img :src="hatTotal"/>
                        </div>
                        <div class="right-span-content">
                            <span>{{this.statisticalLiist.helmetViolation}}次</span>
                            <span>安全帽违规</span>
                        </div>
                    </div>
                    <div class="standard-content-sub-item">
                        <div class="left-image">
                            <img :src="clothesTotal"/>
                        </div>
                        <div class="right-span-content">
                            <span>{{this.statisticalLiist.dressViolation}}次</span>
                            <span>着装违规</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="show-material">
                <span class="public-title" style="height: 28%">今日物料盘点差错</span>
                <div class="material-content" style="height: 72%" v-loading="this.materialList === ''">
                    <div class="material-sub-item">
                        <div class="left-image">
                            <img :src="materialTotal"/>
                        </div>
                        <div class="right-span-content">
                            <span>{{this.materialList.total}}次</span>
                            <span>总计</span>
                        </div>
                    </div>
                    <div class="material-sub-item">
                        <div class="left-image">
                            <img :src="materialBYZ"/>
                        </div>
                        <div class="right-span-content">
                            <span>{{this.materialList.InventoryInconsistency}}次</span>
                            <span>盘点不一致</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="show-seven-day">
                <span class="public-title" style="height: 18%">最近七日违规趋势</span>
                <div class="echars-box" ref="echartsRef">
                </div>
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
                <ul class="list-data-content" v-loading="totalList.length === 0">
                    <li v-for="item in totalList" :key="item.id">
                        <span style="width: 72px;">{{item.pushId}}</span>
                        <span>{{item.pushCameraId}}</span>
                        <span>{{item.pushTime}}</span>
                        <span>{{item.pushViolationType}}</span>
                        <span>{{item.violationDispose}}</span>
                        <span @click="showBigImage(item.violationImg)">详情</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="right-box">
            <div class="top-video">
                <span class="public-title" style="height: 11%">实时监控</span>
                <div class="video-content" style="height: 89%" v-loading="videosOptions === ''">
                <videoPlay v-if="videosOptions !== ''" v-bind="videosOptions"/>
                </div>
            </div>
            <div class="center-menu">
                <span class="public-title" style="height: 38%">监控列表</span>
                <div class="videos-list" style="height: 62%">
                    <span class="videos-list-item" v-for="item in videosList" :key="item.id" @click="changeVideo(item.id)">{{item.title}}</span>
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
                <ul class="list-data-content" style="height: 75%" v-loading="this.earlyWarningList.length === 0">
                    <li v-for="item in earlyWarningList" :key="item.id">
                        <span style="width: 72px;">{{item.pushId}}</span>
                        <span>{{item.pushCameraId}}</span>
                        <span>{{item.pushTime}}</span>
                        <span>{{item.pushViolationType}}</span>
                        <span>{{item.violationDispose}}</span>
                        <span @click="showBigImage(item.violationImg)">详情</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { showImages } from 'vue-img-viewr'
import 'vue-img-viewr/styles/index.css'
import { systemOverviewWarning , statisticalToday , materialToday , weekStatistical , mainPageVideos , totalList } from '@/util/api.js'
import { ElMessage } from 'element-plus'
import * as echarts from 'echarts'
import 'vue3-video-play/dist/style.css'
import { videoPlay } from 'vue3-video-play'
export default {
    components: {
        videoPlay
    },
    data(){
        return{
            //今日行为规范
            materialList: '',
            statisticalLiist: '',
            //总违规清单
            //实时监控切换
            videosOptions : '',
            videosList:[
                {
                    id: 1,
                    title: '人员安全帽监控'
                },
                {
                    id: 2,
                    title: '人员着装监控'
                },
                {
                    id: 3,
                    title: '人员规范行为监控'
                },
                {
                    id: 4,
                    title: '物料定位监控预警'
                },
                {
                    id: 5,
                    title: '物料盘点监控预警'
                },
                {
                    id: 6,
                    title: '物料仓位监控优化预警'
                }
            ],
            totalList: '',
            //预警结果
            earlyWarningList:[],
            totayToday: require('@/views/image/icon/todayTotal.jpeg'),
            dangerLocation: require('@/views/image/icon/dangerLocation.jpeg'),
            hatTotal: require('@/views/image/icon/hatTotal.jpeg'),
            clothesTotal: require('@/views/image/icon/clothesTotal.jpeg'),
            materialTotal: require('@/views/image/icon/materialTotal.jpeg'),
            materialBYZ: require('@/views/image/icon/materialBYZ.jpeg'),
        }
    },
    created(){
        this.getStatistical()
        this.getMaterial()
        this.getWeekStatistical()
        this.getTotalList()
        this.getVideosToday(1)
        this.getEarlyWarning()
    },
    mounted(){

    },
    methods:{
        getMaterial(){
            materialToday().then(resq => {
                if(resq.code === 200){
                    this.materialList = resq.data
                } else {
                    ElMessage.warning(resq.message)
                }
            }).catch(err => {
                ElMessage.error(err.message)
            })
        },
        getStatistical(){
            statisticalToday().then(resq => {
                if(resq.code === 200){
                    this.statisticalLiist = resq.data
                } else {
                    ElMessage.warning(resq.message)
                }
            }).catch(err => {
                ElMessage.error(err.message)
            })
        },
        getWeekStatistical(){
            weekStatistical().then(resq => {
                if(resq.code === 200){
                    let chars = echarts.init(this.$refs.echartsRef)
                    chars.setOption({
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            data: [ '人', '物料']
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            data: resq.data.date
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [
                            {
                                name: '人',
                                type: 'line',
                                stack: 'Total',
                                data: resq.data.people
                            },
                            {
                                name: '物料',
                                type: 'line',
                                stack: 'Total',
                                data: resq.data.material
                            },
                        ]
                    })
                    window.onresize = function () {
                        chars.resize()
                    }
                } else {
                    ElMessage.warning(resq.message)
                }
            }).catch(err => {
                ElMessage.error(err.message)
            })
        },
        getTotalList(){
            totalList().then(resq => {
                if(resq.code === 200){
                    this.totalList = resq.data.list
                } else {
                    ElMessage.warning(resq.message)
                    this.$router.push('/login')
                }
            }).catch(err => {
                ElMessage.error(err.message)
            })
        },
        getVideosToday(cameraId){
            mainPageVideos({CameraId: cameraId}).then(resq => {
                if(resq.code === 200){
                    if(this.videosOptions === ''){
                        this.videosOptions = {
                            width: '100%', //播放器高度
                            height: '100%', //播放器高度
                            color: "#409eff", //主题色
                            title: '', //视频名称
                            src: resq.data.videoPath, //视频源
                            muted: false, //静音
                            webFullScreen: false,
                            speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
                            autoPlay: false, //自动播放
                            loop: false, //循环播放
                            mirror: false, //镜像画面
                            ligthOff: false,  //关灯模式
                            volume: 0.3, //默认音量大小
                            control: true, //是否显示控制
                            controlBtns:['audioTrack', 'quality', 'speedRate', 'volume', 'setting', 'pip', 'pageFullScreen', 'fullScreen'] //显示所有按钮,
                        }
                    } else {
                        this.videosOptions.src = resq.data.videoPath
                    }
                } else {
                    ElMessage.warning(resq.message)
                }
            }).catch(err => {
                ElMessage.error(err.message)
            })
        },
        changeVideo(id){
            this.getVideosToday(id)
        },
        getEarlyWarning(){
            systemOverviewWarning({CameraId: 1000}).then(resq => {
                if(resq.code === 200){
                    this.earlyWarningList = resq.data.list
                } else {
                    ElMessage.warning(resq.message)
                }
            }).catch(err => {
                ElMessage.error(err)
            })
        },
        showBigImage(image){
            showImages({urls: [image], index: 0, onClose: () => {}})
        },
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
            height: 24%;
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
            height: 26%;
            .echars-box
            {
                width: 100%;
                height: 82%;
            }
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
                span:last-child
                {
                    color: #00A9BB;
                    cursor: pointer;
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