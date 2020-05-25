import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: null,
    name: 'home',
  },
];

export default new Router({
  mode: 'history',
  routes,
});
