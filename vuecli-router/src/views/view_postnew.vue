<!--

-->
<template>
    <!--Postnew.vue-->
    <div class="w-50 p-3">
        <h1>{{title}}</h1>

        <form v-on:submit.prevent="insert">
            <div class="form-group ">
                <label class="control-label" for="txtFirstname">Nombre</label>
                <input type="text" id="txtFirstname" class="form-control" aria-describedby="Nombre" 
                    placeholder="...nombre" v-model="firstname" 
                >
            </div>

            <div class="form-group ">
                <label class="control-label" for="txtLastname">Apellidos</label>
                <input type="text" id="txtLastname" class="form-control" aria-describedby="Lastname" 
                    placeholder="...apellidos" v-model="lastname" 
                >
            </div>
            
            <div class="form-group ">
                <label class="control-label" for="txtBirthdate">Fec. Nacimiento</label>
                <input type="date" id="txtBirthdate" class="form-control" aria-describedby="Birthdate" 
                    placeholder="...Fecha nacimiento" v-model="birthdate" 
                >
            </div>

            <div class="form-group ">
                <label class="control-label" for="txtGender">Género</label>
				<select id="selGender" v-model="gender" class="form-control" aria-describedby="Género" required>
					<option value="F">Mujer</option>
					<option value="H">Hombre</option>
				</select>
            </div>
            
            <div class="form-group ">
                <label class="control-label" for="selDepartment">Departamento</label>
                <select id="selDepartment" v-model="deptno" class="form-control" aria-describedby="Departamento" required>
                    <option  v-bind:value="item.deptno" v-for="item in departments" v-bind:key="item.deptno">{{item.deptname}}</option>
                </select>
            </div>       

           <div class="form-group ">
                <label class="control-label" for="selTitle">Cargo</label>
                <select id="selTitle" v-model="utitle" class="form-control" aria-describedby="Cargo" required>
                    <option v-bind:value="item.title" v-for="item in titles" v-bind:key="item.title">{{item.title}}</option>
                </select>
            </div>

            <div class="form-group ">
                <label class="control-label" for="txtSalary">Salario</label>
                <input type="number" step="0.01" id="txtSalary" class="form-control col-4" aria-describedby="Salario" 
                    placeholder="20.000,55" v-model="salary"  
                >
            </div>

            <div class="form-group" style="padding:10px">
                <input type="submit" class="btn btn-primary col-4 float-lg-right" style="margin-bottom:10px;" 
                   value=" Save ">
            </div>
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
        this.get_titles()
        this.get_departments()
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

                console.log(this.httpstatus,this.result.data)
                if(this.httpstatus===200){
                    this.$toasted
                        .success(`Employee created!! id: ${this.result.data.data.id}`,{duration:5000,fullWidth:true})
                    this.fieldreset()
                    //window.location.href = "/"
                    this.$router.push('/') 
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