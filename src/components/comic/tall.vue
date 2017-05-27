<template>
    <div>
        <section class="tall-box" id="list">
            <ul class="tall-list">
                <li class="tall-item" v-for="(item,index) in tall.item" track-by="$index">
                    <div class="item-head">
                        <div class="head-layLeft">
                            <img src="/static/g.png" class="item-img" alt="">
                            <div class="head-layBox">
                                <strong class="item-name">{{item.name}}</strong>
                                <span class="item-time">{{item.time}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="item-cont">
                        <p class="cont">{{item.cont}}</p>
                    </div>
                </li>
                <div class="loading" id="load">嘿咻嘿咻加载中</div>
            </ul>
        </section>
        <section class="tall-footer">
            <a class="footer-btn">我来说两句</a>
        </section>
    </div>
</template>

<script>
    export default {
        name:'tall',
        props:{
            head:{
                type:Object
            }
        },
        data(){
            return {
                tall:{},
                num:500
            }
        },
        created(){
           	var body = document.getElementsByTagName('body')[0];
			var that = this;
            function move(){                                       
				if(body.scrollTop > that.num){
					for(let i=0;i<8;i++){
						that.tall.item.push(that.tall.item[i]);
						that.num +=80;
						if(that.num > 10000){
							that.num = 20000;
							var load = document.getElementById('load');									
							load.innerHTML = "客官，人家已经没有那个的啦~~";
						}
					}
				}
			}
            if(this.$route.path == '/comic/0/tall'){
                this.$http.get('/api/000').then(function(response){		
					response = response.body;
                    if(response.mes==1){
                        this.tall = response.data.tall;
                        body.addEventListener('touchmove',move);
					}
			    });
            }
            if(this.$route.path == '/comic/1/tall'){
                this.$http.get('/api/001').then(function(response){		
					response = response.body;
                    if(response.mes==1){
                        this.tall = response.data.tall;
                        body.addEventListener('touchmove',move);
					}
			    });
            }
            if(this.$route.path == '/comic/2/tall'){
                this.$http.get('/api/002').then(function(response){		
					response = response.body;
                    if(response.mes==1){
                        this.tall = response.data.tall;
                        body.addEventListener('touchmove',move);
					}
			    });
            }
            if(this.$route.path == '/comic/3/tall'){
                this.$http.get('/api/003').then(function(response){		
					response = response.body;
                    if(response.mes==1){
                        this.tall = response.data.tall;
                        body.addEventListener('touchmove',move);
					}
			    });
            }
            if(this.$route.path == '/comic/4/tall'){
                this.$http.get('/api/004').then(function(response){		
					response = response.body;
                    if(response.mes==1){
                        this.tall = response.data.tall;
                        body.addEventListener('touchmove',move);
					}
			    });
            }
            if(this.$route.path == '/comic/5/tall'){
                this.$http.get('/api/005').then(function(response){		
					response = response.body;
                    if(response.mes==1){
                        this.tall = response.data.tall;
                        body.addEventListener('touchmove',move);
					}
			    });
            }
        }
    }
</script>

<style lang="less">
    .tall-box{
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.25rem;
		padding-bottom: 3.75rem;
		background:#fff;
		position: relative;
		.tall-list{
			.tall-item{
				position: relative;
			    padding-top: 0.9rem;
				.item-head{
					display: flex;
					justify-content: space-between;
					align-items: center;
					color:#666;
					.head-layLeft{
						display:flex;
						align-item:center;
						font-size:0.7rem;
						.item-img{
							display: block;
							width: 1.5rem;
							height: 1.5rem;
							border-radius: 50%;
							margin-right: 0.3rem;
						}
						.head-layBox{
							display: flex;
							flex-direction: column;
							.item-name{
								color: #e86a3e;
								display: block;
								padding-bottom: 0.15rem;
							}
							.item-time{
								color: #cccccc;
    							font-size: 0.6rem;
							}
						}
					}
				}
				.item-cont{
				    padding-left: 1.75rem;
					padding-top: 0.5rem;
					padding-bottom: 0.875rem;
					.cont{
						font-size: 0.8rem;
						color: #535252;
						line-height: 150%;
						word-break: break-all;
					}
				}
			}
			.loading{
				text-align: center;
				color:#666;
				font-size:0.7rem;
				margin-top: 0.7rem;
			}
		}
	}
	.tall-footer{
		position: fixed;
		display: flex;
		height: 3.25rem;
		z-index: 10;
		bottom: 0;
		left: 0;
		background-color: #F5F5EE;
		width: 100%;
		align-items: center;
		justify-content: center;
		.footer-btn{
			display: block;
			background-color: white;
			width: 17.75rem;
			border: 1px solid #C5C5C5;
			font-size: 0.7rem;
			color: #C5C5C5;
			text-align: center;
			height: 1.9rem;
			line-height: 1.9rem;
			border-radius: 0.95rem;
		}
	}
</style>