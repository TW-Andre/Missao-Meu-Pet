import DefaultTheme from 'vitepress/theme';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createVuetify } from 'vuetify';

const vuetify = createVuetify({ components, directives });

import { createApp } from 'vue';
import './css/style.css';
import App from './App.vue';

const app =  createApp(App);

app.use(vuetify).mount('#app');
