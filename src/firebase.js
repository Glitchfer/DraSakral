import store from './store'
import firebase from 'firebase/app'
import '@firebase/auth'
import '@firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyBg-HdNXhZJ0TrmFIZeeuq_lL_EkOejCnU',
  authDomain: 'vueauth-c5fc8.firebaseapp.com',
  projectId: 'vueauth-c5fc8',
  storageBucket: 'vueauth-c5fc8.appspot.com',
  messagingSenderId: '1009662097637',
  appId: '1:1009662097637:web:717083665ac75200aafc0c',
  measurementId: 'G-7HN24DDXQB'
})
firebase.auth().onAuthStateChanged(user => {
  store.dispatch('fetchUser', user)
})
export default firebase
