import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('/src/view/login/index')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router