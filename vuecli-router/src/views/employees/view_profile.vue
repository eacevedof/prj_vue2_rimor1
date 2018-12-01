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
        <h1>Employee Profile</h1>
        <div class="row">
            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="card col-lg-12" style="width: 20rem;">
                                <img class="card-img-top" src="https://affordableamericaninsurance.com/valley-choice-insurance/wp-content/uploads/sites/78/2015/07/no-image-300x300.png" alt="Card image cap">          
                            </div>
                            <br/>
                            <h5 class="card-title">{{item.nombre}} {{item.apellidos}}</h5>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Datos</h5>
                            <table>
                                <tr><th>Id: </th><td>{{item.id}}</td></tr>
                                <tr><th>Nombre: </th><td>{{item.nombre}}</td></tr>
                                <tr><th>Apellidos: </th><td>{{item.apellidos}}</td></tr>
                                <tr><th>Género: </th><td>{{item.genero}}</td></tr>
                                <tr><th>Fec. Contratación: </th><td>{{item.fecha_contratacion}}</td></tr>
                                <tr><th>Fec. Nacimiento: </th><td>{{item.fecha_nacimiento}}</td></tr>
                                <tr><th>Departamento: </th><td>{{item.departamento}}</td></tr>
                                <tr><th>Cargo: </th><td>{{item.cargo}}</td></tr>
                                <tr><th>Salario: </th><td>{{item.salario}}</td></tr>
                            </table><br/>
                            <a href="/1" class="btn btn-primary">Go list</a>
                        </div>
                    </div>
                </div>                
            </div>

        </div>
    </div>
    <!--/EmployeeProfile.vue-->
</template>

<script>
import ModelEmployee from '@/models/model_employee'
import ModelPicklist from '@/models/model_picklist'

export default {
    name: 'EmployeeProfile',
    pagetitle: 'Employee Profile',

    components : {
        
    },

    data(){
        console.log("EmployeeProfile.data()")
        return {
            title: "Employee Profile",
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
            ModelEmployee.get_profile({"id":id},(response)=>{
                this.item = response.data.data
                console.log(this.item,"this.item")
            })
        },//get_profile()
     
    },//methods

    computed: {

    }//computed

}//EmployeeProfile
</script>

<style>
.form-group.required .control-label:after {
  content:" *";
  color:red;
}
</style>