import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import Meta from 'vue-meta';

import store from '@/store';
import App from './App.vue';
import router from './routes';

sync(store, router);

Vue.config.productionTip = false;
Vue.use(Meta);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
