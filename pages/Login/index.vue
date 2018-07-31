<template>
  <div class="wrapper-page">

    <div class="account-bg">
      <div class="card-box mb-0">
        <div class="text-center m-t-20">
          <a href="#" class="logo">
            <span>OMS MNC</span>
          </a>
        </div>
        <div class="m-t-10 p-20">
          <div class="row">
            <div class="col-12 text-center">
              <h6 class="text-muted text-uppercase m-b-0 m-t-0">Sign In</h6>
              <p id="error-msg" class="text-red">{{errors_msg}}</p>
            </div>
          </div>
          <form class="m-t-20" @submit.prevent="validateBeforeSubmit">

            <div class="form-group row">
              <div class="col-12">
                <input id="username" class="form-control" type="text" placeholder="Username" v-validate="'required'" name="username" v-model="username" :disabled="formDisabled">
                <span v-show="errors.has('username')" class="help is-danger">{{ errors.first('username') }}</span>
              </div>
            </div>

            <div class="form-group row">
              <div class="col-12">
                <input id="password" class="form-control" type="password" placeholder="Password" v-validate="'required'" name="password" v-model="password" :disabled="formDisabled">
                <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
              </div>
            </div>

            <div class="form-group row">
              <div class="col-6">
                <label class="pt-2">Calculate this : {{capt.question}}</label>
              </div>
              <div class="col-6">
                <input id="result" class="form-control" type="number" placeholder="" v-validate="'required'" name="result" v-model="answer" :disabled="formDisabled">
                <span v-show="errors.has('result')" class="help is-danger">This field is required!</span>
              </div>
            </div>

            <div class="form-group row">
              <div class="col-12">
                <div class="checkbox checkbox-custom">
                  <input id="checkbox-signup" type="checkbox">
                  <label for="checkbox-signup">
                    Remember me
                  </label>
                </div>
              </div>
            </div>

            <div class="form-group text-center row m-t-10">
              <div class="col-12">
                <button id="login-button" class="btn btn-success btn-block waves-effect waves-light btn-di" type="submit" :disabled="formDisabled">Log In</button>
              </div>
            </div>

          </form>

        </div>

        <div class="clearfix"></div>
      </div>
    </div>

  </div>
</template>

<script>
  import {GET_CAPTCHA} from "../../network/auth.apiclient";

  export default {
    layout: 'Login',
    fetch({ store }) {

    },
    data() {
      return {
        formDisabled: false,
        username: '',
        password: '',
        errors_msg: '',
        last_route: '/',
        answer: '',
        a:  Math.floor((Math.random() * 9) +1),
        b:  Math.floor((Math.random() * 9) +1),
        capt: {}
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.last_route = from.fullPath === null ? '/' : from.fullPath
      })
    },
    mounted(){
      this.getCaptcha()
    },
    methods: {
      getCaptcha(){
        GET_CAPTCHA()
          .then(res => {
            this.capt = res.data.data
            this.answer = ''
          })
      },
      validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            var params = new URLSearchParams();
            params.append('email', this.username);
            params.append('password', this.password);
            params.append('answer', this.answer)
            params.append('captcha_id', this.capt.id)
            this.formDisabled = true
            this.$store.dispatch("login", params).then(res => {
              if (this.$store.getters.getToken) {
//                this.$router.push(this.last_route)
              } else {
                this.errors_msg = 'Invalid Credentials'
                this.getCaptcha()
                this.formDisabled = false
              }
            })
            return;

          }
        });
      }
    },
  }
</script>

<style scoped>
.text-red{
  color: red !important;
}
</style>
