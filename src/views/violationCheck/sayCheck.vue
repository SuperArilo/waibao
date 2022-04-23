<template>
    <div class="hard-hat-check">
        <div class="title-function">
            <div class="left-input-box">
                <label class="item-input-box">
                    <span>时间:</span>
                    <input type="date"/>
                </label>
                <label class="item-input-box">
                    <span>一</span>
                </label>
                <label class="item-input-box">
                    <input type="date"/>
                </label>
                <label class="item-input-box">
                    <span>摄像头:</span>
                    <input type="text"/>
                </label>
                <span class="item-button">查询</span>
                <span class="item-button">重置</span>
            </div>
            <div></div>
        </div>
        <div class="data-show-content">
            <div class="data-function-box">
                <span class="item-button">导出</span>
            </div>
            <div class="data-show-list-title">
                <span style="width: 128px">序号</span>
                <span>监测异常时间</span>
                <span>仓库</span>
                <span>仓位</span>
                <span>异常情况</span>
            </div>
            <ul class="data-show-list">
                <li v-for="item in dataList" :key="item.id">
                    <span style="width: 128px;">{{item.id}}</span>
                    <span>{{item.time}}</span>
                    <span>{{item.area}}</span>
                    <span>{{item.location}}</span>
                    <span>{{item.why}}</span>
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
                    time: '2022-4-23',
                    area: '赣北智能库',
                    location: 'A000001',
                    why: '盘点异常，有物无账！'
                },
            ]
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
        min-height: 99px;
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
        min-height: 733px;
        padding: 0 12px;
        .data-function-box
        {
            width: 100%;
            height: 8%;
            min-height: 58px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        .data-show-list-title
        {
            width: 100%;
            height: 5.46%;
            min-height: 40px;
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
            max-height: 590px;
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
        }
        .data-change-page-box
        {
            width: 100%;
            height: 8%;
            min-height: 43px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
        }
    }
}
</style>