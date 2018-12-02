<template>
    <card>
        <template slot="header">
            <h4 class="card-title">Perfil Empleado</h4>
            <p class="card-category">Solo consulta</p>
            <a class="float-right" href="/admin/employees">
                <i class="nc-icon nc-zoom-split"></i>
            </a>                
        </template>
        <form>
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
                <div class="col-md-2">
                    <fg-input type="text" label="Id" placeholder="Id" v-model="item.id" readonly/>
                </div>                
            </div>

            <div class="row">
                <div class="col-md-4">
                    <fg-input type="text" label="Nombre *" placeholder="Nombre" v-model="item.nombre" readonly/>
                </div>
                <div class="col-md-4">
                    <fg-input type="text" label="Apellidos *" placeholder="Apellidos" v-model="item.apellidos" readonly/>
                </div>                
                <div class="col-md-4">
                    <fg-input type="date" label="Fec. Nacimiento" placeholder="Fec. Nacimiento" v-model="item.fecha_nacimiento" readonly/>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <label class="control-label" for="txtGender">G&egrave;nero</label>
                    <select id="selGender" v-model="item.genero" class="form-control" aria-describedby="Género" readonly>
                        <option value="F">Mujer</option>
                        <option value="M">Hombre</option>
                    </select>
                </div>
                <div class="col-md-4">
                    <fg-input type="text" label="Departamento" v-model="item.departamento" readonly/>
                </div>
                <div class="col-md-4">
                    <fg-input type="text" label="Cargo" v-model="item.cargo" readonly/>
                </div>                
            </div>

            <div class="row">
                <div class="col-md-4">
                    <fg-input type="number" label="Salario" placeholder="2000.00" v-model="item.salario" readonly/>
                </div>
            </div>

            <div class="clearfix"></div>
        </form>
    </card>
</template>
<script>
import Card from 'src/components/UIComponents/Cards/Card.vue'    
import ModelEmployee from '@/models/model_employee'

export default {
    components: {
        Card
    },
    data() {
        return {
            item:{
                id:"",
                nombre:"",
                apellidos:"",
                genero:"",
                fecha_contratacion:"",
                fecha_nacimiento:"",
                departamento:"",
                cargo:"",
                salario:""
            }
        }
    },
        
     created() {
        this.get_profile()  
    },//created()
    
    methods:{
        
        get_profile() {    
            let id = this.$route.params.id
            console.log("get_profile: "+id)     
            ModelEmployee.get_profile({"id":id},(response)=>{
                this.item = response.data.data
                console.log(this.item,"this.item")
            })
            
        },//get_profile()
        
        show_toasted(){
            let sMessage = `
                Empleado creado!! 
                ${this.firstname} ${this.lastname} (${this.result.data.data.empno})
            `            
            this.$toasted.success(sMessage,{ 
                theme: "primary", 
                position: "top-center", 
                duration : 10000,
                fullWidth: false,
                icon : {
                    name : 'watch',
                    after : true // this will append the icon to the end of content
                }
            })         
        },

        show_message_nok(){
            this.$toasted
               .error(`Some error ocurred!! ${this.httpstatus}`,{duration:5000,fullWidth:true,type : 'error',
                icon : 'error_outline'})
        },
        
        clear_toasted(){
            this.$toasted.clear()
        },
    }
}
</script>
<style>

</style>
