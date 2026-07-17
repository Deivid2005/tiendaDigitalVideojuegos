<template>
    <header>
        <img src="/img/logo1.png" height="180px" width="200px"/>
        
        <div class="enlaces">
            <router-link to="/login"><button class="inicioSesion">Iniciar sesion</button></router-link>
            <router-link to="/info"><p class="option">Acerca De</p></router-link>
            <router-link to="/soport"><p class="option">Soportes</p></router-link>
         
        </div>
        
    </header>
</template>

<style setup>

header {
   position: fixed;         /* Lo mantiene fijo */
  top: 0;                  /* Lo fija en la parte superior */
  left: 0;
  right: 0;
  z-index: 1000;           /* Asegura que quede por encima de otros elementos */
  display: flex;
  justify-content: space-between; /* separa el logo y los enlaces */
  align-items: center;
  background-color: #001111;
  padding: 0 30px;
  height: 180px;
}

.enlaces {
  display: flex;
  justify-content: space-between; /* separa internamente los elementos */
  align-items: center;
  gap: 20px; /* separa los elementos individualmente */
}

/* Puedes agregarle estilos al botón */
.inicioSesion {
  background-color: transparent;
  color: whitesmoke;
  font-size: 18px;
  border: 1px solid #27B7F5;
  border-radius: 12px;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 5px;
}

.inicioSesion:hover {
  background-color: #161b22;
  color: #ffffff;
  box-shadow: 0 0 10px #58a6ff88;
}

.inicioSesion:active {
  transform: scale(0.97);
  box-shadow: 0 0 5px #58a6ff55;
}

/* Estilo para los textos */
.option {
  color: whitesmoke;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: bold;
  font-size: 23px;
  margin: 0;
}

</style>
