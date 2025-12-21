// src/modules/public/router/index.js

import aboutRoutes from "@/modules/public/submodules/about/router/index.js";
import blogRoutes from "@/modules/public/submodules/blog/router/index.js";
import contactRoutes from "@/modules/public/submodules/contact/router/index.js";
import homeRoutes from "@/modules/public/submodules/home/router/index.js"; // OJO: carpeta "Home" con mayúscula

const publicRoutes = [
    ...homeRoutes,
    ...aboutRoutes,
    ...blogRoutes,
    ...contactRoutes,
];

export default publicRoutes;
