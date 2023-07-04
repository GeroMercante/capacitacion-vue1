import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvlR3L14yjKB_NbEKw5mE--4vRHci2yKk",
  authDomain: "prueba-vue-981ef.firebaseapp.com",
  projectId: "prueba-vue-981ef",
  storageBucket: "prueba-vue-981ef.appspot.com",
  messagingSenderId: "8510120369",
  appId: "1:8510120369:web:14243cbe71779125c75d90",
};

initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
