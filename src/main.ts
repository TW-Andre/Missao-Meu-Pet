import DefaultTheme from 'vitepress/theme';
import 'vuetify/styles';
import {vuetify} from "./plugins/vuetify";
import { createPinia } from 'pinia'
import { createApp } from 'vue';
import './css/style.css';
import App from './App.vue';

const pinia = createPinia()
const app =  createApp(App);

app.use(vuetify).mount('#app');
app.use(pinia);
