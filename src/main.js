//import '@babel/polyfill'
//import 'mutationobserver-shim'
import Vue from 'vue'
//import './plugins/fontawesome'
//import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//import VueGtag from "vue-gtag";

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

//Vue.use(VueGtag, {
  //  config: { id: "G-6MEQBZ1R16" }
//});


Vue.config.productionTip = false


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')


/*
new Vue({
        el: '#app',
        router,
        components: { App },
        template: '<App/>',
        render: h => h(App)
    })
    */