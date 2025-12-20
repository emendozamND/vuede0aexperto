import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    // /courses/1 (detalle)
    {
      path: "/courses",
      component: () => import("../views/CourseLayoutView.vue"),
      children: [
        // /courses  (lista)
        {
          path: "",
          name: "courses",
          component: () => import("../views/CourseView.vue"),
        },
        // /courses/1 (detalle)
        {
          path: ":courseId(\\d+)",
          name: "courseDetail",
          component: () => import("../views/CourseDetailView.vue"),
        },
      ],
    },

    {
      path: "/nosotros",
      name: "about",
      component: AboutView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
