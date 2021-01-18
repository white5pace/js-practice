import {createStore} from 'vuex';

import products from '@/store/modules/products';
import cart from '@/store/modules/cart';

const store = createStore({
  modules: {
    products,
    cart,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    auth(state, payload) {
      state.isLoggedIn = payload;
    },
  },
  actions: {
    login(context) {
      context.commit('auth', true);
    },
    logout(context) {
      context.commit('auth', false);
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;