import { createApp } from 'vue'
import store from '@/stores'
import App from '@/App.vue'
import router from '@/routes/index.js'
import '../assets/scss/global.scss'
import '../assets/tailwind.css'


import { library } from "@fortawesome/fontawesome-svg-core";
import { faSquareXmark, faFileCirclePlus, faPenToSquare, faSquare, faSquareCheck, faFilter, faArrowDownAZ, faArrowUpAZ, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
library.add(faSquareXmark, faFileCirclePlus, faPenToSquare, faSquare, faSquareCheck, faFilter, faArrowDownAZ, faArrowUpAZ, faArrowUp, faArrowDown);


createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
