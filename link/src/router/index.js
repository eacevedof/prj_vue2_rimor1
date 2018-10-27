import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/Home'
import Posts from '@/components/pages/Posts'
import Albums from '@/components/pages/Albums'
import Photos from '@/components/pages/Photos'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/albums',
      name: 'Albums',
      component: Albums
    },
    {
      path: '/photos',
      name: 'Photos',
      component: Photos
    }
  ]
})
