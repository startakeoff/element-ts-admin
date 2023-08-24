import { createApp } from 'vue'
import store from '@/stores'

import App from './App.vue'
import router from './router'
//? 导入css
import 'uno.css'
import '@/styles/index.scss'

const app = createApp(App)

app.use(store).use(router)
// router.isReady().then(() => {
//     app.mount("#app")
// })
app.mount('#app')
