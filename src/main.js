import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'

import routes from '@/routes'

//Instalar el plugin event-bus
import EventBus from '@/plugins/event-bus'

Vue.use(VueRouter)

// La función .use le indica a Vue que puede utilizar el plugin.  Ésta función
// sirve para instalar plugins, librerías de terceros, frameworks, componentes,
// etc.
// Si en el plugin se declaró correctamente la función install, es desde aquí
// que se ejecuta la misma.
Vue.use(EventBus)

// Activar HistoryMode para evitar la combinación '/#/' en las rutas
// Por medio de 'mode: history' se le dice al view-router que se quiere usar
// el history mode nativo
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router //equivale a colocar router: router
})
