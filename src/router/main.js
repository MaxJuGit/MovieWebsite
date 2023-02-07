import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Purchase from "../views/Purchase.vue";
import Checkout from "../views/Checkout.vue";
import Register from "../views/Register.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/store",
    component: Purchase,
  },
  {
    path: "/checkout",
    component: Checkout,
  },
  {
    path: "/register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;