import Vue from 'vue';
import Vuex from 'vuex';
import commonStore from './commonStore';

Vue.use(Vuex);

// 创建 store 实例
export default new Vuex.Store({
  modules: {
    commonStore,
  },
});
