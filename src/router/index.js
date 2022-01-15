import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/AddPersonas',
        name: 'AddPersonas',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "AddPersonas" */ '../views/AddPersonas.vue')
    }, //{
        //path: '/Tabla',
        //name: 'Tabla',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        //component: () =>
        //    import ( /* webpackChunkName: "Tabla" */ '../views/Tabla.vue')
   // },
     {
        path: '/OtraPagina',
        name: 'OtraPagina',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Contacto" */ '../views/OtraPagina.vue')
    }, {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }, {
        path: '/listaproyectos',
        name: 'ListaProyectos',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "ListaProyectos" */ '../views/ListaProyectos.vue')
    }
]

const router = new VueRouter({
    mode: "history",
    //base: '/practicawd/',
    base: '/prova_pr2/',
    routes
})

export default router