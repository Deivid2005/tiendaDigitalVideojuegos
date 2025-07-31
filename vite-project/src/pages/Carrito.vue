<template>

  
  <div class="container">
    <button class="cerrarSesion" @click.prevent="logout">Cerrar sesion</button>
    <h2 class="title">Productos</h2>

    <div class="product-list">
      <div v-for="product in products" :key="product.id" class="product-card">
        <h3>{{ product.name }}</h3>
        <div class="product-content">
          <img :src="product.image" alt="imagen producto" class="product-image" />
          <div class="description">
            <p><strong>Descripción:</strong> {{ product.description }}</p>
            <p><strong>Género:</strong> {{ product.genre }}</p>
            <p><strong>Versión:</strong> {{ product.version }}</p>
          </div>
        </div>
        <div class="actions">
          <button @click="addToCart(product)" class="Boton">Agregar</button>
          <p class="price">${{ product.price }}</p>
        </div>
      </div>
    </div>

    <!-- Carrito Fijo -->
    <div class="cart-fixed">
      <Cart :cartItems="cart" @pay="handlePay" />
    </div>

    <div v-if="showSuccess" class="success-message">
      ¡Compra finalizada con éxito!
    </div>
  </div>

  <Footer />
</template>



<script setup>
import { ref } from 'vue'
import Cart from '../components/Cart.vue'
import Footer from '../components/Footer.vue'
import  { useUserStore } from '../store/user';

 const products = ref([
  {
    id: 1,
    name: 'The King Of Fighters 96',
    price: 7000,
    image: '/img/kof.jpg',
    description: 'Una de las entregas más queridas de la franquicia KOF. Nuevos personajes, mecánicas refinadas y una banda sonora inolvidable te sumergen en combates intensos donde la estrategia y los reflejos mandan. KOF ’96 consolidó el legado del torneo del rey de los peleadores.',
    genre: 'Lucha',
    version: 'Arcade'
  },
  {
    id: 2,
    name: 'Marvel vs Capcom 2',
    price: 9000,
    image: '/img/MvsC.webp',
    description: 'El crossover definitivo. Elige entre más de 50 luchadores de Marvel y Capcom y lánzate a batallas 3 vs 3 con combos infinitos, super ataques y escenarios alucinantes. Un espectáculo visual y jugable que marcó a toda una generación.',
    genre: 'Lucha',
    version: 'Arcade'
  },
  {
    id: 3,
    name: 'Silent Hill',
    price: 11000,
    image: '/img/silent.webp',
    description: 'Un viaje psicológico al corazón del terror. Acompaña a Harry Mason mientras busca a su hija en un pueblo envuelto en niebla y misterio. Silent Hill no solo te asusta, sino que te envuelve con una narrativa oscura y una atmósfera escalofriante.',
    genre: 'Survival Horror',
    version: 'Consola'
  },
  {
    id: 4,
    name: 'Mortal Kombat Trilogy',
    price: 7000,
    image: '/img/MKtri.jpg',
    description: 'Todos los guerreros, todos los escenarios, todo el gore. Mortal Kombat Trilogy es una carta de amor a los fans de la franquicia, reuniendo lo mejor de las tres primeras entregas con nuevos modos y una brutalidad sin límites.',
    genre: 'Lucha',
    version: 'Consola'
  },
  {
    id: 5,
    name: 'Tetris',
    price: 5000,
    image: '/img/tetris.jpg',
    description: 'El rompecabezas que conquistó al mundo. Simple, adictivo y eterno. Encaja las piezas con precisión, supera tus récords y entra en un estado casi meditativo. Tetris es un clásico inmortal que desafía tu mente.',
    genre: 'Puzzle',
    version: 'Consola'
  },
  {
    id: 6,
    name: 'Metal Slug 2',
    price: 7000,
    image: '/img/Metal.webp',
    description: 'Explosiones, acción desenfrenada y humor militar. Metal Slug 2 lleva el run-and-gun a otro nivel con nuevos personajes, enemigos caricaturescos y un estilo artístico inconfundible. Un clásico de los arcades que no puedes dejar pasar.',
    genre: 'Acción',
    version: 'Arcade'
  },
  {
    id: 7,
    name: 'Resident Evil 2',
    price: 11000,
    image: '/img/Re2.webp',
    description: 'El apocalipsis zombi llega a Raccoon City. Vive dos campañas intensas con Leon y Claire, resuelve acertijos, enfréntate a mutaciones horrendas y descubre los secretos de Umbrella. Un pilar del survival horror que marcó historia.',
    genre: 'Survival Horror',
    version: 'Consola'
  },
  {
    id: 8,
    name: 'Street Fighter 3: 3rd Strike',
    price: 8000,
    image: '/img/St3.jpg',
    description: 'La obra maestra técnica de la lucha en 2D. Animaciones fluidas, un sistema de parry que recompensa la precisión y una banda sonora electrizante. 3rd Strike es una joya competitiva amada por puristas del género.',
    genre: 'Lucha',
    version: 'Arcade'
  },
  {
    id: 9,
    name: 'The King Of Fighters 2002',
    price: 8000,
    image: '/img/kof2.jpg',
    description: 'Considerado por muchos como la mejor entrega de la saga. KOF 2002 reúne a una enorme cantidad de personajes sin historia, enfocado completamente en el combate. Perfecto para jugar entre amigos o pulir tus habilidades.',
    genre: 'Lucha',
    version: 'Arcade'
  },
  {
    id: 10,
    name: 'Silent Hill 2',
    price: 14000,
    image: '/img/silent2.jpeg',
    description: 'Una historia inquietante sobre culpa, amor y redención. Acompaña a James Sunderland en un viaje emocional y terrorífico hacia el corazón del dolor humano. Silent Hill 2 es arte psicológico convertido en videojuego.',
    genre: 'Survival Horror',
    version: 'Consola'
  },
  {
    id: 11,
    name: 'Resident Evil 4',
    price: 14000,
    image: '/img/Re4.jpg',
    description: 'Acción, horror y adrenalina. Acompaña a Leon S. Kennedy en una misión para rescatar a la hija del presidente enfrentando cultos siniestros y enemigos implacables. RE4 revolucionó el género y dejó una huella imborrable.',
    genre: 'Survival Horror / Acción',
    version: 'Consola'
  },
  {
    id: 12,
    name: 'Tekken 3',
    price: 10000,
    image: '/img/tekken.jpg',
    description: 'Un referente de la lucha 3D. Con personajes inolvidables, movimientos veloces y un equilibrio excepcional, Tekken 3 elevó la franquicia a la cima y sigue siendo uno de los mejores juegos de peleas jamás creados.',
    genre: 'Lucha',
    version: 'Consola'
  }
])





const cart = ref([])

const showSuccess = ref(false)

function addToCart(product) {
  cart.value.push(product)
}

function handlePay() {
  showSuccess.value = true
  cart.value = []
  setTimeout(() => {
    showSuccess.value = false
  }, 3000)
}

const userStore = useUserStore();

const logout = () => {
  userStore.logout();
};


</script>

<style scoped>

.cerrarSesion {
  margin: 10px;
  padding: 12px 24px;
  background: linear-gradient(145deg, #d32f2f, #b71c1c); /* degradado rojo profesional */
  color: #fff;
  border: none;
  border-radius: 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.cerrarSesion:hover {
  background: linear-gradient(145deg, #f44336, #c62828);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
}

.cerrarSesion:active {
  transform: translateY(1px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}


.Boton {
  background-color: #0d1117; /* negro claro */
  color: #58a6ff; /* azul claro */
  border: 2px solid #58a6ff;
  border-radius: 8px;
  padding: 10px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.Boton:hover {
  background-color: #161b22;
  color: #ffffff;
  box-shadow: 0 0 10px #58a6ff88;
}

.Boton:active {
  transform: scale(0.97);
  box-shadow: 0 0 5px #58a6ff55;
}


.container {
  padding: 20px;
  background-color: #1e1e1e;
  min-height: 100vh; /* para que tome toda la altura de la pantalla */
  color: #f0f0f0; /* texto claro para contraste */
  
}

.title {
  font-size: 2em;
  margin-bottom: 20px;
  text-shadow: 0px 0px 10px #27B7F5,
               0px 0px 20px #27B7F5,
               0px 0px 40px #27B7F5,
               0px 0px 60px #27b7F5;

  text-align: center;
  color: hsl(197, 88%, 40%);
  font-size: 40px;
  border: solid 4px;
  border-radius: 20px;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Dos columnas */
  gap: 20px;
  
}

.product-card {
  border: 1px solid #27B7F5;
  border-radius: 8px;
  padding: 15px;

  background-color: #1e1e1e;
  
}

.product-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-image {
  width: 100%;
  max-width: 200px;
  border-radius: 5px;
  margin-bottom: 10px;
}

.description {
  margin-top: 10px;
  text-align: left;
  font-size: 0.95em;
}

.actions {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-weight: bold;
  color: #007b00;
}

/* ✅ Carrito fijo en la esquina */
.cart-fixed {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  background: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  max-width: 300px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Opcional: mensaje de éxito */
.success-message {
  margin-top: 20px;
  text-align: center;
  color: green;
  font-weight: bold;
  border: none;
  background-color: #001111;
  padding: 50px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  box-shadow: 0px 0px 10px lawngreen,
               0px 0px 20px lawngreen,
               0px 0px 40px lawngreen,
               0px 0px 60px lawngreen;
}
</style>



<!--<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.product-card{
     border: 2px solid black;
}


.product-list {
  flex: 1;

}

.product-image {
  width: 150px;   /* Ajusta según lo que necesites */
  height: auto;   /* Mantiene la proporción original */
  object-fit: contain; /* O usa cover para llenar el área */
}


.product {
  margin-bottom: 10px;
   
}
.success-message {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #4caf50;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}
</style>
-->