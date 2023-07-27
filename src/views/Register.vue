<script setup>
import { ref } from "vue";
import { auth } from "../firebase/index";
import { useRouter } from 'vue-router'
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const username = ref("");
const email = ref("");
const password1 = ref("");
const password2 = ref("");
const router = useRouter()

const registerUserByEmail = async () => {
  if (password1.value !== password2.value) {
    //console.log("Password issue");
    return;
  }
  try {
    await createUserWithEmailAndPassword(auth, email.value, password1.value);
    router.push('/store')
  } catch (error) {
    //console.log(error);
  }
};

const registerUserByGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const user = await signInWithPopup(auth, provider);
  //console.log(user);
  router.push('/store')
};
</script>

<template>
  <div class="background-container">
    <RouterLink to="/" custom v-slot="{ navigate }">
      <img @click="navigate" src="logo.png" alt="logo" />
    </RouterLink>
    <div class="reg-container">
      <h1>Sign Up</h1>
      <h2>Register by email</h2>
      <form class="form" @submit.prevent="registerUserByEmail()">
        <input v-model="username" type="text" placeholder="username" />
        <input v-model="email" type="email" placeholder="email" />
        <input v-model="password1" type="password" placeholder="password" />
        <input v-model="password2" type="password" placeholder="re-enter password" /> <br>
        <input class="reg" type="submit" value="Register" />
      </form>
      <h2>Register by Google</h2>
      <font-awesome-icon class="google" @click="registerUserByGoogle" icon="fa-brands fa-google" />
    </div>
  </div>
</template>

<style scoped>
.background-container {
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0.050)), url("backgroundimage.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}

.reg-container {
  margin: 0 auto;
  display: grid;
  justify-content: center;
  justify-items: center;
  font-size: 3rem;
  color: black;
  row-gap: 20px;
  padding-bottom: 300px;
  padding-top: 200px;
  background-color: rgba(0, 0, 0, 0.7);
  width: 600px;
  height: 300px;
}

.google {
  color: white;
}

.form {
  display: grid;
  row-gap: 10px;
}

h1 {
  color: white;
  font-size: 40px;
}

h2 {
  color: white;
  font-size: 30px;
}

img {
  padding-top: 30px;
  padding-left: 10px;
  height: 60px;
  cursor: pointer;
}

input[type=text] {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
}

input[type=email] {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
}

input[type=password] {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
}

input[type=submit] {
  background-color: rgba(180, 0, 0, 0.8);
  color: white;
  height: 40px;
}
</style>