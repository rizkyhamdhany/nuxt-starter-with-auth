<template>
  <div id="app">
    <no-ssr>
      <vue-progress-bar></vue-progress-bar>
    </no-ssr>

    <no-ssr>
      <v-dialog></v-dialog>
    </no-ssr>
    <no-ssr>
      <flash-message class="flashpool"></flash-message>
    </no-ssr>
    <div id="wrapper">
      <top-bar></top-bar>
      <side-menu></side-menu>
      <nuxt/>
      <footer-view></footer-view>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
  import TopBar from '../components/MainLayout/TopBar'
  import SideMenu from '../components/MainLayout/SideMenu'
  import FooterView from '../components/MainLayout/FooterView'

  export default {
    name: 'app',
//    middleware: ['check-auth'],
    components: {
      TopBar, SideMenu, FooterView
    },
    data () {
      return {

      }
    },
    created(){

    }
  }
</script>
<style>
  .center{
    text-align: center;
  }
  textarea {
    min-height: 200px;
  }
</style>
