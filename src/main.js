import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import router from '/src/router/index'

const app = createApp(App)
app.config.productionTip = false
app.use(router)
    .use(ElementPlus, {locale: zhCn})
    .mount('#app')
