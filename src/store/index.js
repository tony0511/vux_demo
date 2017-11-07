import Vue from 'vue';
import Vuex from 'vuex';
import objectAssign from 'object-assign';
import vuexI18n from 'vuex-i18n';
import { LocalePlugin } from 'vux'; // 获取当地标识符组件
import commonStore from './commonStore';

Vue.use(Vuex);
Vue.use(LocalePlugin);

// 创建 store 实例
const store = new Vuex.Store({
  modules: {
    commonStore,
    i18n: vuexI18n.store,
  },
});

// === 添加 i18n 多语言切换插件 ===
Vue.use(vuexI18n.plugin, store);

/* eslint-disable */
const vuxLocales = require('json-loader!yaml-loader!../locales/all.yml');
const componentsLocales = require('json-loader!yaml-loader!../locales/components.yml');
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
/* eslint-enable */

export default store;
