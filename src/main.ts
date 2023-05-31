import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import router from './routes'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')
app.use(router)
