const router = new VueRouter({
    routes: [
        { path: '/about', component: About },
    ]
})

const store = new Vuex.Store({
    state: {
        fullName: 'Thanathip Singkaew',
        otherName: 'Dew'
    },
})

const app = new Vue({
    el: '#app',
    data: () => ({
        name: 'Takzobye'
    }),
    store, router
})