import Vue from 'vue'
import App from '@/App.vue'

//Instalar el plugin event-bus
import EventBus from '@/plugins/event-bus'

// La función .use le indica a Vue que puede utilizar el plugin.  Ésta función
// sirve para instalar plugins, librerías de terceros, frameworks, componentes,
// etc.
// Si en el plugin se declaró correctamente la función install, es desde aquí
// que se ejecuta la misma.
Vue.use(EventBus)

new Vue({
  el: '#app',
  render: h => h(App)
})
