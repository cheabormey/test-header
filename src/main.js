import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes'
import 'primeicons/primeicons.css'

const app = createApp(App)


const MyPreset = definePreset(Aura,{
    semantic:{
        primary:{
            50: "#FFFBE6",
            100: "#FFF3Bf",
            200: "#F8E889",
            300: "#F2DB7A",
            400: "#ECCF6B",
            500: "#E4b764",
            600: "#C99E52",
            700: "#AE8641",
            800: "#8F6C33",
            900: "#705226",
            950: "#4A3618",

        }
    }
})

app.use(PrimeVue, {
    theme:{
        preset: MyPreset,
        options:{
            prefix: 'p',
            darkModeSelector: false,
            cssLayout: false,
        }
    }
})
app.use(router)
app.mount('#app')