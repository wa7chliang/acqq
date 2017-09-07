import getters from './getters.js';

var state = {
    show:false,
    isLogin:'/login',
    username:'wa7chliang',
    password:'123456',
    id: '',
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
    }
}

export default{
     state,
     mutations,
     getters
};
