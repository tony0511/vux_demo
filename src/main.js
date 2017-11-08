// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import { ToastPlugin, AlertPlugin, BusPlugin } from 'vux';
import store from './store';
import router from './router';
import App from './App';

require('es6-promise').polyfill(); // 兼容 IE 不支持 promise 处理

// 使用 plugins
// Vue.use(DevicePlugin);
Vue.use(ToastPlugin);
Vue.use(AlertPlugin);
// Vue.use(ConfirmPlugin);
// Vue.use(LoadingPlugin);
Vue.use(BusPlugin);
// Vue.use(DatetimePlugin);

FastClick.attach(document.body); // 移除移动端点击延迟

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app-box');
