import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Designnode from './components/designnode.vue'
import KontaktUndBeratung from './components/kontaktUndBeratung.vue'
import AufwandUndKosten from './components/aufwandUndKosten.vue'
import Ablauf from './components/ablauf.vue'
import Weiteres from './components/weiteres.vue'


Vue.use(VueRouter);

const routes = [
  { path: '/designnode', component: Designnode },
  { path: '/ablauf', component: Ablauf },
  { path: '/kontakt', component: KontaktUndBeratung },
  { path: '/aufwand', component: AufwandUndKosten },
  { path: '/weiteres', component: Weiteres },
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
