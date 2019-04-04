<template lang="pug">
  .card(v-if="track && track.album")
    .card-image
      figure.image.is-1by1
        img(v-bind:src="track.album.images[0].url")
    .card-content
      .media
        .media-left
          figure.image.is-48x48
            img(v-bind:src="track.album.images[0].url")
        .media-content
          p.title.is-6
            strong {{ track.name }}
          p.subtitle.is-6 {{ track.artists[0].name }}
      .content
        small {{ track.duration_ms | ms-to-mm }}
        nav.level
          .level-left
            button.level-item.button.is-primary(@click="selectTrack")
              span.icon.is-small ▶️
            button.level-item.button.is-warning(@click="goToTrack(track.id)")
              span.icon.is-small 🎵
</template>

<script>
export default {
  props: {
    track: {type:Object, required: true}
  },
   methods: {
     selectTrack() {
       if (!this.track.preview_url) { return }

       //evento que se quiere enviar al objeto padre
       //información que se quiere que el objeto padre reciba
       this.$emit('select', this.track.id)

       //Al seleccionar el track, emitir el evento 'set-track' a través de
       //event-bus y enviar el objeto track seleccionado
       this.$bus.$emit('set-track', this.track)
     },
     goToTrack(id) {
       if (!this.track.preview_url) { return }

       // Se utiliza push debido a que se utiliza el historial de HTML5 del
       // browser, el cual se maneja por medio de estados que se van 'push-eando'
       // (agregando), con ésto se mantiene la lógica entre lo que hace HTML5
       // y view-router.
       this.$router.push({ name: 'track', params: { id }})
     }
   }
}
</script>

<style lang="css" scoped>
</style>
