<template>
    <!--Eafnavtop-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand company" href="#">&nbsp;&nbsp;The Company&nbsp;&nbsp;</a>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li v-for="item in routes" v-bind:key="item.id" class="nav-item">
                    <router-link v-bind:to="item.path" class="nav-link"> {{ item.text }} </router-link>
                </li>  
            </ul>
        </div>
    </nav> 
    <!--/Eafnavtop-->
</template>

<script>
module.exports = {
    name: "Eafnavtop",
    data() {
        console.log("Eafnavtop.data()")
        return { 
            routes: [
                {id:1, path:'/', text:'Home'},
                {id:2, path:'/posts', text:'Posts'},
                {id:3, path:'/albums', text:'Albums'},
                {id:4, path:'/photos', text:'Photos'},
            ]
        }
    }//data()
}
</script>

<style>
/* 
https://material.io/tools/color/#!/?view.left=0&view.right=0&primary.color=2979FF 
*/
.company{
    color:#004ecb!important;
    /* font-weight: bold; */
}
.router-link-exact-active{
    color:#2979ff!important;
    /* font-weight: bold;  */
} 
</style>