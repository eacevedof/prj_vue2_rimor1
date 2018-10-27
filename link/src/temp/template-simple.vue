<template>
    <!--template-simple.vue-->
    <div>
        <h1>{{title}}</h1>
        <p> 
        - template-simple.vue -
        </p>
    </div>
    <!--/template-simple.vue-->
</template>

<script>
export default {
    name: 'template-simple',

    components : {
        
    },

    data(){
        console.log("template-simple.data()")
        return {
            title: "template-simple",
        }
    },//data()
    
    created: function () {
        console.log("template-simple.create()")
    },//created()

    methods:{

    },//methods

    computed: {

    }//computed
}//template-simple.
</script>
