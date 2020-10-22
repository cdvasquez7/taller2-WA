import Vue from 'vue'
import VueRouter from 'vue-router'

import DepartmentCreate from '../components/departments/DepartmentCreate.vue'
import DepartmentUpdate from '../components/departments/DepartmentUpdate.vue'
import DepartmentDetail from '../components/departments/DepartmentDetail.vue'
import Departments from '../components/departments/Departments.vue'
import Users from '../components/users/Users.vue'
import UserUpdate from '../components/users/UserUpdate.vue'
import UserCreate from '../components/users/UserCreate.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/users',
        name: 'users',
        component: Users,
        meta: { requiresAuth: true }
    },    
    {
        path: '/user/create',
        name: 'userCreate',
        component: UserCreate,
        meta: { requiresAuth: false }
    },
    {
        path: '/user/update/:ID',
        name: 'userUpdate',
        component: UserUpdate,
        meta: { requiresAuth: true }
    },   
    {
        path: '/departments',
        name: 'departments',
        component: Departments,
        meta: { requiresAuth: true }
    },    
    {
        path: '/department/detail/:ID',
        name: 'departmentDetail',
        component: DepartmentDetail,
        meta: { requiresAuth: true }
    },
    {
        path: '/department/create',
        name: 'departmentCreate',
        component: DepartmentCreate,
        meta: { requiresAuth: true }
    },
    {
        path: '/department/update/:ID',
        name: 'departmentUpdate',
        component: DepartmentUpdate,
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { requiresAuth: false }
    },
    {
        path: '/',
        name: 'login',
        component: Login,
        meta: { requiresAuth: false }
    },
    
  ]

  const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
  })


  router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('user')  
    console.log(to)  
    if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
      next('/login')
    } else if (to.path === '/' && loggedIn) {
      next('/departments')
    }    
    next()
  })

  export default router

