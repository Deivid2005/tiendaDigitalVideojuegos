<script setup>
import Footer from '../components/Footer.vue';

import { ref } from 'vue'
import { useUserStore } from '../store/user'

const email = ref("");
const password = ref("");


const userStore = useUserStore();

const register = () => {
    userStore.register(email.value, password.value);
}
</script>

<template>
  <div class="app-wrapper">
    <main class="main-content">
      <div class="registro-box">
        <h2>Register</h2>
        <form @submit.prevent="register">
          <div class="form-group">
            <input type="email" required v-model="email" />
            <label>Email</label>
          </div>
          <div class="form-group">
            <input type="password" required v-model="password" />
            <label>Password</label>
          </div>

          <button class="btn-aceptar" type="submit">Register</button>
          <p class="text2">¿Ya te registraste?<RouterLink to="/login">Inicia sesion</RouterLink></p>
        </form>
      </div>
    </main>

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

.registro-box {
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

.form-group {
  margin-bottom: 15px;
}

.form-group input {
  width: 100%;
  border-radius: 35px;
  padding: 10px;
  border: none;
}

.btn-aceptar {
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


<!--
<template>

    <div class="app-wrapper">
     <main class="main-content w-full max-w-md mx-auto relative" >
      <div class="Registro">
        <h2>Register</h2>
        <form @submit.prevent="register">
            <div class="procedimiento">
                <input type="email" required v-model="email" />
                <label>Email</label>
            </div>
            <div class="procedimiento">
                <input type="password" required v-model="password"/>
                <label>Password</label>
            </div>

            <button class="Aceptar" type="submit">Register</button>
        </form>
       </div>
      </main>
    

    <Footer/>
    </div>

</template>


<style setup>
html, body {
  height: 100%;
  margin: 0;
  background-image: url(/img/intento1.avif);
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
}

.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
   min-height: 100vh; /* Esto asegura que se centre verticalmente */
}

.Registro {
  border: #2B57B5 solid 3px;
  box-shadow: 0px 0px 10px #27B7F5,
              0px 0px 20px #27B7F5,
              0px 0px 40px #27B7F5,
              0px 0px 60px #27b7F5;
   background-color: rgba(0, 17, 17, 0.85); /* negro translúcido */
  backdrop-filter: blur(5px); /* efecto cristal */
  color: whitesmoke;
  text-shadow: 0px 0px 10px #27B7F5,
               0px 0px 20px #27B7F5,
               0px 0px 40px #27B7F5,
               0px 0px 60px #27b7F5;
  padding: 30px;
  border-radius: 12px;

}

.Registro input {
  border-radius: 35px;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
}

.Aceptar {
  background-color: transparent;
  color: whitesmoke;
  font-size: 18px;
  border: 1px solid #27B7F5;
  border-radius: 12px;
  padding: 6px 12px;
  cursor: pointer;
  margin: 20px auto 0;
  display: block;
}
</style>
-->