<template lang="pug">
  #app
    lm-header
    section.section
      nav.navbar.has-shadow
        .navbar-item.is-expanded
          .field.has-addons
            .control.is-expanded
              input.input.is-large(
                type="text",
                v-model="searchQuery",
                placeholder="Buscar canciones"
              )
            .control
              a.button.is-info.is-large(@click="search") Buscar
            .control
              a.button.is-danger.is-large &times;
      .container
        p
          small {{ searchMessage }}
      .container.results
        .columns(v-for="t in tracks")
          .column
            | {{ t.name }} - {{ t.artists[0].name }}
    lm-footer
</template>

<script>
import trackService from './services/track'
import LmFooter from './components/layout/Footer.vue' //ES2015 convierte la sintaxis de PascalCase a kebab-case
import LmHeader from './components/layout/Header.vue'

export default {
  name: 'app',
  components: { LmFooter, LmHeader },
  data () {
    return {
      searchQuery: "",
      tracks: []
    }
  },
  computed:{
    searchMessage() {
      return `Encontrados ${this.tracks.length}`;
    }
  },
  methods: {
    search() {
      if (!this.searchQuery) {return;}

      trackService.search(this.searchQuery)
        .then(res => this.tracks = res.tracks.items);
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
  .results {
    padding: 2em;
  }
</style>
