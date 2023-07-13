import { createApp } from 'vue'
import './style/style.scss'
import App from './App.vue'

import { highlightAllCodeBlocks } from '@/highlight.ts'

addEventListener('load', () => {
    highlightAllCodeBlocks()
})

const app = createApp(App)
app.mount('#app')
