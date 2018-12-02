<template>
    <div>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li v-for="n in opagination.totpages" v-bind:key="n" class="page-item">
                    <router-link v-if="searchtag"
                        :to="{ name: 'employees-pag', params: { id: n }, query: { s:searchtag }}" 
                        class="page-link">{{n}}
                    </router-link>
                    <router-link v-else="searchtag"
                        :to="{ name: 'employees-pag', params: { id: n }}" 
                        class="page-link">{{n}}
                    </router-link>                
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
<!--
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li v-for="n in opagination.totpages" v-bind:key="n" class="page-item">
                    <router-link 
                        :to="{ name: 'employeespag', params: { id: n }, query: { busco:'algo' }}" 
                        class="page-link">{{n}}
                    </router-link>
                </li>
            </ul>
        </nav> 
-->
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
    data() {
        return {
            currpage: 0,
            searchtag: ""
        }
    },    

    created() {
        this.currpage = this.$route.params.id
        this.searchtag = this.get_searchtag()
        
        if(!this.searchtag && this.$route.query.s) {
            this.searchtag = this.$route.query.s;
        }
    },    
    methods: {
        get_searchtag(){
            let sSearchTag = ""
            let eSearch = document.getElementById("txtSearch")
            if(eSearch) sSearchTag = eSearch.value
            console.log(sSearchTag,"SEARCH_TAG")
            return sSearchTag
        },        
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
