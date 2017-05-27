<template>
    <div>
        <section class="recommend">
            <h2 class="sub-title">
                <div class="title-content tc-recommend"></div>
                <a href="#" class="more"></a>
            </h2>
            <ul class="re-item" id="re-item">
                <li class="re-item-li" v-for="(value,index) in item.con1">
                    <router-link :to="{path: '/comic/'+ index + '/dev'}" >
                        <div class="img-cov">
                            <img :src="value.pic" class="r-img" alt="">
                        </div>
                        <div class="img-cont">
                            <strong class="cont-title">{{value.title}}</strong>
                            <small class="cont-con">{{value.con}}</small>
                        </div>
                    </router-link>
                </li>
            </ul>
        </section>
        <!--每日一推-->
        <section class="day-rec">
            <h2 class="sub-title">
                <div class="title-content day-recommecd"></div>
                <a class="more"></a>
            </h2>
            <div class="day-rec-box">
                <a href="#" class="img-box">
                    <img src="../../common/images/dayRec.jpg" class="box-img" alt="">
                </a>
                <a href="#" class="rec-title">
                    <span class="text">我男友是林黛玉</span>
                    <small class="artist">作者：糖小兔</small>
                </a>
            </div>
        </section>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';

export default {
  name: 'incontent1',
  props:{
      acindex:{
          type:Object
      }
  },
  computed:mapGetters([

  ]),
  methods:mapActions([
      'liClick'
  ]),
  data(){
      return {
          item:{}
      }
  },
  created(){
    this.$http.get('/api/acindex').then((rep)=>{
        rep = rep.body;
        if(rep.mes == 1){
            this.item = rep.data;
        }
    });
  }
}
</script>

<style lang="less">
    /*//推荐部分开始*/
    .recommend{
        width: 100%;
        padding-top: 0.25rem;
        .re-item{
            width: 100%;
            overflow: hidden;
            display: flex;
            flex-flow:row wrap;
            justify-content:space-around;
            margin-top: -0.75rem;
            .re-item-li{
                width: 28%;
                margin-top:0.75rem;
                overflow: hidden;
                background-color:#fff;
                .img-cov{
                    padding-bottom:140%;
                    width: 100%;
                    position: relative;
                    .r-img{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: auto;
                        display: block;
                    }
                    .vip-logo{
                        position: absolute;
                        width: 1.6rem;
                        height: 1.6rem;
                        background:url("../../common/images/viplogp.png")no-repeat;
                        background-size: 1.6rem 1.6rem;
                        right: 0;
                        top: 0;
                    }
                }

                .img-cont{
                    overflow: hidden;
                    .cont-title{
                        display: block;
                        font-size:0.7rem;
                        color:#535252;
                        text-align:center;
                        white-space:nowrap;
                        text-overflow:ellipsis;
                        margin-top: 0.1rem;
                        //overflow: hidden;
                    }
                    .cont-con{
                        display: block;
                        margin-bottom: 0.375rem;
                        font-size: 0.6rem;
                        color: #969696;
                        white-space:nowrap;
                        text-overflow:ellipsis;
                        overflow: hidden;
                        text-align: center;
                    }
                }
            }
        }
    }
    /*//推荐部分结束*/
    @import "../../common/less/common";
 
    /*//每日一推开始*/
    .day-rec{
        margin-top: 0.25rem;
        width: 100%;
        .day-rec-box{
            width: 100%;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            .img-box{
                width: 95%;
                display: block;
                background: #ffffff;
                .box-img{
                    width: 100%;
                    border-radius: 0.1rem;
                }
            }
            .rec-title{
                display: flex;
                height: 2rem;
                width: 95%;
                background: #ffffff;
                align-items: center;
                .text{
                    display: block;
                    margin-left: 0.75rem;
                    margin-right:auto;
                    font-size: 0.8rem;
                    color: #535252;
                }
                .artist{
                    display: block;
                    margin-right: 0.75rem;
                    font-size: 0.6rem;
                    color: #C5C5C5;
                }
            }
        }
    }
    /*//每日一推结束*/

    @import "../../common/less/screen";

</style>