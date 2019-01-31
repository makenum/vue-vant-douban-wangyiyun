import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters';
import common from './modules/common'
import location from './modules/location'
import collect from './modules/collect'
import searchHistory from './modules/searchHistory'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        common,
        location,
        collect,
        searchHistory
    },

    getters
});