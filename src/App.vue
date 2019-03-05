<template lang="pug">
  #app
    input(v-model="name")
    input(v-model="lastName")
    p {{ fullName }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: "",
      lastName: ""
    }
  },
  computed: {
    fullName() {
      return `${this.name} ${this.lastName}`;
    }
  },
  watch: {
    //Se ejecuta código a partir de que una propiedad del view-model cambia
    //No devuelven un valor, no son propiedades y no se pueden usar en expresiones.

    //Se enlazan directamente con alguna variable del view-model, por lo tanto
    //se deben tener el mismo nombre.
    name(newValue, oldValue) {
      console.log(newValue, oldValue);
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
