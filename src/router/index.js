import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import sourceData from "../data.json";

const routes = [
  { path: "/", name: "Home", component: Home },

  {
    path: "/vue-school-travel-app/:id/:slug",
    name: "destination.show",
    component: () => import("@/pages/DestinationShow.vue"),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
    beforeEnter(to, from) {
      const exists = sourceData.destinations.find(
        (destination) => destination.id === parseInt(to.params.id)
      );
      if (!exists) return { name: "NotFound" };
    },
    children: [
      {
        path: ":experienceSlug",
        name: "experience.show",
        component: () => import("@/pages/ExperienceShow.vue"),
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
      },
    ],
  },
  {
    path: "/protected",
    name: "protected",
    component: () => import("@/pages/Protected.vue"),
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/Login.vue"),
  },
  {
    path: "/invoices",
    name: "invoices",
    component: () => import("@/pages/Invoices.vue"),
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/pages/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, form, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0, behavior: "smooth" }), 300);
      })
    );
  },
});

router.beforeEach((to, from) => {
  if (to.meta.requiredAuth && !window.user) {
    return { name: "login" , query:{redirect:to.fullPath}};
  }
});
export default router;

//A rota passando como filha faz com que seja exibido o elemento dentro da pagina pai e não em uma nova pagina
