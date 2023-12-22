import {createRouter, createWebHistory} from 'vue-router'
import homeView from '@/views/homeView.vue'
import plantenView from '@/views/plantenView.vue'
import loginView from '@/views/loginView.vue'
import winkelMandView from '@/views/winkelMandView.vue'
import itemView from "@/views/itemView.vue"
import bedanktView from "@/views/bedanktView.vue";
//import usersView from "@/views/UsersView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: homeView
        },
        {
            path: '/planten',
            name: 'planten',
            component: plantenView
        },
        {
            path: '/login',
            name: 'login',
            component: loginView
        },
        {
            path: '/winkelmand',
            name: 'winkelmand',
            component: winkelMandView
        },
        {
            path: '/item/:id',
            name: 'item',
            component: itemView
        },
        {
            path: '/bedankt',
            name: 'bedankt',
            component: bedanktView
        }
        ]
})

export default router
