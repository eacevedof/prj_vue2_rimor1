<template>
    <!--Albums.vue-->
    <div>
        <h1>{{title}}</h1>
        <p> 
        - Albums.vue -
        </p>
        <eaflist v-bind:aritems="albums"/>
    </div>
    <!--/Albums.vue-->
</template>

<script>
import ModelAlbum from '@/models/ModelAlbum.js'
import eaflist from '@/elements/Eaflist'

export default {
    name: 'Albums',

    components : {
        eaflist
    },

    data(){
        console.log("Albums.data()")
        return {
            title: "Albums",
            albums: []
        }
    },//data()
    
    created: function () {
        console.log("Albums.create()")
        this.get_Albums()
    },//created()

    methods:{
        get_Albums : function() {
            console.log("Albums.methods.get_Albums()")   
            ModelAlbum.get_data((response)=>{
                this.albums = response.data
            })
        },//get_Albums()
    },//methods

    computed: {

    }//computed
}//Albums.
</script>
