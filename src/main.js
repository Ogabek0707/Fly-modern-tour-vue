import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ru from './locales/ru.json'
import uz from './locales/uz.json'
// import VueGoogleMaps from '@fawmi/vue-google-maps'
// import { Vue3GoogleMap } from 'vue3-google-map'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'uz',
  fallbackLocale: 'en',
  messages: { uz, en, ru }
})  
// app.use(VueGoogleMaps, {
//   load: {
//     key: 'YOUR_API_KEY',
//   },
// })

// app.use(VueGoogleMaps, {
//   load: {
//     key: 'SENING_GOOGLE_API_KEYING',
//     libraries: 'places',
//   },
// })
app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
