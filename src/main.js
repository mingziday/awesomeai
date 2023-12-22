import 'semantic-ui-css/semantic.min.css';//这两个css的引用先后要注意，后面的覆盖前面的
import './assets/main.css'
import './assets/ionicons.min.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/router.js';

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
