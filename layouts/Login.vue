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

    <!-- Begin page -->
    <div id="wrapper">
      <nuxt/>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
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
