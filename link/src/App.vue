<template>
  <div id="app" class="container">
    <nav class="nav">
      <ul class="nav">
  
          <router-link tag="li" exact-active-class="exact" active-class="active" to="/" exact class="nav-item">
            <a class="nav-link">Home</a>
          </router-link>

          <router-link tag="li" exact-active-class="exact" active-class="active" to="/acerca-de" exact class="nav-item">
            <a class="nav-link">About</a>
          </router-link>     

      </ul>
    </nav>

    <!-- aqui se cargan los componentes configurados en index.js-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.exact {
  background: #00ff00
}
.active {
  background: #00ff00
}
</style>
