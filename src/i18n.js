import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// Todos los textos que se quieran mostrar y traducir se declararán dentro
// del objeto messages
const messages = {
  en: {
    search: 'Search',
    about: 'About'
  },
  es: {
    search: 'Busqueda',
    about: 'Nosotros'
  }
}

const i18n = new VueI18n({
  messages,
  locale: 'en'
})

export default i18n
