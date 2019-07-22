import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    sum: 0
  },
  mutations: {
    increment(state) {
      state.sum ++;
    },
    decrement(state) {
      state.sum --;
    },
    handleCounterDestroy(state, payload) {
      state.sum -= parseInt(payload.count);
    },
    clear(state) {
      state.sum = 0;
    }
  },
  getters: {
    sum: state => state.sum
  }
});

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
