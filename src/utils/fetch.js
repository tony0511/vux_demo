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

export function post(url, preParams) {
  if (preParams.requireMode === 'json') return service.post(`/api_service/api/v1/${url}`, preParams.params, { headers: { 'Content-Type': 'application/json' } });
  if (preParams.requireMode === 'form-data') {
    const formData = new FormData();
    Object.keys(preParams.params).forEach((key) => {
      formData.append(key, preParams.params[key]);
    });
    return service.post(`/api_service/api/v1/${url}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
  }
  return service.post(`/api_service/api/v1/${url}`, qs.stringify(preParams.params));
}

export function get(url, preParams) {
  // console.log('getparam====', preParams);
  return service.get(`/api_service/api/v1/${url}`, { params: preParams.params });
}
