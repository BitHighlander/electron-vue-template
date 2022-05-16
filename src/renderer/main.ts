import { createApp } from 'vue'
import App from './App.vue'

import {ipcRenderer} from './electron'

const app = createApp(App);
console.log(ipcRenderer)
ipcRenderer.on('@test/state', (_event, data) => {
    console.info('@test/state', data)
})



app.mount('#app');
