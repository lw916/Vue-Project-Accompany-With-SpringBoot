import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import './css/global.css'
import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import qs from 'qs'
import axios from'axios'


axios.defaults.baseURL = '/query'
const app = createApp(App)
app.config.globalProperties.$qs = qs
app.config.globalProperties.$http = axios

app.use(ElementPlus).use(router).mount('#app')


