<template>
    <div>
       <section class="menu-sec1">
            <div class="btn_payVip">
                <img src="../../common/images/freeHead_03.png" class="img-logo" alt="">
                <span class="btn-text">开通VIP，免费看此漫画</span>
            </div>
            <div class="info-layBox">
                <span class="info-time">{{menu.time}}</span>
                <span class="info-time">更新到{{menu.part}}话</span>
            </div>
        </section>
        <div class="list-box">
            <ul class="list">
                <li class="lis" v-for="list in menu.partData">
                    <a class="lia">{{list}}</a>
                </li>
                <a class="list-btn">大人，查看更多目录</a>
            </ul>
        </div>
        <!--推荐作品-->
        <section class="mod-recom">
            <h2>骚年们都在看</h2>
            <ul class="re-item" id="re-item">
                <li class="re-item-li" v-cloak v-for="(value,index) in menu.item">
                    <router-link :to="{path: '/comic/'+ index + '/menu'}" >					
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
        <!--底部-->
        <div class="footer">
            <div class="footer-box">
                <div class="left-box">
                    <a class="foot-btn"></a>
                    <a class="foot-btn"></a>
                    <a class="foot-btn"></a>
                </div>
                <a class="btn-ok">开始阅读</a>
            </div>
        </div>   
    </div>
</template>

<script>
    export default {
        name:'menu',
        props:{
            head:{
                type:Object
            }
        },
        data(){
            return {
                menu:{}
            }
        },
        methods:{
            menurg(){
                if(this.$route.path == '/comic/0/menu'){
                    this.$http.get('/api/000').then((rep)=>{
                        rep = rep.body;
                        if(rep.mes == 1){
                            this.menu = rep.data.menu;
                        }
                    });
                }
                if(this.$route.path == '/comic/1/menu'){
                    this.$http.get('/api/001').then((rep)=>{
                        rep = rep.body;
                        if(rep.mes == 1){
                            this.menu = rep.data.menu;
                        }
                    });
                }
                if(this.$route.path == '/comic/2/menu'){
                    this.$http.get('/api/002').then((rep)=>{
                        rep = rep.body;
                        if(rep.mes == 1){
                            this.menu = rep.data.menu;
                        }
                    });
                }
                if(this.$route.path == '/comic/3/menu'){
                    this.$http.get('/api/003').then((rep)=>{
                        rep = rep.body;
                        if(rep.mes == 1){
                            this.menu = rep.data.menu;
                        }
                    });
                }
                if(this.$route.path == '/comic/4/menu'){
                    this.$http.get('/api/004').then((rep)=>{
                        rep = rep.body;
                        if(rep.mes == 1){
                            this.menu = rep.data.menu;
                        }
                    });
                }
                if(this.$route.path == '/comic/5/menu'){
                    this.$http.get('/api/005').then((rep)=>{
                        rep = rep.body;
                        if(rep.mes == 1){
                            this.menu = rep.data.menu;
                        }
                    });
                }
            }
        },
        created(){
            this.menurg();
        },
        watch:{
            '$route':'menurg'
        }
    }
</script>

<style lang="less">
    .menu-sec1{
		margin-left: 4%;
		margin-right: 4%;
		.btn_payVip{
			display: -webkit-flex;
			display: -moz-flex;
			display: -ms-flex;
			display: -o-flex;
			display: flex;
			align-items: center;
			padding-top: 0.75rem;
			.img-logo{
				display: block;
				width: 1.875rem;
				height: 1.5rem;
			}
			.btn-text{
				display: block;
				height: 1.25rem;
				line-height: 1.25rem;
				background-color: #C5C5C5;
				color:#fff;
				font-size: 0.7rem;
				padding-left: 0.5rem;
				padding-right: 0.5rem;
				margin-left: 0.5rem;
			}
		}
		.info-layBox{
			padding-top: 1rem;
			.info-time{
				color: #C5C5C5;
				font-size:0.6rem;
			}
		}
	}
	//集数开始
	.list-box{
		margin-top: 0.4rem;
		.list{
			display: -webkit-flex;
			display: -moz-flex;
			display: -ms-flex;
			display: -o-flex;
			display: flex;
			justify-content: space-around;
			flex-flow: row wrap;
			.lis{
				display: block;
				width: 28%;
				height:2.25rem;
				margin-bottom: 0.7rem;
				.lia{
					height:2.25rem;
					line-height: 2.25rem;
					display: block;
					font-size: 0.8rem;
					text-align: center;
					background: #fff;
					border: 1px solid #C5C5C5;
					border-radius: 2px;
					color:#535253;
				}
			}
			.list-btn{
				width: 92%;
				height:2.25rem;
				line-height: 2.25rem;
				display: block;
				font-size: 0.8rem;
				text-align: center;
				background: #fff;
				border: 1px solid #C5C5C5;
				border-radius: 2px;
				color:#535253;
			}
		}
	}
	//集数结束
</style>