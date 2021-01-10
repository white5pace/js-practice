import {createStore} from 'vuex';
import mutations from '@/store/mutations';
import actions from '@/store/actions';
import getters from '@/store/getters';
import counterModule from '@/store/modules/counter/index'

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
});

export default store;