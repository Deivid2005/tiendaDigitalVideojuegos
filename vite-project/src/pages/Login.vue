<script setup>
import Footer from "../components/Footer.vue";
import {ref} from "vue"
import { useUserStore } from "../store/user";

const email = ref("")
const password = ref("")

const userStore = useUserStore()

const login = () => {
    userStore.login(email.value, password.value);
}
</script>



<template>

    <div class="app-wrapper">
     <div class="main-content">
       <div class="login">
         <h2>Login</h2>
         <form @submit.prevent="login">
            <div class="loginInput">
                <input type="text" required v-model="email" />
                <label>Username</label>
            </div>
            <div class="loginInput">
                <input type="password" required  v-model="password"/>
                <label>Password</label>
            </div>

            <button class="loginSubmit" type="submit">Login</button>

            <p class="text2">¿No tienes una cuenta?<RouterLink to="/register" style="color: whitesmoke; font-weight: bold; font-size: 17px;">Registrate</RouterLink></p>
        
         </form>

        </div>
      </div>

      <Footer />
    </div> 
</template>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(/img/intento1.avif);
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
}

.main-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.login {
  border: 3px solid #2B57B5;
  box-shadow: 0 0 10px #27B7F5, 0 0 20px #27B7F5, 0 0 40px #27B7F5, 0 0 60px #27B7F5;
  background-color: rgba(0, 17, 17, 0.85);
  backdrop-filter: blur(5px);
  color: whitesmoke;
  text-shadow: 0 0 10px #27B7F5, 0 0 20px #27B7F5, 0 0 40px #27B7F5, 0 0 60px #27B7F5;
  padding: 30px;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
}

.loginInput {
  margin-bottom: 15px;
}

.loginInput input {
  width: 100%;
  border-radius: 35px;
  padding: 10px;
  border: none;
}

.loginSubmit {
  background-color: transparent;
  color: whitesmoke;
  font-size: 18px;
  border: 1px solid #27B7F5;
  border-radius: 12px;
  padding: 6px 12px;
  cursor: pointer;
  display: block;
  margin: 20px auto 0;
}
</style>
