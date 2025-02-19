import DefaultTheme from 'vitepress/theme';
import 'vuetify/styles';
import {vuetify} from "./plugins/vuetify";

import { createApp } from 'vue';
import './css/style.css';
import App from './App.vue';

const app =  createApp(App);

app.use(vuetify).mount('#app');

