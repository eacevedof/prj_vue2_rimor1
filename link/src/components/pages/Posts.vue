<template>
    <!--Posts.vue-->
    <div>
        <h1>Posts</h1>
        <p> 
        - Posts.vue -
        </p>
        <eaflist v-bind:aritems="posts"/>
    </div>
    <!--/Posts.vue-->
</template>

<script>
import ModelPost from '@/models/ModelPost.js'
import eaflist from '@/elements/Eaflist'

export default {
    name: 'Posts',

    components : {
        eaflist
    },

    data(){
        console.log("data()")
        return {
            title: "- Posts.vue -",
            posts: []
        }
    },//data()
    
    created: function () {
        console.log("create()")
        this.posts = this.get_posts()
    },//created()
        
    methods:{
        get_posts : function() {         
            ModelPost.get_data((response)=>{
                this.posts = response.data
            })
        },//get_posts()
    },//methods

    computed: {

    }//computed
}//Posts.
</script>
