import Vue from 'vue'
import App from './App.vue'
import vueSmoothScroll from 'vue2-smooth-scroll'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(vueSmoothScroll)
Vue.use(ElementUI, { locale })

new Vue({
  el: '#app',
  render: h => h(App)
})
