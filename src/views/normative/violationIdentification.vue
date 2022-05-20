<template>
    <div class="violation-check-box">
        <div class="title-function">
            <div class="function-item">
                <input class="show-file-name-input" type="text" placeholder="未选择文件" :value="fileObject.title"/>
                <span class="upload-button">
                    选择文件
                    <input class="true-upload" type="file" @change="getFile"/>
                </span>
            </div>
            <div class="function-item">
                <span class="show-text">选择匹配条件:</span>
                <el-dropdown @command="handleCommand">
                    <span class="dropdown-menu">{{choiceTitle === '' ? '请选择' : choiceTitle}}</span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item v-for="item in dropdownMenu" :key="item.id" :command="item.order">{{item.title}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
            <div class="function-item">
                <span class="click-button" @click="distinguishButtom">识别</span>
            </div>
        </div>
        <div class="data-show-content">
            <div class="data-show-list-title">
                <span style="width: 128px">序号</span>
                <span>识别时间</span>
                <span>识别类型</span>
                <span>识别结果</span>
                <span>操作</span>
            </div>
            <ul class="data-show-list" v-loading="changePageWorkNow">
                <li v-for="item in dataList" :key="item.id">
                    <span style="width: 128px;">{{item.pushId}}</span>
                    <span>{{item.pushTime}}</span>
                    <span>{{item.pushViolationType}}</span>
                    <span>{{item.recognitionFinal}}</span>
                    <span @click="downloadResult(item.videoFinalPath)">下载识别结果</span>
                </li>
            </ul>
            <div class="data-change-page-box">
                <el-pagination v-if="this.dataList.length !== 0" small background layout="total, sizes, prev, pager, next, jumper" :total="dataTotal" :v-model="pageSize" @current-change="changePage" @size-change="changeSize"/>
            </div>
        </div>
        <transition name="fade-mask">
            <div v-if="this.isSendToServerWorkNow" class="uploading-mask">
                <span>上传中...</span>
                <i class="fas fa-circle-notch fa-spin"/>
            </div>
        </transition>
    </div>
</template>
<script>
import { recognitionViolation } from '@/util/api.js'
import { ElMessage } from 'element-plus'
export default {
    data(){
        return{
            dataList:[],
            dropdownMenu:[
                {
                    id: 0,
                    title: '安全帽',
                    order: 'helmet'
                },
                {
                    id: 1,
                    title: '着装',
                    order: 'dress'
                },
            ],
            fileObject: {
                title: '',
                file: null,
            },
            choiceTitle: '',
            isSendToServerWorkNow: false,
            pageNumber: 1,
            pageSize: 10,
            dataTotal: 10,
            changePageWorkNow: false,
        }
    },
    methods:{
        handleCommand(e){
            this.choiceTitle = this.dropdownMenu[this.dropdownMenu.findIndex(item => item.order === e)].title
        },
        getFile(e){
            if(e.target.files.length === 0) return
            this.fileObject.title = e.target.files[0].name
            this.fileObject.file = e.target.files[0]
        },
        distinguishButtom(){
            if(!this.isSendToServerWorkNow){
                this.isSendToServerWorkNow = true
                if(this.fileObject.title === '' || this.fileObject.file === null || this.choiceTitle === ''){
                    ElMessage({message: '填写的信息有空白，请检查！', type: 'warning'})
                    this.isSendToServerWorkNow = false
                    return
                }
                let data = new FormData()
                data.append('recognitionType', this.choiceTitle)
                data.append('videoPath', this.fileObject.file)
                recognitionViolation(data).then(resq => {
                    if(resq.code === 200){
                        this.dataList = resq.data.list
                        this.dataTotal = resq.data.total
                    } else {
                        ElMessage({message: resq.message, type: 'warning'})
                    }
                    this.isSendToServerWorkNow = false
                }).catch(err => {
                    ElMessage({message: err.message, type: 'error'})
                    this.isSendToServerWorkNow = false
                })
            }
        },
        downloadResult(file){
            window.open(file)
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
            recognitionViolation({pageNumber: this.pageNumber, pageSize: this.pageSize}).then(resq => {
                if(resq.code === 200){
                    this.dataList = resq.data.list
                    this.dataTotal = resq.data.total
                } else {
                    ElMessage({message: resq.message, type: 'warning'})
                }
                this.changePageWorkNow = false
            }).catch(err => {
                ElMessage({message: err.message, type: 'error'})
                this.changePageWorkNow = false
            })
        },
    }
}
</script>
<style lang="scss" scoped>
.violation-check-box
{
    width: 100%;
    height: 100%;
    position: relative;
    .title-function
    {
        width: 100%;
        height: 12%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 12px 24px;
        .function-item
        {
            height: 35px;
            max-height: 60px;
            display: flex;
            align-items: center;
            .show-file-name-input
            {
                width: 180px;
                height: inherit;
                padding: 0 8px;
                border: solid 1px rgb(221, 221, 221);
                border-radius: 4px 0 0 4px;
            }
            ::-webkit-input-placeholder
            {
                font-size: 10px;
            }
            .upload-button
            {
                width: 72px;
                height: inherit;
                background-color: rgba(71, 160, 253, 1);
                font-size: 12px;
                color: #ffffff;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 0 4px 4px 0;
                overflow: hidden;
                position: relative;
                cursor: pointer;
                z-index: 2;
                .true-upload
                {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                    position: absolute;
                    z-index: 3;
                    opacity: 0;
                    top: 0;
                    left: 0;
                }
            }
            .show-text
            {
                height: inherit;
                display: flex;
                align-items: center;
                font-size: 14px;
                margin: 0 24px;
            }
            .click-button
            {
                width: 72px;
                height: inherit;
                background-color: rgba(71, 160, 253, 1);
                border-radius: 4px;
                margin-left: 32px;
                font-size: 12px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #ffffff;
                cursor: pointer;
            }
        }
        ::v-deep(.el-dropdown)
        {
            min-width: 64px;
            height: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            border: solid 1px rgb(221, 221, 221);
            border-radius: 4px;
        }
    }
    .data-show-content
    {
        width: 100%;
        height: 88%;
        padding: 0 12px;
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
                width: calc(100% / 5);
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
            height: 86.54%;
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
                    width: calc(100% / 5);
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
    .uploading-mask
    {
        width: 100%;
        height: 100%;
        background-color: rgba(0 , 0 , 0, 0.2);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
        span , i
        {
            width: 100%;
            height: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        span
        {
            color: #f8f8f8;
            font-size: 16px;
            letter-spacing: 4px;
        }
        i
        {
            color: #00A9BB;
            font-size: 20px;
        }
    }
    .fade-mask-enter-active, .fade-mask-leave-active
    {
        transition: opacity .5s;
    }
    .fade-mask-enter-from, .fade-mask-leave-to 
    {
        opacity: 0;
    }

}
</style>