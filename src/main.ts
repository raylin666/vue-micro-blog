import { createApp } from 'vue'
import './assets/style/global.less'
import App from './App.vue'
import i18n from './locale'

const app = createApp(App)
app.use(i18n)
app.mount('#app')
