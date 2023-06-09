import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import { APP_VERSION } from './version.js';
import './style.css';
import category from "./store/category";
import item from "./store/item";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add( fas, far, fab );

const app = createApp(App);

app.component('fa-icon', FontAwesomeIcon);

app.config.globalProperties.$appVersion = APP_VERSION;

app.use(router);
app.use(category);
app.use(item);

app.mount('#app');

// createApp(App)
// .use(router)
// .component('fa-icon', FontAwesomeIcon)
// .mount('#app')