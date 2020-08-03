import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElmementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css";
import 'font-awesome/css/font-awesome.min.css';
import axios from "./utils/http"
import "./assets/css/reset.css"

Vue.config.productionTip = false

Vue.use(ElmementUI);
Vue.prototype.$axios=axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
