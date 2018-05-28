<template>
  <div>
    <div class="audio" v-show="isControl">
      <div class="left-box">
        <div id='clickbtn' @click="togglePlaying" v-show="!playing">
          <svg class="icon" style="width: 30px; height: 30px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3807"><path d="M416 336v352l28.944 12.576 227.056-176v-25.152l-227.056-176L416 336z m32 32.928L630.096 512 448 655.072V368.928z" fill="" p-id="3808"></path><path d="M512 0C375.248 0 246.672 53.28 149.984 150 53.264 246.672 0 375.248 0 512s53.264 265.328 149.984 362.016C246.672 970.736 375.248 1024 512 1024s265.328-53.28 362.032-150C970.736 777.328 1024 648.752 1024 512s-53.264-265.328-149.984-362.016C777.328 53.264 648.752 0 512 0z m339.408 851.392C760.736 942.064 640.208 992 512 992c-128.208 0-248.736-49.936-339.392-140.624C81.936 760.736 32 640.208 32 512s49.936-248.736 140.608-339.392C263.264 81.936 383.792 32 512 32s248.736 49.952 339.408 140.624C942.08 263.264 992 383.792 992 512s-49.92 248.736-140.592 339.392z" fill="" p-id="3809"></path></svg>
        </div>
        <div id="pause" @click="togglePlaying" v-show="playing">
          <svg class="icon" style="width: 30px; height: 30px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4231"><path d="M512 0C229.216 0 0 229.216 0 512c0 282.768 229.216 512 512 512 282.752 0 512-229.232 512-512C1024 229.216 794.752 0 512 0zM512 992C246.896 992 32 777.088 32 512 32 246.896 246.896 32 512 32c265.056 0 480 214.896 480 480C992 777.088 777.056 992 512 992zM371.008 320c-8.848 0-16 7.168-16 16l0 352c0 8.848 7.152 16 16 16s16-7.152 16-16L387.008 336C387.008 327.168 379.84 320 371.008 320zM652.992 320c-8.848 0-16 7.168-16 16l0 352c0 8.848 7.152 16 16 16s16-7.152 16-16L668.992 336C668.992 327.168 661.84 320 652.992 320z" p-id="4232"></path></svg>
        </div>
      </div>
      <img :src="currentSong.image" class="music-img">
      <div class="music-box">
        <div class="title-box">
          <p class="title" v-html="currentSong.name"></p>
          <span class="author"></span>
        </div>
        <span class="time-l">{{format(currentTime)}}</span>
        <div class="music-bar">
          <div class="bg-bar" ref="bgBar" @click="editAddress"></div>
          <div class="now-bar" ref="nowBar"></div>
        </div>
        <span class="time-r">{{format(currentSong.time)}}</span>
      </div>
    </div>
    <audio :src="currentSong.url" ref="audio" @timeupdate="updateTime"></audio>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  name: "player",
  data() {
    return {
      currentTime: 0,
      percent: 0
    }
  },
  computed: {
    ...mapGetters([
      'isControl',
      'playing',
      'playlist',
      'currentSong'
    ])
  },
  methods: {
    togglePlaying() {
      this.setPlayingState(!this.playing)
    },
    updateTime(e) {
      this.currentTime = e.target.currentTime
      this.percent = this.currentTime * 100/this.currentSong.time | 0
    },
    editAddress(e) {
      let barWidth = this.$refs.bgBar.clientWidth
      this.percent = e.layerX/barWidth * 100 | 0
      this.$refs.audio.currentTime = e.layerX | 0
    },
    format(interval) {
      interval = interval | 0 //| 0 为向下取整
      const minute = interval/60 | 0 //分
      const second = interval % 60 //秒
      if(second >= 10) return `${minute}:${second}`
      else return `${minute}:0${second}` 
    },
    ...mapMutations({
      setPlayingList: 'SET_PLAYLIST',
      setPlayingState: 'SET_PLATING_STATE'
    })
  },
  watch: {
    playing(newPlaying) {
      const audio = this.$refs.audio
      this.$nextTick(() => {
        newPlaying? audio.play():audio.pause()
      })
    },
    percent(newPercent) {
      if(newPercent >= 0) {
        this.$refs.nowBar.style.width = `${newPercent}%`
      }
    }
  },
  created() {
    this.setPlayingList([{
      url: 'https://api.hibai.cn/music/Music/Music?id=502866072&type=url',
      image: 'https://api.hibai.cn/music/Music/Music?id=502866072&type=pic',
      name: 'Ending',
      time: 185,
      author: "千坂"
    }])
  }
};
</script>
<style lang="less">
  .audio {width: 100%;overflow: hidden;position: fixed;bottom: 10px;left: 10px;z-index: 100;}
  #clickbtn, #pause {cursor: pointer;}
  .left-box {float: left;margin-right: 20px;}
  .music-img {width: 30px; height: 30px; margin-right: 20px;float: left;}
  .music-box {float: left;width: 60%;}
  .title-box {overflow: hidden;}
  .title-box p {font-size: 16px;float: left;color: #333;margin-right: 20px;}
  .title-box span {font-size: 14px;float: left;color: #666;}
  .music-bar {width: 70%;height: 10px; background: #eee; position: relative;display: inline-block;}
  .now-bar {width: 0; height: 10px; background: #00f;position: absolute; left: 0;top: 0;z-index: 2}
  .bg-bar {width: 100%; height: 10px; position: absolute; left: 0; top: 0; z-index: 3;}
  .time-l, .time-r {font-size: 12px;}
</style>


