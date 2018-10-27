<template>
    <!--Eaflistimg-->
    <ul class="list-group">
        <li v-for="item in aritems" v-bind:key="item.id" class="list-group-item">
            {{item.id}}.- <img v-bind:src="item.thumbnailUrl"/>
        </li>
    </ul>
    <!--/Eaflistimg-->
</template>

<script>
/*thumbnailUrl": "https://via.placeholder.com/150/92c952*/
module.exports = {
    name: "Eaflistimg",
    props: ["aritems"],
    data: function () {
        return { }
    }
}
</script>

<style>
</style>