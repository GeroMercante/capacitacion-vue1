import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Registro from "../views/Registro.vue";
import SignIn from "../views/SignIn.vue";
import UserList from "../components/UserList.vue";
import UserDetails from "../components/UserDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/users",
    name: "UserList",
    component: UserList,
  },
  {
    path: "/users/:userId",
    name: "UserDetails",
    component: UserDetails,
  },
  {
    path: "/register",
    name: "Registro",
    component: Registro,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
