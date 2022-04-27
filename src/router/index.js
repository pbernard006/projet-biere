import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: {
            title: 'Accueil',
        },
    },
    {
        path: '/biere/:id',
        name: 'Bière',
        component: AboutView,
        meta: {
            title: 'Bière',
        },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.afterEach((to, from) => {
    document.title = to.meta.title;
});
export default router;
