import mutations from '@/store/modules/counter/mutations';
import actions from '@/store/modules/counter/actions';
import getters from '@/store/modules/counter/getters';

export default {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};