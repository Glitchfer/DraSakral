<template>
  <b-container fluid id="home">
    <div v-if="loggedIn === false" class="authModal">
      <div class="row justify-content-center">
        <b-col md="col-md-12">
          <div class="card justify-content-center">
            <div class="card-header">Please login ^ ^</div>

            <div class="card-body">
              <div v-if="error" class="alert alert-danger">{{ error }}</div>
              <form action="#" @submit.prevent="submit">
                <div class="form-group row">
                  <label
                    for="email"
                    class="col-md-4 col-form-label text-md-right"
                    >Email</label
                  >

                  <div class="col-md-7">
                    <input
                      id="email"
                      type="email"
                      class="form-control"
                      name="email"
                      value
                      required
                      autofocus
                      v-model="form.email"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label
                    for="password"
                    class="col-md-4 col-form-label text-sm-right"
                    >Password</label
                  >

                  <div class="col-md-7">
                    <input
                      id="password"
                      type="password"
                      class="form-control"
                      name="password"
                      required
                      v-model="form.password"
                    />
                  </div>
                </div>

                <div class="form-group row mb-12">
                  <div class="col-md-12 ">
                    <router-link
                      to="register"
                      style="fontSize: 12px; position: absolute; textAlign: right; paddingRight: 45px; width: 100%;"
                    >
                      <span>Create account ?</span>
                    </router-link>
                    <br /><br />
                    <button type="submit" class="btn btn-primary">
                      Login
                    </button>
                    <br /><br />
                    <p style="fontSize: 14px;">Or</p>
                    <hr />
                    <div
                      style="display: flex; flexDirection: rows; justifyContent: center; alignItems: center; border: 1px solid black; width: 100%; position: realtive;"
                    >
                      <button
                        type=""
                        class="google-signIn"
                        @click="loginButton(1)"
                        style="display: flex; justifyContent: center; alignItems: center; marginRight: 5px;"
                      >
                        <img
                          style="width: 16px; marginRight: 5px;"
                          src="../assets/image/google.png"
                          alt="Google Logo Icon by Icon Mafia"
                        />
                        Sign in
                      </button>
                      <button
                        type=""
                        class="google-signIn"
                        @click="loginButton(1)"
                        style="display: flex; justifyContent: center; alignItems: center; marginLeft: 5px;"
                      >
                        <img
                          style="width: 16px; marginRight: 5px;"
                          src="../assets/image/fb.png"
                          alt="Google Logo Icon by Icon Mafia"
                        />
                        Sign in
                      </button>
                      <br /><br />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </b-col>
      </div>
    </div>
    <nav>
      <div class="nav1">
        <router-link to="#">
          <span @click="routerLink(1)">HOME</span>
        </router-link>
        <router-link to="#">
          <span @click="routerLink(2)">PRODUCT</span>
        </router-link>
        <router-link to="#">
          <span @click="routerLink(3)">ABOUT</span>
        </router-link>
        <router-link to="#">
          <span @click="routerLink(4)">CONTACT</span>
        </router-link>
        <router-link to="#" v-if="loggedIn === true">
          <span @click="loginButton(2)">{{ 'Logout' }}</span>
        </router-link>
      </div>
      <div class="nav2">
        <span class="setting" @click="setting()"></span>
        <router-link to="##">
          <span @click="routerLink()">HOME</span>
        </router-link>
        <router-link to="##">
          <span @click="routerLink()">PRODUCT</span>
        </router-link>
        <router-link to="##">
          <span @click="routerLink()">ABOUT</span>
        </router-link>
        <router-link to="##">
          <span @click="routerLink()">CONTACT</span>
        </router-link>
      </div>
    </nav>
    <div class="titleShop">
      <h1>
        DRA SAKRAL <br />
        <span> OFFICIAL WEBSITE</span>
      </h1>
      <p>
        Menyediakan berbagai macam jenis dupa atau wewangian asli dari kayu
        gaharu berkualitas, serta berbagai macam produk lainnya. Banyak promo
        menarik yang dapat anda temukan di toko kami. Segera temukan produk yang
        anda inginkan sebelum kehabisan. Selamat berbelanja. ^ ^
      </p>
      <button @click="shopNow()">SHOPPING NOW</button>
    </div>
    <div class="vector1">
      <img src="../assets/image/up1.png" alt="" />
      <img src="../assets/image/down2.png" alt="" />
      <img src="../assets/image/right1.png" alt="" />
      <img src="../assets/image/Group2.png" alt="" />
      <img src="../assets/image/DRAa.png" alt="" />
      <img src="../assets/image/crown.png" alt="" />
    </div>
    <footer>
      <div>
        <p>© 2020, Created by Arrah.</p>
        <p>
          Vector design from
          <a href="https://www.freepik.com/" target="_blank">www.freepik.com</a>
          | -
          <a href="https://www.freepik.com/vectors/business" target="_blank"
            >Business vector</a
          >
        </p>
      </div>
    </footer>
  </b-container>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import firebase from 'firebase'
export default {
  name: 'Home',
  data() {
    return {
      navMove: 100,
      navDeg: 45,
      form: {
        email: '',
        password: ''
      },
      error: null
    }
  },
  components: {},
  watch: {},
  created() {},
  mounted() {},
  computed: {
    ...mapGetters({
      userProfile: 'userProfile',
      loggedIn: 'loggedIn',
      user: 'user'
    })
  },
  methods: {
    ...mapActions({
      login: 'login',
      logout: 'logout'
    }),
    ...mapMutations([]),
    loginButton(val) {
      if (val === 1) {
        this.login()
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
      } else {
        let logout = false
        logout = confirm('Sign-out now ?')

        if (logout === true) {
          this.logout()
            .then(response => {
              alert('Logout success')
              // this.$router.push({
              //   name: 'home'
              // })
            })
            .catch(error => {
              console.log(error)
            })
        }
      }
    },

    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          this.$router.push({ name: 'home' })
        })
        .catch(err => {
          this.error = err.message
        })
    },
    shopNow() {
      // window.location.href =
      //   'https://www.lazada.co.id/dra-aksesoris-motor/?q=All-Products&langFlag=id&from=wangpu&lang=id&pageTypeId=2'
      window.open(
        'https://www.lazada.co.id/dra-aksesoris-motor/?q=All-Products&langFlag=id&from=wangpu&lang=id&pageTypeId=2',
        '_blank' //
      )
    },
    routerLink(val) {
      alert('Button: ' + val + '| Fitur ini masih dalam tahap pengembangan')
    },
    setting() {
      var nav = document.getElementsByClassName('nav2')[0]
      var span = document.querySelector('.setting')
      if (this.navMove === 100) {
        nav.style.setProperty('transform', ' translateX(' + 0 + '%)')
        this.navMove = 0
        this.navDeg += 180
        span.style.left = '-40px'
        span.style.setProperty('transform', ' rotate(' + this.navDeg + 'deg)')
        // nav.style.overflow = 'hidden'
      } else {
        nav.style.setProperty('transform', ' translateX(' + 100 + '%)')
        this.navMove = 100
        this.navDeg += 180
        span.style.left = '-10px'
        span.style.setProperty('transform', ' rotate(' + this.navDeg + 'deg)')
        nav.style.overflow = 'unset'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
<style lang="scss" src="../assets/css/home.scss"></style>
