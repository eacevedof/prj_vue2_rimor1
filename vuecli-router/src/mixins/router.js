//src/mixins/router.js
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/view_home'
import Posts from '@/views/view_posts'
import Albums from '@/views/view_albums'
import Photos from '@/views/view_photos'

Vue.use(VueRouter)

const arRoutes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/posts', name: 'Posts', component: Posts },
    { path: '/albums', name: 'Albums', component: Albums },
    { path: '/photos', name: 'Photos', component: Photos }
]

const oVueRouter = new VueRouter({
    mode: 'history',
    routes: arRoutes
})// oVueRouter

export default oVueRouter
