<template lang="pug">
  #app
    lm-header
    lm-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
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
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            //Si no se coloca v-bind: en lugar de pasar un objeto, se estaría
            //pasando un valor literal (un string) y no el valor de la variable
            lm-track(v-bind:track="t")
    lm-footer
</template>

<script>
//@ se puede usar para declarar un alias a una ruta en la directiva alias de
//resolve en webpack.config.js
import trackService from '@/services/track'
import LmFooter from '@/components/layout/Footer.vue' //ES2015 convierte la sintaxis de PascalCase a kebab-case
import LmHeader from '@/components/layout/Header.vue'
import LmTrack from '@/components/Track.vue'
import LmLoader from '@/components/shared/Loader.vue'

export default {
  name: 'app',
  components: { LmFooter, LmHeader, LmTrack, LmLoader },
  data () {
    return {
      searchQuery: "",
      tracks: [],
      isLoading: false
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

      this.isLoading = true

      trackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
          this.isLoading = false
        });
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
