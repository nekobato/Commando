import { ipcRenderer } from 'electron'
import Vue from 'vue'
import Vuex from 'vuex'
import types from 'root/mutation-types'

Vue.use(Vuex)

const DEBUG = process.env.NODE_ENV !== 'production'

Vue.config.debug = DEBUG ? true : false

const store = new Vuex.Store({
  state: {
    killme: 'baby'
  },
  mutations: {},
  strict: DEBUG
})

ipcRenderer.on(types.CONNECT_COMMIT, (event, typeName, payload) => {
  store.commit(typeName, JSON.parse(payload))
})

export default store
