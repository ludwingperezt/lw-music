<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        .notification(v-bind:class="noResults === true ? 'is-danger' : 'is-success'")
          slot(name="body") Algo anduvo mal
</template>

<script>
  export default {
    props: {
      noResults: {type:Boolean, required: true}
    }
  }
</script>

<style lang="scss" scoped>
  .notification {
    margin: 10px;
  }
</style>
