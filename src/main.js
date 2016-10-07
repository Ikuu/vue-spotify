import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/:artist?', component: App },
  ],
});

Vue.use(VueRouter);
new Vue({
  router,
  template: `
    <div>
      <ul>
        <li>
          <router-link to="/Yung Lean">Yung Lean</router-link>
        </li>
        <li>
          <router-link to="/Between The Buried And Me">Between The Buried And Me</router-link>
        </li>
      </ul>
      <router-view class="view"></router-view>
    </div>
  `,
}).$mount('#app');
