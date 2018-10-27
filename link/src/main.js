// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
import Pagetitle from '@/mixins/pagetitle'

//https://tahazsh.com/vuebyte-change-page-title
//https://github.com/vuejs/vue-hackernews-2.0/blob/master/src/app.js
Vue.mixin(Pagetitle)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
