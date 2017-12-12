import Vue from 'vue';
import Vuex from 'vuex';
import objectAssign from 'object-assign';
import vuexI18n from 'vuex-i18n';
import { LocalePlugin } from 'vux'; // 获取当地标识符组件
import commonStore from './commonStore';

Vue.use(Vuex);
Vue.use(LocalePlugin); // 使用获取当地标识符插件

// 创建 store 实例
const store = new Vuex.Store({
  modules: {
    commonStore,
    i18n: vuexI18n.store,
  },
});

/* eslint-disable */
// === 添加 i18n 多语言切换插件 ===
Vue.use(vuexI18n.plugin, store);

// const vuxLocales = require('json-loader!yaml-loader!../locales/all.yml'); // 使用json-loader和yaml-loader进行语言文件读取
// const componentsLocales = require('json-loader!yaml-loader!../locales/components.yml');
const vuxLocales = require('../locales/all.yml'); // yml 文件处理 loader 放到配置文件里了
const componentsLocales = require('../locales/components.yml');
console.log(vuxLocales, componentsLocales);
const finalLocales = { // 
  'en': objectAssign(vuxLocales['en'], componentsLocales['en']),
  'zh-CN': objectAssign(vuxLocales['zh-CN'], componentsLocales['zh-CN']),
};
for (const i in finalLocales) { // 
  Vue.i18n.add(i, finalLocales[i]);
}
const nowLocale = Vue.locale.get(); // 获取当地标识符
if (/zh/.test(nowLocale)) { // 根据获取到的当地标识符初始化默认语言
  Vue.i18n.set('zh-CN');
} else {
  Vue.i18n.set('en');
}
console.log(Vue.i18n);
/* eslint-enable */

// === 注册一个管理导航动画的store模块 ===
store.registerModule('vux', {
  state: {
    demoScrollTop: 0,
    isLoading: false,
    direction: 'forward',
  },
  mutations: {
    updateDemoPosition(state, payload) {
      state.demoScrollTop = payload.top;
    },
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading;
    },
    updateDirection(state, payload) {
      state.direction = payload.direction;
    },
  },
  actions: {
    updateDemoPosition({ commit }, top) {
      commit({ type: 'updateDemoPosition', top });
    },
  },
});

export default store;
