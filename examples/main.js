import Vue from 'vue';
import App from './App';
import router from './router';
import demoBlock from './components/demo-block.vue';
import VAMap from '../packages/index';

Vue.component('demo-block', demoBlock);
Vue.use(VAMap, { key: 'd24f52faa14f336b7517a44f5255db09' });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
