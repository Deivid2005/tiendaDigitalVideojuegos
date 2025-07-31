<template>
  <div class="page-container">
    <div class="soporte-container">
      <h1 class="titulo">Soporte Técnico</h1>
      <p class="descripcion">
        Si tienes alguna duda, problema con tus compras o simplemente deseas contactarnos, completa el siguiente formulario:
      </p>
      <form class="formulario">
        <input type="text" placeholder="Tu nombre" required />
        <input type="email" placeholder="Correo electrónico" required />
        <textarea rows="5" placeholder="Escribe tu mensaje aquí..." required></textarea>
        <button type="submit">Enviar mensaje</button>
      </form>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import Footer from '../components/Footer.vue';
</script>

<style scoped>
/* Estilo para que el footer quede fijo abajo */
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: white;
}

/* Esta clase hace que el contenido crezca y deje espacio para el footer */
.soporte-container {
  flex: 1;
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
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
  margin-bottom: 10px;
  font-size: 2em;
}

.descripcion {
  text-align: center;
  margin-bottom: 30px;
  font-size: 1em;
  color: #ccc;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input,
textarea {
  padding: 12px;
  border: 1px solid #3abdfd;
  border-radius: 10px;
  background-color: #2a2a2a;
  color: whitesmoke;
  font-size: 1em;
}

input::placeholder,
textarea::placeholder {
  color: #aaa;
}

button {
  padding: 12px;
  border: none;
  background-color: #3abdfd;
  color: #1e1e1e;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #28a5e0;
}
</style>

