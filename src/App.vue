<template lang="pug">
  #app
    nav(class="navbar is-fixed-top has-shadow", role="navigation", aria-label="main navigation")
      .navbar-start
        a(class="navbar-item")
          img(src="./assets/logo-movies.jpg")
        div(id="search_form", class="navbar-item")
          .control
            input(id="search_field", class="input", type="text", placeholder="Busca tu peli, actor, actriz o director favorito")
      .navbar-end
        div(class="navbar-item has-dropdown")
          a(class="navbar-link") Usuario
            figure(class="image is-15x15")
              img(class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png")
          div(class="navbar-dropdown is-right")
            a(class="navbar-item") Salir

    .columns
      div(class="column is-narrow")
        aside(class="menu")
          .level
            div(class="level-item has-text-centered")
              span(class="icon")
                i(class="material-icons white md-48") home
          .level
            div(class="level-item has-text-centered")
              h1 Home

          .level
            div(class="level-item has-text-centered")
              span(class="icon")
                i(class="material-icons white md-48") trending_up
          .level
            div(class="level-item has-text-centered")
              h1 Trending

          .level
            div(class="level-item has-text-centered")
              span(class="icon")
                i(class="material-icons white md-48") favorite
          .level
            div(class="level-item has-text-centered")
              h1 Más likes

          .spacer

          div
            .level
              div(class="level-item has-text-centered")
                span(class="icon")
                  i(class="material-icons white md-48") settings
            .level
              div(class="level-item has-text-centered")
                h1 Ajustes

      .column
        .container
          h5(class="title is-5") Ahora en cines
          .columns
            div(class="tile column")
              img(class="imagen" src="./assets/imagen.jpg")
              .description
                h3 Lorem ipsum dolor sit amet
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia dui a sodales ullamcorper. Mauris ac leo velit. Etiam eget.
            div(class="tile column")
              img(class="imagen" src="./assets/imagen.jpg")
              .description
                h3 Lorem ipsum dolor sit amet
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia dui a sodales ullamcorper. Mauris ac leo velit. Etiam eget.
            div(class="tile column")
              img(class="imagen" src="./assets/imagen.jpg")
              .description
                h3 Lorem ipsum dolor sit amet
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia dui a sodales ullamcorper. Mauris ac leo velit. Etiam eget.
            div(class="tile column")
              img(class="imagen" src="./assets/imagen.jpg")
              .description
                h3 Lorem ipsum dolor sit amet
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia dui a sodales ullamcorper. Mauris ac leo velit. Etiam eget.
        .container
          h5(class="title is-5") Aclamadas por la crítica
          .columns
            div(class="tile column")
              img(class="imagen" src="./assets/imagen.jpg")
              .description
                h3 Lorem ipsum dolor sit amet
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia dui a sodales ullamcorper. Mauris ac leo velit. Etiam eget.
            div(class="tile column")
              img(class="imagen" src="./assets/imagen.jpg")
              .description
                h3 Lorem ipsum dolor sit amet
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia dui a sodales ullamcorper. Mauris ac leo velit. Etiam eget.
            div(class="tile column")
              img(class="imagen" src="./assets/imagen.jpg")
              .description
                h3 Lorem ipsum dolor sit amet
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia dui a sodales ullamcorper. Mauris ac leo velit. Etiam eget.
            div(class="tile column")
              img(class="imagen" src="./assets/imagen.jpg")
              .description
                h3 Lorem ipsum dolor sit amet
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia dui a sodales ullamcorper. Mauris ac leo velit. Etiam eget.

        .container
          h5(class="title is-5") No te debes perder
          .columns
            div(class="tile column")
              img(class="imagen" src="./assets/imagen.jpg")
              .description
                h3 Lorem ipsum dolor sit amet
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia dui a sodales ullamcorper. Mauris ac leo velit. Etiam eget.
            div(class="tile column")
              img(class="imagen" src="./assets/imagen.jpg")
              .description
                h3 Lorem ipsum dolor sit amet
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia dui a sodales ullamcorper. Mauris ac leo velit. Etiam eget.
            div(class="tile column")
              img(class="imagen" src="./assets/imagen.jpg")
              .description
                h3 Lorem ipsum dolor sit amet
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia dui a sodales ullamcorper. Mauris ac leo velit. Etiam eget.
            div(class="tile column")
              img(class="imagen" src="./assets/imagen.jpg")
              .description
                h3 Lorem ipsum dolor sit amet
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia dui a sodales ullamcorper. Mauris ac leo velit. Etiam eget.
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Registro estación Platzi',
      labelNombre: 'Nombre',
      labelApellido: 'Apellido',
      labelCargo: 'Cargo',
      textoBoton: 'ENVIAR'
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
