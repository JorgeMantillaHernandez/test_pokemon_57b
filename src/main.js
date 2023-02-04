import { createApp } from "vue";
import { createPinia } from 'pinia'

import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

createApp(App).use(createPinia()).use(router).use(vuetify).use(VueAxios, axios).mount("#app");
