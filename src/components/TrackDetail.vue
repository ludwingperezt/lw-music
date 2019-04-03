<template lang="pug">
  .container
    div(v-show="isLoading")
      lw-loader-track
    .columns(v-show="!isLoading")
      .column.is-5.is-offset-4
        lw-track(:track="track")
</template>

<script>
import trackService from '@/services/track'
import LwTrack from '@/components/Track.vue'
import LwLoaderTrack from '@/components/shared/LoaderTrack.vue'

export default {
  components: { LwTrack, LwLoaderTrack },
  data() {
    return {
      track: {},
      isLoading: true
    }
  },
  created() {
    this.isLoading = true
    const id = this.$route.params.id
    trackService.getById(id)
    .then( res => {
      this.track = res
      this.isLoading = false
    })
  }
}
</script>

<style lang="scss" scoped>
.columns { margin: 20px; }
</style>
