import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/brazil",
    name: "Brazil",
    component: () => import("@/pages/Brazil.vue"),
  },
  {
    path: "/hawaii",
    name: "Hawaii",
    component: () => import("@/pages/Hawaii.vue"),
  },
  {
    path: "/jamaica",
    name: "Jamaica",
    component: () => import("@/pages/Jamaica.vue"),
  },
  {
    path: "/panama",
    name: "Panama",
    component: () => import("@/pages/Panama.vue"),
  },

  {
    path: "/vue-school-travel-app/:id",
    name: "destination.show",
    component: () => import("@/pages/DestinationShow.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
