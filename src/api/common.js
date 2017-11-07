import * as fetch from '@/utils/fetch';

const commonApi = {
  /*
    公共接口
  */
  get(preParams) { // 一般get请求
    return fetch.get(preParams.url, preParams.params);
  },
  post(preParams) { // 一般post请求
    return fetch.post(preParams.url, preParams.params);
  },
  getFormData(preParams) { // formData的get请求
    return fetch.getFormData(preParams.url, preParams.params);
  },
  postFormData(preParams) { // formData的post请求
    return fetch.postFormData(preParams.url, preParams.params);
  },
};

export default commonApi;
