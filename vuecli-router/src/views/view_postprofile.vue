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
        <h1>{{title}} <br/> - {{item.nombre}} {{item.apellidos}}</h1>

        <ul>
            <li>
                <span><b>Id:</b></span> <span>{{item.id}}</span>
            </li>
            <li>
                <span><b>Nombre:</b></span> <span>{{item.nombre}}</span>
            </li>
            <li>
                <span><b>Apellidos:</b></span> <span>{{item.apellidos}}</span>
            </li>
            <li>
                <span><b>Género:</b></span> <span>{{item.genero}}</span>
            </li>
            <li>
                <span><b>Fec. Contratación:</b></span> <span>{{item.fecha_contratacion}}</span>
            </li>
            <li>
                <span><b>Fec. Nacimiento:</b></span> <span>{{item.fecha_nacimiento}}</span>
            </li>
            <li>
                <span><b>Departamento:</b></span> <span>{{item.departamento}}</span>
            </li>
            <li>
                <span><b>Cargo:</b></span> <span>{{item.cargo}}</span>
            </li>
            <li>
                <span><b>Salario:</b></span> <span>{{item.salario}}</span>
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
    pagetitle: 'Employee profile: ',

    components : {
        
    },

    data(){
        console.log("Postprofile.data()")
        return {
            title: "Employee profile of:",
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
            let id = this.$route.params.id
            console.log("get_profile: "+id)     
            ModelPost.get_profile({"id":id},(response)=>{
                this.item = response.data.data
                console.log(this.item,"this.item")
            })
        },//get_profile()
     
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