import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0O18pArHpKuAGm4RfSYENgSQD9JA6AVM",
  authDomain: "movie-e5ec7.firebaseapp.com",
  databaseURL: "https://movie-e5ec7-default-rtdb.firebaseio.com",
  projectId: "movie-e5ec7",
  storageBucket: "movie-e5ec7.appspot.com",
  messagingSenderId: "1080920753276",
  appId: "1:1080920753276:web:26cc8f17a241643f1bf5f9",
  measurementId: "G-57RCY69FP6"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const firestore = getFirestore();

export { auth, firestore }
