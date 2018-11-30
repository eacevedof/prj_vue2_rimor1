<template>
  <div class="row">
      <div class="col-lg-12 col-centered">
        <!--Eafpage-->
        <nav aria-label="Page navigation example">
          <ul class="pagination">

            <li v-for="n in opages.totpages" v-bind:key="n" class="page-item">
              <router-link :to="`/${n}`" class="page-link">{{n}}</router-link>
            </li>

          </ul>
        </nav>
        <!--/Eafpage-->

        <table class="table table-striped">
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

        <!--Eafpage-->
        <nav aria-label="Page navigation example">
          <ul class="pagination">

            <li v-for="n in opages.totpages" v-bind:key="n" class="page-item">
              <router-link :to="`/${n}`" class="page-link">{{n}}</router-link>
            </li>

          </ul>
        </nav>
        <!--/Eafpage-->
        
      </div>
  </div>
</template>

<script>
//esto no tira
//import Eafpage from 'Eafpage'

module.exports = {
    name: "Eaflist",
    props: ["aritems","opages"],

    //{currpage: "2", totpages: 21, perpage: 50, totregs: 1002}
    components: {

    },
    created(){
      //console.log(this.props[1],"list.created")
    },

    data() {
        console.log(this.props)
        //console.log(this.arpages)
        return { }
    }
}
</script>

<style>
</style>