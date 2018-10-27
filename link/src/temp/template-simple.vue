<template>
    <!--template-simple.vue-->
    <div>
        <h1>template-simple</h1>
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

    created: function () {
        console.log("create()")
    },//created()

    data(){
        console.log("data()")
        return {
            title: "- template-simple.vue -",
        }
    },//data()
    
    methods:{

    },//methods

    computed: {

    }//computed
}//template-simple.
</script>
