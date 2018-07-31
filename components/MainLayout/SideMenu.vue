<template>
  <!-- ========== Left Sidebar Start ========== -->
  <div class="left side-menu">
    <div class="sidebar-inner slimscrollleft">

      <!--- Sidemenu -->
      <loader v-show="loading_menu"/>
      <div v-show="!loading_menu" id="sidebar-menu">
        <ul>

          <li class="has_sub">
            <a href="javascript:void(0);" class="waves-effect"><i class="zmdi zmdi-shopping-cart"></i><span> Transaction </span> <span class="menu-arrow"></span></a>
            <ul class="list-unstyled">
              <li><a href="#">Sales Order</a></li>
            </ul>
          </li>

        </ul>
        <div class="clearfix"></div>
      </div>
      <!-- Sidebar -->
      <div class="clearfix"></div>

    </div>

  </div>
  <!-- Left Sidebar End -->
</template>

<script>
  import * as AUTH_NETWORK from '../../network/auth.apiclient'
  import Loader from '../extras/ScaleLoader'
  let pluginLib;
  if (process.browser) {
    pluginLib = require('../../assets/js/jquery.app');
  }

  export default {
    name: "side-menu",
    components:{
      Loader
    },
    data() {
      return {
        loading_menu : true
      }
    },
    mounted() {
      this.getMenu()
      this.$nextTick(function () {
        if (process.browser) {
          pluginLib.initSidebarMenu()
        }
      })
    },
    methods: {
      getMenu(){
        this.loading_menu = true
        console.log('this.$store.getters.getToken', this.$store.getters.getToken)
        AUTH_NETWORK.GET_MENU(this.$store.getters.getToken)
          .then(response => {
            console.log(response)
            this.setupMenu(response.data.data)
          })
          .catch(e =>{
//            this.handleAPIError(e)
          })
      },
      setupMenu(menu){
        this.loading_menu = false
      }
    },
  }
</script>

<style scoped>
</style>
