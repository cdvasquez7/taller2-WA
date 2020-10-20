import Vue from 'vue'
import VueRouter from 'vue-router'

import DepartmentCreate from '../components/departments/DepartmentCreate.vue'
import DepartmentUpdate from '../components/departments/DepartmentUpdate.vue'
import Departments from '../components/departments/Departments.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        // component: Dashboard,
        meta: { requiresAuth: true }
    },
    {
        path: '/users',
        name: 'users',
        //  component: Users,
        meta: { requiresAuth: true }
    },    
    {
        path: '/user/:ID',
        name: 'userDetail',
        //  component: Course,
        meta: { requiresAuth: true }
    },
    {
        path: '/user',
        name: 'userCreate',
        //  component: Course,
        meta: { requiresAuth: true }
    },
    {
        path: '/departments',
        name: 'departments',
        component: Departments,
        //meta: { requiresAuth: true }
    },    
    {
        path: '/department/detail/:ID',
        name: 'departmentDetail',
        // component: Course,
        meta: { requiresAuth: true }
    },
    {
        path: '/department/create',
        name: 'departmentCreate',
        component: DepartmentCreate,
        //meta: { requiresAuth: true }
    },
    {
        path: '/department/update/:ID',
        name: 'departmentUpdate',
        component: DepartmentUpdate,
        //meta: { requiresAuth: true }
    },
  ]

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

  export default router

