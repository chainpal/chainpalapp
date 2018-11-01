// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'; 
// import VueResource from 'vue-resource'; 
// import 'mint-ui/lib/style.css';
// import { Tabbar, TabItem } from 'mint-ui';
import MintUI from 'mint-ui'

// Vue.prototype.$ajax = axios
// Vue.use(axios); 
import 'mint-ui/lib/style.css'
// import Cookies from 'js-cookie'

// Vue.component(Tabbar.name, Tabbar);
// Vue.component(TabItem.name, TabItem);
Vue.use(Mint); 
Vue.use(MintUI)
// Vue.use(Cookies)
// Vue.use(VueResource); 
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
