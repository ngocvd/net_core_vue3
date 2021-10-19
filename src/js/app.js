require('./bootstrap')
//import '../navbar';
//import "../app/toasts";
//import "../app/popovers";
import { createApp } from 'vue/dist/vue.esm-bundler'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue'
import moment from 'moment'
//import Vue3ChartJs from '@j-t-mcc/vue3-chartjs';
//import { Chart, registerables } from 'chart.js';
//Chart.register(...registerables);
import BarChart from './components/BarChart.vue'
import vueMask from 'vue-jquery-mask'
import Maska from 'maska'
moment.locale('id')
let numberFormat = function (value) {
  let val = (value / 1).toFixed(0).replace('.', ',')
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
//import { createApp } from "vue";

const app = createApp({
  mixins: [myMixin],
  components: {
    //Vue3ChartJs,
    BarChart,
    vueMask
  }
})
  //.use(VPip)
  //.use(VueAxios, axios)
  //.use(VueAuth, auth)
  //.use(router)
  //.use(KnobControl)
  .use(Maska)
  .use(BootstrapIconsPlugin);

//app.component("app", require("./views/App.vue").default);
//app.component("auth-page", require("./views/Auth.vue").default);
//app.use(vbPlugin);
app.config.globalProperties.moment = moment
app.config.globalProperties.numberFormat = numberFormat

window.app = app.mount('#app');
