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
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/pages/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

//A rota passando como filha faz com que seja exibido o elemento dentro da pagina pai e não em uma nova pagina
