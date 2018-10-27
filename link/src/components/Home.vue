<template>
  <!--home.vue-->
  <div>
    <h3>{{msg}}</h3>
      <div class="row">
        <div class="col-sm-4">
            <h4>Albums</h4>
            <EafList v-bind:aritems="albums"/>
        </div>
        <div class="col-sm-4">
            <h4>Posts</h4>
            <EafList v-bind:aritems="posts"/>
        </div>      
        <div class="col-sm-4">
            <h4>Photos</h4>
            <EafList v-bind:aritems="photos"/>
        </div>
        <hr/>            
        <div class="col-sm-12">
            <h4>JSON</h4>
            <pre style="background:#e0e0e0; border:1px solid #ccc">
                {{ $data }}
            </pre>
        </div>
      </div>
  </div>
  <!--/home.vue-->
</template>

<script>
//https://github.com/eacevedof/prj_vue2_rimor1/blob/master/vue2/video12/component.html
import axios from 'axios'
//import VueAxios from 'vue-axios'
import EafList from '@/components/EafList'
//Vue.use(VueAxios, axios)

export default {
  name: 'Home',

    created: function () {
        this.posts = this.get_posts()
        this.albums = this.get_albums()
    },

    data(){
      return {
        msg: "Bienvenido",
        posts: [],
        albums: [],
        photos: [
            {title: "foto 1"},
            {title: "foto 2"}
        ]
      }
    },//data
    
    methods:{
        get_posts : function() {
            const sUrlJson = "https://jsonplaceholder.typicode.com/posts/3"
            axios.get(sUrlJson).then((response)=>{
                this.posts = response.data
            })
        },//get_posts

        get_albums : function() {
            const sUrlJson = "https://jsonplaceholder.typicode.com/albums/3"
            axios.get(sUrlJson).then((response)=>{
                this.albums = response.data
            })
        },//get_albums        
    },//methods

    computed: {

    }//computed
}
</script>
