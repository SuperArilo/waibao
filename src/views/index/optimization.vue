<template>
    <div class="hard-hat-check">
        <div class="title-function">
            <div class="sub-show-stack">
                <span class="stack-title">优化前</span>
                <div class="juti-content">
                    <div class="left-image">
                        <img src=""/>
                    </div>
                    <div class="right-show-stack-data">
                        <span class="show-now-tips">已用容量: 30% / 可用容量: 70%</span>
                        <div class="bar-box">
                            <div class="true-bar" style="width: 30%"></div>
                        </div>
                        <span class="show-now-bottom-tips">堆场总容量: 100</span>
                    </div>
                </div>
            </div>
            <div class="sub-show-stack">
                <span class="stack-title">优化后</span>
                <div class="juti-content">
                    <div class="left-image">
                        <img src=""/>
                    </div>
                    <div class="right-show-stack-data">
                        <span class="show-now-tips">已用容量: 20% / 可用容量: 80%</span>
                        <div class="bar-box">
                            <div class="true-bar" style="width: 20%"></div>
                        </div>
                        <span class="show-now-bottom-tips">堆场总容量: 100</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="data-show-content">
            <div class="data-function-box">
                <label class="item-input-box">
                    <span>仓库:</span>
                    <select>
                        <option value="">请选择物资运营中心</option>
                    </select>
                </label>
                <span class="item-button">实时优化</span>
            </div>
            <div class="data-show-list-title">
                <span style="width: 128px">序号</span>
                <span>堆场</span>
                <span>建议时间</span>
                <span>已用容量</span>
                <span>可优化容量</span>
                <span>建议优化详情</span>
            </div>
            <ul class="data-show-list">
                <li v-for="item in dataList" :key="item.id">
                    <span style="width: 128px;">{{item.id}}</span>
                    <span>{{item.camera}}</span>
                    <span>{{item.time}}</span>
                    <span>{{item.class}}</span>
                    <span>{{item.need}}</span>
                    <span>详情</span>
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
                    camera: '赣北物资运营中心堆场1',
                    time: '2022-01-12 16:38:26',
                    class: '50%',
                    need: '4%'
                },
                {
                    id: 0,
                    camera: '赣北物资运营中心堆场1',
                    time: '2022-01-12 16:38:26',
                    class: '50%',
                    need: '4%'
                },
                {
                    id: 0,
                    camera: '赣北物资运营中心堆场1',
                    time: '2022-01-12 16:38:26',
                    class: '50%',
                    need: '4%'
                },
                {
                    id: 0,
                    camera: '赣北物资运营中心堆场1',
                    time: '2022-01-12 16:38:26',
                    class: '50%',
                    need: '4%'
                },
                {
                    id: 0,
                    camera: '赣北物资运营中心堆场1',
                    time: '2022-01-12 16:38:26',
                    class: '50%',
                    need: '4%'
                },
                {
                    id: 0,
                    camera: '赣北物资运营中心堆场1',
                    time: '2022-01-12 16:38:26',
                    class: '50%',
                    need: '4%'
                },
                {
                    id: 0,
                    camera: '赣北物资运营中心堆场1',
                    time: '2022-01-12 16:38:26',
                    class: '50%',
                    need: '4%'
                },
                {
                    id: 0,
                    camera: '赣北物资运营中心堆场1',
                    time: '2022-01-12 16:38:26',
                    class: '50%',
                    need: '4%'
                },
                {
                    id: 0,
                    camera: '赣北物资运营中心堆场1',
                    time: '2022-01-12 16:38:26',
                    class: '50%',
                    need: '4%'
                },
                {
                    id: 0,
                    camera: '赣北物资运营中心堆场1',
                    time: '2022-01-12 16:38:26',
                    class: '50%',
                    need: '4%'
                },
                {
                    id: 0,
                    camera: '赣北物资运营中心堆场1',
                    time: '2022-01-12 16:38:26',
                    class: '50%',
                    need: '4%'
                },
                {
                    id: 0,
                    camera: '赣北物资运营中心堆场1',
                    time: '2022-01-12 16:38:26',
                    class: '50%',
                    need: '4%'
                },
                {
                    id: 0,
                    camera: '赣北物资运营中心堆场1',
                    time: '2022-01-12 16:38:26',
                    class: '50%',
                    need: '4%'
                },
                {
                    id: 0,
                    camera: '赣北物资运营中心堆场1',
                    time: '2022-01-12 16:38:26',
                    class: '50%',
                    need: '4%'
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