<script setup>
import axios from "axios";
import { ref } from "vue";
import SiteModal from "../components/SiteModal.vue";
import { useStore } from "../store/index.js";

const store = useStore();
const genre = ref(28);
const criteria = ref("");
const searchResults = ref([]);
const page = ref(1);
const totalPages = ref(0);
const showModal = ref(false);
const selectedId = ref(0);

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};

const closeModal = () => {
  showModal.value = false;
};

const getGenres = async () => {
  searchResults.value = [];
  criteria.value = "";
  await store.getMovies(genre.value);
};

const search = async (direction) => {
  page.value += direction;
  let data = (
    await axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "dd0cae472f29b3a03f6bddb5090875f0",
        query: criteria.value,
        include_adult: false,
        page: page.value,
      },
    })
  ).data;
  totalPages.value = data.total_pages;
  searchResults.value = data.results.map((movie) => {
    return {
      id: movie.id,
      image: movie.poster_path,
    };
  });
};
//await store.populateFirestore();
</script>

<template>
  <div class="topbar">
    <img class="logo" src="logo.png" alt="logo" />
    <RouterLink to="/checkout" custom v-slot="{ navigate }">
      <font-awesome-icon class="cart-icon" @click="navigate" role="link" icon="fa-solid fa-cart-shopping" />
    </RouterLink>
  </div>
  <div class="search">
    <input type="search" v-model="criteria" @keydown.enter="search(0)" />
    <br />
    <br />
    <select v-model="genre" @change="getGenres()">
      <option value="Action">Action</option>
      <option value="Family">Family</option>
      <option value="Science Fiction">Science Fiction</option>
      <option value="Adventure">Adventure</option>
      <option value="Fantasy">Fantasy</option>
    </select>
  </div>
  <template v-if="searchResults.length">
    <div class="navigation">
      <button v-show="page > 1" @click="search(-1)">Prev</button>
      <h1>{{ `Page ${page} of ${totalPages}` }}</h1>
      <button v-show="page < totalPages" @click="search(1)">Next</button>
    </div>
  </template>
  <div class="purchase-container">
    <template v-if="searchResults.length">
      <img v-for="movie in searchResults" :id="movie.id" @click="openModal(movie.id)"
        :src="`https://image.tmdb.org/t/p/w500${movie.image}`" />
    </template>
    <template v-else>
      <img v-for="movie in store.movies" :id="movie.id" @click="openModal(movie.id)"
        :src="`https://image.tmdb.org/t/p/w500${movie.image}`" />
    </template>
    <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
  </div>
</template>

<style scoped>
.topbar {
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 10px;
  padding-right: 10px;
}

.purchase-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  min-height: 1000px;
}

img {
  height: 325px;
  width: 225px;
}

.logo {
  padding-left: 10px;
  height: 60px;
  width: 184px;
  cursor: pointer;
}

.navigation {
  display: flex;
  justify-content: space-between;
}

.cart-icon {
  height: 30px;
  cursor: pointer;
  color: white;
}

h1 {
  color: white;
}

.search {
  display: flex;
}

button {
  font-size: 15px;
  color: white;
  cursor: pointer;
  height: 50px;
  width: 100px;
  background-color: rgba(0, 0, 0, 0.9);
  border-color: white;
  transition: all 0.3s ease 0s;
}
</style>