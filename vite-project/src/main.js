import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const pinia = createPinia();

pinia.use(({ store }) => {
  store.$router = markRaw(router); // 👈 Aquí se inyecta el router a cada store
});

app.use(pinia);
app.use(router);
app.mount("#app");
