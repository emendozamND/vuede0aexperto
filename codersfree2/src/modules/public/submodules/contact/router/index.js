export default [
    {
        path: "contact",
        children: [
            { path: "", name: "public.contact.main", component: () => import("../views/ContactView.vue") },
            { path: "support", name: "public.contact.support", component: () => import("../views/ContactSupportView.vue") },
            { path: "faq", name: "public.contact.faq", component: () => import("../views/ContactFaqView.vue") },
        ],
    },
];