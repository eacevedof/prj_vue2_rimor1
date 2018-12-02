<template>
    <div class="wrapper">
        <!-- dashboardlayout.vue -->
        <side-bar>
            <mobile-menu slot="content"></mobile-menu>    
            <sidebar-link to="/admin/employees">
                <i class="nc-icon nc-zoom-split"></i>
                <p>Empleados</p>
            </sidebar-link>
           <sidebar-link to="/admin/employees/new">
                <i class="nc-icon nc-circle-09"></i>
                <p>Nuevo empleado</p>
            </sidebar-link>             
<!--
            <sidebar-link to="/admin/overview">
                <i class="nc-icon nc-chart-pie-35"></i>
                <p>Dashboard</p>
            </sidebar-link>
            <sidebar-link to="/admin/user">
                <i class="nc-icon nc-circle-09"></i>
                <p>Employee Profile</p>
            </sidebar-link>
            <sidebar-link to="/admin/table-list">
                <i class="nc-icon nc-notes"></i>
                <p>Table list</p>
            </sidebar-link>
            <sidebar-link to="/admin/typography">
                <i class="nc-icon nc-paper-2"></i>
                <p>Typography</p>
            </sidebar-link>
            <sidebar-link to="/admin/icons">
                <i class="nc-icon nc-atom"></i>
                <p>Icons</p>
            </sidebar-link>
            <sidebar-link to="/admin/maps">
                <i class="nc-icon nc-pin-3"></i>
                <p>Maps</p>
            </sidebar-link>
            <sidebar-link to="/admin/notifications">
                <i class="nc-icon nc-bell-55"></i>
                <p>Notifications</p>
            </sidebar-link>
-->
        </side-bar>
        <div class="main-panel">
            <top-navbar></top-navbar>
            <dashboard-content @click="toggleSidebar">
            </dashboard-content>
            <content-footer></content-footer>
        </div>
        <!-- dashboardlayout.vue -->
    </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
