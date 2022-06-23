import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import VueAxios from "vue-axios"
// import firebase from "firebase"

// const firebaseConfig = {
//     apiKey: "AIzaSyCBsicODEs0eTcMAa_hattEo0n2qWwoNwQ",
//     authDomain: "dogs-vue-project.firebaseapp.com",
//     databaseURL: "https://dogs-vue-project-default-rtdb.europe-west1.firebasedatabase.app",
//     projectId: "dogs-vue-project",
//     storageBucket: "dogs-vue-project.appspot.com",
//     messagingSenderId: "221859259519",
//     appId: "1:221859259519:web:d32668814d9f67b3d48b4a"
//   };

//   firebase.initializeApp(firebaseConfig);

createApp(App).use (VueAxios, axios).use(router).mount('#app')
