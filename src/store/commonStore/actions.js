// 公共 actions
// import { Message } from 'element-ui';
import router from '@/router';
import * as types from './mutation-types';
import Api from '../../api';

const actions = {
  /*
   *只要求返回状态，不要求存储数据
   */
  async onlyStatusGet({ commit }, preParams) { // eslint-disable-line
    try {
      const params = preParams;
      const response = await Api.common.get(params);
      if (response.status === 200) { // 成功
        return response;
      } else if (response.status === 500) {  // 失败
        return response;
      }
    } catch (error) {
      console.log(error);
      console.log(`${preParams.url}接口异常`);
    }
  },
  async onlyStatusPost({ commit }, preParams) { // eslint-disable-line
    try {
      const params = preParams;
      const response = await Api.common.post(params);
      if (response.status === 200) { // 成功
        return response;
      } else if (response.status === 500) {  // 失败
        return response;
      }
    } catch (error) {
      console.log(error);
      console.log(`${preParams.url}接口异常`);
    }
  },
  /*
   *只保存返回数据，不需要加载loading
   */
  async noLoadingDataGet({ commit }, preParams) { // eslint-disable-line
    try {
      const response = await Api.common.get(preParams);
      // console.log(response);
      if (response.status === 200) { // 成功
        commit(types.SAVE_DATA, { value: response.result, type: preParams.type }); // 保存数据
        return response;
      } else if (response.status === 500) {  // 失败
        // Message.error(response.msg);
        return response;
      }
    } catch (error) {
      console.log(error);
      console.log(`${preParams.url}接口异常`);
    }
  },
  async noLoadingDataPost({ commit }, preParams) { // eslint-disable-line
    try {
      const response = await Api.common.post(preParams);
      // console.log(response);
      if (response.status === 200) { // 成功
        commit(types.SAVE_DATA, { value: response.result, type: preParams.type }); // 保存数据
        return response;
      } else if (response.status === 500) {  // 失败
        // Message.error(response.msg);
        return response;
      }
    } catch (error) {
      console.log(error);
      console.log(`${preParams.url}接口异常`);
    }
  },
  /*
   *既要保存返回数据，也要保存加载loading
   */
  async hasLoadingDataGet({ commit }, preParams) { // eslint-disable-line
    try {
      commit(types.SAVE_DATA_LOADING, { value: true, type: preParams.type }); // 开始loading
      const response = await Api.common.get(preParams);
      if (response.status === 200) { // 成功
        commit(types.SAVE_DATA, { value: response.result, type: preParams.type }); // 保存分页列表数据
        commit(types.SAVE_DATA_LOADING, { value: false, type: preParams.type }); // 结束loading
        return response;
      } else if (response.status === 500) {  // 失败
        // Message.error(response.msg);
        commit(types.SAVE_DATA_LOADING, { value: false, type: preParams.type }); // 结束loading
        return response;
      }
      commit(types.SAVE_DATA_LOADING, { value: false, type: preParams.type }); // 结束loading
    } catch (error) {
      commit(types.SAVE_DATA_LOADING, { value: false, type: preParams.type }); // 结束loading
      console.log(error);
      console.log(`${preParams.url}接口异常`);
    }
  },
  async hasLoadingDataPost({ commit }, preParams) { // eslint-disable-line
    try {
      commit(types.SAVE_DATA_LOADING, { value: true, type: preParams.type }); // 开始loading
      const response = await Api.common.post(preParams);
      if (response.status === 200) { // 成功
        commit(types.SAVE_DATA, { value: response.result, type: preParams.type }); // 保存分页列表数据
        commit(types.SAVE_DATA_LOADING, { value: false, type: preParams.type }); // 结束loading
        return response;
      } else if (response.status === 500) {  // 失败
        // Message.error(response.msg);
        commit(types.SAVE_DATA_LOADING, { value: false, type: preParams.type }); // 结束loading
        return response;
      }
      commit(types.SAVE_DATA_LOADING, { value: false, type: preParams.type }); // 结束loading
    } catch (error) {
      commit(types.SAVE_DATA_LOADING, { value: false, type: preParams.type }); // 结束loading
      console.log(error);
      console.log(`${preParams.url}接口异常`);
    }
  },
  /*
   *保存新增或修改
   */
  async saveDataHasTipGet({ commit }, preParams) {
    try {
      commit(types.SAVE_DATA_LOADING, { value: true, type: preParams.type }); // 开始loading
      const params = preParams;
      const response = await Api.common.get(params);
      if (response.status === 200) { // 成功
        if (response.result === 'success') {
          // Message.success('保存成功！');
          router.back(-1);  // 返回前一页
        } else if (response.result === 'fail') {
          // Message.error('保存失败，请稍后重试！');
        }
      } else if (response.status === 500) {  // 失败，服务器异常
        // Message.error('保存失败，请稍后重试！');
      } else if (response.status === 412) {  // 失败，传入数据参数有误
        console.log(response.msg);
        // Message.error('保存失败，请稍后重试！');
      }
      commit(types.DT_SAVE_NEW_OR_SAVE_CHANGE_IS_LOADING, { value: false, type: preParams.type }); // 结束loading
    } catch (error) {
      commit(types.DT_SAVE_NEW_OR_SAVE_CHANGE_IS_LOADING, { value: false, type: preParams.type }); // 结束loading
      console.log(error);
      console.log(`${preParams.url}接口异常`);
    }
  },
  async saveDataHasTipPost({ commit }, preParams) {
    try {
      commit(types.SAVE_DATA_LOADING, { value: true, type: preParams.type }); // 开始loading
      const params = preParams;
      const response = await Api.common.post(params);
      if (response.status === 200) { // 成功
        if (response.result === 'success') {
          // Message.success('保存成功！');
          router.back(-1);  // 返回前一页
        } else if (response.result === 'fail') {
          // Message.error('保存失败，请稍后重试！');
        }
      } else if (response.status === 500) {  // 失败，服务器异常
        // Message.error('保存失败，请稍后重试！');
      } else if (response.status === 412) {  // 失败，传入数据参数有误
        console.log(response.msg);
        // Message.error('保存失败，请稍后重试！');
      }
      commit(types.DT_SAVE_NEW_OR_SAVE_CHANGE_IS_LOADING, { value: false, type: preParams.type }); // 结束loading
    } catch (error) {
      commit(types.DT_SAVE_NEW_OR_SAVE_CHANGE_IS_LOADING, { value: false, type: preParams.type }); // 结束loading
      console.log(error);
      console.log(`${preParams.url}接口异常`);
    }
  },
};

export default actions;
