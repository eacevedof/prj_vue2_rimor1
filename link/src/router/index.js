import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/pages/Home'
import Posts from '@/components/pages/Posts'
import Albums from '@/components/pages/Albums'
import Photos from '@/components/pages/Photos'

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
