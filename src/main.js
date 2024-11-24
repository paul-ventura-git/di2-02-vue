import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import './assets/css/main.css';

import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";

import App from './App.vue'
import PageAbout from "./pages/PageAbout.vue";
import PageContact from "./pages/PageContact.vue"
import PageCustomers from "./pages/PageCustomers.vue";
import PageHome from "./pages/PageHome.vue";
import PageProducts from "./pages/PageProducts.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: PageHome },
        { path: '/about', component: PageAbout },
        { path: '/contact', component: PageContact },
        { path: '/customers', component: PageCustomers },
        { path: '/products', component: PageProducts },
    ]
});

const app = createApp(App);
app.use(router);

app.mount('#app');