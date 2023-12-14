import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import TheMain from "../pages/Main.vue";
import TheUser from "../pages/User.vue";

const routes = [
  {
    path: "/",
    component: TheMain,
  },
  {
    path: "/user/:id",
    component: TheUser,
  },
];

export default new Router({
  mode: "history",
  routes,
});
