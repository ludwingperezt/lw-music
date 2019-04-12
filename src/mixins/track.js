const trackMixin = {
  methods: {
    selectTrack() {
      if (!this.track.preview_url) { return }

      //Se cambia el event bus por el store de vuex
      this.$store.commit('setTrack', this.track)
    }
  }
}

export default trackMixin
