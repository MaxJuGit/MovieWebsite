<script setup>
import axios from "axios";
import { useStore } from "../store/index.js";

const store = useStore();
const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);

let data = (
  await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
    params: {
      api_key: "dd0cae472f29b3a03f6bddb5090875f0",
    },
  })
).data;
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div class="modal-inner-container">
        <button class="close-button" @click="emits('toggleModal')">X</button>
        <h1>Movie ID: {{ props.id }}</h1>
        <p>Movie Title: {{ data.title }}</p>
        <p>Release Date: {{ data.release_date }}</p>
        <div class="body">
          <img :src="`https://image.tmdb.org/t/p/w500${data.poster_path}`" />
          <p>{{ data.overview }}</p>
        </div>
        <button class="purchase-button" @click="
  store.addToCart(props.id, {
    id: data.id,
    poster: data.poster_path,
    title: data.title,
    date: data.release_date,
  })
        ">
          Add to cart
        </button>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-outer-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #00000099;
  z-index: 3;
}

.modal-outer-container .modal-inner-container {
  background-color: rgba(75, 67, 67, 0.312);
  width: clamp(280px, 100%, 800px);
  height: 450px;
  position: relative;
}

.modal-outer-container .modal-inner-container .close-button {
  position: absolute;
  right: 0px;
  padding: 1rem;
  border: none;
  background: #1f2123;
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
}

img {
  height: 300px;
  width: 200px;
}

h1 {
  color: white;
}

p {
  color: white;
}

button {
  background-color: red;
  height: 40px;
  color: black;
  transition: all 0.3s ease 0s;
  width: 100px;
}

.close-button {
  height: 50px;
}

.purchase-button {
  border-radius: 5px;
}

.purchase-button:active {
  background-color: rgba(220, 220, 220, 0.2);
}

.body {
  display: flex;
}
</style>