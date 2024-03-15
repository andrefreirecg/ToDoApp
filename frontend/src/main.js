import { createApp } from 'vue'
import store from '@/stores'

import App from '@/App.vue'
import router from '@/routes/index.js'
import '../assets/scss/global.scss'
import '../assets/tailwind.css'

createApp(App)
	.use(router)
	.use(store)
	.mount('#app')
