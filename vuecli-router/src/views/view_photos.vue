<template>
    <!--Photos.vue-->
    <div>
        <h1>{{title}}</h1>
        <p> 
        - Photos.vue -
        </p>
        <eaflistimg v-bind:aritems="rows"/>
    </div>
    <!--/Photos.vue-->
</template>

<script>
import ModelPhoto from '@/models/model_photo'
import eaflistimg from '@/elements/Eaflistimg'

export default {
    name: 'Photos',
    pagetitle: 'Photos',

    components : {
        eaflistimg
    },

    data(){
        console.log("Photos.data()")
        return {
            title: "Photos",
            rows: []
        }
    },//data()
    
    created: function () {
        console.log("Photos.create()")
        this.get_photos()
    },//created()

    methods:{
        get_photos : function() {
            console.log("Photos.methods.get_photos()")   
            ModelPhoto.get_data((response)=>{
                this.rows = response.data
            })
        },//get_photos()
    },//methods

    computed: {

    }//computed
}//Photos.
</script>
