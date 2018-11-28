<!--

-->
<template>
    <div>
        <h1>{{title}}</h1>
        <p> 
        </p>   
        
        <ul>
            <li>
                <span><b>Nº</b></span> <span>{{item.id}}</span>
            </li>
            <li>
                <span><b>Nombre</b></span> <span>{{item.firstname}}</span>
            </li>            
        </ul>
    </div>
    <!--/Postprofile.vue-->
</template>

<script>
import ModelPost from '@/models/model_post'
import ModelPicklist from '@/models/model_picklist'

export default {
    name: 'Postprofile',
    pagetitle: 'Profile of ',

    components : {
        
    },

    data(){
        console.log("Postprofile.data()")
        return {
            title: "Profile of ",
            httpstatus: 200,
            result: "",

            item: []
        }
    },//data()
    
    created: function () {
   
   },//created()

    methods:{
        get_profile : function() {         
            ModelPost.get_profile((response)=>{
                this.item = response.data.data
            })
        },//get_titles()
     
    },//methods

    computed: {

    }//computed

}//Postprofile
</script>

<style>
.form-group.required .control-label:after {
  content:" *";
  color:red;
}
</style>