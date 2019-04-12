<template lang="pug">
  .container(v-if="track && track.id")
    .columns
      .column.is-3.has-text-centered
        figure.media-left
          p.image
            img(:src="track.album.images[0].url")
          p.button-bar
            a.button.is-primary.is-large
              span.icon(@click="selectTrack") ▶️
      .column.is-8
        .panel
          .panel-heading
            h1.title {{ trackTitle }}
          .panel-block
            article.media
              .media-content
                .content
                  ul(v-for="(v, k) in track")
                    li
                      strong {{ k }}:&nbsp;
                      span {{ v }}
              nav.level
                .level-left
                  a.level-item
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import trackMixin from '@/mixins/track'

export default {
  mixins: [trackMixin],
  computed: {
    ...mapState(['track']),
    ...mapGetters(['trackTitle'])
  },
  created() {
    const id = this.$route.params.id

    //Si la canción no existe porque no se ha cargado o por si se ha reiniciado
    //la página, se llama a la API para obtener los datos de track.
    // Los objetos vacíos cuando son evaluados retornan true, por ello
    // se verifica si existe alguna propiedad del objeto, en este caso el id
    // o si la canción que está en memoria es distinta a la de la URL
    // se manda a llamar a la API
    if (!this.track || !this.track.id || this.track.id !== id) {
      this.getTrackById({ id })
      .then(() => { console.log('Track loaded') })
    }
  },
  methods: {
    ...mapActions(['getTrackById'])
  }
}
</script>

<style lang="scss" scoped>
.columns { margin: 20px; }
.button-bar { margin-top: 20px; }
</style>
