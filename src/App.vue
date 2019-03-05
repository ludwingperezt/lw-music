<template lang="pug">
  #app
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
          p
            small {{ searchMessage }}
      .container.results
        .columns(v-for="t in tracks")
          .column {{ t.name }} {{ t.artist }}
</template>

<script>
const tracks = [
  { name: "Blue cheese", artist:"Courtney Barnett ft. Kurt Vile" },
  { name: "Imagine", artist:"John Lennon" },
  { name: "All you need is love", artist:"The Beatles" },
  { name: "Time", artist:"Pink Floyd" },
  { name: "The End", artist:"The Doors" },
  { name: "She smiled sweetly", artist:"The Rolling Stones" },
  { name: "All along the watchtower", artist:"Bob Dylan" }
];
export default {
  name: 'app',
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
      console.log(this.searchQuery);
      this.tracks = tracks;
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
