<template lang="pug">
  section.hero.is-success
    .hero-head
      header.navbar
        .container
          .nav-start
            .nav-item
              strong 📻 Lw Music
          .nav-end.nav-menu
            a.nav.item(@click="selectLang('en')") 🇬🇧
            a.nav.item(@click="selectLang('es')") 🇪🇸
            router-link.nav-item(to="search") {{ $t("search") }}
            router-link.nav-item(to="about") {{ $t('about') }}
    .hero-body
      .container.has-text-centered
        h1.title Lw Music
        h2.subtitle Canciones que están Vue-nísimas
        lm-player
</template>

<script>
  import LmPlayer from '@/components/Player'

  export default {
    components: { LmPlayer },
    methods: {
      selectLang(lang) {
        this.$i18n.locale = lang
      }
    }
  }
</script>
