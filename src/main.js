import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faRedo,
  faScissors,
  faTrash,
  faUndo,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'
import App from './App.vue'

library.add(
  faRedo,
  faScissors,
  faTrash,
  faUndo,
)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
