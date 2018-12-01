<template>
    <card>
        <h4 slot="header" class="card-title">New Employee</h4>
        <form v-on:submit.prevent="insert">
<!--            
            <div class="row">
                <div class="col-md-5">
                    <fg-input type="text" label="Company" :disabled="true" placeholder="Paper dashboard" v-model="user.company">
                    </fg-input>
                </div>
                <div class="col-md-3">
                    <fg-input type="text" label="Username" placeholder="Username" v-model="user.username">
                    </fg-input>
                </div>
                <div class="col-md-4">
                    <fg-input type="email" label="Username" placeholder="Email" v-model="user.email">
                    </fg-input>
                </div>
            </div>
-->
            <div class="row">
                <div class="col-md-6">
                    <fg-input type="text" label="Nombre" placeholder="Nombre" v-model="firstname">
                    </fg-input>
                </div>
                <div class="col-md-6">
                    <fg-input type="text" label="Apellidos" placeholder="Last Name" v-model="lastname" >
                    </fg-input>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <fg-input type="date" label="Fec. Nacimiento" placeholder="Fec. Nacimiento" v-model="birthdate">
                    </fg-input>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <label class="control-label" for="txtGender">Género</label>
                    <select id="selGender" v-model="gender" class="form-control" aria-describedby="Género" required>
                        <option value="F">Mujer</option>
                        <option value="M">Hombre</option>
                    </select>
                </div>
                <div class="col-md-4">
                    <label class="control-label" for="selDepartment">Departamento</label>
                    <select id="selDepartment" v-model="deptno" class="form-control" aria-describedby="Departamento" required>
                        <option  v-bind:value="item.deptno" v-for="item in departments" v-bind:key="item.deptno">{{item.deptname}}</option>
                    </select>
                </div>
                <div class="col-md-4">
               <label class="control-label" for="selTitle">Cargo</label>
                <select id="selTitle" v-model="utitle" class="form-control" aria-describedby="Cargo" required>
                    <option v-bind:value="item.title" v-for="item in titles" v-bind:key="item.title">{{item.title}}</option>
                </select>
                </div>                
                <div class="col-md-4">
                    <fg-input type="number" label="Postal Code" placeholder="ZIP Code" v-model="user.postalCode">
                    </fg-input>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label>About Me</label>
                        <textarea rows="5" class="form-control border-input" placeholder="Here can be your description" v-model="user.aboutMe">
                        </textarea>
                    </div>
                </div>
            </div>
            
            <div class="text-center">
                <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="updateProfile">
                    Save Profile
                </button>
            </div>
            <div class="clearfix"></div>
        </form>
    </card>
</template>
<script>
import Card from 'src/components/UIComponents/Cards/Card.vue'    
import ModelEmployee from '@/models/model_employee'
import ModelPicklist from '@/models/model_picklist'
export default {
    components: {
        Card
    },
    data() {
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
    },
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

            ModelEmployee.insert(oData,(response)=>{
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

    }
}
</script>
<style>

</style>
