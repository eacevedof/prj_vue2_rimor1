<template>
    <!--Employees.vue-->
    <div>
        <h1>{{title}}</h1>
        <router-link to="/employees/new" 
            class="btn btn-primary btn-lg active" 
            role="button" aria-pressed="true"> New employee </router-link><br/>
        
        <eaflist v-bind:aritems="rows"/>
    </div>
    <!--/Employees.vue-->
</template>

<script>
import ModelEmployee from '@/models/model_employee'
import eaflist from '@/elements/Eaflist'

export default {
    name: 'Employees',
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
            ModelEmployee.get_data(
                (response)=>{
                this.rows = response.data
            },10)
        },//get_employees()
        
    },//methods

    computed: {

    }//computed
}//Employees.
</script>
