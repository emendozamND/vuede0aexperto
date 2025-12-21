// src/submodules/blog/router/index.js
export default [
  {
    path: "blog",
    children: [
      {
        path: "",
        name: "public.blog.list",
        component: () => import("../views/BlogListView.vue"),
      },
      {
        path: "create",
        name: "public.blog.create",
        component: () => import("../views/BlogCreateView.vue"),
      },
      {
        path: ":slug",
        name: "public.blog.detail",
        component: () => import("../views/BlogDetailView.vue"),
      },
    ],
  },
];
