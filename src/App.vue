<template lang="pug">
  #app
    img(src="./assets/platzi_station.jpg")
    h2 {{ msg }}
    .field
      label.label {{ labelNombre }}
      .control
        input.input(type="text", placeholder="Nombre")
    .field
      label.label {{ labelApellido }}
      .control
        input.input(type="text" placeholder="Apellido")
    .control
      button.button(class="is-link is-pulled-right") {{ textoBoton }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Registro estación Platzi',
      labelNombre: 'Nombre',
      labelApellido: 'Apellido',
      labelCargo: 'Cargo',
      textoBoton: 'ENVIAR'
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
