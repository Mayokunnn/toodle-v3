import { createApp } from 'vue'
import { createPinia } from "pinia";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import router from './router';
import './style.css'
import App from './App.vue'
import * as FaIcons from "oh-vue-icons/icons/fa";

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);

const pinia = createPinia();
const app = createApp(App);
app.component("icon", OhVueIcon);
app.use(router);
app.use(pinia)
app.mount('#app')
