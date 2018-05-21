<template>
	<div ref="tall">
		<section class="tall-box" id="list">
			<ul class="tall-list">
				<li class="tall-item" v-for="(item,index) in list" :key="index">
					<div class="item-head">
						<div class="head-layLeft">
							<img :src="item.qq_head" class="item-img" alt="">
							<div class="head-layBox">
								<strong class="item-name">{{item.nick_name}}</strong>
								<span class="item-time">{{new Date(item.pub_time * 1000).toLocaleDateString()}}</span>
							</div>
						</div>
					</div>
					<div class="item-cont">
						<p class="cont">{{item.content}}</p>
					</div>
				</li>
				<div class="loading" id="load">{{loaderContent}}</div>
			</ul>
		</section>
		<section class="tall-footer">
			<a class="footer-btn">我来说两句</a>
		</section>
	</div>
</template>

<script>
	import Recommend from '../../common/api/recommend';
	import { mapGetters } from 'vuex';
	
	export default {
		name: 'tall',
		props: {
			head: {
				type: Object
			}
		},
		computed:mapGetters([
			'id'
        ]),
		data() {
			return {
				tall: {},
				loaderContent: '嘿咻嘿咻加载中',
				list: [],
				totalNum: 0,
				page: 1,
				lastPage: 0,
				scollHeight: 0,
				flag: false,
				last: ''
			}
		},
		methods: {
			getList() {
				var self = this
				Recommend('/api/getCommentList', { id: this.id, page: this.page }).then((res) => {
					this.list = this.list.concat(res.data.data.commentList.slice(0))
					this.totalNum = res.data.data.totalNum
					this.lastPage = ~~(this.totalNum / 10)
					this.flag = true
					if (this.list.length == this.totalNum) this.loaderContent = '客官,人家已经没有那个的啦~~'
				})
			},
			scrollFun() {
				this.scollHeight = this.$refs.tall.offsetHeight - window.scrollY
				if (this.scollHeight < 500 && this.list.length < this.totalNum && this.page <= this.lastPage && this.flag) {
					this.flag = false
					var debounce = this.debounce(100, this.scrollGetList)
					debounce()
				}
			},
			scrollGetList() {
				this.page++
				// console.log(this.page)
				this.getList()
			},
			// 使用节流
			debounce(idle, action) {
				var self = this
				return function () {
					var ctx = this, args = arguments
					clearTimeout(self.last)
					self.last = setTimeout(function () {
						action.apply(ctx, args)
					}, idle)
				}
			}
		},
		created() {
			var that = this;
			this.getList()
		},
		mounted() {
			window.addEventListener('scroll', this.scrollFun)
		},
		beforeDestroy() {
			window.removeEventListener('scroll', this.scrollFun)
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