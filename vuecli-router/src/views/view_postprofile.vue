<!--
id (employees.emp_no)
nombre (employees.first_name) 
apellidos (employees.last_name)
genero (employees.gender)
fecha_contratacion (employees.hire_date)
fecha_nacimiento (employees.birth_date)
departamento (departments.dept_name)
cargo (titles.title) 
salario (salaries.salary)

-->
<template>
    <div>
        <h1>{{title}}</h1>
        <p> 
        </p>   
        
        <ul>
            <li>
                <span><b>Id:</b></span> <span>{{item.id}}</span>
            </li>
            <li>
                <span><b>Nombre:</b></span> <span>{{item.firstname}}</span>
            </li>
            <li>
                <span><b>Apellidos:</b></span> <span>{{item.lastname}}</span>
            </li>
            <li>
                <span><b>Género:</b></span> <span>{{item.gender}}</span>
            </li>
            <li>
                <span><b>Fec. Contratación:</b></span> <span>{{item.hiredate}}</span>
            </li>
            <li>
                <span><b>Fec. Nacimiento:</b></span> <span>{{item.birthdate}}</span>
            </li>
            <li>
                <span><b>Departamento:</b></span> <span>{{item.depname}}</span>
            </li>
            <li>
                <span><b>Cargo:</b></span> <span>{{item.title}}</span>
            </li>
            <li>
                <span><b>Salario:</b></span> <span>{{item.salary}}</span>
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
        this.get_profile()    
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