import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import ProjectList from './pages/ProjectList.vue';
import SingleProject from './pages/SingleProject.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/blog',
            name: 'project',
            component: ProjectList
        },
        {
            path: '/blog/:slug',
            name: 'SingleProject',
            component: SingleProject
        },
        {
            path: "/:pathMatch(.*)*",
            name: 'not-foud',
            component: NotFound
        },
    ]
});
export { router };