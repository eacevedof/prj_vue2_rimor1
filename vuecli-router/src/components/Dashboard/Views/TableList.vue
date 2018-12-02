<template>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <card>
                        <template slot="header">
                            <div class="float-right col-md-3">
                                <input type="text" v-model="table1.searchtag" v-on:keyup.enter="on_sarch"
                                       placeholder="buscar..." class="form-control">
                            </div>
                        </template>
                        <template slot="header">
                            <h4 class="card-title">Empleados</h4>
                            <p class="card-category">Departamento, cargo y salario ordenados por fecha de contrato</p>
                            <p class="card-category float-right">
                                Pag {{table1.opagination.currpage}} / {{table1.opagination.totpages}}
                                <small>(regs. {{table1.opagination.totregs}})</small>
                            </p>
                        </template>
                        <div class="table-responsive">
                            <l-table class="table-hover table-striped" 
                                :columns="table1.columns" :data="table1.data"
                                :opagination="table1.opagination"
                                >
                            </l-table>
                            <p class="card-category float-right">
                                Pag {{table1.opagination.currpage}} / {{table1.opagination.totpages}} <br/>
                                <small>(regs. {{table1.opagination.totregs}})</small>
                            </p>                            
                        </div>
                    </card>
                </div>
<!--
                <div class="col-12">
                    <card class="card-plain">
                        <template slot="header">
                            <h4 class="card-title">Table on Plain Background</h4>
                            <p class="card-category">Here is a subtitle for this table</p>
                        </template>
                        <div class="table-responsive">
                            <l-table class="table-hover" :columns="table2.columns" :data="table2.data">
                            </l-table>
                        </div>
                    </card>
                </div>
-->
            </div>
        </div>
    </div>
</template>
<script>
import LTable from 'src/components/UIComponents/Table.vue'
import Card from 'src/components/UIComponents/Cards/Card.vue'
import ModelEmployee from 'src/models/model_employee.js'
const tableColumns = ['Id','Nombre','Apellidos','Contrato','Cargo','Salario','Depto.']
export default {
    components: {
        LTable,
        Card
    },
    data() {
        return {
            table1: {
                columns: [...tableColumns],
                searchtag: "",
                data: [],
                opagination:{
                    currpage: 1,
                    perpage: 0,
                    totpages: 0,
                    totregs: 0                    
                }
            }
/*            
            table2: {
                columns: [...tableColumns],
                data: [...tableData]
            }
*/
        }
    },
    created: function () {
        console.log(this,"THIS.LOADING...")
        let iPage = this.$route.params.id
        console.log("iPage - "+iPage)
        this.get_employees()
    },//created()

    methods:{
        show_toasted(){
            this.$toasted.show("Loading...",{ 
                theme: "primary", 
                position: "top-center", 
                duration : 10000,
                icon : {
                    name : 'watch',
                    after : true // this will append the icon to the end of content
                }
            })         
        },
        clear_toasted(){
            this.$toasted.clear()
        },
        
        on_sarch(){
            this.get_employees()
        },
        
        get_employees() {  
            //this.show_toasted()
            let id = this.$route.params.id
            let stag = this.table1.searchtag
            
            if(id === undefined) id=1
            console.log("get_employees: "+id)
            
            ModelEmployee.get_data((response)=>{
                console.log(response.data,"DATOS EN get_employees")
                this.table1.data = response.data.data
                this.table1.opagination = {
                    currpage: response.data.pagination.currpage,
                    perpage: response.data.pagination.perpage,
                    totpages: response.data.pagination.totpages,
                    totregs: response.data.pagination.totregs
                }
                //this.table1.searchtag = response.data.searchtag
                //this.clear_toasted()
            },id,stag)
        },//get_employees()
        
    },//methods

    computed: {

    }//computed    
}
</script>
<style>
</style>
