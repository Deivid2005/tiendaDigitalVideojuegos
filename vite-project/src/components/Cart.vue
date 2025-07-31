 <template>
  <div class="cart">
    <h3>Carrito</h3>
    <div v-if="cartItems.length === 0">
      No hay productos.
    </div>
    <ul>
      <li v-for="(item, index) in cartItems" :key="index">
        {{ item.name }} - ${{ item.price }}
      </li>
    </ul>
    <p v-if="cartItems.length > 0">Total: ${{ total }}</p>
    <button v-if="cartItems.length > 0" @click="confirmPayment" class="Boton">Pagar</button>
    
    <!-- Ventana emergente -->
    <div v-if="showConfirm" class="modal">
      <div class="modal-content">
        <p>¿Estás seguro de realizar la compra?</p>
        <button @click="pay" class="Boton">Sí</button>
        <button @click="cancel" class="Boton">No</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const props = defineProps({
  cartItems: Array
})
const emit = defineEmits(['pay'])

const showConfirm = ref(false)

const total = computed(() =>
  props.cartItems.reduce((sum, item) => sum + item.price, 0)
)

function confirmPayment() {
  showConfirm.value = true
}

function cancel() {
  showConfirm.value = false
}

function pay() {
  emit('pay')
  showConfirm.value = false
}
</script>

<style scoped>
.cart {
  width: 250px;
  padding: 20px;
  background: #001111;
  border-radius: 8px;
  box-shadow: 0px 0px 10px #27B7F5,
               0px 0px 20px #27B7F5,
               0px 0px 40px #27B7F5,
               0px 0px 60px #27b7F5;
   color: whitesmoke;
   text-align: center;
   font-family: Verdana, Geneva, Tahoma, sans-serif;
   text-shadow: 0px 0px 10px #27B7F5,
               0px 0px 20px #27B7F5,
               0px 0px 40px #27B7F5,
               0px 0px 60px #27b7F5;
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

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #001111;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}
</style>
