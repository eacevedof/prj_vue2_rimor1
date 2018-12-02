<template>
    <div>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li v-for="n in opagination.totpages" v-bind:key="n" class="page-item">
                    <router-link :to="`/admin/employees/${n}`" class="page-link">{{n}}</router-link>
                </li>
            </ul>
        </nav>
        <table class="table">
            <!-- table.vue-->
            <thead>
                <slot name="columns">
                    <th v-for="column in columns">{{column}}</th>
                </slot>
            </thead>
            <tbody>
            <tr v-for="item in data" v-bind:key="item.id">
                <th scope="row">
                    <router-link :to="`/admin/employees/profile/${item.id}`" class="btn btn-fill btn-info">
                        <i class="nc-icon nc-badge"></i> {{item.id}}
                    </router-link>
                </th>
                <td>{{item.nombre}}</td>
                <td>{{item.apellidos}}</td>
                <td>{{item.fecha_contratacion}}</td>
                <td>{{item.cargo}}</td>
                <td>{{item.salario}}</td>
                <td>{{item.departamento}}</td>
                <!--
                <th scope="row">
                    <router-link :to="`/admin/employees/delete/${item.id}`" class="btn btn-fill btn-danger">
                        Borrar
                    </router-link>
                </th>     
                -->
            </tr> 
    <!--
            <tr v-for="item in data">
            <slot :row="item">
              <td v-for="column in columns" v-if="hasValue(item, column)">{{itemValue(item, column)}}</td>
            </slot>
            </tr>
    -->
            </tbody>
        <!--/table.vue-->
        </table>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li v-for="n in opagination.totpages" v-bind:key="n" class="page-item">
                    <router-link :to="`/admin/employees/${n}`" class="page-link">{{n}}</router-link>
                </li>
            </ul>
        </nav>        
    </div>
</template>
<script>
export default {
    name: 'l-table',
    props: {
        columns: Array,
        data: Array,
        opagination: {}
    },
    
    methods: {
        hasValue (item, column) {
            return item[column.toLowerCase()] !== 'undefined'
        },
        itemValue (item, column) {
            return item[column.toLowerCase()]
        }
    }
}
</script>
<style>
</style>
