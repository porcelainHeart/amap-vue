import Vue from 'vue';
import App from './App';
import router from './router';
import demoBlock from './components/demo-block.vue';
import AMapVue from '../packages/index';

Vue.component('demo-block', demoBlock);
Vue.use(AMapVue, { key: 'd24f52faa14f336b7517a44f5255db09' });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
