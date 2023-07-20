<script setup></script>

<template>
  <div class="Topbar">
    <img class="logo" src="logo.png" alt="logo" />
    <div class="buttons">
      <RouterLink to="/register" custom v-slot="{ navigate }">
        <button @click="navigate" role="link">Register</button>
      </RouterLink>
      <RouterLink to="/login" custom v-slot="{ navigate }">
        <button @click="navigate" role="link">Sign In</button>
      </RouterLink>
    </div>

  </div>
</template>

<style scoped>
.Topbar {
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 10px;
}

button {
  font-size: 15px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  height: 50px;
  width: 100px;
  background-color: rgba(0, 0, 0, 0.9);
  border-color: white;
  transition: all 0.3s ease 0s;
}

button:hover {
  background-color: rgba(220, 220, 220, 0.2);
}

.logo {
  padding-left: 10px;
  height: 70px;
  cursor: pointer;
}

.buttons {
  display: flex;
  padding-right: 10px;
  column-gap: 5px;
}
</style>