import getters from './getters.js';

var state = {
    show:false
}

const mutations = {
    ale(state){
        state.show = !state.show;
    }
}

export default{
     state,
     mutations,
     getters
};