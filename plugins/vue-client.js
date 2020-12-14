import Vue from 'vue'
import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';

import Vuebar from 'vuebar';
Vue.use(Vuebar);

import VueNumber from 'vue-number-animation'
Vue.use(VueNumber);

import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

import SimpleVueValidation from 'simple-vue-validator';
Vue.use(SimpleVueValidation);

Vue.use(datePicker);
