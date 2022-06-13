import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false

App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()

// #endif


// 挂载到Vue根实例


// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif