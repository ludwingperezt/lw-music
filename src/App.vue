<template lang="pug">
  #app
    p(v-show="showValue") {{ value }}
    p(v-if="showValue") {{ value }}
    p(v-else-if="false") {{ 'algo mas' }}
    p(v-else) {{ 'default' }}
    ul
      li(v-for="item in items") {{ item }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      value: 'Valor!',
      showValue: false,
      items: [0,1,2,3,4,5]
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
