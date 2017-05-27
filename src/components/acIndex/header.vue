<template>
    <div>
        <header class="header">
            <div class="top-logo">liang的demo</div>
            <a class="top-btn-search"><i>s</i></a>
            <a class="top-btn-menu" id="top-btn" @click="ale()"><i>m</i></a>
        </header>
        <!--导航菜单-->
        <div class="nav-menu" id="nav-menu" v-show="show">
            <div class="nav-bg"></div>
            <div class="nav-box" id="nav-box">
                <ul class="nav-list" id="nav-list">
                    <li class="nav-list-li">
                        <a href="#" class="item">
                            <i class="icon index"></i>
                            <span class="name">首页</span>
                        </a>
                    </li>
                    <li class="nav-list-li">
                        <a href="#" class="item">
                            <i class="icon col"></i>
                            <span class="name">收藏</span>
                        </a>
                    </li>
                    <li class="nav-list-li">
                        <a href="#" class="item">
                            <i class="icon his"></i>
                            <span class="name">历史</span>
                        </a>
                    </li>
                    <li class="nav-list-li">
                        <a href="#" class="item">
                            <i class="icon asso"></i>
                            <span class="name">分类</span>
                        </a>
                    </li>
                    <li class="nav-list-li">
                        <a href="#" class="item">
                            <i class="icon rank"></i>
                            <span class="name">排行</span>
                        </a>
                    </li>
                    <li class="nav-list-li">
                        <a href="#" class="item">
                            <i class="icon run"></i>
                            <span class="name">追更</span>
                        </a>
                    </li>
                </ul>
                <a href="#" class="my-btn"></a>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';

export default {
  name: 'inheader',
  computed:mapGetters([
      'show'
  ]),
  methods:mapActions([
      'ale'
  ])
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
        /*头部开始*/
        .header{
            width: 100%;
            height: 2.5rem;
            display: flex;
            position:fixed;
            z-index:90;
            top:0;
            left: 0;
            background: #ffffff;
            .top-logo{
                width: 6rem;
                height: 2.5rem;
                text-indent:-2000rem;
                background:url("../../common/images/sc_img_default.png")no-repeat 0rem -2.55rem;
                -webkit-background-size:14.8rem 7rem;
                background-size:14.8rem 7rem;
                margin-right: auto;
            }
            /*//使用混合*/
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

        }
        /*头部结束*/

    /*//导航菜单开始*/
    .nav-menu{
        width: 100%;
        height: 100%;
        position: fixed;
        top:2.5rem;
        left: 0;
        overflow: hidden;
        z-index:15;
        /*display: none;*/
        .nav-bg{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 16;
            background:rgba(0,0,0,.4);
        }
        .nav-box{
            padding-bottom:0.75rem;
            border-bottom: 0.25rem solid #ff9a6a;
            width: 100%;
            z-index: 17;
            position: absolute;
            /*top:-10rem;*/
            background-color: #F5F5EE;
            .nav-list{
                display: flex;
                justify-content: space-around;
                flex-flow: row wrap;
                .nav-list-li{
                    display: flex;
                    justify-content: center;
                    width: 28%;
                    .item{
                        display: block;
                        height: 2.75rem;
                        margin-top:0.5rem;
                        .icon{
                            width: 1.7rem;
                            height: 1.7rem;
                            display: block;
                            background:url("../../common/images/sc_img_default.png")no-repeat;
                            -webkit-background-size:14.8rem 7rem;
                            background-size:14.8rem 7rem;
                        }
                        /*//首页*/
                        .index{
                            background-position: -10.15rem -2.55rem;
                        }
                        /*//收藏*/
                        .col{
                            background-position: -12.1rem -2.55rem;
                        }
                        /*//历史*/
                        .his{
                            background-position: -6.25rem -2.55rem;
                        }
                        /*//分类*/
                        .asso{
                            background-position: -1.95rem -5.3rem;
                        }
                        /*//排行*/
                        .rank{
                            background-position: 0rem -5.3rem;
                        }
                        /*//追更*/
                        .run{
                            background-position: -8.2rem -2.55rem;
                        }
                        .name{
                            display: block;
                            margin-top: 0.15rem;
                            font-size: 0.6rem;
                            color: #969696;
                            text-align: center;
                        }
                    }
                }
            }
            .my-btn{
                display: block;
                width: 14.8rem;
                height: 2.3rem;
                background:url("../../common/images/sc_img_default.png")no-repeat 0 0;
                -webkit-background-size:14.8rem 7rem;
                background-size:14.8rem 7rem;
                margin: 0 auto;
                margin-top:0.25rem;
            }
        }
    }
    /*//导航菜单结束*/

    }
    @import "../../common/less/screen";
</style>