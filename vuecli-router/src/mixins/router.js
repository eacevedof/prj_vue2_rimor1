//src/mixins/router.js
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/view_home'
import Posts from '@/views/view_posts'
import Postnew from '@/views/view_postnew'
import Postprofile from '@/views/view_postprofile'
import Albums from '@/views/view_albums'
import Photos from '@/views/view_photos'

Vue.use(VueRouter)

const arRoutes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/employee/new', name: 'New employee', component: Postnew },
    { path: '/employee/profile/:id', name: 'Profile', component: Postprofile }
]

const oVueRouter = new VueRouter({
    mode: 'history',
    routes: arRoutes
})// oVueRouter

export default oVueRouter
