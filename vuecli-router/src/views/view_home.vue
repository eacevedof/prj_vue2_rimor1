<template>
    <!--home.vue-->
    <div>
        <h1>Employees</h1>

        <div class="row">
            <div class="col-sm-4">          
                <eaflist v-bind:aritems="employees" v-bind:opages="pagination"/>
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
        console.log(this.pagination,"pagination en created")
    },//created()

    data(){
        return {
            title: "",
            employees: [],
            pagination: {}
        }
    },//data()
    
    methods:{
        get_employees : function() {     
            let id = this.$route.params.id
            if(id === undefined) id=1
            console.log("get_employees: "+id)      
            ModelPost.get_data((response)=>{
                console.log(response.data.pagination,"pagination en get_data")
                this.employees = response.data.data
                this.pagination = {
                    currpage: response.data.pagination.currpage,
                    perpage: response.data.pagination.perpage,
                    totpages: response.data.pagination.totpages,
                    totregs: response.data.pagination.totregs
                }
            },id)
        },//get_employees()
        
    },//methods

    computed: {

    }//computed
}
</script>
