<template>
  <div id="app">
    <ul>
      <router-link tag="li" exact-active-class="exact" active-class="active" to="/" exact>
        <a>Home</a>
      </router-link>
      <router-link tag="li" exact-active-class="exact" active-class="active" to="/acerca-de">
        <a>About</a>
      </router-link>      
    </ul>
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
