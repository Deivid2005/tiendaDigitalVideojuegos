<template>
  <div class="acerca-container">
    <h1 class="titulo">Acerca de Nosotros</h1>
    <p class="descripcion">
      Somos una tienda virtual dedicada a los videojuegos retro. Amamos el mundo gamer y queremos ofrecerte una experiencia única, segura y accesible desde cualquier lugar.
    </p>
    
    <div class="seccion">
      <h2>Misión</h2>
      <p>
        Brindar a nuestros clientes una plataforma confiable y amigable para adquirir videojuegos de forma rápida y segura, fomentando la pasión por el gaming en todas sus formas.
      </p>
    </div>

    <div class="seccion">
      <h2>Visión</h2>
      <p>
        Ser reconocidos como una de las tiendas virtuales favoritas de los gamers, destacando por nuestra atención al cliente, precios justos y variedad en títulos.
      </p>
    </div>

    <div class="seccion">
      <h2>Valores</h2>
      <ul>
        <li>🎮 Pasión por los videojuegos</li>
        <li>🤝 Honestidad y confianza</li>
        <li>⚡ Innovación y mejora continua</li>
        <li>🛠️ Soporte dedicado</li>
      </ul>
    </div>
  </div>
  <Footer />
</template>


<script setup>

import Footer from '../components/Footer.vue';


</script>

<style scoped>


.acerca-container {
  max-width: 800px;
  margin: 50px auto;
  padding: 40px;
  background-color: #1e1e1e;
  border: 2px solid #3abdfd;
  border-radius: 15px;
  color: whitesmoke;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0 0 20px rgba(58, 189, 253, 0.2);
}

.titulo {
  text-align: center;
  color: #3abdfd;
  font-size: 2.2em;
  margin-bottom: 20px;
}

.descripcion {
  text-align: center;
  margin-bottom: 30px;
  font-size: 1.1em;
  color: #ccc;
}

.seccion {
  margin-bottom: 25px;
}

.seccion h2 {
  color: #3abdfd;
  margin-bottom: 10px;
}

.seccion p {
  color: #ddd;
  line-height: 1.6;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  margin-bottom: 8px;
  font-size: 1em;
}
</style>
