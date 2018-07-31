<template>
  <!-- Top Bar Start -->
  <div class="topbar">

    <!-- LOGO -->
    <div class="topbar-left">
      <a href="/" class="logo">
        <img src="../../assets/logo.png"/>
      </a>
    </div>

    <nav class="navbar-custom">

      <ul class="list-inline float-right mb-0">

        <li class="list-inline-item dropdown notification-list">
          <a v-on:click="logout" class="nav-link waves-effect waves-light right-bar-toggle">
            <span class="text-white">Logout</span>
            <i class="ion-log-out noti-icon"></i>

          </a>
        </li>

      </ul>

      <ul class="list-inline menu-left mb-0">
        <li class="float-left">
          <button class="button-menu-mobile open-left waves-light waves-effect">
            <i class="zmdi zmdi-menu"></i>
          </button>
        </li>
      </ul>

    </nav>

  </div>
  <!-- Top Bar End -->
</template>

<script>
  let pluginLib;
  if (process.browser) {
    pluginLib = require('../../assets/js/jquery.app');
  }
  export default {
    name: "top-bar",
    mounted() {
      this.$nextTick(function () {
//        window.initSideMenu()
        pluginLib.initSidebar()
      })
    },
    methods: {
      logout() {
        this.$store.dispatch("logout")
        this.$router.push('/login')
      }
    },
  }
</script>

<style scoped>

</style>
