<script setup>
import { useStore } from "../store/index.js";
const store = useStore();
</script>

<template>
  <div class="checkout-page">
    <img class="logo" src="logo.png" @click="navigate" alt="logo" />
    <h1 class="title">Checkout</h1>

    <div class="body" v-for="movie in Array.from(store.cart.values())">
      <img :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" />
      <h1>{{ movie.title }}</h1>
      <h2>{{ movie.date }}</h2>
      <button @click="store.removeFromCart(movie.id)">Remove</button>
    </div>
  </div>
</template>

<style scoped>
.checkout-page {
  min-height: 1000px;
}

img {
  width: 200px;
  aspect-ratio: 2 / 3;
}

.title {
  padding-left: 20px;
  padding-top: 30px;
  padding-bottom: 50px;
}

h1 {
  color: white;
}

h2 {
  color: white;
}

.logo {
  padding-top: 30px;
  padding-left: 10px;
  height: 60px;
  width: 60px;
  cursor: pointer;
}

button {
  background-color: red;
  height: 20px;
  width: 70px;
}

.body {
  padding-bottom: 40px;
}
</style>