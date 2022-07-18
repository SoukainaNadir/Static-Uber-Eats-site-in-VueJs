import { createApp } from 'vue'
import App from './App.vue'
import { createRouter , createWebHistory } from 'vue-router'
import { routes } from "./router/routes"

const router = createRouter({
    history: createWebHistory(),
    routes
})

const VueApp= createApp(App)
VueApp.use(router)
VueApp.mount('#app');