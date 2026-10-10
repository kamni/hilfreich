import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVue3Head } from 'vue3-head';

import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createVue3Head()

app.use(createPinia())
app.use(router)
app.use(head)

app.mount('#app')
