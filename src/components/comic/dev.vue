<template>
    <div>
        <!--作品详情页-->
        <section class="mod-detail">
            <i class="iconfo">r</i>
            <div class="detail-summary">
                <p>{{dev.cont}}</p>
            </div>
        </section>
        <!--推荐作品-->
        <section class="mod-recom">
            <h2>骚年们都在看</h2>
            <ul class="re-item" id="re-item">
                <li class="re-item-li" v-cloak v-for="(value,index) in dev.item">
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
        name:'dev',
        props:{
            head:{
                type:Object
            }
        },
        data(){
            return {
                dev:{}
            }
        },
        created(){
			this.rg();
        },
		methods:{
			rg(){
				if(this.$route.path == '/comic/0/dev'){
					this.$http.get('/api/000').then((rep)=>{
						rep = rep.body;
						if(rep.mes == 1){
							this.dev = rep.data.dev;
						}
					});
				}
				if(this.$route.path == '/comic/1/dev'){
					this.$http.get('/api/001').then((rep)=>{
						rep = rep.body;
						if(rep.mes == 1){
							this.dev = rep.data.dev;
						}
					});
				}
				if(this.$route.path == '/comic/2/dev'){
					this.$http.get('/api/002').then((rep)=>{
						rep = rep.body;
						if(rep.mes == 1){
							this.dev = rep.data.dev;
						}
					});
				}
				if(this.$route.path == '/comic/3/dev'){
					this.$http.get('/api/003').then((rep)=>{
						rep = rep.body;
						if(rep.mes == 1){
							this.dev = rep.data.dev;
						}
					});
				}
				if(this.$route.path == '/comic/4/dev'){
					this.$http.get('/api/004').then((rep)=>{
						rep = rep.body;
						if(rep.mes == 1){
							this.dev = rep.data.dev;
						}
					});
				}
				if(this.$route.path == '/comic/5/dev'){
					this.$http.get('/api/005').then((rep)=>{
						rep = rep.body;
						if(rep.mes == 1){
							this.dev = rep.data.dev;
						}
					});
				}
			}
		},
		watch:{
			'$route':'rg'
		}
    }
</script>

<style lang="less">
	/*//作品详情页开始*/
	.mod-detail{
		padding-left: 1.25rem;
		padding-right: 1.25rem;
		position: relative;
		background:#fff;
		display: block;
		.iconfo{
			font-family: iconfontIco;
			font-size: 2rem;
			color: #C5C5C5;
			text-align: center;
			display: block;
			padding-bottom: 0.25rem;
			padding-top: 0.25rem;
		}
		.detail-summary{
			p{
				font-size: 0.7rem;
				color: #535252;
				line-height: 150%;
				padding-bottom: 0.75rem;
			}
		}
	}
	//作品详情页结束

	//推荐作品开始
	.mod-recom{
		padding-top: 0.75rem;
		padding-bottom:4rem;
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
		h2{
			font-size: 0.7rem;
			color: #969696;
			padding-bottom: 0.75rem;
			line-height: 100%;
			font-weight: normal;
			padding-left: 0.75rem;
			box-sizing: border-box;
		}
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
	//推荐作品结束


	//底部开始
	.footer{
		background: #ffffff;
		height: 3.25rem;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 9;
		width: 100%;
		.footer-box{
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			height: 100%;
			.left-box{
				display: flex;
				.foot-btn{
					display: block;
					background:url("../../common/images/sc_img_comic-index.png")no-repeat;
					-webkit-background-size:4.875rem 3.275rem;
					background-size:4.875rem 3.275rem;
					width: 1.35rem;
					height: 1.35rem;
					margin-left: 1.4rem;
					&:nth-of-type(1){
						background-position: 0rem -1.925rem;
					}
					&:nth-of-type(2){
						background-position: -1.6rem -1.925rem;
					}
					&:nth-of-type(3){
						background-position: -3.525rem 0rem;
					}
				}

			}
			.btn-ok{
				flex:.9;
				height: 2.25rem;
				background-color: #ff9a6a;
				text-align: center;
				margin-left: 0.5rem;
				margin-right: 0.75rem;
				font-weight: 800;
				color: #ffffff;
				line-height: 2.25rem;
				font-size:0.9rem;
			}
		}
	}
</style>