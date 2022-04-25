<template>
    <div class="violation-check-box">
        <div class="title-function">
            <div class="function-item">
                <input class="show-file-name-input" type="text" placeholder="未选择文件"/>
                <span class="upload-button">
                    选择文件
                    <input class="true-upload" type="file"/>
                </span>
            </div>
            <div class="function-item">
                <span class="defult-button">违规范围绘制</span>
            </div>
        </div>
        <div class="data-show-content">
            <div class="data-show-list-title">
                <span style="width: 128px">序号</span>
                <span>识别时间</span>
                <span>识别区域</span>
                <span>识别结果</span>
                <span>操作</span>
            </div>
            <ul class="data-show-list">
                <li v-for="item in dataList" :key="item.id">
                    <span style="width: 128px;">{{item.id}}</span>
                    <span>{{item.time}}</span>
                    <span>{{item.area}}</span>
                    <span>{{item.result}}</span>
                    <span>下载识别结果</span>
                </li>
            </ul>
            <div class="data-change-page-box">
                <el-pagination small background layout="total, sizes, prev, pager, next, jumper" :total="1000" />
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
                    time: '2022-4-24',
                    area: 'A1',
                    result: '无异常'
                },
                {
                    id: 0,
                    time: '2022-4-24',
                    area: 'A1',
                    result: '无异常'
                },
                {
                    id: 0,
                    time: '2022-4-24',
                    area: 'A1',
                    result: '无异常'
                },
                {
                    id: 0,
                    time: '2022-4-24',
                    area: 'A1',
                    result: '无异常'
                }
            ],
            dropdownMenu:[
                {
                    id: 0,
                    title: '安全帽',
                    order: 'hottest'
                },
                {
                    id: 1,
                    title: '着装',
                    order: 'newest'
                },
            ],
            choiceTitle: ''
        }
    },
    methods:{
        handleCommand(e){
            this.choiceTitle = this.dropdownMenu[this.dropdownMenu.findIndex(item => item.order === e)].title
        }
    }
}
</script>
<style lang="scss" scoped>
.violation-check-box
{
    width: 100%;
    height: 100%;
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
            margin: 0 12px;
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
                min-width: 72px;
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
            .defult-button
            {
                min-width: 72px;
                height: 35px;
                padding: 0 8px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                background-color: rgba(71, 160, 253, 1);
                color: #ffffff;
                border-radius: 4px;
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
}
</style>