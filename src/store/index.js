import { createStore } from "vuex";

import { auth, db } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const authData = localStorage.getItem("auth");
let initialStateUser = null;

if (authData) {
  const userData = JSON.parse(authData);
  initialStateUser = {
    uid: userData.uid,
    email: userData.email,
    isAdmin: userData.isAdmin,
    displayName: userData.displayName,
  };
}

console.log(initialStateUser);

const store = createStore({
  state: {
    // prueba vuex (ver Home.vue)
    puntos: 0,
    // autenticacion usuario firebase
    user: initialStateUser,
  },
  getters: {},
  mutations: {
    sumarPuntos(state, payload) {
      state.puntos = state.puntos + payload;
    },
    restarPuntos(state, payload) {
      state.puntos = state.puntos - payload;
    },

    setUser(state, payload) {
      state.user = payload;
      console.log("estado de usuario:", state);
    },
  },

  actions: {
    async signup(context, { email, password, displayName }) {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const uid = res.user.uid;
      const userRef = db.collection("usuarios").doc(uid);

      if (res) {
        context.commit("setUser", res.user);
      }

      userRef.set({
        uid,
        email,
        isAdmin: false,
        displayName,
      });

      localStorage.setItem(
        "auth",
        JSON.stringify({
          uid: res.user.uid,
          email: res.user.email,
          isAdmin: false,
          displayName: displayName,
        })
      );
    },

    async login(context, { email, password }) {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const docRef = doc(db, "usuarios", user.uid);
      const docSnap = await getDoc(docRef);
      const isAdmin = docSnap.get("isAdmin");
      const userName = docSnap.get("displayName");

      if (user) {
        context.commit("setUser", user.user);
      }

      localStorage.setItem(
        "auth",
        JSON.stringify({
          uid: user.uid,
          email: user.email,
          isAdmin: isAdmin,
          displayName: userName,
        })
      );
    },

    logout(context) {
      localStorage.removeItem("auth");
      context.commit("setUser", null);
    },
  },
  modules: {},
});

export default store;
