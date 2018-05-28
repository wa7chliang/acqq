import getters from './getters.js';

// 配置文件(以后独立封装)
const playMode = {
	sequence: 0, //顺序播放
	loop: 1,	//循环播放
	random: 2	//随机播放
}


var state = {
    show:false,
    isLogin:'/login',
    username:'wa7chliang',
    password:'123456',
    id: '',
		// 播放器数据
		isControl: false, //是否是控制播放器状态
    playing: false, //播放器是否播放状态
    fullScreen: false, //是否全屏
    playlist: [], //播放列表
		sequenceList: [], //顺序列表
		mode: playMode.sequence, //播放顺序模式
		currentIndex: 0, //	当前播放索引
}

const mutations = {
	ale(state){
			state.show = !state.show;
	},
	loginTest(state){
			if(state.username == 'wa7chliang' && state.password == '123456'){
					state.isLogin = '/mymsg';
			}else{
					state.isLogin = '/login';
			}
	},
	quickTest(state){
			state.isLogin = '/mymsg';
	},
	//修改state的函数
	SET_ISCONTROL_STATE (state, flag) {
		state.isControl = flag
	},
	SET_PLATING_STATE (state, flag) {
		state.playing = flag
	},
	SET_FULL_SCREEN (state, flag) {
		state.fullScreen = flag
	},
	SET_PLAYLIST (state, list) {
		state.playlist = list
	},
	SET_SEQUENCE_LIST (state, list) {
		state.sequenceList = list
	},
	SET_PLAY_MODE (state, mode) {
		state.mode = mode
	},
	SET_CURRENT_INDEX (state, index) {
		state.currentIndex = index
	}
}

export default{
     state,
     mutations,
     getters
};
