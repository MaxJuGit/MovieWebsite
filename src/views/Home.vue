<script setup>
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="home-container">
    <div class="background">
      <Header></Header>
      <Hero></Hero>
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped>
.home-container {
  display: grid;
  row-gap: 100px;
}

.background {
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0.050)), url("backgroundimage.png");
}
</style>
