import Vue from 'vue'


import 'bootstrap/dist/css/bootstrap.css';
import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';

Vue.use(datePicker);


import Vuebar from 'vuebar';

Vue.use(Vuebar);

import VueNumber from 'vue-number-animation'

Vue.use(VueNumber);

import VueApexCharts from 'vue-apexcharts'

Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);

import SimpleVueValidation from 'simple-vue-validator';

Vue.use(SimpleVueValidation);

import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate);


/*import printJS from 'print-js'
Vue.use(printJS);*/
