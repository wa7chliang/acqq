<template>
  <div id="app">
    <router-view/>
    <go-top/>
		<Player />    
  </div>
</template>

<script>
import Player from './components/common/player'
import goTop from './components/common/gotop.vue'
export default {
  name: 'App',
  components : {
    goTop,
		Player    
  }
}
</script>

<style lang="less">
	@import "./common/less/screen";  
</style>

