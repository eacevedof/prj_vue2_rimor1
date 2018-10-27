<template>
    <!--Posts.vue-->
    <div>
        <h1>{{title}}</h1>
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
            title: "Posts",
            posts: []
        }
    },//data()
    
    created: function () {
        console.log("create()")
        this.get_posts()
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
