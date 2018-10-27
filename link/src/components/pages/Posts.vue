<template>
    <!--Posts.vue-->
    <div>
        <h1>{{title}}</h1>
        <p> 
        - Posts.vue -
        </p>
        <eaflist v-bind:aritems="rows"/>
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
        console.log("Posts.data()")
        return {
            title: "Posts",
            rows: []
        }
    },//data()
    
    created: function () {
        console.log("Posts.create()")
        this.get_posts()
    },//created()

    methods:{
        get_posts : function() {
            console.log("Posts.methods.get_posts()")   
            ModelPost.get_data((response)=>{
                this.rows = response.data
            })
        },//get_posts()
    },//methods

    computed: {

    }//computed
}//Posts.
</script>
