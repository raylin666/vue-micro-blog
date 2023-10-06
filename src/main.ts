import { createApp } from 'vue'
import '@arco-design/web-vue/dist/arco.less'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import './assets/style/global.less'
import App from './App.vue'
import i18n from './locale'
import router from './router'
import store from './store'
import './mock'
import Particles from 'particles.vue3'
import VueTyped from 'vue3typed'

const app = createApp(App)

app.use(ArcoVue, {
  // 用于改变使用组件时的前缀名称, Arco Design UI 默认使用的是 a 前缀
  componentPrefix: 'a'
})
app.use(ArcoVueIcon)

app.use(i18n)
app.use(router)
app.use(store)

// 导入粒子动效
app.use(Particles)
// 导入打字机动效
app.use(VueTyped)

app.mount('#app')
