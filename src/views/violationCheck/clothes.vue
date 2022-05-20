<template>
    <div class="hard-hat-check">
        <div class="title-function">
            <div class="left-input-box">
                <label class="item-input-box">
                    <span>时间:</span>
                    <input type="date" v-model="beforeDate"/>
                </label>
                <label class="item-input-box">
                    <span>一</span>
                </label>
                <label class="item-input-box">
                    <input type="date" v-model="afterDate"/>
                </label>
                <label class="item-input-box">
                    <span>摄像头:</span>
                    <input type="number" v-model="cameraId"/>
                </label>
                <div class="item-button" @click="getDressViolation">
                    <span v-if="!searchWorkNow">查询</span>
                    <i v-else class="fas fa-circle-notch fa-spin"/>
                </div>
                <span class="item-button" @click="resetButton">重置</span>
            </div>
            <div></div>
        </div>
        <div class="data-show-content">
            <div class="data-function-box">
                <span class="item-button" @click="fileGet">导出</span>
            </div>
            <div class="data-show-list-title">
                <span style="width: 128px">序号</span>
                <span>摄像头编号</span>
                <span>违规时间</span>
                <span>违规类型</span>
                <span>处理办法</span>
                <span>详情</span>
            </div>
            <ul class="data-show-list" v-loading="(this.searchWorkNow === true && this.dataList.length === 0) || (this.changePageWorkNow === true)">
                <li v-for="item in dataList" :key="item.id">
                    <span style="width: 128px;">{{item.pushId}}</span>
                    <span>{{item.pushCameraId}}</span>
                    <span>{{item.pushTime}}</span>
                    <span>{{item.pushViolationType}}</span>
                    <span>{{item.violationDispose}}</span>
                    <span @click="showImage(item.violationImg)">详情</span>
                </li>
            </ul>
            <div class="data-change-page-box">
                <el-pagination small background layout="total, sizes, prev, pager, next, jumper" :total="dataTotal" :v-model="pageSize" @current-change="changePage" @size-change="changeSize" v-if="this.dataList.length !== 0"/>
            </div>
        </div>
    </div>
</template>
<script>
import { showImages } from 'vue-img-viewr'
import 'vue-img-viewr/styles/index.css'
import { dressViolation , dressViolationOut } from '@/util/api.js'
import { ElMessage } from 'element-plus'
export default {
    data(){
        return{
            beforeDate: '',
            afterDate: '',
            cameraId: null,
            pageNumber: 1,
            pageSize: 10,
            dataTotal: 10,
            searchWorkNow: false,
            changePageWorkNow: false,
            dataList:[]
        }
    },
    methods:{
        getDressViolation(){
            if(this.searchWorkNow) return
            this.searchWorkNow = true
            if(this.beforeDat === '' || this.afterDate === ''){
                ElMessage.warning('请选择时间！')
                this.searchWorkNow = false
                return
            }
            if(this.cameraId === null){
                ElMessage.warning('请输入摄像头ID！')
                this.searchWorkNow = false
                return
            }
            dressViolation({starTime: this.beforeDate, overTime: this.afterDate, cameraId: this.cameraId, pageNumber: this.pageNumber, pageSize: this.pageSize}).then(resq => {
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
            dressViolation({starTime: this.beforeDate, overTime: this.afterDate, cameraId: this.cameraId, pageNumber: this.pageNumber, pageSize: this.pageSize}).then(resq => {
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
        resetButton(){
            this.beforeDate = ''
            this.afterDate = ''
            this.cameraId = null
        },
        fileGet(){
            if(this.searchWorkNow) return
            this.searchWorkNow = true
            if(this.beforeDat === '' || this.afterDate === ''){
                ElMessage.warning('请选择时间！')
                this.searchWorkNow = false
                return
            }
            if(this.cameraId === null){
                ElMessage.warning('请输入摄像头ID！')
                this.searchWorkNow = false
                return
            }
            dressViolationOut({starTime: this.beforeDate, overTime: this.afterDate, cameraId: this.cameraId}).then(resq => {
                if(resq.code === 200){
                    window.location.href = resq.data.outPath
                } else {
                    ElMessage.error(resq.message)
                }
            }).catch(err => {
                ElMessage.error(err.message)
            })
        }
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
        height: 12%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 32px;
        border-bottom: dashed 1px rgb(204, 204, 204);
        .left-input-box
        {
            height: 40px;
            display: flex;
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
                input
                {
                    width: 156px;
                    height: 28px;
                    padding: 0 8px;
                    margin: 0 12px;
                    border: solid 1px rgba(221, 221, 221, 1);
                    border-radius: 4px;
                }
            }
        }
        
    }
    .title-function .item-button , .data-show-content .item-button
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
    .data-show-content
    {
        width: 100%;
        height: 88%;
        padding: 0 12px;
        .data-function-box
        {
            width: 100%;
            height: 8%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
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
            max-height: 590px;
            height: 78.54%;
            overflow-y: scroll;
            overflow-y: overlay;
            border-left: solid 1px rgb(204, 204, 204);
            border-bottom: solid 1px rgb(204, 204, 204);
            border-right: solid 1px rgb(204, 204, 204);
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