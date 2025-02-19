import { createRouter, createWebHistory } from 'vue-router';
import { useRouter } from "vue-router";
import { routes } from "../router/routes";

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const title = "Missão Meu Pet";

router.beforeEach((to, from, next) => {
    const router = useRouter();

    const nearestWithTitle = to.matched
        .slice()
        .reverse()
        .find((r) => r.meta && r.meta.title);

    if (nearestWithTitle) {
        document.title = nearestWithTitle.meta.title + " | " + title || title;
    }
});

export default router;