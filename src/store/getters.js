export default {
  show: function(state) {
    return state.show;
  },
  isLogin: function(state) {
    return state.isLogin;
  },
  username: function(state) {
    return state.username;
  },
  password: function(state) {
    return state.password;
  },
  id: function(state) {
    return state.id;
  },
  // 播放器的数据
  isControl: state => state.isControl,
  playing: state => state.playing,
  fullScreen: state => state.fullScreen,
  playlist: state => state.playlist,
  sequenceList: state => state.sequenceList,
  mode: state => state => state.mode,
  currentIndex: state => state.currentIndex,
  currentSong: (state) => {
    return state.playlist[state.currentIndex] || {}   //getters可以充当计算属性
  }
};
