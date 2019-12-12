import Vue from 'vue'
import VueRouter from 'vue-router'
import Planner from '../views/Planner.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'planner',
        component: Planner
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
