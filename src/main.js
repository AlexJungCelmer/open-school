import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

axios.defaults.headers.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjI2YzM2OTY4MTk4NzZkODE0NTM3YzY0IiwiZW1haWwiOiJhbGV4LmNlbG1lcjJAaG90bWFpbC5jb20iLCJpYXQiOjE2NTQ3MjkwOTEsImV4cCI6MTY4NjI4NjY5MX0.3WFhNHy3qfo7LKXGH4hfPuWgGI7DGgrpz5I2-dubrmI'

createApp(App).use(Quasar, quasarUserOptions).use(store).use(router).mount('#app')
