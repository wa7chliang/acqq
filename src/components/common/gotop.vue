<template>
  <transition name="show" class="go-top">
    <div class="gt-btn" @click="goTop()" v-show="hs"></div>
  </transition>
</template>

<script>
  export default {
    name: 'go-top',
    data() {
      return {
        hs: false
      }
    },
    methods: {
      goTop() {
        window.scrollTo(0, 0)        
      },
      nowHeight() {
        window.scrollY > 300 ? this.hs = true : this.hs = false
      }
    },
    mounted() {
			window.addEventListener('scroll', this.nowHeight)
		},
		beforeDestroy() {
			window.removeEventListener('scroll', this.nowHeight)
		}
  }
</script>

<style lang="less">
  .gt-btn {
    width: 1.35rem;
    height: 1.35rem;
    background: #fff url('../../common/images/sc_img_default.png') no-repeat -8.7rem -5.3rem;
    background-size: 14.8rem 7rem;
    border: 1px solid #ddd;
    position: fixed;
    right: 1rem;
    bottom: 4rem;
  }
  .show-enter-active, .show-leave-active{
      transition: all .3s;
  }
  .show-enter, .show-leave-to{
    transform: translate3d(0, 100%, 0);
  }
</style>
