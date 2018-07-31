import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'
import VModal from 'vue-js-modal'
import Paginate from 'vuejs-paginate'
import { VueEditor } from 'vue2-editor'
import VueCurrencyFilter from 'vue-currency-filter'
import VueScrollTo from 'vue-scrollto'
import VueFlashMessage from 'vue-flash-message';

Vue.use(VModal, { dialog: true , dynamic: true})
Vue.use(VueProgressBar, {
  color: '#DF6327',
  failedColor: 'red',
  height: '2px'
})
Vue.component('paginate', Paginate)
Vue.component('VueEditor', VueEditor)
Vue.use(VueCurrencyFilter, {
  symbol : 'IDR',
  thousandsSeparator: '.',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true
})
Vue.use(VueScrollTo)
Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 2000,
  }
});

