import Vue from 'vue'
import Home from './Home.vue'

import '@/styles/main.scss';

Vue.config.productionTip = false

new Vue({
    render: h => h(Home),
}).$mount('#app')
