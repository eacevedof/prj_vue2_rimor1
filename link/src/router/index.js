import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Posts from '@/views/Posts'
import Albums from '@/views/Albums'
import Photos from '@/views/Photos'

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
