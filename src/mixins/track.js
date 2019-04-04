const trackMixin = {
  methods: {
    selectTrack() {
      if (!this.track.preview_url) { return }

      //evento que se quiere enviar al objeto padre
      //información que se quiere que el objeto padre reciba
      this.$emit('select', this.track.id)

      //Al seleccionar el track, emitir el evento 'set-track' a través de
      //event-bus y enviar el objeto track seleccionado
      this.$bus.$emit('set-track', this.track)
    }
  }
}

export default trackMixin
