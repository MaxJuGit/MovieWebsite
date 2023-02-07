import { createApp } from 'vue';
import App from './App.vue';
import router from "./router/main.js";
import { createPinia } from 'pinia';
import './style.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

library.add(faCartShopping, faGoogle)

const pinia = createPinia();

createApp(App).use(router).use(pinia).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
