import Vue from 'vue'
import App from './App.vue'
import Router from "./router"
import transDate from "./untils/transDate"
import number from "./untils/number"
import axios from "axios"
// import store from "./store"
import day from "./untils/day"
import "./assets/icon-font/iconfont"
import "./assets/icon-font/iconfont.css"
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import 'lib-flexible/flexible'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import dt from "./untils/dataTime"
Vue.use(ElementUI)
// import "./assets/reset.css"
Vue.config.productionTip = false
Vue.prototype.$baseUrl=" https://cnodejs.org/api/v1"
Vue.prototype.$eventBus=new Vue()
Vue.prototype.$transDate=transDate
Vue.prototype.$number=number
Vue.prototype.$day=day
Vue.prototype.$dt=dt
new Vue({
  // store:store,
  router:Router,
  ElementUI,
  render: h => h(App),
}).$mount('#app')
