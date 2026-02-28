import './assets/main.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// font
import '@fontsource/roboto/100.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

import '@mdi/font/css/materialdesignicons.css'

import { md3 } from 'vuetify/blueprints'

const vuetify = createVuetify({
    theme: {
        defaultTheme: 'dark', // 'system' | 'light' | 'dark'
        themes: {
            // 2. 다크 모드 컬러 정의 (여기가 핵심!)
            dark: {
                dark: true,
                colors: {
                    primary: '#1de5ff', // 다크 모드에 어울리는 연한 보라/하늘색 추천
                    secondary: '#ffd76c',
                    background: '#222222', // 다크모드 전용 배경색
                    surface: '#1E1E1E',    // 카드나 다이얼로그 배경색
                    error: '#CF6679',
                },
            },
        },
    },
    blueprint: md3,
    ssr: true,
    components,
    directives,
})

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(vuetify).mount('#app')
