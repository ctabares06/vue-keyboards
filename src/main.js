import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import Root from './App.vue'
import MainPage from './views/Home.vue'
import Keyboards from './views/Keyboards.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/keyboards', component: Keyboards },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(Root).use(router).mount('#app');
