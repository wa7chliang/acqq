<template>
    <div>
        <section class="banner-menu">
            <div class="banner-list-box swiper-container">
                <ul class="banner-list swiper-wrapper">
                    <li class="banner-list-li swiper-slide">
                        <img class="banner-img" src="../../common/images/0.jpg" alt="">
                    </li>
                    <li class="banner-list-li swiper-slide">
                        <img class="banner-img" src="../../common/images/1.jpg" alt="">
                    </li>
                    <li class="banner-list-li swiper-slide">
                        <img class="banner-img" src="../../common/images/2.jpg" alt="">
                    </li>
                    <li class="banner-list-li swiper-slide">
                        <img class="banner-img" src="../../common/images/3.jpg" alt="">
                    </li>
                    <li class="banner-list-li swiper-slide">
                        <img class="banner-img" src="../../common/images/4.jpg" alt="">
                    </li>
                </ul>
                <ul class="swiper-pagination">
                    <li class="swiper-pagination-bullet swiper-pagination-bullet-active"></li>
                    <li class="swiper-pagination-bullet"></li>
                    <li class="swiper-pagination-bullet"></li>
                    <li class="swiper-pagination-bullet"></li>
                    <li class="swiper-pagination-bullet"></li>
                </ul>
            </div>
            <div class="banner-nav" id="banner-nav">
                <li class="nav-item" v-for="(value,index) in arr" v-cloak>
                    <a href="#" class="nav-item-li">
                        <i :class="{'item-icon':true,'ass':index==0,'rank':index==1,'cart':index==2,'his':index==3}"></i>
                        <span class="name">{{value}}</span>
                    </a>
                </li>
            </div>
        </section>
    </div>
</template>

<script>
    import Swiper from '../../../static/js/swiper-3.4.2.min.js'
    import '../../../static/css/swiper-3.4.2.min.css'
    export default {
        name: 'inbanner',
        data() {
            return {
                a: true,
                arr: ['分类', '排行', '条漫', '历史'],
                mySwiper: ''
            }
        },
        mounted() {
            setTimeout(() => {
                this.lunbo()
            }, 300)
        },
        methods: {
            lunbo() {
                this.mySwiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    autoplay: 5000,
                    loop: true,
                    autoplayDisableOnInteraction: false
                });
            }
        }
    }
</script>

<style lang="less">
    /*//banner部分开始*/
    .banner-menu{
        width: 100%;
        margin-top:2.5rem;
        display: block;
        .banner-list-box{
            position: relative;
            width: 100%;
            overflow: hidden;
            height:10.9rem;
            .banner-list{
                width: 100%;
                position:absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                //display: flex;
                .banner-list-li{
                    width: 100%;
                    height: 100%;
                    display: block;
                    //position: absolute;
                    .banner-img{
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .swiper-pagination{
                position: absolute;
                right: 0.5rem;
                bottom: 1rem;
                z-index: 3;
                left:auto;
                width:auto;
                .swiper-pagination-bullet{
                    display: inline-block;
                    width: 0.275rem;
                    height: 0.275rem;
                    border-radius:0.275rem;
                    background: #ffffff;
                    opacity:1;
                }
                .swiper-pagination-bullet-active{
                    background:#ff9a6a;
                    width: 0.7rem;
                }
            }
        }
        .banner-nav{
            position: relative;
            width: 100%;
            height: 4.5rem;
            margin-top: -1.75rem;
            z-index: 2;
            background:url("../../common/images/navtop.png")repeat-x;
            -webkit-background-size:18.75rem 4.5rem;
            background-size:18.75rem 4.5rem;
            display: flex;
            justify-content:center;
            .nav-item{
                width: 22%;
                margin-top:1.5rem;
                display: flex;
                align-items:center;
                justify-content:center;
                .nav-item-li{
                    .item-icon{
                        display: block;
                        width: 1.7rem;
                        height: 1.7rem;
                        background:url("../../common/images/sc_img_index.png")no-repeat;
                        -webkit-background-size:20.5rem 17.5rem;
                        background-size:20.5rem 17.5rem;
                    }
                    .ass{
                        background-position: -17rem -3.75rem;
                    }
                    .rank{
                        background-position: -13rem -5.825rem;
                    }
                    .cart{
                        background-position: -14.95rem -5.825rem;
                    }
                    .his{
                        background-position: -16.9rem -5.825rem;
                    }
                    .name{
                        display: block;
                        font-size:0.6rem;
                        color:#969696;
                        margin-top: 0.15rem;
                        text-align: center;
                    }
                }

            }
        }
    }
    /*//banner部分结束*/
    @import "../../common/less/screen";
</style>