// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi4PYAlhsJMjU09STWLqiCwe1j6SAfOcs",
  authDomain: "vue-authentication-app-4ee21.firebaseapp.com",
  projectId: "vue-authentication-app-4ee21",
  storageBucket: "vue-authentication-app-4ee21.firebasestorage.app",
  messagingSenderId: "849266792682",
  appId: "1:849266792682:web:0b1de109e98db4c3dcdf93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth};