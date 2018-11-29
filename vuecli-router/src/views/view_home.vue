<template>
    <!--home.vue-->
    <div>
        <h1>Employees</h1>

        <div class="row">
            <div class="col-sm-4">          
                <eaflist v-bind:aritems="employees" v-bind:opages="oPagination"/>
            </div>    
        </div>
    </div>
    <!--/home.vue-->
</template>

<script>
//https://github.com/eacevedof/prj_vue2_rimor1/blob/master/vue2/video12/component.html
import ModelPost from '@/models/model_post'

import eaflist from '@/elements/Eaflist'
import eaflistimg from '@/elements/Eaflistimg'

export default {
    name: 'Home',
    pagetitle: 'Employees',

    components : {
        eaflist,eaflistimg
    },
 
    created: function () {
        this.get_employees()
    },//created()

    data(){
        return {
            title: "",
            employees: [],
            oPagination: {}
        }
    },//data()
    
    methods:{
        get_employees : function() {     
            let id = this.$route.params.id
            if(id === undefined) id=1
            console.log("get_employees: "+id)      
            ModelPost.get_data((response)=>{
                this.employees = response.data.data
                this.oPagination = response.data.pagination
            },id)
        },//get_employees()
        
    },//methods

    computed: {

    }//computed
}
</script>
