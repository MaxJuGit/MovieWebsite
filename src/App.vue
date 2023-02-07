<script setup></script>

<template>
  <div class="app-container">
    <Suspense>
      <RouterView />
    </Suspense>
  </div>
</template>

<style scoped>
* {
  background-color: rgb(14, 14, 14);
  box-sizing: border-box;
  font-family: Verdana, Tahoma, sans-serif;
  margin: 0;
  padding: 0;
}
</style>