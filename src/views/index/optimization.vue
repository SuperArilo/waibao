<template>
    <div class="hard-hat-check">
        <div class="title-function" v-loading="this.topData === ''">
            <div class="sub-show-stack" v-if="this.topData !== ''">
                <span class="stack-title">优化前</span>
                <div class="juti-content">
                    <div class="left-image">
                        <img :src="optimizationBeftore"/>
                    </div>
                    <div class="right-show-stack-data">
                        <span class="show-now-tips">已用容量: {{this.topData.beforeOptimization.before}}% / 可用容量: {{this.topData.beforeOptimization.after}}%</span>
                        <div class="bar-box">
                            <div class="true-bar" :style="{width: this.topData.beforeOptimization.before + '%'}"></div>
                        </div>
                        <span class="show-now-bottom-tips">堆场总容量: {{this.topData.YardCapacity}}</span>
                    </div>
                </div>
            </div>
            <div class="sub-show-stack" v-if="this.topData !== ''">
                <span class="stack-title">优化后</span>
                <div class="juti-content">
                    <div class="left-image">
                        <img :src="optimizationAfter"/>
                    </div>
                    <div class="right-show-stack-data">
                        <span class="show-now-tips">已用容量: {{this.topData.afterOptimization.before}}% / 可用容量: {{this.topData.afterOptimization.after}}%</span>
                        <div class="bar-box">
                            <div class="true-bar" :style="{width: this.topData.afterOptimization.before + '%'}"></div>
                        </div>
                        <span class="show-now-bottom-tips">堆场总容量: {{this.topData.YardCapacity}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="data-show-content">
            <div class="data-function-box">
                <label class="item-input-box">
                    <span>仓库:</span>
                    <select v-model="areaInfo">
                        <option v-for="item in areaInfoList" :key="item.id" :value="item.value">{{item.title}}</option>
                    </select>
                </label>
                <span class="item-button" @click="getStorageYardCapacity">实时优化</span>
            </div>
            <div class="data-show-list-title">
                <span style="width: 128px">序号</span>
                <span>堆场</span>
                <span>建议时间</span>
                <span>已用容量</span>
                <span>可优化容量</span>
                <span>建议优化详情</span>
            </div>
            <ul class="data-show-list" v-loading="(this.searchWorkNow === true && this.dataList.length === 0) || (this.changePageWorkNow === true)">
                <li v-for="item in dataList" :key="item.id">
                    <span style="width: 128px;">{{item.pushId}}</span>
                    <span>{{item.pushArea}}</span>
                    <span>{{item.pushTime}}</span>
                    <span>{{item.beforeCapacity}}</span>
                    <span>{{item.storageCapacity}}</span>
                    <span @click="showImage(item.imageFinalPath)">详情</span>
                </li>
            </ul>
            <div class="data-change-page-box">
                <el-pagination small background layout="total, sizes, prev, pager, next, jumper" :total="dataTotal" :v-model="pageSize" @current-change="changePage" @size-change="changeSize" v-if="this.dataList.length !== 0"/>
            </div>
        </div>
    </div>
</template>
<script>
import { storageYardCapacity , storageYardCount } from '@/util/api.js'
import { ElMessage } from 'element-plus'
import { showImages } from 'vue-img-viewr'
import 'vue-img-viewr/styles/index.css'
export default {
    data(){
        return{
            topData:'',
            areaInfoList:[
                {
                    id: 0,
                    title: 'A区',
                    value: 'A区'
                },
                {
                    id: 1,
                    title: 'B区',
                    value: 'B区'
                }
            ],
            areaInfo: '',
            pageNumber: 1,
            pageSize: 10,
            dataTotal: 10,
            searchWorkNow: false,
            changePageWorkNow: false,
            dataList:[],
            optimizationBeftore: require('@/views/image/icon/optimizationBeftore.jpeg'),
            optimizationAfter: require('@/views/image/icon/optimizationAfter.jpeg'),
        }
    },
    created(){
        storageYardCount().then(resq => {
            if(resq.code === 200) {
                this.topData = resq.data
            } else {
                ElMessage.warning(resq.message)
            }
        }).catch(err => {
            ElMessage.error(err.message)
        })
    },
    methods:{
        getStorageYardCapacity(){
            if(this.searchWorkNow) return
            this.searchWorkNow = true
            if(this.areaInfo === ''){
                ElMessage.warning('请选择仓库！')
                this.searchWorkNow = false
                return
            }
            storageYardCapacity({warePath: this.areaInfo, pageNumber: this.pageNumber, pageSize: this.pageSize}).then(resq => {
                if(resq.code === 200){
                    this.dataList = resq.data.list
                    this.dataTotal = resq.data.total
                } else {
                    ElMessage.warning(resq.message)
                }
                this.searchWorkNow = false
            }).catch(err => {
                ElMessage.error(err.message)
                this.searchWorkNow = false
            })
        },
        changePage(e){
            this.pageNumber = e
            this.getDataList()
        },
        changeSize(e){
            this.pageSize = e
            this.getDataList()
        },
        getDataList(){
            if(this.changePageWorkNow) return
            this.changePageWorkNow = true
            storageYardCapacity({warePath: this.areaInfo, pageNumber: this.pageNumber, pageSize: this.pageSize}).then(resq => {
                if(resq.code === 200){
                    this.dataList = resq.data.list
                    this.dataTotal = resq.data.total
                } else {
                    ElMessage.warning(resq.message)
                }
                this.changePageWorkNow = false
            }).catch(err => {
                ElMessage.error(err.message)
                this.changePageWorkNow = false
            })
        },
        showImage(baseImage){
            showImages({urls: [baseImage], index: 0, onClose: () => {}})
        },
    }
}
</script>
<style lang="scss" scoped>
.hard-hat-check
{
    width: 100%;
    height: 100%;
    .title-function
    {
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 32px;
        min-height: 99px;
        border-bottom: dashed 1px rgb(204, 204, 204);
        padding: 18px;
        .sub-show-stack
        {
            height: 100%;
            display: flex;
            flex-direction: column;
            margin-right: 48px;
            .stack-title
            {
                height: 25%;
                font-size: 18px;
                font-weight: 600;
                display: flex;
                align-items: center;
            }
            .juti-content
            {
                height: 75%;
                display: flex;
                justify-content: center;
                align-items: center;
                .left-image
                {
                    width: 120px;
                    height: 120px;
                    background-color: #00A9BB;
                    img
                    {
                        width: 100%;
                        height: 100%;
                        max-height: 100%;
                    }
                }
                .right-show-stack-data
                {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin-left: 16px;
                    .show-now-tips
                    {
                        font-size: 16px;
                        color: #333333;
                    }
                    .bar-box
                    {
                        width: 280px;
                        height: 20px;
                        border-radius: 25px;
                        background-color: rgba(0, 0, 0, 0.1);
                        margin: 16px 0;
                        position: relative;
                        overflow: hidden;
                        .true-bar
                        {
                            height: inherit;
                            position: absolute;
                            top: 0;
                            left: 0;
                            border-radius: 25px;
                            background-color: rgba(64, 158, 255, 1);
                        }
                    }
                    .show-now-bottom-tips
                    {
                        font-size: 14px;
                        color: #666666;
                    }
                }
            }
        }
    }
    .data-show-content
    {
        width: 100%;
        height: 69%;
        padding: 0 12px;
        .data-function-box
        {
            width: 100%;
            height: 8%;
            min-height: 58px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .item-input-box
            {
                height: inherit;
                display: flex;
                align-items: center;
                span
                {
                    font-size: 14px;
                }
                input , select
                {
                    width: 210px;
                    height: 28px;
                    padding: 0 8px;
                    margin: 0 12px;
                    border: solid 1px rgba(221, 221, 221, 1);
                    border-radius: 4px;
                }
            }
            .item-button
            {
                width: 72px;
                height: 28px;
                background-color: rgba(0, 169, 187, 1);
                border-radius: 4px;
                margin: 0 12px;
                color: #ffffff;
                font-size: 12px;
                letter-spacing: 2px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }
        }
        .data-show-list-title
        {
            width: 100%;
            height: 5.46%;
            display: flex;
            border: solid 1px rgb(204, 204, 204);
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(#f8f8f8, rgb(225, 225, 225));
            span
            {
                width: calc(100% / 6);
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 14px;
                border-right: solid 1px rgb(204, 204, 204);
            }
            span:last-child
            {
                border-right: none;
            }
        }
        .data-show-list
        {
            width: 100%;
            height: 78.54%;
            overflow-y: scroll;
            overflow-y: overlay;
            border-left: solid 1px rgb(204, 204, 204);
            border-right: solid 1px rgb(204, 204, 204);
            border-bottom: solid 1px rgb(204, 204, 204);
            li
            {
                width: 100%;
                height: 40px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: solid 1px rgb(204, 204, 204);
                span
                {
                    width: calc(100% / 6);
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 14px;
                    border-right: solid 1px rgb(204, 204, 204);
                }
                span:last-child
                {
                    cursor: pointer;
                    color: #00A9BB;
                    border-right: none;
                }
            }
        }
        .data-change-page-box
        {
            width: 100%;
            height: 8%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
        }
    }
}
</style>