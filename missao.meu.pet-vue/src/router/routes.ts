import DefaultLayout from "../layouts/Default.vue";
import index from '../views/dashboard/index.vue';

const dashboardRoutes = [
    {
        path: "/",
        name: "Inicio",
        component: index,
        meta: { title: "Dashboard", authRequired: true, layout: DefaultLayout }
    }
].map((data) => {
    return {
        ...data,
        meta: { ...data.meta, layout: DefaultLayout }
    };
});

export const routes = [
    ...dashboardRoutes,
];
