import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import project from './modules/project'

export default new Vuex.Store({
    state: {
        test: 1
    },
    modules: {
        project
    },
    mutations: {},
    actions: {}
});