import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import axios from 'axios'
import VueAxios from "vue-axios";
import { router } from './router'
import particlesJS from "particles.js";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

library.add(faCircleExclamation)

axios.defaults.baseURL = "/api";

createApp(App).use(VueAxios, axios).use(ElementPlus).use(router).use(particlesJS).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
