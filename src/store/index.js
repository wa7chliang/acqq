import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import mutations from './mutations.js'
import actions from './actions.js'

export default new Vuex.Store({
    modules:{
          mutations
     },
    actions
});
