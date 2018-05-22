<template>
	<div>
		<div class="header">
			<div class="top-btn-back" @click="back"><i>l</i></div>
			<h1>个人中心</h1>
			<a class="top-btn-search"><i>s</i></a>
			<a class="top-btn-menu" id="top-btn"><i>m</i></a>
		</div>
	</div>
</template>

<script>
    export default {
			name:'mymsg',
			methods: {
				back() {
					this.$router.back()
				}
			}
    }
</script>

<style lang="less">
	@font-face {
		font-family: 'iconfontIco';
			src: url('../../common/fonts/icomoon.eot');
			src: url('../../common/fonts/icomoon.eot?#iefix') format('embedded-opentype'),
			url('../../common/fonts/icomoon.woff') format('woff'),
			url('../../common/fonts/icomoon.ttf') format('truetype'),
			url('../../common/fonts/icomoon.svg#iconfontyyy') format('svg');
	}
	/*//头部开始*/
	.header{
			width: 100%;
			height: 2.5rem;
			display: flex;
			position:fixed;
			z-index:90;
			top:0;
			left: 0;
			background: #ffffff;
			/*//使用mixin*/
			.topBtn{
					display: block;
					padding:0.375rem;
			}
			.topBtnI{
					font-family:iconfontIco;
					font-style:normal;
					font-size:1.5rem;
					color:#ff9a66;
					display: block;
					width: 1.375rem;
			}
			.top-btn-search{
					.topBtn;
					i{
							.topBtnI;
					}
			}
			.top-btn-menu{
					.topBtn;
					i{
							.topBtnI;
					}
			}
			.top-btn-back{
					.topBtn;
					i{
							.topBtnI;
					}
			}
			h1{
					display: block;
					font-size: 0.9rem;
					color: #535252;
					overflow: hidden;
					margin-right:auto;
			}
	}
	/*//头部结束*/

</style>