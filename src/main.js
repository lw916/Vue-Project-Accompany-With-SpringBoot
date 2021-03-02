import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import './css/global.css'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(ElementPlus).mount('#app')
