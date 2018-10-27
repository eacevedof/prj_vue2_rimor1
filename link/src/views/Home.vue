<template>
    <!--home.vue-->
    <div>
        <h1>Home</h1>
        <p> 
        - Home.vue -
        </p>
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
import ModelPost from '@/models/ModelPost.js'
import ModelAlbum from '@/models/ModelAlbum.js'
import ModelPhoto from '@/models/ModelPhoto.js'

import eaflist from '@/elements/Eaflist'
import eaflistimg from '@/elements/Eaflistimg'

export default {
    name: 'Home',
    pagetitle: 'Home',

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
            ModelPost.get_data((response)=>{
                this.posts = response.data
            })
        },//get_posts()

        get_albums : function() {
            ModelAlbum.get_data((response)=>{
                this.albums = response.data
            })
        },//get_albums()
        
        get_photos : function(){
            ModelPhoto.get_data((response)=>{
                this.photos = response.data
            })
        }//get_photos()

    },//methods

    computed: {

    }//computed
}
</script>
