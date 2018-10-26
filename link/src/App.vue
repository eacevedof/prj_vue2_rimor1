<template>
  <div id="app">
    <ul>
      <router-link tag="li" to="/">
        <a>Home</a>
      </router-link>
      <router-link tag="li" to="/acerca-de">
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
