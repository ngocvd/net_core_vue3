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
import LineChart from './components/LineChart.vue';
import Treeselect from 'vue3-treeselect';
import 'vue3-treeselect/dist/vue3-treeselect.css';
import Select2 from 'vue3-select2-component';
import vueMask from 'vue-jquery-mask'
import Maska from 'maska';
import BootstrapTable from './plugins/table';
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
    LineChart,
      vueMask,
      Treeselect,
      BootstrapTable,
      Select2,
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
