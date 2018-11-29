<template>
    <!--Eafnavtop-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand company" href="#">&nbsp;&nbsp;API&nbsp;&nbsp;</a>
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
                    <a href="https://github.com/eacevedof/prj_miniapi" 
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
                {id:1, path:'/', text:'Employees'},
                {id:2, path:'/employee/new', text:'New employee'},
            ]
        }
    }//data()
}
</script>

<style>
</style>