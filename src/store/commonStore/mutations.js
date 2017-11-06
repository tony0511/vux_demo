// 公共 mutations
import * as types from './mutation-types';

const mutations = {
  [types.CHANGE_STATE](state, changeObj) { // 修改state数据
    const s = state;
    s[changeObj.type] = changeObj.value;
  },
  [types.SAVE_DATA](state, payload) { // 保存数据
    const s = state;
    s[payload.type] = payload.value;
  },
  [types.SAVE_DATA_LOADING](state, payload) { // 保存数据加载loading
    const s = state;
    s[`${payload.type}IsLoading`] = payload.value;
  },
};

export default mutations;
