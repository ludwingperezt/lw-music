const eventBus = {}

// la función install se declara para que la instancia del view-model (el objeto
// vue), para que pueda hacer uso del plugin
// @params Vue: Instancia de Vue de la aplicación que se utilizará para Instalar
// e inyectar el plugin en todos los componentes.
eventBus.install = function(Vue) {
  // Dentro del prototipo del objeto Vue se declara una variable $bus, la cual
  // es una instancia de Vue, para poder usar los métodos existentes en su API
  // para la emisión y escucha de eventos: $emit y $on.
  
  // Se utiliza el símbolo $ para identificar el objeto bus como un plugin
  // u objeto nativo de vue y no un método o propiedad del view-model.
  Vue.prototype.$bus = new Vue()
}

export default eventBus
