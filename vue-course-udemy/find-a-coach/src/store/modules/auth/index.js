export default {
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null,
    };
  },
  mutations: {
    setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
      state.tokenExpiration = payload.tokenExpiration;
    },
  },
  actions: {
    async auth(context, payload) {
      const loginEndPoint = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
      const signupEndPoint = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
      const apiKey = 'AIzaSyBGUJN7pd7L6uS-FiYb9gtyENrNAVST-c0';
      const fullEndPoint = (payload.mode === 'signup' ? signupEndPoint : loginEndPoint) + apiKey;
      console.log(fullEndPoint);
      const response = await fetch(
          fullEndPoint,
          {
            method: 'POST',
            body: JSON.stringify({
              email: payload.email,
              password: payload.password,
              returnSecureToken: true,
            }),
          },
      );

      const responseData = await response.json();

      if (!response.ok) {
        console.log(responseData);
        const error = new Error(responseData.message || 'Failed to authenticate.');
        throw error;
      }

      console.log(responseData);
      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn,
      });
    },
    logout(context) {
      context.commit('setUser', {
        token: null,
        userId: null,
        tokenExpiration: null,
      });
    },
  },
  getters: {
    userId(state) {
      return state.userId;
    },
    token(state) {
      return state.token;
    },
    isAuthenticated(state) {
      return !!state.token;
    },
  },
};