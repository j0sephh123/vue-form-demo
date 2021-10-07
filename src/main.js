import { createApp } from "vue";
import store from "./store";
import App from "./App.vue";

import "./bulma.sass";

import "vue3-date-time-picker/dist/main.css";

createApp(App).use(store).mount("#app");
