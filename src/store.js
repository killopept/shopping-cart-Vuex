import Vue from 'vue'
import Vuex from 'vuex'

// import state from './store/state.js'
import { state } from './store/doCounter/state'
import  mutations from './store/doCounter/mutations'
import  actions from './store/doCounter/actions'
import getters from './store/doCounter/getters.js'
import cart from './store/modulesCart/cart'
import products from './store/modulesProducts/products'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const moduleCouter = {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters
}

export default new Vuex.Store({
  modules:{
    moduleCouter,
    cart,
    products,
  },
  // plugins: debug ? [createLogger()] : []
})
