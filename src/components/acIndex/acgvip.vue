<template>
    <div>
        <!--动漫专区-->
        <section class="animation">
            <h2 class="sub-title">
                <div class="title-content anima-pro"></div>
                <a href="#" class="more"></a>
            </h2>
            <ul class="animation-list" id="animation-list">
                <li class="animation-list-li" v-for="(arr,index) in acindex.acgvip" v-if="acindex">
                    <a href="#" class="animation-list-link">
                        <div class="animation-cover">
                            <img :src="arr.imgsrc" class="cover-img" alt="">
                            <div class="cover-dark"></div>
                            <i class="btn-play"></i>
                        </div>
                        <strong class="animation-title">
                            <i class="icon-play"></i>
                            <span class="title">{{arr.title}}</span>
                        </strong>
                        <small class="animation-late">{{arr.late}}集</small>
                    </a>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        name:'acgvip',
        props: {
            acindex: {
                type: Object
            }
        },
        data(){
            return {
                item:{}
            }
        },
        created(){

        }
    }
</script>

<style lang="less">
    /*//动漫专区开始*/
    .animation{
        padding-bottom: 0.25rem;
        width: 100%;
        .animation-list{
            display: flex;
            justify-content: center;
            flex-flow: row wrap;
            .animation-list-li{
                width: 45%;
                margin:0.25rem;
                .animation-list-link{
                    background: #fff;
                    display: block;
                    width: 100%;
                    overflow: hidden;
                    .animation-cover{
                        display: block;
                        position: relative;
                        width: 100%;
                        padding-top: 61.5%;
                        overflow: hidden;
                        .cover-img{
                            width: 100%;
                            position: absolute;
                            top: 0;
                            left: 0;
                            display: block;
                        }
                        .cover-dark{
                            width: 100%;
                            height:100%;
                            background:url("../../common/images/drak.png") round;
                            -webkit-background-size:8.6rem 5.2rem;
                            background-size:8.6rem 5.2rem;
                            position: absolute;
                            left: 0;
                            top: 0;
                        }
                        .btn-play{
                            background:url("../../common/images/sc_img_index.png")no-repeat -13rem -7.775rem;
                            background-size: 20.5rem 17.5rem;
                            display: block;
                            width: 1.675rem;
                            height: 1.675rem;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform:translate(-50%,-50%);
                            -webkit-transform:translate(-50%,-50%);
                            -moz-transform:translate(-50%,-50%);
                            -ms-transform:translate(-50%,-50%);
                        }
                    }
                    .animation-title{
                        display: flex;
                        width: 100%;
                        margin-top: 0.35rem;
                        margin-bottom:-0.25rem;
                        .icon-play{
                            width: 0.5rem;
                            height: 0.5rem;
                            display: block;
                            background:url("../../common/images/sc_img_index.png")no-repeat -18.95rem -4.725rem;
                            -webkit-background-size:20.5rem 17.5rem;
                            background-size:20.5rem 17.5rem;
                            margin-left:0.25rem;
                        }
                        .title{
                            display: block;
                            color: #535252;
                            font-size: 0.7rem;
                            font-weight: bold;
                            margin-left:0.25rem;
                        }
                    }
                    .animation-late{
                        color: #969696;
                        font-size:0.6rem;
                        font-weight: normal;
                        margin-bottom: 0.35rem;
                        margin-left:1rem;
                    }
                }
            }
        }
    }
    /*//动漫专区结束*/
</style>