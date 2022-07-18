import Home from '../page/Home.vue'
import Restaurant from '../page/Restaurant.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/restaurant/:name', name : 'Restaurant', component: Restaurant },
]
