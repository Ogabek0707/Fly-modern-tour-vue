import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ru from './locales/ru.json'
import uz from './locales/uz.json'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'uz',
  fallbackLocale: 'en',
  messages: { uz, en, ru }
})  

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
