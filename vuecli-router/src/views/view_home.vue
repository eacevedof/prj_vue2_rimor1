<template>
    <!--home.vue-->
    <div>
        <h1>Employees</h1>

        <div class="row">
            <div class="col-sm-4">          
                <eaflist v-bind:aritems="posts"/>
            </div>    
        </div>
    </div>
    <!--/home.vue-->
</template>

<script>
//https://github.com/eacevedof/prj_vue2_rimor1/blob/master/vue2/video12/component.html
import ModelPost from '@/models/model_post'
import ModelAlbum from '@/models/model_album'
import ModelPhoto from '@/models/model_photo'

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
//        this.albums = this.get_albums()
//        this.photos = this.get_photos()
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
                this.posts = response.data.data
                //console.log(this.posts,"uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu")
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
