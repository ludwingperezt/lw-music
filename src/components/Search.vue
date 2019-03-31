<template lang="pug">
  main
    lm-notification(
      v-show="showNotification",
      v-bind:noResults="noResults")
      p(v-if="noResults" slot="body") No se encontraron resultados
      p(v-else slot="body") {{ tracks.length }} canciones encontradas
    lm-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.navbar
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
            lm-track(
              v-bind:class="{ 'is-active': t.id === selectedTrack }",
              v-bind:track="t",
              v-on:select="setSelectedTrack")
</template>

<script>
//@ se puede usar para declarar un alias a una ruta en la directiva alias de
//resolve en webpack.config.js
import trackService from '@/services/track'

import LmTrack from '@/components/Track.vue'

import LmLoader from '@/components/shared/Loader.vue'
import LmNotification from '@/components/shared/Notification.vue'


export default {
  name: 'app',
  components: { LmTrack, LmLoader, LmNotification },
  data () {
    return {
      searchQuery: "",
      tracks: [],
      isLoading: false,
      showNotification: false,
      noResults: false,
      selectedTrack: ""
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
      this.showNotification = false


      trackService.search(this.searchQuery)
        .then(res => {
          this.noResults = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
          this.showNotification = true
        });
    },
    setSelectedTrack(id) {
      this.selectedTrack = id
    }
  }
}
</script>

<style lang="scss">
  .results {
    padding: 2em;
  }
  .is-active {
    border: 3px #23d160 solid;
  }
</style>
