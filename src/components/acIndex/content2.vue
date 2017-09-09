<template>
    <div>
        <!--爽快VIP-->
        <section class="recommend">
            <h2 class="sub-title">
                <div class="title-content ha-vip"></div>
                <a href="#" class="more"></a>
            </h2>
            <ul class="re-item" id="ha-vip">
                <li class="re-item-li" v-for="(value,index) in acindex.con2" v-if="acindex">
                    <div class="img-cov">
                        <img v-lazy="value.pic" class="r-img" alt="">
                        <i class="vip-logo"></i>
                    </div>
                    <div class="img-cont">
                        <strong class="cont-title">{{value.title}}</strong>
                        <small class="cont-con">{{value.con}}</small>
                    </div>
                </li>
            </ul>
        </section>
        <!--特别君-->
        <section class="promotion">
            <h2 class="sub-title">
                <div class="title-content pro-rem"></div>
            </h2>
            <div class="promotion-list">
                <a href="#" class="pro-li">
                    <img src="../../common/images/prom1.jpg" class="pro-img" alt="">
                </a>
                <a href="#" class="pro-li">
                    <img src="../../common/images/prom2.jpg" class="pro-img" alt="">
                </a>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'incontent2',
        props: {
            acindex: {
                type: Object
            }
        },
        data() {
            return {
                item: {}
            }
        },
        created() {

        }
    }
</script>

<style lang="less">
    /*//特别君开始*/
    .promotion{
        background: #ffffff;
        margin-top:0.75rem;
        margin-bottom: 0.75rem;
        width: 100%;
        .promotion-list{
            width: 100%;
            display: flex;
            justify-content: space-around;
            padding-bottom: 0.5rem;
        }
        .pro-li{
            display: block;
            width: 45%;
            .pro-img{
                width: 100%;
            }
        }
    }
    /*//特别君结束*/
</style>