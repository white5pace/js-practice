import {createStore} from 'vuex';

import coachesModules from './modules/coaches/index';
import requestModules from './modules/requests/index';

const store = createStore({
  modules: {
    coaches: coachesModules,
    requests: requestModules,
  },
  state() {
    return {
      userId: 'c3',
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;