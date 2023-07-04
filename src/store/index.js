import { createStore } from "vuex";

const store = createStore({
  state: {
    // prueba vuex (ver Home.vue)
    puntos: 0,
    // autenticacion usuario firebase
    user: null,
  },
  getters: {},
  mutations: {
    // prueba vuex (ver Home.vue) suma y resta test
    sumarPuntos(state, payload) {
      state.puntos = state.puntos + payload;
    },
    restarPuntos(state, payload) {
      state.puntos = state.puntos - payload;
    },
    // autenticacion usuario firebase
    setUser(state, payload) {
      state.user = payload;
      console.log("estado de usuario:", state.user);
    },
  },
  actions: {
    signup(context, payload) {
      console.log("accion de inicio sesion");

      setTimeout(() => {
        context.commit("setUser", { email, password });
      }, 2000);
    },
  },
  modules: {},
});

export default store;
