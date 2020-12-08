<template>
  <b-container fluid id="home">
    <nav>
      <div class="nav1">
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, totam?
        Corrupti quae fuga, dignissimos id quia, atque quos ad possimus
        provident totam debitis rerum temporibus. Quidem nobis corrupti nam
        saepe!
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
export default {
  name: 'Home',
  data() {
    return {
      navMove: 100,
      navDeg: 45
    }
  },
  components: {},
  watch: {},
  created() {},
  mounted() {},
  computed: {},
  methods: {
    shopNow() {
      // window.location.href =
      //   'https://www.lazada.co.id/dra-aksesoris-motor/?q=All-Products&langFlag=id&from=wangpu&lang=id&pageTypeId=2'
      window.open(
        'https://www.lazada.co.id/dra-aksesoris-motor/?q=All-Products&langFlag=id&from=wangpu&lang=id&pageTypeId=2',
        '_blank' //
      )
    },
    routerLink() {
      alert('Fitur ini masih dalam tahap pengembangan')
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
