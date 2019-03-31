<template lang="pug">
  #app
    lm-header

    router-view
      
    lm-footer
</template>

<script>
//@ se puede usar para declarar un alias a una ruta en la directiva alias de
//resolve en webpack.config.js


import LmFooter from '@/components/layout/Footer.vue' //ES2015 convierte la sintaxis de PascalCase a kebab-case
import LmHeader from '@/components/layout/Header.vue'

export default {
  name: 'app',
  components: { LmFooter, LmHeader }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
  .results {
    padding: 2em;
  }
  .is-active {
    border: 3px #23d160 solid;
  }
</style>
