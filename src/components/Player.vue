<template lang="pug">
  .content(v-if="track && track.album")
    p
      img(:src="track.album.images[0].url")
    p
      strong {{ track.name }}
      small [{{ track.duration_ms | ms-to-mm }}]
    p
      audio(controls, :src="track.preview_url")
</template>

<script>
export default {
  data () {
    return {
      track: {}
    }
  },
  created() {
    // Por lo general el hook created se utiliza para suscribirse a eventos, ya
    // que se ejecuta una sola vez y se hace como uno de los primeros pasos en
    // la creación del componente.
    this.$bus.$on('set-track', (track) => {
      //recibe el track enviado por el componente Track por medio del plugin
      //event-bus
      this.track = track
    })
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 124px;
    border-radius: 50%;
  }
</style>
