<template>
  <b-container fluid id="home">
    <img src="../assets/image/DRA.jpeg" alt="" />
    <img src="../assets/image/DRA.jpeg" alt="" />
    <h3>OFFICIAL WEBSITE</h3>
    <h1>SEGERA HADIR</h1>
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
  methods: {}
}
</script>

<style lang="scss" scoped>
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

#home img:nth-child(1) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  filter: blur(15px);
  object-fit: cover;
}
#home img:nth-child(2) {
  position: absolute;
  top: 40px;
  z-index: 1;
  opacity: 0.6;
  width: 500px;
}
#home h3,
#home h1 {
  position: relative;
  top: 130px;
  color: rgba(255, 255, 255, 0.61);
  z-index: 2;
  font-weight: bolder;
}
</style>
