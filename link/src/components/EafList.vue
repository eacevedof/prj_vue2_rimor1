<template>
  <!--Eaflist-->
  <ul class="list-group">
    <li v-for="item in aritems" v-bind:key="item.id" class="list-group-item">
        {{ item.title }}
    </li>
  </ul>
  <!--/Eaflist-->
</template>

<script>
module.exports = {
  name: "Eaflist",
  props: ["aritems"],
  data: function () {
    return { }
  }
}
</script>

<style>
</style>