import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import Staff from './views/staff.vue'
import Interview from './views/interview.vue'
import Performance from './views/performance.vue'
import PerformanceMsg from './views/performanceMsg.vue'

import Login from './views/login.vue'
Vue.use(Router)
const router = new Router({

        base: process.env.BASE_URL,
        routes: [{
                path: '/',
                redirect: '/index'
            },
            {
                path: '/staff',
                name: 'staff',
                component: Index,
                children: [
                    { path: '', component: Staff },
                    { path: '/staff', name: 'staff', component: Staff },
                ]
            },
            {
                path: '/performance',
                name: 'performance',
                component: Index,
                children: [
                    { path: '', component: Performance },
                    { path: '/performance', name: 'performance', component: Performance },
                ]
            },
            {
                path: '/index',
                name: 'index',
                component: Index,
                children: [
                    { path: '', component: Interview },
                    { path: '/interview', name: 'interview', component: Interview },

                ]
            },
            {
                path: '/login',
                name: 'login',
                component: Login
            },
            {
                path: '/performanceMsg',
                name: 'performanceMsg',
                component: PerformanceMsg
            },
            // {
            //   path: '/staff',
            //   name: 'staff',
            //   component: Staff
            // },
            // {
            //   path: '/interview',
            //   name: 'interview',
            //   component: Interview
            // },
        ]
    })
    // router.beforeEach((to, from, next) => {
    //   // localStorage.setItem("eleToken", '');
    //   const isLogin = localStorage.eleToken ? true : false;
    //   if (to.path == '/login') {
    //     next()
    //   } else {
    //     if (isLogin) {
    //       next()
    //     } else {
    //       next('/login')
    //     }
    //   }
    // })
export default router