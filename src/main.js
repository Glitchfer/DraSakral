import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  BootstrapVue,
  IconsPlugin,
  ToastPlugin,
  CarouselPlugin
} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import VueSweetalert2 from 'vue-sweetalert2'
// import firebase from '@firebase/app'
import '@firebase/auth'
// import '@firebase/firestore'
require('dotenv').config()

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(ToastPlugin)
Vue.use(CarouselPlugin)
Vue.use(Chartkick.use(Chart))
Vue.use(VueSweetalert2)
Vue.use(require('vue-moment'))

Vue.config.productionTip = false

// const configOptions = {
//   apiKey: 'AIzaSyBg-HdNXhZJ0TrmFIZeeuq_lL_EkOejCnU',
//   authDomain: 'vueauth-c5fc8.firebaseapp.com',
//   projectId: 'vueauth-c5fc8',
//   storageBucket: 'vueauth-c5fc8.appspot.com',
//   messagingSenderId: '1009662097637',
//   appId: '1:1009662097637:web:717083665ac75200aafc0c',
//   measurementId: 'G-7HN24DDXQB'
// }
// firebase.initializeApp(configOptions)
// firebase.auth().onAuthStateChanged(user => {
//   store.dispatch('fetchUser', user)
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
