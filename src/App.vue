<template>
  <div id="app">
    <router-view/>
    <go-top/>
  </div>
</template>

<script>
import goTop from './components/common/gotop.vue'
export default {
  name: 'App',
  components : {
    goTop
  }
}
</script>
