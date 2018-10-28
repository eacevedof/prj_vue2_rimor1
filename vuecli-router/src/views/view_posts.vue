<template>
    <!--Posts.vue-->
    <div>
        <h1>{{title}}</h1>
        <p> 
        - Posts.vue -
        </p>
        <router-link to="/posts/new" 
            class="btn btn-primary btn-lg active" 
            role="button" aria-pressed="true"> New post </router-link><br/>
        <eaflist v-bind:aritems="rows"/>
    </div>
    <!--/Posts.vue-->
</template>

<script>
import ModelPost from '@/models/model_post'
import eaflist from '@/elements/Eaflist'

export default {
    name: 'Posts',
    pagetitle: 'Posts',
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
