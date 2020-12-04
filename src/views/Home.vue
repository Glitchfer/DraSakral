<template>
  <b-container fluid id="home">
    <nav>
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
    return {}
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
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  padding: 25px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  z-index: 2;
}
nav a {
  color: black;
  text-decoration: none;
  font-size: 14px;
  margin-right: 70px;
  border: 2px solid white;
  padding: 5px 10px;
  border-radius: 20px;
  font-weight: 600;
}
nav a:hover {
  background: #ffffff;
  font-weight: bold;
  color: rgb(34, 29, 29);
  font-size: 14px;
  border: 2px solid rgb(7, 7, 7);
}
nav a:active {
  background: #443841;
  font-weight: bold;
  color: white;
  border: 1px solid black;
}
#home {
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#home .titleShop {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  padding-left: 70px;
  z-index: 1;
}
#home .titleShop h1 {
  font-size: 48px;
  font-weight: bolder;
  line-height: 45px;
  color: #52444e;
}
#home .titleShop h1 span {
  color: #fdb023;
}
#home .titleShop p {
  margin-top: 5px;
  width: 85%;
  line-height: 20px;
}
#home .titleShop button {
  position: absolute;
  border: 2px solid #443841;
  bottom: 160px;
  font-size: 12px;
  font-weight: bold;
  color: white;
  background: #443841;
  padding: 10px 20px;
  border-radius: 20px;
  outline: none;
}
#home .titleShop button:hover {
  font-weight: bold;
  color: rgb(0, 0, 0);
  background: #686468;
  border: 2px solid #020202;
}
#home .vector1 {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
#home .vector1 img:nth-child(1) {
  position: absolute;
  top: -60px;
  left: -60px;
  width: 300px;
}
#home .vector1 img:nth-child(2) {
  position: absolute;
  bottom: -50px;
  left: -30px;
  width: 200px;
}
#home .vector1 img:nth-child(3) {
  position: absolute;
  bottom: -50px;
  right: -80px;
  width: 50rem;
}
#home .vector1 img:nth-child(4) {
  position: absolute;
  bottom: 70px;
  right: 80px;
  width: 35rem;
}
#home .vector1 img:nth-child(5) {
  position: absolute;
  top: -70px;
  left: -20px;
  width: 230px;
}
#home .vector1 img:nth-child(6) {
  position: absolute;
  top: 165px;
  left: 48px;
  width: 100px;
  transform: rotate(-6deg);
  z-index: -1;
}

footer {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 80px;
  overflow: hidden;
  padding-bottom: 15px;
  background: #fafafab0;
  margin-top: 30px;
}
footer div:nth-child(1) {
  margin: 0 auto;
  border: 2px solid #0e0d0d8f;
  text-align: left;
  width: 95%;
  line-height: 30px;
  padding: 0 10px;
  border-left: none;
  border-right: none;
  border-bottom: none;
}
footer div:nth-child(1) p {
  margin: 0;
  font-size: 14px;
  color: #2b2b2b;
}
</style>
