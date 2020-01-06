import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
const path = require('path')

Vue.use(Vuex)
const files = require.context('./modules', false, /\.js$/)
let modules = {}
files.keys().forEach((key) => {
  let basename = path.basename(key, '.js')
  modules[basename] = files(key).default
})

const store = new Vuex.store({
  modules,
  getters
})
export default store 