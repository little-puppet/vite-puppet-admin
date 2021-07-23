import {createApp} from 'vue'
import App from './App.vue'
import {init} from './plugins'
import 'virtual:svg-icons-register'
import 'normalize.css'
import '@/styles/global.scss'
const app = createApp(App)
init(app)
app.mount('#app')
import '@/permission'
