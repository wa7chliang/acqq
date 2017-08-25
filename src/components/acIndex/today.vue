<template>
    <div>
        <!--今日更新-->
        <section class="update">
            <h2 class="sub-title">
                <div class="title-content update-logo"></div>
                <a href="#" class="more"></a>
            </h2>
            <div class="update-area">
                <aside class="as-img"></aside>
                <ul class="update-list" id="update-list">
                    <li class="update-list-li" v-for="(arr,index) in item.today">
                        <a href="#" class="update-list-box">
                            <img :src="arr.imgsrc" class="box-img" alt="">
                            <div class="update-li-com">
                                <strong class="com-title">{{arr.title}}</strong>
                                <small class="artist-late">作者：{{arr.artist}}</small>
                                <small class="artist-late">更新到{{arr.late}}话</small>
                                <ul class="rank-box">
                                    <li class="rank-star"></li>
                                    <li class="rank-star"></li>
                                    <li class="rank-star"></li>
                                    <li class="rank-star"></li>
                                    <li class="rank-star"></li>
                                    <li class="rank-score">{{arr.score}}</li>
                                </ul>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name:'today',
        data(){
            return {
                item:{}
            }
        },
        created(){
            this.$http.get('/api/acindex?req=1').then((rep)=>{
                rep = rep.body;
                if(rep.isSuccess){
                    this.item = rep.data;
                } else {
                    console.log(rep.msg);
                }
            });
        }
    }
</script>

<style lang="less">
       /*//今日更新开始*/
    .update{
        background:#fff;
        width: 100%;
        .update-area{
            width: 100%;
            display: flex;
            justify-content: flex-start;
            .as-img{
                width: 5rem;
                height: 17.5rem;
                background:url("../../common/images/sc_img_index.png") no-repeat;
                -webkit-background-size:20.5rem 17.5rem;
                background-size:20.5rem 17.5rem;
            }
            .update-list{
                display: flex;
                flex-direction: column;
                flex: 1;
                -webkit-flex: 1;
                -webkit-box-flex: 1;
                justify-content: space-around;
                .update-list-li{
                    display: block;
                    background-color: #F5F4EF;
                    margin-right: 0.5rem;
                    .update-list-box{
                        height: 5.25rem;
                        overflow: hidden;
                        display: flex;
                        justify-content: flex-start;
                        .box-img{
                            display: block;
                            width: 4rem;
                            height: 5.25rem;
                        }
                        .update-li-com{
                            display: flex;
                            flex-direction: column;
                            flex: 1;
                            -webkit-flex: 1;
                            -webkit-box-flex: 1;
                            padding-left:0.5rem;
                            .com-title{
                                display: block;
                                margin-top: 0.7rem;
                                font-size: 0.8rem;
                                font-weight: bold;
                                color: #535252;
                            }
                            .artist-late{
                                display: block;
                                margin-top: 0.35rem;
                                font-size: 0.6rem;
                                font-weight: normal;
                                color: #969696;
                            }
                            .rank-box{
                                display: flex;
                                justify-content: flex-start;
                                li{
                                    width: 0.55rem;
                                    height: 0.55rem;
                                    margin-top: 0.35rem;
                                }
                                .rank-star{
                                    background:url("../../common/images/sc_img_index.png")no-repeat -19.925rem -3.75rem;
                                    -webkit-background-size: 20.5rem 17.5rem;
                                    background-size: 20.5rem 17.5rem;
                                }
                                .rank-score{
                                    line-height: 0.55rem;
                                    font-size: 0.5rem;
                                    font-weight: 200;
                                    color: #ff9a6a;
                                    margin-left: 0.125rem;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    /*//今日更新结束*/
</style>