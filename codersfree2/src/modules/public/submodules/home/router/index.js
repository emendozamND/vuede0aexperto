// src/submodules/home/router/index.js
export default [
  {
    path: "/",
    // nota: lo dejo como "" para que sea el / (home real)
    children: [
      {
        path: "",
        name: "public.home",
        component: () => import("../views/HomeView.vue"),
      },
      {
        path: "features",
        name: "public.home.features",
        component: () => import("../views/HomeFeaturesView.vue"),
      },
      {
        path: "contact",
        name: "public.home.contact",
        component: () => import("../views/HomeContactView.vue"),
      },
    ],
  },
];
