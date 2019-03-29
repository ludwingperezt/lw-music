<template lang="pug">
  section.hero.is-success
    .hero-head
      header.navbar
        .container
          .nav-start
            .nav-item
              strong 📻 Lw Music
          .nav-end.nav-menu
    .hero-body
      .container.has-text-centered
        h1.title Lw Music
        h2.subtitle Canciones que están Vue-nísimas
        lm-player
</template>

<script>
  import LmPlayer from '@/components/Player'

  export default {
    components: { LmPlayer }
  }
</script>
