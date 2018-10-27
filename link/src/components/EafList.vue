<template>
  <!--EafList-->
  <ul class="list-group">
    <li v-for="item in aritems" v-bind:key="item.id" class="list-group-item">
        {{ item.title }}
    </li>
  </ul>
  <!--/EafList-->
</template>

<script>
module.exports = {
  name: "EafList",
  props: ["aritems"],
  data: function () {
    return { }
  }
}
</script>

<style>
</style>