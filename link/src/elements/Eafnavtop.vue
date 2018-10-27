<template>
    <!--Eafnavtop-->
    <nav class="nav">
        <ul class="nav">
            <router-link tag="li" exact-active-class="exact" active-class="active" to="/" exact class="nav-item">
                <a class="nav-link">Home</a>
            </router-link>

            <router-link tag="li" exact-active-class="exact" active-class="active" to="/posts" exact class="nav-item">
                <a class="nav-link">Posts</a>
            </router-link> 

            <router-link tag="li" exact-active-class="exact" active-class="active" to="/albums" exact class="nav-item">
                <a class="nav-link">Albums</a>
            </router-link> 

            <router-link tag="li" exact-active-class="exact" active-class="active" to="/photos" exact class="nav-item">
                <a class="nav-link">Photos</a>
            </router-link>
        </ul>
    </nav>
    <!--/Eafnavtop-->
</template>

<script>
module.exports = {
    name: "Eafnavtop",
    props: ["aritems"],
    data: function () {
        return { }
    }
}
</script>

<style>
</style>