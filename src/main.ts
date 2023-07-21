import './assets/main.css'
import messages from '@/content/locales.json'

import {createApp, markRaw} from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'



const i18n = createI18n({
  legacy: false,
  locale: 'hu', // set locale
  fallbackLocale: 'hu', // set fallback locale
  messages: messages, // set locale messages
})
import App from './App.vue'
import router from './router'

const pinia = createPinia()
pinia.use(({ store }) => {
  store.$router = markRaw(router)
})

const app = createApp(App)

app.use(pinia)
app.use(i18n)
app.use(router)

app.mount('#app')
