import {createStore} from 'vuex';

import coachesModules from './modules/coaches/index';
import requestModules from './modules/requests/index';
import authModule from './modules/auth/index'

const store = createStore({
  modules: {
    coaches: coachesModules,
    requests: requestModules,
    auth: authModule,
  },

});

export default store;