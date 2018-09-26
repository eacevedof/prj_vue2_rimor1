<template>
  <div id="app">
    <ul>
      <router-link tag="li" to="/">
        <a>Home</a>
      </router-link>
      <router-link tag="li" to="/acerca-de">
        <a>Acerca de ...</a>
      </router-link>
    </ul>

    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
</style>
