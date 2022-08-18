import { createApp } from 'vue'
import App from './App.vue'

import router from './router';
//import store from './store';

/**
 * Font Awesome CSS
 */

import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

/**
 * Bootstrap  CSS
 */

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

/**
 * Bootstrap  JS
 */

import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


createApp(App).use(router).mount('#app')
//createApp(App).use(store).use(router).mount('#app')
