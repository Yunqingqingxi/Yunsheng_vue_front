import {createRouter, createWebHistory} from "vue-router";

import Welcome from "@/components/Login.vue"


import Emp from "@/components/Emp.vue"
import Dish from "@/components/Dish.vue"
import Catagory from "@/components/Catagory.vue"
import AllTotal from "@/components/AllTotal.vue"
import buju from '@/components/vue/buju.vue'
import Work from "@/components/Work.vue"
import Order from "@/components/Order.vue";
import Setemal from "@/components/Setemal.vue"

const routes=[
    {path:'/',redirect:'/login'},
    {path:'/login',component:Welcome},

    {path:'/buju',component:buju,
        redirect: '/Emp',
    children:[
        {path: '/Emp',component:Emp},
        {path:'/Dish',component:Dish},
        {path:'/Catagory',component:Catagory},
        {path:'/Setemal',component:Setemal},
        {path:'/Work',component:Work},
        {path:'/AllTotal',component:AllTotal},
        {path:'/Order',component:Order},
    ]

    }

]

const index=createRouter({
    history:createWebHistory(),
    routes
})
export default index