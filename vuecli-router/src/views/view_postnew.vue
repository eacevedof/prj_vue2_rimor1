<!--

-->
<template>
    <!--Postnew.vue-->
    <div>
        <h1>{{title}}</h1>
        <p> 
        </p>   
        <!-- <pre v-if="result">{{result}}</pre> -->
        <form v-on:submit.prevent="insert">
            <div class="form-group required">
                <label class="control-label" for="txtFirstname">Nombre</label>
                <input type="text" id="txtFirstname" class="form-control" aria-describedby="Nombre" 
                    placeholder="...nombre" v-model="firstname" required
                >
                <small id="txtFirstnameHelp" class="form-text text-muted">Nombre.</small>
            </div>

            <div class="form-group required">
                <label class="control-label" for="txtLastname">Apellidos</label>
                <input type="text" id="txtLastname" class="form-control" aria-describedby="Lastname" 
                    placeholder="...apellidos" v-model="lastname" required
                >
	            <small id="txtLastnameHelp" class="form-text text-muted">Apellidos.</small>
            </div>
            
            <div class="form-group required">
                <label class="control-label" for="txtBirthdate">Fec. Nacimiento</label>
                <input type="date" id="txtBirthdate" class="form-control" aria-describedby="Birthdate" 
                    placeholder="...Fecha nacimiento" v-model="birthdate" required
                >
                <small id="txtBirthdateHelp" class="form-text text-muted">Fecha nacimiento</small>
            </div>

            <div class="form-group required">
                <label class="control-label" for="txtGender">Género</label>
				<select id="selGender" v-model="gender" class="form-control" aria-describedby="Género" >
					<option value="F">Mujer</option>
					<option value="H">Hombre</option>
				</select>
                <small id="selGender" class="form-text text-muted">Género</small>
            </div>
            
            <div class="form-group required">
                <label class="control-label" for="selDepartment">Departamento</label>
                <select id="selDepartment" v-model="deptno" class="form-control" aria-describedby="Departamento">
                    <option v-for="item in departments" v-bind:key="item.id">{{item.name}}</option>
                </select>
            </div>       


           <div class="form-group required">
                <label class="control-label" for="selTitle">Cargo</label>
                <select id="selTitle" v-model="deptno" class="form-control" aria-describedby="Cargo">
                    <option v-for="item in titles" v-bind:key="item.id">{{item.name}}</option>
                </select>
            </div>

            <div class="form-group required">
                <label class="control-label" for="txtSalary">Salario</label>
                <input type="number" step="0.01" id="txtSalary" class="form-control" aria-describedby="Salario" 
                    placeholder="...salario" v-model="salary" required
                >
                <small id="txtSalary" class="form-text text-muted">Salario</small>
            </div>

            <input type="submit" class="btn btn-dark" value=" Save ">
        </form>
    </div>
    <!--/Postnew.vue-->
</template>

<script>
import ModelPost from '@/models/model_post'
import ModelPicklist from '@/models/model_picklist'
/*first_name
last_name
birth_name
gender
dept_no
title
salary */

export default {
    name: 'Postnew',
    pagetitle: 'New employee',

    components : {
        
    },

    data(){
        console.log("Postnew.data()")
        return {
            title: "New employee",
            httpstatus: 200,
            result: "",

            firstname: "",
            lastname: "",
            birthdate: "",
            gender: "",
            deptno: "",
            utitle: "",
            salary: "",

            titles: [],
            departments: [],
            rows: [],
        }
    },//data()
    
    created: function () {
        this.titles = this.get_titles()
        this.departments = this.get_departments()
    },//created()

    methods:{
        get_titles : function() {         
            ModelPicklist.get_titles((response)=>{
                this.titles = response.data.data
            })
        },//get_titles()

        get_departments : function() {         
            ModelPicklist.get_departments((response)=>{
                this.departments = response.data.data
            })
        },//get_departments()


        select(){},

        insert(){
            let oData = {
                firstname: this.firstname,
                lastname: this.lastname,
                birthdate: this.birthdate,
                gender: this.gender,
                deptno: this.deptno,
                utitle: this.utitle,
                salary: this.salary
            }

            ModelPost.insert(oData,(response)=>{
                //console.log(response)
                this.result = response
                this.httpstatus = response.status
                if(this.httpstatus===201){
                    this.$toasted
                        .success(`Employee created!! id:${this.result.data.id}`,{duration:5000,fullWidth:true})
                    this.fieldreset()
                }
                else
                    this.$toasted
                        .error(`Some error ocurred!! ${this.httpstatus}`,{duration:5000,fullWidth:true})
            })
        }, //insert
        update(){},
        delete(){},

        fieldreset(){
            this.firstname = ''
            this.lastname = ''
        }
    },//methods

    computed: {

    }//computed

}//Postnew
</script>

<style>
.form-group.required .control-label:after {
  content:" *";
  color:red;
}
</style>