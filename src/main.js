import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import "./plugins/element"; //导入elementui
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.scss' //导入全局样式

// 给vue挂载axios，并配置请求根路径
import axios from 'axios'
axios.defaults.baseURL = ''
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
