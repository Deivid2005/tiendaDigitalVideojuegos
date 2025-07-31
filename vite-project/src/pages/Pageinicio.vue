<!---JAVASCRIPT-->
<script setup>
import { RouterLink } from 'vue-router'


import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { ref } from 'vue'

const images = [
  'https://via.placeholder.com/400x250?text=Imagen+1',
  'https://via.placeholder.com/400x250?text=Imagen+2',
  'https://via.placeholder.com/400x250?text=Imagen+3'
]

const currentIndex = ref(0)

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const prevImage = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.length) % images.length
}
</script>



<!---HTML-->
<template>
    
  <div class="app-wrapper">
    <!-- Header -->
    <Header />

    <!-- Contenido principal -->
    <main class="main-content w-full max-w-md mx-auto relative" >
     

      <div class="boxtitle" align="center">
      <h1 class="title1">
        Jump Game Classic
      </h1>
      </div>

      <p class="text">Bienvenido al salto hacia el pasado donde te podras aventurar a inumerables juegos clasicos, que fueron destacados en su epoca y a pesar del peso del tiempo aun lo siguen siendo. Te veras rodeado desde juegos de las viejas arcade hasta los mas memorables en consolas legendarias. ¡Es un salto en el tiempo que no te puedes perder!</p>

      <h2 class="title2">
        Destacados
      </h2>


    <div class="gallery">
  <div class="gallery-item">
    <img src="/img/kof.jpg" alt="The king of Fighters 96" class="gallery-img" />
    <div class="caption">
      <h3>The King OF Fighters 96</h3>
      <p>Version: Arcade</p>
    </div>
  </div>

  <div class="gallery-item">
    <img src="/img/MKtri.jpg" alt="Mortal Kombat Trilogy" class="gallery-img" />
    <div class="caption">
      <h3>Mortal Kombat Trilogy</h3>
      <p>Version: Consola</p>
    </div>
  </div>

  <div class="gallery-item">
    <img src="/img/MvsC.webp" alt="Marvel vs Capcom 2" class="gallery-img" />
    <div class="caption">
      <h3>Marvel vs Capcom 2</h3>
      <p>Version: Consola</p>
    </div>
  </div>

  <div class="gallery-item">
    <img src="/img/silent.webp" alt="Silent hill" class="gallery-img" />
    <div class="caption">
      <h3>Silent Hill</h3>
      <p>Version: Consola</p>
    </div>
  </div>
</div>

      <section class="cuenta">
        <p class="text2">¿Ya tienes una cuenta? No esperes mas, ingresa en nuestro mundo de aventuras inigualables</p>
        <div class="botonIS" align="center">
        <RouterLink to="/login"><button class="inicio2">Iniciar sesion</button></RouterLink>
        </div>
        <p class="text2">¿No tienes una cuenta?<RouterLink to="/register" style="color: whitesmoke; font-weight: bold; font-size: 20px;">Registrate</RouterLink></p>
        
        
      </section>
    </main>

    


    

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style setup>

html, body {
  height: 100%;
  margin: 0;
}

.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  margin-top: 180px;

}


.title1{
  text-shadow: 0px 0px 10px #27B7F5,
               0px 0px 20px #27B7F5,
               0px 0px 40px #27B7F5,
               0px 0px 60px #27b7F5;

  text-align: center;
  color: hsl(197, 88%, 40%);
  font-size: 40px;
  border: solid 4px;
  border-radius: 20px;
  display: inline-block;
  padding: 10px 20px; /* Ajusta el espacio interior si lo deseas */

  
}

.text{
  color:black;
  text-align: center;
  font-size: 22px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding-left: 50px;
  padding-right: 50px;
}

.title2{
   text-shadow: 0px 0px 10px #27B7F5,
                0px 0px 20px #27B7F5,
                0px 0px 40px #27B7F5,
                0px 0px 60px #27b7F5;

    color: hsl(197, 88%, 40%);
    text-align: center;
    font-size: 35px;
}

.cuenta{
  margin-top: 10px;
  background-color: #001111;
  padding: 50px;
  margin: 25px;
  border: solid 5px #27B7F5;
  border-radius: 20px;
  box-shadow: 0px 0px 10px #27B7F5,
               0px 0px 20px #27B7F5,
               0px 0px 40px #27B7F5,
               0px 0px 60px #27b7F5;

}


.text2{
  color: whitesmoke;
  text-shadow: 0px 0px 10px #27B7F5,
               0px 0px 20px #27B7F5,
               0px 0px 40px #27B7F5,
               0px 0px 60px #27b7F5;
   text-align: center;
  font-size: 22px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.inicio2{
   background-color: transparent;
  color: whitesmoke;
  font-size: 18px;
  border: 1px solid #27B7F5;
  border-radius: 12px;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 5px;
}

.inicio2:hover {
  background-color: #161b22;
  color: #ffffff;
  box-shadow: 0 0 10px #58a6ff88;
}

.inicio2:active {
  transform: scale(0.97);
  box-shadow: 0 0 5px #58a6ff55;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.5);
  border: 2px solid #a5b1c2;
  cursor: pointer;
  width: 250px;
  flex-shrink: 0;
  background-color: black;
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.03);
}

.gallery-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.caption {
  padding: 10px;
  text-align: center;
}

.caption h3 {
  margin: 0;
  font-size: 16px;
  color: whitesmoke;
}

.caption p {
  margin: 5px 0 0;
  font-size: 14px;
  color: black;
  text-shadow:  0px 0px 10px whitesmoke,
               0px 0px 20px whitesmoke,
               0px 0px 40px whitesmoke,
               0px 0px 60px whitesmoke; 
}


</style>


