import {createRouter, createWebHistory} from "vue-router";

import Welcome from "@/components/Login.vue"


import Emp from "@/components/Emp.vue"
import Dish from "@/components/Dish.vue"
import Catagory from "@/components/Catagory.vue"
import AllTotal from "@/components/AllTotal.vue"
import buju from '@/components/vue/buju.vue'
import Work from "@/components/Work.vue"
import Order from "@/components/Order.vue";
import SetEmal from "@/components/Setemal.vue"
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
        path: '/buju',
        component: buju,
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
                path: '/catagory',
                component: Catagory
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