<template>
    <!--Eaflist-->

  <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellidos</th>
      <th scope="col">Fec. Contratación</th>
      <th scope="col">Cargo</th>
      <th scope="col">Salario</th>
      <th scope="col">Departamento</th>
    </tr>
  </thead>
  <tbody>
       
       
    <tr v-for="item in aritems" v-bind:key="item.id">
      <th scope="row">
          <router-link :to="`/employee/profile/${item.id}`" class="btn btn-primary">{{item.id}}</router-link>
      </th>
      <td>{{item.nombre}}</td>
      <td>{{item.apellidos}}</td>
      <td>{{item.fecha_contratacion}}</td>
      <td>{{item.cargo}}</td>
      <td>{{item.salario}}</td>
      <td>{{item.departamento}}</td>
    </tr>
  </tbody>
</table>
    <!--/Eaflist-->
</template>

<script>
module.exports = {
    name: "Eaflist",
    props: ["aritems"],
    data: function () {
        console.log(this.props)
        return { }
    }
}
</script>

<style>
</style>