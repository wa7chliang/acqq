<template>
    <div>
        <!--日漫经典-->
        <section class="recommend">
            <h2 class="sub-title">
                <div class="title-content ja-class"></div>
                <a href="#" class="more"></a>
            </h2>
            <ul class="re-item" id="ja-cla">
                <li class="re-item-li" v-cloak v-for="(value,index) in item">
                    <div class="img-cov">
                        <img :src="value.pic" class="r-img" alt="">
                    </div>
                    <div class="img-cont">
                        <strong class="cont-title">{{value.title}}</strong>
                        <small class="cont-con">{{value.con}}</small>
                    </div>
                </li>
            </ul>
        </section>
        <!--新作上线-->
        <section class="recommend">
            <h2 class="sub-title">
                <div class="title-content new-ac"></div>
                <a href="#" class="more"></a>
            </h2>
            <ul class="re-item" id="new-acg">
                <li class="re-item-li" v-for="(value,index) in newitem">
                    <div class="img-cov">
                        <img :src="value.pic" class="r-img" alt="">
                    </div>
                    <div class="img-cont">
                        <strong class="cont-title">{{value.title}}</strong>
                        <small class="cont-con">{{value.con}}</small>
                    </div>
                </li>
            </ul>
        </section>
        <!--底部-->
        <footer class="footer-index">
            <div class="footer-row">
                <i class="foot-logo"></i>
                <a href="#" class="link">电脑版</a>
                <a href="#" class="link">帮助</a>
                <a href="#" class="link">意见反馈</a>
            </div>
        </footer>
        <!--APP引导语-->
        <section class="app">
            <a href="#" class="app-downl">
                <img src="../../common/images/app.png" class="app-img" alt="">
            </a>
        </section>
        <!--填充app引导语的块-->
        <section class="app-fill">
            <a href="#" class="app-downl">
                <img src="../../common/images/app.png" class="app-img" alt="">
            </a>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'bottom',
        data() {
            return {
                item: {},
                newitem: {}
            }
        },
        created() {
            this.$http.get('/api/acindex?req=1').then((rep) => {
                rep = rep.body;
                if (rep.isSuccess) {
                    this.item = rep.data.bottom.day;
                    this.newitem = rep.data.bottom.new;
                } else {
                    console.log(rep.msg);
                }
            });
        }
    }
</script>

<style lang="less">
    /*//底部开始*/
    .footer-index{
        width: 100%;
        height: 3.5rem;
        background:url("../../common/images/bottom.png")repeat-x left bottom;
        -webkit-background-size:18.7rem 2.55rem;
        background-size:18.7rem 2.55rem;
        .footer-row{
            display: flex;
            margin: 0 auto;
            width: 15rem;
            height: 3.5rem;
            text-align:center;
            justify-content:space-around;
            .foot-logo{
                display: block;
                width: 3.75rem;
                height: 3.325rem;
                background:url("../../common/images/sc_img_index.png")no-repeat -13rem -2.25rem;
                -webkit-background-size:20.5rem 17.5rem;
                background-size: 20.5rem 17.5rem;
            }
            .link{
                display: block;
                font-size: 0.75rem;
                font-weight:800;
                color: #535252;
                line-height: 3.75rem;
            }
        }
    }
    /*//底部结束*/
    /*//app引导语开始*/
    .app{
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 50;
    }
    .app-downl{
        display: block;
        width: 100%;
        .app-img{
            width: 100%;
            display: block;
        }
    }
    /*//app引导语结束*/
    .app-fill{
        width: 100%;
        visibility: hidden;
    }
</style>