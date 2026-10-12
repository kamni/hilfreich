import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVue3Head } from 'vue3-head';
import { createI18n } from 'vue-i18n';

import App from '@/App.vue'
import router from '@/router'
import translationsDE from '@/il8n/de';
import translationsEN from '@/il8n/en';

const app = createApp(App)
const head = createVue3Head()
const i18n = createI18n({
  legacy: false,
  locale: 'de',
  fallbackLocale: 'en',
  messages: {
    de: translationsDE,
    en: translationsEN,
  },
})

app.use(createPinia())
app.use(router)
app.use(head)
app.use(i18n)

app.mount('#app')
