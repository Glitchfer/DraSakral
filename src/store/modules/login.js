// import axios from 'axios'
// import router from '../../router/index'
import firebase from '@/firebase'
export default {
  state: {
    userProfile: null,
    loggedIn: false
  },
  mutations: {
    USER_DETAILS(state, payload) {
      state.loggedIn = true
      state.userProfile = payload
    },
    SIGN_OUT(state) {
      state.loggedIn = false
      state.userProfile = {}
    }
  },
  actions: {
    login(context) {
      const provider = new firebase.auth.GoogleAuthProvider()
      if (context.state.loggedIn) return
      return new Promise((resolve, reject) => {
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    logout() {
      return new Promise((resolve, reject) => {
        firebase
          .auth()
          .signOut()
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    fetchUser({ commit }, user) {
      console.log(user)
      if (user) {
        commit('USER_DETAILS', {
          name: user.displayName,
          picture: user.photoURL
        })
      } else {
        commit('SIGN_OUT')
      }
    }
  },
  getters: {
    userProfile(state) {
      return state.userProfile
    },
    loggedIn(state) {
      return state.loggedIn
    }
  }
}
