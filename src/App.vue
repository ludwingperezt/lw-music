<template lang="pug">
  #app
    input(v-model="name")
    p {{ name }}

    a(v-bind:href="url") Ejemplo de v-bind&nbsp;
    a(:href="url") - Shorthand de v-bind
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: "",
      url: "https://www.google.com"
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
