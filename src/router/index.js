import {createRouter, createWebHistory} from "vue-router";

import Welcome from "@/views/Login.vue"


import Emp from "@/views/Emp.vue"
import Dish from "@/views/Dish.vue"
import Category from "@/views/Category.vue"
import AllTotal from "@/views/AllTotal.vue"
import Main from '@/components/Main.vue'
import Work from "@/views/Work.vue"
import Order from "@/views/Order.vue";
import SetEmal from "@/views/Setemal.vue"
import NotFound from "@/views/NotFound.vue";

const routes=[
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Welcome
    },
    {
        path: '/home',
        component: Main,
        redirect: '/Emp',
        children: [
            {
                path: '/emp',
                component: Emp
            },
            {
                path: '/dish',
                component: Dish
            },
            {
                path: '/category',
                component: Category
            },
            {
                path: '/setemal',
                component: SetEmal
            },
            {
                path: '/work',
                component: Work
            },
            {
                path: '/alltotal',
                component: AllTotal
            },
            {
                path: '/order',
                component: Order
            },
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: NotFound

    }
]

const index=createRouter({
    history:createWebHistory(),
    routes
})
export default index