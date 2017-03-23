import Vue from 'vue'
import store from './store'
import Commando from './components/Commando.vue'

import materializeCss from 'materialize-css/dist/css/materialize.css'

new Vue({
  el: '#app',
  store,
  render: h => h(Commando)
})
