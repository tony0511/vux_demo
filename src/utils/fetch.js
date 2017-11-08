import Axios from 'axios';
import qs from 'qs';
// import { Message } from 'element-ui';
// import { Message, MessageBox } from 'element-ui';
// import storage from '@/utils/storage';
// import router from '@/router';

// 创建Axios实例
const service = Axios.create({
  baseURL: '', // api的base_url
  timeout: 60000, // 请求超时时间
});

// 拦截每一次请求返回结果，并对结果进行处理
service.interceptors.response.use((response) => {
  // console.log(response);
  // if (response.data.code === 302) { // 后台返回302
  //   storage.clear(); // 清空localstorage中的数据
  //   router.replace({ name: 'login' }); // 跳转到登录页
  // }
  // if (response.data.code === 405) { // 用户没有改请求操作权限
  //   Message.error('没有改请求操作权限！');
  // }
  // if (response.data.code === 406) { // 用户没有菜单权限
  //   Message.error('没有菜单权限！');
  // }
  if (response.data.code === 407) { // 用户未登录
    // console.log(response.data);
    // MessageBox.alert(response.data.msg, {
    //   title: '温馨提示',
    //   confirmButtonText: '确定',
    //   callback() {
    //     console.log(response.data.data);
    //     // window.open('http://passport.touna.cn/sso', '_self', '');
    //     window.open(response.data.data, '_self', '');
    //   },
    // });
  }
  // 获取后台返回的json数据
  return response.data;
}, (error) => {
  console.log(error.response);
  return Promise.reject(error);
});

// 导出一般post和get请求方法
export function post(url, params) {
  console.log('postparams====', params);
  return service.post(url, qs.stringify(params));
}

export function get(url, params) {
  console.log('getparam====', params);
  return service.get(url, {
    params,
  });
}

// 导出post和get请求方法（添加 form-data 请求头）
export function postFormData(url, params) {
  console.log('postparams====', params);
  const formData = new FormData();
  Object.keys(params).forEach((key) => {
    formData.append(key, params[key]);
  });
  return service.post(url, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
}

export function getFormData(url, params) {
  console.log('getparam====', params);
  const formData = new FormData();
  Object.keys(params).forEach((key) => {
    formData.append(key, params[key]);
  });
  return service.get(url, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
}
