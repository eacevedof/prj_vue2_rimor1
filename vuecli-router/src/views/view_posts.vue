<template>
    <!--Posts.vue-->
    <div>
        <h1>{{title}}</h1>
        <router-link to="/employees/new" 
            class="btn btn-primary btn-lg active" 
            role="button" aria-pressed="true"> New employee </router-link><br/>
        
        <eaflist v-bind:aritems="rows"/>
    </div>
    <!--/Posts.vue-->
</template>

<script>
import ModelPost from '@/models/model_post'
import eaflist from '@/elements/Eaflist'

export default {
    name: 'Posts',
    pagetitle: 'Employees',
    components : {
        eaflist
    },

    data(){
        return {
            title: "Employees",
            rows: []
        }
    },//data()
    
    created: function () {
        let iPage = this.$route.params.id
        console.log("iPage - "+iPage)
        this.get_employees()
    },//created()

    methods:{
        get_employees() {
            let iPage = this.$route.params.id
            console.log("iPage yyy :"+iPage)
            ModelPost.get_data(
                (response)=>{
                this.rows = response.data
            },10)
        },//get_employees()
        
    },//methods

    computed: {

    }//computed
}//Posts.
</script>
