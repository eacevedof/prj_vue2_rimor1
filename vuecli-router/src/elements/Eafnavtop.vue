<template>
    <!--Eafnavtop-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand company" href="#">&nbsp;&nbsp;The Company&nbsp;&nbsp;</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#divNavbar" aria-controls="navbarNavAltMarkup" aria-expanded="false" 
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="divNavbar" class="collapse navbar-collapse">
            <ul class="navbar-nav">
                <li v-for="item in routes" v-bind:key="item.id" class="nav-item">
                    <router-link v-bind:to="item.path" class="nav-link"> {{ item.text }} </router-link>
                </li> 
                <li class="nav-item">
                    <a href="https://github.com/eacevedof/prj_vue2_rimor1/tree/master/vuecli-router" 
                        target="_blank" class="nav-link">In Github</a>    
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