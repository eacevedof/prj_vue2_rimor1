//src/mixins/router.js
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/view_home'
import EmployeeIndex from '@/views/employees/view_index'
import EmployeeNew from '@/views/employees/view_new'
import EmployeeProfile from '@/views/employees/view_profile'

Vue.use(VueRouter)

const arRoutes = [
    { path: '/', name: 'home', component: Home },
    { path: '/employees/:id', name: 'employees', component: EmployeeIndex },
    { path: '/employee/new', name: 'employeenew', component: EmployeeNew },
    { path: '/employee/profile/:id', name: 'employeeprofile', component: EmployeeProfile }
]

const oVueRouter = new VueRouter({
    mode: 'history',
    routes: arRoutes
})// oVueRouter

export default oVueRouter
