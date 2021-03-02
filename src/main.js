import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import './css/global.css'
import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'

createApp(App).use(ElementPlus).use(router).mount('#app')


