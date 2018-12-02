<template>
    <card class="card-user">
        <!-- usercard.vue -->
        <img
             slot="image" 
             src="http://www.smartroombcn.com/wp-content/uploads/2018/06/MWC_TELECOMING_4_APAISADO.jpg" 
             alt="..." />
        
        <div class="author">
            <a v-bind:href="'/admin/employees/profile/'+ item.id">
                <img id="imgUser" class="avatar border-gray" src="https://previews.123rf.com/images/salamatik/salamatik1801/salamatik180100019/92979836-ic%C3%B4ne-de-visage-anonyme-de-profil-personne-silhouette-grise-avatar-par-d%C3%A9faut-masculin-photo-placeholder-.jpg" alt="..." />
                <h4 class="title">{{item.firstname}} {{item.lastname}}<br />
                    <small>{{item.id}}</small>
                </h4>
            </a>
        </div>
<!--
        <p class="description text-center"> "Lamborghini Mercy
            <br> Your chick she so thirsty
            <br> I'm in that two seat Lambo"
        </p>
        <div slot="footer" class="text-center">
            <button href="#" class="btn btn-simple"><i class="fa fa-facebook-square"></i></button>
            <button href="#" class="btn btn-simple"><i class="fa fa-twitter"></i></button>
            <button href="#" class="btn btn-simple"><i class="fa fa-google-plus-square"></i></button>
        </div>
-->
        <!--/usercard.vue -->
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
            employee:{},
            item:{
                id:"",
                firstname: "",
                lastname:"",
            },
            details: [{
                title: '12',
                subTitle: 'Files'
            }, {
                title: '2GB',
                subTitle: 'Used'
            }, {
                title: '24,6$',
                subTitle: 'Spent'
            }]
        }
    },
     created() {
        this.get_profile()  
    },//created()    
    methods: {
        
            get_profile() {    
            let id = this.$route.params.id
            console.log("get_profile: "+id)     
            ModelEmployee.get_profile({"id":id},(response)=>{
                this.employee = response.data.data
                this.item.id = this.employee.id
                this.item.firstname = this.employee.nombre
                this.item.lastname = this.employee.apellidos
                let genero = (this.employee.genero==="M"?"male":"female")
                //api: https://randomuser.me/api/?gender=female
                ModelEmployee.get_profile_pic(genero)   
            })
            
        },//get_profile()
     
        getClasses(index) {
            var remainder = index % 3
            if (remainder === 0) {
                return 'col-md-3 col-md-offset-1'
            } else if (remainder === 2) {
                return 'col-md-4'
            } else {
                return 'col-md-3'
            }
        }
    }
}
</script>
<style>

</style>