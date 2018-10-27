<template>
  <!--home.vue-->
  <div>
    <h3>{{title}}</h3>
      <div class="row">
        <div class="col-sm-4">          
            <h4>Posts</h4>
            <eaflist v-bind:aritems="posts"/>
        </div>    
        <div class="col-sm-4">
            <h4>Albums</h4>
            <eaflist v-bind:aritems="albums"/>
        </div>          
        <div class="col-sm-4">
            <h4>Photos</h4>
            <eaflistimg v-bind:aritems="photos"/>
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
import eaflist from '@/components/Eaflist'
import eaflistimg from '@/components/Eaflistimg'
import axios from 'axios'

import ModelPost from '@/models/ModelPost'

export default {
    name: 'Home',

    components : {
        eaflist,eaflistimg
    },

    created: function () {
        console.log("create()")
        this.posts = this.get_posts()
        this.albums = this.get_albums()
        this.photos = this.get_photos()
    },//created()

    data(){
        console.log("data()")
        return {
            title: "- Home.vue -",
            posts: [],
            albums: [],
            photos: []
        }
    },//data()
    
    methods:{
        get_posts : function() {
            //const sUrlJson = "https://jsonplaceholder.typicode.com/posts/?_limit=20"
            //axios.get(sUrlJson).then((response)=>{
            //    this.posts = response.data
            //})            
            ModelPost.get_data((response)=>{
                this.posts = response.data
            })
        },//get_posts()

        get_albums : function() {
            const sUrlJson = "https://jsonplaceholder.typicode.com/albums/?_limit=20"
            axios.get(sUrlJson).then((response)=>{
                this.albums = response.data
            })
        },//get_albums()
        
        get_photos : function(){
           const sUrlJson = "https://jsonplaceholder.typicode.com/albums/1/photos/?_limit=20"
           axios.get(sUrlJson).then((response)=>{
                this.photos = response.data
            })
        }//get_photos()

    },//methods

    computed: {

    }//computed
}
</script>
