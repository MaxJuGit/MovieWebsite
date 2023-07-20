<script setup></script>

<template>
  <div class="hero-container">
    <p class="p1">Unlimited Movies To Experience.</p>
    <p>
      Ready to watch? Sign up to unlock an endless adventure.
    </p>
    <div class="searchbar">
      <input type="text" placeholder="Email address (this doesn't work yet.)" name="email" />
      <button>Get Started ></button>
    </div>
  </div>
</template>

<style scoped>
.hero-container {
  display: grid;
  justify-content: center;
  justify-items: center;
  text-align: center;
  color: white;
  font-size: large;
  row-gap: 40px;
  padding-bottom: 200px;
  padding-top: 100px;
  height: 500px;
}

.p1 {
  font-size: 45px;
  font-weight: 600;
}

input {
  background-color: white;
  height: 50px;
  width: 300px;
}

button {
  background-color: rgba(180, 0, 0, 0.8);
  color: white;
  width: 100px;
  height: 54px;
  border-radius: 5px;
}
</style>