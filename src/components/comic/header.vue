<template>
    <div>
        <div class="header">
            <router-link to="/" class="top-btn-back"><i>l</i></router-link>
            <h1>{{content.title}}</h1>
            <a class="top-btn-search"><i>s</i></a>
            <a class="top-btn-menu" id="top-btn"><i>m</i></a>
        </div>
        <section class="mod-header">
            <div class="header-cover blur" :style="{background:'url('+content.img+')'}"></div>
            <div class="header-info">
                <div class="info-img-box">
                    <img :src="content.img" alt="">
                </div>
                <div class="header-info-detail">
                    <ul>
                        <li class="info-title">
                            <h1>{{content.title}}</h1>
                            <span class="info-title-grade">{{content.grade}}</span>
                        </li>
                        <li class="header-info-tags">
                            <label>标签：</label>
                            <span class="mr5" v-for="arr in content.tags">{{arr}}</span>
                        </li>
                        <li class="header-info-lit">{{content.author}}</li>
                        <li class="header-info-lit">人气：
                            <span class="info-num">{{content.number}}</span>
                        </li>
                        <li class="header-info-lit">月票：
                            <span class="info-num">{{content.monthTicket}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'comicHeader',
        props: {
            content: {
                type: Object
            }
        }
    }
</script>

<style lang="less">
    @font-face {
		font-family: 'iconfontIco';
	    src: url('../../common/fonts/icomoon.eot');
	    src: url('../../common/fonts/icomoon.eot?#iefix') format('embedded-opentype'),
	    url('../../common/fonts/icomoon.woff') format('woff'),
	    url('../../common/fonts/icomoon.ttf') format('truetype'),
	    url('../../common/fonts/icomoon.svg#iconfontyyy') format('svg');
	}
    html{
        body{
            background: #F5F5EE;
        }
        box-sizing: border-box;
        font-size: 10px;
        width: 100%;
        /*//头部开始*/
        .header{
            width: 100%;
            height: 2.5rem;
            display: flex;
            position:fixed;
            z-index:90;
            top:0;
            left: 0;
            background: #ffffff;
            /*//使用mixin*/
            .topBtn{
                display: block;
                padding:0.375rem;
            }
            .topBtnI{
                font-family:iconfontIco;
                font-style:normal;
                font-size:1.5rem;
                color:#ff9a66;
                display: block;
                width: 1.375rem;
            }
            .top-btn-search{
                .topBtn;
                i{
                    .topBtnI;
                }
            }
            .top-btn-menu{
                .topBtn;
                i{
                    .topBtnI;
                }
            }
            .top-btn-back{
                .topBtn;
                i{
                    .topBtnI;
                }
            }
            h1{
                display: block;
                font-size: 0.9rem;
                color: #535252;
                overflow: hidden;
                margin-right:auto;
            }
        }
        /*//头部结束*/

                /*//内容头部开始*/
        .mod-header{
            width: 100%;
            height: 12.5rem;
            overflow: hidden;
            position: relative;
            .header-cover{
                width: 100%;
                height: 100%;
                -webkit-background-size:21rem 28rem;
                background-size:21rem 28rem;
                z-index: 1;
                &::before{
                    content: '';
                    z-index: 2;
                    background-color: rgba(0, 0, 0, 0.2);
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                }
            }
            .blur{
                -webkit-filter:blur(20px); /* Chrome, Opera */
                -moz-filter:blur(20px);
                -ms-filter:blur(20px);
                filter:blur(20px);
            }
            .header-info{
                z-index: 5;
                display: flex;
                align-items: flex-end;
                padding-left: 0.75rem;
                padding-right: 0.75rem;
                width: 100%;
                height: 100%;
                position: absolute;
                box-sizing: border-box;
                left: 0;
                top: 0;
                .info-img-box{
                    width: 6.5rem;
                    height: 8.75rem;
                    margin-left: 1.05rem;
                    margin-right: 1.15rem;
                    position: relative;
                    &::before{
                        content: '';
                        background-color: rgba(0, 0, 0, 0.2);
                        position: absolute;
                        z-index: 2;
                        right: -0.4rem;
                        bottom: -0.25rem;
                        transform: skew(4deg, 0deg);
                        width: 50%;
                        height: 100%;
                        display: block;
                    }
                    img{
                        position: relative;
                        display: block;
                        width: 100%;
                        height: 100%;
                        z-index: 7;
                    }
                }
                .header-info-detail{
                    color: #ffffff;
                    height: 8.75rem;
                    position: relative;
                    flex: 1;
                    .info-title{
                        padding-top: 1.25rem;
                        display: flex;
                        align-items: center;
                        h1{
                            font-size:0.95rem;
                            margin: 0;
                        }
                        .info-title-grade{
                            display: block;
                            width: 1.05rem;
                            height: 1.05rem;
                            line-height: 1.05rem;
                            font-size: 0.5rem;
                            color: white;
                            border-radius: 50%;
                            text-align: center;
                            background-color: #d97e5c;
                            margin-left: 0.25rem;
                        }
                    }
                    .header-info-tags{
                        padding-top:0.5rem;
                        label{
                            font-size:0.6rem;
                        }
                        span{
                            padding-left: 0.3rem;
                            padding-right: 0.3rem;
                            border-left: 1px solid white;
                            font-size:0.6rem;
                            &:nth-of-type(1){
                                border-left: none;
                                padding-left: 0;
                            }
                        }
                    }
                    .header-info-lit{
                        padding-top: 0.4rem;
                        font-size: 0.6rem;
                        .info-num{
                            color: #fef886;
                        }
                    }
                }
            }

        }
    /*//内容头部结束*/

    }
    
    @import "../../common/less/screen";
</style>