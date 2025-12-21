export default [
  {
    path: "about",
    children: [
      {
        path: "",
        name: "public.about.main",
        component: () => import("../views/AboutView.vue"),
      },
      {
        path: "team",
        name: "public.about.team",
        component: () => import("../views/AboutTeamView.vue"),
      },
      {
        path: "company",
        name: "public.about.company",
        component: () => import("../views/AboutCompanyView.vue"),
      },
    ],
  },
];