<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { auth } from "../firebase/index";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const router = useRouter();
const email = ref("");
const password = ref("");
const errMsg = ref();

const signIn = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      //console.log("Successfully signed in")

      //console.log(auth.currentUser)

      router.push('/store')
    })
    .catch((error) => {
      //console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Please enter a valid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "Sorry, we can't find an account with this email address. Please try again or create a new account.";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password. Please try again or reset password";
          break;
      }
    })
}
const signInUserByGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const user = await signInWithPopup(auth, provider);
  //console.log(user);
  router.push('/store')
};
</script>

<template>
  <div class="page-container">
    <img src="logo.png" alt="logo" />

    <div class="login-container">
      <h1>Sign In</h1>
      <form @submit.prevent="signIn()">
        <input type="text" placeholder="Email" v-model="email" />
        <input type="password" placeholder="Password" v-model="password" />
        <div class="button">
          <input class="submit" type="submit" value="Sign In" />
        </div>
      </form>
      <font-awesome-icon class="google" @click="signInUserByGoogle" icon="fa-brands fa-google" />
      <p class="error-message" v-if="errMsg">{{ errMsg }}</p>
    </div>
  </div>
</template>

<style scoped>

.page-container {
  display: grid;
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0.050)), url("backgroundimage.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  padding: 0;
  margin: 0;
}
.google {
  color: white;
}

.login-container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: white;
  row-gap: 50px;
  padding-bottom: 400px;
  padding-top: 200px;
  background-color: rgba(0, 0, 0, 0.7);
  width: 600px;
  height: 200px;
}

h1 {
  font-size: 40px;
}

form {
  display: grid;
  row-gap: 10px;
}

input {
  background-color: white;
  color: black;
  height: 30px;
  width: 300px;
}

img {
  padding-top: 30px;
  padding-left: 10px;
  height: 60px;
  cursor: pointer;
}

.submit {
  background-color: rgba(180, 0, 0, 0.8);
  color: white;
  height: 40px;
  width: 305px;
  border-radius: 4px;
  font-size: 15px;
}

.error-message {
  font-size: 15px;
  width: 320px;
  background-color: rgb(220, 120, 10);
  border-radius: 5px;
  text-align: center;
}

input[type=text] {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
}

input[type=password] {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
}
</style>